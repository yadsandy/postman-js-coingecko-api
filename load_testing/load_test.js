import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 1 },  // Gradually ramp up to 1 requests/sec
    { duration: '20s', target: 1 },  // Increase load to 1 requests/sec
    { duration: '20s', target: 1 }, //  Cool down
  ],
  thresholds: {
    http_req_failed: ['rate<5'],  // Allow failure rate < 5%
    http_req_duration: ['p(95)<1000'] // 95% of responses should be under 1000ms
  }
};

export default function () {
  let apiKey = 'CG-MrZTDqigbpkzzTobjWKz3N5r';
  let url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`;
  let params = {
    headers: { 'x-cg-pro-api-key': apiKey }
  };

  let res = http.get(url, params);

  check(res, {
    '✅ Status is 200': (r) => r.status === 200,
    '✅ Response time is < 1 second': (r) => r.timings.duration < 1000
  });
  sleep(10);
}
