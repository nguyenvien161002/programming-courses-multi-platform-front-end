import classNames from 'classnames/bind';

import SlideShow from './components/SlideShow';
import SlideItem from './components/SlideItem';
import images from '~/assets/images';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const slideItems = [
        // {
        //     heading: 'HTML CSS Pro Course',
        //     desc: 'This is the most complete and detailed course you can find on the Internet!',
        //     link: {
        //         title: 'Learn more',
        //         href: 'https://fullstack.edu.vn/landing/htmlcss',
        //     },
        //     imgSrc: images.banners.htmlCssPro,
        //     styles: {
        //         '--create-hover-color': '#6828fa',
        //         background: 'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))',
        //     },
        // },
        // {
        //     heading: 'Learn ReactJS for Free!',
        //     desc: 'ReactJS course from basic to advanced. The result of this course is that you can do most common projects with ReactJS.',
        //     link: {
        //         title: 'Sign up now',
        //         href: 'https://fullstack.edu.vn/courses/reactjs?ref=banner',
        //     },
        //     imgSrc: images.banners.reactjs,
        //     styles: {
        //         '--create-hover-color': '#2877FA',
        //         background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
        //     },
        // },
        // {
        //     heading: 'Student Achievements',
        //     desc: 'To achieve good results in everything, we need to define a clear goal for that. Learning to program is no exception.',
        //     link: {
        //         title: 'View results',
        //         href: 'https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html',
        //     },
        //     imgSrc: images.banners.stuAchi,
        //     styles: {
        //         '--create-hover-color': '#7612ff',
        //         background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))',
        //     },
        // },
        // {
        //     heading: 'F8 on Youtube',
        //     desc: 'F8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love F8 programming will be there...',
        //     link: {
        //         title: 'Visit channel',
        //         href: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
        //     },
        //     imgSrc: images.banners.youtube,
        //     styles: {
        //         '--create-hover-color': '#fe215e',
        //         background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
        //     },
        // },
        {
            heading: 'F8 on Facebook',
            desc: 'F8 is mentioned everywhere, where there are job opportunities for IT careers and there are people who love F8 programming will be there.',
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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-show')}>
                <SlideShow>
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
                </SlideShow>
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Home;
