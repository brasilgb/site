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
import { IoDocumentSharp } from 'react-icons/io5';
import { Editor } from '@tinymce/tinymce-react';

interface PageProps {
  title: string;
  summary: string;
  content: string;
  featured: any;
  active: boolean;
  social: boolean;
  linked: boolean;
  type: number;
}

const addPage = () => {
  const editorRef = useRef<any>();
  const { flash } = usePage().props;

  const {
    data,
    setData,
    post,
    processing,
    errors,
  }: InertiaFormProps<PageProps> = useForm({
    title: '',
    summary: '',
    content: '',
    featured: null,
    active: false,
    social: false,
    linked: false,
    type: 0,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route('pages.store'));
  }

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoDocumentSharp size={30} />
            <span className="ml-2">Páginas</span>
          </TitleTop>
          <BreadCrumbTop
            links={[
              { url: route('pages.index'), label: 'Páginas' },
              { url: null, label: 'Adicionar página' },
            ]}
          />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <BackButton url={route('pages.index')} label={'Voltar'} />
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
                    Título
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
                    Descrição
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
                    Conteúdo
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

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="active"
                    checked={data.active}
                    onChange={e => setData('active', e.target.checked)}
                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <label className="label-form" htmlFor="active">
                    Ativar em menus
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

export default addPage;
