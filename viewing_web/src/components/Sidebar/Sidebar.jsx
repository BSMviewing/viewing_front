import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, SidebarHeader, DropdownMenu, DropdownButton, DropdownContent, DropdownItem, Arrow } from './style';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({
    user: false,
    point: false,
    setting: false
  });

  const handleDropdownClick = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <SidebarHeader onClick={() => handleNavigate('/')}>Viewing Admin</SidebarHeader>
      <DropdownMenu>
        <DropdownButton onClick={() => handleDropdownClick('user')}>
          유저 관리
          <Arrow>{openMenus.user ? <FaChevronUp /> : <FaChevronDown />}</Arrow>
        </DropdownButton>
        {openMenus.user && (
          <DropdownContent>
            <DropdownItem onClick={() => handleNavigate('/user-list')}>유저 목록</DropdownItem>
            <DropdownItem>유저 DB 관리</DropdownItem>
          </DropdownContent>
        )}
      </DropdownMenu>
      <DropdownMenu>
        <DropdownButton onClick={() => handleDropdownClick('point')}>
          포인트 관리
          <Arrow>{openMenus.point ? <FaChevronUp /> : <FaChevronDown />}</Arrow>
        </DropdownButton>
        {openMenus.point && (
          <DropdownContent>
            <DropdownItem onClick={() => handleNavigate('/point-status')}>포인트 현황</DropdownItem>
            <DropdownItem onClick={() => handleNavigate('/point-set')}>포인트 수정</DropdownItem>
          </DropdownContent>
        )}
      </DropdownMenu>
      <DropdownMenu>
        <DropdownButton onClick={() => handleDropdownClick('setting')}>
          설정
          <Arrow>{openMenus.setting ? <FaChevronUp /> : <FaChevronDown />}</Arrow>
        </DropdownButton>
        {openMenus.setting && (
          <DropdownContent>
            <DropdownItem onClick={() => handleNavigate('/hw-setting')}>HW Info</DropdownItem>
            <DropdownItem>dummy</DropdownItem>
          </DropdownContent>
        )}
      </DropdownMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
