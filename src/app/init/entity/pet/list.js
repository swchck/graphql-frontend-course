import React from "react";

import {useQueryAllPets} from "./hooks/useQueryAllPets";

export const List = () => {
    const {loading, error, pets} = useQueryAllPets();

    if (loading) return <h1>Data is Loading...</h1>

    if (error !== undefined) return <p>Problem with loading data: {error.message}</p>

    const petsJSX = pets.map(({id, name, weight}) => (
        <p key={id}>
            <span>Name: {name} </span>
            <span>Weight: {weight}</span>
        </p>
    ));

    return (
        <>
            <h2>List</h2>
            {petsJSX}
        </>
    )
}