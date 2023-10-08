import React, { useEffect, useState } from 'react';
import './CupPreloader.css';

const CupPreloader = () => {
  const [preloadingDone, setPreloadingDone] = useState(false);

  useEffect(() => {
    // Simulate preloading by setting preloadingDone to true after a delay
    setTimeout(() => {
      setPreloadingDone(true);
    }, 5000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {!preloadingDone && (
        <div className="scene preloader-root">
          <div className="shadow"></div>
          <div className="jumper">
            <div className="spinner">
              <div className="scaler">
                <div className="loader">
                  <div className="cuboid">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CupPreloader;
