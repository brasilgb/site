import {
  AddButton,
  DeleteButton,
  EditButton,
} from '@/Components/Admin/Buttons';
import {
  Card,
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
  CardHeaderContent,
} from '@/Components/Admin/Card';
import FlashMessage from '@/Components/Admin/FlashMessage';
import InputSearch from '@/Components/Admin/InputSearch';
import {
  BreadCrumbTop,
  HeaderContent,
  TitleTop,
} from '@/Components/Admin/PageTop';
import Pagination from '@/Components/Admin/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/Admin/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import moment from 'moment';
import React, { Fragment } from 'react';
import { IoDocumentSharp } from 'react-icons/io5';

type Props = {};

const Pages = ({ pages }: any) => {
  const { flash } = usePage().props;

  return (
    <AuthenticatedLayout>
      <Head title="Páginas" />
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoDocumentSharp size={30} />
            <span className="ml-2">Páginas</span>
          </TitleTop>
          <BreadCrumbTop links={[{ url: null, label: 'Páginas' }]} />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <InputSearch
                placeholder={'Buscar por página'}
                url={'pages.index'}
              />
            </CardHeaderContent>
            <CardHeaderContent>
              <AddButton url={route('pages.create')} label={'Páginas'} />
            </CardHeaderContent>
          </CardHeader>
          <FlashMessage message={flash} />
          <CardBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Ativa</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pages.data.map((page: any) => (
                  <Fragment key={page.id}>
                    <TableRow>
                      <TableCell>{page.id}</TableCell>
                      <TableCell>{page.title}</TableCell>
                      <TableCell>{page.slug}</TableCell>
                      <TableCell>{page.active}</TableCell>
                      <TableCell>
                        {moment(page.created_at).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="flex items-center justify-end gap-2">
                        <EditButton url={route('pages.edit', page.id)} />
                        <DeleteButton
                          url="pages.destroy"
                          param={page.id}
                          identify={`a página ${page.title}`}
                        />
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter>
            <Pagination data={pages} />
          </CardFooter>
        </CardContainer>
      </Card>
    </AuthenticatedLayout>
  );
};

export default Pages;
