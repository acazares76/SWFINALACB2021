// FASE DE REGISTRO

if ('serviceWorker' in navigator){

    window.addEventListener('load', ()=>{

        navigator.serviceWorker.register("../sw.js").then((data)=>{
          ServiceWorkerRegistration.addEventListener('updatefound', () =>{

            newServiceworker = registration.installing;

            newServiceworker.addEventListener('statechange', () =>{
                switch(newServiceworker.state){
                  case 'installed': 
    //lanzar el snackbar
                  showSnackbar();
                  break;
                }
            })

          })

function showSnackbar() {
  // Get the snackbar DIV
  var x = document .getElementById("snackbar");

  //Add the "show" class to DIV
  x.className = "show";

  //after 3 seconds, remove the show class form DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


          //  console.log('data then :>>', data);
        }).catch((data)=>{
           // console.log('data catch :>>', data);
    })




}); 


}


