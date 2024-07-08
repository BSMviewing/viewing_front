import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  color: white;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://i.pinimg.com/originals/12/ee/21/12ee21d321823c5ad435091a2c4945f6.jpg') no-repeat;
  background-size: cover;
  background-position: 50% var(--bg-position-y);
  z-index: -2;
  transition: background-position 0.1s;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const Header = styled.h1`
  font-size: 48px;
  align-self: flex-start;
  font-weight: 700;
  margin-left: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-right: 50px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  margin-bottom: 50px;
  text-decoration: underline;
  text-align: right;
  font-weight: 700;
  color: white;
  
  &:hover {
    color: #ccc;
  }
`;

export const RuntimeContainer = styled.div`
  color: #ccc;
  align-self: flex-start;
  margin-left: 50px;
`;

export const RuntimeText = styled.p`
  margin: 0;
  font-size: 40px;
  font-weight: 700;
`;
