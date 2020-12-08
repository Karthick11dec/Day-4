var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
-------------------------------------------------------------------

    1.var region=data.filter(function(element){
     return element.region=="Asia";
    });console.log(region);
-------------------------------------------------------------------

   2.var population=data.filter(function(element){
      return element.population>200000;
     });console.log(population);
------------------------------------------------------------------- 

  3.1)data.forEach(demo)
  function demo(elem)
  {
      console.log(elem.name);
  }
-------------------------------------------------------------------

  3.2)data.forEach(function(elem)
  {
      console.log(elem.capital);
  });
-------------------------------------------------------------------

  3.3)data.forEach((elem)=>{console.log(elem.flag)});
-------------------------------------------------------------------
  4.var temp=[];
  for(var i=0;i<data.length;i++){
  temp.push(data[i].population);
  }
  var popul=temp.reduce((acc,cv)=>{
      return acc+cv;
  });console.log(popul);
-------------------------------------------------------------------

    5.var usd=data.filter(function(element){
      return element.currencies[0].code=="USD";
     });console.log(usd);
---------------------------------------------------------------------




}
