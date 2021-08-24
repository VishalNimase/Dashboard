import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios'

export default class LineChart extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      datasets: [
        {
          label: 'Temprature',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    }
  }
  componentDidMount() {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      method: 'GET'
    };
    fetch(`http://148.72.246.96:8081/T1SocBs`, config).then(Response => {
      console.log('testing data', Response)
    })
  }
  render() {
    return (
      <div style={{ height: '300px', width: '500px' }}>
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
      </div>
    );
  }
}
