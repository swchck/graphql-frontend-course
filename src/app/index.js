import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

// Components
import { Pet } from "./init/entity/pet";

import { client } from "./init/client";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Pet/>
        </ApolloProvider>
    )
};