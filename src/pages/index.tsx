import { useState, useContext, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/styles.module.scss'
import Button from '@/components/Button'
import api from '../utils/api'
import { IFlavorMock } from '@/types'
import Cards from '@/components/Cards'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'
import { FaArrowCircleRight } from "react-icons/fa" 

export default function Home({ data }: object ) {
  
  const { reqFlavor, reqSize } = useContext(CustomerRequestContext)
  const inputUserRef = useRef(null);
  const [flavorKind, setFlavorKind] = useState<IFlavorMock[]>()
  const [slideInputContent, setSlideInputContent] = useState(false);

  const loadProducts = async () => {
    setFlavorKind(data)
    setSlideInputContent(true)
  }

  return (
    <>
      <main className={styles.contentContainer}>
        
        <section className={`${styles.nameContainer} ${slideInputContent ? styles.slideOutClass : '' }`}>
          <h4>Para começarmos</h4>
          <h1>Informe seu nome</h1>
          <div className={styles.inputContent}>
            <input ref={inputUserRef}/>
            <FaArrowCircleRight size={30} onClick={() => loadProducts()}/>
          </div>
        </section>

        {/* <Button titleBtn="Continuar" loadMock={loadProducts}/> */}
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

export const getStaticProps = async () => {

  let data = [{}]
  const response = await api.get('/produtos');
  data = response.data

  return {
    props: {
      data,
    }
  }
}