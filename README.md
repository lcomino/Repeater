RepeaterJs
========

Repita listas, rows, divs, links, imagens.

## Instalando com Bower

```
bower install RepeaterJs
```
## Adicionando no html

```
<table class="table table-hover">
    <thead>
      <tr>
        <th>
          Nome
        </th>
        <th>
          Github
        </th>

      </tr>
    </thead>
    <tbody>
      <tr class="repeater">
        <td>
          {{nome}}
        </td>
        <td>
          <a href="{{github.url}}">{{github.usuario}}</a>
        </td>
      </tr>
    </tbody>
</table>

<script src="bower_components/RepeaterJs/repeater.js"></script>
```

## Utilizando

```
<script>
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
</script>
```

_Simples, sua table estará preenchida!_

Fique a vontate para contribuir com o projeto.
