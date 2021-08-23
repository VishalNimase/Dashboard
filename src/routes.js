import HomeCard from './component/home';
import Temprature from './component/temrature'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'



export const routes = [
  {
    path: "/",
    exact: true,
    component: () => (<HomeCard />),
    label: 'Home'
  },
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
      path: "/AboutUs",
      exact: true,
      component: () => (<AboutUs />),
      label: 'About Us'
    },
    {
      path: "/ContactUs",
      exact: true,
      component: () => (<ContactUs />),
      label: 'Contact Us'
    }
  ]; 