import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Medication, AddAlertRounded, WavingHand, Handshake, AssignmentTurnedIn, HowToReg, Cancel, History, PersonSearch, LocalDrink, Coffee, Liquor, Today, SupervisedUserCircle, LocalDining, SentimentNeutral, SentimentVerySatisfied, SentimentVeryDissatisfied, MedicalInformation, Psychology, PsychologyAlt, AddTask, Wc } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { CareEventPayload } from "../../model/CareEventModel";
import FormatCareEventTimestamp from "../../util/FormatCareEventTimestamp";

export default function CustomisedTimelineItem(props: {
  payload: CareEventPayload;
  index: number;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align={props.index % 2 === 0 ? "left" : "right"}
        variant="body2"
      >
        {FormatCareEventTimestamp(props.payload.timestamp)}
      </TimelineOppositeContent>
      {BuildTimelineContent(props.payload)}
    </TimelineItem>
  );
}

function BuildTimelineContent(eventPayload: CareEventPayload) {
  const fluidDescription = `${eventPayload.fluid || 'fluid'} drink was ${eventPayload.observed ? 'observed' : 'not observed but recorded.'}`;
  const mealDesription = `${eventPayload.meal || 'Serving'} of ${eventPayload.note || 'food. Description not recorded.'}`;
  const moodDescription = `${eventPayload.mood || 'Mood'} - ${eventPayload.note || 'Description not recorded'}`;

  const itemTypes: any = {
    alert_raised: CustomEventContent('Alert raised', '', <AddAlertRounded color="secondary" fontSize="large"/>),
    alert_qualified: CustomEventContent('Alert qualified', '', <AddAlertRounded color="secondary" fontSize="large"/>),
    concern_raised: CustomEventContent('Concern raised', `${eventPayload.note || ''} - Severity: ${eventPayload.severity || 'not recorded'}`, <PsychologyAlt color="error" fontSize="large"/>),
    check_in: CustomEventContent('Check in', '', <WavingHand color="primary" fontSize="large"/>),
    check_out: CustomEventContent('Check out', '', <Handshake color="primary" fontSize="large"/>),
    task_completed: CustomEventContent('Task completed', '', <AssignmentTurnedIn sx={{ color: 'secondary.contrastText'}} fontSize="large"/>),
    visit_completed: CustomEventContent('Visit completed', '', <HowToReg color="primary" fontSize="large"/>),
    visit_cancelled: CustomEventContent('Visit cancelled', '', <Cancel color="primary" fontSize="large"/>),
    task_completion_reverted: CustomEventContent('Task completion reverted', '', <History color="primary" fontSize="large"/>),
    task_schedule_created: CustomEventContent('Task schedule created', eventPayload.note || '', <AddTask color="primary" fontSize="large"/>),
    medication_schedule_updated: CustomEventContent('Medication schedule updated', '', <Today color="primary" fontSize="large"/>),
    medication_schedule_created: CustomEventContent('Medication schedule created', eventPayload.note || '', <Today color="primary" fontSize="large"/>),
    regular_medication_taken: CustomEventContent('Regular medication taken', eventPayload.note || '', <Medication color="primary" fontSize="large"/>),
    regular_medication_not_taken: CustomEventContent('Regular medication not taken', eventPayload.note || '', <Medication color="primary" fontSize="large"/>),
    regular_medication_partially_taken: CustomEventContent('Regular medication partially taken', eventPayload.note || '', <Medication color="primary" fontSize="large"/>),
    regular_medication_maybe_taken: CustomEventContent('Regular medication maybe taken', eventPayload.note || '', <Medication color="primary" fontSize="large"/>),
    no_medication_observation_received: CustomEventContent('No medication observed', '', <Medication color="warning" fontSize="large"/>),
    mood_observation: CustomEventContent('Mood observation', moodDescription, CustomMoodIcon(eventPayload.mood || 'okay')),
    incontinence_pad_observation: CustomEventContent('Incontinence pad observation', eventPayload.note || '', <SupervisedUserCircle color="primary" fontSize="large"/>),
    physical_health_observation: CustomEventContent('Physical health observation', eventPayload.note || '', <MedicalInformation color="primary" fontSize="large"/>),
    mental_health_observation: CustomEventContent('Mental health observation', eventPayload.note || '', <Psychology color="primary" fontSize="large"/>),
    general_observation: CustomEventContent('General observation', eventPayload.note || '', <PersonSearch color="primary" fontSize="large"/>),
    fluid_intake_observation: CustomEventContent('Fluid intake observation', fluidDescription, CustomFluidIcon(eventPayload.fluid || 'regular')),
    food_intake_observation: CustomEventContent('Food intake observation', mealDesription, <LocalDining color="primary" fontSize="large"/>),
    catheter_observation: CustomEventContent('Catheter observation', eventPayload.note || '', <SupervisedUserCircle />),
    toilet_visit_recorded: CustomEventContent('Toilet visit recorded', eventPayload.note || '', <Wc color="primary" fontSize="large"/>)
  };
  return itemTypes[eventPayload.event_type] || undefined;
}

function CustomFluidIcon(fluidType: string) {
  const fluidIcons: any = {
    regular: <LocalDrink color="info" fontSize="large"/>,
    caffeinated: <Coffee sx={{ color: 'brown'}} fontSize="large"/>,
    alcoholic: <Liquor sx={{ color: 'brown'}} fontSize="large"/>
  }
  return fluidIcons[fluidType] || fluidIcons['regular'];
}

function CustomMoodIcon(moodType: string) {
  const moodIcons: any = {
    happy: <SentimentVerySatisfied color="success" fontSize="large"/>,
    okay: <SentimentNeutral color="primary" fontSize="large"/>,
    sad: <SentimentVeryDissatisfied color="secondary" fontSize="large"/>,
  }
  return moodIcons[moodType] || moodIcons['okay'];
}


function CustomEventContent(title: string, description: string, Icon: JSX.Element) {
  const contentStyle = description !== '' ? { py: "12px", px: 2 } : { m: "auto 0" };
  return (
    <>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot sx={{ m: '7px', backgroundColor: 'primary.contrastText'}}>
        {Icon}
        {/* <Icon color="primary" fontSize="large"/> */}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={contentStyle}>
      <Typography variant="h6" component="span">
        {title}
      </Typography>
      <Typography>{description || ''}</Typography>
    </TimelineContent>
  </>
  )
}
