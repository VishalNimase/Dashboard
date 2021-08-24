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
        component: () => (<LineChart name="temp" label="Suction Of Compresor - BS"/>),
        label: 'Suction Of Compresor - BS',
    },
    {
        path: "/temprature/T2DocBs",
        component: () => (<LineChart name="temp" label="Discharge Of Compressor - BS"/>),
        label: 'Discharge Of Compressor - BS',
    },
    {
        path: "/temprature/T3CocBs",
        component: () => (<LineChart name="temp" label="Condenser Outlet - BS"/>),
        label: 'Condenser Outlet - BS',
    },
    {
        path: "/temprature/T4EvoBs",
        component: () => (<LineChart name="temp" label="Expansion Valve Outlet - BS"/>),
        label: 'Expansion Valve Outlet - BS',
    },
    {
        path: "/temprature/t5CaoBs",
        component: () => (<LineChart name="temp" label="Condenser Air Outlet - BS"/>),
        label: 'Condenser Air Outlet - BS',
    },
    {
        path: "/temprature/T6SocDhc",
        component: () => (<LineChart name="temp" label="Suction Of Compresor - DHC"/>),
        label: 'Suction Of Compresor - DHC',
    },
    {
        path: "/temprature/T7DocDhc",
        component: () => (<LineChart name="temp" label="Discharge Of Compressor - DHC"/>),
        label: 'Discharge Of Compressor - DHC',
    },
    {
        path: "/temprature/T8CoDhc",
        component: () => (<LineChart name="temp" label="Condenser Outlet - DHC"/>),
        label: 'Condenser Outlet - DHC',
    },
    {
        path: "/temprature/T9EvoDhc",
        component: () => (<LineChart name="temp" label="Expansion Valve Outlet - DHC"/>),
        label: 'Expansion Valve Outlet - DHC',
    },
    {
        path: "/temprature/T10CaoDhc",
        component: () => (<LineChart name="temp" label="Condenser Air Outlet - DHC"/>),
        label: 'Condenser Air Outlet - DHC',
    }, {
        path: "/temprature/T11Ahti",
        component: () => (<LineChart name="temp" label="Air Heater Temp In"/>),
        label: 'Air Heater Temp In',
    },
    {
        path: "/temprature/T12Ahto",
        component: () => (<LineChart name="temp" label="Air Heater Temp Out"/>),
        label: 'Air Heater Temp Out',
    },
    {
        path: "/DTH1",
        component: () => (<LineChart name="" label="Ambient Air- Ahead Of MD"/>),
        label: 'Ambient Air- Ahead Of MD',
    },
    {
        path: "/DTH2",
        component: () => (<LineChart name="" label="After Blower"/>),
        label: 'After Blower',
    },
    {
        path: "/DTH3",
        component: () => (<LineChart name="" label="After Cooling Coil 1"/>),
        label: 'After Cooling Coil 1',
    },
    {
        path: "/DTH4",
        component: () => (<LineChart name="" label="After Cooling Coil 2"/>),
        label: 'After Cooling Coil 2',
    },
    {
        path: "/DTH5",
        component: () => (<LineChart name="" label="After Cooling Coil 3"/>),
        label: 'After Cooling Coil 3',
    },
    {
        path: "/DTH6",
        component: () => (<LineChart name="" label="After Cooling Coil 4"/>),
        label: 'After Cooling Coil 4',
    },
    {
        path: "/DTH7",
        component: () => (<LineChart name="" label=""/>),
        label: 'Vertical Duct',
    },
    {
        path: "/DTH8",
        component: () => (<LineChart name="" label="Steamer Duct"/>),
        label: 'Steamer Duct',
    },
    {
        path: "/DTH9",
        component: () => (<LineChart name="" label="Mix of Steam and Air Stream"/>),
        label: 'Mix of Steam and Air Stream',
    },
    {
        path: "/DTH10",
        component: () => (<LineChart name="" label="Exit of Diffuser"/>),
        label: 'Exit of Diffuser',
    },
    {
        path: "/Pressure/P1Cs",
        component: () => (<LineChart name="danfossPressure" label="Condenser Side"/>),
        label: 'Condenser Side',
    },
    {
        path: "/Pressure/P2Es",
        component: () => (<LineChart name="danfossPressure" label="Evaporator Side"/>),
        label: 'Evaporator Side',
    },
    {
        path: "/Antiometer/A118",
        component: () => (<LineChart name="anemometer" label="18x18 Duct"/>),
        label: '18x18 Duct',
    }, {
        path: "/Antiometer/A112",
        component: () => (<LineChart name="anemometer" label="12x12 Duct"/>),
        label: '12x12 Duct',
    },
    {
        path: "/AboutUs",
        component: () => (<AboutUs />),
        label: 'About Us',
    },
    {
        path: "/ContactUs",
        component: () => (<ContactUs />),
        label: 'Contact Us',
    }
];