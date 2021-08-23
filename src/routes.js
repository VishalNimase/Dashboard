import HomeCard from './component/home';
import Temprature from './component/temrature'
import HomeIcon from '@material-ui/icons/Home';
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'



export const routes = [
  {
    path: "/",
    exact: true,
    component: () => (<HomeCard />),
    label: 'Home',
    icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'home.png'}  alt="abc"/>)
  },
    {
      path: "/temprature",
      exact: true,
      component: () => (<Temprature />),
      label:'Temprature',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'output-onlinepngtools.png'}  alt="abc"/>)
    },
    {
      path: "/humidity",
      component: () => (<div>Humidity</div>),
      label: 'Humidity',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'humidity.png'}  alt="abc"/>)
    },
    {
      path: "/Pressure",
      component: () => (<div>Pressure</div>),
      label: 'Pressure',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'pressurenew.png'}  alt="abc"/>)
    },
    {
      path: "/Antiometer",
      component: () => (<div>Antiometer</div>),
      label: 'Antiometer',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'antioTran.png'}  alt="abc"/>)
    },
    {
      path: "/AboutUs",
      component: () => (<AboutUs />),
      label: 'About Us',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'aboutus.png'}  alt="abc"/>)
    },
    {
      path: "/ContactUs",
      exact: true,
      component: () => (<ContactUs />),
      label: 'Contact Us',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'contactus.png'}  alt="abc"/>)
    }
  ]; 