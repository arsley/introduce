import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

export default function Footer(props) {
  const links = props.links.map((link, i) => (
    <li key={i}>
      <a href={link.href} target="_blank" rel="noreferrer">{link.name}</a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <ul>{links}</ul>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf({
    href: PropTypes.string,
    name: PropTypes.string,
  }),
};
