import styled from '@emotion/styled';
import data from 'data.json';
const Main = () => {
  const { BottomInfo } = data;
  return (
    <div>
      <SubTitle>{BottomInfo.text}</SubTitle>
    </div>
  );
};

export default Main;



const SubTitle = styled.p`
  font-size: 0.8rem;
  color: #484545ff;
  line-height: 140%;
  white-space: pre-line;
`;
