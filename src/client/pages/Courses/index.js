import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Container from '~/client/components/Container';
import TabTopCont from '~/client/components/TabTopCont';
import ScrollList from '~/client/components/ScrollList';
import TopBotCont from '~/client/components/TabBotCont';
import styles from './Courses.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Courses() {

    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://api-gateway.fullstack.edu.vn/api/combined-courses')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCourses(data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //             setLoading(false);
    //         });
    // }, []);

    // console.log(courses);

    const proCourses = [
        {
            id: 15,
            title: 'HTML CSS Pro',
            slug: 'htmlcss',
            description:
                'Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.',
            image: 'courses/15/62f13d2424a47.png',
            icon: 'courses/15/62385d6c63dfa.png',
            video_type: 'upload',
            video: null,
            old_price: 2499000,
            price: 1299000,
            pre_order_price: 699000,
            students_count: 3628,
            is_pro: true,
            is_coming_soon: false,
            is_selling: true,
            published_at: '2022-08-18T17:00:00.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png',
            video_url: '',
            landing_page_url: '/landing/htmlcss',
            is_pre_order: false,
            is_published: true,
        },
        {
            id: 19,
            title: 'JavaScript Pro',
            slug: 'javascript-pro',
            description: 'Khóa học JavaScript Pro',
            image: 'courses/19/62f13cb607b4b.png',
            icon: 'courses/19/62f13cb685c81.png',
            video_type: 'upload',
            video: null,
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 0,
            is_pro: true,
            is_coming_soon: true,
            is_selling: false,
            published_at: '2023-07-31T17:00:00.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png',
            video_url: '',
            landing_page_url: '/landing/javascript-pro',
            is_pre_order: false,
            is_published: false,
        },
        {
            id: 20,
            title: 'NextJS Pro',
            slug: 'reactjs-pro',
            description: 'Khóa học NextJS Pro',
            image: 'courses/20/648020fc16597.png',
            icon: 'courses/20/648020fcc8000.png',
            video_type: 'upload',
            video: null,
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 0,
            is_pro: true,
            is_coming_soon: true,
            is_selling: false,
            published_at: '2023-11-30T17:00:00.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/20/648020fcc8000.png',
            video_url: '',
            landing_page_url: '/landing/reactjs-pro',
            is_pre_order: false,
            is_published: false,
        },
        {
            id: 24,
            title: 'NodeJS Pro',
            slug: 'nodejs-pro',
            description: 'NodeJS Pro',
            image: 'courses/24/648021c0652c6.png',
            icon: 'courses/24/648021c0cd73f.png',
            video_type: 'upload',
            video: null,
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 0,
            is_pro: true,
            is_coming_soon: true,
            is_selling: false,
            published_at: '2024-04-06T06:20:00.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0652c6.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/24/648021c0cd73f.png',
            video_url: '',
            landing_page_url: '/landing/nodejs-pro',
            is_pre_order: false,
            is_published: false,
        },
    ];

    const freeCourses = [
        {
            id: 7,
            title: 'Kiến Thức Nhập Môn IT',
            slug: 'lessons-for-newbie',
            description:
                'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.',
            image: 'courses/7.png',
            icon: 'courses/7/6200b81f52d83.png',
            video_type: 'youtube',
            video: 'M62l1xA5Eu8',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 111993,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png',
            video_url: 'https://www.youtube.com/watch?v=M62l1xA5Eu8',
            landing_page_url: '/courses/lessons-for-newbie',
            is_published: true,
        },
        {
            id: 21,
            title: 'Lập trình C++ cơ bản, nâng cao',
            slug: 'lap-trinh-c-co-ban-toi-nang-cao',
            description:
                'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.',
            image: 'courses/21/63e1bcbaed1dd.png',
            icon: 'courses/21/63e1bcbb2dec5.png',
            video_type: 'youtube',
            video: 'Da1tpV9TMU0',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 12737,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2023-02-07T02:51:00.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbb2dec5.png',
            video_url: 'https://www.youtube.com/watch?v=Da1tpV9TMU0',
            landing_page_url: '/courses/lap-trinh-c-co-ban-toi-nang-cao',
            is_published: true,
        },
        {
            id: 2,
            title: 'HTML CSS từ Zero đến Hero',
            slug: 'html-css',
            description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.',
            image: 'courses/2.png',
            icon: 'courses/2/6200aecea81de.png',
            video_type: 'youtube',
            video: 'R6plN3FvzFY',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 167892,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png',
            video_url: 'https://www.youtube.com/watch?v=R6plN3FvzFY',
            landing_page_url: '/courses/html-css',
            is_published: true,
        },
        {
            id: 3,
            title: 'Responsive Với Grid System',
            slug: 'responsive-web-design',
            description:
                'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.',
            image: 'courses/3.png',
            icon: 'courses/3/6200afe1240bb.png',
            video_type: 'youtube',
            video: 'uz5LIP85J5Y',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 38350,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png',
            video_url: 'https://www.youtube.com/watch?v=uz5LIP85J5Y',
            landing_page_url: '/courses/responsive-web-design',
            is_published: true,
        },
        {
            id: 1,
            title: 'Lập Trình JavaScript Cơ Bản',
            slug: 'javascript-co-ban',
            description:
                'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',
            image: 'courses/1.png',
            icon: 'courses/1/6200ad9d8a2d8.png',
            video_type: 'youtube',
            video: '0SJE9dYdpps',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 112845,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png',
            video_url: 'https://www.youtube.com/watch?v=0SJE9dYdpps',
            landing_page_url: '/courses/javascript-co-ban',
            is_published: true,
        },
        {
            id: 12,
            title: 'Lập Trình JavaScript Nâng Cao',
            slug: 'javascript-nang-cao',
            description:
                'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...',
            image: 'courses/12.png',
            icon: 'courses/12/6200af2620118.png',
            video_type: 'youtube',
            video: 'MGhw6XliFgo',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 30328,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png',
            video_url: 'https://www.youtube.com/watch?v=MGhw6XliFgo',
            landing_page_url: '/courses/javascript-nang-cao',
            is_published: true,
        },
        {
            id: 14,
            title: 'Làm việc với Terminal & Ubuntu',
            slug: 'windows-terminal-wsl',
            description:
                'Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.',
            image: 'courses/14/624faac11d109.png',
            icon: 'courses/14/624faac2ee23d.png',
            video_type: 'youtube',
            video: '7ppRSaGT1uw',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 13442,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png',
            video_url: 'https://www.youtube.com/watch?v=7ppRSaGT1uw',
            landing_page_url: '/courses/windows-terminal-wsl',
            is_published: true,
        },
        {
            id: 13,
            title: 'Xây Dựng Website với ReactJS',
            slug: 'reactjs',
            description:
                'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.',
            image: 'courses/13/13.png',
            icon: 'courses/13/6200af9262b30.png',
            video_type: 'youtube',
            video: 'x0fSBAgBrOQ',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 50628,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png',
            video_url: 'https://www.youtube.com/watch?v=x0fSBAgBrOQ',
            landing_page_url: '/courses/reactjs',
            is_published: true,
        },
        {
            id: 6,
            title: 'Node & ExpressJS',
            slug: 'nodejs',
            description:
                'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.',
            image: 'courses/6.png',
            icon: 'courses/6/6200afb926038.png',
            video_type: 'youtube',
            video: 'z2f7RHgvddc',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 34106,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
            icon_url: 'https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png',
            video_url: 'https://www.youtube.com/watch?v=z2f7RHgvddc',
            landing_page_url: '/courses/nodejs',
            is_published: true,
        },
        {
            id: 4,
            title: 'App "Đừng Chạm Tay Lên Mặt"',
            slug: 'tool-canh-bao-so-len-mat',
            description:
                'Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.',
            image: 'courses/4/61a9e9e701506.png',
            icon: null,
            video_type: 'youtube',
            video: 'r6GWbQL-qwA',
            old_price: 0,
            price: 0,
            pre_order_price: 0,
            students_count: 8084,
            is_pro: false,
            is_coming_soon: false,
            is_selling: false,
            published_at: '2020-02-10T14:23:13.000000Z',
            is_registered: false,
            user_progress: 0,
            last_completed_at: null,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
            icon_url: '',
            video_url: 'https://www.youtube.com/watch?v=r6GWbQL-qwA',
            landing_page_url: '/courses/tool-canh-bao-so-len-mat',
            is_published: true,
        },
    ];

    return (
        <Container>
            <TabTopCont
                heading={'Courses'}
                desc={`The courses are designed to be suitable for both newbies, many courses are free, 
                quality, the content is easy to understand.`}
            />
            <div className={cx('body')}>
                <ScrollList
                    isNew={true}
                    title={'Pro Courses'}
                    courses={proCourses}
                    subHeading={false}
                    toViewAll={''}
                    titleViewAll={'View Road'}
                />
                <ScrollList
                    isNew={false}
                    title={'Free Courses'}
                    courses={freeCourses}
                    subHeading={true}
                    toViewAll={'/learning-paths'}
                    titleViewAll={'View Road'}
                />
                <TopBotCont
                    title={'Looking for a learning path for newbies?'}
                    titleBtn={'View learning path'}
                    desc={`The courses are designed for beginners, the learning path is clear, 
                    the content is easy to understand.`}
                    srcThumb={images.fbGroupCards}
                    to={'/learning-paths'}
                />
            </div>
        </Container>
    );
}

export default Courses;
