window.onload = function(){

  var dados = [{
      nome: 'Lucas Comino',
      github : {
        usuario: 'lcomino',
        url : 'https://github.com/lcomino'
      }
    },
    {
      nome: 'João da Silva',
      github : {
        usuario: 'joao.silva',
        url : 'https://github.com/joao.silva'
      }
    }
  ];

  Repeater.init('.repeater', dados);

};
