import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Song = styled.li`
  height: 5rem;
  width: 100%;
  background-color: var(--primary);
`;

export const Button = styled.button`
  height: 25%;
  width: 100%;
  background-color: var(--secondary);
`;
