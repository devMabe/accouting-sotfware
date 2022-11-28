import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { SequelizeConfigModule } from './infrastructure/config/sequelize/sequelize.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { AuthorResolver } from './author/author.resolver';
import { AuthorService } from './author/author.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),

    EnvironmentConfigModule,
    SequelizeConfigModule,
    LoggerModule,
    ExceptionsModule,
  ],
  providers: [AuthorResolver, AuthorService, AuthorResolver],
})
export class AppModule {}
