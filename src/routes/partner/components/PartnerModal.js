import GridComponent from "../../../widgets/grid/GridComponent";

import classes from './userModal.module.scss'


           
const PartnerModal = ({
    gridData, 
    userModal, 
    setUserModal,
    NET, 
    filter, 
    setFilter,
    gridHandlers, 
}) => {

    const closeModal = () => {
        setUserModal(false)
    }
    const elems = [
        {
            name: 'id',
            type: 'text',
            value: 'value',
            width: 30 
        },
        {
            name: 'status',
            type: 'colorText',
            value: 'value',
            width: 120
        },
        {
            name: 'money',
            type: 'text',
            value: 'value',
            width: 120
        },
        {
            name: 'type',
            type: 'text',
            value: 'value',
            width: 150
        },  
        
        {
            name: 'created_at',
            type: 'text',
            value: 'value',
            width: 200
        }       
         
    ]
    return (
        <div>
            {gridData ? 
            <div className={userModal ? [classes.modal, classes.modal__active].join(' ') : classes.modal}>
                <div className={classes.modal__window}>
                    <div className={classes.modal__window__header}>
                       <div className={classes.modal__window__title}>Ордера</div>
                       <div className={classes.closeModal} onClick={closeModal}>X</div>
                    </div>
                    <div className={classes.grid}>
                    <GridComponent 
            gridData={gridData}
            elems={elems}
            filter={filter}
            // filterOptions={filterOptions}
            setFilter={setFilter}
            settings={{
                //Включает порядковые номера у строк
                counter: true,
                net: NET,
                //Включает блок фильтров и поиска
                filter: false,
                routeFilter: 'orders'
            }}
            gridHandlers={gridHandlers}
            
            
           />
                    </div>
                
                </div>
              
            </div> : <></>
        }  
        </div>
    )
}

export default PartnerModal