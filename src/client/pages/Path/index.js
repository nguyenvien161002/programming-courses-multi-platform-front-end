import classNames from 'classnames/bind';

import Container from '~/client/components/Container';
import TopContent from '~/client/components/TopContent';
import BottomContent from '~/client/components/BottomContent';
import PathItem from './components/PathItem';
import styles from './Path.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Road() {
    return (
        <Container>
            <TopContent
                heading={'Learning paths'}
                desc={`To get started on a good start, you should focus on one learning path. 
                For example, to work as a "Front-end Developer" you should focus on the "Front-end" roadmap.`}
            />
            <div className={cx('body')}>
                <div className={cx('list')}>
                    <PathItem
                        title={'Front-end learning path'}
                        desc={`Front-end developer is the person who builds the website interface. 
                                In this section, F8 will share with you the roadmap to become a Front-end developer.`}
                        srcThumb={images.road.frontEnd}
                        to={'/learning-paths/front-end-development'}
                    />
                    <PathItem
                        title={'Back-end learning path'}
                        desc={`In contrast to front-end, back-end developers are people who work with data, 
                                the work is often more logical. Let's learn more about the Back-end learning path.`}
                        srcThumb={images.road.backEnd}
                        to={'/learning-paths/back-end-development'}
                    />
                </div>
                <BottomContent
                    title={'Join the F8 student community on Facebook'}
                    titleBtn={'Join a group'}
                    desc={`Thousands of others are learning the same route as you. Please participate in Q&A,
                            share and support each other in the learning process.`}
                    srcThumb={images.fbGroupCards}
                    href={'https://www.facebook.com/groups/f8official'}
                />
            </div>
        </Container>
    );
}

export default Road;
