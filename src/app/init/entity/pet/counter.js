import React from "react";

// Hooks
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
    const {loading, error, data} = useQueryAvailablePets();

    if (loading) return <h1>Data is Loading...</h1>

    if (error !== undefined) return <p>Problem with loading data: { error.message }</p>

    return (
        <>
            <h2>Available Pets: { data.availablePets }</h2>
        </>
    )
};