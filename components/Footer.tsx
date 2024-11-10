import Image from "next/image";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../data";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1>
                    Ready to take <span className="text-purple">your</span>{" "}
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help
                    you achieve your goals.
                </p>
                <Link href="mailto:abishaikashif975@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright &copy; 2024 Abisha K.
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div
                            key={profile.id}
                            className="cursor-pointer w-10 h-10 flex justify-center items-center
                            backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75
                            bg-black-200 rounded-lg border-black-300"
                        >
                            <Image
                                src={profile.img}
                                alt={`${profile.id}`}
                                height={20}
                                width={20}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
