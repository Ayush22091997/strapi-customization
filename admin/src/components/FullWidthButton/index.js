import styled from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  width: 100%;
  background-color: #21AA47;
  border: 1px solid #21AA47;
  text-transform: ${({ textTransform }) => textTransform};
`;

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  textTransform: 'none',
};

export default Button;
