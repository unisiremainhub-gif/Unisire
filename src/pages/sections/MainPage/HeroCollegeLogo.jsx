import React, { useEffect, useRef } from "react";

const HeroCollegeLogo = () => {
  const companyLogos = [
    {
      id: 1,
      name: "Company One",
      logo: "LogoSlider/photo2/photo1.png",
      width: "150px",
      height: "100px",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "LogoSlider/photo2/photo2.png",
      width: "130px",
      height: "100px",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "LogoSlider/photo2/photo3.png",
      width: "140px",
      height: "100px",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "LogoSlider/photo2/photo4.png",
      width: "160px",
      height: "100px",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "LogoSlider/photo2/photo5.png",
      width: "150px",
      height: "100px",
    },
    {
      id: 6,
      name: "Company Six",
      logo: "LogoSlider/photo2/photo6.png",
      width: "120px",
      height: "100px",
    },
    {
      id: 7,
      name: "Company Seven",
      logo: "LogoSlider/photo2/photo7.png",
      width: "140px",
      height: "100px",
    },
    {
      id: 8,
      name: "Company Eight",
      logo: "LogoSlider/photo2/photo8.png",
      width: "130px",
      height: "100px",
    },
    {
      id: 9,
      name: "Company Nine",
      logo: "LogoSlider/photo2/photo9.png",
      width: "130px",
      height: "100px",
    },
    {
      id: 10,
      name: "Company Ten",
      logo: "LogoSlider/photo2/photo10.png",
      width: "130px",
      height: "100px",
    },
    {
      id: 11,
      name: "Company Eleven",
      logo: "LogoSlider/photo2/photo11.png",
      width: "130px",
      height: "100px",
    },
    {
      id: 12,
      name: "Company Twelve",
      logo: "LogoSlider/photo2/photo12.png",
      width: "130px",
      height: "100px",
    },
  ];

  const allLogos = [...companyLogos, ...companyLogos]; // for infinite loop
  const sliderRef = useRef(null);
  const isPausedRef = useRef(false);
  const scrollWidthRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const speed = 0.5;
    let animationId;

    // Calculate half width once
    if (slider) {
      scrollWidthRef.current = slider.scrollWidth / 2;
    }

    const scroll = () => {
      if (!isPausedRef.current && slider) {
        // Update our tracked scroll position
        scrollLeftRef.current += speed;

        // Apply the scroll position
        slider.scrollLeft = scrollLeftRef.current;

        // Reset when we reach halfway
        if (scrollLeftRef.current >= scrollWidthRef.current) {
          // Instead of resetting scrollLeft directly, we reset our tracked position
          // and then update the DOM in a way that prevents the visible jump
          scrollLeftRef.current = 0;
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
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
        Trusted by Students from Top Colleges
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
            scrollBehavior: "auto",
          }}
        >
          {allLogos.map((company, index) => (
            <div
              key={`logo-${index}`}
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

export default HeroCollegeLogo;
