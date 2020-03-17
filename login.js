function loginDetail() {
    let inputEmail=document.getElementById("inputEmail").value;
    let inputPassword=document.getElementById("inputPassword").value;

    fetch("http://localhost:4050/api/login", {
        method: "POST",
        body: JSON.stringify({email:inputEmail,password:inputPassword }),
        headers: { "Content-Type": "application/json" }
     })
       .then(res => res.json())
       .then(res => {
           if(res.success){
               localStorage.setItem("user",JSON.stringify(res.data));
               location.href="newTodos.html"
           }
   });
}