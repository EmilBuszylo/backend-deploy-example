import { Injectable } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { userInfo } from 'node:os';

@InputType()
export class UserDto {
    @Field()
    name: string

    @Field()
    age: number
}

@ObjectType()
export class UserOutputDto {
    @Field()
    name: string

    @Field()
    age: number
}


@Injectable()
export class UserService {

    save(input: UserDto): UserOutputDto {
        
        return {
            name: input.name,
            age: input.age
        }
    }

    get(id: number): UserDto {
        return {
            name: "test",
            age: id
        }
    }
}

