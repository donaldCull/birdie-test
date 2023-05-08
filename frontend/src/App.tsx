import { useMemo, useState } from 'react';
import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import type {} from '@mui/lab/themeAugmentation';
import CssBaseline from '@mui/material/CssBaseline';
import CustomizedTimeline from './Timeline';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';
import { CareRecipientModel } from './model/CareRecipientModel';
import CareRecipientSelector from './components/CareRecipientSelector';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [careRecipient, setCareRecipient] = useState<string>('default-value');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          contrastThreshold: 4.5,
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Grid container sx={{ height: '100vh', backgroundColor: 'primary.light'}}>
        <Grid xs={4} sx={{backgroundColor: 'primary.dark', padding: '1em'}}>
          <Typography sx={{textAlign: 'center', color: 'primary.contrastText'}} variant='h4'>
            Care Recipient
          </Typography>
          <Typography sx={{textAlign: 'center', color: 'primary.contrastText', paddingBottom: '1em'}} variant='h3'>
            Activity Tracker
          </Typography>
          <CareRecipientSelector careRecipient={careRecipient} setCareRecipient={setCareRecipient} />
        </Grid>
        <Grid xs={8}>
          <CustomizedTimeline />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
