let x = 5;
console.log(typeof(x));

x = String(x);
console.log(typeof(x));

x = `200`;
x = Number(x);
console.log(typeof(x));

x = '200';
x = +x;
console.log(x);
console.log(typeof(x));

res = 1 / 0;
console.log(res);

x = NaN;
console.log(x);

x += Infinity;
console.log(x);
