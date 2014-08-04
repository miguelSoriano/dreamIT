//::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// Función para activar los botones de scroll en el home //
//::::::::::::::::::::::::::::::::::::::::::::::::::::::://

function scrollTo(obj) {
	if($(obj).length){
		$(obj).click(function(){
			var id = $(this.hash);
			if(id.length){
				$('html, body').animate({
					scrollTop: id.offset().top
				}, 1000);
				$(this).parent().addClass('current').siblings().removeClass('current');
				return false;
			}
		});
	}
}


//::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//         Función para activar Swiper en el home        //
//::::::::::::::::::::::::::::::::::::::::::::::::::::::://

function swipeHome(swiper){
	var mySwiper = $(swiper).swiper({
		mode: 'horizontal',
		grabCursor: true,
		calculateHeight: true,
		calculateWidth: true,
		autoplay: 5000
		
	});
	$('.btnPrev').click(function(e) {
		e.preventDefault();
		mySwiper.swipePrev();
	});
	$('.btnNext').click(function(e) {
		e.preventDefault();
		mySwiper.swipeNext();
	});
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//           Función para enviar el formulario           //
//::::::::::::::::::::::::::::::::::::::::::::::::::::::://

//::::::::::::::::::::::::::::::::::::::::::::::::::::::://
//                     Carga del DOM                     //
//::::::::::::::::::::::::::::::::::::::::::::::::::::::://
$(document).ready(function(){
	//Iniciar Menu
	$('#menu').mmenu();
	// Iniciar ScrollTo
	scrollTo('.btnScroll a');

	// form submit

	$('.error').hide();

	$('.nl-submit').click(function(){
		// input values
		var usuario = $('input[name=nombre]').val();
		var correo = $('input[name="email"]').val();
		var prop = $('select[name="propuesta"]').val();
		var project = $('select[name="proyecto"]').val();

		// validation
		var proceed = false;
		$('.error').hide();
		//valida campos
		if (usuario == "") {
			$("#name_error").show();
			$('input[name=nombre]').focus();
			proceed = false;
		}
		if (correo == "") {
			$("#email_error").show();
			$('input[name=email]').focus();
			proceed = false;
		}

		// ¿Todo bien? Go!!
		if(proceed){
			//data to be sent to server
			post_data = {'userName':usuario, 'userEmail':correo, 'userProp':prop, 'userProyect':project};
			
			//Ajax post data to server
			$.post('include/php/send.php', post_data, function(response){
				
				//load json data from server and output message     
				if(response.type == 'error')
				{
					alert('Wrong')
				    //output = '<div class="error">'+response.text+'</div>';
				}else{
					alert('Good')
					//output = '<div class="success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#contacto input').val('');
					$('#contacto textarea').val('');
				}
				
				//$("#result").hide().html(output).slideDown();
			}, 'json');
		}
	});
});