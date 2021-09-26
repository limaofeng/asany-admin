const current = 5;
const total = 8;

/* const x1 = Array.from({ length: 7 }, (v, k) => k + 1);

console.log(x1);

if (total <= 7) {
  const x = [1, 2, 3, 4, 5, 6, 7];
} */

const pageNumbers: (string | number)[] = [];
let start = Math.min(Math.max(1, current - 2), Math.max(total - 4, 1));
let end = Math.max(Math.min(total, current + 2), Math.min(5, total));
console.log(start, end);
if (start == 2) {
  end--;
  start--;
} else if (total - end == 1) {
  end++;
  start++;
}
pageNumbers.push(...Array.from({ length: end - start + 1 }, (v, k) => k + start));
if (start > 2) {
  pageNumbers.unshift(0);
}
if (start != 1) {
  pageNumbers.unshift(1);
}
if (end < total - 1) {
  pageNumbers.push(0);
}
if (end != total) {
  pageNumbers.push(total);
}
console.log(pageNumbers);
