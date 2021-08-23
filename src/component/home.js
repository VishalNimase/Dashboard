import HomeCard from "./homeCard";
import { CardData, Sensor } from './images'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
}

const Home = () => {
    return (
        <>
        <h1> Main components</h1>
        <div style={styles}>
            {CardData.map(d => (<HomeCard data={d} />))}
            
        </div>
        <h1> Sensors</h1>
        <div style={styles}>
            {Sensor.map(d => (<HomeCard data={d} />))}
            
        </div>
        </>
    );
}

export default Home;