class UE{

    constructor(nacionalidad, genero, moneda, trabajo, vivo){
        this.nacionalidad = nacionalidad
        this.genero = genero
        this.trabajo = trabajo
        this.vivo = vivo
    }

    changeGenero(genero){
        this.genero = genero
    }

    changeTrabajo(trabajo){
        this.trabajo = trabajo
    }

    estaVivo(vivo){
        this.vivo = vivo
    }

}

class AM extends UE{

    constructor(nacionalidad, genero, moneda, trabajo, vivo, inflacion){
        super(nacionalidad, genero, moneda, trabajo, vivo)
        this.inflacion = inflacion
    }

    changeMoneda(moneda){
        this.moneda = moneda
    }

    changeInflacion(inflacion){
        this.inflacion = inflacion
    }

}