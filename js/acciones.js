// JavaScript Document
function LoginConectar(U,P)
{
	alert("U,P");
	datos="usuario="+U+"& Password="+P;
	$.ajax({type:POST,url:"http://192.168.1.175/Sitio6/log_in_m.php",data:datos}).done(function(msg){
	alert(msg);
	if (msg==""||msg==null)
	    {
		alert("usuario incorecto");
		}
	else 
    	{
		alert("bienvenido");
		}
	
});//fuction
}
$(document).ready(function(e){
	document.addEventListener("deviceready", function (){ 
	$('.Enviar').tap (function (){
		var formulario=$(this).parents('form');
		var usuario= document.getElementByID('Usuario').value;
		var password= document.getElementByID('Password').value;
		LoginConectar(usuario,password);
	});//tap
	});//deviceready
});    //ready


