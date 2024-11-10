"use client";

import { cn } from "../../lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GlobeDemo";
import { leftSkills, rightSkills } from "../../data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("abishaikashif975@gmail.com");
        setCopied(true);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                backgroundColor: "rgb(4,7,29)",
                background:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div
                className={id === 6 ? "flex justify-center h-full w-full" : ""}
            >
                {/* image */}
                <div className="w-full h-full absolute">
                    {img && (
                        <Image
                            src={img}
                            alt={img}
                            width="0"
                            height="0"
                            className={cn(
                                imgClassName,
                                "object-cover, object-center"
                            )}
                        />
                    )}
                </div>

                {/* Spare image */}
                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && "w-full opacity-80"
                    }`}
                >
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            width="0"
                            height="0"
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {/* Gradient on 6 card */}
                {id === 6 && (
                    <BackgroundGradientAnimation></BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-[10rem] flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight md:text-xs text-sm lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold z-10 text-lg lg:text-2xl max-w-96">
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && <GlobeDemo />}

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1.5 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                                {leftSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="lg:py-3 lg:px-4 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                <span className="lg:py-3 lg:px-3 py-4 px-3  rounded-lg text-center opacity bg-[#10132E]" />
                            </div>

                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                                <span className="lg:py-3 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
                                {rightSkills.map((skill: string) => (
                                    <span
                                        key={skill}
                                        className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData,
                                        rendererSettings: {
                                            preserveAspectRatio:
                                                "xMidYMid slice",
                                        },
                                    }}
                                />
                            </div>

                            <MagicButton
                                title={
                                    copied ? "Email copied" : "Copy my email"
                                }
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
