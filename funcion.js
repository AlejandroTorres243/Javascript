var coche = {
    marca: "Mercedez-Benz",
    tipo: "Deportivo",
    escapotable: true,
    color: "White",
    modelo: "SUV",
    year: 2019,
    motor: "sincronico",
    show(){
        var caja = document.getElementById("idJS")
        caja.innerHTML += `
            <p>Marca de Carro</p>
            <ul>
                <li>${this.marca}</li>
                <li>${this.tipo}</li>
                <li>${this.color}</li>
                <li>${this.modelo}</li>
                <li>${this.year}</li>
                <li>${this.motor}</li>
            </ul>
        `
    },
    changeMotor(tipo){
        this.motor = tipo
        return this.motor
    }
}

coche.show()

document.getElementById("idJS").innerHTML += `<p> ${coche.changeMotor("automatico")} </p>` 

coche.show()