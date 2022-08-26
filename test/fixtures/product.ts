import { ObjectId } from "mongodb"
import Product from "../../src/models/Product"
import { user1, user2, user3 } from "./users"

export const product1 = new Product({
    name: 'shirt',
    price: 10,
    User: user1._id,
    images: new ObjectId(),
    category: [
        {
            name: 'Clothing',
            image: 'new image'
        }
    ]
})

export const product2 = new Product({
    name: 'shirt1',
    price: 11,
    User: user2._id,
    images: new ObjectId(),
    category: [
        {
            name: 'Clothing',
            image: 'new image'
        }
    ]
})


export const product3 = new Product({
    name: 'shirt2',
    price: 12,
    User: user3._id,
    images: new ObjectId(),
    category: [
        {
            name: 'Clothing',
            image: 'new image'
        }
    ]
})


export const product4 = new Product({
    name: 'shirt3',
    price: 13,
    User: user1._id,
    images: new ObjectId(),
    category: [
        {
            name: 'Clothing',
            image: 'new image'
        }
    ]
})
