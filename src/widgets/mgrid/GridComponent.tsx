import React, { FC, useMemo } from 'react'
import GridBody from './components/GridBody';
import GridHead from './components/GridHead';
import styles from './grid-styles.module.scss'
import GridControls from './controls/GridControls';
import { getGridHandlersInner } from './utils';

interface GridComponentProps {
    gridData: {
        header: any[];
        boder: any[];
    };
    elems: any[];
    customStyles?: any;
    settings: {
        counter?: boolean;
        net: object | '';
        filter?: object | false;
        routeFilter?: string | '';
        // handlers?: string[];
    };
    gridHandlers?: object;
    activeFilter?: any;
    setActiveFilter?: any;
    token?: string; 
}
const GridComponent:FC<GridComponentProps> = ({
    gridData, // thead, tbody - данные с сервера
    elems, // какие будут колонки
    customStyles, // кастомные стили в scss
    settings,
    gridHandlers,
    activeFilter, // filter - true
    setActiveFilter, // filter - true
    token = ''
}) => {
    const {counter, net, filter, routeFilter} = settings
    
    return (
        <div className={[styles.gridWrapper, customStyles?.gridWrapper].join(' ')}>
            {filter && <GridControls 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                styles={styles}
                routeFilter={routeFilter}
                net={net}
                gridData={gridData.boder}
            />}
            <GridHead 
                styles={styles}
                thead={gridData.header}
                customStyles={customStyles}
                config={settings}
            />
            <GridBody 
                styles={styles}
                tbody={gridData.boder}
                elems={elems}
                customStyles={customStyles}
                config={settings}
                gridHandlers={gridHandlers}
            />
        </div>
    )
}
export default GridComponent

//Document styles - CustomStyles
// gridWrapper - main wrapper
// gridHead - main wrapper head
// gridHead
// gridHeadItem
// gridBody
// gridRow
// gridRowItem