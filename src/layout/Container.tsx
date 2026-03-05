import styled from '@emotion/styled';


const Container = styled.div`
width: 90vw;
max-width: 520px;

background: #f7f7f7;
border-radius: 40px;

overflow: hidden;

margin: 40px 0;

box-shadow:
  0 10px 30px rgba(0,0,0,0.08),
  0 2px 8px rgba(0,0,0,0.05);

  @media screen and (max-width: 420px) {
    width: 100vw;     /* 👈 화면 꽉 채움 */
    margin: 0;        /* 👈 위아래 여백 제거 */
    border-radius: 0; /* 👈 카드 느낌 제거 */
}
`;
export default Container;
