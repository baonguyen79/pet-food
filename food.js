var dogFoodElement = document.getElementById("dog-food-brand");
var catFoodElement = document.getElementById("cat-food-brand");

//******************************************
// Function to make Dog DOM
//******************************************
function makeDogDom(xhrData){
    
  var  liBrand;
  var  ulType;
  var  liType;
  var  ulVolume;
  var  liVolume;

  for (var i=0; i<xhrData.dog_brands.length; i++){                        // create ul brand
      liBrand = document.createElement("li");
      liBrand.innerHTML = `${xhrData.dog_brands[i].name}`;
        
      ulType = document.createElement("ul");                              // create ul  types
      for (var t = 0; t < xhrData.dog_brands[i].types.length; t++)
      {
        liType = document.createElement("li");                            
        liType.innerHTML = `${xhrData.dog_brands[i].types[t].type}`;

        ulVolume = document.createElement("ul");                          // create ul  volume prices
        for (var v = 0; v < xhrData.dog_brands[i].types[t].volumes.length; v++){
            liVolume = document.createElement("li");
            liVolume.innerHTML = `${xhrData.dog_brands[i].types[t].volumes[v].name} : ${xhrData.dog_brands[i].types[t].volumes[v].price}`;
            ulVolume.appendChild(liVolume); 
        }

        liType.appendChild(ulVolume);

        ulType.appendChild(liType);
        
      }

      liBrand.appendChild(ulType);
      liBrand.className = "brand";

      dogFoodElement.appendChild(liBrand);

  }
}

//******************************************
//Function to make cat DOM
//******************************************
function makeCatDom(xhrData){
    
  var  liBrand;
  var  ulType;
  var  liType;
  var  ulVolume;
  var  liVolume;
  
  for (var i=0; i<xhrData.cat_brands.length; i++){
      liBrand = document.createElement("li");
      liBrand.innerHTML = `${xhrData.cat_brands[i].name}`;
        
      ulType = document.createElement("ul");                                    
      for (var t = 0; t < xhrData.cat_brands[i].types.length; t++)
      {
        liType = document.createElement("li");                                  
        liType.innerHTML = `${xhrData.cat_brands[i].types[t].type}`;

        ulVolume = document.createElement("ul");                                
        for (var v = 0; v < xhrData.cat_brands[i].types[t].volumes.length; v++){
            liVolume = document.createElement("li");
            liVolume.innerHTML = `${xhrData.cat_brands[i].types[t].volumes[v].name} : ${xhrData.cat_brands[i].types[t].volumes[v].price}`;
            ulVolume.appendChild(liVolume); 
        }

        liType.appendChild(ulVolume);

        ulType.appendChild(liType);
        
      }

      liBrand.appendChild(ulType);
      liBrand.className = "brand";

      catFoodElement.appendChild(liBrand);

  }
}

//******************************************
// parse JSON data
//******************************************
function executeThisCodeAfterFileLoad(){
  var data = JSON.parse(this.responseText);

  if (Object.keys(data)[0] === "dog_brands"){
       makeDogDom(data); 
   } else {
      makeCatDom(data);
   }
}

//******************************************
// error if fail JSON data
//******************************************
function executeThisCodeAfterFileFails(){
  console.log("boooo");
}

//******************************************
// create requests
//******************************************
var myRequest1 = new XMLHttpRequest();  //make request for dog
myRequest1.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest1.addEventListener("error", executeThisCodeAfterFileFails);
myRequest1.open("GET","dogfood.json")  //get from dogfood.json
myRequest1.send();  //execute request

var myRequest2 = new XMLHttpRequest();  //make request for cat
myRequest2.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET","catfood.json")  //get from dogfood.json
myRequest2.send();  //execute reques