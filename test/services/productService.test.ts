import { MongodHelper } from '../../test/db-helper'
import connect from '../../test/db-helper'
import Product from '../../src/models/Product'
import {product1,product2,product3,product4} from '../../test/fixtures/product'
import productService from '../../src/services/productServices'


let mongoHelper: MongodHelper

beforeAll(async () => {
  mongoHelper = await connect()
})

beforeEach(async () => {
  await Product.insertMany([product1, product2, product3, product4])
})

afterEach(async () => {
  await mongoHelper.clearDatabase()
})

afterAll(async () => {
  await mongoHelper.closeDatabase()
})

describe('test product service', () => {
  test('should find all with pagination and sorting', async () => {
    const products = await productService.findAll(0, 2, 'price')
    console.log(products)
    expect(products.length).toBe(2)
    expect(products[0].name).toEqual(product1.name)
    expect(products[1].price).toEqual(product2.price)
  })
})

