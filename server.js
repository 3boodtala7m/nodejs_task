
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path"); 

async function makeRequest() {
  const pokemon1 = { method: "get", url: "https://pokeapi.co/api/v2/pokemon/pikachu", };
  const pokemon2 = { method: "get", url: "https://pokeapi.co/api/v2/pokemon/ditto", };
  const pokemon3 = { method: "get", url: "https://pokeapi.co/api/v2/pokemon/eevee", };

  let pokemon_1 = await axios(pokemon1);
  let pokemon_2 = await axios(pokemon2);
  let pokemon_3 = await axios(pokemon3);


  app.set("view engine", "ejs")
  app.set('views', path.join(__dirname, '/pages'))
  app.use(express.static(path.join(__dirname, '/public')));
  app.use( express.static( "public" ) );
  app.get('/', (req, res) => {
    res.render("home",{
      name_1:pokemon_1.data.name,
      order_1:pokemon_1.data.order,
      
      name_2:pokemon_2.data.name,
      order_2:pokemon_2.data.order,
      
      name_3:pokemon_3.data.name,
      order_3:pokemon_3.data.order
    });
  })
 app.listen(3000);
}
makeRequest();
