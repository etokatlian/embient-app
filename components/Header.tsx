import React from 'react';
import Button from '@mui/material/Button';
import { FaPlane, FaWind, FaSpaceShuttle, FaRandom } from 'react-icons/fa';

interface HeaderProps {
  randomizeSounds: () => void;
}

const Header = ({ randomizeSounds }: HeaderProps) => {
  return (
    <div className="bg-green-500 flex justify-between pt-1 pb-1">
      <div className="text-gray-800 ml-9" style={{ fontSize: 36 }}>
        EMBIENT
      </div>
      <Button
        className="rounded-md flex-col mr-9 text-gray-800 border-gray-800 hover:border-gray-800 border-2 hover:border-2"
        variant="outlined"
        size="small"
        onClick={randomizeSounds}
      >
        <FaRandom size="20" />
      </Button>
    </div>
  );
};

export default Header;
