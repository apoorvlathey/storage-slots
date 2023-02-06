import { useState, useEffect } from "react";
import { Box, Heading, Container, Text, HStack } from "@chakra-ui/react";
import { ethers } from "ethers";
import { SelectedOptionState } from "@/types";
import DarkSelect from "./DarkSelect";

const formatOptions = ["hex", "address", "uint256", "bool", "int256"];

export default function Result({
  result,
}: {
  result: {
    value?: string;
    storageSlot?: string;
    error?: string;
  };
}) {
  const [selectedFormatOption, setSelectedFormatOption] =
    useState<SelectedOptionState>({
      label: formatOptions[0],
      value: formatOptions[0],
    });
  const [formattedResult, setFormattedResult] = useState<string>();

  useEffect(() => {
    if (result.value) {
      if (selectedFormatOption?.value === "hex") {
        setFormattedResult(result.value);
      } else {
        setFormattedResult(
          ethers.AbiCoder.defaultAbiCoder()
            .decode([selectedFormatOption!.value.toString()], result.value)[0]
            .toString()
        );
      }
    }
  }, [selectedFormatOption, result]);

  return (
    <Container mt={4} minW={"50%"}>
      <Box>
        {!result.error ? (
          <>
            <HStack>
              <Heading fontSize={"3xl"} color="whiteAlpha.800">
                Result
              </Heading>
              <DarkSelect
                boxProps={{
                  w: "8rem",
                }}
                isCreatable
                selectedOption={selectedFormatOption}
                setSelectedOption={setSelectedFormatOption}
                options={formatOptions.map((str) => ({
                  label: str,
                  value: str,
                }))}
              />
            </HStack>
            <HStack mt={4}>
              <Text color="whiteAlpha.700">Value:</Text>
              <Text mt={2}>{formattedResult}</Text>
            </HStack>

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
