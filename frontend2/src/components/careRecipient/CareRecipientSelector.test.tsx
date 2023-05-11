import { cleanup, render, screen } from '@testing-library/react';
import CareRecipientSelector from './CareRecipientSelector';
import useFetchDataSource from '../../hooks/useFetchDataSource';
import { CareRecipientDataFetch } from '../../model/CareRecipientDataFetch';
jest.mock('../../hooks/useFetchDataSource');

describe('CareRecipientSelector', () => {
  const mockDataFetch: CareRecipientDataFetch = {
    isLoading: true,
    data: null
  } 
  afterAll(() => cleanup);
  test('should render some items in the selector', async () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockUseFetchDataSource.mockReturnValue(mockDataFetch)

    render(<CareRecipientSelector careRecipient={''} setCareRecipient={jest.fn()} />)
    expect(screen.getByText("Select a person to see their activity")).toBeInTheDocument();    
  })
 })