import React, { useState, useEffect, useRef } from 'react';
import '../styles/tile.scss';
import CustomHint from './CustomHint';

const Tile = ({
    contr_number,
    isTileClicked,
    changeTileState,
    title,
    text,
}) => {
    const tileRef = useRef();
    const [divColor, setDivColor] = useState('#ededed');
    const [isClicked, setIsClicked] = useState(false);
    const [styles, setStyles] = useState({
        backgroundColor: divColor,
        border: 'none',
    });
    const [hint, setHint] = useState([]);

    useEffect(() => {
        if (contr_number == 0) {
            setDivColor('#ededed');
        } else if (contr_number < 9) {
            setDivColor('#acd5f2');
        } else if (contr_number <= 19) {
            setDivColor('#7fa8c9');
        } else if (contr_number <= 29) {
            setDivColor('#527ba0');
        } else if (contr_number > 29) {
            setDivColor('#254e77');
        }
    }, [contr_number]);

    useEffect(() => {
        setStyles({
            backgroundColor: divColor,
            border: 'none',
        });
    }, [divColor]);

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
            changeTileState();
            setIsClicked(!isClicked);
            setHint([]);
        } else if (!isClicked && !isTileClicked) {
            setStyles({ ...styles, border: '1px solid rgba(0, 0, 0, 0.9)' });
            setIsClicked(!isClicked);
            changeTileState();
            showHint();
        }
    };

    const showHint = () => {
        setHint(
            <CustomHint
                key={1}
                left={tileRef.current.offsetLeft}
                top={tileRef.current.offsetTop}
                title={title}
                text={text}
            />
        );
    };

    return (
        <div>
            {hint}
            <div
                ref={tileRef}
                className={`tile ${isClicked ? 'clicked' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={styles}
                data-hint-message={'hey'}
            ></div>
        </div>
    );
};

export default Tile;
