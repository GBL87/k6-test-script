import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10, //number of virtual users
    duration: '30s', //test duration
};

export default function () {
    let response = http.get('http://test.k6.io');
    check(response, {
        'status was 200': (r) => r.status == 200,
        'transaction time OK': (r) => r.timings.duration < 200,
    });
}
