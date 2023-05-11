import { Timeline } from "@mui/lab";
import useFetchDataSource from "../../hooks/useFetchDataSource";
import { Box, CircularProgress } from "@mui/material";
import CustomisedTimelineItem from "./TimelineItem";
import { CareEventModel } from "../../model/CareEventModel";
import { CareRecipientDataFetch } from "../../model/CareRecipientDataFetch";

export default function CustomizedTimeline(props: { careRecipient: string }) {
  const { isLoading, data }: CareRecipientDataFetch = useFetchDataSource(
    `careEvent/careRecipient/${props.careRecipient}`
  );
  return isLoading ? (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" size={"5rem"} />
    </Box>
  ) : (
    <Timeline position="alternate">
      {data.map((e: CareEventModel, i: number) =>{
        return <CustomisedTimelineItem key={e.id} payload={e.payload} index={i} />
      })}
    </Timeline>
  );
}
