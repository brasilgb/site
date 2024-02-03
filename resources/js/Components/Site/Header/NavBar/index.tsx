import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
interface NavBarProps {
    pages?: any;
    categories?: any;
}

const NavBar = ({ pages, categories }: NavBarProps) => {
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState<any>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <ul
            className="flex items-center justify-end gap-4 h-16"
            ref={dropdownRef}
        >
            <li className={`h-full flex items-center justify-center`}>
                <Link
                    className="text-sm font-normal uppercase text-gray-100 hover:text-gray-200"
                    href="/"
                >
                    Home
                </Link>
            </li>
            {categories?.map((cat: any) => (
                <li className="relative">
                    <div className={`h-full flex items-center justify-center`}>
                        {cat.sub_categories.length > 0 ? (
                            <button
                                className="text-sm font-normal uppercase text-gray-100 hover:text-gray-200"
                                onClick={() => setShowMenu(cat.id)}
                            >
                                {cat.name}
                            </button>
                        ) : (
                            <Link
                                className="text-sm font-normal uppercase text-gray-100 hover:text-gray-200"
                                href={route("slug", cat.slug)}
                            >
                                {cat.name}
                            </Link>
                        )}
                    </div>
                    {cat?.sub_categories && (
                        <div
                            className={`absolute z-40 top-10 right-0 w-64 ${
                                showMenu === cat.id
                                    ? "opacity-100 visible"
                                    : "invisible opacity-0"
                            }`}
                        >
                            <ul
                                className={`px-2 bg-blue-cinco rounded-b-lg shadow-md`}
                            >
                                {cat?.sub_categories.map(
                                    (par: any, idx: number) => (
                                        <li
                                            className={`${
                                                cat?.sub_categories.length - 1 >
                                                idx
                                                    ? "border-b border-blue-quatro"
                                                    : ""
                                            }  p-2`}
                                        >
                                            <Link
                                                className="px-4 block text-sm font-normal text-gray-400 hover:text-gray-500 hover:underline"
                                                href={route("slug", par.slug)}
                                            >
                                                <span>{par.name}</span>
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
            {pages?.map((pag: any) => (
                <li className={`h-full flex items-center justify-center`}>
                    <Link
                        className="text-sm font-normal uppercase text-gray-100 hover:text-gray-200"
                        href={route("slug", pag.slug)}
                    >
                        {pag.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBar;
