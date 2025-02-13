import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'vertical' &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
