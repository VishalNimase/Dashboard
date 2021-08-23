import React from "react";
import Linechart  from "./linechart";
const Temprature = () => {
    return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' , justifyContent: 'space-evenly'}}>
      <Linechart/>
      <Linechart/>
      <Linechart/>
      <Linechart/>
      <Linechart/>
      <Linechart/>
    </div> );
}
 
export default Temprature;