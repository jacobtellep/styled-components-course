import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import ComplexTitle from './components/ComplexTitle';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ padding: '2rem' }}>
        <ComplexTitle title='more complex title'></ComplexTitle>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
