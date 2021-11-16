

const url =  'https://dog.ceo/api/breeds/image/random'
    
fetch(url)
.then(res =>res.json())
.then (mascostas =>{
  console.log(mascostas);

})


let newSW

if ('serviceworker' in navigator){
  window.addEventListener('load', () =>{
    navigator.serviceWorker.register('sw,js').then(result =>{
      result.addEventListener('updatefound', ()=> {
        newSW = result.installing;
        console.log('Hay un nuevo SW', newSW);
        newSW.addEventListener('statechange', () =>{
          if(newSW.state == "installed"){
            showSnackbar();
          }

        })

      })
    })
    
  })

    function showSnackbar(){
      let x = document.getElementById("snackbar");
      x.className = "show";
    }

    let botonActualizar = document.getElementById('launchUpdate')

    botonActualizar.addEventListener('click', () =>{

      newSW.postMessage({action: 'skipWaitin'}) 
      window.location.reload();


    })






    let boton = document.getElementById("btnAcceder")
    boton.addEventListener('click', () => {
      fetch('http://www.google.com')
    })
  }



  
