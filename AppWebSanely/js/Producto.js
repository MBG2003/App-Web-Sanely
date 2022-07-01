class Producto {
    static contadorProductos = 0;
    constructor(nombre, tipo, precio){
        this._id = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._tipo = tipo;
        this._precio = precio;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }
}