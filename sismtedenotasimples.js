/*
    Um simples sistemas de notas de uma instituição onde todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados e, as notas possuem a seguinte regra de arredondamento: se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento.

    by Guilherme Zalla
 */

(function() {
    const notas = nota => {
        let i = 0,
            aux = nota;
        if (nota >= 38 && nota < 40) {
            while (i < 3) {
                nota++;
                if (nota % 5 === 0) {
                    console.log(`Nota arrendodada para ${nota}`)
                }
                i++;
            }
        } else if (nota >= 40) {
            while (i < 3) {
                nota++;
                if (nota % 5 === 0) {
                    console.log(`Nota arrendodada para ${nota}`)
                }
                i++;
            }
            if (nota % 5 !== 0) {
                console.log(`Nota maior que 40 e sem mútiplo de 5, não precisou ser arredondada: ${aux}`);
            }
        } else if (nota < 38 && nota < 40) {
            console.log(`Nota não foi arredondada por ser menor que 38 e/ou 40: ${nota}`)
        }
    }
    notas(41);
    notas(38);
    notas(35);
    notas(42);
})()