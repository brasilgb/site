import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {
  IoBasketSharp,
  IoDocumentSharp,
  IoDocumentTextSharp,
  IoGridSharp,
  IoList,
  IoOptionsSharp,
} from 'react-icons/io5';
import { AiOutlineDashboard } from 'react-icons/ai';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-24 my-4">
        <ApplicationLogo />
      </div>
      <div className="mb-4 border-b border-blue-quatro w-full" />
      <div className="mt-4 w-full px-3">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('dashboard') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'} transition-all duration-300`}
              href={route('dashboard')}
            >
              <AiOutlineDashboard size={20} />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('pages.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'} transition-all duration-300`}
              href={route('pages.index')}
            >
              <IoDocumentSharp size={20} />
              <span className="ml-2">Páginas</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('categories.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'}  transition-all duration-300`}
              href={route('categories.index')}
            >
              <IoList size={20} />
              <span className="ml-2">Categorias</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('posts.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'}  transition-all duration-300`}
              href={route('posts.index')}
            >
              <IoDocumentTextSharp size={20} />
              <span className="ml-2">Postagens</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('products.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'}  transition-all duration-300`}
              href={route('products.index')}
            >
              <IoBasketSharp size={20} />
              <span className="ml-2">Produtos</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('settings.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'}  transition-all duration-300`}
              href={route('settings.index')}
            >
              <IoOptionsSharp size={20} />
              <span className="ml-2">Configurações</span>
            </Link>
          </li>
          <li>
            <Link
              className={`flex items-center justify-start rounded-md p-2 ${route().current('sections.*') ? 'bg-gray-100 text-blue-quatro' : 'text-blue-um hover:bg-gray-100 hover:text-blue-quatro'}  transition-all duration-300`}
              href={route('sections.index')}
            >
              <IoGridSharp size={20} />
              <span className="ml-2">Home do site</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
