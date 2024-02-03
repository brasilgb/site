import { AddButton, BackButton, SaveButton } from '@/Components/Admin/Buttons';
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
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage } from '@inertiajs/react';
import { InertiaFormProps } from '@inertiajs/react/types/useForm';
import React, { useEffect, useRef } from 'react';
import { IoBasketSharp } from 'react-icons/io5';
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';

interface PageProps {
  brand: string;
  title: string;
  summary: string;
  content: string;
  category_id: any;
  featured: any;
  valnormal: string;
  valpromo: string;
  active: boolean;
  social: boolean;
  linked: boolean;
  type: number;
}

const addProduct = ({ categories }: any) => {
  const editorRef = useRef<any>();
  const options = categories.map((cat: any) => ({
    value: cat.id,
    label: cat.name,
  }));

  const {
    data,
    setData,
    post,
    processing,
    errors,
  }: InertiaFormProps<PageProps> = useForm({
    brand: '',
    title: '',
    summary: '',
    content: '',
    category_id: [],
    featured: null,
    valnormal: '',
    valpromo: '',
    active: false,
    social: false,
    linked: false,
    type: 2,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route('products.store'));
  }

  const handleChange = (selected: any) => {
    setData(
      'category_id',
      selected.map((v: any) => v.value)
    );
  };

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoBasketSharp size={30} />
            <span className="ml-2">Produtos</span>
          </TitleTop>
          <BreadCrumbTop
            links={[
              { url: route('products.index'), label: 'Produtos' },
              { url: null, label: 'Adicionar produto' },
            ]}
          />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <BackButton url={route('products.index')} label={'Voltar'} />
            </CardHeaderContent>
            <CardHeaderContent>
              <></>
            </CardHeaderContent>
          </CardHeader>
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardBody className=" border-y border-gray-100">
              <div className="mt-4 px-3 my-4">
                <div className="flex flex-col">
                  <label className="label-form" htmlFor="title">
                    Marca do produto
                  </label>
                  <input
                    id="brand"
                    type="text"
                    value={data.brand}
                    onChange={e => setData('brand', e.target.value)}
                    className="input-form"
                  />
                  {errors.brand && (
                    <div className="text-red-500">{errors.brand}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="title">
                    Nome do produto
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
                  <label className="label-form" htmlFor="summary">
                    Detalhes
                  </label>
                  <textarea
                    id="summary"
                    value={data.summary}
                    onChange={e => setData('summary', e.target.value)}
                    className="input-form"
                  ></textarea>
                  {errors.summary && (
                    <div className="text-red-500">{errors.summary}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="content">
                    Descrição completa
                  </label>
                  <Editor
                    apiKey="3v1hskg4ud3hwf1bi5to0pt3xp6zjyksrvujfngcpzzaw2l3"
                    onInit={(evt, editor: any) => (editorRef.current = editor)}
                    initialValue={data.content}
                    onChange={() =>
                      setData('content', editorRef.current?.getContent())
                    }
                    id="content"
                    init={{
                      language: 'pt_BR',
                      height: 300,
                      menubar: false,
                      plugins:
                        'autolink lists link charmap print preview anchor table image',
                      toolbar:
                        'undo redo styles link bold italic image table alignleft aligncenter alignright alignjustify  bullist numlist outdent indent',
                      content_style:
                        'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                  />
                  {errors.content && (
                    <div className="text-red-500">{errors.content}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="featured">
                    Imagem destacada
                  </label>
                  <input
                    id="featured"
                    type="file"
                    onChange={e => setData('featured', e.target.files[0])}
                    className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                  />
                  {errors.featured && (
                    <div className="text-red-500">{errors.featured}</div>
                  )}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="label-form" htmlFor="title">
                    Categorias
                  </label>
                  <Select
                    options={options}
                    isMulti
                    onChange={handleChange}
                    placeholder="Selecione a(s) categoria(s)"
                    styles={{
                      multiValueLabel: base => ({
                        ...base,
                        backgroundColor: '#00AEEF',
                        color: 'white',
                      }),
                    }}
                  />
                  {errors.category_id && (
                    <div className="text-red-500">{errors.category_id}</div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label className="label-form" htmlFor="valnormal">
                      Valor venda
                    </label>
                    <input
                      id="valnormal"
                      type="text"
                      value={data.valnormal}
                      onChange={e => setData('valnormal', e.target.value)}
                      className="input-form"
                    />
                    {errors.valnormal && (
                      <div className="text-red-500">{errors.valnormal}</div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="label-form" htmlFor="valpromo">
                      Valor com deconto
                    </label>
                    <input
                      id="valpromo"
                      type="text"
                      value={data.valpromo}
                      onChange={e => setData('valpromo', e.target.value)}
                      className="input-form"
                    />
                    {errors.valpromo && (
                      <div className="text-red-500">{errors.valpromo}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="active"
                    checked={data.active}
                    onChange={e => setData('active', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="active">
                    Ativar produto
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="linked"
                    checked={data.linked}
                    onChange={e => setData('linked', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="linked">
                    Abrir em outra página
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="social"
                    checked={data.social}
                    onChange={e => setData('social', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="social">
                    Botões redes sociais
                  </label>
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

export default addProduct;
