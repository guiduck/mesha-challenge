import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Thumbnail = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 10%;
  margin-right: 10px;
  background-image: url(${props => props.imgUrl});
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--text);
  }
`;

export const AddButton = styled.div`
  padding: 6px 17px;
  font-weight: 600;
  color: var(--primary);
  background: var(--details);
`;