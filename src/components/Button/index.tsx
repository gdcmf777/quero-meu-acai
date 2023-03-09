import React from 'react'
import styles from './styles.module.scss'

interface IBtnProps {
    titleBtn: string,
    loadMock: () => void,
}

export default function Buton({ titleBtn, loadMock }: IBtnProps) {
  return (
    <div className={styles.btnContent}>
        <button onClick={() => loadMock()}>
            <span>{titleBtn}</span>
        </button>
    </div>
  )
}
