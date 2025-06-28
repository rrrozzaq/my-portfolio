import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo5.png"
import { NAVIGATION_LINKS } from "../constants"

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const handeleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        setMobileMenuOpen(false);
    }
    return (
        <div>
            {/* Navbar Menu */}
            <nav className="fixed left-0 right-0 top-4 z-50">
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-6">
                        <div>
                            <a href="#">
                                <img src={logo} width={90} alt="logo"/>
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <a className="text-sm hover:text-yellow-400" href={item.href} onClick={(e) => handeleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} width={90} alt="logo" className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (<FaTimes className="m-2 h-6 w-5"/>
                            ) : (
                                <FaBars className="m-2 h-6 w-5"/>
                            )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) =>
                            (
                                <li key={index}>
                                    <a className="block w-full text-xl font-semibold" href={item.href} onClick={(e) => handeleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}
    
export default Navbar