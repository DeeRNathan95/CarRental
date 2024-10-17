import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containersStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"  | "submit";

}

export interface searchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}