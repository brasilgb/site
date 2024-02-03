import React from "react";
import FlashMessage from "@/Components/Admin/FlashMessage";
import Select from "react-select";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Card,
    CardBody,
    CardContainer,
    CardFooter,
} from "@/Components/Admin/Card";
import {
    BreadCrumbTop,
    HeaderContent,
    TitleTop,
} from "@/Components/Admin/PageTop";
import { IoGridSharp } from "react-icons/io5";
import { BackButton, SaveButton } from "@/Components/Admin/Buttons";
import { router, useForm, usePage } from "@inertiajs/react";

const Section = ({ categories, section }) => {
    const { flash } = usePage().props;

    const options = categories.map((cat: any) => ({
        value: cat.id,
        label: cat.name,
    }));

    const { data, setData, processing } = useForm({
        section1: section?.section1,
        section2: section?.section2,
        section3: section?.section3,
        section4: section?.section4,
        section5: section?.section5,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(route("sections.update", section?.id), {
            _method: "put",
            section1: data.section1.value,
            section2: data.section2.value,
            section3: data.section3.value,
            section4: data.section4.value,
            section5: data.section5.value,
        });
    }

    return (
        <AuthenticatedLayout>
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoGridSharp size={30} />
                        <span className="ml-2">Home do site</span>
                    </TitleTop>
                    <BreadCrumbTop
                        links={[{ url: null, label: "Home do site" }]}
                    />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={flash} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody className="border-y border-gray-100">
                            <div className="mt-4 px-3 my-4">
                                <div className="flex flex-col mt-8">
                                    <label
                                        className="label-form"
                                        htmlFor="section1"
                                    >
                                        Secção 1 ( Slide Topo )
                                    </label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter(
                                            (o: any) =>
                                                o.value === data.section1
                                        )}
                                        onChange={(selected) =>
                                            setData("section1", selected)
                                        }
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: "#00AEEF",
                                                color: "white",
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label
                                        className="label-form"
                                        htmlFor="section2"
                                    >
                                        Secção 2
                                    </label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter(
                                            (o: any) =>
                                                o.value === data.section2
                                        )}
                                        onChange={(selected) =>
                                            setData("section2", selected)
                                        }
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: "#00AEEF",
                                                color: "white",
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label
                                        className="label-form"
                                        htmlFor="section3"
                                    >
                                        Secção 3
                                    </label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter(
                                            (o: any) =>
                                                o.value === data.section3
                                        )}
                                        onChange={(selected) =>
                                            setData("section3", selected)
                                        }
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: "#00AEEF",
                                                color: "white",
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label
                                        className="label-form"
                                        htmlFor="section4"
                                    >
                                        Secção 4
                                    </label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter(
                                            (o: any) =>
                                                o.value === data.section4
                                        )}
                                        onChange={(selected) =>
                                            setData("section4", selected)
                                        }
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: "#00AEEF",
                                                color: "white",
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <label
                                        className="label-form"
                                        htmlFor="section5"
                                    >
                                        Secção 5
                                    </label>
                                    <Select
                                        className="mb-10"
                                        options={options}
                                        defaultValue={options.filter(
                                            (o: any) =>
                                                o.value === data.section5
                                        )}
                                        onChange={(selected) =>
                                            setData("section5", selected)
                                        }
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: "#00AEEF",
                                                color: "white",
                                            }),
                                        }}
                                    />
                                </div>
                            </div>
                            <CardFooter className="border-t border-gray-100">
                                <SaveButton processing={processing} />
                            </CardFooter>
                        </CardBody>
                    </form>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    );
};

export default Section;
