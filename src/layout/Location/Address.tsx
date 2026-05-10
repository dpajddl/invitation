import styled from '@emotion/styled';
import data from 'data.json';
import { Car, TrainFront, Bus } from 'lucide-react';
import { Caption, PointTitle } from '@/components/Text';
import { ILocationInfo } from '@/types/data';

const iconMap: Record<string, JSX.Element> = {
  '주차 안내': <Car size={18} strokeWidth={1.8} />,
  '대중교통 안내': <TrainFront size={18} strokeWidth={1.8} />,
  '대구 하객 대절버스 안내': <Bus size={18} strokeWidth={1.8} />,
};

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <TitleRow>
              <IconBadge>{iconMap[title]}</IconBadge>
              <PointTitle>{title}</PointTitle>
            </TitleRow>
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
  margin: 20px 0;
  gap: 20px;
  width: 100%;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  font-family: Pretendard3;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f4efe6;
  color: #8a7a5c;
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 450px;
  border: 0;
  border-top: 1px dashed #d8d3c7; /* 점선으로 더 부드럽게 */
  margin-top: 8px;
`;
