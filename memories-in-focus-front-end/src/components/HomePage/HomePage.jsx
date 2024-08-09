import { useState, useEffect } from 'react';
import Carousel from "../Carousel/carousel.jsx"; 
import './HomePage.css';

const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Apply dark mode class to body
    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const imageData = [
        { src: "/a2.jpg", alt: "car in albania" },
        { src: "/m2.jpg", alt: "morocco" },
        { src: "/m3.jpg", alt: "morocco" },
        { src: "/m4.jpg", alt: "morocco" },
        { src: "/m5.jpg", alt: "morocco" },
        { src: "/m6.jpg", alt: "morocco" },
        { src: "/m7.jpg", alt: "morocco" },
        { src: "/m8.jpg", alt: "morocco" },
        { src: "/m9.jpg", alt: "morocco" },
        { src: "/m10.jpg", alt: "morocco" },
        { src: "/m11.jpg", alt: "morocco" },
        { src: "/m12.jpg", alt: "morocco" },
    ];

    return (
        <main>
            <div className="top-content">
                <div className="header-container">
                    <h1>Memories in Focus</h1>
                    <button onClick={toggleTheme} className="theme-toggle-button">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                <h3 className="description-heading">
                   Sign up for a new account to start creating your visual analog film diary
                </h3>
            </div>
            <div className="content-wrapper">
                <div className="carousel-container">
                    <Carousel data={imageData} />
                </div>
                <div className="description-container">
                    <p className="large-text">
                        Step into a world where every moment is captured with a timeless touch. 
                        Memories in Focus is a curated gallery of stunning film photography, showcasing 
                        the art of light, shadow, and emotion through the unique lens of analog film.
                    </p>
                    <p className="large-text">
                        Our collection transcends digital boundaries, offering you a visual journey 
                        that is rich in texture, color, and depth. Each photograph tells a story. 
                        From dreamy landscapes to poignant portraits, our gallery celebrates the 
                        beauty of imperfection and the charm of nostalgia.
                    </p>
                    <div className="bordered-container">
                    <p className="small-bold-text">
                        <strong>Explore</strong> the gallery to discover the grainy elegance of film, where every frame 
                        is a masterpiece waiting to be appreciated. Whether you’re a film photography 
                        enthusiast or simply someone who appreciates the art of storytelling through 
                        imagery, Memories in Focus invites you to experience the magic of the analog world.
                    </p>
                    <p className="small-bold-text">
                        <strong>Join us</strong> on this visual odyssey, and let every frame inspire your imagination.
                    </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
