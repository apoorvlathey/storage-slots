import {
  Flex,
  VStack,
  Heading,
  Spacer,
  Link,
  Text,
  Alert,
  HStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Social = ({ icon, link }: { icon: IconProp; link: string }) => {
  return (
    <Link href={link} isExternal>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Link>
  );
};

export default function Footer() {
  return (
    <Flex mt={"6rem"} py="4" borderTop="2px" borderTopColor={"gray.400"}>
      <Spacer flex="1" />
      <VStack>
        <Heading size="md">
          <HStack>
            <Text>Built by:</Text>{" "}
            <Social icon={faTwitter} link="https://twitter.com/apoorvlathey" />
            <Link href="https://twitter.com/apoorvlathey" isExternal>
              <Text decoration="underline" display="inline">
                @apoorvlathey
              </Text>
            </Link>
          </HStack>
        </Heading>
        <Box pt={4}>
          <Alert bg="blackAlpha.400" shadow={"2xl"} color="white" rounded="lg">
            <Stack direction={{ base: "column", md: "row" }}>
              <Box>Found the project helpful?</Box>
              <HStack>
                <Text>Support at</Text>
                <Link href="https://etherscan.io/address/apoorv.eth" isExternal>
                  <HStack fontWeight="bold" textDecor="underline">
                    <Text>apoorv.eth</Text>
                    <ExternalLinkIcon />
                  </HStack>
                </Link>
              </HStack>
            </Stack>
          </Alert>
        </Box>
      </VStack>
      <Spacer flex="1" />
    </Flex>
  );
}
