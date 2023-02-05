import { Center, HStack, Text } from "@chakra-ui/react";
import { SelectedOptionState } from "@/types";
import DarkSelect from "./DarkSelect";

interface Props {
  EIP1967Options: string[];
  selectedEIP1967Slot: SelectedOptionState;
  setSelectedEIP1967Slot: (value: SelectedOptionState) => void;
}

const Txt = ({ str, colorScheme }: { str: string; colorScheme: string }) => (
  <Text
    style={{
      marginLeft: "0",
    }}
    color={`${colorScheme}.300`}
  >
    {str}
  </Text>
);

export default function EIP1967Select({
  EIP1967Options,
  selectedEIP1967Slot,
  setSelectedEIP1967Slot,
}: Props) {
  return (
    <Center mt={10}>
      <HStack fontWeight={"bold"}>
        <Txt colorScheme="orange" str={`bytes32(`} />
        <Txt colorScheme="pink" str={`uint256(`} />
        <Txt colorScheme="red" str={`keccak256(`} />
        <Txt colorScheme="green" str={`'eip1967.proxy.`} />
        <DarkSelect
          boxProps={{
            minW: "14rem",
          }}
          isCreatable
          selectedOption={selectedEIP1967Slot}
          setSelectedOption={setSelectedEIP1967Slot}
          options={EIP1967Options.map((str) => ({
            label: str,
            value: str,
          }))}
        />
        <Txt colorScheme="green" str={`'`} />
        <Txt colorScheme="red" str={`)`} />
        <Txt colorScheme="pink" str={`) - 1`} />
        <Txt colorScheme="orange" str={`)`} />
      </HStack>
    </Center>
  );
}
