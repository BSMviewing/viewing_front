import styled from 'styled-components';

export const PointStatusContainer = styled.div`
  padding: 20px;
  width: 80%;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  text-decoration: underline;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  background-color: #51515E;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const EditButton = styled.button`
  background-color: #51515E;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #41414e;
  }
`;
