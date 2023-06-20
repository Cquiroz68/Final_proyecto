/*VARIABLES*/
let imagen;

/*CARGA*/
$('html').toggleClass('no-js js');

$('#proyectos li:first-child').addClass('fondo')

$('#site-header').prepend('<a href="#" class="logo"><img src="img/logohilda.webp" alt="logo HILDA"></a>').append('<div id="btn"><span></span><span></span><span></span></div>');

/*EVENTOS*/
$('#btn').on('click', function(){
  
       $('html').toggleClass('btn-click');
    
      $('#site-header img').toggleClass('btn-click');
    
     
     $('#menu ul').not($(this).children('ul')).slideUp();
});


/*************desplegable*******/

$('.menualto').on('click', function(){
    
    $('#menu ul').not($(this).children('ul')).slideUp();
    $(this).children('ul').slideToggle();



});

$('#proyectos li').on('mouseenter', function(){
      imagen = $(this).attr('id');
      $('body').attr('class', imagen);
    
     //FONDO
      $(this).addClass('fondo').siblings('li').removeClass('fondo');
                      
});
    
    
    
   
    
    /*sólo una caja abierta
     $('.menualto').removeClass('active');
     $(this).addClass('active');
     $('.menualto').not('.active').children('ul').slideUp();    
     $(this).children('ul').slideToggle();
   
}); 

$('#proyectos li').on('mouseenter', function(){
      imagen = $(this).attr('id');
      $('body').attr('class', imagen);
     /*FONDO
      $(this).addClass('fondo').siblings('li').removeClass('fondo');
                      
});*/

