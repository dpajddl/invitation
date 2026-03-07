import styled from '@emotion/styled';
import mainImg from '@/assets/images/01.webp'
import { useEffect, useRef, useState } from "react";

function useScrollFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const Main = () => {

  const { ref, visible } = useScrollFadeIn();
  return (
    <div>
       
       <SubTitle2>we are getting married!</SubTitle2>
       <SubTitle3>저희 결혼식에 초대합니다</SubTitle3>
       <MainImg src={mainImg} />
      
      
      <FadeUp ref={ref} className={visible ? "show" : ""}>
  
</FadeUp>
     
  
    </div>
  );
};

export default Main;

const MainImg = styled.img`
 
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
  margin-bottom: 20px;
  

  /* 모바일 대응 */
  @media screen and (max-width: 500px) {
    width: 90%;

    padding-top: 10px;
    margin-bottom: 20px;
  }
`;

const FadeUp = styled.div`
opacity: 0;
transform: translateY(60px);
transition: opacity 2s ease, transform 2s ease;

&.show {
  opacity: 1;
  transform: translateY(0);
}
`;






const SubTitle2 = styled.p`
font-family: Campton;
  font-size: 1.1rem;
  color: #2C2C2C;
  line-height: 100%;
  white-space: pre-line;
  margin-bottom: 4px;   /* 👈 여기 줄이기 */
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    margin-top: 60px;
    margin-bottom: 4px;   /* 👈 여기 줄이기 */
  }
  `;

  const SubTitle3 = styled.p`
  font-family: Pretendard;
  font-size: 1.1rem;
  color: #2C2C2C;
  line-height: 100%;
  white-space: pre-line;
  margin-top: 0;   /* 👈 기본 margin 제거 */
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    margin-top: 0;   /* 👈 기본 margin 제거 */
    margin-bottom: 30px;
  }
`;
