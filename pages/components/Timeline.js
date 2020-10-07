import PropTypes from 'prop-types';

import styles from './Timeline.module.scss';

export async function getStaticProps() {
  return {
    props: {
      timelineItems: [],
    },
  };
}

export default function Timeline(props) {
  const timelineItems = props.timelineItems.map((item, i) => (
    <div className={styles.timelineItem} date={item.date} key={i}>
      <h3>{item.heading}</h3>
      <p>{item.comment}</p>
    </div>
  ));
  return (
    <div className="container">
      {timelineItems}
    </div>
  );
}

// e.g. { heading: "Intern", comment: "on Incredible Co., Ltd", date: "2020-01-01 2020-02-01" }
Timeline.propTypes = {
  timelineItems: PropTypes.arrayOf({
    heading: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
  }),
};
