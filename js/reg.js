function reg(){
	
	$("#userName").onkeyup = function(){
		
		var reg1 = /^[_a-zA-Z]\w{5,14}$/; 
		var reg2 = /^\w+@\w+\.(com|cn|net)$/;
		var reg3 = /^1[3-9]\d{9}$/; 
			
		var str = this.value;
		if(reg1.test(str)==true || reg2.test(str)==true || reg3.test(str)==true){
			$("#userSpan").innerHTML = "√";
		}else{
			$("#userSpan").innerHTML = "×";
		}	
		
	}
	
	$("#userPass").onkeyup = function(){
		var regLetter = /[a-zA-Z]/; 
		var regNum = /[0-9]/; 
		var regSpecial = /[\$!#]/; 

		var str = this.value;
		if(str.length>=6 && str.length<=16 && regLetter.test(str) && regNum.test(str) && regSpecial.test(str) ){
			$("#userSpan2").innerHTML = "√";
		}else{
			$("#userSpan2").innerHTML = "×";
		}								
	}		
}
