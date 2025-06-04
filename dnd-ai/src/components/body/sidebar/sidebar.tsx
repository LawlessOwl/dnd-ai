import styles from './styles/sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} sidebar`}>
      <h1 className={styles.sidebarTitle}>Sidebar</h1>
      <button className={styles.sidebarBtn}>Home</button>
      <button className={styles.sidebarBtn}>Profile</button>
      <button className={styles.sidebarBtn}>Chats</button>
      <button className={styles.sidebarBtn}>Settings</button>
      <button className={styles.sidebarBtn}>Logout</button>
    </div>
  )
}

export default Sidebar
