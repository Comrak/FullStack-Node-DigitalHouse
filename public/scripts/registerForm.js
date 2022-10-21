window.onload = ()=>{
    let name = document.getElementById('name')
    let lName = document.getElementById('lName')
    let userName = document.getElementById('userName')
    let perfil = document.getElementById('perfil')
    let intereses = document.getElementById('intereses')
    let pass = document.getElementById('pass')
    let passCormfirm = document.getElementById('passCormfirm')
    let submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener("click", (e)=>{
        let errorMsg = ''
        if(name.value === '' || name.value === undefined){
            errorMsg +=  'falta el nombre ' 
        }
        if(lName.value === '' || lName.value === undefined){
            errorMsg +=  'falta el apellido '
        }
        if(userName.value === '' || userName.value === undefined){
            errorMsg +=  'falta el usuario '
        }
        if(perfil.value === '' || perfil.value === undefined){
            errorMsg +=  'debes seleccionar un perfil (comprador o vendedor) '
        }
        if(intereses.value === '' || intereses.value === undefined){
            errorMsg +=  'debes seleccionar al menos un interes '
        }
        if(pass.value === '' || pass.value === undefined){
            errorMsg +=  'falta la contraseña '
        }
        if(passCormfirm.value === '' || passCormfirm.value === undefined){
            errorMsg +=  'falta la confirmacion de la contraseña '
        }
        if(pass.value != passCormfirm.value){
            errorMsg +=  'las contraseñas no son iguales '
        }
        if(errorMsg.length != 0){
            alert('no puedo procesar tu solicitud tenemos los siguientes errores: ' + errorMsg);
            e.preventDefault();
        }
    });

}