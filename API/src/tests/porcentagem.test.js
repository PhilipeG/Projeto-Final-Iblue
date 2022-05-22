const supertest = require('supertest');

const request = supertest("http://localhost:3001/v1")

test('PORCENTAGEM: ', () => {
    return request.post("/porcentagem").send({valor1: "X"}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('PORCENTAGEM: ', () => {
    return request.post("/porcentagem").send({valor1: "10"}).then(res => { 
            expect(res.text).toEqual("Ocorreu um erro: Valor inválido informado")
            expect(res.statusCode).toEqual(400)
        }
    );
});

test('PORCENTAGEM: ', () => {
    return request.post("/porcentagem").send({valor1: 10}).then(res => { 
            expect(res.body).toEqual(0.1)
            expect(res.statusCode).toEqual(200)
        }
    );
});