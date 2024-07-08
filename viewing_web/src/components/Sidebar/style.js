import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #34343C;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
`;

export const SidebarHeader = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
  padding:
`;

export const DropdownMenu = styled.div`
  margin-bottom: 0px;
`;

export const DropdownButton = styled.button`
  background-color: #51515E;
  color: white;
  width: 100%;
  text-align: left;
  padding: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #5e5e6d;
  }
`;

export const Arrow = styled.span`
  display: flex;
  align-items: center;
`;

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #666;
`;

export const DropdownItem = styled.div`
  background-color: #34343C;
  color: white;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #5b5b6b;
  }
`;
