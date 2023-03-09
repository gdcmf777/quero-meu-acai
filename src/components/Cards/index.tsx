import React, { useState, useContext } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { IDetailMock, IFlavorMock } from '@/types'
import { CustomerRequestContext } from '@/context/CustomerRequestContext'

interface ICardProps {
    id: number,
    kind: string,
    imageUrl: string,
    flavorKind: IFlavorMock[]
  }

export default function Cards({ id, kind, imageUrl, flavorKind }: ICardProps) {
    const [selectedId, setSelectedId] = useState<number>(-1);
    const { setFlavorAndSize } = useContext(CustomerRequestContext)

    const changeSize = e => {
        const flavorName = flavorKind[selectedId].kind
        const size = flavorKind[selectedId].detail[e.target.value].size
        const detailId = e.target.value
        setFlavorAndSize(flavorName, size, selectedId, detailId)
    }

    return (
        <div className={styles.cardContent} onClick={() => setSelectedId(id)}>
            <div className={styles.imgContent}>
                <Image src={imageUrl} width={250} height={250} alt="tipo do açaí"/>
            </div>
            <div className={styles.descContent}>
                <span className={styles.titleCard}>{kind}</span>
                {selectedId === id &&
                    <div className={styles.detailContent}>
                    {flavorKind[selectedId].detail.map((detail, i ) => (
                        <div key={i} onChange={(e) => changeSize(e)}>
                            <label>
                                <input type="radio" value={detail.idDetail} name="size" /> 
                                <span key={i}>{detail.size}</span>
                            </label>
                        </div>
                    ))}
                    </div>
                }
            </div>
        </div>
    )
}
