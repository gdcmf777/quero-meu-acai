export interface IFlavorMock {
    id: number,
    kind: string,
    imageUrl: string,
    detail: IDetailMock[]
}

export interface IDetailMock {
    idDetail: number,
    size: string,
    deliveryTime: string,
    price: string
}