import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text';
import { ILocationInfo } from '@/types/data';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            <Caption>{desc}</Caption>
            <Divider />
          </Way>
          
  
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
  width: 100%; /* Wrapper도 전체 폭 사용 */
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%; /* 부모 폭 전체 사용 */
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 450px;
  border: 1px solid #d0b15b;
  margin-top: 8px;
`;