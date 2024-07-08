import React from 'react';
import { HWSettingContainer, LeftSection, RightSection, SectionHeader, Stat, ChartContainer, TotalCount } from './style';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const HWSetting = () => {
  const generalCount = 50;
  const plasticCount = 30;
  const canCount = 20;
  const totalCount = generalCount + plasticCount + canCount;

  const data = {
    labels: ['General', 'Plastic', 'Can'],
    datasets: [
      {
        label: 'Waste Separation Ratio',
        data: [generalCount, plasticCount, canCount],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <HWSettingContainer>
      <LeftSection>
        <SectionHeader>Waste Separation Status</SectionHeader>
        <Stat>General Waste: {generalCount}</Stat>
        <Stat>Plastic: {plasticCount}</Stat>
        <Stat>Can: {canCount}</Stat>
        <SectionHeader>RunTime</SectionHeader>
        <Stat>0d 00:00:00</Stat>
      </LeftSection>
      <RightSection>
        <ChartContainer>
          <Bar data={data} options={options} />
        </ChartContainer>
        <TotalCount>Total Waste Separated: {totalCount}</TotalCount>
      </RightSection>
    </HWSettingContainer>
  );
};

export default HWSetting;
