import {loader} from "graphql.macro";
import {useQuery} from "@apollo/client";

// Queries
const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
    const { loading, error, data } =  useQuery(queryAllPets);

    const pets = data ? data.allPets : null;

    return {loading, error, pets}
}