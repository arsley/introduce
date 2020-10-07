import PropTypes from 'prop-types';

import styles from './BaseContent.module.scss';

export default function BaseContent(props) {
  return (
    <div className="container">
      <div className={styles.content}>
        <h3>{props.heading}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

BaseContent.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.string,
};
