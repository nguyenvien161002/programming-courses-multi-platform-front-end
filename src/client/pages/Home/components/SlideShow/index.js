import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlickSlideStyles from '../StylesSlickSlide';
import SlideItem from '../SlideItem';
import images from '~/assets/images';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow() {
    const slideItems = [
        {
            heading: 'Learn ReactJS for Free!',
            desc: 'ReactJS course from basic to advanced. The result of this course is that you can do most common projects with ReactJS.',
            link: {
                title: 'Sign up now',
                href: 'https://fullstack.edu.vn/courses/reactjs?ref=banner',
            },
            imgSrc: images.banners.reactjs,
            styles: {
                '--create-hover-color': '#2877FA',
                background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
            },
        },
        {
            heading: 'HTML CSS Pro Course',
            desc: 'This is the most complete and detailed course you can find on the Internet!',
            link: {
                title: 'Learn more',
                href: 'https://fullstack.edu.vn/landing/htmlcss',
            },
            imgSrc: images.banners.htmlCssPro,
            styles: {
                '--create-hover-color': '#6828fa',
                background: 'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))',
            },
        },
        {
            heading: 'Student Achievements',
            desc: 'To achieve good results in everything, we need to define a clear goal for that. Learning to program is no exception.',
            link: {
                title: 'View results',
                href: 'https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html',
            },
            imgSrc: images.banners.stuAchi,
            styles: {
                '--create-hover-color': '#7612ff',
                background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))',
            },
        },
        {
            heading: 'V3D8 on Youtube',
            desc: 'V3D8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love V3D8 programming will be there...',
            link: {
                title: 'Visit channel',
                href: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
            },
            imgSrc: images.banners.youtube,
            styles: {
                '--create-hover-color': '#fe215e',
                background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
            },
        },
        {
            heading: 'V3D8 on Facebook',
            desc: 'V3D8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love V3D8 programming will be there.',
            link: {
                title: 'Visit Facebook',
                href: 'https://www.facebook.com/f8vnofficial',
            },
            imgSrc: images.banners.facebook,
            styles: {
                '--create-hover-color': '#007efe',
                background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
            },
        },
    ];

    const sliderRef = useRef();

    const Arrow = ({ cls, icon, onClick }) => (
        <div className={cx(['arrow', cls])} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </div>
    );

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease',
        pauseOnHover: true,
        prevArrow: <Arrow cls={'prev'} icon={faChevronLeft} onClick={() => sliderRef.current.slickPrev()} />,
        nextArrow: <Arrow cls={'next'} icon={faChevronRight} onClick={() => sliderRef.current.slickNext()} />,
    };

    return (
        <SlickSlideStyles>
            <div className={cx('wrapper')}>
                <Slider {...settings} ref={sliderRef}>
                    {slideItems.map((item, index) => (
                        <SlideItem
                            key={index}
                            heading={item.heading}
                            desc={item.desc}
                            link={item.link}
                            imgSrc={item.imgSrc}
                            styles={item.styles}
                        />
                    ))}
                </Slider>
            </div>
        </SlickSlideStyles>
    );
}

export default SlideShow;
