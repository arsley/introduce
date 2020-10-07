import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import styles from './Heading.module.scss';

export default function Heading(props) {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: `/${props.imageName}`,
            amount: 0.5,
          },
        ]}
        style={{ height: props.isFullSize ? '100vh' : '55vh' }}
      >
        <h2 className={styles.caption}>
          <span className={props.needGrayBg ? styles.capBgGray : ''}>{props.caption}</span>
        </h2>
        <p className={styles.comment}>
          <span className={props.needGrayBg ? styles.comBgGray : ''}>{props.comment}</span>
        </p>
      </ParallaxBanner>
    </div>
  );
}

Heading.propTypes = {
  caption: PropTypes.string,
  comment: PropTypes.string,
  imageName: PropTypes.string,
  isFullSize: PropTypes.bool,
  needGrayBg: PropTypes.bool,
};
