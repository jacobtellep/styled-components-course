import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <img alt='product' src='chair.jpeg' />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;

  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    h4 {
      text-transform: capitalize;
      &::before {
        content: 'Name : ';
        color: red;
      }
    }

    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
  // it seems that the transion is working on the hover below it?
  // I guess that in order to have transitions they need to be right before the action to trigger the transition?
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }

  // this is how you can do media queries in styled components
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
