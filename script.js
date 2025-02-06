function calcularICMSFrete() {
    let valorFrete = parseFloat(document.getElementById("valorFrete").value);
    let valoricmsdestaque = parseFloat(document.getElementById("icmsdestacado").value)
    let aliquotaInterna = parseFloat(document.getElementById("aliquotaInternaFrete").value) ;
    let aliquotaInterestadual = parseFloat(document.getElementById("aliquotaInterestadualFrete").value) ;

    if (isNaN(valorFrete) || isNaN(aliquotaInterna) || isNaN(aliquotaInterestadual) || isNaN(valoricmsdestaque)) {
        document.getElementById("resultadoFrete").innerText = "Preencha todos os campos corretamente!";
        return;
    }

    let valorfretecalc = valorFrete - valoricmsdestaque;
    conversao = (100-20.5)/100
    novofrete = valorfretecalc/conversao

    let icms_interno_externo = aliquotaInterna - aliquotaInterestadual
    total = novofrete*icms_interno_externo
    icmsComplementarFrete = total/100

    document.getElementById("resultadoFrete").innerText = `ICMS Complementar sobre Frete: R$ ${icmsComplementarFrete.toFixed(2)}`;
    
}
