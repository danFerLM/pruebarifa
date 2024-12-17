document.addEventListener('DOMContentLoaded', () => {
    alert('Gracias por visitar nuestra página. Tu ayuda es importante.');
});
// Simulación de asignación de número
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Generar número aleatorio entre 1 y 1000
    const assignedNumber = Math.floor(Math.random() * 1000) + 1;

    // Mostrar mensaje de confirmación
    document.getElementById("confirmationMessage").innerText = 
        `¡Gracias ${name}! Tu número de rifa es: ${assignedNumber}. Te contactaremos al ${phone}.`;
});
