<<<<<<< HEAD
    const tarjeta1 = document.getElementById('tarjeta1')
    const tarjeta2 = document.getElementById('tarjeta2')
    const tarjeta3 = document.getElementById('tarjeta3')
    const modulo = document.getElementById('modulo')
    const botonesmodulo = document.getElementById('botonesmodulo')
    const botonbuscar = document.getElementById('botonbuscar') 
    const bienvenida =document.getElementById ('bienvenida')
    const logo =document.getElementById ('logo')
    const botonguardar = document.getElementById('botonguardar')
    const botonanalisis = document.getElementById('botonanalisis')
    const seccionbiblioteca = document.getElementById('seccionbiblioteca')
    
    
    function setearActivoAlHacerClic (elementoABuscar, idElemento){
        elementoABuscar.addEventListener('click', function(){
            console.log('hago clic en mi función')
            botonClickeado = true; 
            if(botonClickeado) {
                bienvenida.hidden = true; 
                logo.hidden = true; 
                tarjeta1.hidden = true;
                tarjeta2.hidden = true;
                tarjeta3.hidden = true;
                botonesmodulo.innerHTML= `<section id="botonesmodulo">
                <div class="botonesmodulo" id="botonesmodulo">
                <div class="buttonssa">
                <button class="button" id="search" aria-label="Botón de Búsqueda" >Buscar</button>
                </div>
                <div class="buttonssa" id="buttonlibrary">
                <button class="button" id="save" aria-label="Botón de Biblioteca" >Biblioteca</button>
                </div>
                <div class="buttonssa">
                <button class="button" id="analysis" aria-label="Botón de Análisis" >Camino al aprendizaje</button>
                </div>
                </div>
                </section>`;
                // seccionbiblioteca.hidden=true;
                
                const buttons = document.querySelectorAll('.button')
                const elementoASeleccionar = document.getElementById(idElemento)
                 
                elementoASeleccionar.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
            
                console.log('Le diste click al botón '+ idElemento)
            });

            const searchbutton = document.getElementById('search')
    
                        searchbutton.addEventListener('click', function(){
                            buttons.forEach((btn) => {
                                btn.classList.remove('activo');
                            });
                            this.classList.add('activo');
                            // seccionbiblioteca.hidden=true;
                
                            console.log('Le diste click al botón buscar')
                        });
             
            const savebutton = document.getElementById('save');

            savebutton.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
            //     seccionbiblioteca.innerHTML= `<section id="seccionbiblioteca">
            //     <div class="bannerseccionbiblioteca">
            //         <div class="bienvenida" id="bienvenida">
            //             <img id="saves" src="./images/save.svg" alt="">
            //             <h3>Bienvenido a tu Biblioteca de Exploración</h3>
            //             <p>Aqui podras encontrar y compartir la información que guardaste para crear tus proyectos</p>
            //         </div>
            //         <img id="logo" src="images/perrito_profesor.svg" alt="Avatar EdVisto" width="242px" height="367px">
            //     </div>
            // </section>`
            // seccionbiblioteca.hidden=false;
                
                console.log('Le diste click al botón biblioteca')
            });
            
            const analysisbutton = document.getElementById('analysis');

            analysisbutton.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
                // seccionbiblioteca.hidden=true;
                
                console.log('Le diste click al botón análisis')
            });
            elementoASeleccionar.click();
            
            }  
           
            
        console.log('Le diste click al botón buscar')
                    
    });
    }
        let botonClickeado = false; 
        setearActivoAlHacerClic(botonbuscar, "search")
        setearActivoAlHacerClic(botonguardar, "save")
        setearActivoAlHacerClic(botonanalisis,"analysis")
=======
    const tarjeta1 = document.getElementById('tarjeta1')
    const tarjeta2 = document.getElementById('tarjeta2')
    const tarjeta3 = document.getElementById('tarjeta3')
    const modulo = document.getElementById('modulo')
    const botonesmodulo = document.getElementById('botonesmodulo')
    const botonbuscar = document.getElementById('botonbuscar') 
    const bienvenida =document.getElementById ('bienvenida')
    const logo =document.getElementById ('logo')
    const botonguardar = document.getElementById('botonguardar')
    const botonanalisis = document.getElementById('botonanalisis')
    
    
    function setearActivoAlHacerClic (elementoABuscar, idElemento){
        elementoABuscar.addEventListener('click', function(){
            console.log('hago clic en mi función')
            botonClickeado = true; 
            if(botonClickeado) {
                bienvenida.hidden = true; 
                logo.hidden = true; 
                tarjeta1.hidden = true;
                tarjeta2.hidden = true;
                tarjeta3.hidden = true;
                botonesmodulo.innerHTML= `<section id="botonesmodulo">
                <div class="botonesmodulo" id="botonesmodulo">
                <div class="buttonssa">
                <button class="button" id="search" aria-label="Botón de Búsqueda" >Búsqueda</button>
                </div>
                <div class="buttonssa" id="buttonlibrary">
                <button class="button" id="save" aria-label="Botón de Biblioteca" >Biblioteca</button>
                </div>
                <div class="buttonssa">
                <button class="button" id="analysis" aria-label="Botón de Análisis" >Análisis</button>
                </div>
                </div>
                </section>`;
                
                const buttons = document.querySelectorAll('.button')
                const elementoASeleccionar = document.getElementById(idElemento)
                 
                elementoASeleccionar.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');
            
                console.log('Le diste click al botón '+ idElemento)
            });

            const searchbutton = document.getElementById('search')
    
                        searchbutton.addEventListener('click', function(){
                            buttons.forEach((btn) => {
                                btn.classList.remove('activo');
                            });
                            this.classList.add('activo');
            
                            console.log('Le diste click al botón buscar')
                        });
             
            const savebutton = document.getElementById('save');

            savebutton.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');

                console.log('Le diste click al botón biblioteca')
            });
            
            const analysisbutton = document.getElementById('analysis');

            analysisbutton.addEventListener('click', function(){
                buttons.forEach((btn) => {
                    btn.classList.remove('activo');
                });
                this.classList.add('activo');

                console.log('Le diste click al botón análisis')
            });
            elementoASeleccionar.click();
            
            }  
           
            
        console.log('Le diste click al botón buscar')
                    
    });
    }
        let botonClickeado = false; 
        setearActivoAlHacerClic(botonbuscar, "search")
        setearActivoAlHacerClic(botonguardar, "save")
        setearActivoAlHacerClic(botonanalisis,"analysis")
>>>>>>> f4830b6d495de3423a787f43c4379026a9d88a8c
     