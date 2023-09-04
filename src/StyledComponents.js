import styled from 'styled-components';


export const CarouselContent = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${props => props.imageUrl});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 90vh;
`;
