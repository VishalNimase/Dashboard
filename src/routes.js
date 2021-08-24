import HomeCard from './component/home';
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import LineChart from './component/linechart'



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
            path: "/temprature/T1SocBs",
            component: () => (<LineChart />),
            label: 'Suction Of Compresor - BS',
        },
        {
            path: "/temprature/T2DocBs",
            component: () => (<div>T2</div>),
            label: 'Discharge Of Compressor - BS',
        },
        {
          path: "/temprature/T3CocBs",
          component: () => (<div>T3</div>),
          label: 'Condenser Outlet - BS',
        },
        {
          path: "/temprature/T4EvoBs",
          component: () => (<div>T4</div>),
          label: 'Expansion Valve Outlet - BS',
        },
        {
          path: "/temprature/t5CaoBs",
          component: () => (<div>T5</div>),
          label: 'Condenser Air Outlet - BS',
        },
        {
          path: "/temprature/T6SocDhc",
          component: () => (<div>T6</div>),
          label: 'Suction Of Compresor - DHC',
        },
        {
        path: "/temprature/T7DocDhc",
        component: () => (<div>T7</div>),
        label: 'Discharge Of Compressor - DHC',
        },
        {
        path: "/temprature/T8CoDhc",
        component: () => (<div>T8</div>),
        label: 'Condenser Outlet - DHC',
        },
        {
        path: "/temprature/T9EvoDhc",
        component: () => (<div>T9</div>),
        label: 'Expansion Valve Outlet - DHC',
        },
        {
          path: "/temprature/T10CaoDhc",
          component: () => (<div>T10</div>),
          label: 'Condenser Air Outlet - DHC',
        },{
          path: "/temprature/T11Ahti",
          component: () => (<div>T11</div>),
          label: 'Air Heater Temp In',
        },
        {
          path: "/temprature/T12Ahto",
          component: () => (<div>T12</div>),
          label: 'Air Heater Temp Out',
        }
      ]
    },
    {
      path: "/humidity",
      label: 'Humidity',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'humidity.png'}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/DTH1",
          component: () => (<div>DTH1</div>),
          label: 'Ambient Air- Ahead Of MD',
        },
        {
          path: "/DTH2",
          component: () => (<div>DTH2</div>),
          label: 'After Blower',
        },
        {
          path: "/DTH3",
          component: () => (<div>DTH3</div>),
          label: 'After Cooling Coil 1',
        },
        {
          path: "/DTH4",
          component: () => (<div>DTH4</div>),
          label: 'After Cooling Coil 2',
        },
        {
          path: "/DTH5",
          component: () => (<div>DTH5</div>),
          label: 'After Cooling Coil 3',
        },
        {
          path: "/DTH6",
          component: () => (<div>DTH6</div>),
          label: 'After Cooling Coil 4',
        },
        {
          path: "/DTH7",
          component: () => (<div>DTH7</div>),
          label: 'Vertical Duct',
        },
        {
          path: "/DTH8",
          component: () => (<div>DTH8</div>),
          label: 'Steamer Duct',
        },
        {
          path: "/DTH9",
          component: () => (<div>DTH9</div>),
          label: 'Mix of Steam and Air Stream',
        },
        {
          path: "/DTH10",
          component: () => (<div>DTH10</div>),
          label: 'Exit of Diffuser',
        }
      ]
    },
    {
      path: "/Pressure",
      label: 'Pressure',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'pressurenew.png'}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/Pressure/P1Cs",
          component: () => (<div>P1</div>),
          label: 'Condenser Side',
        },
        {
          path: "/Pressure/P2Es",
          component: () => (<div>P2</div>),
          label: 'Evaporator Side',
        }
      ]
    },
    {
      path: "/Antiometer",
      label: 'Antiometer',
      icons: (<img style={{ height: '50px' }} src= {process.env.PUBLIC_URL + 'antioTran.png'}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/Antiometer/A118",
          component: () => (<div>A1</div>),
          label: '18x18 Duct',
        },{
          path: "/Antiometer/A112",
          component: () => (<div>A2</div>),
          label: '12x12 Duct',
        }
      ]
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