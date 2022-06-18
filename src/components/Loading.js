// simple spinner logic.
// Use this as reference for trying to animate things in the future

import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
to {
    transform: rotate(360deg);
}
`;

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${spinner} 0.6s linear infinite;
`;

export default Loading;
