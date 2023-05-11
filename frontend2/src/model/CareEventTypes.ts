export interface CareEventTypes {
  alert_raised: JSX.Element;
  alert_qualified: JSX.Element;
  concern_raised: JSX.Element;
  check_in: JSX.Element;
  check_out: JSX.Element;
  task_completed: JSX.Element;
  visit_completed: JSX.Element;
  visit_cancelled: JSX.Element;
  task_completion_reverted: JSX.Element;
  task_schedule_created: JSX.Element;
  medication_schedule_updated: JSX.Element;
  medication_schedule_created: JSX.Element;
  regular_medication_taken: JSX.Element;
  regular_medication_not_taken: JSX.Element;
  regular_medication_partially_taken: JSX.Element;
  regular_medication_maybe_taken: JSX.Element;
  no_medication_observation_received: JSX.Element;
  mood_observation: JSX.Element;
  incontinence_pad_observation: JSX.Element;
  physical_health_observation: JSX.Element;
  mental_health_observation: JSX.Element;
  general_observation: JSX.Element;
  fluid_intake_observation: JSX.Element;
  food_intake_observation: JSX.Element;
  catheter_observation: JSX.Element;
  toilet_visit_recorded: JSX.Element;
}