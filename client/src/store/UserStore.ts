import { makeAutoObservable } from "mobx"

export type UserType = {
    id?: number
    email?: string
    role?: 'ADMIN' | 'USER'
}

export interface IUserStore {
    _isAuth: boolean
    _user: UserType
    setIsAuth: (auth:boolean)=>void
    setUser: (userInfo : UserType) => void
}

export default class UserStore implements IUserStore {

    _isAuth: boolean
    _user: UserType

    constructor(){
        this._isAuth = false
        this._user = {id: 1, email: 'user@mail.ru', role: 'ADMIN'}
        makeAutoObservable(this)
    }

    setIsAuth(auth : boolean){
        this._isAuth = auth
    }

    setUser(userInfo : UserType){
        this._user = userInfo
    }

    public get isAuth(){
        return this._isAuth
    }

    public get user(){
        return this._user
    }
}