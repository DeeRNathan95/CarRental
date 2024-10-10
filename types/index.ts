import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containersStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}