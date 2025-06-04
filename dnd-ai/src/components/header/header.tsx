import styles from './styles/header.module.scss'

const Header = () => {
  return (
    <div className={`${styles.header} header`}>
      <h1 className={`${styles.logo} title`}>DND AI</h1>
    </div>
  )
}

export default Header
