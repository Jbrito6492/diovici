import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Diovici</span>
      </h1>
      <p className={headerStyles.description}>
        Pants to fit your lifestyle
      </p>
    </div>
  )
}

export default Header;