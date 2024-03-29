import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "src/entities/user.entities";


@Injectable()
export class UserService {
    [x: string]: any;

   
    constructor(
        @InjectRepository(UserEntity)
        private UserRepository: Repository<UserEntity>,
    ){}

    //Add product
    async addProduct(payload){
        const add = this.UserRepository.create(payload);
        return this.UserRepository.save(add);
    }

    //get product by name
    async getOneByName(name :string): Promise<UserEntity> {
        const find = await this.UserRepository.findOne({ where: {name: name},});

    //error handling
    if (!find) {
        //this Error will be thrown if no such product name is not found in our database
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
    return find;
    }

    // get one product by ID
    async getOneById(id :number): Promise<UserEntity> {
        const find = await this.UserRepository.findOne({ where: { id },});
    //error handling
    if (!find) {
        //this Error will be thrown if no such product id is not found in our database
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
    return find;
}

//Delete by id
async deleteById(id: number) {
    const find = await this.UserRepository.findOne({ where: { id },});
//error handling
if(!find) {
    //this Error will be thrown if no such product id is not found in our database
    throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
}
await this.UserRepository.delete(id);
return {
    statusCode: 200,
    message: 'Product deleted successfully',
};
}

//Delete Product by name
async deleteProductByName(name :string) :Promise<void> {
    const find = await this.UserRepository.delete({ name });
    // if (result.affected === 0) {
    //     throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    // }
}

// find all products 
async findAll() {
    return await this.UserRepository.find()
}

//Update product by name
async updateProductByName(
    name: string,
    payload: Partial<UserEntity>,
): Promise<UserEntity> {
    const user = await this.ProductRepository.findOne({ where: { name } });
    if (!user) {
        throw new HttpException('Product not found', 404); // it will be a  404 eroor, meaning not found
    }
//Merge the payload into the existing product entity
Object.assign(user, payload);
return this.UserRepository.save(user)
} 

async updateProduct(id, Payload) {
    const update = this.UserRepository.findOne({where: { id }});
    if (!update) {
        throw new  HttpException('Product not found', 404);
    }

    const updateProduct = await this.UserRepository.update(id, Payload);
    return{
        statusCode:201,
        message: 'Product update succesfully',
        data: updateProduct,
    }
    }
}

