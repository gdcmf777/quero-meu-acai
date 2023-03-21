import React, { useState, createContext, PropsWithChildren, SetStateAction, useRef, MutableRefObject, RefObject } from 'react'
import { mock } from '../mock/mock'

interface IPropsValue {
    reqFlavor: string,
    reqSize: string,
    setFlavorAndSize: (flavor: string, size: string, flavorId:number, detailId: number) => void,
    getTime: () => string,
    setReqComplement: React.Dispatch<React.SetStateAction<string>>,
    reqComplement: string,
	setCustomerInputRef: (userName: string | undefined) => string | undefined
	userCustomer: string | undefined
}

export const CustomerRequestContext = createContext<IPropsValue>({
    reqFlavor: '',
    reqSize: '',
    setFlavorAndSize: () => {},
    getTime: () => '',
    setReqComplement: () => {},
    reqComplement: '',
	setCustomerInputRef: () => '',
	userCustomer: ''
})

export const CustomerRequestProvider = ({ children }:PropsWithChildren) => {
    const [reqFlavor, setReqFlavor] = useState('');
    const [reqSize, setReqSize] = useState('');
    const [reqId, setReqId] = useState(0);
    const [detailId, setDetailId] = useState(0);
    const [reqComplement, setReqComplement] = useState('');
    // const [userCustomer, setUserCustomer] = useState('');
	let userCustomer: string | undefined = "";

    const setFlavorAndSize = (flavor: string, size: string, flavorId: number, detId: number) => {
        setReqFlavor(flavor)
        setReqSize(size)
        setReqId(flavorId)
        setDetailId(detId)
    }

    const getTime = () => {
        const nodeRequest = mock.filter((el) => el.kind === reqFlavor )
        const deliveryTime = nodeRequest[0]?.detail[detailId]?.deliveryTime
        return deliveryTime
    }

	const setCustomerInputRef = (value: string | undefined ) => {
		userCustomer = value
		return userCustomer
	}

    const value = {
        reqFlavor,
        reqSize,
        setFlavorAndSize,
        getTime,
        setReqComplement,
        reqComplement,
        setCustomerInputRef,
		userCustomer
    }

    return (
        <CustomerRequestContext.Provider value={value}>
            {children}
        </CustomerRequestContext.Provider>
    )

}
