import { Tweet } from './models/Tweet'
import { User } from './models/User'
import { CreateUsers } from './types/types'
import { TweetType } from './types/types'


const usuario: CreateUsers = {
    nome: 'theo',
    email: 'theo@gmail.com',
    userName: 'theo lucca',
    senha: 'theo123'
}

const user01 = new User('theo', 'theo@gmail.com', 'theo lucca', 'theo123')
const user02 = new User('theo', 'theo@gmail.com', 'theo lucca', 'theo123')

user01.createUser(usuario)

user01.listarUsers()

user02.createUser(user02)

user01.createTweet('Hello World!', TweetType.normal)
user01.listTweets()

// const user01 = User.createUser(usuario)
// const user02 = User.createUser(usuario)

// user01.listarUsers()


