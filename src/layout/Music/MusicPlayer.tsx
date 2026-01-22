import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import bgmFile from '@/assets/music/freelove.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && isPlaying) {
        // .play()는 Promise를 반환하므로 catch로 에러를 잡아줘야 합니다.
        audioRef.current.play().catch(() => {
          console.log("자동 재생이 브라우저에 의해 차단되었습니다.");
        });
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <PlayerWrapper>
      <audio ref={audioRef} src={bgmFile} loop />
      {/* onClick에서 e를 인자로 받고 stopPropagation을 실행합니다. */}
      <MusicButton onClick={(e) => {
        e.stopPropagation();
        togglePlay();
      }}>
        {isPlaying ? '🎵 ON' : '🔇 OFF'}
      </MusicButton>
    </PlayerWrapper>
  );
};

export default MusicPlayer;

const PlayerWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const MusicButton = styled.button`
  background: rgba(252, 251, 247, 0.9);
  border: 1px solid #d0b15b;
  color: #333333;
  border-radius: 50px;
  padding: 8px 14px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* 폰트 이름이 정확한지 index.css와 대조해보세요 */
  font-family: 'Kkukkukk', sans-serif; 
`;