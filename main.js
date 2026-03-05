if('serviceWorker' in navigator){

    console.log('El serviceWorker es compatibble');

    window.addEventListener('load', function(){
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('ServiceWorker registrado con exito: (Scope: ', reg.scope,')'))
        .catch(err => console.log('Fallo en el registro de ServiceWorker:', err));
    });
}else{
    console.log('ServiceWorker no es compatible');
}