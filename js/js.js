    const seccionbiblioteca = document.getElementById('seccionbiblioteca');
    const savebutton = document.getElementById('save');
    const abrirPopUp = document.getElementById('CrearNewFolder');
    const cerrarPopUp = document.getElementById('CancelButton');
    const PopUp = document.getElementById('Form1');
    const formulario = document.querySelector('.Formulario');
    const abrirConfirmacionCarpeta = document.getElementById('AcceptButton');
    const cerrarConfirmacionCarpeta = document.getElementById('CloseButton');
    const ConfirmacionCrearCarpeta = document.getElementById('ConfirmacionCrearCarpeta');
    const fileInput = document.getElementById('UploadImageInput');
    const customButton = document.getElementById('custom-button');
    const previewImage = document.getElementById('Upload-Image');
    const UploadImageInput = document.getElementById('UploadImage');
    
                abrirPopUp.addEventListener("click",()=>{
                    console.log('Abriendo formulario');
                    PopUp.showModal();
                    formulario.reset();
                    borrarImagenPredeterminada();
                    
                }) 
                cerrarPopUp.addEventListener("click",()=>{
                    console.log('Cerrando formulario');
                    PopUp.close();
                    formulario.reset();
                    borrarImagenPredeterminada(); 
                                            
                })
                
                function borrarImagenPredeterminada() {
                    previewImage.src = "./images/upload-image.svg";
                    
                }

                formulario.addEventListener('submit', function(event){
                    event.preventDefault();

                
                    if(validarFormulario()){
                        console.log('Formulario válido. Enviar formulario...');
                        ConfirmacionCrearCarpeta.style.display = 'block';
                        ConfirmacionCrearCarpeta.showModal();
                                               
                    } else{
                        console.log('Formulario no válido. Verifica los campos.');
                    }
                   
                });

            
                customButton.addEventListener('click', () => {
                  fileInput.click();
                });
    
                document.addEventListener('DOMContentLoaded', function () {
                    
                
                 fileInput.addEventListener('change', function () {
                        const file = fileInput.files[0];
                
                        if (file) {
                            const reader = new FileReader();
                
                            reader.addEventListener('load', function () {
                                previewImage.src = reader.result;
                                previewImage.style.display = 'block';
                                
                            });
                
                            reader.readAsDataURL(file);
                        }
                    });
                }); 
                
                
                function validarFormulario(){
                    const NombreProyecto = document.getElementById('NombreProyecto');
                    const Objetivo = document.getElementById('Objetivo');
                    const fileInput = document.getElementById('UploadImageInput');

                    if(NombreProyecto.value.trim()===''){
                        alert('El campo Nombre del Proyecto no puede estar vacío.');
                        return false;
                    }

                    if(Objetivo.value.trim()===''){
                        alert('El campo Objetivo no puede estar vacío.');
                        return false;
                    }

                    if(fileInput.value.trim()===''){
                        alert('Debes seleccionar una imágen.');
                        return false;
                    }


                    return true
                }          

                    cerrarConfirmacionCarpeta.addEventListener("click",()=>{
                        ConfirmacionCrearCarpeta.close();
                        PopUp.close();
                        ConfirmacionCrearCarpeta.style.display = 'none';
                        
                    }) 
                     
            
                
                
                console.log('Le diste click al botón biblioteca')
        
   
    const userEmail = 'user@gmail.com';
    const folderName = document.getElementById('NombreProyecto').value.replace(/ /g, '++');
    const imageUrl = document.getElementById('UploadImageInput').value.replace(/ /g, '++');
    const objective = document.getElementById('Objetivo').value.replace(/ /g, '++');

    
    const urlCreateFolder = `http://127.0.0.1:3000/create/folder?studentEmail=${userEmail}&folderName=${folderName}&imageUrl=${imageUrl}&objective=${objective}`;
    const urlShowFolder = `http://127.0.0.1:3000/folder/find?email=${userEmail}&folderName=${folderName}`;

    function createFolder() {
        fetch(urlCreateFolder, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    studentEmail: userEmail,
                    folderName: folderName,
                    imageUrl: imageUrl,
                    objective: objective,
        }   ),
            })
            .then(response => response.json())
            .then((data) => {
                const folder = document.createElement("div");
                folder.classList.add("carpeta");
                folder.id = ("carpetaNueva");
                const folderTitle = document.createElement("p");
                folderTitle.id = ("FolderName");
                folderTitle.innerText = data.folderName;
                folder.appendChild(folderTitle);

                const imageElement = document.createElement("img");
                imageElement.id = ("image1");
                imageElement.src = data.imageUrl;
                imageElement.accept = "image/";
                folder.appendChild(imageElement);

                const hoverDiv = document.createElement("div");
                hoverDiv.classList.add("HoverCarpeta");
                const community = document.createElement("img");
                community.src = "./images/community-folder.svg";
                community.alt = "Icono comunidad";
                community.width = "22px";
                community.height = "13.62px";
                community.id = ("Community");
                const p = document.createElement("p");
                const textoComunidad = document.createTextNode("Comunidad");
                p.appendChild(textoComunidad);
                p.appendChild(community);
                hoverDiv.appendChild(p);

                const btn = document.createElement("button");
                btn.classList.add("button-go");
                btn.id = ("botoncarpeta");
                btn.innerHTML = "¡Vamos!";
                btn.ariaLabel = "Botón de ir a la sección de Búsqueda";
                hoverDiv.appendChild(p);
                hoverDiv.appendChild(btn);

                folder.appendChild(hoverDiv);

                const folderArea = document.getElementById('carpetasBiblioteca');
                folderArea.appendChild(folder);

                console.log('Respuesta de la API:', data);

                fetch(urlShowFolder)
                .then(response => response.json())
                .then(data => {
                    
                    
                    console.log('Detalles adicionales de la carpeta:', data);
                    const folderNameDetalles = data.folderName;
                    const imagenDetalles = data.imageUrl;
                    
                    
                    console.log('Nombre de la carpeta:', folderNameDetalles);
                    console.log('Imagen de la carpeta:', imagenDetalles);
                })
                .catch(error => {
                    console.error('Error al obtener detalles adicionales de la carpeta:', error);
                });
        })
            
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
    }

    abrirConfirmacionCarpeta.addEventListener('click', createFolder);
        
        
    
                
                    
                
                    
                

   
                       
            
            


   

       

     