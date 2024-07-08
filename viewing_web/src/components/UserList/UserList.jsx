import React from 'react';
import { UserListContainer, Title, Table, TableRow, TableHeader, TableCell } from './style';

const UserList = () => {
  return (
    <UserListContainer>
      <Title>유저 목록</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>사용자 아이디</TableHeader>
            <TableHeader>이름</TableHeader>
            <TableHeader>이메일</TableHeader>
            <TableHeader>관리자</TableHeader>
            <TableHeader>보유 포인트</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {/* 데이터 예시 */}
          <TableRow>
            <TableCell>user1</TableCell>
            <TableCell>홍길동</TableCell>
            <TableCell>hong@example.com</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>user2</TableCell>
            <TableCell>김철수</TableCell>
            <TableCell>kim@example.com</TableCell>
            <TableCell>No</TableCell>
            <TableCell>200</TableCell>
          </TableRow>
          {/* 데이터 추가 */}
        </tbody>
      </Table>
    </UserListContainer>
  );
};

export default UserList;
