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
import { usePage } from '@inertiajs/react';
import moment from 'moment';
import React, { Fragment } from 'react';
import { IoBasketSharp } from 'react-icons/io5';

type Props = {};

const Products = ({ products }: any) => {
  const { flash } = usePage().props;

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoBasketSharp size={30} />
            <span className="ml-2">Produtos</span>
          </TitleTop>
          <BreadCrumbTop links={[{ url: null, label: 'Produtos' }]} />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <InputSearch
                placeholder={'Buscar por produto'}
                url={'products.index'}
              />
            </CardHeaderContent>
            <CardHeaderContent>
              <AddButton url={route('products.create')} label={'Produtos'} />
            </CardHeaderContent>
          </CardHeader>
          <FlashMessage message={flash} />
          <CardBody>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Categorias</TableHead>
                  <TableHead>Ativa</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.data.map((product: any) => (
                  <Fragment key={product.id}>
                    <TableRow>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.slug}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-start gap-2">
                          {product.categories.map((c: any, i: any) => (
                            <span
                              key={i}
                              className="bg-yellow-100 rounded border p-1"
                            >
                              {c.name}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{product.active}</TableCell>
                      <TableCell>
                        {moment(product.created_at).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="flex items-center justify-end gap-2">
                        <EditButton url={route('products.edit', product.id)} />
                        <DeleteButton
                          url="products.destroy"
                          param={product.id}
                          identify={`a postagem ${product.title}`}
                        />
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter>
            <Pagination data={products} />
          </CardFooter>
        </CardContainer>
      </Card>
    </AuthenticatedLayout>
  );
};

export default Products;
