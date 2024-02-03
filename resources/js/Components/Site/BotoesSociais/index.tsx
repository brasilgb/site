import { usePage } from '@inertiajs/react';
import React from 'react';
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6';

interface BotoesProps {
  className?: string;
}
const BotoesSociais = ({ className }: BotoesProps) => {
  const { conf } = usePage().props;
  return (
    <div className={`${className}`}>
      <div className="bg-white rounded-md">
        <a
          href={`https://api.whatsapp.com/send?phone=${conf[0].whatsapp}&text=Olá, poderia ajudar-me com uma dúvida?`}
          target="_blank"
        >
          <FaSquareWhatsapp size={35} color="#009608" />
        </a>
      </div>
      <div className="bg-white rounded-md">
        <a href={`${conf[0].instagram}`} target="_blank">
          <FaSquareInstagram size={35} color="#F1844A" />
        </a>
      </div>
    </div>
  );
};

export default BotoesSociais;
