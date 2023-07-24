import classNames from 'classnames/bind';

import ScrollList from '~/client/components/ScrollList';
import SlideShow from './components/SlideShow';
import styles from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    // Call API ở đây
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

    const featuredBlogPosts = [
        {
            id: 65,
            user_id: 1,
            title: 'Tổng hợp các sản phẩm của học viên tại F8 👏👏',
            slug: 'tong-hop-cac-san-pham-cua-hoc-vien-tai-f8',
            description: null,
            meta_title: 'Tổng hợp các sản phẩm của học viên tại F8',
            meta_description:
                'Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới...',
            image: 'blog_posts/65/6139fe28a9844.png',
            thumbnail: 'blog_posts/65/6139fe28a9844.png',
            min_read: 6,
            published_at: '2021-09-09 17:46:12',
            is_approved: true,
            created_at: '2021-09-09T02:35:13.000000Z',
            reactions_count: 993,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 1,
                username: 'son-dang',
                first_name: 'Sơn',
                last_name: 'Đặng',
                full_name: 'Sơn Đặng',
                avatar: 'user_avatars/1/623d4b2d95cec.png',
                is_pro: true,
                is_admin: true,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 279,
            user_id: 1,
            title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
            slug: 'phan-1-tao-du-an-reactjs-voi-webpack-va-babel',
            description: null,
            meta_title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
            meta_description:
                'Tự tạo dự án ReactJS với webpack và babel nhằm mục đích giúp chúng ta hiểu rõ hơn về về cách create-react-app đã tạo ra dự án ReactJS như thế nào và quan...',
            image: 'blog_posts/279/6153f692d366e.jpg',
            thumbnail: 'blog_posts/279/6153f6932dcea.jpg',
            min_read: 12,
            published_at: '2021-09-29 12:16:03',
            is_approved: true,
            created_at: '2021-09-13T08:14:19.000000Z',
            reactions_count: 684,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f6932dcea.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 1,
                username: 'son-dang',
                first_name: 'Sơn',
                last_name: 'Đặng',
                full_name: 'Sơn Đặng',
                avatar: 'user_avatars/1/623d4b2d95cec.png',
                is_pro: true,
                is_admin: true,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 677,
            user_id: 18159,
            title: 'Cách đưa code lên GitHub và tạo GitHub Pages',
            slug: 'cach-dua-code-len-github-va-tao-github-pages',
            description: null,
            meta_title: 'Cách đưa code lên GitHub và tạo GitHub Pages',
            meta_description:
                'Ở bài viết này, mình sẽ hướng dẫn cách để đưa code lên trên Github và tạo Github Pages để xem được trang web mà các bạn đưa lên  như thế nào.',
            image: 'blog_posts/677/615436b218d0a.png',
            thumbnail: 'blog_posts/677/615436b284513.png',
            min_read: 4,
            published_at: '2021-09-29 16:49:38',
            is_approved: true,
            created_at: '2021-09-29T01:20:27.000000Z',
            reactions_count: 519,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b284513.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 18159,
                username: 'vo-minh-kha',
                first_name: 'Võ Minh',
                last_name: 'Kha',
                full_name: 'Võ Minh Kha',
                avatar: 'user_avatars/18159/6466353972973.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 51,
            user_id: 56767,
            title: 'Ký sự ngày thứ 25 học ở F8 ',
            slug: 'ky-su-ngay-thu-25-hoc-o-f8-1',
            description: null,
            meta_title: 'Ký sự ngày thứ 25 học ở F8 ',
            meta_description:
                'Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1....',
            image: 'blog_posts/51/6139c6453456e.png',
            thumbnail: 'blog_posts/51/6139c645e1a84.png',
            min_read: 1,
            published_at: '2021-09-09 15:31:02',
            is_approved: true,
            created_at: '2021-09-09T01:06:41.000000Z',
            reactions_count: 499,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c645e1a84.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 56767,
                username: 'son-son-16',
                first_name: 'Sơn',
                last_name: 'Sơn',
                full_name: 'Sơn Sơn',
                avatar: 'https://graph.facebook.com/1642531882604203/picture?width=400&height=400',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://graph.facebook.com/1642531882604203/picture?width=400&height=400',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 107,
            user_id: 8,
            title: 'Các nguồn tài nguyên hữu ích cho 1 front-end developer',
            slug: 'cac-nguon-tai-nguyen-huu-ich-cho-1-front-end-developer',
            description: null,
            meta_title: 'Các nguồn tài nguyên hữu ích cho 1 front-end developer',
            meta_description: null,
            image: 'blog_posts/107/613a1f3685814.png',
            thumbnail: 'blog_posts/107/613a1f36eed00.png',
            min_read: 2,
            published_at: '2021-09-09 21:50:31',
            is_approved: true,
            created_at: '2021-09-09T06:57:39.000000Z',
            reactions_count: 458,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f36eed00.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 8,
                username: 'duong-vuong',
                first_name: 'Vương',
                last_name: 'Dương',
                full_name: 'Vương Dương',
                avatar: 'https://graph.facebook.com/547825429409669/picture?width=400&height=400',
                is_pro: true,
                is_admin: false,
                avatar_url: 'https://graph.facebook.com/547825429409669/picture?width=400&height=400',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 1671,
            user_id: 9143,
            title: 'Thời gian và Động lực',
            slug: 'thoi-gian-va-dong-luc',
            description: null,
            meta_title: 'Thời gian và Động lực',
            meta_description:
                'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
            image: 'blog_posts/1671/61b6368983c16.jpg',
            thumbnail: 'blog_posts/1671/61b6368a3a089.jpg',
            min_read: 6,
            published_at: '2021-12-13 05:00:00',
            is_approved: true,
            created_at: '2021-12-12T10:18:10.000000Z',
            reactions_count: 389,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368a3a089.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 9143,
                username: 'dong-ngo',
                first_name: 'Đông',
                last_name: 'Ngô',
                full_name: 'Đông Ngô',
                avatar: 'user_avatars/9143/6263caafdf588.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/9143/6263caafdf588.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 273,
            user_id: 74901,
            title: 'Tổng hợp tài liệu tự học tiếng anh cơ bản.',
            slug: 'tong-hop-tai-lieu-tu-hoc-tieng-anh-co-ban',
            description: null,
            meta_title: 'Tổng hợp tài liệu tự học tiếng anh cơ bản.',
            meta_description:
                'Tài liệu tự học tiếng anh full không che. Bạn cần đọc 7749 lần các kiến thức sẽ thấm nhuần vào não bạn.',
            image: 'blog_posts/273/614043e523ad9.png',
            thumbnail: 'blog_posts/273/614043e58f413.png',
            min_read: 8,
            published_at: '2021-09-15 08:30:00',
            is_approved: true,
            created_at: '2021-09-13T05:09:09.000000Z',
            reactions_count: 291,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/273/614043e523ad9.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/273/614043e58f413.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 74901,
                username: 'le-thanh-trung-5',
                first_name: 'Lê Thành',
                last_name: 'Trung',
                full_name: 'Lê Thành Trung',
                avatar: 'user_avatars/74901/626aa252cdb22.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/74901/626aa252cdb22.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
        {
            id: 791,
            user_id: 64652,
            title: 'Học như thế nào là phù hợp ?',
            slug: 'hoc-nhu-the-nao-la-phu-hop',
            description: null,
            meta_title: 'Học như thế nào là phù hợp ?',
            meta_description: 'Mình xin chia sẽ cách học hiệu qua của mình khi học ở F8 một thời gian !',
            image: 'blog_posts/791/615de64de7e8f.jpg',
            thumbnail: 'blog_posts/791/615de64e3f449.jpg',
            min_read: 4,
            published_at: '2021-10-07 01:09:18',
            is_approved: true,
            created_at: '2021-10-06T08:04:38.000000Z',
            reactions_count: 265,
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615de64de7e8f.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/791/615de64e3f449.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 64652,
                username: 'tien-pham-ngoc',
                first_name: 'Tien Pham',
                last_name: 'Ngoc',
                full_name: 'Tien Pham Ngoc',
                avatar: 'https://avatar-redirect.appspot.com/google/110021593610685676732?size=400',
                is_pro: false,
                is_admin: false,
                avatar_url: images.noAvatar,
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
        },
    ];

    const featuredVideos = [
        {
            id: 760,
            title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?',
            slug: 'sinh-vien-it-di-thuc-tap-tai-doanh-nghiep-can-biet-nhung-gi',
            image: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
            video: 'YH-E4Y3EaT4',
            duration: 2091,
            yt_view_count: 232030,
            yt_comment_count: 230,
            yt_like_count: 5910,
            image_url: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 456,
            title: 'Phương pháp học lập trình của Admin F8?',
            slug: 'phuong-phap-hoc-lap-trinh-cua-admin-f8',
            image: 'https://i.ytimg.com/vi/DpvYHLUiZpc/maxresdefault.jpg',
            video: 'DpvYHLUiZpc',
            duration: 1446,
            yt_view_count: 114173,
            yt_comment_count: 335,
            yt_like_count: 5690,
            image_url: 'https://i.ytimg.com/vi/DpvYHLUiZpc/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 696,
            title: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
            slug: 'code-thieu-nhi-battle-tranh-gianh-tra-sua-size-l',
            image: 'https://i.ytimg.com/vi/sgq7BH6WxL8/maxresdefault.jpg',
            video: 'sgq7BH6WxL8',
            duration: 1510,
            yt_view_count: 269781,
            yt_comment_count: 181,
            yt_like_count: 5626,
            image_url: 'https://i.ytimg.com/vi/sgq7BH6WxL8/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 44,
            title: 'Bạn sẽ làm được gì sau khóa học?',
            slug: 'ban-se-lam-duoc-gi-sau-khoa-hoc',
            image: 'https://i.ytimg.com/vi/R6plN3FvzFY/maxresdefault.jpg',
            video: 'R6plN3FvzFY',
            duration: 195,
            yt_view_count: 734126,
            yt_comment_count: 128,
            yt_like_count: 4475,
            image_url: 'https://i.ytimg.com/vi/R6plN3FvzFY/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 692,
            title: 'Javascript có thể làm được gì? Giới thiệu qua về trang F8 | Học lập trình Javascript cơ bản',
            slug: 'javascript-co-the-lam-duoc-gi-gioi-thieu-qua-ve-trang-f8-hoc-lap-trinh-javasc',
            image: 'https://i.ytimg.com/vi/0SJE9dYdpps/maxresdefault.jpg',
            video: '0SJE9dYdpps',
            duration: 473,
            yt_view_count: 613898,
            yt_comment_count: 116,
            yt_like_count: 3396,
            image_url: 'https://i.ytimg.com/vi/0SJE9dYdpps/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 533,
            title: 'Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?',
            slug: 'lam-sao-de-co-thu-nhap-cao-va-di-xa-hon-trong-nganh-it',
            image: 'https://i.ytimg.com/vi/oF7isq9IjZM/maxresdefault.jpg',
            video: 'oF7isq9IjZM',
            duration: 1540,
            yt_view_count: 78538,
            yt_comment_count: 238,
            yt_like_count: 3342,
            image_url: 'https://i.ytimg.com/vi/oF7isq9IjZM/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 690,
            title: 'ReactJS là gì? Tại sao nên học ReactJS?',
            slug: 'reactjs-la-gi-tai-sao-nen-hoc-reactjs',
            image: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg',
            video: 'x0fSBAgBrOQ',
            duration: 641,
            yt_view_count: 318890,
            yt_comment_count: 353,
            yt_like_count: 3115,
            image_url: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg',
            video_url: null,
        },
        {
            id: 79,
            title: 'Học Flexbox qua ví dụ',
            slug: 'hoc-flexbox-qua-vi-du',
            image: 'https://i.ytimg.com/vi/G19jZzK5FWI/maxresdefault.jpg',
            video: 'G19jZzK5FWI',
            duration: 2104,
            yt_view_count: 184719,
            yt_comment_count: 178,
            yt_like_count: 2731,
            image_url: 'https://i.ytimg.com/vi/G19jZzK5FWI/maxresdefault.jpg',
            video_url: null,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-show')}>
                <SlideShow />
            </div>
            <div className={cx('content')}>
                <ScrollList
                    isNew={true}
                    title={'Pro Course'}
                    courses={proCourses}
                    subHeading={false}
                    toViewAll={''}
                    titleViewAll={'View Road'}
                />
                <ScrollList
                    isNew={false}
                    title={'Free Course'}
                    courses={freeCourses}
                    subHeading={true}
                    toViewAll={'/learning-paths'}
                    titleViewAll={'View Road'}
                />
                <ScrollList
                    isNew={false}
                    title={'Featured Posts'}
                    courses={featuredBlogPosts}
                    subHeading={false}
                    toViewAll={'/blog'}
                    titleViewAll={'View All'}
                />
                <ScrollList
                    isNew={false}
                    title={'Featured Videos'}
                    courses={featuredVideos}
                    subHeading={false}
                    toViewAll={'/videos'}
                    titleViewAll={'View All'}
                />
            </div>
        </div>
    );
}

export default Home;
