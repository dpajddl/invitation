import { useState } from 'react';
import styled from '@emotion/styled';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const GuestbookPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageWrapper>
      <OpenButton onClick={() => setIsOpen(true)}>방명록 작성</OpenButton>

      {isOpen && (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
            <CommentForm closeModal={() => setIsOpen(false)} />
          </ModalContent>
        </ModalBackground>
      )}

      <GuestBookWrapper>
        <CommentList />
      </GuestBookWrapper>
    </PageWrapper>
  );
};
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const OpenButton = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
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

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export default GuestbookPage;
