import {SERVER_URL} from "../utils";

export const getCharacters = async (page = 1, params) => {
    const searchParams = new URLSearchParams(params);
    return (await fetch(`${SERVER_URL}/character?page=${page}&${searchParams.toString()}`)).json();
}

export const getCharacter = async (id) => {
    return (await fetch(`${SERVER_URL}/character/${id.toString()}`)).json();
}

export const getEpisode = async (id) => {
    return (await fetch(`${SERVER_URL}/episode/${id.toString()}`)).json();
}