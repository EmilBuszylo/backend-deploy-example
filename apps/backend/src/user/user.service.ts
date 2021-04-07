require('dotenv').config();
import { Injectable } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class UserDto {
  @Field()
  name: string;

  @Field()
  age: number;
}

@ObjectType()
export class UserOutputDto {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  env: string;
}

@Injectable()
export class UserService {
  save(input: UserDto): UserOutputDto {
    return {
      name: input.name,
      age: input.age,
      env: process.env.ENV_TEXT_POST,
    };
  }

  get(id: number): UserOutputDto {
    return {
      name: 'test22',
      age: id,
      env: process.env.ENV_TEXT_GET,
    };
  }
}
