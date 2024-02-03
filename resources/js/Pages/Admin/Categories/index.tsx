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
import { valueNameModule } from '@/Libs';
import { usePage } from '@inertiajs/react';
import moment from 'moment';
import React, { Fragment } from 'react';
import { IoList } from 'react-icons/io5';

type Props = {};

const Categories = ({ categories }: any) => {
  const { flash } = usePage().props;

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoList size={30} />
            <span className="ml-2">Categorias</span>
          </TitleTop>
          <BreadCrumbTop links={[{ url: null, label: 'Categorias' }]} />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <InputSearch
                placeholder={'Buscar por categoria'}
                url={'categories.index'}
              />
            </CardHeaderContent>
            <CardHeaderContent>
              <AddButton
                url={route('categories.create')}
                label={'Categorias'}
              />
            </CardHeaderContent>
          </CardHeader>
          <FlashMessage message={flash} />
          <CardBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Parent</TableHead>
                  <TableHead>Módulo</TableHead>
                  <TableHead>N° Post/Prod</TableHead>
                  <TableHead>Ativa</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.data.map((category: any) => (
                  <Fragment key={category.id}>
                    <TableRow>
                      <TableCell>{category.id}</TableCell>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>{category.slug}</TableCell>
                      <TableCell>{category.parent}</TableCell>
                      <TableCell>{valueNameModule(category.module)}</TableCell>
                      <TableCell>{category.posts.length}</TableCell>
                      <TableCell>{category.active}</TableCell>
                      <TableCell>
                        {moment(category.created_at).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="flex items-center justify-end gap-2">
                        <EditButton
                          url={route('categories.edit', category.id)}
                        />
                        <DeleteButton
                          url="categories.destroy"
                          param={category.id}
                          identify={`a categoria ${category.nome}`}
                        />
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter>
            <Pagination data={categories} />
          </CardFooter>
        </CardContainer>
      </Card>
    </AuthenticatedLayout>
  );
};

export default Categories;
