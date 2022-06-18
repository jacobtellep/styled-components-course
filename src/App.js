import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import Card from './components/Card';
import GlobalStyles from './global-styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <GlobalStyles />
        <Card />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
