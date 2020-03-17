function saveDetail(){
     let fullName=document.getElementById("fullName").value;
     let email=document.getElementById("email").value;
     let password=document.getElementById("password").value;
     let mobileNo=document.getElementById("mobileNo").value;

     fetch("http://localhost:4050/api/signup", {
             method: "POST",
             body: JSON.stringify({ fullName:fullName,email:email,password:password,mobileNo:mobileNo }),
             headers: { "Content-Type": "application/json" }
          })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                        location.href="login.html"
                    }
        });
}