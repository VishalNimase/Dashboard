import homeLogo from './Icons/home.png';
import TempLogo from './Icons/output-onlinepngtools.png';
import HumidityLogo from './Icons/humidity.png';
import About from './Icons/aboutus.png';
import Contact from './Icons/contactus.png';
import PressureLogo from './Icons/pressureNew.png';
import AntioLogo from './Icons/antioTran.png';

const style = {
  height: '35px',
}

export const routes = [
  {
    path: "/",
    exact: true,
    label: 'Home',
    icons: (<img style={style} src= {homeLogo}  alt="abc"/>),
    nested: false,
  },
    {
      path: "/temprature",
      exact: true,
      label:'Temprature',
      icons: (<img style={style} src= {TempLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
            path: "/temprature/T1SocBs",
            label: 'Suction Of Compresor - BS',
        },
        {
            path: "/temprature/T2DocBs",
            label: 'Discharge Of Compressor - BS',
        },
        {
          path: "/temprature/T3CocBs",
          label: 'Condenser Outlet - BS',
        },
        {
          path: "/temprature/T4EvoBs",
          label: 'Expansion Valve Outlet - BS',
        },
        {
          path: "/temprature/t5CaoBs",
          label: 'Condenser Air Outlet - BS',
        },
        {
          path: "/temprature/T6SocDhc",
          label: 'Suction Of Compresor - DHC',
        },
        {
        path: "/temprature/T7DocDhc",
        label: 'Discharge Of Compressor - DHC',
        },
        {
        path: "/temprature/T8CoDhc",
        label: 'Condenser Outlet - DHC',
        },
        {
        path: "/temprature/T9EvoDhc",
        label: 'Expansion Valve Outlet - DHC',
        },
        {
          path: "/temprature/T10CaoDhc",
          label: 'Condenser Air Outlet - DHC',
        },{
          path: "/temprature/T11Ahti",
          label: 'Air Heater Temp In',
        },
        {
          path: "/temprature/T12Ahto",
          label: 'Air Heater Temp Out',
        }
      ]
    },
    {
      path: "/humidity",
      label: 'Humidity',
      icons: (<img style={style} src= {HumidityLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/DTH1",
          label: 'Ambient Air- Ahead Of MD',
        },
        {
          path: "/DTH2",
          label: 'After Blower',
        },
        {
          path: "/DTH3",
          label: 'After Cooling Coil 1',
        },
        {
          path: "/DTH4",
          label: 'After Cooling Coil 2',
        },
        {
          path: "/DTH5",
          label: 'After Cooling Coil 3',
        },
        {
          path: "/DTH6",
          label: 'After Cooling Coil 4',
        },
        {
          path: "/DTH7",
          label: 'Vertical Duct',
        },
        {
          path: "/DTH8",
          label: 'Steamer Duct',
        },
        {
          path: "/DTH9",
          label: 'Mix of Steam and Air Stream',
        },
        {
          path: "/DTH10",
          label: 'Exit of Diffuser',
        }
      ]
    },
    {
      path: "/Pressure",
      label: 'Pressure',
      icons: (<img style={style} src= {PressureLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/Pressure/P1Cs",
          label: 'Condenser Side',
        },
        {
          path: "/Pressure/P2Es",
          label: 'Evaporator Side',
        }
      ]
    },
    {
      path: "/Antiometer",
      label: 'Antiometer',
      icons: (<img style={style} src= {AntioLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/Antiometer/A118",
          label: '18x18 Duct',
        },{
          path: "/Antiometer/A112",
          label: '12x12 Duct',
        }
      ]
    },
    {
      path: "/AboutUs",
      label: 'About Us',
      icons: (<img style={style} src= {About}  alt="abc"/>),
      nested: false,
    },
    {
      path: "/ContactUs",
      exact: true,
      label: 'Contact Us',
      icons: (<img style={style} src= {Contact}  alt="abc"/>),
      nested: false,
    }
  ]; 