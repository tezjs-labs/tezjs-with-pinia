// @ts-nocheck
import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
  }),
  getters: {
    data: (state) =>
      state.users.reduce((data, user) => {
        data.push({ id:user.id , name: user.name })
        return data;
      }, []),
  },
  actions: {

    adduser(name) {
      this.users.push(name)
    },
  },
})
