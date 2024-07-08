import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PointStatusContainer, Title, Table, TableRow, TableHeader, TableCell, EditButton } from './style';

const PointStatus = () => {
  const navigate = useNavigate();

  const handleEditClick = (userId) => {
    navigate('/point-set', { state: { userId } });
  };

  return (
    <PointStatusContainer>
      <Title>포인트 현황</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>사용자 아이디</TableHeader>
            <TableHeader>이름</TableHeader>
            <TableHeader>활동</TableHeader>
            <TableHeader>얻은 포인트</TableHeader>
            <TableHeader>포인트 총합</TableHeader>
            <TableHeader></TableHeader> {/* 수정 버튼 헤더 */}
          </TableRow>
        </thead>
        <tbody>
          {/* 데이터 예시 */}
          <TableRow>
            <TableCell>user1</TableCell>
            <TableCell>홍길동</TableCell>
            <TableCell>리뷰 작성</TableCell>
            <TableCell>50</TableCell>
            <TableCell>150</TableCell>
            <TableCell><EditButton onClick={() => handleEditClick('user1')}>수정</EditButton></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>user2</TableCell>
            <TableCell>김철수</TableCell>
            <TableCell>좋아요</TableCell>
            <TableCell>20</TableCell>
            <TableCell>70</TableCell>
            <TableCell><EditButton onClick={() => handleEditClick('user2')}>수정</EditButton></TableCell>
          </TableRow>
          {/* 데이터 추가 */}
        </tbody>
      </Table>
    </PointStatusContainer>
  );
};

export default PointStatus;
