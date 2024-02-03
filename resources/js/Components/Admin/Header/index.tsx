import React from "react";
import UserDropDown from "../UserDropDown";
import { Link } from "@inertiajs/react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between h-[65px] bg-white shadow-sm pr-4">
            <div className="ml-4 py-1 px-4 bg-blue-cinco rounded">
                <Link
                    className="text-base text-gray-50 font-semibold hover:underline"
                    href="/"
                >
                    Ir para o site
                </Link>
            </div>
            <div className="flex items-center">
                <UserDropDown />
            </div>
        </header>
    );
};

export default Header;
