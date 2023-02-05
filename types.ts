import { SingleValue } from "chakra-react-select";

export interface NetworkOption {
  name: string;
  rpcs: string[];
  chainId: number;
}

export interface SelectedOption {
  label: string;
  value: number | string;
}

export type SelectedOptionState = SingleValue<SelectedOption>;
