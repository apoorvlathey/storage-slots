import { Box, ColorProps } from "@chakra-ui/react";
import { Select as RSelect } from "chakra-react-select";
import { NetworkOption, SelectedNetworkOptionState } from "@/types";

interface Props {
  primaryNetworkOptions: NetworkOption[];
  secondaryNetworkOptions: NetworkOption[];
  selectedNetworkOption: SelectedNetworkOptionState;
  setSelectedNetworkOption: (value: SelectedNetworkOptionState) => void;
}

const selectBg: ColorProps["color"] = "blackAlpha.300";
const selectHover: ColorProps["color"] = "whiteAlpha.200";

export default function SelectNetwork({
  primaryNetworkOptions,
  secondaryNetworkOptions,
  selectedNetworkOption,
  setSelectedNetworkOption,
}: Props) {
  return (
    <Box mt={4} cursor="pointer">
      <RSelect
        options={[
          {
            label: "",
            options: primaryNetworkOptions.map((network) => ({
              label: network.name,
              value: network.chainId,
            })),
          },
          {
            label: "",
            options: secondaryNetworkOptions.map((network) => ({
              label: network.name,
              value: network.chainId,
            })),
          },
        ]}
        value={selectedNetworkOption}
        onChange={setSelectedNetworkOption}
        placeholder="Select chain..."
        size="md"
        tagVariant="solid"
        chakraStyles={{
          groupHeading: (provided, state) => ({
            ...provided,
            h: "1px",
            borderTop: "1px solid white",
            bg: selectBg,
          }),
          menuList: (provided) => ({
            ...provided,
            bg: selectBg,
          }),
          option: (provided) => ({
            ...provided,
            color: "white",
            bg: selectBg,
            _hover: {
              bg: selectHover,
            },
          }),
        }}
        closeMenuOnSelect
        useBasicStyles
      />
    </Box>
  );
}
