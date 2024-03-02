

import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from "@nestjs/common"
import { UserService } from "./user/user.service";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./entities/user.entities";

@Controller('product')
export class ProductController {
    // the Logic written in the product service is now passed this variable called prodservice
    constructor(private readonly prodservice: UserService){}

    // Create Product route
@Post('add')
async createProduct(@Body() payload: UserDto){
    return await this.prodservice.addProduct(payload);
}

// Update Product route
@Put(':id')
async updateProductByid(@Param('id')id, @Body()Payload){
    return await this.prodservice.updateProduct(id,Payload)
}

// Delete by id
@Delete(':id')
async deleteProductById(@Param(':id')id:number){
return await this.prodservice.deleteById(id)
}

@Delete('deleteProduct/:name')
async deleteProductByName(@Param('name') name: string): Promise<void> {
    await this.prodservice.deleteProductByName(name);
}

// update product by name
@Patch('updateProduct/:name')
async updateProductByName(@Param('name') name: string, @Body() Payload: Partial<UserEntity>){
return await this.prodservice.updateProductByName(name, Payload)
}

// Get Product by name
@Get('getByName/:name')
async findName(@Param('name') name: string){
    return await this.prodservice.findOne(name);
}

//Get Product by Id
@Get('getId/:id')
async findById(@Param('id') id: number) {
    return await this.prodservice.findOneById();
}

// Get all Products
@Get()
findAllProduct(){
    return this.prodservice.findAll();
}

}
