export const getAttribute = value => {
    if (value === 'temp') {
      return { attr: 'temp', label: 'temperature', xaxis: 'Time Stamp', yaxis: 'Temperature in Degree Celsius '};
    } else if (value === 'humidity') {
      return { attr: 'humidity', label: 'Humidity' };
    } else if (value === 'danfossPressure') {
      return { attr: 'danfossPressure', label: 'Pressure', xaxis: 'Time Stamp', yaxis: 'Condenser Pressure in Bar', yaxis1: 'Evaporator Pressure in Bar' };
    } else if (value === 'anemometer') {
      return { attr: 'anemometer', label: 'Anemometer',  xaxis: 'Time Stamp', yaxis: 'Air Velocity in meters/sec' };
    } else if (value === 'vapourPressure') {
        return {attr: 'vapourPressure', label: 'Humidity Ratio',  xaxis: 'Time Stamp', yaxis: 'Humidity Ratio in Kilograms of Water per Kilograms of Dry Air' };
    }
  }