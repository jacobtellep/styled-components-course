// this is how you go about using the className prop that is passed
// into props when a react component is passed into a styled component

import styled from 'styled-components';
import { color } from '../utils';

const ComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
    </div>
  );
};

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${color.red};
    margin: 0 auto;
  }
`;

export default Wrapper;
