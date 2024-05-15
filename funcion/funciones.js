function ingresar() {
    let v_correo = document.getElementById("in_correo").value
    let v_password = document.getElementById("in_contraseña").value
    if ((v_correo == "admin") && (v_password == "123456")) {
        alert("Bienvenido");
        window.location.href = "./assets/index_edad.html"
    }
    else {
        alert("Usuario y/o contraseña incorrectos");
    }
}
function registrar() {
    window.location.href = "./assets/index_registro.html"
}
function generar_correo() {
    let v_nombre1 = document.getElementById("in_nombre1").value.trim();
    let v_nombre2 = document.getElementById("in_nombre2").value.trim();
    let v_apellido1 = document.getElementById("in_apellido1").value.trim();
    let v_apellido2 = document.getElementById("in_apellido2").value.trim();
    let v_fecha = new Date(document.getElementById("in_fecha").value);
    let v_ap1 = v_apellido1.split('')[0];
    let v_ap2 = v_apellido2.split('')[0];
    let mes_reg = String(v_fecha.getMonth() + 1).padStart(2, '0');
    let dia_reg = String(v_fecha.getDate()).padStart(2, '0');
    let anio_reg = String(v_fecha.getFullYear());
    let num_format = dia_reg + mes_reg + anio_reg;
    let v_correo_gen = v_nombre1.charAt(0) + v_nombre2.charAt(0) + v_ap1 + v_ap2 + num_format + "@gmail.com";

    if (!v_nombre1 ||!v_nombre2 ||!v_apellido1 ||!v_apellido2 || isNaN(v_fecha)) {
        alert("Por favor ingrese valores correctos en todos los campos");
        return;
    } else {
        document.getElementById("res_correo").innerHTML = v_correo_gen;
    }
}

function confirmar() {
    let v_nombre1 = document.getElementById("in_nombre1").value.trim();
    let v_nombre2 = document.getElementById("in_nombre2").value.trim();
    let v_apellido1 = document.getElementById("in_apellido1").value.trim();
    let v_apellido2 = document.getElementById("in_apellido2").value.trim();
    let v_fecha = new Date(document.getElementById("in_fecha").value);
    if (!v_nombre1 ||!v_nombre2 ||!v_apellido1 ||!v_apellido2 || isNaN(v_fecha)) {
        alert("Por favor ingrese valores correctos en todos los campos");
        return;
    } else {
        alert("Registro completado")
        window.location.href = "../assets/index_edad.html"
    }

}
function imc() {
    let peso_m = parseFloat(document.getElementById("in_peso").value)
    let altura_m = parseFloat(document.getElementById("in_altura").value)
    let imc_m = peso_m / (altura_m ** 2)
    if (imc_m < 18.5) {
        document.getElementById("res_imc").innerHTML = "El índice de masa corporal es de: " + imc_m.toFixed(2) + " y tiene un peso bajo"
    }
    else {
        if (imc_m < 24.9) {
            document.getElementById("res_imc").innerHTML = "El índice de masa corporal es de: " + imc_m.toFixed(2) + " y tiene un peso normal"
        }
        else {
            if (imc_m < 29.9) {
                document.getElementById("res_imc").innerHTML = "El índice de masa corporal es de: " + imc_m.toFixed(2) + " y tiene sobrepeso"
            }
            else {
                document.getElementById("res_imc").innerHTML = "El índice de masa corporal es de: " + imc_m.toFixed(2) + " y tiene mucho sobrepeso"
            }
        }
    }
}
function edad_f() {
    let v_mascota = (document.getElementById("in_mascota").value)
    let v_edad = parseInt(document.getElementById("in_edad").value)
    let edad_form = 16 * (Math.log(v_edad)) + 31
    if (isNaN(v_edad)) {
        alert("Por favor ingrese valores correctos en todos los campos");
        return;
    }
    else {
        document.getElementById("res_edad").innerHTML = "La edad de " + v_mascota + " según la fórmula es de: " + edad_form.toFixed(0) + " años"
    }
}
function edad_t() {
    let v_mascota = (document.getElementById("in_mascota").value)
    let v_edad = parseInt(document.getElementById("in_edad").value)
    let edad_tanteo = v_edad * 7
    if (isNaN(v_edad)) {
        alert("Por favor ingrese valores correctos en todos los campos");
        return;
    }
    else {
        document.getElementById("res_edad2").innerHTML = "La edad de " + v_mascota + " según el tanteo es de: " + edad_tanteo.toFixed(0) + " años"
    }
}
function monto_f() {
    let v_capital = parseInt(document.getElementById("in_monto").value)
    let v_interes = parseInt(document.getElementById("in_interes").value)
    let v_anios = parseInt(document.getElementById("in_anios").value)
    let monto_final = v_capital * (1 + (v_interes / 100)) ** v_anios
    if (isNaN(v_capital) || isNaN(v_interes) || isNaN(v_anios)) {
        alert("Por favor ingrese valores correctos en todos los campos");
        return;
    }
    else {
        document.getElementById("res_monto").innerHTML = "El monto final de su inversión es de: " + monto_final.toFixed(2) + " bolivianos"
    }
}