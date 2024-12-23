"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tweet_1 = require("./models/Tweet");
const User_1 = require("./models/User");
const usuario = {
    nome: 'theo',
    email: 'theo@gmail.com',
    userName: 'theo lucca',
    senha: 'theo123'
};
// criando usuários
const user01 = new User_1.User('theo', 'theo@gmail.com', 'theo lucca', 'theo123');
const user02 = new User_1.User('wesley', 'Wesley@gmail.com', 'wesley souza', 'wesley123');
const user03 = new User_1.User('Fulano', 'fulano@hotmail.com', 'Fulano silva', '123fulano');
// criando tweets
const tweet01 = new Tweet_1.Tweet(user01, `Hello world!`);
const tweet04 = new Tweet_1.Tweet(user01, `gosto de comer churrasco`);
const tweet05 = new Tweet_1.Tweet(user01, `hoje está um lindo dia`);
const tweet06 = new Tweet_1.Tweet(user01, `partiu praia!`);
const tweet02 = new Tweet_1.Tweet(user02, `hey galera :D`);
const tweet03 = new Tweet_1.Tweet(user03, `gosto de viajar!`);
// metodo 01 user sendTweet()
user01.sendTweet(tweet01);
user01.sendTweet(tweet04);
user01.sendTweet(tweet05);
user01.sendTweet(tweet06);
user02.sendTweet(tweet02);
user03.sendTweet(tweet03);
// metodo 02 user follow()
user01.follow(user02);
user01.follow(user03);
user02.follow(user01);
user02.follow(user03);
user03.follow(user01);
user03.follow(user02);
// metodo 03 user showfeed()
user01.showFeed();
user01.showTweets();
// console.log(riplies)
// user01.tweetReply('isso é um riply', tweets[0])
// user01.createUser(usuario)
// user02.createUser(user02)
// user02.createUser(user03)
// user01.listarUsers()
// const replay01 = new Reply(tweets[0], user01, tweets[1], user02)
// console.log(replay01)
// user01.listTweetsComId()
// const user01 = User.createUser(usuario)
// const user02 = User.createUser(usuario)
// user01.listarUsers()
