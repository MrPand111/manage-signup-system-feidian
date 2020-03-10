import axios from 'axios'
import Router from '@/router'

export function request(config) {
    const instance = axios.create({
        //baseURL: 'http://47.100.76.82:9000',
        baseURL: 'http://192.168.0.7:3000',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        if(localStorage.getItem('token')) {
            config.headers.Authorization = localStorage.getItem('token');
        }
        return config;
    },err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res;
    },err => {
        if(err.response) {
            switch(err.response.status) {
                case 401:
                    localStorage.removeItem('token');
                    Router.push('/login');
            }
        }
    })

    return instance(config);
}