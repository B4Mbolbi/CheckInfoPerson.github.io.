let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand(); //расширяем на все окно  


function sendiData(){
	let steamIn = document.getElementsByClassName("steamInput");

	let SteamId = document.getElementById('SteamId').value;
	let SteamName = document.getElementById('SteamName').value;
	let textOr = document.querySelector('.textOR');
	if ((SteamId == '') && (SteamName == '')) {
		textOr.innerHTML = 'Заполни хотя бы одно поле ';
		textOr.style.color = 'red';
		 

    	for(var i = 0; i < steamIn.length; i++){
        	steamIn[i].style.border = '5px solid red';
    	}

	}else{
		tg.sendData(`SteamId #${SteamId} SteamName #${SteamName}`); 
	};


	
}