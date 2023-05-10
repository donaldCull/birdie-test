export interface CareEventModel {
  payload: CareEventPayload;
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

export interface CareEventPayload {
  id: string;
  timestamp: string;
  event_type: string;
  note?: string;
  fluid?: string;
  mood?: string;
  meal?: string;
  observed?: boolean;
  severity?: string;
}