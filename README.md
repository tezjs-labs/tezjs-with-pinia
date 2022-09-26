# Tezjs with Pinia

- Pinia is a store library for Vue, it allows you to share a state across components/pages
- We can use pinia with the Tezjs through the below steps.
- Create a fresh tezjs project
```
 npm create tez@latest
```
- Install package for pinia
```
 npm install pinia
```
- Now add it as a plugin, make a plugins directory and add index.ts inside it and add the below code to use Pinia.
~~~
plugins/index.ts

import { createPinia }  from 'pinia';

const pinia= createPinia()

export default function(vue:any){
    vue.use(pinia)
}
~~~

- It's done with tezjs. Now, you can use pinia library in your project.

- If you want to learn more about Tezjs you can visit: https://tezjs.io

- If you want to learn more about pinia you can visit: https://pinia.vuejs.org/
