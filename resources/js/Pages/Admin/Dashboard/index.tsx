import { Card, CardBody, CardContainer } from "@/Components/Admin/Card";
import Kpis from "@/Components/Admin/Kpis";
import { HeaderContent, TitleTop } from "@/Components/Admin/PageTop";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoDocumentSharp, IoDocumentTextSharp, IoList, IoPeople } from "react-icons/io5";

const Dashboard = ({ categories, posts, pages, users }: any) => {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="flex-col w-full">
                <HeaderContent>
                    <TitleTop>
                        <AiOutlineDashboard size={30} />
                        <span className="ml-2">Dashboard</span>
                    </TitleTop>
                    <TitleTop>
                        <></>
                    </TitleTop>
                </HeaderContent>

                <div className="grid md:grid-cols-4 gap-6">
                    <Kpis
                        props={{
                            title: "Usuários",
                            value: users,
                            url: "/admin/users",
                            icon: <IoPeople size={50} color="#2671e2" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Categorias",
                            value: categories,
                            url: "/admin/categories",
                            icon: <IoList size={50} color="#CA0156" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Postagens",
                            value: posts,
                            url: "/admin/postagens",
                            icon: <IoDocumentTextSharp size={50} color="#EEA917" />,
                        }}
                    />
                    <Kpis
                        props={{
                            title: "Páginas",
                            value: pages,
                            url: "/admin/paginas",
                            icon: <IoDocumentSharp size={50} color="#0D9488" />,
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Dashboard;
