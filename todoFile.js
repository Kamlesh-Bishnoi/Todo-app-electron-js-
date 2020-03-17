 /// using file
const fs = require("fs");
const path = require("path");
const pathname = path.join(__dirname, "Files");
 const btnCreate=document.getElementById("btnCreate");
 window.onload=function(){
  let fileRead = path.join(pathname,"Detail.txt" );
  fs.readFile(fileRead, function(err, data) {
  if (err) {
    return console.log(err);
  }
 
  console.log("dataat",data);
  let stringArray= data.toString().split("\n");

  console.log("stringArray", stringArray);
  stringArray.forEach(item=>{
    if(item){
      console.log("item",item)
      console.log("item of split",item.split(",")[0].split(":"));
    let inputValue =item.split(",")[0].split(":")[1]
    let id = item.split(",")[1].split(":")[1]
    let li = document.createElement("li");
    let input = document.createElement("input");
      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = "";
      input.readOnly = true;
      input.value =inputValue
      input.id = id;
      li.appendChild(input);
     let span = document.createElement("SPAN");
     let txt = document.createTextNode("\u00D7");
      span.appendChild(txt);
      li.appendChild(span);
       span.className = "close";
       span.onclick = function() {
        console.log("hhhehe")
        let fileDelete = path.join(pathname,"Detail.txt");
         console.log("filevakueueu",fileDelete);
        let div = this.parentElement;
         div.style.display = "none";
         fs.writeFile(fileDelete, '', function(){console.log('done')})

      }
      

    }
    
  })
  

  console.log("read operation successfull");
});

var buf = Buffer.from('Detail.txt');

console.log("lengngngn",buf.length);


}
btnCreate.addEventListener("click", function() {
  let file = path.join(pathname, "Detail.txt");
  let count=document.getElementsByTagName("li").length;
  let id=count+1;
  let inputValue=document.getElementById("myInput").value;
  let content = `title:${inputValue},id:${id}\n`;
   if(inputValue===""){
     alert("fill the field")
   }
   else{

   
  let li = document.createElement("li");
  let input = document.createElement("input");
 document.getElementById("myUL").appendChild(li);
 document.getElementById("myInput").value = "";
 input.readOnly = true;
 input.value =inputValue
 input.id = id;
 let span = document.createElement("SPAN");
 let txt = document.createTextNode("\u00D7");
 li.appendChild(input);
  span.appendChild(txt);
  li.appendChild(span);
   span.className = "close";
 


 
  fs.appendFile(file, content, (err)=> {
    if (err) {
      return console.log(err);
    }
  
    console.log("write operation successfull");
  });
  span.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    let fileDelete = path.join(pathname,"Detail.txt");
    fs.writeFile(fileDelete, '', function(){console.log('done')})

   }
 
}



});

