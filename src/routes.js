import HomeCard from './component/home';
import Temprature from './component/temrature'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'



export const routes = [
  {
    path: "/",
    exact: true,
    component: () => (<HomeCard />),
    label: 'Home',
    icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'home.png'}  alt="abc"/>),
    nested: false,
  },
    {
      path: "/temprature",
      exact: true,
      label:'Temprature',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'output-onlinepngtools.png'}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
            path: "/t1",
            component: () => (<div>T1</div>),
            label: 'T1',
        },
        {
            path: "/t2",
            component: () => (<div>T1</div>),
            label: 'T2',
        }
      ]
    },
    {
      path: "/humidity",
      component: () => (<div>Humidity</div>),
      label: 'Humidity',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'humidity.png'}  alt="abc"/>),
      nested: false,
    },
    {
      path: "/Pressure",
      component: () => (<div>Pressure</div>),
      label: 'Pressure',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'pressurenew.png'}  alt="abc"/>),
      nested: false,
    },
    {
      path: "/Antiometer",
      component: () => (<div>Antiometer</div>),
      label: 'Antiometer',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'antioTran.png'}  alt="abc"/>),
      nested: false,
    },
    {
      path: "/AboutUs",
      component: () => (<AboutUs />),
      label: 'About Us',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'aboutus.png'}  alt="abc"/>),
      nested: false,
    },
    {
      path: "/ContactUs",
      exact: true,
      component: () => (<ContactUs />),
      label: 'Contact Us',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'contactus.png'}  alt="abc"/>),
      nested: false,
    }
  ]; 