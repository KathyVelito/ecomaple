import { Carousel } from "react-bootstrap"
import banner1 from '../assets/banner-iphone1.jpeg'
import banner2 from '../assets/banner-ipad.png'
import banner3 from '../assets/Swatch-essentials.jpeg'
import banner4 from '../assets/banner-iphone-ofert.png'

export default function CustomCarousel() {
    return (
        <Carousel fade variant="dark" className="bg-light text-white">
             <Carousel.Item className="h-">
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    fluid
                />
            </Carousel.Item>

            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                    fluid
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                    fluid
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 h-"
                    src={banner4}
                    alt="First slide"
                    fluid
                />
            </Carousel.Item>

        </Carousel>
    )
}