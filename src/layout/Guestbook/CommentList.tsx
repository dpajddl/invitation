import { useEffect, useState } from 'react';
import { onValue, query, ref, orderByChild, remove } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';
import styled from '@emotion/styled';

const guestbookRef = query(ref(realtimeDb, 'guestbook'), orderByChild('createdAt'));

interface GuestbookMessage {
  id: string;
  sender: string;
  message: string;
  password: string;
  date: string;
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
        password: val.password,
        date: val.date,
      }));

      setMessages(parsed.reverse());
    });

    return () => unsubscribe();
  }, []);

  // 페이지 계산
  const indexOfLast = currentPage * messagesPerPage;
  const indexOfFirst = indexOfLast - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  // 삭제 처리
  const handleDelete = (id: string) => {
    const password = prompt('비밀번호를 입력해주세요');
    const msg = messages.find((m) => m.id === id);
    if (msg && password === msg.password) {
      remove(ref(realtimeDb, `guestbook/${id}`));
      alert('삭제되었습니다 ✅');
    } else {
      alert('비밀번호가 틀렸습니다 ❌');
    }
  };

  // 날짜 포맷 (YYYY-MM-DD HH:mm)
 const formatDate = (dateStr: string) => {
  if (!dateStr) return '';

  // 예: "2025. 10. 19. 오후 3:12:05"
  const parts = dateStr.match(/(\d+)\.\s*(\d+)\.\s*(\d+)\.\s*(오전|오후)\s*(\d+):(\d+)/);
  if (!parts) return dateStr;

  let [, year, month, day, ampm, hour, minute] = parts;
  year = year.padStart(4, '0');
  month = month.padStart(2, '0');
  day = day.padStart(2, '0');
  hour = hour.padStart(2, '0');
  
  // 오후면 12시간 더하기
  if (ampm === '오후' && hour !== '12') {
    hour = String(Number(hour) + 12);
  }
  if (ampm === '오전' && hour === '12') {
    hour = '00';
  }

  return `${year}-${month}-${day} ${hour}:${minute}`;
};

  return (
    <div>
      {currentMessages.map((m) => (
        <MessageBox key={m.id}>
          <MessageContent>{m.message}</MessageContent>
          <MessageFooter>
            <FromText>from {m.sender}</FromText>
            <DateText>{formatDate(m.date)}</DateText>
            <DeleteButton onClick={() => handleDelete(m.id)}>X</DeleteButton>
          </MessageFooter>
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

export default CommentList;

// 스타일
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 10px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  word-break: break-word;
`;

const MessageContent = styled.div`
  font-size: 0.9rem;
  color: #444;
  white-space: pre-line;
  line-height: 1.4;
`;

const MessageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #888;
`;

const FromText = styled.span`
  font-weight: 500;
`;

const DateText = styled.span`
  color: #aaa;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  color: #f55;
  cursor: pointer;
  font-weight: bold;
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
