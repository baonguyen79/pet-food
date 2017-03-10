var dogFoodElement = document.getElementById("dog-food-brand");
var catFoodElement = document.getElementById("cat-food-container");

function makeDom(xhrData){
    
  var  liBrand;
  var  ulType = document.createElement("ul");
  var  ulType;
  var  liType;
  var  ulVolume;
  var  liVolume;
  var  brandString = "";
  var  typeString = "";
  var  volumeString = "";

  for (var i=0; i<xhrData.dog_brands.length; i++){
      liBrand = document.createElement("li");
      liBrand.innerHTML = `${xhrData.dog_brands[i].name}`;
      ulType = document.createElement("ul");
      // console.log(xhrData.dog_brands[i]); 
      for (var t = 0; t < xhrData.dog_brands[i].types.length; t++)
      {
        liType = document.createElement("li");
        liType.innerHTML = `${xhrData.dog_brands[i].types[t].type}`;

        ulVolume = document.createElement("ul");
        for (var v = 0; v < xhrData.dog_brands[i].types[t].volumes.length; v++){
            liVolume = document.createElement("li");
            liVolume.innerHTML = `${xhrData.dog_brands[i].types[t].volumes[v].name} : ${xhrData.dog_brands[i].types[t].volumes[v].price}`;
            ulVolume.appendChild(liVolume); 
        }

        liType.appendChild(ulVolume);

        ulType.appendChild(liType);
        // ulType.className = "type";
      }

      liBrand.appendChild(ulType);
      liBrand.className = "brand";
      console.log(liBrand);


      dogFoodElement.appendChild(liBrand);

  }
}



function executeThisCodeAfterFileLoad(){
  var data = JSON.parse(this.responseText);
  console.log("here", data.dog_brands[0] , data.dog_brands[0].types[0] , data.dog_brands[0].types[0].volumes[0].name , data.dog_brands[0].types[0].volumes[0].price);
  makeDom(data); 
}

function executeThisCodeAfterFileFails(){
  console.log("boooo");
}

var myRequest = new XMLHttpRequest();  //make request
myRequest.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dogfood.json")  //get from dogfood.json
myRequest.send();  //execute request