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
        component: () => (<LineChart />),
        label: 'Suction Of Compresor - BS',
    },
    {
        path: "/temprature/T2DocBs",
        component: () => (<LineChart />),
        label: 'Discharge Of Compressor - BS',
    },
    {
        path: "/temprature/T3CocBs",
        component: () => (<LineChart />),
        label: 'Condenser Outlet - BS',
    },
    {
        path: "/temprature/T4EvoBs",
        component: () => (<LineChart />),
        label: 'Expansion Valve Outlet - BS',
    },
    {
        path: "/temprature/t5CaoBs",
        component: () => (<LineChart />),
        label: 'Condenser Air Outlet - BS',
    },
    {
        path: "/temprature/T6SocDhc",
        component: () => (<LineChart />),
        label: 'Suction Of Compresor - DHC',
    },
    {
        path: "/temprature/T7DocDhc",
        component: () => (<LineChart />),
        label: 'Discharge Of Compressor - DHC',
    },
    {
        path: "/temprature/T8CoDhc",
        component: () => (<LineChart />),
        label: 'Condenser Outlet - DHC',
    },
    {
        path: "/temprature/T9EvoDhc",
        component: () => (<LineChart />),
        label: 'Expansion Valve Outlet - DHC',
    },
    {
        path: "/temprature/T10CaoDhc",
        component: () => (<LineChart />),
        label: 'Condenser Air Outlet - DHC',
    }, {
        path: "/temprature/T11Ahti",
        component: () => (<LineChart />),
        label: 'Air Heater Temp In',
    },
    {
        path: "/temprature/T12Ahto",
        component: () => (<LineChart />),
        label: 'Air Heater Temp Out',
    },
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
    },
    {
        path: "/Pressure/P1Cs",
        component: () => (<LineChart />),
        label: 'Condenser Side',
    },
    {
        path: "/Pressure/P2Es",
        component: () => (<LineChart />),
        label: 'Evaporator Side',
    },
    {
        path: "/Antiometer/A118",
        component: () => (<LineChart />),
        label: '18x18 Duct',
    }, {
        path: "/Antiometer/A118",
        component: () => (<LineChart />),
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