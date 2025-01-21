import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';


export let options = {
  stages: [
    { duration: '30s', target: 50 },   
    { duration: '30s', target: 50 },    
    { duration: '30s', target: 0 },    
  ],
};

export default function () {
  
  let res = http.post('https://pc-api.polestar.com/eu-north-1/test-drive-portal/customer');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  
  sleep(1); 
}