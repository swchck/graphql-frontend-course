import React from "react";

import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
    const {getAllAvailablePets, loading, error, pets} = useQueryAllAvailablePets();

    const loaderJSX = loading && (
        <p>Loading..</p>
    );

    const errorJSX = error && (
        <p>Problem occurred while getting data from server: {error}</p>
    )

    const petJSX = pets && pets.map(({id, name, weight}) => (
        <p key={id}>
            <span>Name: {name}</span>
            <span>Weight: {weight}</span>
        </p>
    ))
    return (
        <>
            <h1>Special List</h1>
            <button onClick={getAllAvailablePets}>Click on Me!</button>
            {loaderJSX}
            {errorJSX}
            {petJSX}
        </>

    )
}
