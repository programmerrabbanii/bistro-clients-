import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../src/assets/./images/home/01.jpg'
import img2 from '../../src/assets/./images/home/02.jpg'
import img3 from '../../src/assets/./images/home/03.png'
import img4 from '../../src/assets/./images/home/04.jpg'
import img5 from '../../src/assets/./images/home/05.png'
import img6 from '../../src/assets/./images/home/06.png'


const Bannar = () => {

    return (
        <div>
             <Carousel>
                <div>
                    <img src={img1} alt="" />
                    
                </div>
                <div>
                    <img src={img2} alt="" />
                    
                </div>
                <div>
                    <img src={img3} alt="" />
                   
                </div>
                <div>
                    <img src={img4} alt="" />
                   
                </div>
                <div>
                    <img src={img5} alt="" />
                   
                </div>
                <div>
                    <img src={img6} alt="" />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Bannar;