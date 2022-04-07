import React, {
    useEffect,
    useState
} from 'react'

const ColorText = ({
    value,
    name,
    width,
    styles,
    customStyles
}) => {
  
   
   const [color, setColor] = useState('transparent')
   const [borderColor, setBorderColor] = useState('transparent')
   const [textColor, setTextColor] = useState('transparent')
   useEffect(() => {
    if (name === 'status') {
        if (value === 'success') {
            setColor('#B7F1D1 ')
            setBorderColor('green')
            setTextColor('#007433')
        } else if (value === 'open') {
            setColor('#FFFCAF')
            setBorderColor('#FFD43A')
            setTextColor('#FF8A00')
        } else if (value === 'cancel') {
            setColor('#FFACAC ')
            setBorderColor('red')
            setTextColor('#A80404')
        }
    }
   }, [value])
    
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            width: width,
            'min-width': width ,
            backgroundColor: color,
            border: '1px solid' , 
            borderColor: borderColor,
            borderRadius: '11px',
            height: '35px',
            color: textColor
        }} className={[styles.gridRowItem2, customStyles?.gridRowItem].join(' ')}>
            <div>{value}</div>
        </div>
    )
}
export default ColorText