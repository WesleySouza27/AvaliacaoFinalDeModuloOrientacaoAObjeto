"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
const tweet_1 = require("../database/tweet");
const riplies_1 = require("../database/riplies");
class User {
    constructor(_nome, _email, _userName, _senha) {
        this._nome = _nome;
        this._email = _email;
        this._userName = _userName;
        this._senha = _senha;
        this._following = [];
        this._id = (0, crypto_1.randomUUID)(),
            this._following = [];
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get userName() {
        return this._userName;
    }
    get senha() {
        return this._senha;
    }
    get following() {
        return this._following;
    }
    // public createUser(user: CreateUsers) {
    //     const validateUserName = users.find(i => i.userName === user.userName )
    //     if (validateUserName) {
    //         console.log('Erro! user name já esta em uso, escolha um diferente!')
    //         return
    //     }
    //     const newUser = new User(user.nome, user.email, user.userName, user.senha)
    //     users.push(newUser)
    // }
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
    sendTweet(tweet) {
        tweet_1.tweets.push(tweet);
    }
    follow(user) {
        this._following.push(user);
        console.log(`Você está seguindo ${user.userName}`);
    }
    showFeed() {
        const feed = tweet_1.tweets.filter(tweet => this._following.includes(tweet.user));
        // const userReply = riplies.filter(reply => reply.tweetOrigin.user.id === this._id)
        console.log(`Feed de ${this.userName}:`);
        feed.forEach(tweet => {
            console.log(`@<${tweet.user.userName}>: ${tweet.conteudo}\n         likes : 0`);
            const repliesToTweet = riplies_1.riplies.filter(reply => reply.tweetOrigin.id === tweet.id);
            if (repliesToTweet.length === 0) {
                console.log(`    < 0: replies >`);
            }
            repliesToTweet.forEach(reply => {
                console.log(` > @${reply.tweetReply.user.userName}: ${reply.tweetReply.conteudo}`);
            });
        });
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
    showTweets() {
        const tweetsUser = tweet_1.tweets.filter(tweet => tweet.user.id === this._id);
        const tweetsUserReply = riplies_1.riplies.filter(reply => reply.tweetOrigin.user.id === this._id);
        console.log(`Tweets de ${this._userName}:`);
        tweetsUser.forEach(tweet => {
            console.log(`@<${tweet.user._userName}>: ${tweet.conteudo}\n     <likes>\n     
                <@ ${tweetsUserReply.map(reply => reply.tweetReply.user._userName).join(', ')}: > 
                ${tweetsUserReply.map(reply => reply.tweetReply.conteudo).join(', ')} replies>`);
        });
        console.log('-----------------------------------');
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
        };
    }
}
exports.User = User;
