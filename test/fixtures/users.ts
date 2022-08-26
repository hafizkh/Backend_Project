import { ObjectId } from "mongodb";

import User from "../../src/models/User";

export const user1 = new User({
    firstname: 'Hafiz',
    lastname: 'Javid',
    username: 'hjavid',
    email: 'habibi@gmail.com',
    password: '123456789',
    reviews: [new ObjectId()],
    address: [new ObjectId()]
})

export const user2 = new User({
    firstname: 'Imaad',
    lastname: 'Khurram',
    username: 'imaad1',
    email: 'imaad@yahoo.com',
    password: '123456789',
    reviews: [new ObjectId()],
    address: [new ObjectId()]
})

export const user3 = new User({
    firstname: 'Jani',
    lastname: 'Aulanko',
    username: 'jania',
    email: 'jania@gmail.com',
    password: '123456789',
    reviews: [new ObjectId()],
    address: [new ObjectId()]
})