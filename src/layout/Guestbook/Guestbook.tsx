import { useState } from 'react';
import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import CommentList from './CommentList';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // 모달 열기 상태

  return (
    <GuestBookWrapper>
      <Heading2>저희 둘에게 따뜻한 방명록을 남겨주세요</Heading2>

      {/* 방명록 작성 버튼 */}
      <OpenFormButton onClick={() => setIsFormOpen(true)}>
        방명록 작성
      </OpenFormButton>

      {/* 모달 팝업 */}
      {isFormOpen && (
        <ModalBackground onClick={() => setIsFormOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsFormOpen(false)}>×</CloseButton>
            <CommentForm closeModal={() => setIsFormOpen(false)} />
          </ModalContent>
        </ModalBackground>
      )}

      {/* 방명록 리스트 */}
      <CommentList />
    </GuestBookWrapper>
  );
};
const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
  align-items: center; /* 가운데 정렬 */
`;

const OpenFormButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Guestbook;
