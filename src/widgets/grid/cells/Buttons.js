import React from 'react'
import applySvg from './../../../images/grid/apply.svg'
import cancelSvg from './../../../images/grid/cancel.svg'


const Buttons = ({
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
                 className={(gridElems.status === 'success' || gridElems.status === 'cancel') ? styles.buttonWrapperItemNone : ''} >
                    <div>
                        {
                                    button === 'update' ? 
                            <div className={styles.buttonWrapperItem}>
                               <img src={applySvg} alt="" />
                            </div> : button === 'delete' ?
                            <div>
                                <img className={styles.buttonWrapperItem} src={cancelSvg} alt="" />
                            </div> : ''
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Buttons

