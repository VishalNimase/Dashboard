import HomeCard from "./homeCard";
import { CardData, Sensor } from './images'

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',

}
// 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
const Home = () => {
    return (
        <>
        <h1> Main components</h1>
        <div style={styles}>
            {CardData.map(d => (<HomeCard data={d} key={d.title} />))}
            
        </div>
        <h1> Sensors</h1>
        <div style={styles}>
            {Sensor.map(d => (<HomeCard data={d}  key={d.title}/>))}
            
        </div>
        </>
    );
}

export default Home;