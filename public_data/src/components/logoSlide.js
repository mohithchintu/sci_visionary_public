import Slider from 'react-infinite-logo-slider'
import i1 from '../assets/1.jpg'
import i2 from '../assets/2.jpg'
import i3 from '../assets/3.jpg'
import i4 from '../assets/4.jpg'
import i5 from '../assets/5.jpg'
import i6 from '../assets/6.jpg'
import i7 from '../assets/7.jpg'
import i8 from '../assets/8.jpg'

const LogoSlide = () => {

    return (
        <div className='mt-12 md:mt-0'>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src={i1} alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i2} alt="any2" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i3} alt="any3" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i4} alt="any4" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i5} alt="any5" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i6} alt="any6" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i7} alt="any7" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={i8} alt="any8" className='w-36' />
                </Slider.Slide>
            </Slider>
        </div>
    )
}

export default LogoSlide