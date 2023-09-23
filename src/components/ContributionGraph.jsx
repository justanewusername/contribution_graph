import React, { useState } from 'react';
import '../styles/contributionGraph.scss';
import Tile from './Tile';

const ContributionGraph = () => {
    const [isTileClicked, setIsTileClicked] = useState(false);

    const TEMP = 'title';

    const changeTileState = () => {
        setIsTileClicked(!isTileClicked);
    };

    let tiles = [];
    for (let i = 0; i < 357; i++) {
        tiles.push(
            <Tile
                key={i}
                color_number={0}
                isTileClicked={isTileClicked}
                changeTileState={changeTileState}
                title={TEMP}
                text="secondary text"
            />
        );
    }
    return <div className="graph_grid">{tiles}</div>;
};

export default ContributionGraph;
