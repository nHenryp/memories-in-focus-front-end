import { useContext, useState, useEffect } from 'react';
import { AuthedUserContext } from '../../App';
import Carousel from "../Carousel/carousel.jsx";  
import './Dashboard.css'; 

const Dashboard = () => {
    const user  = useContext(AuthedUserContext); 
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
        { src: "/m14.jpg", alt: "morocco" },
        { src: "/m13.jpg", alt: "morocco" },
        { src: "/m15.jpg", alt: "morocco" },
        { src: "/m16.jpg", alt: "morocco" },
        { src: "/m17.jpg", alt: "morocco" },
        { src: "/m18.jpg", alt: "morocco" },
        { src: "/m1.jpg", alt: "morocco" },
        { src: "/m2.jpg", alt: "morocco" },
        { src: "/m3.jpg", alt: "morocco" },
        { src: "/m4.jpg", alt: "morocco" },
        { src: "/m5.jpg", alt: "morocco" },
        { src: "/m6.jpg", alt: "morocco" },
    ];

    return (
        <main>
            <div className="header-container">
           <h1>Welcome, {user.username}, to your film photo dashboard</h1>
           <button onClick={toggleTheme} className="theme-toggle-button">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    </div>
            <p>
            Here, every snapshot is a doorway to cherished moments and timeless memories. Dive into a visual journey where each photo tells a story, and every image adds to the rich tapestry of your personal history.

We invite you to become a part of this vibrant gallery by adding your own photos. Whether they capture a fleeting moment of joy, a special occasion, or simply the beauty of everyday life, your images will help build a unique collection of treasured memories.

Upload your photos, and let’s create a beautiful mosaic of experiences together. Celebrate your past, preserve your present, and share your stories with those who matter most. Your memories are waiting to shine—add them now and keep the magic alive!
            </p>
            <div className="content-wrapper">
                <div className="carousel-container">
                    <Carousel data={imageData} />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
