import { randomUUID } from "crypto"
import { tweet } from '../dataverse/tweet'
import { users } from '../dataverse/user'
import { CreateUser } from '../types/types'

export class User {
    private _id: string

    constructor(
        private _nome: string,
        private _email: string,
        private _userName: string,
        private _senha: string
    ) {this._id = randomUUID()}

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    get email() {
        return this._email
    }

    get userName() {
        return this._userName
    }

    get senha() {
        return this._senha
    }

    public createUser(user: CreateUser) {
        const newUser = new User(user.nome, user.email, user.userName, user.senha)
        users.push(newUser)
    }

    public listarUsers() {
        if (users.length === 0) {
            console.log(`lista de usuário está vazia!`)
            return
        } else {
            const mostrar = users.forEach(user => {
                console.log(user.toJson())
            })
            return mostrar
        }
    }

    toJson() {
        return {
            id: this._id,
            nome: this._nome,
            email: this._email,
            userName: this._userName,
            senha: this._senha
        }
    }

}