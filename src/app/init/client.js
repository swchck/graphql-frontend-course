// Core
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

// GraphQL Server
const uri = "https://funded-pet-library.moonhighway.com/";
const link = createHttpLink({
    uri
})

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});