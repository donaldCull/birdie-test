import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import useFetchDataSource from "../../hooks/useFetchDataSource";
import { CareRecipientDataFetch } from "../../model/CareRecipientDataFetch";

export default function CareRecipientSelector(props: {
  careRecipient: string;
  setCareRecipient: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { careRecipient, setCareRecipient } = props;
  const { isLoading, data }: CareRecipientDataFetch =
    useFetchDataSource("careRecipient/all");
  const handleChange = (event: SelectChangeEvent) => {
    setCareRecipient(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel color="secondary">Care recipient</InputLabel>
      <Select
        data-testid="care-recipient"
        fullWidth
        value={careRecipient}
        onChange={handleChange}
        label="Care recipient"
      >
        <MenuItem value="">Select a care recipient</MenuItem>
        {isLoading ? (
          <MenuItem value="loading">Loading care recipients</MenuItem>
        ) : (
          data?.map((i) => (
            <MenuItem key={i.id} value={i.id}>
              {i.name}
            </MenuItem>
          ))
        )}
      </Select>
      <FormHelperText>Select a person to see their activity</FormHelperText>
    </FormControl>
  );
}
