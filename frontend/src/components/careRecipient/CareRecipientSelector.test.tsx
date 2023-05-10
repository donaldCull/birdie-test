import { render, screen } from '@testing-library/react';
import CareRecipientSelector from './CareRecipientSelector';

describe('CareRecipientSelector', () => {
  test('should render some items in the selector', () => {
    render(<CareRecipientSelector careRecipient={''} setCareRecipient={undefined} />)
    const thing = screen.getByDisplayValue('Select a care recipient')
    expect(thing).toBeInTheDocument();
  })
 })