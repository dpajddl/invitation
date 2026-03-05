import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address';
import MapButtons from './MapButtons';
import { Caption, PointTitle } from '@/components/Text';
import KakaoMap from './KakaoMap';
import Reveal from "@/components/Reveal";
const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <Reveal>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      </Reveal>
      <KakaoMap />
      <MapButtons />
      <Reveal>
      <Address />
      </Reveal>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  backgound-color:  #000000ff;
`;



