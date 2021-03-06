import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './css/linechart.css';
import {getAttribute} from './utility/chartUtility'

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1.5,
          data: [],
          xaxis:'',
          yaxis: '',
        }
      ]
    }
  }
  componentDidMount() {

    let {attr, label, xaxis, yaxis, yaxis1 } = getAttribute(this.props.name)
    if(this.props.label === 'Evaporator Side') {
      yaxis = yaxis1
    }
    const tempCode = window.location.href.split('/').pop();
    const URL = `http://148.72.246.96:8081/${tempCode}`
    axios.get(URL,{
      headers: {
        "Access-Control-Allow-Origin": "*"
      }})
      .then(res => res)
      .then(
        (result) => {
          this.setState({
            ...this.state,
            labels: result.data.map(d => d.dateTime).reverse(),
            xaxis,
            yaxis,
            datasets: [
              {
                ...this.state.datasets[0],
                label,
                data: result.data.map(d => d[attr]).reverse(),
              }
            ]
          });
        },
        (error) => console.log(error)
      )
  }
  render() {
    return (
      <div style={{ height: '500px', width: '800px', margin: 'auto' }}>
        <Line
          data={this.state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
        <h2 className="lineChartLabel">{this.props.label}</h2>
        <div>
          {this.state.xaxis && (<div>X-Axis: {this.state.xaxis}</div>)}
          {this.state.yaxis && (<div>Y-Axis: {this.state.yaxis}</div>)} 
        </div>
      </div>
    );
  }
}
