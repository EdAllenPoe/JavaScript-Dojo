var names=["Eric","James","John","Tom","Bob"];

function fancystring(fancy,names,truth) {

  for (var i=0; i < names.length; i++){

    if (truth=false){console.log(i+fancy+names[i]) }

    else {console.log(names[i]+fancy+i) }
  }
}

fancystring("->",names,true)
