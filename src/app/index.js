import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

// Components
import { Pet } from "./init/entity/pet";

import { client } from "./init/client";
import {Customer} from "./init/entity/customer";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Pet/>
            <Customer/>
        </ApolloProvider>
    )
};