var counter = 0 ;
function trocaBixo(){
    if (document.getElementById("yup").src=="https://steamuserimages-a.akamaihd.net/ugc/934935236776323290/37DBBEFEE7F741DF977CDD40977A28C0865CEED9/")
    {
        document.getElementById("yup").src="https://c.tenor.com/P8Swu4JxgOwAAAAd/csgo-hvh.gif";
        document.getElementById("yop").src="https://steamuserimages-a.akamaihd.net/ugc/934935236776323290/37DBBEFEE7F741DF977CDD40977A28C0865CEED9/"
    }else{
        document.getElementById("yop").src="https://c.tenor.com/P8Swu4JxgOwAAAAd/csgo-hvh.gif"
        document.getElementById("yup").src="https://steamuserimages-a.akamaihd.net/ugc/934935236776323290/37DBBEFEE7F741DF977CDD40977A28C0865CEED9/"
    }
    counter++;
    if (counter %2==0){
        document.getElementById("idk").textContent=""
    }
    else{
        document.getElementById("idk").textContent="Rodrigo Freire e Alexandre Daleokrey"
    }
}

function register(){   
    
    
    var user = document.getElementById("user").value;
    var pass =document.getElementById("pass").value;
    var pass1=document.getElementById("pass1").value; 
    if (pass ==pass1){
        localStorage.setItem("conta",user + "|" + pass);
    }else{
        alert("passwords do not match");
    }
}
