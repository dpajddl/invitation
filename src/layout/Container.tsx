import styled from '@emotion/styled';


const Container = styled.div`
  border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  /* ✅ 둥근 모서리 추가 */
  border-radius: 40px;
  overflow: hidden; /* 둥근 모서리 안에서 border 이미지 잘리도록 */


  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 280px; /* 테두리 이미지의 너비 설정 */
  

  /* ✅ 광택 있는 흰색 배경 */
  background: linear-gradient(
    145deg,
    #f7f7f7 40%
  );

  width: 85vw;
  margin: 0 auto;
  
  @media screen and (min-width: 500px) {
      width: 500px;
  }
`;
export default Container;
