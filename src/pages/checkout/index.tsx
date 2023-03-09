import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'

export default function Checkout() {

    const { reqFlavor, reqSize, getTime, reqComplement } = useContext(CustomerRequestContext)
    
    return (
        <div className={styles.checkoutContent}>
            <h3>Obrigado pela preferência</h3>
            <h4>Detalhes do pedido:</h4>
            <h4>Açaí <span>{reqSize}</span> de <span>{reqFlavor}</span></h4>
            <h4>Adicionais: {reqComplement ? reqComplement : 'sem adicionais'}</h4>
            <h4>Seu pedido está sendo preparado e ficará pronto em <span>{getTime()}</span></h4>
        </div>
    )
}
