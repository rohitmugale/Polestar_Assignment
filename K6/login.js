import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';


export let options = {
  stages: [
    { duration: '30s', target: 50 },   
    { duration: '30s', target: 100 },   
    { duration: '30s', target: 0 },    
  ],
};

export default function () {

  let res = http.get('https://polestarid.eu.polestar.com/PolestarLogin/login?resumePath=7x4lPsZSm1&client_id=l3oopkc_10&language=en&market=us');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

 sleep(1); 
}