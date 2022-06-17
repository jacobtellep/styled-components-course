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

const StyledCard = styled.article``;

export default Card;
