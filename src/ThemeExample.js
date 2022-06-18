// this is where the theme stuff was

import styled, { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles'; // needed to override mui styles
import GlobalStyles from './global-styles';
import { useState } from 'react';

const BaseTheme = {
  color: '#222',
  background: '#fff',
};

const DarkTheme = {
  color: '#fff',
  background: '#222',
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <GlobalStyles />
        <Container>
          <h1>hello world</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle me
          </button>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
