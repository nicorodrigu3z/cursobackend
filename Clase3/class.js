class Usuario {
    constructor(nombre, apellido, libros, mascota){

    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascota = [];

    }


getFullName() {

    return `${this.nombre} ${this.apellido}`
    
    }
    
    addMascotas(mascota) {
    
    this.mascotas.push(mascota)
    
    }
    
    countMascotas() {
    
    return this.mascotas.length
    
    }
    
    addBook(nombre, autor){
    
    this.libros.push({‘nombre’: nombre, ‘autor’: autor})
    
    }
    
    getBookNames() {
    
    return this.libros.map(e \=> e.nombre)
    
    }
    
}