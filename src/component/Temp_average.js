import './css/contact.css';
import LineChart from './linechart';

const Tempaverage = () => {
    return (
        <>
         <LineChart name="temp1" label="T1-Evaporator In"/>
         <LineChart name="temp2" label="T2-Evaporator Exit"/>
         <LineChart name="temp3" label="Storage Temperature 1"/>
         <LineChart name="temp4" label="Storage Temperature 2"/>
        </>
    );
}

export default Tempaverage;