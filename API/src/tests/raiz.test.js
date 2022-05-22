const supertest = require('supertest');

const request = supertest("http://localhost:3001/v1")

test('RAIZ QUADRADA: ', () => {
    return request.post("/raizQuadrada").send({valor1: "X"}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('RAIZ QUADRADA: ', () => {
    return request.post("/raizQuadrada").send({valor1: "9"}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('RAIZ QUADRADA: ', () => {
    return request.post("/raizQuadrada").send({valor1: 9}).then(res => { 
            expect(res.body).toEqual(3)
            expect(res.statusCode).toEqual(200)
        }
    );
});