import HomeCard from './component/home';
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import LineChart from './component/linechart'



export const routesFinal = [
    {
        path: "/",
        exact: true,
        component: () => (<HomeCard />),
        label: 'Home',
    },
    {
        path: "/temprature/T1SocBs",
        component: () => (<LineChart name="temp" label="Suction Of Compresor - BlueStar System"/>),
        label: 'Suction Of Compresor - BS',
        exact: true,
    },
    {
        path: "/temprature/T2DocBs",
        component: () => (<LineChart name="temp" label="Discharge Of Compressor - BlueStar System"/>),
        label: 'Discharge Of Compressor - BS',
        exact: true,
    },
    {
        path: "/temprature/T3CocBs",
        component: () => (<LineChart name="temp" label="Condenser Outlet - BlueStar System"/>),
        label: 'Condenser Outlet - BS',
        exact: true,
    },
    {
        path: "/temprature/T4EvoBs",
        component: () => (<LineChart name="temp" label="Expansion Valve Outlet - BlueStar System"/>),
        label: 'Expansion Valve Outlet - BS',
        exact: true,
    },
    {
        path: "/temprature/t5CaoBs",
        component: () => (<LineChart name="temp" label="Condenser Air Outlet - BlueStar System"/>),
        label: 'Condenser Air Outlet - BS',
        exact: true,
    },
    {
        path: "/temprature/T6SocDhc",
        component: () => (<LineChart name="temp" label="Suction Of Compresor - De-Humidifying Coil System"/>),
        label: 'Suction Of Compresor - DHC',
        exact: true,
    },
    {
        path: "/temprature/T7DocDhc",
        component: () => (<LineChart name="temp" label="Discharge Of Compressor - De-Humidifying Coil System"/>),
        label: 'Discharge Of Compressor - DHC',
        exact: true,
    },
    {
        path: "/temprature/T8CoDhc",
        component: () => (<LineChart name="temp" label="Condenser Outlet - De-Humidifying Coil System"/>),
        label: 'Condenser Outlet - DHC',
        exact: true,
    },
    {
        path: "/temprature/T9EvoDhc",
        component: () => (<LineChart name="temp" label="Expansion Valve Outlet - De-Humidifying Coil System"/>),
        label: 'Expansion Valve Outlet - DHC',
        exact: true,
    },
    {
        path: "/temprature/T10CaoDhc",
        component: () => (<LineChart name="temp" label="Condenser Air Outlet - De-Humidifying Coil System"/>),
        label: 'Condenser Air Outlet - DHC',
        exact: true,
    }, {
        path: "/temprature/T11Ahti",
        component: () => (<LineChart name="temp" label="Air Heater Temp In"/>),
        label: 'Air Heater Temp In',
        exact: true,
    },
    {
        path: "/temprature/T12Ahto",
        component: () => (<LineChart name="temp" label="Air Heater Temp Out"/>),
        label: 'Air Heater Temp Out',
        exact: true,
    },
    {
        path: "/DTH1",
        component: () => (<LineChart name="" label="Ambient Air- Ahead Of MD"/>),
        label: 'Ambient Air- Ahead Of MD',
        exact: true,
    },
    {
        path: "/humidity/Dht2Ab",
        component: () => (<LineChart name="humidity" label="After Blower"/>),
        label: 'After Blower',
        exact: true,
    },
    {
        path: "/humidity/Dht3Ac1",
        component: () => (<LineChart name="humidity" label="After Cooling Coil 1"/>),
        label: 'After Cooling Coil 1',
        exact: true,
    },
    {
        path: "/humidity/Dht4Ac2",
        component: () => (<LineChart name="humidity" label="After Cooling Coil 2"/>),
        label: 'After Cooling Coil 2',
        exact: true,
    },
    {
        path: "/humidity/Dht5Ac3",
        component: () => (<LineChart name="humidity" label="After Cooling Coil 3"/>),
        label: 'After Cooling Coil 3',
        exact: true,
    },
    {
        path: "/humidity/Dht6Ac4",
        component: () => (<LineChart name="humidity" label="After Cooling Coil 4"/>),
        label: 'After Cooling Coil 4',
        exact: true,
    },
    {
        path: "/humidity/Dht7Vd",
        component: () => (<LineChart name="humidity" label=""/>),
        label: 'Vertical Duct',
        exact: true,
    },
    {
        path: "/humidity/Dht8Sd",
        component: () => (<LineChart name="humidity" label="Steamer Duct"/>),
        label: 'Steamer Duct',
        exact: true,
    },
    {
        path: "/DTH9",
        component: () => (<LineChart name="" label="Mix of Steam and Air Stream"/>),
        label: 'Mix of Steam and Air Stream',
        exact: true,
    },
    {
        path: "/DTH10",
        component: () => (<LineChart name="" label="Exit of Diffuser"/>),
        label: 'Exit of Diffuser',
        exact: true,
    },
    {
        path: "/Pressure/P1Cs",
        component: () => (<LineChart name="danfossPressure" label="Condenser Side"/>),
        label: 'Condenser Side',
        exact: true,
    },
    {
        path: "/Pressure/P2Es",
        component: () => (<LineChart name="danfossPressure" label="Evaporator Side"/>),
        label: 'Evaporator Side',
        exact: true,
    },
    {
        path: "/Antiometer/A118",
        component: () => (<LineChart name="anemometer" label="18x18 Duct"/>),
        label: '18x18 Duct',
        exact: true,
    }, {
        path: "/Antiometer/A112",
        component: () => (<LineChart name="anemometer" label="12x12 Duct"/>),
        label: '12x12 Duct',
        exact: true,
    },
    {
        path: "/AboutUs",
        component: () => (<AboutUs />),
        label: 'About Us',
        exact: true,
    },
    {
        path: "/ContactUs",
        component: () => (<ContactUs />),
        label: 'Contact Us',
        exact: true,
    }
];