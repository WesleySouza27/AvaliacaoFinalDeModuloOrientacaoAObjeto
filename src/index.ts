import { Tweet } from './models/Tweet'
import { User } from './models/User'
import { CreateUsers } from './types/types'
import { TweetType } from './types/types'
import { Reply } from './models/Riply'
import { tweets } from './database/tweet'
import { riplies } from './database/riplies'


const usuario: CreateUsers = {
    nome: 'theo',
    email: 'theo@gmail.com',
    userName: 'theo lucca',
    senha: 'theo123'
}

const user01 = new User('theo', 'theo@gmail.com', 'theo lucca', 'theo123')
const user02 = new User('wesley', 'Wesley@gmail.com', 'wesley souza', 'wesley123')

user01.createUser(usuario)

user01.listarUsers()

user02.createUser(user02)

user01.createTweet('Hello World!')
user01.createTweet('gosto de viajar!')
user01.tweetReply('isso é um riply', tweets[0])
user01.listTweets()
console.log(riplies)




// const replay01 = new Reply(tweets[0], user01, tweets[1], user02)
// console.log(replay01)
// user01.listTweetsComId()
// const user01 = User.createUser(usuario)
// const user02 = User.createUser(usuario)

// user01.listarUsers()


