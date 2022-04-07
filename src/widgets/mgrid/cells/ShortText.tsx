import { FC } from 'react'
import { IGridItem } from '../types'

const ShortText:FC<IGridItem> = ({
    value,
    name,
    width,
    styles,
    customStyles
}) => {
    return (
        <div style={{
            width: width,
            minWidth: width 
        }} className={[styles.gridRowItem, customStyles?.gridRowItem].join(' ')}>
            <div>{name.substring(0, 20)}...</div>
        </div>
    )
}
export default ShortText