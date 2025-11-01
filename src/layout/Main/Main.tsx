import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;

  /* 모바일 대응 */
  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 150px 150px 0 0;
    padding-top: 10px;
  }
`;

const MainTitle = styled.p`
  font-family: GabiaSai;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }

`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
