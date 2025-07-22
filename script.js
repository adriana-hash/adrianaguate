function conversiones() {
    let piesInput = document.getElementById("pies").value;
    let metrosInput = document.getElementById("metros").value;

    let cantidadPies = parseFloat(piesInput) || 0;
    let cantidadMetros = parseFloat(metrosInput) || 0;

    const METROS_POR_MILLA = 1609;
    const METROS_POR_PULGADA = 0.0254;
    const PIES_POR_YARDA = 3;
    const PULGADAS_POR_PIE = 12;

    const METROS_POR_PIE = PULGADAS_POR_PIE * METROS_POR_PULGADA;

    let totalMetros = cantidadMetros + (cantidadPies * METROS_POR_PIE);

    let totalPulgadas = totalMetros / METROS_POR_PULGADA;
    let totalYardas = totalMetros / METROS_POR_PIE / PIES_POR_YARDA;
    let totalMillas = totalMetros / METROS_POR_MILLA;

    document.getElementById("resultadoPulgadas").value = totalPulgadas.toFixed(4);
    document.getElementById("resultadoYardas").value = totalYardas.toFixed(4);
    document.getElementById("resultadoMetros").value = totalMetros.toFixed(4);
    document.getElementById("resultadoMillas").value = totalMillas.toFixed(6);
}