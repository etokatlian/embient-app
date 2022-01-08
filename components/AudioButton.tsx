import React from 'react';
import { FiVolume2 } from 'react-icons/fi';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

interface IAudioButtonProps {
  icon: React.ReactElement;
  src: string;
  name: string;
  onPress: () => void;
  isActive: boolean;
}

const AudioButton = React.forwardRef(
  ({ src, name, onPress, isActive, icon }: IAudioButtonProps, ref) => {
    const [audioVolume, setAudioVolume] = React.useState(100);
    const capitalizedSoundName = () => name.charAt(0).toUpperCase() + name.slice(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      event.stopPropagation();
      // @ts-ignore
      ref.volume = newValue / 100;
      setAudioVolume(newValue);
    };

    return (
      <Button
        onClick={onPress}
        className="rounded-md px-24 py-16 w-2 flex-col ml-5 mb-5 mr-5 text-green-500 border-green-300 hover:border-green-300"
        variant="outlined"
      >
        <span className="absolute text-green-500 top-1 left-3 mt-1">{capitalizedSoundName()}</span>
        {icon}
        {isActive && (
          <div className="w-32 absolute bottom-0" onClick={(e) => e.stopPropagation()}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <Slider
                aria-label="Volume"
                onChange={handleChange as any}
                value={audioVolume}
                // @ts-ignore
                color="warning"
              />
              <FiVolume2 size="30" />
            </Stack>
          </div>
        )}

        <audio src={src} ref={ref as React.LegacyRef<HTMLAudioElement> | undefined}></audio>
      </Button>
    );
  }
);

AudioButton.displayName = 'AudioButton';

export default AudioButton;
