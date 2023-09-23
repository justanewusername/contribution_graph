import React, { useState, useEffect } from 'react';
import '../styles/tile.scss';

const Tile = ({ color_number }) => {
    const [divColor, setDivColor] = useState('#ededed');
    const [isClicked, setIsClicked] = useState(false);
    const [styles, setStyles] = useState({
        backgroundColor: divColor,
        border: 'none',
    });

    useEffect(() => {
        switch (color_number) {
            case 1:
                setDivColor('#acd5f2');
                break;
            case 2:
                setDivColor('#7fa8c9');
                break;
            case 3:
                setDivColor('#527ba0');
                break;
            case 4:
                setDivColor('#254e77');
                break;
            default:
                break;
        }
    }, [color_number]);

    const handleMouseEnter = () => {
        if (!isClicked)
            setStyles({ ...styles, border: '1px solid rgba(0, 0, 0, 0.5)' });
    };

    const handleMouseLeave = () => {
        if (!isClicked) setStyles({ ...styles, border: 'none' });
    };

    const handleClick = () => {
        if (isClicked) {
            setStyles({ ...styles, border: 'none' });
        } else {
            setStyles({ ...styles, border: '1px solid rgba(0, 0, 0, 0.9)' });
        }
        setIsClicked(!isClicked);
    };

    return (
        <div
            className={'tile'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={styles}
        ></div>
    );
};

export default Tile;
