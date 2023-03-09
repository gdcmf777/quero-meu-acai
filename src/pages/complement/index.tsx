import React, { useContext } from 'react'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function Complement() {

  const { reqFlavor, reqSize, setReqComplement } = useContext(CustomerRequestContext)

  const getComplement = e => setReqComplement(e.target.value)

  return (
    <div className={styles.complementContent}>
      <h3>Seu pedido até aqui: </h3>
      {reqFlavor&& reqSize&& 
        (<span>{`Açaí de ${reqFlavor} com tamanho ${reqSize}`}</span>)
      }
      <div className={styles.chooseContent}>
        <h4>Escolha um acompanhamento</h4>
        <div className={styles.selectContent}>
          <select onChange={(e) => getComplement(e)}>
            <option value=''>Selecione</option>
            <option value='paçoca'>Paçoca</option>
            <option value='granola'>Granola</option>
            <option value='leiteNinho'>Leite Ninho</option>
          </select>
        </div>
      </div>
      <div className={styles.linkContent}>
        <Link href="/checkout/" >Finalizar Pedido</Link>
      </div>
    </div>
  )
}
