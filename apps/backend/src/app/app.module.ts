import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from '../user/user.module'
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: './apps/backend/schema.graphql',
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
      playground: true,
      introspection: true,
    }),
  UserModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
