function logar(){
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;
  console.log([document.getElementById('login'), document.getElementById('senha')]);
  
  if(login == "admin@gmail.com" && senha == "LH123"){
      location.href = "pag1.html";
  }else{
      alert('Usuario ou senha incorretos');
  }

}