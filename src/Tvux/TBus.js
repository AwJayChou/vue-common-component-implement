class Bus {
    constructor() {
        this.callbacks = {}
    }
    on(type, cb) {
        this.callbacks[type] = this.callbacks[type] ? this.callbacks[type] : []
        this.callbacks[type].push(cb)
    }
    emit(type, args) {
        this.callbacks[type].forEach(cb => cb(args))
    }
}