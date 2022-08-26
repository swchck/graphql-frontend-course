import {loader} from "graphql.macro";
import {useQuery} from "@apollo/client";

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
    return useQuery(queryAvailablePets, {
        pollInterval: 500
    });
}