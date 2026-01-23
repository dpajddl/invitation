import styled from '@emotion/styled';

export const Heading12 = styled.p`
  font-family: GowoonDodum, serif;
  font-size: 2rem;
  margin: 10px;
  color: #2C2C2C;
  white-space: pre-line;
`;

export const Heading1 = styled.p`
  font-family: GowoonDodum, serif;
  font-size: 1.5rem;
  margin: 30px;
  color: #2C2C2C;
  white-space: pre-line;
`;


export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.9rem; /* 모바일 폰트 작게 */
    margin: 8px;
  }
  
`;

export const PointTitle = styled.p`
  font-family: GowoonDodum, serif;
  font-size: 1.1rem;
  line-height: 1;
  margin: 0;
  
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
font-family: GowoonDodum, serif;
  font-size: 1rem;
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
