var defaultJson= {"buttons": [ 10,38,-13,-18 ],"bars": [62,45,62],"limit": 230};
var values={"myBar0":62,"myBar1":45,"myBar2":62};

window.addEventListener("load", function(){
			 var divAppend = document.createElement("div");
			 var btnHtml="",barHtml="",selectHtml="",symbol;
			 for(i=0;i<defaultJson.buttons.length;i++){
				  if(defaultJson.buttons[i]>0){
					symbol="+";
					btnHtml+='<button id='+ "inc" + defaultJson.buttons[i] + ' onclick="run('+"'"+symbol+"'"+','+ defaultJson.buttons[i] +')">'+ "inc"+defaultJson.buttons[i] +'</button>';
				  }else{
					symbol="-";
					defaultJson.buttons[i]=defaultJson.buttons[i]*-1;
					btnHtml+='<button id='+ "dec" + defaultJson.buttons[i] + ' onclick="run('+"'"+symbol+"'"+','+ defaultJson.buttons[i] +')">'+ "dec"+defaultJson.buttons[i] +'</button>';
				  }				
			 }
			 for(i=0;i<defaultJson.bars.length;i++){
				barHtml+=
				'<div id='+ "progressbar" + i + ' class="progressBar col-md-12 col-sm-12 col-xs-12">'+
				'<div id='+ "myBar" + i + ' style='+ "width:" + defaultJson.bars[i] + "%"+'></div>'+
				'</div>';
				selectHtml+='<option id='+ "progressLabel" + i + ' value='+ "myBar" + i + '>'+ "Progressbar"+i+'</option>';
			 }
			 document.body.innerHTML =
				'<div class="container-fluid model">'+
				barHtml+
				'<br/>'+
				'<select id="myDropdown" class="form-control selectOpt col-md-12 col-sm-12 col-xs-12">'+
				'<option selected="selected">Please select</option>'+
				selectHtml+
				'</select>'+
				btnHtml+
				'<br/>'+
				'</div>';
				});
				
function run(operator,value)  {
	
var progressId=document.getElementById("myDropdown").value;
var progressBar=document.getElementById(progressId);
var temp=document.getElementById(progressId).style.width;

var removePercent=values[progressId];

var newValue;
if(operator === "+")
	newValue=Number(removePercent) + value; 
else{
	newValue=Number(removePercent) - value; 
}

values[progressId]=newValue;

if(newValue>=defaultJson.limit)
document.getElementById(progressId).style.width = 100 + "%";
else if(newValue<=0)
document.getElementById(progressId).style.width = 0 + "%";
else
document.getElementById(progressId).style.width = newValue + "%";

if(newValue>100){
document.getElementById(progressId).style.backgroundColor="red";
}else{
document.getElementById(progressId).style.backgroundColor="#2795EE";
}
}
