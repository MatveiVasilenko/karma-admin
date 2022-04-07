import React from 'react'

import ordersSvg from './../../../images/grid/orders.svg'
import potokSvg from './../../../images/grid/potok.svg'

const ButtonsOrder = ({
    idRow,
    idRowSub = false,
    value,
    width,
    gridHandlers,
    styles,
    gridElems
}) => {
    const buttons = Object.keys(gridHandlers || {})

   
    return (
        <div style={{
            width: width,
            'min-width': width 
        }} className={styles.buttonWrapper}>
            {buttons.map((button, idx) => (
                <div key={idx} onClick={() => gridHandlers[button](idRow, idRowSub, gridElems)} 
                  >
                    <div>
                        {
                            button === 'orders' ? 
                            <div className={styles.buttonWrapperItem}>
                               <img src={ordersSvg} alt="" />
                            </div> : button === 'potok' ?
                            <div>
                                <img className={styles.buttonWrapperItem} src={potokSvg} alt="" />
                            </div> : ''
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ButtonsOrder

{/* <div className={styles.buttonWrapperItem}>
                                <img src={ordersSvg} alt="" />
                            </div> : button === 'potok' ?
                            <div>
                                <img className={styles.buttonWrapperItem} src={potokSvg} alt="" />
                            </div> */}