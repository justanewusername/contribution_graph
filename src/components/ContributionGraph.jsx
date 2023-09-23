import React, { useState, useEffect } from 'react';
import '../styles/contributionGraph.scss';
import Tile from './Tile';
import axios from 'axios';
import { format, subDays } from 'date-fns';
import { API_URL } from '../apiConfig';

const ContributionGraph = () => {
    const [isTileClicked, setIsTileClicked] = useState(false);
    const [data, setData] = useState(null);
    const today = new Date();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const changeTileState = () => {
        setIsTileClicked(!isTileClicked);
    };

    let tiles = [];
    if (data != null) {
        for (let i = 357; i > 0; i--) {
            let contr = 0;
            let tileDate = format(subDays(today, i), 'yyyy-MM-dd').toString();
            for (let date in data) {
                if (date === tileDate) {
                    contr = data[date];
                }
            }

            tiles.push(
                <Tile
                    key={i}
                    contr_number={contr}
                    isTileClicked={isTileClicked}
                    changeTileState={changeTileState}
                    title={`${contr} contributions`}
                    text={format(subDays(today, i), 'EEEE, MMMM d, yyyy')}
                />
            );
        }
    }

    return <div className="graph_grid">{tiles}</div>;
};

export default ContributionGraph;
