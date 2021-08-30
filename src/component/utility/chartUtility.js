export const getAttribute = value => {
    if (value === 'temp') {
      return { attr: 'temp', label: 'Temprature' };
    } else if (value === 'humidity') {
      return { attr: 'humidity', label: 'Humidity' };
    } else if (value === 'danfossPressure') {
      return { attr: 'danfossPressure', label: 'Pressure' };
    } else if (value === 'anemometer') {
      return { attr: 'anemometer', label: 'Anemometer' };
    } else if (value === 'vapourPressure') {
        return {attr: 'vapourPressure', label: 'Vapour Pressure' };
    }
  }