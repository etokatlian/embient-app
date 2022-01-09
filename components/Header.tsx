import React from 'react';
import { FaRandom, FaFireAlt } from 'react-icons/fa';

interface HeaderProps {
  randomizeSounds: () => void;
}

const Header = ({ randomizeSounds }: HeaderProps) => {
  return (
    <div className="bg-green-600 flex justify-between pt-1 pb-1 content-center">
      <div className="text-gray-800 ml-9 flex items-center" style={{ fontSize: 26 }}>
        <div>
          <FaFireAlt size="20" className="animate-pulse mr-2" />
        </div>
        EMBIENT
      </div>
      <button
        className="rounded-md mr-9 border-2 p-2 text-gray-800 border-gray-800 hover:bg-green-400 hover:border-gray-700 focus:outline-none"
        onClick={randomizeSounds}
      >
        <FaRandom size="20" />
      </button>
    </div>
  );
};

export default Header;
