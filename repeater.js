(function(){
  var Repeater = {};

  var options = {
    repeaterIdentifier : '.repeater',
    sourceIdentifier : 'data-remote-source',
    sourceMainObject : 'data-repeat',
    dataMainObject : ''
  };

  Repeater.middleware = '';

  var middleware = function(el){
    if(typeof Repeater.middleware === 'function'){
      Repeater.middleware(el);
    }
  };

  Repeater.init = function(obj, data){
    debugger;
    "use strict";

    var els = '';

    if(typeof obj === 'undefined')
      els = document.querySelectorAll(options.repeaterIdentifier);
    else
      els = document.querySelectorAll(obj);


    for(var i = 0; i < els.length; i++){
      var el = els[i].cloneNode(true);
      var p = els[i].parentNode;

      els[i].remove();

      options.dataMainObj = el.getAttribute(options.sourceMainObject);

      if(typeof data === 'undefined'){
        getRemoteData(p, el, el.getAttribute(options.sourceIdentifier));
        continue;
      }

      bind(p, el, data);
    }

  };

  function bind(p, el, data){
    if(options.dataMainObj !== undefined && options.dataMainObj !== null  && options.dataMainObj !== ''){
      data = data[options.dataMainObj];
    }

    el.removeAttribute(options.sourceIdentifier);
    if(typeof options.dataMainObj !== 'undefined')
      el.removeAttribute(options.sourceMainObject);

    if(options)

    var result = el.outerHTML.bind(data, null, middleware);

    p.innerHTML = result;

    el.remove();
  }

  function getRemoteData(p, el, url){

    var data = '';

    var req = new XMLHttpRequest();

    req.open('GET', url);

    req.addEventListener("progress", function(){
       p.innerHTML = 'Coletando dados...aguarde!';
    }, false);

    req.onload = function(){
      data = JSON.parse(this.responseText);
      bind(p, el, data);
    };

    req.send();
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = objectjs;
  else window.Repeater = Repeater;
})();
