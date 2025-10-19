import { useState } from 'react';
import styled from '@emotion/styled';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';

const guestbookRef = ref(realtimeDb, 'guestbook');

interface CommentFormProps {
  closeModal?: () => void; // 모달 닫기용 prop
}

const CommentForm = ({ closeModal }: CommentFormProps) => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message || !password) {
      alert('이름, 메시지, 비밀번호를 모두 입력해주세요. 🥹');
      return;
    }

    const guestbookMessage = {
      sender: name,
      message,
      password, // 삭제 확인용
      createdAt: serverTimestamp(),
      date: new Date().toLocaleString(),
    };

    void push(guestbookRef, guestbookMessage);

    alert('메시지를 보냈습니다. 💌');

    setName('');
    setMessage('');
    setPassword('');

    closeModal?.(); // 모달이면 닫기
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="이름"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <PasswordInput
        placeholder="삭제용 비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton type="submit">등록</SubmitButton>
    </FormWrapper>
  );
};

export default CommentForm;

// 스타일 그대로 유지
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const NameInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
  font-size: 0.95rem;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
`;
