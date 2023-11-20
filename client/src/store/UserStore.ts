import { makeAutoObservable } from "mobx"

export interface IUserStore {
    _isAuth: boolean
    _user: object
    setIsAuth: (auth:boolean)=>void
    setUser: (userInfo : object) => void
}

export default class UserStore implements IUserStore {

    _isAuth: boolean
    _user: any

    constructor(){
        this._isAuth = true
        this._user = {id: 1, email: 'user@mail.ru', role: 'ADMIN'}
        makeAutoObservable(this)
    }

    setIsAuth(auth : boolean){
        this._isAuth = auth
    }

    setUser(userInfo : object){
        this._user = userInfo
    }

    public get isAuth(){
        return this._isAuth
    }

    public get user(){
        return this._user
    }
}