function exe1() {
    let vet = []
    let vet2 = []
    let vet3 = []
    let soma = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    for(c=0; c <= 5; c++){
        vet[c] = Number(prompt(`Digite o valor ${c+1}`))
        if (vet[c] % 2 == 0){
            vet2[c] = vet[c]
            soma += 1
            soma2 += vet[c]
        }
        else {
            vet3[c] = vet[c]
            soma3 +=1
            soma4 += vet[c]
        }
    }
    alert("Números pares digitados: " + vet2)
    alert('Quantidade de números pares' + Number(soma))
    alert('Soma dos números pares digitados: ' + soma2)
    alert('Números impares digitados: ' + vet3)
    alert('Quantidade de números impares digitados: ' + soma3)
    alert('Soma dos números impares digitados: ' + soma4)
}
function exe2() {
    let vet = []
    let vet2 = []
    let vet3 = []
    for (c=0; c <= 6; c++){
        vet[c] = Number(prompt(`Digite o valor ${c+1}`))
        if (vet[c] % 2 == 0){
            vet2[c] = vet[c]
        }
        if (vet[c] % 3 == 0){
            vet3[c] = vet[c]
        }
    }
    alert('Números múltiplos de 2: ' + vet2)
    alert('Números múltiplos de 3: ' + vet3)
    alert('Números múltiplos de 2 e de 3: ' + vet2 + vet3)
}
function exe3(){
    // entrada de dados
    let codigos = []
    let estoque = []
    for(let i=0; i < 3;i++){
        codigos.push(prompt(`Informe o código do produto ${i+1}`))
        estoque.push(Number(prompt(`Informe a qtde do produto ${i+1}`)))
    }
    do {
        let codigo = prompt(`Informe código do produto para compra`)
        // percorrer o vetor codigos para ver se existe
        for(let i=0;i<3;i++){
            if (codigo == codigos[i]){
                // achou o produto
                let qtde = Number(prompt(`Informe qtde da compra`))
                if (qtde == estoque[i]){
                    // qtde suficiente
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert(`Estoque insuficiente`)
                }
                break // sai do for sem incrementar o i - já encontrou o produto
            }
        }
    }
    while(cliente != 0)
}
function exe4() {
    let vetor = []
    let cont = 0
    for(let i=0; i < 3; i++){
        vetor.push(prompt(`Digite o elemento ${i+1}`))
        if (vetor[i] == 30){
            cont = cont + i
        }
    }
    if (cont != 0){
        alert('Número 30 achado na posição ' + cont)
    }
    else if (cont == 0){
        alert('Nenhum número 30 encontrado !')
    }

}
function exe5() {
    let vet = []
    let vet2 = []
    for (c=0; c < 3; c++){
        vet.push(prompt(`Digite a matrícula ${c+1}`))
    }
    for (c=0; c < 4; c++){
        vet2.push(prompt(`Digite a matrícula ${c+1}`))
    }
    alert('Números de matrículas no vetor 1 : ' + vet)
    alert('Números de matriculas no vetor 2: ' + vet2)
}
function exe6() {
    let nome = []
    let vendas = []
    let comissao = []
    let soma = 0
    let maior = 0
    let nome2
    let nome3
    let menor = 99999999
    for (let c = 0; c < 2; c++){
        nome = prompt('Digite o seu nome')
        vendas = Number(prompt(`Digite o total de vendas que ${nome} realizou ! `))
        comissao = Number(prompt(`Digite a porcentagem de comissao de ${nome} `))
        let salario = (vendas / 100 * comissao)
        alert(`${nome} recebeu de comissao: ${salario}`)
        soma = soma + vendas
        if (salario > maior){
            maior = salario
            nome2 = nome
        }
        if (salario < menor) {
            menor = salario
            nome3 = nome
        }
    }
    alert('Total das vendas de todos os vendedores: ' + soma)
    alert('O maior valor adquirido de comissão: ' + maior + ' Foi pela pessoa: ' + nome2)
    alert('O menor valor adquirido de comissão:' + menor + ' Foi pela pessoa: ' + nome3)

}
function exe7() {
    let numero
    let cont = 0
    let soma = 0
    for (let c = 1; c < 5 ; c++){
        numero = Number(prompt(`Digite o número ${c}`))
        if (numero < 0 ){
            cont = cont + 1
        }
        if (numero > 0){
            soma = soma + numero
        }
    }
    alert(`Quantidade de números negativos: ${cont}`)
    alert(`Soma dos números positivos: ${soma}`)

}
function exe8() {
    let vet = []
    let vet2 = []
    let maior = 0
    let aluno
    for (let c=1; c < 5; c++){
        vet = prompt(`Digite o nome do aluno ${c}`)
        vet2 = Number(prompt(`Digite a média do aluno ${c}`))
        if (vet2 > maior){
            maior = vet2
            aluno = vet
        }
        if (vet2 < 7){
            alert(`Aluno ${vet} reprovado por Nota ! Você precisa tirar no mínimo 5 para ser aprovado !`)
        }
    }
    alert(' Nome do aluno com maior média ' + aluno + ' que tirou a média: ' + maior)
}
function exe9() {
    let vet1 = []
    let vet2 = []
    let vet3 = []
    let aumento
    for (let c=1; c < 4; c++){
        vet1 = prompt(`Digite o nome do produto: ${c}:`)
        vet2 = Number(prompt(`Digite o cod do produto: ${c}`))
        vet3 = Number(prompt(`Digite o preço do produto ${c}`))
        if (vet2 % 2 == 0 && vet3 > 1000){
            aumento = (vet3 / 100 * 20)
        }
        if (vet2 % 2 == 0){
            aumento = (vet3 / 100 * 15)
        }
        if (vet3 > 1000){
            aumento = (vet3 / 100 * 10)
        }
        let novosalario = (aumento + vet3)
        alert(`Nome do produto: ${vet1} , Cod do produto: ${vet2}, Preço do produto: ${vet3}, Novo valor com o aumento: ${novosalario}`)
    }
}
function exe10() {
    let vet1 = []
    let vet2 = []
    let vet3 = []
    let soma = 0
    let soma2 = 0
    let soma3
    let soma4 = 0
    for (let c = 1; c<4 ; c++){
        vet1 = Number(prompt(`Digite o número da posição ${c}`))
        if (vet1 % 2 == 0){
            soma = soma + vet1
        }
        if (vet1 % 3 == 0){
            vet3 = vet1
        }
    }
    for (let c = 1; c<4 ; c++){
        vet2 = Number(prompt(`Digite o número da posição ${c}`))
        soma2 = soma2 + vet2
        if (vet3 == vet2){
            soma4 = soma4 + 1
        }
    }
    soma3 = (soma2 + soma)
    alert('Quantidade de números digitados no vet1: ' + vet1)
    alert('Quantidade de números digitados no vet2: ' + vet2)
    alert('Soma de cada número par digitado no primeiro vetor + Soma de todos os números do vetor 2: ' + soma3)
    alert('Quantidade de divisores impares do primeiro vetor que também tem no segundo vetor : ' + soma4) 
}
function exe11() {
    let vet = []
    let vetpar = []
    let vetimpar = []
    for (let c=1; c < 5; c++){
        vet = Number(prompt(`Digite o número ${c}`))
        if (vet % 2 == 0){
            vetpar.push(vet)
        }
        else {
            vetimpar.push(vet)
        }
    }
    alert('Vetor resultante dos números pares: ' + vetpar)
    alert('Vetor resultante dos números impares: ' + vetimpar)
}
function exe12() {
    let vet = []
    let vet2 = []
    let soma = 0
    for (let c=1; c <6 ; c++){
        vet = (Number(prompt(`Digite o número ${c}`)))
        vet2.push(vet)
        soma = soma + vet
    }
    alert(`Números digitados foram: ${vet2} = ${soma}`)
}
function exe13() {
    let vet = []
    let vet2 = []
    let nome = []
    let nome2 = []
    let soma = 0
    for (let c=0; c <4; c++){
        nome = prompt(`Digite o nome do do aluno : ${c+1}`)
        nome2.push(nome)
        vet = Number(prompt(`Digite a nota do aluno ${nome}`))
        vet2.push(vet)
        soma = soma + vet
    }
    for (let i=0; i < 4; i++){
        alert(' nome: ' + nome2[i] + ' nota: ' + vet2[i])
    }
    let media = soma / 4
    alert(' Média da sala: ' + media)
}
function exe14() {
    let nome = []
    let vet = []
    let vet2 = []
    let soma = 0
    let cont = 0
    let cont3 = 0
    let cont2 = 0
    for (let c=0; c<4; c++){
        nome = prompt(`Digite o nome do do aluno : ${c+1}`)
        vet = Number(prompt(`Digite a nota 1 do aluno ${nome}`))
        vet2 = Number(prompt(`Digite a nota 2 do aluno ${nome}`))
        soma = (soma + vet + vet2)
        let media = (vet + vet2) / 2
        if (media >= 7){
            alert(`${nome} Prova 1 : ${vet} Prova 2 : ${vet2} Média : ${media} Situação Aprovado ! `)
            cont2 = cont2 + 1
        }
        if (media >= 5 && media < 7 ){
            alert(`${nome} Prova 1 : ${vet} Prova 2 : ${vet2} Média : ${media} Situação Em teste ! `)
            cont3 = cont3 + 1
        }
        else if (media < 5) {
            alert(`${nome} Prova 1 : ${vet} Prova 2 : ${vet2} Média : ${media} Situação Reprovado ! `)
            cont = cont + 1
        }
    }
    let percentual = 100 / 4 * cont
    let percentual2 = 100 / 4 * cont2
    let percentual3 = 100 / 4 * cont3
    let media2 = soma / 8 
    alert('Média da sala: ' + media2)
    alert('Percentual de alunos reprovados : ' + percentual)
    alert('Percentual de alunos aprovados : ' + percentual2)
    alert('Percentual de alunos em teste : ' + percentual3)
  
}


