class producto{
    _codigo
    _nombre
    _precio
    constructor(codigo,nombre, precio){
        this._codigo = codigo
        this._nombre = nombre;
        this._precio = precio;
    }
    get producto (){
        let array=[this._codigo, this._nombre, this._precio]
        return array
    }
    get codigo(){
        return this._codigo
    }
    get nombre (){
        return this._nombre
    }
    get precio(){
        return this._precio
    }

}
// let producto1=new producto(123,'choco crispy',17000,2,0)
//  let producto2=new producto(234,'papas margarita',2800,100,10)
//  let producto3=new producto(345,'papel higienco',17000,10,15)
//  let producto4=new producto(456,'Clorox',12000,5,10)
//  let producto5=new producto(678,'CremaCuerpo',25000,2,5)
//  let producto6=new producto(789,'Pañitos',7000,1,10)
//  console.log(producto1.producto)
//  console.log(producto2.producto)
//  console.log(producto3.producto)
//  console.log(producto4.producto)
//  console.log(producto5.producto)
//  console.log(producto6.producto)
module.exports = producto
