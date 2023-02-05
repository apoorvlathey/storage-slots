import { NetworkOption, SelectedOptionState } from "@/types";
import DarkSelect from "./DarkSelect";

interface Props {
  primaryNetworkOptions: NetworkOption[];
  secondaryNetworkOptions: NetworkOption[];
  selectedNetworkOption: SelectedOptionState;
  setSelectedNetworkOption: (value: SelectedOptionState) => void;
}

export default function SelectNetwork({
  primaryNetworkOptions,
  secondaryNetworkOptions,
  selectedNetworkOption,
  setSelectedNetworkOption,
}: Props) {
  return (
    <DarkSelect
      placeholder="Select Chain..."
      selectedOption={selectedNetworkOption}
      setSelectedOption={setSelectedNetworkOption}
      options={[
        {
          label: "",
          options: primaryNetworkOptions.map((network) => ({
            label: network.name,
            value: network.chainId,
          })),
        },
        {
          label: "",
          options: secondaryNetworkOptions.map((network) => ({
            label: network.name,
            value: network.chainId,
          })),
        },
      ]}
    />
  );
}
