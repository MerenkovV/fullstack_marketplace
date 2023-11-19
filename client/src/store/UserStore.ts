import { makeAutoObservable } from "mobx"

export interface IUserStore {
    _isAuth: boolean
    _user: object
    setIsAuth: (auth:boolean)=>void
    setUser: (userInfo : object) => void
}

export default class UserStore implements IUserStore {

    _isAuth: boolean
    _user: object

    constructor(){
        this._isAuth = false
        this._user = {}
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