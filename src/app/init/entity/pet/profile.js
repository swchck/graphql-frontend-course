import React from "react";

import { useQueryProfile } from "./hooks/useQueryProfile";

export const Profile = () => {
    const {getProfile, loading, error, profile} = useQueryProfile();

    const loadProfile = () => {
        return getProfile({
            variables: {
                id: 'C-1'
            }
        });
    }

    const loaderJSX = loading && (
        <p>Loading..</p>
    );

    const errorJSX = error && (
        <p>Problem occurred while getting data from server: {error}</p>
    )

    const profileJSX = profile ? profile.name : null

    return (
        <>
            <h1>Profile</h1>
            <button onClick={loadProfile}>Load Profile</button>
            <p>
                {loaderJSX}
                {errorJSX}
                {profileJSX}
            </p>
        </>

    )
}
