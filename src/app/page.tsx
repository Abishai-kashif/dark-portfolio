"use client";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import Grid from "../../components/Grid";
import RecentProjects from "../../components/RecentProjects";
import { Approach } from "../../components/Approach";
import Footer from "../../components/Footer";
import { FaHome, FaUserAlt, FaTasks, FaPhoneAlt } from "react-icons/fa";

const navItems = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaUserAlt /> },
    { name: "Projects", link: "#projects", icon: <FaTasks /> },
    { name: "Contact", link: "#contact", icon: <FaPhoneAlt /> },
];

export default function Home() {
    return (
        <main
            className="relative flex flex-col items-center justify-between bg-black-100 overflow-x-hidden
        mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
