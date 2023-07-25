var arrlength=parseInt(prompt("Enter The Length Array"));
var a=[];
 
for(let i=0;i<arrlength;i++){
 a[i]=prompt("Enter The"+(i+1)+"value");
 }
 document.write("a="+a+"<br>"+"<br>");
 var b=prompt("Enter the position of elements you delete");
 var del=prompt("Enter the how many element you document");
 var c=a.splice(b,del);
 document.write("delete the elements"+a);
