import React, { useEffect } from 'react';
import './Preloader.css';
import preloaderGif from '../../animation/preloader1.gif'; // Path to your preloader GIF

const Preloader = () => {
    useEffect(() => {
        // Add a timeout to hide the loader after 2.76 seconds
        const loader = document.getElementById('pre-loader');
        const timeout = setTimeout(() => {
            if (loader) {
                loader.style.display = 'none'; // Hide the preloader
            }
        }, 2760); // Match the duration of your GIF

        // Cleanup timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div id="pre-loader" className="preloader">
            <img
                src={preloaderGif}
                alt="Loading..."
                className="preloader-gif"
            />
        </div>
    );
};

export default Preloader;
