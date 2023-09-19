const button= document.getElementById("ajax");
//eventlisteners

button.addEventListener('click',()=>{
    alert("clicked");
    makeRequest();
   

});
  const httpRequest = new XMLHttpRequest();
  const url="";

  function makeRequest() {
    httpRequest.onreadystatechange=alertContents;
    httpRequest.open('GET',url,true);
    httpRequest.send();
}
function alertContents(){
    if(httpRequest.readyState===XMLHttpRequest.DONE) {
        if(httpRequest.status===200){
            alert(httpRequest.responseText);   
        }
    }
}