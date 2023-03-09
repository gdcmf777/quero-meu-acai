import React, { useState, createContext, PropsWithChildren } from 'react'
import { mock } from '../mock/mock'

interface IPropsValue {
    reqFlavor: string,
    reqSize: string,
    setFlavorAndSize: (flavor: string, size: string, flavorId:number, detailId: number) => void,
    getTime: () => string,
    setReqComplement: React.Dispatch<React.SetStateAction<string>>,
    reqComplement: string
}

export const CustomerRequestContext = createContext('')

export const CustomerRequestProvider = ({ children }:PropsWithChildren) => {
    const [reqFlavor, setReqFlavor] = useState('');
    const [reqSize, setReqSize] = useState('');
    const [reqId, setReqId] = useState(0);
    const [detailId, setDetailId] = useState(0);
    const [reqComplement, setReqComplement] = useState('');

    const setFlavorAndSize = (flavor: string, size: string, flavorId: number, detId: number) => {
        setReqFlavor(flavor)
        setReqSize(size)
        setReqId(flavorId)
        setDetailId(detId)
    }

    const getTime = () => {
        const nodeRequest = mock.filter((el) => el.kind === reqFlavor )
        const deliveryTime = nodeRequest[0].detail[detailId].deliveryTime
        return deliveryTime
    }

    const value: IPropsValue = {
        reqFlavor,
        reqSize,
        setFlavorAndSize,
        getTime,
        setReqComplement,
        reqComplement
    }

    return (
        <CustomerRequestContext.Provider value={value}>
            {children}
        </CustomerRequestContext.Provider>
    )

}