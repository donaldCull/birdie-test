import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useFetchDataSource from "../../hooks/useFetchDataSource";
import { CareRecipientModel } from "../../model/CareRecipientModel";

const CareRecipientSelector = (props: {
  careRecipient: any,
  setCareRecipient: any,
}) => {
  const { careRecipient, setCareRecipient } = props;
  const { isLoading, data } = useFetchDataSource('careRecipient/all');

  const handleChange = (event: SelectChangeEvent) => {
    setCareRecipient(event.target.value as string);
  }

  const renderMenuItems = (loading: boolean, itemData: CareRecipientModel[]) => {
    return loading ? <MenuItem value='loading'>Loading care recipients</MenuItem> : 
    itemData.map(i => {
      return <MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>
    })
  }
  
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Care recipient</InputLabel>
      <Select
        data-testid="care-recipient"
        fullWidth
        value={careRecipient}
        onChange={handleChange}
        label='Care recipient'
      >
        <MenuItem value=''>Select a care recipient</MenuItem>
        {renderMenuItems(isLoading, data)}
      </Select>
      <FormHelperText>Select a person to see their activity</FormHelperText>
    </FormControl>
  );

}

export default CareRecipientSelector;