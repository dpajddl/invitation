import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address';
import MapButtons from './MapButtons';
import { Caption, PointTitle } from '@/components/Text';
import KakaoMap from './KakaoMap';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <KakaoMap />
      <MapButtons />
      <Address />
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



