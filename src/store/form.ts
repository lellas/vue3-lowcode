import { defineStore } from 'pinia'
export default defineStore('form', {
    state() {
        return {
            allComponentList: [] as any
        }
    },
    getters: {},
    actions: {
        setAllComponentList(item: any) {
            console.log('item:', item)
            // this.allComponentList.push(item)
        }
    }
})