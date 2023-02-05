import { SingleValue } from "chakra-react-select";

export interface NetworkOption {
  name: string;
  rpcs: string[];
  chainId: number;
}

interface SelectedNetworkOption {
  label: string;
  value: number;
}

export type SelectedNetworkOptionState = SingleValue<SelectedNetworkOption>;
