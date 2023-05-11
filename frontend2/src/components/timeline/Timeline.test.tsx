import { cleanup, render, screen } from "@testing-library/react"
import CustomizedTimeline from "./Timeline"
import useFetchDataSource from "../../hooks/useFetchDataSource";
import { CareRecipientDataFetch } from "../../model/CareRecipientDataFetch";
jest.mock('../../hooks/useFetchDataSource');


describe('Timeline', () => {
  const mockEvents: CareRecipientDataFetch = {
    isLoading: false,
    data: [
      {
        payload: {
          id: '1234',
          timestamp: '2019-05-11T17:07:15.489Z',
          event_type: 'food_intake_observation'
        },
        payload_as_text: '',
        timestamp: '2019-05-11T17:07:15.489Z',
        id: '4321',
        event_type: 'food_intake_observation',
        care_recipient_id: '99999'
      }
    ]
  }
  afterAll(() => cleanup);

  test('should show spinner', () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockEvents.isLoading = true;
    mockUseFetchDataSource.mockReturnValue(mockEvents)
    render(<CustomizedTimeline careRecipient="1234"/>);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
   })

  test('should not show spinner', () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockEvents.isLoading = false;
    mockUseFetchDataSource.mockReturnValue(mockEvents)

    render(<CustomizedTimeline careRecipient="1234"/>);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    expect(screen.getByText('Food intake observation')).toBeInTheDocument();
   })
 })