import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { GridStyles } from '~/shared/components/GridStyles';
import Container from '~/client/components/Container';
import TabTopCont from '~/client/components/TabTopCont';
import styles from './Blog.module.scss';
import PostItem from './components/PostItem';
import images from '~/assets/images';
import Pagination from '~/client/components/Pagination';

const cx = classNames.bind(styles);
const cxGrid = classNames.bind(GridStyles);

function Blog() {
    const Posts = [
        {
            id: 8061,
            user_id: 342612,
            title: 'What are differences between any vs unknown vs never in TypeScript',
            slug: 'what-are-differences-between-any-vs-unknown-vs-never-in-typescript',
            description: null,
            meta_title: 'What are differences between any vs unknown vs never in TypeScript',
            meta_description:
                'What are differences between any vs unknown vs never in TypeScriptWhat are differences between any vs unknown vs never...',
            image: null,
            thumbnail: null,
            min_read: 1,
            published_at: '2023-07-23 21:59:34',
            is_approved: true,
            created_at: '2023-07-23T14:59:25.000000Z',
            image_url: '',
            thumbnail_url: '',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 342612,
                username: 'camcam3',
                first_name: 'Cam',
                last_name: 'Cam',
                full_name: 'Cam Cam',
                avatar: 'user_photos/342612/64bcffdde1b45.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_photos/342612/64bcffdde1b45.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [],
        },
        {
            id: 7999,
            user_id: 328840,
            title: 'Sự khác biệt giữa var, let và const trong JavaScript',
            slug: 'su-khac-biet-giua-var-let-va-const-trong-javascript',
            description: null,
            meta_title: 'Sự khác biệt giữa var, let và const trong JavaScript',
            meta_description: 'Tôi muốn thảo luận chi tiết về các từ khóa var,...',
            image: null,
            thumbnail: null,
            min_read: 3,
            published_at: '2023-07-16 11:14:04',
            is_approved: true,
            created_at: '2023-07-16T04:07:11.000000Z',
            image_url: '',
            thumbnail_url: '',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 328840,
                username: 'ttnguyen',
                first_name: '',
                last_name: 'TTnguyen',
                full_name: ' TTnguyen',
                avatar: 'user_avatars/328840/64b0b46673fe1.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/328840/64b0b46673fe1.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 1,
                    name: 'Javascript',
                    slug: 'javascript',
                },
            ],
        },
        {
            id: 7939,
            user_id: 18810,
            title: '`Tất tần tật` về cải thiện Performance của 1 trang web🚀',
            slug: 'tat-tan-tat-ve-cai-thien-performance-cua-1-trang-web',
            description: null,
            meta_title: '`Tất tần tật` về cải thiện Performance của 1 trang web🚀',
            meta_description:
                'Ở bài viết này, chúng ta cùng nhau tìm hiểu về các vấn đề liên quan đến Performance ở phía FE. Không dài dòng nữa,...',
            image: 'blog_posts/7940/64a645ead15bb.png',
            thumbnail: 'blog_posts/7940/64a645ea70312.png',
            min_read: 8,
            published_at: '2023-07-06 11:41:15',
            is_approved: true,
            created_at: '2023-07-06T03:16:42.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7940/64a645ead15bb.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7940/64a645ea70312.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 18810,
                username: 'khang-ng',
                first_name: 'Dev',
                last_name: 'Quèn',
                full_name: 'Dev Quèn',
                avatar: 'user_avatars/18810/631175d26916f.png',
                is_pro: true,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 1,
                    name: 'Javascript',
                    slug: 'javascript',
                },
                {
                    id: 2,
                    name: 'ReactJS',
                    slug: 'reactjs',
                },
                {
                    id: 109,
                    name: 'Front-end',
                    slug: 'front-end',
                },
                {
                    id: 121,
                    name: 'HTML-CSS',
                    slug: 'html-css',
                },
            ],
        },
        {
            id: 7923,
            user_id: 18810,
            title: 'Một số "cẩm nang" hay khi làm việc với HTML/CSS😂 ',
            slug: 'mot-so-cam-nang-hay-khi-lam-viec-voi-htmlcss',
            description: null,
            meta_title: 'Một số "cẩm nang" hay khi làm việc với HTML/CSS😂 ',
            meta_description:
                'Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn...',
            image: 'blog_posts/7924/64a248750a94c.jpg',
            thumbnail: 'blog_posts/7924/64a2487459fe5.jpg',
            min_read: 4,
            published_at: '2023-07-03 11:03:01',
            is_approved: true,
            created_at: '2023-07-03T03:23:38.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a248750a94c.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 18810,
                username: 'khang-ng',
                first_name: 'Dev',
                last_name: 'Quèn',
                full_name: 'Dev Quèn',
                avatar: 'user_avatars/18810/631175d26916f.png',
                is_pro: true,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 109,
                    name: 'Front-end',
                    slug: 'front-end',
                },
                {
                    id: 121,
                    name: 'HTML-CSS',
                    slug: 'html-css',
                },
            ],
        },
        {
            id: 7921,
            user_id: 18810,
            title: '"Kết nối trước" với preconnect, prefetch để làm gì?',
            slug: 'ket-noi-truoc-voi-preconnect-prefetch-de-lam-gi',
            description: null,
            meta_title: '"Kết nối trước" với preconnect, prefetch để làm gì?',
            meta_description: 'Ở đây chắc hẳn ai cũng từng dùng google fonts để nhúng fonts vào...',
            image: 'blog_posts/7922/64a23b23aaff6.png',
            thumbnail: 'blog_posts/7922/64a23b234c52e.png',
            min_read: 3,
            published_at: '2023-07-03 10:06:12',
            is_approved: true,
            created_at: '2023-07-03T02:45:30.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7922/64a23b23aaff6.png',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7922/64a23b234c52e.png',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 18810,
                username: 'khang-ng',
                first_name: 'Dev',
                last_name: 'Quèn',
                full_name: 'Dev Quèn',
                avatar: 'user_avatars/18810/631175d26916f.png',
                is_pro: true,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 109,
                    name: 'Front-end',
                    slug: 'front-end',
                },
                {
                    id: 121,
                    name: 'HTML-CSS',
                    slug: 'html-css',
                },
            ],
        },
        {
            id: 7435,
            user_id: 323800,
            title: 'Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới',
            slug: 'cam-thay-kho-khan-khi-chuyen-sang-hoc-mot-ngon-ngu-moi',
            description: null,
            meta_title: 'Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới',
            meta_description:
                'Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...',
            image: null,
            thumbnail: null,
            min_read: 2,
            published_at: '2023-05-17 16:02:44',
            is_approved: true,
            created_at: '2023-05-17T08:37:09.000000Z',
            image_url: '',
            thumbnail_url: '',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 323800,
                username: 'alanking',
                first_name: 'Alan',
                last_name: 'King',
                full_name: 'Alan King',
                avatar: 'user_photos/323800/6464902b20c91.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 2,
                    name: 'ReactJS',
                    slug: 'reactjs',
                },
                {
                    id: 109,
                    name: 'Front-end',
                    slug: 'front-end',
                },
            ],
        },
        {
            id: 7255,
            user_id: 315518,
            title: 'Học viên Funix lạc đường tới F8',
            slug: 'hoc-vien-funix-lac-duong-toi-f8',
            description: null,
            meta_title: 'Học viên Funix lạc đường tới F8',
            meta_description:
                'Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...',
            image: 'blog_posts/7256/644487532d9df.jpg',
            thumbnail: 'blog_posts/7256/64448752c63c4.jpg',
            min_read: 1,
            published_at: '2023-04-23 08:18:13',
            is_approved: true,
            created_at: '2023-04-23T01:13:54.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/644487532d9df.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 315518,
                username: 'vuchi1',
                first_name: 'Vũ',
                last_name: 'Chi',
                full_name: 'Vũ Chi',
                avatar: 'user_photos/315518/643b789615dd1.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [
                {
                    id: 2,
                    name: 'ReactJS',
                    slug: 'reactjs',
                },
                {
                    id: 19,
                    name: 'NodeJS',
                    slug: 'nodejs',
                },
                {
                    id: 121,
                    name: 'HTML-CSS',
                    slug: 'html-css',
                },
                {
                    id: 346,
                    name: 'Funix',
                    slug: 'funix',
                },
            ],
        },
        {
            id: 7241,
            user_id: 164944,
            title: 'Đánh giá ÉP TÁM với một số trường',
            slug: 'danh-gia-ep-tam-voi-mot-so-truong',
            description: null,
            meta_title: 'Đánh giá ÉP TÁM với một số trường',
            meta_description:
                'Hí anh em!\r\nVào vấn đề luôn, trong thời gian mình có quá nhiều thời gian rỗi nên mình đã bỏ 1 ít thời gian và tiền đi kiểm chứng và...',
            image: 'blog_posts/7242/64424fe72185f.jpg',
            thumbnail: 'blog_posts/7242/64424fe6e225f.jpg',
            min_read: 2,
            published_at: '2023-04-21 15:57:11',
            is_approved: true,
            created_at: '2023-04-21T08:21:51.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7242/64424fe72185f.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7242/64424fe6e225f.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 164944,
                username: 'naixnai',
                first_name: '',
                last_name: 'GzW',
                full_name: ' GzW',
                avatar: 'user_avatars/164944/6442473f625f6.jpg',
                is_pro: true,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/164944/6442473f625f6.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [],
        },
        {
            id: 6935,
            user_id: 184722,
            title: 'Learn JavaScript while Playing Games — Gamify Your Learning',
            slug: 'learn-javascript-while-playing-games-gamify-your-learning',
            description: null,
            meta_title: 'Learn JavaScript while Playing Games — Gamify Your Learning',
            meta_description:
                'Trong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...',
            image: 'blog_posts/6936/6422afa5e2b54.jpg',
            thumbnail: 'blog_posts/6936/6422afa5a62f8.jpg',
            min_read: 8,
            published_at: '2023-03-28 16:13:10',
            is_approved: true,
            created_at: '2023-03-28T08:44:56.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5e2b54.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6936/6422afa5a62f8.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 184722,
                username: '38trinhgiaminhd16cnpm7',
                first_name: 'Minh',
                last_name: 'Trịnh',
                full_name: 'Minh Trịnh',
                avatar: 'user_photos/184722/62383632b8e58.jpg',
                is_pro: false,
                is_admin: false,
                avatar_url: 'https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg',
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [],
        },
        {
            id: 6781,
            user_id: 101166,
            title: 'Tìm hiểu về Serif và Sans-serif',
            slug: 'tim-hieu-ve-serif-va-sans-serif',
            description: null,
            meta_title: 'Tìm hiểu về Serif và Sans-serif?',
            meta_description: null,
            image: 'blog_posts/6782/6412fd42eb7c5.jpg',
            thumbnail: 'blog_posts/6782/6412fd42b7052.jpg',
            min_read: 12,
            published_at: '2023-03-16 18:28:03',
            is_approved: true,
            created_at: '2023-03-16T10:49:01.000000Z',
            image_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6782/6412fd42eb7c5.jpg',
            thumbnail_url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/6782/6412fd42b7052.jpg',
            is_bookmark: false,
            is_published: true,
            user: {
                id: 101166,
                username: 'anhtuannguyen',
                first_name: 'Anh Tuấn',
                last_name: 'Nguyễn',
                full_name: 'Anh Tuấn Nguyễn',
                avatar: 'user_photos/101166/614d67375420d.jpg',
                is_pro: true,
                is_admin: true,
                avatar_url: images.noAvatar,
                cover_url: '',
                is_comment_blocked: false,
                is_blocked: false,
            },
            tags: [],
        },
    ];

    return (
        <Container>
            <TabTopCont
                heading={'Featured Articles'}
                desc={`Summary of articles sharing experiences of self-learning online programming and web programming techniques.`}
            />
            <div className={cx('body')}>
                <section className={cxGrid('row')}>
                    <section className={cxGrid(['col', 'c-12', 'm-12', 'l-8'])}>
                        <div className={cx('left-layout')}>
                            <div>
                                {Posts.map((post, index) => (
                                    <PostItem key={index} {...post} />
                                ))}
                                <Pagination />
                            </div>
                        </div>
                    </section>
                    <section className={cxGrid(['col', 'c-12', 'm-12', 'l-4'])}>
                        <div className={cx('topics-list-wrapper')}>
                            <h3>Các chủ đề được đề xuất</h3>
                            <ul className={cx('topics')}>
                                <li>
                                    <Link to={'/blog/topic/front-end-mobile-apps'}>Front-end / Mobile apps</Link>
                                </li>
                                <li>
                                    <Link to={'/blog/topic/back-end-devops'}>Back-end / Devops</Link>
                                </li>
                                <li>
                                    <Link to={'/blog/topic/ui-ux-design'}>UI / UX / Design</Link>
                                </li>
                                <li>
                                    <Link to={'/blog/topic/others'}>Others</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('brands-wrapper')} style={{ '--sticky': '8rem', '--align': 'flex-start' }}>
                            <div className={cx('content')}>
                                <Link className={cx('banner')} to="/landing/htmlcss" target="_blank" rel="noreferrer">
                                    <img
                                        src={images.banners.htmlcssProTopic}
                                        alt="HTML CSS Pro Banner"
                                        title="HTML CSS Pro Banner"
                                    />
                                </Link>
                                <a
                                    className={cx('banner')}
                                    href="https://www.youtube.com/c/F8VNOfficial"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={images.banners.youtubeTopic}
                                        alt="F8 Youtube Banner"
                                        title="F8 Youtube Banner"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Container>
    );
}

export default Blog;
