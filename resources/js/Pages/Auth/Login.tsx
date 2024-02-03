import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import React from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { IoEyeOffOutline, IoEyeOutline, IoPerson } from "react-icons/io5";
import { CgSpinnerTwo } from "react-icons/cg";
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { conf } = usePage().props;
    const [passwordView, setPasswordView] = useState<boolean>(false);
    const [passwordForgout, setPasswordForgout] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            post(route('login'));
            setLoading(false);
        },1000);
    };

    return (
        <AuthLayout>
            <Head title="Acessar Painel Administrativo" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center ${conf[0]?.bgcolor ? conf[0]?.bgcolor : "bg-blue-um"}`}
                style={{
                    backgroundImage: `url("/storage/images/${conf[0]?.bgimage ? conf[0]?.bgimage : ""}")`,
                    backgroundSize: "cover",
                }}
            >
                <div className="w-1/4 bg-gray-200  shadow-md rounded p-1 shadow-gray-500">
                    <div className="flex items-start justify-center border-b-2 border-gray-200 w-full bg-gradient-to-b from-gray-300 to-gray-200">
                        <h1 className="text-sm font-semibold drop-shadow text-red-um py-2 uppercase">
                            Faça login em sua conta
                        </h1>
                        <span className="text-sm font-medium text-blue-dark">
                            {/* <ClockTime /> */}
                        </span>
                    </div>
                    <div className="bg-gray-50 p-4">
                        <div className="flex flex-col items-center justify-center mb-20">

                            <div className="w-32 flex items-center justify-center">
                                <ApplicationLogo />
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="label-form">
                                    E-mail
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="email"
                                        type="text"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="input-form w-full"
                                    />
                                    <div className="absolute right-1">
                                        <IoPerson size={22} color="#4b5563" />
                                    </div>
                                </div>
                                {errors.email && (
                                    <div className="text-red-500 text-sm">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex flex-col">
                                <label
                                    htmlFor="password"
                                    className="label-form"
                                >
                                    Senha
                                </label>
                                <div className="relative flex items-center justify-between">
                                    <input
                                        id="password"
                                        type={
                                            passwordView ? "text" : "password"
                                        }
                                        name="password"
                                        value={data.password}
                                        className="input-form w-full"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <div
                                        className="absolute right-1 cursor-pointer"
                                        onClick={() =>
                                            setPasswordView(!passwordView)
                                        }
                                    >
                                        {passwordView ? (
                                            <IoEyeOffOutline
                                                size={22}
                                                color="#4b5563"
                                            />
                                        ) : (
                                            <IoEyeOutline
                                                size={22}
                                                color="#4b5563"
                                            />
                                        )}
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="text-red-500 text-sm">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e: any) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ms-2 text-sm text-gray-600">Lembrar acesso</span>
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Perdeu sua senha?
                                    </Link>
                                )}
                            </div>

                            <div className="flex items-center justify-end mt-4">

                                {/* <PrimaryButton className="ms-4" disabled={processing}>
                                    Entrar
                                </PrimaryButton> */}
                                <button
                                    className="btn-login"
                                    disabled={processing}
                                >
                                    {loading ? (
                                        <CgSpinnerTwo size={24} className="animate-spin" />
                                    ) : (
                                        <span>Entrar</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}