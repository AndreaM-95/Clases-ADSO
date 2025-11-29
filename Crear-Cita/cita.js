// Datos locales de pacientes y doctores
const pacientes = [
    { nombre: "Ana López", edad: 30, telefono: "3001234567", correo: "ana@mail.com" },
    { nombre: "Juan Pérez", edad: 45, telefono: "3019876543", correo: "juan@mail.com" },
    { nombre: "María García", edad: 28, telefono: "3025556677", correo: "maria@mail.com" }
];

const doctores = [
    { nombre: "Dra. Torres", edad: 40, especialidad: "Cardiología" },
    { nombre: "Dr. Gómez", edad: 50, especialidad: "Medicina General" },
    { nombre: "Dra. Rivas", edad: 37, especialidad: "Pediatría" }
];

// Cargar listas en los select
const pacienteSelect = document.getElementById("paciente");
const doctorSelect = document.getElementById("doctor");

pacientes.forEach((usuario, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = usuario.nombre;
    pacienteSelect.appendChild(option);
});

doctores.forEach((profesional, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = profesional.nombre;
    doctorSelect.appendChild(option);
});

// Crear cita
document.getElementById("crearCita").addEventListener("click", () => {
    const pacienteIndex = pacienteSelect.value;
    const doctorIndex = doctorSelect.value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!fecha || !hora) {
        alert("Debe llenar todos los campos.");
        return;
    }

    const cita = {
        paciente: pacientes[pacienteIndex],
        doctor: doctores[doctorIndex],
        fecha,
        hora
    };

    console.log("Cita creada:", cita);

    // Guardar en LocalStorage
    let citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    citasGuardadas.push(cita);
    localStorage.setItem("citas", JSON.stringify(citasGuardadas));

    // Mensaje temporal
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";
    setTimeout(() => mensaje.style.display = "none", 2000);

    // Limpiar formulario
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    pacienteSelect.selectedIndex = 0;
    doctorSelect.selectedIndex = 0;
});