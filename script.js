function atualizarRegiao() {
    const regioes = {
        AC: "Norte", AP: "Norte", AM: "Norte", PA: "Norte", RO: "Norte", RR: "Norte", TO: "Norte",
        AL: "Nordeste", BA: "Nordeste", CE: "Nordeste", MA: "Nordeste", PB: "Nordeste", PE: "Nordeste",
        PI: "Nordeste", RN: "Nordeste", SE: "Nordeste",
        DF: "Centro-Oeste", GO: "Centro-Oeste", MT: "Centro-Oeste", MS: "Centro-Oeste",
        PR: "Sul", RS: "Sul", SC: "Sul",
        ES: "Sudeste", MG: "Sudeste", RJ: "Sudeste", SP: "Sudeste"
    };

    let estadoSelecionado = document.getElementById("opcao").value;
    let regiao = regioes[estadoSelecionado] || "Não definido";
    document.getElementById("regiao").value = regiao;
}

function calcularICMSFrete() {
    let valorFrete = parseFloat(document.getElementById("valorFrete").value);
    let valoricmsdestaque = parseFloat(document.getElementById("icmsdestacado").value);
    let estadoOrigem = document.getElementById("opcao").value;

    
    const aliquotasInternas = {
        PA: 20.00, DF: 20.00, RJ: 20.00, AM: 20.00, TO: 20.00, RR: 20.00,
        RO: 19.50, PE: 20.50, BA: 20.50, RN: 18.00, SP: 18.00, MG: 18.00
    };

    
    function getAliquotaInterestadual(estado) {
        const regiao = document.getElementById("regiao").value;
        return ["Norte", "Nordeste", "Centro-Oeste"].includes(regiao) || estado === "ES" ? 7 : 12;
    }

    
    let aliquotaInterna = aliquotasInternas[estadoOrigem] || 0;
    let aliquotaInterestadual = getAliquotaInterestadual(estadoOrigem);

    
    if (isNaN(valorFrete) || isNaN(valoricmsdestaque)) {
        document.getElementById("resultadoFrete").innerText = "Preencha todos os campos corretamente!";
        return;
    }

    
    let valorfretecalc = valorFrete - valoricmsdestaque;
    let conversao = (100 - aliquotaInterna) / 100;
    let novofrete = valorfretecalc / conversao;

    let icms_interno_externo = aliquotaInterna - aliquotaInterestadual;
    let total = novofrete * icms_interno_externo;
    let icmsComplementarFrete = total / 100;

    document.getElementById("resultadoFrete").innerText = `ICMS Complementar sobre Frete: R$ ${icmsComplementarFrete.toFixed(2)}`;
}
