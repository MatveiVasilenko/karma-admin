import React, { FC } from 'react';
import FilterGrafic from './components/FilterGrafic';
import Grafic from './components/Grafic';
import StatsBlock from './components/StatsBlock';

interface IStatsProps {
  
};

const Stats:FC<IStatsProps> = ({}) => {
    return (
        <div>
            <FilterGrafic />
            <Grafic />
            <StatsBlock />
        </div>
    )
};

export default Stats;