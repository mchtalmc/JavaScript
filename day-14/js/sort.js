/*

SORTING KURLLARI : 

Eger negatif bir sayi donerse a,b 'den once siralanir BUYUKTEN KUCUGE
Eger pozitif bir sayi donerse a,b 'den sonra siralanir KUCUKTEN BUYUGE
Eger 0 donerse degisiklik olmaz


*/

// arr = [55,12,5,120.65.9]
const numberSortASC = (arr) => {
  return arr.sort(() => a - b);
};

const numberSortDES = (arr) => {
  return arr.sort(() => b - a);
};

const stringSortASC = (arr) => {
  return arr.sort();
};

const stringSortDESC = (arr) => {
  return arr.sort().reverse();
};


export { numberSortASC, numberSortDES, stringSortASC, stringSortDESC };