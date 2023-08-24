
fetch('componentes/footer.html')
.then(response => response.text())
.then(menuHTMLw => {
  document.getElementById('footer-container').innerHTML = menuHTMLw;
});


fetch('componentes/menu.html')
  .then(response => response.text())
  .then(menuHTML => {
    document.getElementById('menu-container').innerHTML = menuHTML;
  });






 let docentes= [
    { id:1,
      nombre:"MARIN BURBANO MERCEDES MARINA",
      Url:"P1.png",
    },
    { id:2,
      nombre:"HERNANDEZ OBANDO FANNY CECILIA",
      Url:"P2.png",
    },
    { id:3,
      nombre:"BAZANTES BALAREZO JESSICA SOLEDAD",
      Url:"P3.png",
    },
    { id:4,
      nombre:"CHICAIZA CARDENAS REYNA AMERICA",
      Url:"P4.png",
    },
    { id:5,
      nombre:"SANCHEZ LEIVA TANIA DOLORES",
      Url:"P5.png",
    },
    { id:6,
      nombre:"IBARRA MOREIRA VIVIANA MERCEDES",
      Url:"P6.png",
    },
    { id:7,
      nombre:"MUÑOZ BERMÚDEZ JIMMY ADRIÁN",
      Url:"P7.png",
    },
    { id:8,
      nombre:"CARLOS WILSON MINAYA ROMERO",
      Url:"P8.png",
    },
  
    { id:9,
      nombre:"BENAVIDES MALIZA HILDA EULOGIA",
      Url:"P9.png",
    },
    { id:10,
      nombre:"FERNANDEZ SUQUI EUSTHELA DE JESUS",
      Url:"P10.png",
    },
    { id:11,
      nombre:"SÁNCHEZ MALDONADO ANDREA CAROLINA",
      Url:"P11.png",
    },
    { id:12,
      nombre:"POROZO DURÁN JESSICA MARIBEL",
      Url:"P12.png",
    },
  
  ]
  
  
  generarImgDocentes(docentes);
  function generarImgDocentes(docentes)
  {
    for(let i=0; i<docentes.length;i++)
    {
      var url=docentes[i].Url
      var html= '<div class="card m-"> ' +
      '<img src="img/Docentes/infDocente/'+url+'" class="card-img-top" alt="..."> ' +
     '<div class="card-body"> ' +
        '<h5 class="card-title"> '+docentes[i].nombre+' </h5> ' +
      '</div>' +
    '</div>';
    document.getElementById('card-columns-docentes').innerHTML += html;
  }
    }
  
 