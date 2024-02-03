import { usePage } from '@inertiajs/react';
import React from 'react';

export default function ApplicationLogo() {
  const { conf } = usePage().props;
  return (
    <img
      src={`/storage/images/${conf[0].logo ? conf[0].logo : 'notimage.png'}`}
      alt="Logo"
    />
  );
}
