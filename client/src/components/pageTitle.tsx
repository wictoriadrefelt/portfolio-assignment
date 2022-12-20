import { useEffect } from "react";
import { Image } from "@mantine/core";
import Logo from "../assets/titleIcon.png"




export const useDocumentTitle = (title: string) => {

    useEffect(() => {
        document.title=`${title} - BRAINWAVE`;
    }, [title]);

    return null;
}