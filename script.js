function calculate(){
    let a=parseInt(document.getElementById('hindi').value);
    let b=parseInt(document.getElementById('english').value);
    let c=parseInt(document.getElementById('math').value);
    let d=parseInt(document.getElementById('physics').value);
    let e=parseInt(document.getElementById('chemistry').value);
    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please enter correct value")
    }
    else{
        let obtain = a + b + c + d + e;
        document.getElementById("obtain").innerHTML=obtain;
        let per = obtain/500*100;
        document.getElementById("per").innerHTML=per;
        if(a>30 && b>30 && c>30 && d>30 && e>30){
        document.getElementById("remark").innerHTML="<span style='color:green'>Pass</span>";
        }
        else{
            document.getElementById("remark").innerHTML="<span style='color:red'>Fail</span>";
        }
        if(per>=75){
            document.getElementById("grade").textContent="A+";
        }
        else if(per>=60){
            document.getElementById("grade").textContent="A";
        }
        else if(per>=45){
            document.getElementById("grade").textContent="B";
        }
        else if(per>=30){
            document.getElementById("grade").textContent="C";
        }
    }  

}