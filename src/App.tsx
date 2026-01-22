import { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Heading12 } from '@/components/Text';
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
import MusicPlayer from '@/layout/Music/MusicPlayer';

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

      setIsVisible(scrollPosition >= offsetTop);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>규승 ♡ 예원 결혼합니다</title>
        <meta name="description" content="2026년 8월 29일 (토) 12:30 GRC 1층 아산홀" />
        <meta property="og:url" content="https://dpajddl.github.io/invitation/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="규승 ♡ 예원 결혼합니다" />
        <meta property="og:description" content="2026년 8월 29일 (토) 12:30 GRC 1층 아산홀" />
        <meta property="og:image" content="https://dpajddl.github.io/invitation/thumbnail.jpg" />
      </Helmet>

      <Container>
      <MusicPlayer />
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
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
          <Bottom />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </HelmetProvider>
  );
}

export default App;
