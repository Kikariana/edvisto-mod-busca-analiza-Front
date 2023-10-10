    const $tarjeta1 = document.getElementById('tarjeta1')
    const $tarjeta2 = document.getElementById('tarjeta2')
    const $tarjeta3 = document.getElementById('tarjeta3')
    const $modulo = document.getElementById('modulo')
    const $botonesmodulo = document.getElementById('botonesmodulo')
    const $botonbuscar = document.getElementById('botonbuscar') 
    const $bienvenida =document.getElementById ('bienvenida')
    const $logo =document.getElementById ('logo')
    
   
      
        let botonClickeado = false; 
              
        $botonbuscar.addEventListener('click', function(){
            botonClickeado = true; 
            if(botonClickeado) {
                $bienvenida.hidden = true; 
                $logo.hidden = true; 
                $tarjeta1.hidden = true;
                $tarjeta2.hidden = true;
                $tarjeta3.hidden = true;
                $botonesmodulo.innerHTML= `<section id="botonesmodulo">
                <div class="botonesmodulo" >
                    <button class="button" id="search" aria-label="Botón de Búsqueda" >Búsqueda</button>
                    <button class="button" id="save" aria-label="Botón de Guardados" >Guardados</button>
                    <button class="button" id="analysis" aria-label="Botón de Análisis" >Análisis</button>
                </div>
            </section>`
    
            }
    
            
            console.log('Le diste click al botón buscar')
                    
    });

    
    
  



   