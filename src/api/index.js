import {SERVER_URL} from "../utils";

export const getCharacters = async (params) => {
    const searchParams = new URLSearchParams(params);
    return (await fetch(`${SERVER_URL}/character?${searchParams.toString()}`)).json();
}

export const getCharacter = async (id) => {
    return (await fetch(`${SERVER_URL}/character/${id.toString()}`)).json();
}