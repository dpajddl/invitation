import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>네이버 지도에서 보기</Button>
      <Button onClick={() => window.open(kakaoMap)}>카카오맵에서 보기</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 10px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
