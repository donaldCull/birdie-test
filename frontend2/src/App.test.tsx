import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import useFetchDataSource from './hooks/useFetchDataSource';
jest.mock('./hooks/useFetchDataSource');

describe('App', () => {
  afterAll(() => cleanup);

  test('Helper text shown if not seleted care recipient', () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockUseFetchDataSource.mockReturnValue({ isLoading: true, data: []})
    render(<App />);
    expect(screen.getByText(/Activity information not available. Try selecting a care recipient./)).toBeInTheDocument();
  });

  test('Finds some text in the timeline', () => {
    const mockUseFetchDataSource = useFetchDataSource as jest.MockedFunction<typeof useFetchDataSource>;
    mockUseFetchDataSource.mockReturnValue({ isLoading: true, data: []})
    render(<App />);
    expect(screen.getByText(/Activity information not available. Try selecting a care recipient./)).toBeInTheDocument();
  });
})
