import { cleanup, render, screen } from "@testing-library/react"
import CustomisedTimelineItem from "./TimelineItem"
import { CareEventPayload } from "../../model/CareEventModel"
import { CareEventTypes } from "../../model/CareEventTypes"

describe('TimelineItem fluid intake', () => {
  afterAll(() => cleanup);

  const mockPayload: CareEventPayload = {
    id: "123",
    timestamp: "2019-05-11T17:07:15.489Z",
    event_type: "fluid_intake_observation",
    fluid: "caffeinated",
    observed: true,
  }

  test('should render a coffee fluid intake timeline item', () => {
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("caffeinated drink was observed")).toBeInTheDocument()
    expect(screen.getByText("Fluid intake observation")).toBeInTheDocument()
    expect(screen.getByTestId('CoffeeIcon')).toBeInTheDocument()
    mockPayload.observed = false;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("caffeinated drink was not observed but recorded.")).toBeInTheDocument()
   })

  test('should render a alcohol fluid intake timeline item', () => {
    mockPayload.fluid = 'alcoholic';
    mockPayload.observed = false;
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("alcoholic drink was not observed but recorded.")).toBeInTheDocument()
    expect(screen.getByText("Fluid intake observation")).toBeInTheDocument()
    expect(screen.getByTestId('LiquorIcon')).toBeInTheDocument()
    mockPayload.observed = true;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("alcoholic drink was observed")).toBeInTheDocument()
   })

  test('should render a regular fluid intake timeline item', () => {
    mockPayload.fluid = 'regular';
    mockPayload.observed = false;
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("regular drink was not observed but recorded.")).toBeInTheDocument()
    expect(screen.getByText("Fluid intake observation")).toBeInTheDocument()
    expect(screen.getByTestId('LocalDrinkIcon')).toBeInTheDocument()
    mockPayload.observed = true;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("regular drink was observed")).toBeInTheDocument()
    mockPayload.fluid = undefined;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText("fluid drink was observed")).toBeInTheDocument()
    expect(screen.getByTestId('LocalDrinkIcon')).toBeInTheDocument()
   })
 })

 describe('TimelineItem Mood observation', () => {
  afterAll(() => cleanup);
  const mockPayload: CareEventPayload = {
    id: "123",
    timestamp: "2019-05-11T17:07:15.489Z",
    event_type: "mood_observation",
    mood: "happy",
    note: "Was happy today",
  }

  test('should render a happy mood observation', () => {
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>);
    expect(screen.getByText('happy - Was happy today')).toBeInTheDocument();
    expect(screen.getByText('Mood observation')).toBeInTheDocument();
    expect(screen.getByTestId('SentimentVerySatisfiedIcon')).toBeInTheDocument();
    mockPayload.note = undefined;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText('happy - Description not recorded')).toBeInTheDocument();
   })

  test('should render an okay mood observation', () => {
    mockPayload.mood = 'okay';
    mockPayload.note = 'Was feeling okay';
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>);
    expect(screen.getByText('okay - Was feeling okay')).toBeInTheDocument();
    expect(screen.getByText('Mood observation')).toBeInTheDocument();
    expect(screen.getByTestId('SentimentNeutralIcon')).toBeInTheDocument();
    mockPayload.note = undefined;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText('okay - Description not recorded')).toBeInTheDocument();
   })

  test('should render a sad mood observation', () => {
    mockPayload.mood = 'sad';
    mockPayload.note = 'Was upset';
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>);
    expect(screen.getByText('sad - Was upset')).toBeInTheDocument();
    expect(screen.getByText('Mood observation')).toBeInTheDocument();
    expect(screen.getByTestId('SentimentVeryDissatisfiedIcon')).toBeInTheDocument();
    mockPayload.note = undefined;
    rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    expect(screen.getByText('sad - Description not recorded')).toBeInTheDocument();
   })
  })

  describe('TimelineItem meal intake observation', () => {
    const mockPayload: CareEventPayload = {
      id: "123",
      timestamp: "2019-05-11T17:07:15.489Z",
      event_type: "food_intake_observation",
      meal: "Meal",
      note: "Chips n cheese n gravy",
    }

    test('should render food intake observation', () => {
      const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
      expect(screen.getByText('Meal of Chips n cheese n gravy')).toBeInTheDocument();
      expect(screen.getByText('Food intake observation')).toBeInTheDocument();
      expect(screen.getByTestId('LocalDiningIcon')).toBeInTheDocument();
      mockPayload.meal = undefined;
      rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
      expect(screen.getByText('Serving of Chips n cheese n gravy')).toBeInTheDocument();
     })    
   })

describe('Simple TimelineItems', () => {
  afterAll(() => cleanup);
  const itemTypes: CareEventTypes = {
    alert_raised: <></>,
    alert_qualified: <></>,
    concern_raised: <></>,
    check_in: <></>,
    check_out: <></>,
    task_completed: <></>,
    visit_completed: <></>,
    visit_cancelled: <></>,
    task_completion_reverted: <></>,
    task_schedule_created: <></>,
    medication_schedule_updated: <></>,
    medication_schedule_created: <></>,
    regular_medication_taken: <></>,
    regular_medication_not_taken: <></>,
    regular_medication_partially_taken: <></>,
    regular_medication_maybe_taken: <></>,
    no_medication_observation_received: <></>,
    mood_observation: <></>,
    incontinence_pad_observation: <></>,
    physical_health_observation: <></>,
    mental_health_observation: <></>,
    general_observation: <></>,
    fluid_intake_observation: <></>,
    food_intake_observation: <></>,
    catheter_observation: <></>,
    toilet_visit_recorded: <></>
  }
  const mockPayload: CareEventPayload = {
    id: "123",
    timestamp: "2019-05-11T17:07:15.489Z",
    event_type: "food_intake_observation",
    note: undefined,
  }

  test('should render timelineitems', () => {
    const { rerender } = render(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
    for (const itemType in itemTypes) {
      mockPayload.event_type = itemType;
      const title = (itemType.charAt(0).toUpperCase() + itemType.slice(1)).replaceAll('_', ' ');
      rerender(<CustomisedTimelineItem payload={mockPayload} index={1}/>)
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(/Saturday, 11 May 2019 at 05:07 pm/i)).toBeInTheDocument();
    }
   });
 })