import { useState, useContext, useRef, useCallback } from 'react'
import Link from 'next/link'
import styles from '../styles/styles.module.scss'
import api from '../utils/api'
import { IFlavorMock } from '@/types'
import Cards from '@/components/Cards'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'
import { FaArrowCircleRight } from "react-icons/fa"

interface IProps {
	data: []
}

export default function Home({ data }: IProps ) {
console.log("DDDDD",data)
	const { reqFlavor, reqSize, setCustomerInputRef } = useContext(CustomerRequestContext)
	const inputUserRef = useRef<HTMLInputElement>(null);
	const [flavorKind, setFlavorKind] = useState<IFlavorMock[]>()
  	const [slideInputContent, setSlideInputContent] = useState(false)
	const [inputUserName, setInputUserName] = useState('')

	//Retorna sempre o mesmo valor, a não ser que data seja modificado
	const loadProducts = useCallback(async () => {
		setFlavorKind(data)
		setSlideInputContent(true)
		setCustomerInputRef(inputUserRef?.current?.value)
	}, [data])

	return (
		<>
			<main className={styles.contentContainer}>

			<section className={`${styles.nameContainer} ${slideInputContent ? styles.slideOutClass : '' }`}>
				<h4>Para começarmos</h4>
				<h1>Informe seu nome</h1>
				<div className={styles.inputContent}>
				{/* <input value={inputUserName} onChange={(e) => setInputUserName(e.target.value) } /> */}
				<input ref={inputUserRef}/>
				{/* <input ref={userCustomerRef} /> */}
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
  const response = await api.get('/');

  data = response.data
  console.log("AAAAAAAAAAAAAAA",data)
  return {
    props: {
      data,
    }
  }
}
