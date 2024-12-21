import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { CreateUsers, TweetType } from '../types/types'
import { Tweet } from "./Tweet"
import { riplies } from '../database/riplies'
import { Reply } from './Riply'


export class User {
    private readonly _id: string
    private _followers: string[]

    constructor(
        private _nome: string,
        private _email: string,
        private _userName: string,
        private _senha: string
    ) {this._id = randomUUID(), this._followers = []}

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

    get followers() { 
        return this._followers
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

    public createTweet(conteudo: string) {
        const newTweet = new Tweet(this, conteudo)
        tweets.push(newTweet)
    }

    // public listTweets() {
    //     const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
    //     const tweetsUserReply = riplies.filter(reply => reply.tweetOrigin.user.id === this._id)
    //     console.log(`Tweets de ${this._userName}:`)
    //     tweetsUser.forEach(tweet => {
    //         console.log(`@<${tweet.user.userName}>: ${tweet.conteudo}\n     <likes>\n     <@ ${tweetsUserReply.map(reply => reply.tweetReply.user.userName).join(', ')}: > ${tweetsUserReply.map(reply => reply.tweetReply.conteudo).join(', ')} replies>`)
    //     })
    //     console.log('-----------------------------------')
    // }


    public listTweets() {
        const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
        const tweetsUserReply = riplies.filter(reply => reply.tweetOrigin.user.id === this._id)
        console.log(`Tweets de ${this._userName}:`)
        tweetsUser.forEach(tweet => {
            console.log(`@<${tweet.user._userName}>: ${tweet.conteudo}\n     <likes>\n     <@ ${tweetsUserReply.map(reply => reply.tweetReply.user._userName).join(', ')}: > ${tweetsUserReply.map(reply => reply.tweetReply.conteudo).join(', ')} replies>`)  
        })
        console.log('-----------------------------------')
    }

    // public listTweetsComId() {
    //     const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
    //     console.log(`Tweets de ${this._userName}:`)
    //     tweetsUser.forEach(tweet => console.log(`tweet id: ${tweet.id}\n@<${tweet.user._userName}>: ${tweet.conteudo}\n     <likes>\n     <replies>`))
    //     console.log('-----------------------------------')
    // }

    public tweetReply(conteudo: string, tweet: Tweet) {
        const newTweetReply = new Tweet(this, conteudo)
        newTweetReply.setTipo(TweetType.reply)

        const tweetReply = new Reply(tweet, newTweetReply)

        riplies.push(tweetReply)
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