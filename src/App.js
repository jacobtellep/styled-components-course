import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import GlobalStyles from './global-styles';
import Loading from './components/Loading';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <GlobalStyles />
        <Loading />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
