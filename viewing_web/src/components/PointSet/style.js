import styled from 'styled-components';

export const PointSetContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const RadioLabel = styled.label`
  font-size: 16px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #51515E;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #41414e;
  }
`;
