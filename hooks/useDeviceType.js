import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window !== 'undefined') {
      return getDeviceType();
    } else {
      return 'desktop'; // Default value during SSR
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

const getDeviceType = () => {
  const width = window.innerWidth;
  return width >= 768 ? 'desktop' : 'mobile';
};

export default useDeviceType;