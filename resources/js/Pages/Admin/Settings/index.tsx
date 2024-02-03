import React from 'react';
import { IoOptionsSharp } from 'react-icons/io5';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { router, useForm, usePage } from '@inertiajs/react';
import { BackButton, SaveButton } from '@/Components/Admin/Buttons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardHeaderContent,
} from '@/Components/Admin/Card';
import {
  BreadCrumbTop,
  HeaderContent,
  TitleTop,
} from '@/Components/Admin/PageTop';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';

interface SettingsProps {
  logo: any;
  title: string;
  description: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  email: string;
  url: string;
  opening: string;
  metadescription: string;
  maps: string;
}
const Settings = ({ setting }: any) => {
  const { flash } = usePage().props;

  const {
    data,
    setData,
    patch,
    processing,
    errors,
  }: InertiaFormProps<SettingsProps> = useForm({
    logo: setting.logo,
    title: setting?.title,
    description: setting?.description,
    state: setting?.state,
    city: setting?.city,
    neighborhood: setting?.neighborhood,
    address: setting?.address,
    phone: setting?.phone,
    whatsapp: setting?.whatsapp,
    instagram: setting?.instagram,
    facebook: setting?.facebook,
    email: setting?.email,
    url: setting?.url,
    opening: setting?.opening,
    metadescription: setting?.metadescription,
    maps: setting?.maps,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    router.post(`settings/${setting.id}`, {
      _method: 'put',
      logo: data.logo,
      title: data?.title,
      description: data?.description,
      metadescription: data?.metadescription,
      state: data?.state,
      city: data?.city,
      neighborhood: data?.neighborhood,
      address: data?.address,
      phone: data?.phone,
      whatsapp: data?.whatsapp,
      instagram: data?.instagram,
      facebook: data?.facebook,
      email: data?.email,
      url: data?.url,
      opening: data?.opening,
      maps: data?.maps,
    });
  }

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoOptionsSharp size={30} />
            <span className="ml-2">Configurações</span>
          </TitleTop>
          <BreadCrumbTop links={[{ url: null, label: 'Configurações' }]} />
        </HeaderContent>
        <CardContainer>
          <FlashMessage message={flash} />
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardBody className=" border-y border-gray-100">
              <div className="mt-4 px-3 my-4">
                <div>
                  <img
                    className="w-48 h-48 mx-2 bg-gray-100"
                    src={`/storage/images/${setting?.logo ? setting?.logo : 'notimage.png'}`}
                    alt=""
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="logo">
                    Logotipo
                  </label>
                  <input
                    id="logo"
                    type="file"
                    onChange={e => setData('logo', e.target.files[0])}
                    className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                  />
                  {errors.logo && (
                    <div className="text-red-500">{errors.logo}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="title">
                    Nome do site
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="input-form"
                  />
                  {errors.title && (
                    <div className="text-red-500">{errors.title}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="description">
                    Descrição
                  </label>
                  <textarea
                    id="description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="input-form"
                  ></textarea>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="state">
                    Estado
                  </label>
                  <input
                    id="state"
                    type="text"
                    value={data.state}
                    onChange={e => setData('state', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="city">
                    Cidade
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={data.city}
                    onChange={e => setData('city', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="neighborhood">
                    Bairro
                  </label>
                  <input
                    id="neighborhood"
                    type="text"
                    value={data.neighborhood}
                    onChange={e => setData('neighborhood', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="address">
                    Endereço
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={data.address}
                    onChange={e => setData('address', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={data.phone}
                    onChange={e => setData('phone', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    type="text"
                    value={data.whatsapp}
                    onChange={e => setData('whatsapp', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="instagram">
                    Instagram
                  </label>
                  <input
                    id="instagram"
                    type="text"
                    value={data.instagram}
                    onChange={e => setData('instagram', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="facebook">
                    Facebook
                  </label>
                  <input
                    id="facebook"
                    type="text"
                    value={data.facebook}
                    onChange={e => setData('facebook', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="url">
                    URL
                  </label>
                  <input
                    id="url"
                    type="text"
                    value={data.url}
                    onChange={e => setData('url', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="opening">
                    Horário de atendimento
                  </label>
                  <input
                    id="opening"
                    type="text"
                    value={data.opening}
                    onChange={e => setData('opening', e.target.value)}
                    className="input-form"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="metadescription">
                    Meta Description (SEO)
                  </label>
                  <textarea
                    rows={4}
                    id="metadescription"
                    value={data.metadescription}
                    onChange={e => setData('metadescription', e.target.value)}
                    className="input-form"
                  ></textarea>
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="maps">
                    Google Maps
                  </label>
                  <textarea
                    rows={4}
                    id="maps"
                    value={data.maps}
                    onChange={e => setData('maps', e.target.value)}
                    className="input-form"
                  ></textarea>
                </div>

                {setting.maps && (
                  <div
                    className="w-full flex justify-center border shadow-md"
                    dangerouslySetInnerHTML={{ __html: setting.maps }}
                  />
                )}
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

export default Settings;
