import React, { FC, useState, useMemo, useEffect } from 'react';
import GridComponent from '../../../../widgets/mgrid/GridComponent';
import { NET } from './../../../../redux/network';
import { streamApi } from './../../../../redux/services/StreamService';
import { ggStream } from './../../../../common/gridgenerator/ggStream';
import { ITransformGrid } from './../../../../common/interface/ITransformGrid';
import { transformStreamGrid } from '../../../../common/transformer/transformStreamGrid';
import Loading from '../../../../widgets/loading/Loading';
import Error from './../../../../widgets/loading/Error';

interface IStreamProps {
  
};



const Stream:FC<IStreamProps> = ({}) => {

    const [showModal, setShowModal] = useState<boolean>(false)
    
    const {data: data, isLoading, error} = streamApi.useGetQuery(1)

    
    const gridConfig = useMemo(() => ggStream(), [])
    const [gridData, setGridData] = useState<ITransformGrid | false>(false)
    useEffect(() => {
        if (data) {
            const transformData = () => transformStreamGrid(gridConfig.thead, data.data)
            console.log(transformData)
            setGridData(transformData)
            setShowModal(false)
        }
    }, [data])
    const gridHandlers = {}
    return (
        <div>
            
            {isLoading ? <div>
                <Loading />
            </div> : <div>
                    {gridData && <GridComponent 
                        gridData={gridData}
                        elems={gridConfig.elems}
                        // customStyles={}
                        settings={{
                            //Включает порядковые номера у строк
                            counter: false,
                            net: NET
                        }}
                        gridHandlers={gridHandlers}
                    />}
                </div>}
            {error && <Error />}
        </div>
    )
};

export default Stream;