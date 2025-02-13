import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';


export let options = {
  stages: [
    { duration: '20s', target: 40 },  
    { duration: '30s', target: 40 },    
    { duration: '30s', target: 0 },  
  ],
};

export default function () {
  
  let res = http.get('https://additionals.polestar.com/us/wp-json/wc/store/cart');   

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1); 
  
}
