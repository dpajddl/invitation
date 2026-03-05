import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host'; 
// import RoundButton from '@/components/RoundButton';
import { Paragraph } from '@/components/Text';


const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <SubTitle>{greeting.eventDetail}</SubTitle>
      
      {/* <Caption textAlign={'center'}>{greeting.eventDetail}</Caption> */}
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      {/*
<RoundButton
  target="_blank"
  href=""
  rel="noreferrer">
  구글 캘린더 추가하기
</RoundButton>
*/}
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;


const SubTitle = styled.p`
  font-size: 1rem;
  color: #2C2C2C;
  line-height: 140%;
  white-space: pre-line;
  margin-top : 80px;
  @media screen and (max-width: 500px) {

  }
`;