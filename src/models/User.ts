import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { CreateUsers, TweetType } from '../types/types'
import { Tweet } from "./Tweet"

export class User {
    private readonly _id: string

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

    public createUser(user: CreateUsers) {
        const validateUserName = users.find(i => i.userName === user.userName )
        if (validateUserName) {
            console.log('Erro! user name já esta em uso, escolha um diferente!')
            return
        }

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

    public createTweet(conteudo: string, tipo: TweetType) {
        const newTweet = new Tweet(this, conteudo, tipo)
        tweets.push(newTweet)
    }

    public listTweets() {
        const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
        tweets.forEach(tweet => console.log(`@<${tweet.user._userName}>: ${tweet.conteudo}\n     <likes>\n     <replies>`))
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