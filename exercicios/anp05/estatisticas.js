export function mediaNotas(lista) {
  const soma = lista.reduce((acumulador, filme) => acumulador + filme.nota, 0);

  const media = soma / lista.length;

  return media.toFixed(1);
}

export function contagemPorStatus(lista) {
  return lista.reduce((acumulador, filme) => {
      const status = filme.status;
    
      acumulador[status] = (acumulador[status] || 0) + 1;
    
      return acumulador;
  }, {});
}

export const ordenarPorNota = (lista) => {
  return [...lista].sort((a, b) => b.nota - a.nota);
};
