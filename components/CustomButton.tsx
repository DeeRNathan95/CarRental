"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containersStyles, handleClick}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containersStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton