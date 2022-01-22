import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 300,
  duration: '10s',
};

export default function main() {
  const before = new Date().getTime();
  const T = 2;

  http.get('http://localhost:3070/products/10000/related')

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  check(remainder, { 'reached request rate': remainder > 0 });
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
}