const usuario=require('./usuario');
class administrador extends usuario {    
    _lineaAtencion;
    _promociones=[]
    constructor(nombre, apellido,correo,ntel,lineaAtencion,direccion,){
    super(nombre, apellido,correo,ntel,direccion)
    this._lineaAtencion =lineaAtencion
    }
 get lineaAtencion(){
    return this._lineaAtencion
 } 
   get promociones(){
      return this._promociones
   }

   set promociones(promociones){
      this._promociones=promociones
   }

    p ={
      promocion:[],
      agregarPromocion(categoria,descuento){
          let c=new promo(categoria,descuento)
          this.promocion.push(c)
         
  
      },
      get promocion(){
          return this.promocion
      },

      buscarpromocion(categoria){
         for (let i=0; i < this.promocion.length; i++){
            let m=this.promocion[i]
        if (categoria==m.categoria){
         return m.descuento
        }

        }

      },
  
      modificarpromocion(categoria,descuento){
          for (let i=0; i < this.promocion.length; i++){
              let m=this.promocion[i]
          if (categoria==m.categoria){
              m.descuento=descuento
          }
  
          }
  
      }
} 
}

let admiprincipar = new administrador('Samuel','Padilla','amoprogramar@gmail.com',63532,11111,'CIDE')
console.log(admiprincipar)

module.exports=administrador





