import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PointSetContainer, Title, Form, Label, Input, RadioContainer, RadioLabel, RadioInput, ButtonContainer, Button } from './style';

const PointSet = () => {
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const [points, setPoints] = useState('');
  const [mode, setMode] = useState('GET');

  useEffect(() => {
    if (location.state && location.state.userId) {
      setUserId(location.state.userId);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 포인트 수정 로직 추가
    console.log({ userId, points, mode });
  };

  return (
    <PointSetContainer>
      <Title>포인트 수정</Title>
      <Form onSubmit={handleSubmit}>
        <Label>사용자 아이디</Label>
        <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
        <Label>지급할 포인트</Label>
        <Input value={points} onChange={(e) => setPoints(e.target.value)} />
        <Label>인증번호</Label>
        <Input disabled />
        <RadioContainer>
          <RadioLabel>
            <RadioInput type="radio" value="GET" checked={mode === 'GET'} onChange={() => setMode('GET')} />
            GET
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" value="SET" checked={mode === 'SET'} onChange={() => setMode('SET')} />
            SET
          </RadioLabel>
        </RadioContainer>
        <ButtonContainer>
          <Button type="submit">완료</Button>
          <Button type="button">취소</Button>
        </ButtonContainer>
      </Form>
    </PointSetContainer>
  );
};

export default PointSet;
