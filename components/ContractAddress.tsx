import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function ContractAddress({
  address,
  setAddress,
}: {
  address?: string;
  setAddress: (value: string) => void;
}) {
  return (
    <FormControl mt={16}>
      <FormLabel>Contract Address</FormLabel>
      <Input
        autoComplete="off"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        bg={"blackAlpha.300"}
      />
    </FormControl>
  );
}
