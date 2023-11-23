import { makeAutoObservable } from "mobx"

export interface IUserStore {
    _types: any[]
    _brands: any[]
    _devices: any[]
    setTypes: (type:any)=>void
    setBrands: (brand:any)=>void
    setDevices: (device:any)=>void
}

export default class DeviceStore implements IUserStore {

    _types: any[]
    _brands: any[]
    _devices: any[]

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

    setTypes(type : any){
        this._types = type
    }

    setBrands(brand : any){
        this._brands = brand
    }

    setDevices(device : any){
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