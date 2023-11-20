import {
    OilBarrelOutlined, 
    FilterAltOutlined, 
    BuildOutlined,
    TollOutlined,
    BatteryChargingFullOutlined,
    AcUnitOutlined,
    BoltOutlined,
    FlareOutlined,
    SettingsEthernetOutlined,
    SettingsOutlined,
    WbSunnyOutlined,
    SmokingRoomsOutlined,
} from '@mui/icons-material';

export const eventTypes = [
    {
        type: 'oil_change',
        name: 'Заміна масла',
        icon: <OilBarrelOutlined />,
        color: '#FF5733',
    },
    {
        type: 'filter_change',
        name: 'Заміна фільтрів',
        icon: <FilterAltOutlined />,
        color: '#33FF57',
    },
    {
        type: 'routine_maintenance',
        name: 'Планове технічне обслуговування',
        icon: <BuildOutlined />,
        color: '#5733FF',
    },
    {
        type: 'brake_system_check',
        name: 'Перевірка та заміна гальмівних систем',
        icon: <TollOutlined/>,
        color: '#FFB633',
    },
    {
        type: 'battery_replacement',
        name: 'Планова заміна акумулятора',
        icon: <BatteryChargingFullOutlined/>,
        color: '#B633FF',
    },
    {
        type: 'cooling_system_check',
        name: 'Перевірка системи охолодження',
        icon: <AcUnitOutlined/>,
        color: '#33FFC1',
    },
    {
        type: 'charging_system_check',
        name: 'Планова перевірка системи заряджання',
        icon: <BoltOutlined/>,
        color: '#FF5733',
    },
    {
        type: 'spark_plug_change',
        name: 'Заміна свічок запалювання',
        icon: <FlareOutlined/>,
        color: '#33C1FF',
    },
    {
        type: 'belt_change',
        name: 'Заміна ременів',
        icon: <SettingsEthernetOutlined/>,
        color: '#FFC133',
    },
    {
        type: 'technical_inspection',
        name: 'Проведення технічного огляду',
        icon: <SettingsOutlined/>,
        color: '#9D33FF',
    },
    {
        type: 'ac_refill',
        name: 'Заправка кондиціонера',
        icon: <WbSunnyOutlined/>,
        color: '#57FF33',
    },
    {
        type: 'exhaust_system_check',
        name: 'Планова перевірка системи випуску',
        icon: <SmokingRoomsOutlined/>,
        color: '#FF336F',
    },
];
