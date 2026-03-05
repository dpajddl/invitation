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
align-items: center;    /* 핵심: 자식 요소들을 가로 중앙으로 정렬 */
gap: 10px;
width: 100%;
max-width: 320px;       /* 전체적인 폼 너비를 모바일에 맞게 축소 */
margin: 0 auto;         /* 화면 중앙에 배치 */
padding: 16px;
box-sizing: border-box;
`;

const NameInput = styled.input`
font-family: Pretendard;
width: 100%;            /* 폼 너비 안에서 꽉 차게 */
box-sizing: border-box;
padding: 10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 16px;
`;

const MessageInput = styled.textarea`
font-family: Pretendard;
width: 100%;
height: 80px;
box-sizing: border-box;
padding: 10px;
border-radius: 4px;
border: 1px solid #ccc;
resize: none;
font-size: 16px;
`;

const PasswordInput = styled.input`
font-family: Pretendard;
width: 100%;
box-sizing: border-box;
padding: 10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 16px;
`;

const SubmitButton = styled.button`
width: 60%;             /* 버튼 가로 사이즈를 줄임 */
padding: 10px;
border-radius: 20px;    /* 모서리를 둥글게 하면 좀 더 버튼 같아요 */
background-color: #333; /* 글자가 잘 보이게 배경색 추가 */
color: #fff;            /* 글자색은 흰색으로 */
border: none;
cursor: pointer;
font-size: 1rem;
font-weight: bold;
margin-top: 8px;        /* 위쪽과 약간의 여백 */

&:active {
  background-color: #555;
}
`;
