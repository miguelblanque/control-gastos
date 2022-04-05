
  // Codigo para gener ar un id unico
  export const generarId= () =>{
    const random=Math.random().toString(36).substr(2);
    const fecha=Date.now().toString(36)

    return fecha+random;
}

// Funcion para formatear la fecha en formato dd mm yyyy
export const formatearFecha = fecha=>{
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('es-ES',opciones)
}