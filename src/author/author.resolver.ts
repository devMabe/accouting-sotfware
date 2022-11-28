import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';

@Resolver('Author')
export class AuthorResolver {
    
    constructor(
        private authorService: AuthorService
    ){}


    @Query()
    author(@Args('id') id: number){
        return this.authorService.finOneById(id);
    }

}
