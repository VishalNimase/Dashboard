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
        path: "/t2",
        component: () => (<div>T2</div>),
        label: 'Discharge Of Compressor - BS',
    },
    {
        path: "/t3",
        component: () => (<div>T3</div>),
        label: 'Condenser Outlet - BS',
    },
    {
        path: "/t4",
        component: () => (<div>T4</div>),
        label: 'Expansion Valve Outlet - BS',
    },
    {
        path: "/t5",
        component: () => (<div>T5</div>),
        label: 'Condenser Air Outlet - BS',
    },
    {
        path: "/t6",
        component: () => (<div>T6</div>),
        label: 'Suction Of Compresor - DHC',
    },
    {
        path: "/t7",
        component: () => (<div>T7</div>),
        label: 'Discharge Of Compressor - DHC',
    },
    {
        path: "/t8",
        component: () => (<div>T8</div>),
        label: 'Condenser Outlet - DHC',
    },
    {
        path: "/t9",
        component: () => (<div>T9</div>),
        label: 'Expansion Valve Outlet - DHC',
    },
    {
        path: "/t10",
        component: () => (<div>T10</div>),
        label: 'Condenser Air Outlet - DHC',
    }, {
        path: "/t11",
        component: () => (<div>T11</div>),
        label: 'Air Heater Temp In',
    },
    {
        path: "/t12",
        component: () => (<div>T12</div>),
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
        path: "/P1",
        component: () => (<div>P1</div>),
        label: 'Condenser Side',
    },
    {
        path: "/P2",
        component: () => (<div>P2</div>),
        label: 'Evaporator Side',
    },
    {
        path: "/A1",
        component: () => (<div>A1</div>),
        label: '18x18 Duct',
    }, {
        path: "/A2",
        component: () => (<div>A2</div>),
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