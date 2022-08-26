import {loader} from "graphql.macro";
import {useLazyQuery} from "@apollo/client";

// Queries
const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryProfile = () => {
    const [getProfile, {loading, error, data}] = useLazyQuery(queryPetById);

    return {getProfile, loading, error, profile: data && data.petById}
}