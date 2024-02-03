import { usePage } from '@inertiajs/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoAdd, IoLogoWhatsapp } from 'react-icons/io5';

const Produtos = ({ produtos }: any) => {
  const { conf } = usePage().props;
  const [numProdutos, setNumProdutos] = useState<number>(12);

  const handleProducts = () => {
    if (produtos[0]?.posts.length > numProdutos) {
      setNumProdutos(numProdutos + 6);
    } else {
      setNumProdutos(12);
      window.location.href = '#produtoid';
    }
  };

  return (
    <div className="container mx-auto my-10">
      <div
        className="flex flex-col items-center justify-center my-10 w-full"
        id="produtoid"
      >
        <h1 className="text-4xl">
          {produtos[0]?.name ? produtos[0]?.name : ''}
        </h1>
        <p className="text-base">
          {produtos[0]?.description ? produtos[0]?.description : ''}
        </p>
      </div>
      <div className="grid md:grid-cols-6 gap-8">
        {produtos[0]?.posts.slice(0, numProdutos).map((produto: any) => (
          <div
            key={produto.id}
            className="flex flex-col items-start justify-start hover:shadow-lg shadow border-2 border-white"
          >
            <div className="h-52 w-full p-2 flex-2">
              <img
                src={`/storage/uploads/${produto.featured}`}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col flex-1 my-2 px-2">
              <h1 className="text-xs font-medium ">{produto.brand}</h1>
              <h1 className="text-sm font-semibold">{produto.title}</h1>
            </div>

            <div className="p-2 flex flex-col items-start justify-end w-full">
              {produto.valnormal && (
                <h1 className="text-xs font-semibold text-blue-tres line-through">
                  {parseFloat(produto.valnormal).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h1>
              )}
              {produto.valpromo && (
                <h1 className="text-base font-semibold text-blue-quatro">
                  {parseFloat(produto.valpromo).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                  <span className="text-xs font-normal ml-0.5">à vista</span>
                </h1>
              )}
              <div className="w-full flex items-center justify-between">
                <div>
                  {produto.content && (
                    <button className="flex items-center justify-center py-1 px-2 bg-red-500 border border-white text-sm text-white">
                      <IoAdd />
                      <span className="ml-1">Detalhes</span>
                    </button>
                  )}
                </div>
                <div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${conf[0].whatsapp}&text=Olá, o produto ${produto.title} está disponível?`}
                    target="_blank"
                    className="flex items-center justify-center text-3xl text-green-500"
                  >
                    <IoLogoWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {produtos[0]?.posts.length > 12 && (
        <div className="w-full flex justify-center mt-8">
          <button
            className="bg-red-um py-2 px-3 text-gray-50 rounded shadow-md"
            onClick={handleProducts}
          >
            {produtos[0]?.posts.length > numProdutos
              ? 'Mais produtos'
              : 'Menos produtos'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Produtos;
