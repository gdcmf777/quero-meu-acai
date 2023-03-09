import { useState, useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/styles.module.scss'
import Button from '@/components/Button'
import { mock } from '../mock/mock'
import { IFlavorMock } from '@/types'
import Cards from '@/components/Cards'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'

export default function Home() {
  
  const [flavorKind, setFlavorKind] = useState<IFlavorMock[]>()
  const { reqFlavor, reqSize } = useContext(CustomerRequestContext)

  const loadMock = () => setFlavorKind(mock)

  return (
    <>
      <main className={styles.contentContainer}>
        <div className={styles.sloganHome}>
          <h2>Açaí: o sabor do Brasil em cada tigela!</h2>
        </div>
        <Button titleBtn="Monte seu pedido" loadMock={loadMock}/>
        {flavorKind&&
            <div className={styles.flavorContent}>
                <h2>Selecione um sabor:</h2>
                <div className={styles.cardsContent}>
                <>
                    {flavorKind?.map((flavor, i) => (
                        <Cards 
                            key={i}
                            id={flavor.id} 
                            kind={flavor.kind} 
                            imageUrl={flavor.imageUrl} 
                            flavorKind={flavorKind}
                        />
                    ))
                    }
                </>
                </div>
                {reqFlavor&& reqSize&&(
                <div className={styles.linkContent}>
                    <Link href="/complement/" >Continuar</Link>
                </div>
                )}
            </div>
        }
      </main>
    </>
  )
}
