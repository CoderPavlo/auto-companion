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
        name: {uk:'Заміна масла', en:'Oil change'},
        icon: <OilBarrelOutlined />,
        color: '#FF5733',
    },
    {
        type: 'filter_change',
        name: {uk:'Заміна фільтрів', en: 'Change Filters'},
        icon: <FilterAltOutlined />,
        color: '#33FF57',
    },
    {
        type: 'routine_maintenance',
        name: {uk:'Планове технічне обслуговування', en: 'Planned maintenance'},
        icon: <BuildOutlined />,
        color: '#5733FF',
    },
    {
        type: 'brake_system_check',
        name: {uk:'Перевірка та заміна гальмівних систем', en: "Inspection and replacement of brake systems"},
        icon: <TollOutlined/>,
        color: '#FFB633',
    },
    {
        type: 'battery_replacement',
        name: {uk:'Планова заміна акумулятора', en: 'Scheduled battery replacement'},
        icon: <BatteryChargingFullOutlined/>,
        color: '#B633FF',
    },
    {
        type: 'cooling_system_check',
        name: {uk:'Перевірка системи охолодження', en: 'Cooling System Check'},
        icon: <AcUnitOutlined/>,
        color: '#33FFC1',
    },
    {
        type: 'charging_system_check',
        name: {uk:'Планова перевірка системи заряджання', en: 'Scheduled check of the charging system'},
        icon: <BoltOutlined/>,
        color: '#FF5733',
    },
    {
        type: 'spark_plug_change',
        name: {uk:'Заміна свічок запалювання', en: "Replacing spark plugs"},
        icon: <FlareOutlined/>,
        color: '#33C1FF',
    },
    {
        type: 'belt_change',
        name: {uk:'Заміна ременів', en: 'Replacing Belts'},
        icon: <SettingsEthernetOutlined/>,
        color: '#FFC133',
    },
    {
        type: 'technical_inspection',
        name: {uk:'Проведення технічного огляду', en: "Conducting a technical review"},
        icon: <SettingsOutlined/>,
        color: '#9D33FF',
    },
    {
        type: 'ac_refill',
        name: {uk:'Заправка кондиціонера', en: "Filling the air conditioner"},
        icon: <WbSunnyOutlined/>,
        color: '#57FF33',
    },
    {
        type: 'exhaust_system_check',
        name: {uk:'Планова перевірка системи випуску', en: "Scheduled check of the exhaust system"},
        icon: <SmokingRoomsOutlined/>,
        color: '#FF336F',
    },
];
