import React from 'react'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2 className={styles.title}>Quero Meu Açaí</h2>
      </div>
    </header>
  )
}
