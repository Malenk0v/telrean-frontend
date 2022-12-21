export const names = ['Braavos', 'Riverlands', 'Weasterlans', 'Crownlands'];
export const getReandomIndex = (bound: number) =>
  Math.trunc(Math.random() * bound);
export const getBank = (index: number) => ({ name: names[index] });
