let storage = {
    get(key) {
        const value = localStorage.getItem(key)
        try {
            return JSON.parse(value)
        } catch (err) {
            return value
        }
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    remove(key) {
        localStorage.removeItem(key)
    },
}

export default storage
