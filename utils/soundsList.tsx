import { IoIosWater } from 'react-icons/io';
import { FaPlane, FaWind, FaSpaceShuttle } from 'react-icons/fa';
import { GiMeditation, GiNightSleep, GiFurnace } from 'react-icons/gi';
import { SiCoffeescript } from 'react-icons/si';

const soundsList = [
  {
    name: 'rain',
    src: 'rain.mp3',
    icon: <IoIosWater size="70" />,
  },
  {
    name: 'fan',
    src: 'fan.mp3',
    icon: <FaWind size="70" />,
  },
  {
    name: 'plane',
    src: 'plane.mp3',
    icon: <FaPlane size="70" />,
  },
  {
    name: 'meditation',
    src: 'meditation.mp3',
    icon: <GiMeditation size="70" />,
  },
  {
    name: 'space',
    src: 'space.mp3',
    icon: <FaSpaceShuttle size="70" />,
  },
  {
    name: 'sleep',
    src: 'sleep.mp3',
    icon: <GiNightSleep size="70" />,
  },
  {
    name: 'coffee',
    src: 'coffee.mp3',
    icon: <SiCoffeescript size="70" />,
  },
  {
    name: 'furnace',
    src: 'furnace.mp3',
    icon: <GiFurnace size="70" />,
  },
];

export default soundsList;
