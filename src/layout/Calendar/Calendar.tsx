import styled from "@emotion/styled";
import bg from "@/assets/images/calendar.jpg";

const WeddingCalendar = () => {
  return (
    <Wrapper>
      <Background src={bg} alt="calendar" />

      <Content>
        <Title>
          OUR <br />
          WEDDING <br />
          DAY
        </Title>

        <Month>8</Month>

        <Week>
          <span>목</span>
          <span>금</span>
          <span className="active">토</span>
          <span>일</span>
          <span>월</span>
        </Week>

        <DateRow>
          <span>27</span>
          <span>28</span>
          <span className="active">29</span>
          <span>30</span>
          <span>31</span>
        </DateRow>

        <Info>
          8월 29일 토요일 오후 12시 30분
          <br />
          HD현대 글로벌 R&D센터 1층 아산홀
        </Info>
      </Content>
    </Wrapper>
  );
};

export default WeddingCalendar;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
`;

const Background = styled.img`
  width: 100%;
  display: block;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Title = styled.div`
  font-family: Campton;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 1px;

  font-size: clamp(16px, 4vw, 24px);
`;

const Month = styled.div`
  font-family: Campton;
  margin: 10px 0;

  font-size: clamp(20px, 6vw, 32px);
`;

const Week = styled.div`
  font-family: Pretendard;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  margin-top: 4px;

  font-size: clamp(12px, 3.5vw, 16px);

  span {
    text-align: center;
  }

  .active {
    font-weight: 700;
  }
`;
const DateRow = styled.div`
  font-family: Pretendard;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 60%;
  margin-top: 4px;

  font-size: clamp(12px, 3.5vw, 16px);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    position: relative;
    z-index: 1;
  }

  .active::before {
    content: "";
    position: absolute;
    width: clamp(22px, 5vw, 30px);
    height: clamp(22px, 5vw, 30px);
    background: #6f6f5a;
    border-radius: 50%;
    z-index: -1;
  }

  .active {
    color: white;
  }
`;
const Info = styled.div`
  font-family: Pretendard;
  margin-top: 20px;
  line-height: 1.6;

  font-size: clamp(12px, 3.5vw, 15px);
`;