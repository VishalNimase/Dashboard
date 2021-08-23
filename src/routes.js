import HomeCard from './component/home';
import Temprature from './component/temrature'



export const routes = [
    {
      path: "/temprature",
      exact: true,
      component: () => (<Temprature />),
      label:'Temprature'
    },
    {
      path: "/humidity",
      component: () => (<div>Humidity</div>),
      label: 'Humidity'
    },
    {
      path: "/Pressure",
      component: () => (<div>Pressure</div>),
      label: 'Pressure'
    },
    {
      path: "/Antiometer",
      component: () => (<div>Antiometer</div>),
      label: 'Antiometer'
    },
    {
      path: "/",
      exact: true,
      component: () => (<HomeCard />),
      label: 'Home'
    },
  ]; 