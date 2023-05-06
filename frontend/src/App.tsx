import { useEffect } from 'react';
import './App.css';
import makeApiRequest from './api/makeApiRequest';
import CustomizedTimeline from './Timeline';

function App() {
  useEffect(() => {
    makeApiRequest('careRecipient/all');
  }, [])
  return (
    <CustomizedTimeline />
  );
}

export default App;
