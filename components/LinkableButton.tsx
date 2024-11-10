"use client";

import { useRouter } from "next/router";
import React from "react";
import { cn } from "../lib/utils";

const LinkableButton = ({
    onMouseEnter,
    onMouseLeave,
    containerClassName,
    href,
    childrens,
}: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    containerClassName?: string;
    href?: string;
    childrens?: Element[];
}) => {
    const router = useRouter();

    return (
        <button
            className={cn(
                "relative group/pin z-50 cursor-pointer",
                containerClassName
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => {
                router.push(href || "/");
            }}
        >
            Navigate
        </button>
    );
};

export default LinkableButton;
