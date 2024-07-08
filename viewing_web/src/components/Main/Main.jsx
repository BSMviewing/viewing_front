import React, { useEffect } from 'react';
import { MainContainer, Header, ButtonsContainer, Button, RuntimeContainer, RuntimeText, Background, Overlay } from './style';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientY } = e;
      const y = (clientY / window.innerHeight) * 700;
      document.documentElement.style.setProperty('--bg-position-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MainContainer>
      <Background />
      <Overlay />
      <Header>Viewing<br />Admin</Header>
      <ButtonsContainer>
        <Button onClick={() => navigate('/user-list')}>USER</Button>
        <Button onClick={() => navigate('/point-status')}>POINT</Button>
        <Button onClick={() => navigate('/hw-setting')}>SETTING</Button>
      </ButtonsContainer>
      <RuntimeContainer>
        <RuntimeText>Runtime</RuntimeText>
        <RuntimeText>0d 00:00:00</RuntimeText>
      </RuntimeContainer>
    </MainContainer>
  );
};

export default Main;
