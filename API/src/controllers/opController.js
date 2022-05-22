
module.exports = {
    soma(req, res) {
        const {valor1, valor2} = req.body;

        try{

            if(typeof(valor1) !== 'number' || typeof(valor2) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = valor1 + valor2;
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    },

    subtracao(req, res) {
        const {valor1, valor2} = req.body;

        try{
            if(typeof(valor1) !== 'number' || typeof(valor2) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = valor1 - valor2;
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    },

    multiplicacao(req, res) {
        const {valor1, valor2} = req.body;

        try{
            if(typeof(valor1) !== 'number' || typeof(valor2) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = valor1 * valor2;
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    },

    divisao(req, res) {
        const {valor1, valor2} = req.body;

        try{
            if(typeof(valor1) !== 'number' || typeof(valor2) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = valor1 / valor2;
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    },

    raizQuadrada(req, res) {
        const {valor1} = req.body;

        try{
            if(typeof(valor1) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = Math.sqrt(valor1);
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    },

    porcentagem(req, res) {
        const {valor1} = req.body;

        try{
            if(typeof(valor1) !== 'number'){
                throw "Valor inválido informado"
            }
            const resultado = valor1 / 100;
            return res.status(200).json(resultado);
        }

        catch(error){
            return res.status(400).send("Ocorreu um erro: " + error)
        }
    }
}