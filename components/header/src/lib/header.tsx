import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
    </div>
  );
}

export default Header;
