import { useState } from "react";
import { Button, Center } from "@chakra-ui/react";

export default function Query({ query }: { query: () => {} }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Center mt={8}>
      <Button
        color="white"
        bg={"blackAlpha.400"}
        _hover={{
          bg: "blackAlpha.100",
        }}
        border="1px solid"
        borderColor={"whiteAlpha.500"}
        onClick={async () => {
          setIsLoading(true);
          try {
            await query();
          } catch {}
          setIsLoading(false);
        }}
        isLoading={isLoading}
      >
        Query
      </Button>
    </Center>
  );
}
