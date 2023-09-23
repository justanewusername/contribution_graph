import '../styles/contributionGraph.scss';
import Tile from './Tile';

const ContributionGraph = () => {
    let tiles = [];
    for (let i = 0; i < 357; i++) {
        tiles.push(<Tile key={i} color_number={0} />);
    }
    return <div className="graph_grid">{tiles}</div>;
};

export default ContributionGraph;
