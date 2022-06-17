import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import Card from './components/Card';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <Card />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
