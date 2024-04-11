
export const checkName = (name) =>{
    const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
    if(name.length > 0){
        if(!regName.test(name)){
            return 'Por favor, sólo ingrese letras'
        }else{
            return ''
        }
    }else{
        return 'Por favor, ingrese su nombre'
    }
  }

export const checkLastName = (lastname) =>{
    const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
    if(lastname.length > 0){
        if(!regName.test(lastname)){
            return 'Por favor, sólo ingrese letras'
        }else{
            return ''
        }
    }else{
        return 'Por favor, ingrese su apellido'
    }
  }

  export const checkRut = (rut) => {
    // Despejar Puntos
    var valor = rut.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length > 8){
        return "Rut no válido";
    }else if(cuerpo.length < 7 && valor.length !== 0){ 
        return "Rut Incompleto"
    }else if(valor.length === 0){
        return "Por favor, ingrese su Rut"
    }
    
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++){
        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7){ 
            multiplo = multiplo + 1; 
        }else{ 
            multiplo = 2; 
        }
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv === 'K') ? 10 : dv;
    dv = (parseInt(dv,10) === 0) ? 11 : dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado !== parseInt(dv,10)){ 
        return "Rut no válido"; 
    }
    return ""
  }

export const checkEmail = (email) =>{
    const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(email.length > 0){
        if(!regEmail.test(email)){
            return 'Correo electrónico no válido'
        }else{
            return ''
        }
    }else{
        return 'Por favor, ingrese su correo electrónico'
    }
  }

export const checkCellphone = (cell) =>{
    const regCell = new RegExp('^[0-9]+$');
    if(cell.length === 0){
        return 'Por favor, ingrese su número de celular'
    }else if(!regCell.test(cell)){
        return 'Por favor, ingrese solo números'
    }else if(cell.length === 8 && regCell.test(cell)){
        return ''
    }else if(cell.length < 8 && regCell.test(cell)){
        return 'Ingrese los 8 números de su celular sin anteponer el 9'
    }else if(cell.length > 8 ){
        return 'Ingrese un número de celular válido'
    }
}

export const checkBornDate = (borndate) =>{
    let bornDate = new Date(borndate)
    let dateNow = new Date()

    let day = dateNow.getDate() - bornDate.getDate()
    let month = (dateNow.getMonth() + 1) - (bornDate.getMonth() + 1)
    let year = dateNow.getFullYear() - bornDate.getFullYear()

    if(borndate.length === 0){
        return 'Por favor, ingrese su fecha de nacimiento'
    }
    else if(borndate.length !== '' && year > 18){
        return ''
    }
    else if(borndate.length !== '' && year < 18){
        return 'Para poder registrarse debe ser mayor de edad'
    }
    else if(borndate.length !== '' && year <= 18 && month < 0){
        return 'Para poder registrarse debe ser mayor de edad'
    }
    else if(borndate.length !== '' && year <= 18 && month <= 0 && day < 0){
        return 'Para poder registrarse debe ser mayor de edad'
    }
    else if(borndate.length !== '' && year >= 18 && month >= 0 && day >= 0){
        return ''
    }
    else if(borndate.length !== '' && year >= 18 && month >= 0){
        return ''
    }
}
