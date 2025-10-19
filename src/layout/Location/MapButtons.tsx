import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';
import kakao from '@/assets/icons/kakao_icon.png';
import naver from '@/assets/icons/navermap_icon_2.png';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}> <Icon src={naver} alt="네이버 지도" />네이버지도</Button>
      <Button onClick={() => window.open(kakaoMap)}><Icon src={kakao} alt="카카오맵" />카카오맵</Button>
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

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
  vertical-align: middle;
`;
