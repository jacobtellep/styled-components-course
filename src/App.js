import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import ComplexTitle from './components/ComplexTitle';
import AltTitle from './components/AltTitle';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <ComplexTitle title='more complex title' />
        <AltTitle title='alternative title' />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
