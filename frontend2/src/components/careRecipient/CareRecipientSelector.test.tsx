import { cleanup, render, screen } from '@testing-library/react';
import CareRecipientSelector from './CareRecipientSelector';
import useFetchDataSource from '../../hooks/useFetchDataSource';
jest.mock('../../hooks/useFetchDataSource');

describe('CareRecipientSelector', () => {
  afterAll(() => cleanup);
  test('should render some items in the selector', async () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockUseFetchDataSource.mockReturnValue({ isLoading: false, data: [{id: '1234', name: 'test'}]})
    render(<CareRecipientSelector careRecipient={''} setCareRecipient={null} />)
    expect(screen.getByText("Select a person to see their activity")).toBeInTheDocument();    
  })
  test('should do something', async () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    
    mockUseFetchDataSource.mockReturnValue({ isLoading: false, data: [{id: '1234', name: 'donald'}]})
    render(<CareRecipientSelector careRecipient={''} setCareRecipient={null} />)
    expect(screen.getByTestId('care-recipient').childNodes.length).toEqual(3);    
  })
 })