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
import { IoDocumentTextSharp } from 'react-icons/io5';

type Props = {};

const Posts = ({ posts }: any) => {
  const { flash } = usePage().props;

  return (
    <AuthenticatedLayout>
      <Card>
        <HeaderContent>
          <TitleTop>
            <IoDocumentTextSharp size={30} />
            <span className="ml-2">Postagens</span>
          </TitleTop>
          <BreadCrumbTop links={[{ url: null, label: 'Postagens' }]} />
        </HeaderContent>
        <CardContainer>
          <CardHeader>
            <CardHeaderContent>
              <InputSearch
                placeholder={'Buscar por postagem'}
                url={'posts.index'}
              />
            </CardHeaderContent>
            <CardHeaderContent>
              <AddButton url={route('posts.create')} label={'Postagens'} />
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
                  <TableHead>Categorias</TableHead>
                  <TableHead>Ativa</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.data.map((post: any) => (
                  <Fragment key={post.id}>
                    <TableRow>
                      <TableCell>{post.id}</TableCell>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.slug}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-start gap-2">
                          {post.categories.map((c: any, i: any) => (
                            <span
                              key={i}
                              className="bg-yellow-100 rounded border p-1"
                            >
                              {c.name}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{post.active}</TableCell>
                      <TableCell>
                        {moment(post.created_at).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="flex items-center justify-end gap-2">
                        <EditButton url={route('posts.edit', post.id)} />
                        <DeleteButton
                          url="posts.destroy"
                          param={post.id}
                          identify={`a postagem ${post.title}`}
                        />
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter>
            <Pagination data={posts} />
          </CardFooter>
        </CardContainer>
      </Card>
    </AuthenticatedLayout>
  );
};

export default Posts;
