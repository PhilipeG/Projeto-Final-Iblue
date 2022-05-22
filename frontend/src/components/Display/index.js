import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import api from '../../services/api'

import './styles.css'

function Display(props) {
    
    const [flag, setFlag] = useState(false);
    const {valorRenderizado, setvalorRenderizado, valor1, setvalor1, valor2, setvalor2, operacao, setOperacao} = props;

    function limparTudo(){
        setvalorRenderizado("");
        setvalor1("");
        setvalor2("");
        setOperacao("");
        setFlag(false)
    }

    function verificaOperacoesInclusas(){
        const operacoes = ["+","-", "*", "/"];
        return operacoes.some(operacao => valorRenderizado.includes(operacao))
    }

    function calcular(valor1, valor2, operacao, proximaOperacao){
        const operacoes = {
            "+":"/soma",
            "-":"/subtracao",
            "*":"/multiplicacao",
            "/":"/divisao",
            "=":"igual",
            "√":"raizQuadrada",
            "%":"porcentagem"
        }

        let params;
        if(operacao === "√" || operacao === "%"){
            params = {
                valor1: parseFloat(valor1)
            }
        }

        else{
            params = {
                valor1: parseFloat(valor1),
                valor2: parseFloat(valor2)
            }
        }

        try{
            api.post(operacoes[operacao], params).then(response =>{
                if(response.data || response.data === 0){
                    setvalorRenderizado(response.data.toString() + proximaOperacao)
                    setvalor1(response.data.toString())
                    setvalor2("")
                }
    
                else{
                    limparTudo()
                }
            })
        }

        catch(error){
            alert("Ocorreu um erro: " + error)
        }
    }

    function digita(event){
        if(flag){
            setvalor2(valor2 + event.target.innerText)
        }

        else{
            setvalor1(valor1 + event.target.innerText)
        }
        
        setvalorRenderizado(valorRenderizado + event.target.innerText);
    }

    async function adicionaOperacao(event){
        setvalorRenderizado(valorRenderizado + event.target.innerText)

        if(event.target.innerText === "-"){
            if(!valor1){
                setvalor1(event.target.innerText);
            }
            else if(operacao && !valor2){
                setvalor2(event.target.innerText)
            }

            else{
                setOperacao(event.target.innerText);
                setFlag(true)
            }
        }

        else{
            if(verificaOperacoesInclusas && !valor2){
                setvalorRenderizado(valor1 + event.target.innerText)
            }

            else{
                setvalorRenderizado(valorRenderizado + event.target.innerText)
            }

            setOperacao(event.target.innerText);

            if(valor1){
                setFlag(true);
            }
        }

        if(valor1){
            if(!valor2){
                if(event.target.innerText === "%" || event.target.innerText === "√"){
                    if(isNaN(valor1)){
                        alert("Expressão mal formada")
                        limparTudo();
                    }

                    else{
                        calcular(valor1, "", event.target.innerText, "");
                    }
                }
            }

            else{
                if(isNaN(valor1) || isNaN(valor2)){
                    alert("Expressão mal formada")
                    limparTudo();
                }
    
                else{
                    calcular(valor1, valor2, operacao, event.target.innerText);
                }
            }
        }

    }

    function calcularResultado(){
        if(valor1 && valor2){
            if(isNaN(valor1) || isNaN(valor2)){
                alert("Expressão mal formada")
                limparTudo();
            }

            else{
                calcular(valor1, valor2, operacao, "");
                setFlag(false)
                setOperacao("");
            }
        }

        else{
            alert("Expressão mal formada")
            limparTudo();
        }
    }

    return (
        <Box className="display">
            <Grid container spacing={2} columns={4}>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={limparTudo}>C</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={adicionaOperacao}>√</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={adicionaOperacao}>%</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={adicionaOperacao}>/</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>7</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>8</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>9</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={adicionaOperacao}>*</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>4</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>5</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>6</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={adicionaOperacao}>-</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>1</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>2</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>3</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={adicionaOperacao}>+</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className="button" variant="contained" onClick={digita}>0</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button" variant="contained" onClick={digita}>.</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button className="button operacao" variant="contained" onClick={calcularResultado}>=</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Display;