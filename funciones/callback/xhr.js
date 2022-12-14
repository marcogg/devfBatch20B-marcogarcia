"use strict";

// CALLBACK HELL

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
const url2 = "https://pokeapi.co/api/v2/pokemon/squirtle";

function getData(url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(JSON.parse(xhttp.responseText), null);
      } else {
        callback(null, "Algo salio mal intente mas tarde");
      }
    }
  };
  xhttp.send();
}

function getVamoACalmarno(data, error) {
  console.log(data, error);
}

getData(url, (data, error) => {
  console.log(data.forms[0].name, error);
  getData(url2, (data, error) => getVamoACalmarno(data.forms[0].name, error));
  getData(url, (data, error) => {
    console.log(data.forms[0].name, error);
    getData(url2, (data, error) => getVamoACalmarno(data.forms[0].name, error));
    getData(url, (data, error) => {
      console.log(data.forms[0].name, error);
      getData(url2, (data, error) =>
        getVamoACalmarno(data.forms[0].name, error)
      );
    });
  });
});
