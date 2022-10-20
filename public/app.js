function Guardar(event) {
    event.preventDefault()
    if (!$('#txt-personaje').val() || !$('#txt-rango').val() || !$('#txt-color-pelo').val()
        || !$('#txt-arma').val() || !$('#txt-tipo-arma').val()) {
            alert('Todos los valores son obligatorios.');
            $(".form-control").addClass("is-invalid");  
    } else {
        $(".form-control").removeClass("is-invalid"); 
        alert('Se guardo correctamente.');
        $('.form-control').val('')
    }
}