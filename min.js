var images=[
    "father-clipart-10.jpg",
    "daughter.jpg",
    "Mother.png"
]
var names=[
    "Father","Daughter","Mother"
]
var i=0;
function myfamily(){
  console.log("image");
  document.getElementById("family").src=images[i];
  document.getElementById("para").innerHTML=names[i];
  i++;
  if(i==3){
      i=0;
  }
}