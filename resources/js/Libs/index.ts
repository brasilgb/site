const selectModule = [
  { value: 1, label: 'Postagens' },
  { value: 2, label: 'Produtos' },
];

const valueNameModule = (value: any) => {
  switch (value) {
    case 1:
      return 'Postagens';
    case 2:
      return 'Produtos';
  }
};

export { selectModule, valueNameModule };
