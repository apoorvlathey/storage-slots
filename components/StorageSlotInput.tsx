import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  storageSlot?: string;
  setStorageSlot: (value: string) => void;
}

export default function StorageSlotInput({
  storageSlot,
  setStorageSlot,
}: Props) {
  return (
    <Container mt={10}>
      <FormControl>
        <FormLabel>Enter storage slot:</FormLabel>
        <Input
          autoComplete="off"
          value={storageSlot}
          onChange={(e) => {
            setStorageSlot(e.target.value);
          }}
          bg={"blackAlpha.300"}
          placeholder="123 or 0xabc123..."
        />
      </FormControl>
    </Container>
  );
}
