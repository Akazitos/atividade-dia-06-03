

function desempenho (nota,nome,uc){
    
    if ( nota<=6){ 
        console.log ("o aluno ", nome , " esta com um pesimo desempenho na materia de ",uc)
    }else if ( nota>=7){
        console.log ("o aluno ", nome ," esta com um bom desempenho na materia de ",uc)
    }else if ( nota>=8){
        console.log ("o aluno ", nome ," um otimo desempenho na materia de ",uc)
    }
}
desempenho(10,"douglas","Matematica")