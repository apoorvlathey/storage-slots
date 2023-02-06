import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";
import { Heading, Box, Container } from "@chakra-ui/react";
import networksList from "evm-rpcs-list";
import { ethers } from "ethers";
import ContractAddress from "@/components/ContractAddress";
import { NetworkOption, SelectedOptionState } from "@/types";
import SelectNetwork from "@/components/SelectNetwork";
import TabsSelector from "@/components/TabsSelector";
import EIP1967Select from "@/components/EIP1967Select";
import Result from "@/components/Result";
import Query from "@/components/Query";
import StorageSlotInput from "@/components/StorageSlotInput";
import Footer from "@/components/Footer";
import GitHubLink from "@/components/GitHubLink";
import MetaHead from "@/components/MetaHead";

interface Props {
  primaryNetworkOptions: NetworkOption[];
  secondaryNetworkOptions: NetworkOption[];
  allNetworksOptions: NetworkOption[];
}

const EIP1967Options = ["implementation", "admin", "beacon", "rollback"];

const Home: NextPage<Props> = ({
  primaryNetworkOptions,
  secondaryNetworkOptions,
}) => {
  const [address, setAddress] = useState<string>();
  const [selectedNetworkOption, setSelectedNetworkOption] =
    useState<SelectedOptionState>({
      label: networksList[1].name, // Ethereum Mainnet
      value: 1,
    });
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedEIP1967Slot, setSelectedEIP1967Slot] =
    useState<SelectedOptionState>({
      label: EIP1967Options[0],
      value: EIP1967Options[0],
    });
  const [storageSlot, setStorageSlot] = useState<string>();
  const [result, setResult] = useState<{
    value?: string;
    storageSlot?: string;
    error?: string;
  }>();

  const query = async () => {
    // validate address
    if (!ethers.isAddress(address)) {
      setResult({ error: "Address is invalid" });
      return;
    }

    const provider = new ethers.JsonRpcProvider(
      networksList[selectedNetworkOption!.value].rpcs[0]
    );
    let _storageSlot =
      selectedTabIndex === 0
        ? getEIP1967StorageSlot(selectedEIP1967Slot!.value.toString())
        : storageSlot;

    if (!_storageSlot) {
      setResult({ error: "Storage slot not entered." });
      return;
    }

    try {
      const res = await provider.getStorage(address, _storageSlot);

      _storageSlot = _storageSlot.toString(16);
      // add 0x in the beginning if doesn't exist (as returned via getEIP1967StorageSlot)
      if (_storageSlot.substring(0, 2) !== "0x") {
        _storageSlot = `0x${_storageSlot}`;
      }

      setResult({
        value: res,
        storageSlot: _storageSlot,
      });
    } catch (e) {
      setResult({
        error: "Invalid storage slot entered",
      });
    }
  };

  const getEIP1967StorageSlot = (key: string) => {
    const khash = ethers.keccak256(ethers.toUtf8Bytes(`eip1967.proxy.${key}`));
    const num = BigInt(khash);
    const storageSlot = num - BigInt(1);
    return storageSlot;
  };

  return (
    <>
      <MetaHead />
      <GitHubLink />
      <Box minW={["0", "0", "2xl", "2xl"]}>
        <Heading
          textAlign="center"
          pt="2rem"
          fontFamily="Poppins"
          fontSize="5xl"
        >
          Query Storage Slot
        </Heading>
        <Container>
          <ContractAddress address={address} setAddress={setAddress} />
          <SelectNetwork
            primaryNetworkOptions={primaryNetworkOptions}
            secondaryNetworkOptions={secondaryNetworkOptions}
            selectedNetworkOption={selectedNetworkOption}
            setSelectedNetworkOption={setSelectedNetworkOption}
          />
        </Container>
        <TabsSelector
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
        />
        {(() => {
          switch (selectedTabIndex) {
            case 0:
              return (
                <EIP1967Select
                  EIP1967Options={EIP1967Options}
                  selectedEIP1967Slot={selectedEIP1967Slot}
                  setSelectedEIP1967Slot={setSelectedEIP1967Slot}
                />
              );
            case 1:
              return (
                <StorageSlotInput
                  storageSlot={storageSlot}
                  setStorageSlot={setStorageSlot}
                />
              );
          }
        })()}
        <Query query={query} />
        {(result?.value || result?.error) && <Result result={result} />}
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const primaryNetworkIds = [
    1, // ETH Mainnet
    42161, // Arbitrum One
    43114, // Avalanche
    56, // BSC
    250, // Fantom Opera
    5, // Goerli Testnet
    100, // Gnosis
    10, // Optimism
    137, // Polygon
  ];
  const primaryNetworkOptions = primaryNetworkIds.map((id) => {
    return { chainId: id, ...networksList[id.toString()] };
  });
  const secondaryNetworkOptions = Object.entries(networksList)
    .filter((id) => !primaryNetworkIds.includes(parseInt(id[0])))
    .map((arr) => {
      return {
        chainId: parseInt(arr[0]),
        name: arr[1].name,
        rpcs: arr[1].rpcs,
      };
    });
  const allNetworksOptions = [
    ...primaryNetworkOptions,
    ...secondaryNetworkOptions,
  ];

  return {
    props: {
      primaryNetworkOptions,
      secondaryNetworkOptions,
      allNetworksOptions,
    },
  };
};

export default Home;
