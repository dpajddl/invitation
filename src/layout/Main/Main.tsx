import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      
      <hr style={{ width: '60%', maxWidth: '420px', border: '1.1px solid #d0b15b' }} />
      <SubTitle>{greeting.eventDetail}</SubTitle>
      <hr style={{ width: '60%', maxWidth: '420px', border: '1.1px solid #d0b15b' }} />
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
  margin-bottom: 20px;

  /* 모바일 대응 */
  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 150px 150px 0 0;
    padding-top: 10px;
    margin-bottom: 20px;
  }
`;

// const MainTitle = styled.p`
//   font-family: GabiaSai;
//   font-size: 2rem;
//   color: #2C2C2C;
//   line-height: 120%;
//   white-space: pre-line;
//   @media screen and (max-width: 500px) {
//     font-size: 1.5em;
//   }

// `;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #2C2C2C;
  line-height: 140%;
  white-space: pre-line;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
