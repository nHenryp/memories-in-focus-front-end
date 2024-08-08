import 'react';
import Carousel from "../Carousel/carousel.jsx"; 
import './HomePage.css'


const HomePage = () => {
    const imageData = [
        { src: "../../../public/m1.jpg", alt: "morocco" },
        { src: "../../../public/m2.jpg", alt: "morocco" },
        { src: "../../../public/m3.jpg", alt: "morocco" },
        { src: "../../../public/m4.jpg", alt: "morocco" },
        { src: "../../../public/m5.jpg", alt: "morocco" },
        { src: "../../../public/m6.jpg", alt: "morocco" },
        { src: "../../../public/m7.jpg", alt: "morocco" },
        { src: "../../../public/m8.jpg", alt: "morocco" },
        { src: "../../../public/m9.jpg", alt: "morocco" },
        { src: "../../../public/m10.jpg", alt: "morocco" },
        { src: "../../../public/m11.jpg", alt: "morocco" },
        { src: "../../../public/m12.jpg", alt: "morocco" },
    ];

    return (
        <main>
            <h1>Welcome to the Homepage</h1>
            <h3>
                If you sign up for a new account, you will have the ability to sign in
                and see your super secret dashboard.
            </h3>
            <Carousel data={imageData} />
        </main>
    );
};

export default HomePage;
