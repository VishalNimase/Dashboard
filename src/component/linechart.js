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
          data: []
        }
      ]
    }
  }
  componentDidMount() {

    const {attr, label } = getAttribute(this.props.name)
    console.log(attr, label)
    const tempCode = window.location.href.split('/').pop();
    const URL = `http://148.72.246.96:8081/${tempCode}`
    console.log(URL)
    axios.get(URL)
      .then(res => res)
      .then(
        (result) => {
          console.log(' i am here')
          this.setState({
            ...this.state,
            labels: result.data.map(d => d.dateTime).reverse(),
            datasets: [
              {
                ...this.state.datasets[0],
                label,
                data: result.data.map(d => d[attr]).reverse()
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
      </div>
    );
  }
}
