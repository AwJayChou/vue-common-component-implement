let Vue;

class Store {
    //  state: {} mutations:{} actions:{} getters:{}
    constructor(options) {
        this.state = new Vue({
            data: options.state
        })
        this.mutations = options.mutations || {}
        this.actions = options.actions || {}

        this.handleGetters(options.getters);
    }

    commit(type, args) {
        this.mutations[type](this.state, args)
    }
    dispatch(type, args) {
        this.actions[type]({
            commit: this.commit,
            state: this.state,
            getters: this.getters
        }, args)
    }
    handleGetters(getters) {
        this.getters = {}

        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state);
                }
            })
        })

    }
}

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.$store;
            }
        }
    })

}

export {
    install,
    Store
}