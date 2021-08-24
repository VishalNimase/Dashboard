import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

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
  componentDidMount(){
    const tempCode = window.location.href.split('/').pop();
    const URL = `http://148.72.246.96:8081/${tempCode}`
axios.get(URL)
      .then(res => res)
      .then(
        (result) => {
          this.setState({
            ...this.state,
            labels: result.data.map(d => d.dateTime),
            datasets: [
              {
                ...this.state.datasets[0],
                data: result.data.map(d => d.temp)
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
      </div>
    );
  }
}
