const form=document.querySelector(".js-form"),
	  input=form.querySelector("input"),
	  greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
	  SHOWING_CN="showing";

function saveName(text){
	localStorage.setItem(USER_LS,text);
}

function handleSubmit(){
	event.preventDefault();    //submit과 동시에 창이 새로고침 되는걸 방지
	const currentValue=input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName(){
	form.classList.add("showing");
	form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){  //유저가 있을경우 색칠하기!!
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText=`Hello ${text}`;
}

function loadName(){ //localStorage에서 value값을 가져오는 함수
	const currentUser=localStorage.getItem(USER_LS);
	if(currentUser===null){
		askForName();
	}else{ //localStorage에 유저가 있을경우
		paintGreeting(currentUser);
	}
}

function init(){
	loadName();
}

console.log("hi");
init();
