import { ReactComponent as emergency_battery } from './images/emergency_battery.svg';
import { ReactComponent as emergency_check_engine } from './images/emergency_check_engine.svg';
import { ReactComponent as emergency_door_open } from './images/emergency_door_open.svg';
import { ReactComponent as emergency_engine_overheating } from './images/emergency_engine_overheating.svg';
import { ReactComponent as emergency_oil_level } from './images/emergency_oil_level.svg';
import { ReactComponent as emergency_open_hood } from './images/emergency_open_hood.svg';
import { ReactComponent as emergency_open_trunk } from './images/emergency_open_trunk.svg';
import { ReactComponent as emergency_pneumatic_suspension } from './images/emergency_pneumatic_suspension.svg';
import { ReactComponent as emergency_power_steering } from './images/emergency_power_steering.svg';
import { ReactComponent as emergency_safety_belt } from './images/emergency_safety_belt.svg';

export const emergencyBugs = [
    {
        id: 'emergency_battery',
        icon: emergency_battery,
        isNeedsServiced: true,
        uk: "Значок акумулятора спалахує, якщо падає напруга в бортовій мережі, часто така проблема пов'язана з відсутністю заряду акумулятора від генератора, тому його ще можуть називати «значок генератора». На автомобілях із гібридним двигуном такий індикатор доповнюється написом «MAIN» унизу.",
        en: "The battery icon lights up if the voltage in the on-board network drops, often this problem is related to the lack of battery charge from the generator, so it can also be called the 'generator icon'. On cars with a hybrid engine, such an indicator is supplemented with the inscription 'MAIN' at the bottom .",
    },
    {
        id: 'emergency_check_engine',
        icon: emergency_check_engine,
        isNeedsServiced: true,
        uk: "Піктограма двигуна, деякі водії можуть називати «значок інжектора» або check, може горіти жовтим кольором, коли працює двигун. Він інформує про наявність помилок двигуна та несправність його електронних систем. Для визначення причини його появи на табло панелі приладів роблять самодіагностику або комп'ютерну діагностику.",
        en: "The engine icon, some drivers may call the 'injector icon' or check, can light up in yellow when the engine is running. It informs about the presence of engine errors and malfunctions in its electronic systems. To determine the reason for its appearance on the dashboard, the instrument panel performs a self-diagnosis or computer diagnostics.",
    },
    {
        id: 'emergency_door_open',
        icon: emergency_door_open,
        isNeedsServiced: false,
        uk: 'Відкриті двері в авто.',
        en: 'The car door is open.',
    },
    {
        id: 'emergency_engine_overheating',
        icon: emergency_engine_overheating,
        isNeedsServiced: true,
        uk: 'Повишена температура в системі охолодження двигуна.',
        en: 'Increased temperature in the engine cooling system.',
    },
    {
        id: 'emergency_oil_level',
        icon: emergency_oil_level,
        isNeedsServiced: true,
        uk: 'Піктограма мастила – свідчить про падіння рівня масла у двигуні автомобіля. Такий значок загоряється при запуску двигуна, і не гасне через кілька секунд або може загорятися під час руху. Такий факт говорить про проблеми в системі мастила або падіння рівня чи тиску олії. Значок масла на панелі може бути з крапелькою або з хвилями внизу, на деяких автомобілях індикатор доповнений написом min, senso, oil level (написи жовтого кольору) або літери L і H (характеризують низький і високий рівень масла).',
        en: "The oil icon indicates a drop in the oil level in the car's engine. Such an icon lights up when the engine is started, and does not go out after a few seconds or may light up while driving. This fact indicates problems in the lubrication system or a drop in oil level or pressure. The oil icon on the panel can be with a droplet or with waves at the bottom, on some cars the indicator is supplemented with the inscription min, senso, oil level (yellow inscriptions) or the letters L and H (characterizing low and high oil levels).",
    },
    {
        id: 'emergency_open_hood',
        icon: emergency_open_hood,
        isNeedsServiced: false,
        uk: 'Відкритий капот',
        en: 'Open hood',
    },
    {
        id: 'emergency_open_trunk',
        icon: emergency_open_trunk,
        isNeedsServiced: false,
        uk: 'Відкритий багажник',
        en: 'Open trunk',
    },
    {
        id: 'emergency_pneumatic_suspension',
        icon: emergency_pneumatic_suspension,
        isNeedsServiced: true,
        uk: 'Попередження пневматичної підвіски',
        en: 'Air suspension warning',
    },
    {
        id: 'emergency_power_steering',
        icon: emergency_power_steering,
        isNeedsServiced: true,
        uk: 'Несправність підсилювача керма',
        en: 'Power steering malfunction',
    },
    {
        id: 'emergency_safety_belt',
        icon: emergency_safety_belt,
        isNeedsServiced: false,
        uk: 'Непристебнутий пасажир в авто',
        en: 'Passenger not wearing a seatbelt in a car',
    },

]