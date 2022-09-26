import { createPinia }  from 'pinia';

const pinia= createPinia()
export default function(vue:any){
    vue.use(pinia)
}