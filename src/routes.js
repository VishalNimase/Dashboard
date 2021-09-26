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
      label:'Temperature',
      icons: (<img style={style} src= {TempLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
            path: "/temprature/T1SocBs",
            label: 'T_1_Suction Of Compressor - BS',
        },
        {
            path: "/temprature/T2DocBs",
            label: 'T_2_Discharge Of Compressor - BS',
        },
        {
          path: "/temprature/T3CocBs",
          label: 'T_3_Condenser Outlet - BS',
        },
        {
          path: "/temprature/T4EvoBs",
          label: 'T_4_Expansion Valve Outlet - BS',
        },
        {
          path: "/temprature/t5CaoBs",
          label: 'T_5_Condenser Air Outlet - BS',
        },
        {
          path: "/temprature/T6SocDhc",
          label: 'T_6_Suction Of Compressor - DHC',
        },
        {
        path: "/temprature/T7DocDhc",
        label: 'T_7_Discharge Of Compressor - DHC',
        },
        {
        path: "/temprature/T8CoDhc",
        label: 'T_8_Condenser Outlet - DHC',
        },
        {
        path: "/temprature/T9EvoDhc",
        label: 'T_9_Expansion Valve Outlet - DHC',
        },
        {
          path: "/temprature/T10CaoDhc",
          label: 'T_10_Condenser Air Outlet - DHC',
        },{
          path: "/temprature/T11Ahti",
          label: 'T_11_Air Heater Temp In',
        },
        {
          path: "/temprature/T12Ahto",
          label: 'T_12_Air Heater Temp Out',
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
          path: "/humidity/Dht1Amd",
          label: 'DHT_1_Ambient Air- Ahead Of MD',
        },
        {
          path: "/humidity/Dht2Ab",
          label: 'DHT_2_After Blower',
        },
        {
          path: "/humidity/Dht3Ac1",
          label: 'DHT_3_After Cooling Coil 1',
        },
        {
          path: "/humidity/Dht4Ac2",
          label: 'DHT_4_After Cooling Coil 2',
        },
        {
          path: "/humidity/Dht5Ac3",
          label: 'DHT_5_After Cooling Coil 3',
        },
        {
          path: "/humidity/Dht6Ac4",
          label: 'DHT_6_After Cooling Coil 4',
        },
        {
          path: "/humidity/Dht7Vd",
          label: 'DHT_7_Vertical Duct',
        },
        {
          path: "/humidity/Dht8Sd",
          label: 'DHT_8_Steamer Duct',
        },
        {
          path: "/humidity/Dht9As",
          label: 'DHT_9_Mix of Steam and Air Stream',
        },
        {
          path: "/humidity/Dht10Ed",
          label: 'DHT_10_Exit of Diffuser',
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
          label: 'P_1_Condenser Side',
        },
        {
          path: "/Pressure/P2Es",
          label: 'P_2_Evaporator Side',
        }
      ]
    },
    {
      path: "/Antiometer",
      label: 'Anemometer',
      icons: (<img style={style} src= {AntioLogo}  alt="abc"/>),
      nested: true,
      subMenu: [
        {
          path: "/Antiometer/A118",
          label: 'A_1_18x18 Duct',
        },{
          path: "/Antiometer/A112",
          label: 'A_2_12x12 Duct',
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