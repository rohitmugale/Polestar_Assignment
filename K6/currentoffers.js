import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 },  
    { duration: '1m', target: 20 },    
    { duration: '30s', target: 0 },  
  ],
};

export default function () {
  
  let res = http.get('https://car-images.polestar.com/carvis/pub/prod/814/2025/summary-details/PB/72900/P01300/31/_/_/_/_/1/221010/default/2.jpg?quality=65&width=1280&height=600&fit=crop&gravity=0.47x0.5');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1); 
}