import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { TweetType } from '../types/types'
import { Tweet } from "./Tweet"
import { replies } from '../database/riplies'
import { Reply } from './Riply'


export class User {
    private readonly _id: string
    private _following: User[] = []

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

    get following(): User[] { 
        return this._following
    }

    public validateUser() {
        const validateUserName = users.find(username => username.userName === this.userName )
        if (validateUserName) {
            console.log('Erro! user name já esta em uso, escolha um diferente!')
            return
        }

        users.push(this)
        console.log(`Usuário ${this.userName} adicionado com sucesso!`)
    }

    // public listarUsers() {
    //     if (users.length === 0) {
    //         console.log(`lista de usuário está vazia!`)
    //         return
    //     } else {
    //         const mostrar = users.forEach(user => {
    //             console.log(user.toJson())
    //         })
    //         return mostrar
    //     }
    // }

    // public createTweet(conteudo: string) {
    //     const newTweet = new Tweet(this, conteudo)
    //     tweets.push(newTweet)
    // }


    public sendTweet(tweet: Tweet) {
        tweets.push(tweet)
    }

    public follow(user: User) {
        this._following.push(user)
        console.log(`Você está seguindo ${user.userName}`)
    }

    // showFeed() {
    //      const feed = tweets.filter(tweet => this._following.includes(tweet.user))
    //      const userReply = riplies.filter(reply => reply.tweetOrigin.user.id === this._id)

    //     console.log(`Feed de ${this.userName}:`)
    //     feed.forEach(tweet => {
    //         console.log(`@<${tweet.user.userName}>: ${tweet.content}\n         likes : 0`)
    //         const repliesToTweet = replies.filter(reply => reply.tweetOrigin.id === tweet.id)

    //         if (repliesToTweet.length === 0) {
    //             console.log(`    < 0: replies >`)
    //         }

    //         repliesToTweet.forEach(reply => {
    //             console.log(` > @${reply.tweetReply.user.userName}: ${reply.tweetReply.content}`)
    //         })
    //     })
    // }

    showFeed() {
        // Tweets do usuário atual
        const feed: Tweet[] = tweets.filter(tweet => this.id === tweet.user.id)

        // Tweets dos usuários que o usuário atual está seguindo
        const feedFollowing: Tweet[] = this._following.flatMap(user =>
            tweets.filter(tweet => user.id === tweet.user.id))

        const feedFinal = [...feed, ...feedFollowing]

        if (feedFinal.length > 0) {
            feedFinal.forEach(tweet => {
                tweet.show()
            })
        }
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


    public showTweets() {
        const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
        const tweetsUserReply = replies.filter(reply => reply.tweetOrigin.user.id === this._id)
        console.log(`Tweets de ${this._userName}:`)
        tweetsUser.forEach(tweet => {
            console.log(`@<${tweet.user._userName}>: ${tweet.content}\n     <likes>\n     
                <@ ${tweetsUserReply.map(reply => reply.tweetReply.user._userName).join(', ')}: > 
                ${tweetsUserReply.map(reply => reply.tweetReply.content).join(', ')} replies>`)  
        })
        console.log('-----------------------------------')
    }

    // public listTweetsComId() {
    //     const tweetsUser = tweets.filter(tweet => tweet.user.id === this._id)
    //     console.log(`Tweets de ${this._userName}:`)
    //     tweetsUser.forEach(tweet => console.log(`tweet id: ${tweet.id}\n@<${tweet.user._userName}>: ${tweet.conteudo}\n     <likes>\n     <replies>`))
    //     console.log('-----------------------------------')
    // }

    // public tweetReply(conteudo: string, tweet: Tweet) {
    //     const newTweetReply = new Tweet(this, conteudo)
    //     newTweetReply.setTipo(TweetType.reply)

    //     const tweetReply = new Reply(tweet, newTweetReply)

    //     riplies.push(tweetReply)
    // }

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