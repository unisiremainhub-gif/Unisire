import React, { useEffect, useRef } from "react";

const HeroCompanyLogo = () => {
  const companyLogos = [
    {
      id: 1,
      name: "Company One",
      logo: "LogoSlider/photo/photo5.png",
      width: "150px",
      height: "60px",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "LogoSlider/photo/photo2.png",
      width: "130px",
      height: "30px",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "LogoSlider/photo/photo3.png",
      width: "140px",
      height: "65px",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "LogoSlider/photo/photo4.png",
      width: "160px",
      height: "30px",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "LogoSlider/photo/photo1.png",
      width: "150px",
      height: "30px",
    },
    {
      id: 6,
      name: "Company Six",
      logo: "LogoSlider/photo/photo6.png",
      width: "120px",
      height: "70px",
    },
    {
      id: 7,
      name: "Company Seven",
      logo: "LogoSlider/photo/photo7.png",
      width: "140px",
      height: "60px",
    },
    {
      id: 8,
      name: "Company Eight",
      logo: "LogoSlider/photo/photo8.png",
      width: "130px",
      height: "30px",
    },
  ];

  const allLogos = [...companyLogos, ...companyLogos];

  const sliderRef = useRef(null);
  const isPausedRef = useRef(false);
  const scrollWidthRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const speed = 0.5;

    if (slider) {
      // Calculate half width once
      scrollWidthRef.current = slider.scrollWidth / 2;

      let animationId;
      const scroll = () => {
        if (!isPausedRef.current) {
          // Update our tracked scroll position
          scrollLeftRef.current += speed;

          // Apply the scroll position
          slider.scrollLeft = scrollLeftRef.current;

          // Reset when we reach halfway
          if (scrollLeftRef.current >= scrollWidthRef.current) {
            // Reset our tracked position and update the DOM
            scrollLeftRef.current = 0;
            slider.scrollLeft = 0;
          }
        }
        animationId = requestAnimationFrame(scroll);
      };

      animationId = requestAnimationFrame(scroll);

      return () => cancelAnimationFrame(animationId);
    }
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 0",
        backgroundColor: "rgb(236 242 248)",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "40px",
          color: "#888",
          letterSpacing: "1px",
          filter: "grayscale(100%)",
        }}
      >
        Our Learners Shine in These Companies
      </h2>

      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            alignItems: "center",
            overflowX: "hidden",
            scrollBehavior: "auto", // Changed from 'smooth' to 'auto'
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {allLogos.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              style={{
                flex: "0 0 auto",
                margin: "0 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{
                  width: company.width,
                  height: company.height,
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: "0.7",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCompanyLogo;
