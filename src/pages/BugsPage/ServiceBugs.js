import { ReactComponent as service_abs } from './images/service_abs.svg';
import { ReactComponent as service_air_filter_engine } from './images/service_air_filter_engine.svg';
import { ReactComponent as service_air_filter } from './images/service_air_filter.svg';
import { ReactComponent as service_all_wheel_drive } from './images/service_all_wheel_drive.svg';
import { ReactComponent as service_auto_headlight_corrector } from './images/service_auto_headlight_corrector.svg';
import { ReactComponent as service_brake_pads } from './images/service_brake_pads.svg';
import { ReactComponent as service_coolant_engine } from './images/service_coolant_engine.svg';
import { ReactComponent as service_esp } from './images/service_esp.svg';
import { ReactComponent as service_fuel } from './images/service_fuel.svg';
import { ReactComponent as service_headlights } from './images/service_headlights.svg';
import { ReactComponent as service_soot_filter } from './images/service_soot_filter.svg';
import { ReactComponent as service_tire_press } from './images/service_tire_press.svg';
import { ReactComponent as service_transponder_key } from './images/service_transponder_key.svg';
import { ReactComponent as service_washer_fluid } from './images/service_washer_fluid.svg';


export const serviceBugs = [
{
    id: 'service_abs',
    icon: service_abs,
    isNeedsServiced: true,
    uk: 'Може мати кілька варіантів відображення на панелі приладів, але незалежно від цього на всіх автомобілях позначає одне і те ж - поява неполадки в системі ABS, і що в даний момент антиблокувальна система коліс не працює. Рух в даному випадку можна робити, але розраховувати на спрацювання АБС не потрібно, гальма спрацьовуватимуть як завжди.',
    en: "It may have several display options on the instrument panel, but regardless of this, it indicates the same thing on all cars - the appearance of a problem in the ABS system, and that the anti-lock braking system is not working at the moment. You can move in this case, but you don't need to count on the ABS to work, the brakes will work as usual.",
},
{
    id: 'service_air_filter_engine',
    icon: service_air_filter_engine,
    isNeedsServiced: true,
    uk: 'Повітряний фільтр системи впуску двигуна забруднений, необхідна його заміна.',
    en: 'The air filter of the engine intake system is dirty, it needs to be replaced.',
},
{
    id: 'service_air_filter',
    icon: service_air_filter,
    isNeedsServiced: true,
    uk: 'Показує, що є проблеми з повітряним фільтром. Його потрібно прочистити або замінити.',
    en: 'Indicates that there are problems with the air filter. It needs to be cleaned or replaced.',
},
{
    id: 'service_all_wheel_drive',
    icon: service_all_wheel_drive,
    isNeedsServiced: true,
    uk: 'У повному приводі виявлено несправність.',
    en: 'A malfunction was detected in the four-wheel drive.',
},
{
    id: 'service_auto_headlight_corrector',
    icon: service_auto_headlight_corrector,
    isNeedsServiced: true,
    uk: 'Несправність системи регулювання кута нахилу світла фар головного світла.',
    en: 'Malfunction of the headlight beam angle adjustment system.',
},
{
    id: 'service_brake_pads',
    icon: service_brake_pads,
    isNeedsServiced: true,
    uk: 'Зношування гальмівних колодок досягло граничного рівня.',
    en: 'Brake pad wear has reached its limit.',
},
{
    id: 'service_coolant_engine',
    icon: service_coolant_engine,
    isNeedsServiced: true,
    uk: 'Розширювальний бачок з хвилями сигналізує про низький рівень охолоджуючої рідини в системі. Але варто врахувати, що лампа рідини, що охолоджує, не завжди горить саме при низькому рівні, можливо, просто «глюк» датчика або поплавка в розширювальному бачку.',
    en: 'An expansion tank with waves signals a low level of coolant in the system. But it is worth considering that the lamp of the cooling liquid does not always light up precisely at a low level, perhaps just a "bug" of the sensor or a float in the expansion tank.',
},
{
    id: 'service_esp',
    icon: service_esp,
    isNeedsServiced: true,
    uk: 'Значок ESP може або періодично загорятися або горіти постійно. Лампочка з таким написом повідомляє про проблеми системи стабілізації. Індикатор Electronic Stability Program, як правило, світиться з однієї з двох причин – або датчик кута повороту вийшов з ладу, або спрацював датчик увімкнення стоп-сигналу. Хоча, буває проблема і серйозніша, наприклад, накрився датчик тиску гальмівної системи.',
    en: 'The ESP icon can either light up intermittently or stay on all the time. A light with such an inscription reports problems with the stabilization system. The Electronic Stability Program light is usually illuminated for one of two reasons - either the steering angle sensor has failed or the brake light activation sensor has tripped. Although, there can be a more serious problem, for example, the pressure sensor of the braking system has become covered.',
},
{
    id: 'service_fuel',
    icon: service_fuel,
    isNeedsServiced: false,
    uk: 'Паливо закінчується.',
    en: 'Running out of fuel.',
},
{
    id: 'service_headlights',
    icon: service_headlights,
    isNeedsServiced: true,
    uk: 'Не працює одна або більше ламп зовнішнього освітлення, причиною може стати несправність електричного кола.',
    en: 'One or more outdoor lighting lamps do not work, the cause may be a malfunction of the electrical circuit.',
},
{
    id: 'service_soot_filter',
    icon: service_soot_filter,
    isNeedsServiced: true,
    uk: 'Переповнений фільтр сажі двигуна.',
    en: 'Engine particulate filter overflowed.',
},
{
    id: 'service_tire_press',
    icon: service_tire_press,
    isNeedsServiced: false,
    uk: 'Низький тиск в шинах',
    en: 'Low tire pressure',
},
{
    id: 'service_transponder_key',
    icon: service_transponder_key,
    isNeedsServiced: true,
    uk: 'Автомобіль не бачить ключ-транспондер.',
    en: 'The car does not see the transponder key.',
},
{
    id: 'service_washer_fluid',
    icon: service_washer_fluid,
    isNeedsServiced: true,
    uk: 'Значок омивача говорить про низький рівень рідини в розширювальному бачку скла. Такий індикатор горить не лише при реальному зниженні рівня, але й якщо засмічився датчик рівня (контакти датчика покриваються нальотом через неякісну рідину), даючи хибний сигнал. На деяких автомобілях датчик рівня спрацьовує за невідповідності специфікації рідини в омивачі.',
    en: 'The washer icon indicates a low liquid level in the glass expansion tank. Such an indicator lights up not only when the level actually drops, but also if the level sensor is clogged (the contacts of the sensor are covered with plaque due to poor-quality liquid), giving a false signal. On some cars, the level sensor is triggered when the fluid specification in the washer does not match.',
},
]