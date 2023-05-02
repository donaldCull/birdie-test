export interface CareEventModel {
  payload: any;
  alert_id?: string;
  task_instance_id?: string;
  visit_id?: string;
  caregiver_id?: string;
  payload_as_text: string;
  rejected_event_id?: string;
  observation_event_id?: string;
  timestamp: string;
  id: string;
  event_type: string;
  care_recipient_id: string;
}
