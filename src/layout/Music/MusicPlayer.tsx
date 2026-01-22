import { useState, useRef } from 'react';
import styled from 'styled-components'; // 스타일 라이브러리를 사용 중이시라면 활용하세요
import bgmFile from '@/assets/music/freelove.mp3';
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <PlayerWrapper>
      <audio
        ref={audioRef}
        src={bgmFile} // 2. import한 변수를 넣어줍니다.
        loop
      />
      <MusicButton onClick={togglePlay}>
        {isPlaying ? '🎵 ON' : '🔇 OFF'}
      </MusicButton>
    </PlayerWrapper>
  );
};

export default MusicPlayer;

// 스타일 예시 (FloatingBar 근처에 두면 좋습니다)
const PlayerWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const MusicButton = styled.button`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
`;