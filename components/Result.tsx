import { Box, Heading, Container, Text } from "@chakra-ui/react";

export default function Result({
  result,
}: {
  result: {
    value?: string;
    storageSlot?: string;
    error?: string;
  };
}) {
  return (
    <Container minW={"50%"}>
      <Heading fontSize={"2xl"}>Result:</Heading>
      <Box mt={4}>
        {!result.error ? (
          <>
            <Box>
              <Text color="whiteAlpha.700">Value:</Text>
              <Text>{result.value}</Text>
            </Box>
            <Box mt={2}>
              <Text color="whiteAlpha.700">At storage slot:</Text>
              <Text>{result.storageSlot}</Text>
            </Box>
          </>
        ) : (
          <Text>Error: {result.error}</Text>
        )}
      </Box>
    </Container>
  );
}
