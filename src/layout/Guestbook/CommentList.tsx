import { useEffect, useState } from 'react';
import { onValue, query, ref, orderByChild, remove } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import styled from '@emotion/styled';

const guestbookRef = query(ref(realtimeDb, 'guestbook'), orderByChild('createdAt'));

interface GuestbookMessage {
  id: string;
  sender: string;
  message: string;
  date: string;
  password: string;
}

const CommentList = () => {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  useEffect(() => {
    const unsubscribe = onValue(guestbookRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setMessages([]);
        return;
      }

      const parsed = Object.entries(data).map(([id, val]: [string, any]) => ({
        id,
        sender: val.sender,
        message: val.message,
        date: val.date,
        password: val.password,
      }));

      setMessages(parsed.reverse());
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (msg: GuestbookMessage) => {
    const input = prompt('삭제하려면 비밀번호를 입력해주세요:');
    if (!input) return;
    if (input === msg.password) {
      remove(ref(realtimeDb, 'guestbook/' + msg.id));
      alert('삭제되었습니다.');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  // 페이지 계산
  const indexOfLast = currentPage * messagesPerPage;
  const indexOfFirst = indexOfLast - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  return (
    <div>
      {currentMessages.map((m) => (
        <MessageBox key={m.id}>
          <MessageContent>{m.message}</MessageContent>
          <MessageInfo>
            <Sender>from {m.sender}</Sender>
            <InfoRight>
              <DateText>{m.date}</DateText>
              <DeleteButton onClick={() => handleDelete(m)}>삭제</DeleteButton>
            </InfoRight>
          </MessageInfo>
        </MessageBox>
      ))}

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
    </div>
  );
};

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border: 1px solid #f0e0d8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  word-break: break-word;
`;

const MessageContent = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  white-space: pre-line;
`;

const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Sender = styled.div`
  font-weight: 500;
  font-size: 0.85rem;
  color: #555;
`;

const DateText = styled.div`
  color: #aaa;
  font-size: 0.8rem;
`;

const DeleteButton = styled.button`
  font-size: 0.8rem;
  color: #ff5555;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 6px;
`;

const PageButton = styled.button<{ active: boolean }>`
  border: 1px solid lightgray;
  background-color: ${({ active }) => (active ? '#eee' : '#fff')};
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

export default CommentList;
