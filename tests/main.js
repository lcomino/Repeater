window.onload = function(){

  var data = [{
    "nome" : "Lucas",
    "sobrenome" : "Comino",
    "telefone" : "+55 44 9999-9999"
    },
    {
      "nome" : "João",
      "sobrenome" : "Silva",
      "telefone" : "+55 44 8888-9999"
  }];

  Repeater.init('.repeater', data);

};
