import React, { useState, useEffect } from "react";
import './Hero.css';
// import arrow_icon from '../Assets/arrow_icon.png';
import hand_icon from '../Assets/hand_icon.png';
import hero_img1 from '../Assets/hero4.webp';
import hero_img2 from '../Assets/hreo1.webp';
import hero_img3 from '../Assets/hero2.avif';
import hero_img4 from '../Assets/hero3.webp';

const sliderImages = [hero_img1, hero_img2, hero_img3, hero_img4];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const getImageAt = (indexOffset) => {
        const index = (currentIndex + indexOffset + sliderImages.length) % sliderImages.length;
        return sliderImages[index];
    };

    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-new">
                    <p>new</p>
                    <img src={hand_icon} alt="Hand Icon" />
                </div>

                <div className="hero-main-text">
                    <p>collections for everyone</p>
                </div>

                <h2>NEW ARRIVALS ONLY</h2>

                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    {/* <img src={arrow_icon} alt="Arrow Icon" /> */}
                </div>
            </div>

            <div className="hero-right-carousel">
                <img src={getImageAt(-1)} className="carousel-img small" alt="Left" />
                <img src={getImageAt(0)} className="carousel-img large" alt="Center" />
                <img src={getImageAt(1)} className="carousel-img small" alt="Right" />
            </div>
        </div>
    );
};

export default Hero;
