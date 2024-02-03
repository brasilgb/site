import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import moment from 'moment';
import React from 'react';
import BotoesSociais from '../BotoesSociais';
import { IoLogoWhatsapp } from 'react-icons/io5';

const Footer = () => {
  const { conf } = usePage().props;

  return (
    <div className="bg-blue-cinco">
      <div className="fixed bottom-5 left-5 bg-green-500 rounded p-2 shadow-md border-2 border-white">
        <a
          href={`https://api.whatsapp.com/send?phone=${conf[0].whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`}
          target="_blank"
          className="flex items-center justify-center"
        >
          <span className="text-sm text-white font-semibold uppercase drop-shadow-md">
            Fale conosco
          </span>
          <span className="text-3xl text-white ml-2 animate-bounce">
            <IoLogoWhatsapp />
          </span>
        </a>
      </div>
      <section className="py-8">
        <div className="md:container md:mx-auto grid md:grid-cols-6">
          <div className="flex items-center justify-start">
            <Link
            href='/'
            >
            <div className="w-32">
              <ApplicationLogo />
            </div>
            </Link>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-lg text-blue-um font-semibold uppercase">
              Contatos
            </h1>
            <div className="bg-blue-um h-1 mb-3 w-1/3" />
            <ul className="">
              <li className="text-sm text-gray-50 font-normal">
                {conf[0].phone}
              </li>
              <li className="text-sm text-gray-50 font-normal">
                {conf[0].email}
              </li>
              <li className="text-sm text-gray-50 font-normal">
                {conf[0].opening}
              </li>
              <li className="text-sm text-gray-50 font-normal">
                {conf
                  ? conf[0]?.address +
                    ' - ' +
                    conf[0].neighborhood +
                    ' - ' +
                    conf[0].city
                  : ''}
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-lg text-blue-um font-semibold uppercase">
              Acesso rápido
            </h1>
            <div className="bg-blue-um h-1 mb-3 w-1/3" />
            <ul>
              <li className="text-sm text-gray-50 font-normal">
                <span>- </span>
                <Link className="hover:text-blue-dois" href="/">
                  Home
                </Link>
              </li>
              <li className="text-sm text-gray-50 font-normal">
                <span>- </span>
                Produtos
              </li>
              <li className="text-sm text-gray-50 font-normal">
                <span>- </span>
                Serviços
              </li>
              <li className="text-sm text-gray-50 font-normal">
                <span>- </span>
                Sobre nós
              </li>
              <li className="text-sm text-gray-50 font-normal">
                <span>- </span>
                Contato
              </li>
            </ul>
          </div>

          <div className="">
            <BotoesSociais className="flex flex-col items-end justify-center gap-4 h-full" />
          </div>
        </div>
      </section>
      <div className="container mx-auto h-0.5 bg-blue-quatro" />
      <footer className="py-6">
        <div className="md:container mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm font-normal text-white">
              {moment().format('YYYY')}&copy; - {conf[0].title} - Todos os direitos
              reservados
            </p>
          </div>
          <div>
            <span className="text-sm text-megb-yellow font-semibold">MEGB</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
