import { IsNotEmpty, isEmail } from "class-validator";
export class User {
   @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    age: number;
    @IsNotEmpty()
    gender: string;
}