import styled from 'styled-components';

export const HWSettingContainer = styled.div`
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  height: 100vh;
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SectionHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Stat = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ChartContainer = styled.div`
  flex-grow: 1;
`;

export const TotalCount = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
