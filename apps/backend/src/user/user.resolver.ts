import { UseGuards } from '@nestjs/common';
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { AuthGuard } from './user.guard';
import { UserDto, UserOutputDto, UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {

    }
    @Query(() => UserOutputDto)
    @UseGuards(AuthGuard)
    get(@Args('id') id: number): UserOutputDto {
      return this.userService.get(id)
    }

    @Mutation(() => UserOutputDto)
    save(@Args('input')
    input: UserDto): UserOutputDto {
      return this.userService.save(input)
    }
}


