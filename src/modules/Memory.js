
export  class Memory {
    constructor() {
        this.data = new Uint8Array(0x10000); // 64 KB pamięci
    }

    read(address) {
        return this.data[address];
    }

    write(address, value) {
        this.data[address] = value;
    }
}