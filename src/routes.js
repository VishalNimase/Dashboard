import HomeCard from './component/home';
import Temprature from './component/temrature'
import HomeIcon from '@material-ui/icons/Home';



export const routes = [
    {
      path: "/temprature",
      exact: true,
      component: () => (<Temprature />),
      label:'Temprature',
      icons: (<HomeIcon />)
    },
    {
      path: "/humidity",
      component: () => (<div>Humidity</div>),
      label: 'Humidity',
      icons: (<HomeIcon />)
    },
    {
      path: "/Pressure",
      component: () => (<div>Pressure</div>),
      label: 'Pressure',
      icons: (<HomeIcon />)
    },
    {
      path: "/Antiometer",
      component: () => (<div>Antiometer</div>),
      label: 'Antiometer',
      icons: (<HomeIcon />)
    },
    {
      path: "/",
      exact: true,
      component: () => (<HomeCard />),
      label: 'Home',
      icons: (<HomeIcon />)
    },
  ]; 