import {tags} from "./content/projects";
import {writable} from "svelte/store";

export const hideNav = writable<boolean>(false)
export const theme = writable("light");
export const backgroundColor = writable("#454545");

type language = "en" | "ru"
export const lang = writable<language>("en")

type filter = Set<string>
export const tagsFilter = writable<filter>(new Set(tags.map((tag) => tag.key)))
