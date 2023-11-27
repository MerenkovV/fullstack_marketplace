import { makeAutoObservable } from "mobx"

export type DeviceTypes = {
    id: number
    name: string
}
export type DeviceBrands = {
    id: number
    name: string
}
export type Devices = {
    id: number
    name: string
    price: number
    rating: number
    img: string
}

export interface IUserStore {
    _types: DeviceTypes[]
    _brands: DeviceBrands[]
    _devices: Devices[]
    setTypes: (type:DeviceTypes[])=>void
    setBrands: (brand:DeviceBrands[])=>void
    setDevices: (device:Devices[])=>void
}

export default class DeviceStore implements IUserStore {

    _types: DeviceTypes[]
    _brands: DeviceBrands[]
    _devices: Devices[]

    constructor(){
        this._types = [
            {id: 1, name: 'Загрузка...'},
        ]
        this._brands = [
            {id: 1, name: 'Загрузка...'},
        ]
        this._devices = [
            {id: 1, name: 'Загрузка...', price: 0, rating: 0, img: ''},
        ]
        makeAutoObservable(this)
    }

    setTypes(type : DeviceTypes[]){
        this._types = type
    }

    setBrands(brand : DeviceBrands[]){
        this._brands = brand
    }

    setDevices(device : Devices[]){
        this._devices = device
    }

    public get types(){
        return this._types
    }

    public get brands(){
        return this._brands
    }

    public get devices(){
        return this._devices
    }
}

export type DeviceStoreType = typeof DeviceStore