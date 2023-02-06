import { Box, Heading, Container } from "@chakra-ui/react";

export default function Result({ result }: { result: string }) {
  return (
    <Container minW={"50%"}>
      <Heading fontSize={"2xl"}>Result:</Heading>
      <Box mt={4}>{result}</Box>
    </Container>
  );
}
