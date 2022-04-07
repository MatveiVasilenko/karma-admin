import React from 'react'
import Text from './cells/Text';
import Check from './cells/Check';
import Buttons from './cells/Buttons';
import Image from './cells/Image';
import ColorText from './cells/ColorText';
import ButtonsOrder from './cells/ButtonsOrders';

const GridSwitcher = ({
    type,
    idRow,
    idRowSub,
    value,
    width,
    name,
    net,
    styles,
    customStyles,
    gridHandlers,
    gridElems
}) => {
    const config = {
        idRow,
        idRowSub,
        value,
        name,
        styles,
        width,
        net,
        customStyles: customStyles || {},
        gridHandlers: gridHandlers || {},
        gridElems
    }

    switch(type) {
        case 'text':
            return (
                <Text {...config}/>
            );
            case 'colorText':
                return (
                    <ColorText {...config}/>
                );
        case 'buttons':
            return (
                <Buttons {...config}/>
            )
            case 'buttons_order':
            return (
                <ButtonsOrder {...config}/>
            )
        case 'check':
            return (
                <Check {...config}/>
            );
        case 'image':
            return (
                <Image {...config}/>
            );
        default: return
    }
}
export default GridSwitcher