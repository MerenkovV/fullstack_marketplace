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
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5, img: ''},
            
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