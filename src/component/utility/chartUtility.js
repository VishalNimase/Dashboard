export const getAttribute = value => {
    if (value === 'temp') {
      return { attr: 'temp', label: 'Temprature' };
    } else if (value === 'humidity') {
      return { attr: 'humidity', label: 'Humidity' };
    } else if (value === 'danfossPressure') {
      return { attr: 'danfossPressure', label: 'Pressure' };
    } else if (value === 'anemometer') {
      return { attr: 'anemometer', label: 'Antiometer' };
    } else if (value === 'pascal') {
        return {attr: 'pascal', label: 'Pascal' };
    }
  }