import { Center, HStack } from "@chakra-ui/react";
import Tab from "./Tab";

const tabs = ["EIP-1967", "Custom"];

interface Props {
  selectedTabIndex: number;
  setSelectedTabIndex: (value: number) => void;
}

export default function TabsSelector({
  selectedTabIndex,
  setSelectedTabIndex,
}: Props) {
  return (
    <Center flexDir="column">
      <HStack
        mt="1rem"
        minH="3rem"
        px="1.5rem"
        spacing={"8"}
        bg="blackAlpha.400"
        border="1px solid"
        borderColor={"whiteAlpha.500"}
        borderRadius="xl"
      >
        {tabs.map((t, i) => (
          <Tab
            key={i}
            tabIndex={i}
            selectedTabIndex={selectedTabIndex}
            setSelectedTabIndex={setSelectedTabIndex}
          >
            {t}
          </Tab>
        ))}
      </HStack>
    </Center>
  );
}
