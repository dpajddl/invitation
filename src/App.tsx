import { useEffect, useRef, useState } from 'react';
import { Heading1, Heading12} from '@/components/Text';
import Wrapper from '@/components/Wrapper';
import Account from '@/layout/Account/Account';
import Container from '@/layout/Container';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
import GalleryWrap from '@/layout/Gallery/GalleryWrap';
import Guestbook from '@/layout/Guestbook/Guestbook';
import Invitation from '@/layout/Invitation/Invitation';
import Location from '@/layout/Location/Location';
import Main from '@/layout/Main/Main';
import Bottom from '@/layout/Bottom/Bottom';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
      <Wrapper>
        <Heading1></Heading1>
        <Invitation />
      </Wrapper>
      <Wrapper ref={galleryRef}>
        <Heading12>Gallery</Heading12>
        <GalleryWrap />
      </Wrapper>
      <Wrapper>
        <Heading12>Location</Heading12>
        <Location />
      </Wrapper>
       
      <Wrapper>
        <Heading12>신랑 신부에게</Heading12>
        <Guestbook />
      </Wrapper>
     <Wrapper>
        <Heading12>마음 전하실 곳</Heading12>
        <Account />
      </Wrapper>
      
       <Wrapper>
        <Bottom/>
      </Wrapper>
      <FloatingBar isVisible={isVisible} />
      
      
    </Container>
  );
}

export default App;
