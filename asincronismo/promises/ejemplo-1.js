let x = 10;

const promesa = new Promise((resolve, reject) => {
  if ((x = 10)) {
    resolve("Aqui estan los datos solicitados...");
  }
  reject("No tengo datos disponibles.");
});

promesa
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    console.log("Hice una suma: ", 33 + 17);
    return 50;
  })
  .then((resultadoSuma) => {
    console.log(resultadoSuma * 2, response);
  })
  .catch((error) => {
    console.log(error);
  });
