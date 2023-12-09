import { useFormik } from 'formik';
import axios from 'axios';

import classNames from 'classnames/bind';
import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

function Courses() {
    const course = {
        id: 3,
        title: 'Responsive Với Grid System',
        slug: 'responsive-web-design',
        description:
            'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.',
        image: 'courses/3.png',
        icon: 'courses/3/6200afe1240bb.png',
        videoType: 'youtube',
        video: 'uz5LIP85J5Y',
        oldPrice: 0,
        price: 0,
        preOrderPrice: 0,
        studentsCount: 40779,
        isPro: false,
        isComingSoon: false,
        isSelling: false,
        publishedAt: '2020-02-10T14:23:13.000000Z',
        isRegistered: false,
        userProgress: 0,
        lastCompletedAt: null,
        imageUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
        iconUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png',
        videoUrl: 'https://www.youtube.com/watch?v=uz5LIP85J5Y',
        landingPageUrl: '/courses/responsive-web-design',
        isPreOrder: false,
        isPublished: true,
    };

    const { handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            id: 2,
            image: '',
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('course', JSON.stringify(course));
            formData.append('image', values.image);

            console.log(formData.get('image'));

            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/v1/docs/courses',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization:
                        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNGQyNzIxNy1kNmZiLTRmYWYtYWRlOC1hNmNhZDBmOTUyN2MiLCJzdWIiOiJqb2huZG9lMkBleGFtcGxlLmNvbSIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8iLCJpYXQiOjE3MDAyOTg1OTAsImV4cCI6MTcwMDM4NDk5MH0.39HVLObYNpTkZYNgiNA-TS1mM9y-e0daTnoU6KstS5c',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin': '*',
                },
                data: formData,
            };
            axios
                .request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <div className={cx('wrapper')}>
            <h1>Update Course</h1>
            <form onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data">
                <div>
                    <label htmlFor="id">Id</label>
                    <input type="number" name="id" />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue('image', file);
                        }}
                    />
                </div>
                <button type="submit" className={cx('btn-update')}>
                    Update Course
                </button>
            </form>
        </div>
    );
}

export default Courses;
