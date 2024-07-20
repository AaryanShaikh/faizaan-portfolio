import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop'); // Default to 'desktop'

    useEffect(() => {
        if (typeof screen !== 'undefined') {
            const handleResize = () => {
                setDeviceType(getDeviceType());
            };

            // Set initial device type on client side
            handleResize();

            window.addEventListener('resize', handleResize);

            // Cleanup listener on unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return deviceType;
};

const getDeviceType = () => {
    const width = screen.width;
    console.log("width", screen.width);
    return width >= 768 ? 'desktop' : 'mobile';
};

export default useDeviceType;