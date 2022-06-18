import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import GlobalStyles from './global-styles';
import { HipsterButton } from './components/Buttons';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <GlobalStyles />
        <HipsterButton>click me</HipsterButton>
        <HipsterButton as='a' href='https://www.google.com'>
          click me
        </HipsterButton>
        <HipsterButton>click me</HipsterButton>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
