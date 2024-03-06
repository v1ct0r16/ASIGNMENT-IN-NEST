import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id : number

    @CreateDateColumn()
    date :Date
    
    @Column()
    name : string

    @Column()
    age: number


}