import './css/contact.css';
import LineChart from './linechart';

const Tempaverage = () => {
    return (
        <>
         <LineChart name="temp1" label="T1-Storage Chamber-1"/>
         <LineChart name="temp2" label="T2-PCM Temperature-2"/>
         <LineChart name="temp3" label="T3-Evaporator In"/>
         <LineChart name="temp4" label="T4-Compressor Exit"/>
        </>
    );
}

export default Tempaverage;