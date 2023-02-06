import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GitHubLink() {
  return (
    <Flex pt={"6"} px={"6"}>
      <Spacer flex="1" />
      <Flex flex="1" justifyContent="flex-end" alignItems={"center"}>
        <Link href={"https://github.com/apoorvlathey/storage-slots"} isExternal>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
      </Flex>
    </Flex>
  );
}
