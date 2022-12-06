const players = [
  {
    "fullName": "Aaron Ramsdale",
    "team": "Arsenal",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Matt Turner",
    "team": "Arsenal",
    "number": 30,
    "position": "Goalkeeper",
    "nationality": "United States"
  },
  {
    "fullName": "Karl Hein",
    "team": "Arsenal",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "Estonia"
  },
  {
    "fullName": "Kieran Tierney",
    "team": "Arsenal",
    "number": 3,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Ben White",
    "team": "Arsenal",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Gabriel Magalhaes",
    "team": "Arsenal",
    "number": 6,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Rob Holding",
    "team": "Arsenal",
    "number": 16,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Cedric Soares",
    "team": "Arsenal",
    "number": 17,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Takehiro Tomiyasu",
    "team": "Arsenal",
    "number": 18,
    "position": "Defender",
    "nationality": "Japan"
  },
  {
    "fullName": "William Saliba",
    "team": "Arsenal",
    "number": 12,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Lino Sousa",
    "team": "Arsenal",
    "number": 96,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Thomas Partey",
    "team": "Arsenal",
    "number": 5,
    "position": "Midfielder",
    "nationality": "Ghana"
  },
  {
    "fullName": "Bukayo Saka",
    "team": "Arsenal",
    "number": 7,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Martin Ødegaard",
    "team": "Arsenal",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Norway"
  },
  {
    "fullName": "Emile Smith Rowe",
    "team": "Arsenal",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Albert Sambi Lokonga",
    "team": "Arsenal",
    "number": 23,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Mohamed Elneny",
    "team": "Arsenal",
    "number": 25,
    "position": "Midfielder",
    "nationality": "Egypt"
  },
  {
    "fullName": "Granit Xhaka",
    "team": "Arsenal",
    "number": 34,
    "position": "Midfielder",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Fabio Vieira",
    "team": "Arsenal",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Oleksandr Zinchenko",
    "team": "Arsenal",
    "number": 35,
    "position": "Midfielder",
    "nationality": "Ukraine"
  },
  {
    "fullName": "Matt Smith",
    "team": "Arsenal",
    "number": 72,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Amario Cozier-Duberry",
    "team": "Arsenal",
    "number": 85,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Catalin Cirjan",
    "team": "Arsenal",
    "number": 44,
    "position": "Midfielder",
    "nationality": "Romania"
  },
  {
    "fullName": "Ethan Nwaneri",
    "team": "Arsenal",
    "number": 83,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Bradley Ibrahim",
    "team": "Arsenal",
    "number": 89,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Eddie Nketiah",
    "team": "Arsenal",
    "number": 14,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Gabriel Martinelli",
    "team": "Arsenal",
    "number": 11,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Marquinhos",
    "team": "Arsenal",
    "number": 27,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Gabriel Jesus",
    "team": "Arsenal",
    "number": 9,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Reiss Nelson",
    "team": "Arsenal",
    "number": 24,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Khayon Edwards",
    "team": "Arsenal",
    "number": 47,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Emiliano Martinez",
    "team": "Aston Villa",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Argentina"
  },
  {
    "fullName": "Robin Olsen",
    "team": "Aston Villa",
    "number": 25,
    "position": "Goalkeeper",
    "nationality": "Sweden"
  },
  {
    "fullName": "Jed Steer",
    "team": "Aston Villa",
    "number": 12,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Matty Cash",
    "team": "Aston Villa",
    "number": 2,
    "position": "Defender",
    "nationality": "Poland"
  },
  {
    "fullName": "Ezri Konsa",
    "team": "Aston Villa",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Tyrone Mings",
    "team": "Aston Villa",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Calum Chambers",
    "team": "Aston Villa",
    "number": 16,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ashley Young",
    "team": "Aston Villa",
    "number": 18,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Lucas Digne",
    "team": "Aston Villa",
    "number": 27,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Diego Carlos",
    "team": "Aston Villa",
    "number": 3,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Frederic Guilbert",
    "team": "Aston Villa",
    "number": 24,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Ludwig Augustinsson",
    "team": "Aston Villa",
    "number": 17,
    "position": "Defender",
    "nationality": "Sweden"
  },
  {
    "fullName": "Josh Feeney",
    "team": "Aston Villa",
    "number": 59,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jan Bednarek",
    "team": "Aston Villa",
    "number": 20,
    "position": "Defender",
    "nationality": "Poland"
  },
  {
    "fullName": "Douglas Luiz",
    "team": "Aston Villa",
    "number": 6,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "John McGinn",
    "team": "Aston Villa",
    "number": 7,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Morgan Sanson",
    "team": "Aston Villa",
    "number": 8,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Emiliano Buendia",
    "team": "Aston Villa",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Argentina"
  },
  {
    "fullName": "Marvelous Nakamba",
    "team": "Aston Villa",
    "number": 19,
    "position": "Midfielder",
    "nationality": "Zimbabwe"
  },
  {
    "fullName": "Jacob Ramsey",
    "team": "Aston Villa",
    "number": 41,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Boubacar Kamara",
    "team": "Aston Villa",
    "number": 44,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Philippe Coutinho",
    "team": "Aston Villa",
    "number": 23,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Leander Dendoncker",
    "team": "Aston Villa",
    "number": 32,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Lamare Bogarde",
    "team": "Aston Villa",
    "number": 52,
    "position": "Midfielder",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Ollie Watkins",
    "team": "Aston Villa",
    "number": 11,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Danny Ings",
    "team": "Aston Villa",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Leon Bailey",
    "team": "Aston Villa",
    "number": 31,
    "position": "Forward",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Cameron Archer",
    "team": "Aston Villa",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Will Dennis",
    "team": "Bournemouth",
    "number": 40,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Mark Travers",
    "team": "Bournemouth",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Ireland"
  },
  {
    "fullName": "Neto",
    "team": "Bournemouth",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Brazil"
  },
  {
    "fullName": "Cameron Plain",
    "team": "Bournemouth",
    "number": 45,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Lloyd Kelly",
    "team": "Bournemouth",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Chris Mepham",
    "team": "Bournemouth",
    "number": 6,
    "position": "Defender",
    "nationality": "Wales"
  },
  {
    "fullName": "Adam Smith",
    "team": "Bournemouth",
    "number": 15,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jack Stacey",
    "team": "Bournemouth",
    "number": 17,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "James Hill",
    "team": "Bournemouth",
    "number": 23,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jordan Zemura",
    "team": "Bournemouth",
    "number": 33,
    "position": "Defender",
    "nationality": "Zimbabwe"
  },
  {
    "fullName": "Ryan Fredericks",
    "team": "Bournemouth",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Marcos Senesi",
    "team": "Bournemouth",
    "number": 25,
    "position": "Defender",
    "nationality": "Argentina"
  },
  {
    "fullName": "Chris Francis",
    "team": "Bournemouth",
    "number": 42,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ben Greenwood",
    "team": "Bournemouth",
    "number": 43,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "Jack Stephens",
    "team": "Bournemouth",
    "number": 3,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Lewis Cook",
    "team": "Bournemouth",
    "number": 4,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "David Brooks",
    "team": "Bournemouth",
    "number": 7,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Jefferson Lerma",
    "team": "Bournemouth",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Colombia"
  },
  {
    "fullName": "Ryan Christie",
    "team": "Bournemouth",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Emiliano Marcondes",
    "team": "Bournemouth",
    "number": 11,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Junior Stanislas",
    "team": "Bournemouth",
    "number": 19,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Ben Pearson",
    "team": "Bournemouth",
    "number": 22,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Philip Billing",
    "team": "Bournemouth",
    "number": 29,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Siriki Dembele",
    "team": "Bournemouth",
    "number": 20,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Joe Rothwell",
    "team": "Bournemouth",
    "number": 14,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Marcus Tavernier",
    "team": "Bournemouth",
    "number": 16,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jack Wadham",
    "team": "Bournemouth",
    "number": 36,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Ferdinand Okoh",
    "team": "Bournemouth",
    "number": 48,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Dominic Sadi",
    "team": "Bournemouth",
    "number": 49,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Dominic Solanke",
    "team": "Bournemouth",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Jamal Lowe",
    "team": "Bournemouth",
    "number": 18,
    "position": "Forward",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Kieffer Moore",
    "team": "Bournemouth",
    "number": 21,
    "position": "Forward",
    "nationality": "Wales"
  },
  {
    "fullName": "Jaidon Anthony",
    "team": "Bournemouth",
    "number": 32,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "David Raya",
    "team": "Brentford",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Matthew Cox",
    "team": "Brentford",
    "number": 34,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Thomas Strakosha",
    "team": "Brentford",
    "number": 22,
    "position": "Goalkeeper",
    "nationality": "Albania"
  },
  {
    "fullName": "Rico Henry",
    "team": "Brentford",
    "number": 3,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ethan Pinnock",
    "team": "Brentford",
    "number": 5,
    "position": "Defender",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Pontus Jansson",
    "team": "Brentford",
    "number": 18,
    "position": "Defender",
    "nationality": "Sweden"
  },
  {
    "fullName": "Kristoffer Ajer",
    "team": "Brentford",
    "number": 20,
    "position": "Defender",
    "nationality": "Norway"
  },
  {
    "fullName": "Mads Roerslev",
    "team": "Brentford",
    "number": 30,
    "position": "Defender",
    "nationality": "Denmark"
  },
  {
    "fullName": "Charlie Goode",
    "team": "Brentford",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Aaron Hickey",
    "team": "Brentford",
    "number": 2,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Ben Mee",
    "team": "Brentford",
    "number": 16,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Zanka",
    "team": "Brentford",
    "number": 13,
    "position": "Defender",
    "nationality": "Denmark"
  },
  {
    "fullName": "Tristan Crama",
    "team": "Brentford",
    "number": 32,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Christian Nørgaard",
    "team": "Brentford",
    "number": 6,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Mathias Jensen",
    "team": "Brentford",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Josh Dasilva",
    "team": "Brentford",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Yoane Wissa",
    "team": "Brentford",
    "number": 11,
    "position": "Midfielder",
    "nationality": "DR Congo"
  },
  {
    "fullName": "Frank Onyeka",
    "team": "Brentford",
    "number": 15,
    "position": "Midfielder",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Bryan Mbeumo",
    "team": "Brentford",
    "number": 19,
    "position": "Midfielder",
    "nationality": "Cameroon"
  },
  {
    "fullName": "Shandon Baptiste",
    "team": "Brentford",
    "number": 26,
    "position": "Midfielder",
    "nationality": "Grenada"
  },
  {
    "fullName": "Vitaly Janelt",
    "team": "Brentford",
    "number": 27,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Mikkel Damsgaard",
    "team": "Brentford",
    "number": 24,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Ryan Trevitt",
    "team": "Brentford",
    "number": 35,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Yegor Yarmolyuk",
    "team": "Brentford",
    "number": 36,
    "position": "Midfielder",
    "nationality": "Ukraine"
  },
  {
    "fullName": "Sergi Canos",
    "team": "Brentford",
    "number": 7,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Saman Ghoddos",
    "team": "Brentford",
    "number": 14,
    "position": "Forward",
    "nationality": "Iran"
  },
  {
    "fullName": "Ivan Toney",
    "team": "Brentford",
    "number": 17,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Keane Lewis-Potter",
    "team": "Brentford",
    "number": 23,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Alex Gilbert",
    "team": "Brentford",
    "number": 37,
    "position": "Forward",
    "nationality": "Ireland"
  },
  {
    "fullName": "Robert Sanchez",
    "team": "Brighton and Hove Albion",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Jason Steele",
    "team": "Brighton and Hove Albion",
    "number": 23,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Thomas McGill",
    "team": "Brighton and Hove Albion",
    "number": 38,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Kjell Scherpen",
    "team": "Brighton and Hove Albion",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Carl Rushworth",
    "team": "Brighton and Hove Albion",
    "number": "-",
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Carl Rushworth",
    "team": "Brighton and Hove Albion",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Tariq Lamptey",
    "team": "Brighton and Hove Albion",
    "number": 2,
    "position": "Defender",
    "nationality": "Ghana"
  },
  {
    "fullName": "Adam Webster",
    "team": "Brighton and Hove Albion",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Lewis Dunk",
    "team": "Brighton and Hove Albion",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Joel Veltman",
    "team": "Brighton and Hove Albion",
    "number": 34,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Matt Clarke",
    "team": "Brighton and Hove Albion",
    "number": 16,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jan Paul van Hecke",
    "team": "Brighton and Hove Albion",
    "number": 29,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Sam Packham",
    "team": "Brighton and Hove Albion",
    "number": "-",
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Levi Colwill",
    "team": "Brighton and Hove Albion",
    "number": 6,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Pervis Estupinan",
    "team": "Brighton and Hove Albion",
    "number": 30,
    "position": "Defender",
    "nationality": "Ecuador"
  },
  {
    "fullName": "Antef Tsoungui",
    "team": "Brighton and Hove Albion",
    "number": 46,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "James Furlong",
    "team": "Brighton and Hove Albion",
    "number": 54,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "Ed Turns",
    "team": "Brighton and Hove Albion",
    "number": 43,
    "position": "Defender",
    "nationality": "Wales"
  },
  {
    "fullName": "Odeluga Offiah",
    "team": "Brighton and Hove Albion",
    "number": 57,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Alexis Mac Allister",
    "team": "Brighton and Hove Albion",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Argentina"
  },
  {
    "fullName": "Pascal Groß",
    "team": "Brighton and Hove Albion",
    "number": 13,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Adam Lallana",
    "team": "Brighton and Hove Albion",
    "number": 14,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jakub Moder",
    "team": "Brighton and Hove Albion",
    "number": 15,
    "position": "Midfielder",
    "nationality": "Poland"
  },
  {
    "fullName": "Solly March",
    "team": "Brighton and Hove Albion",
    "number": 7,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Moises Caicedo",
    "team": "Brighton and Hove Albion",
    "number": 25,
    "position": "Midfielder",
    "nationality": "Ecuador"
  },
  {
    "fullName": "Julio Enciso",
    "team": "Brighton and Hove Albion",
    "number": 20,
    "position": "Midfielder",
    "nationality": "Paraguay"
  },
  {
    "fullName": "Kaoru Mitoma",
    "team": "Brighton and Hove Albion",
    "number": 22,
    "position": "Midfielder",
    "nationality": "Japan"
  },
  {
    "fullName": "Taylor Richards",
    "team": "Brighton and Hove Albion",
    "number": 20,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jensen Weir",
    "team": "Brighton and Hove Albion",
    "number": 15,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Reda Khadra",
    "team": "Brighton and Hove Albion",
    "number": 11,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Jack Hinchy",
    "team": "Brighton and Hove Albion",
    "number": 53,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Cameron Peupion",
    "team": "Brighton and Hove Albion",
    "number": 51,
    "position": "Midfielder",
    "nationality": "Australia"
  },
  {
    "fullName": "Andrew Moran",
    "team": "Brighton and Hove Albion",
    "number": 59,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Jack Spong",
    "team": "Brighton and Hove Albion",
    "number": 71,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Billy Gilmour",
    "team": "Brighton and Hove Albion",
    "number": 27,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Leandro Trossard",
    "team": "Brighton and Hove Albion",
    "number": 11,
    "position": "Forward",
    "nationality": "Belgium"
  },
  {
    "fullName": "Danny Welbeck",
    "team": "Brighton and Hove Albion",
    "number": 18,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Jeremy Sarmiento",
    "team": "Brighton and Hove Albion",
    "number": 19,
    "position": "Forward",
    "nationality": "Ecuador"
  },
  {
    "fullName": "Deniz Undav",
    "team": "Brighton and Hove Albion",
    "number": 21,
    "position": "Forward",
    "nationality": "Germany"
  },
  {
    "fullName": "Lorent Tolaj",
    "team": "Brighton and Hove Albion",
    "number": "-",
    "position": "Forward",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Evan Ferguson",
    "team": "Brighton and Hove Albion",
    "number": 28,
    "position": "Forward",
    "nationality": "Ireland"
  },
  {
    "fullName": "Kepa Arrizabalaga",
    "team": "Chelsea",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Edouard Mendy",
    "team": "Chelsea",
    "number": 16,
    "position": "Goalkeeper",
    "nationality": "Senegal"
  },
  {
    "fullName": "Marcus Bettinelli",
    "team": "Chelsea",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Thiago Silva",
    "team": "Chelsea",
    "number": 6,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Reece James",
    "team": "Chelsea",
    "number": 24,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Cesar Azpilicueta",
    "team": "Chelsea",
    "number": 28,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Kalidou Koulibaly",
    "team": "Chelsea",
    "number": 26,
    "position": "Defender",
    "nationality": "Senegal"
  },
  {
    "fullName": "Marc Cucurella",
    "team": "Chelsea",
    "number": 32,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Trevoh Chalobah",
    "team": "Chelsea",
    "number": 14,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ben Chilwell",
    "team": "Chelsea",
    "number": 21,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Wesley Fofana",
    "team": "Chelsea",
    "number": 33,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Jorginho",
    "team": "Chelsea",
    "number": 5,
    "position": "Midfielder",
    "nationality": "Italy"
  },
  {
    "fullName": "N'Golo Kante",
    "team": "Chelsea",
    "number": 7,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Mateo Kovacic",
    "team": "Chelsea",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Croatia"
  },
  {
    "fullName": "Christian Pulisic",
    "team": "Chelsea",
    "number": 10,
    "position": "Midfielder",
    "nationality": "United States"
  },
  {
    "fullName": "Ruben Loftus-Cheek",
    "team": "Chelsea",
    "number": 12,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Mason Mount",
    "team": "Chelsea",
    "number": 19,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Hakim Ziyech",
    "team": "Chelsea",
    "number": 22,
    "position": "Midfielder",
    "nationality": "Morocco"
  },
  {
    "fullName": "Kai Havertz",
    "team": "Chelsea",
    "number": 29,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Conor Gallagher",
    "team": "Chelsea",
    "number": 23,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Carney Chukwuemeka",
    "team": "Chelsea",
    "number": 30,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Cesare Casadei",
    "team": "Chelsea",
    "number": "-",
    "position": "Midfielder",
    "nationality": "Italy"
  },
  {
    "fullName": "Denis Zakaria",
    "team": "Chelsea",
    "number": 20,
    "position": "Midfielder",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Omari Hutchinson",
    "team": "Chelsea",
    "number": 56,
    "position": "Midfielder",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Lewis Hall",
    "team": "Chelsea",
    "number": 75,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Armando Broja",
    "team": "Chelsea",
    "number": 18,
    "position": "Forward",
    "nationality": "Albania"
  },
  {
    "fullName": "Raheem Sterling",
    "team": "Chelsea",
    "number": 17,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Pierre-Emerick Aubameyang",
    "team": "Chelsea",
    "number": 9,
    "position": "Forward",
    "nationality": "Gabon"
  },
  {
    "fullName": "Jack Butland",
    "team": "Crystal Palace",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Vicente Guaita",
    "team": "Crystal Palace",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Sam Johnstone",
    "team": "Crystal Palace",
    "number": 21,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Joe Whitworth",
    "team": "Crystal Palace",
    "number": 41,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Owen Goodman",
    "team": "Crystal Palace",
    "number": 63,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Joel Ward",
    "team": "Crystal Palace",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Tyrick Mitchell",
    "team": "Crystal Palace",
    "number": 3,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "James Tomkins",
    "team": "Crystal Palace",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Marc Guehi",
    "team": "Crystal Palace",
    "number": 6,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Joachim Andersen",
    "team": "Crystal Palace",
    "number": 16,
    "position": "Defender",
    "nationality": "Denmark"
  },
  {
    "fullName": "Nathan Ferguson",
    "team": "Crystal Palace",
    "number": 36,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Chris Richards",
    "team": "Crystal Palace",
    "number": 26,
    "position": "Defender",
    "nationality": "United States"
  },
  {
    "fullName": "Nathaniel Clyne",
    "team": "Crystal Palace",
    "number": 17,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jairo Riedewald",
    "team": "Crystal Palace",
    "number": 44,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Luka Milivojevic",
    "team": "Crystal Palace",
    "number": 4,
    "position": "Midfielder",
    "nationality": "Serbia"
  },
  {
    "fullName": "Michael Olise",
    "team": "Crystal Palace",
    "number": 7,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Will Hughes",
    "team": "Crystal Palace",
    "number": 19,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jeffrey Schlupp",
    "team": "Crystal Palace",
    "number": 15,
    "position": "Midfielder",
    "nationality": "Ghana"
  },
  {
    "fullName": "James McArthur",
    "team": "Crystal Palace",
    "number": 18,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Cheick Oumar Doucoure",
    "team": "Crystal Palace",
    "number": 28,
    "position": "Midfielder",
    "nationality": "Mali"
  },
  {
    "fullName": "Eberechi Eze",
    "team": "Crystal Palace",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Killian Phillips",
    "team": "Crystal Palace",
    "number": 55,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Jack Wells-Morrison",
    "team": "Crystal Palace",
    "number": 47,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Kaden Rodney",
    "team": "Crystal Palace",
    "number": 78,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Kofi Balmer",
    "team": "Crystal Palace",
    "number": 43,
    "position": "Midfielder",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "David Ozoh",
    "team": "Crystal Palace",
    "number": 77,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jordan Ayew",
    "team": "Crystal Palace",
    "number": 9,
    "position": "Forward",
    "nationality": "Ghana"
  },
  {
    "fullName": "Wilfried Zaha",
    "team": "Crystal Palace",
    "number": 11,
    "position": "Forward",
    "nationality": "Cote D’Ivoire"
  },
  {
    "fullName": "Jean-Philippe Mateta",
    "team": "Crystal Palace",
    "number": 14,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Odsonne Edouard",
    "team": "Crystal Palace",
    "number": 22,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Malcolm Ebiowei",
    "team": "Crystal Palace",
    "number": 23,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "John-Kymani Gordon",
    "team": "Crystal Palace",
    "number": 45,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Adler Nascimento",
    "team": "Crystal Palace",
    "number": 76,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Jordan Pickford",
    "team": "Everton",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Asmir Begovic",
    "team": "Everton",
    "number": 15,
    "position": "Goalkeeper",
    "nationality": "Bosnia & Herzegovina"
  },
  {
    "fullName": "Andy Lonergan",
    "team": "Everton",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Billy Crellin",
    "team": "Everton",
    "number": 43,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Eldin Jakupovic",
    "team": "Everton",
    "number": 35,
    "position": "Goalkeeper",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Nathan Patterson",
    "team": "Everton",
    "number": 3,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Mason Holgate",
    "team": "Everton",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Michael Keane",
    "team": "Everton",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Yerry Mina",
    "team": "Everton",
    "number": 13,
    "position": "Defender",
    "nationality": "Colombia"
  },
  {
    "fullName": "Vitaliy Mykolenko",
    "team": "Everton",
    "number": 19,
    "position": "Defender",
    "nationality": "Ukraine"
  },
  {
    "fullName": "Ben Godfrey",
    "team": "Everton",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Seamus Coleman",
    "team": "Everton",
    "number": 23,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "James Tarkowski",
    "team": "Everton",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ruben Vinagre",
    "team": "Everton",
    "number": 29,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Conor Coady",
    "team": "Everton",
    "number": 30,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Reece Welch",
    "team": "Everton",
    "number": 64,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Kyle John",
    "team": "Everton",
    "number": 48,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Joseph Anderson",
    "team": "Everton",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ishe Samuels-Smith",
    "team": "Everton",
    "number": 59,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Andros Townsend",
    "team": "Everton",
    "number": 14,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Abdoulaye Doucoure",
    "team": "Everton",
    "number": 16,
    "position": "Midfielder",
    "nationality": "Mali"
  },
  {
    "fullName": "Tom Davies",
    "team": "Everton",
    "number": 26,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Dwight McNeil",
    "team": "Everton",
    "number": 7,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Stanley Mills",
    "team": "Everton",
    "number": 56,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Amadou Onana",
    "team": "Everton",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Isaac Price",
    "team": "Everton",
    "number": 60,
    "position": "Midfielder",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Idrissa Gueye",
    "team": "Everton",
    "number": 27,
    "position": "Midfielder",
    "nationality": "Senegal"
  },
  {
    "fullName": "James Garner",
    "team": "Everton",
    "number": 37,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Dominic Calvert-Lewin",
    "team": "Everton",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Demarai Gray",
    "team": "Everton",
    "number": 11,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Alex Iwobi",
    "team": "Everton",
    "number": 17,
    "position": "Forward",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Anthony Gordon",
    "team": "Everton",
    "number": 10,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Salomon Rondon",
    "team": "Everton",
    "number": 33,
    "position": "Forward",
    "nationality": "Venezuela"
  },
  {
    "fullName": "Neal Maupay",
    "team": "Everton",
    "number": 20,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Thomas Cannon",
    "team": "Everton",
    "number": 47,
    "position": "Forward",
    "nationality": "Ireland"
  },
  {
    "fullName": "Marek Rodak",
    "team": "Fulham",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Slovakia"
  },
  {
    "fullName": "Bernd Leno",
    "team": "Fulham",
    "number": 17,
    "position": "Goalkeeper",
    "nationality": "Germany"
  },
  {
    "fullName": "Tim Ream",
    "team": "Fulham",
    "number": 13,
    "position": "Defender",
    "nationality": "United States"
  },
  {
    "fullName": "Tosin Adarabioyo",
    "team": "Fulham",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Antonee Robinson",
    "team": "Fulham",
    "number": 33,
    "position": "Defender",
    "nationality": "United States"
  },
  {
    "fullName": "Kenny Tete",
    "team": "Fulham",
    "number": 2,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Kevin Mbabu",
    "team": "Fulham",
    "number": 27,
    "position": "Defender",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Shane Duffy",
    "team": "Fulham",
    "number": 5,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "Issa Diop",
    "team": "Fulham",
    "number": 31,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Luciano D'Auria-Henry",
    "team": "Fulham",
    "number": 41,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Charlie Robinson",
    "team": "Fulham",
    "number": 42,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Connor McAvoy",
    "team": "Fulham",
    "number": 43,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Layvin Kurzawa",
    "team": "Fulham",
    "number": 3,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Stefan Parkes",
    "team": "Fulham",
    "number": 39,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Harrison Reed",
    "team": "Fulham",
    "number": 6,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Neeskens Kebano",
    "team": "Fulham",
    "number": 7,
    "position": "Midfielder",
    "nationality": "DR Congo"
  },
  {
    "fullName": "Harry Wilson",
    "team": "Fulham",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Tom Cairney",
    "team": "Fulham",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Nathaniel Chalobah",
    "team": "Fulham",
    "number": 12,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Josh Onomah",
    "team": "Fulham",
    "number": 25,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Joao Palhinha",
    "team": "Fulham",
    "number": 26,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Andreas Pereira",
    "team": "Fulham",
    "number": 18,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Luke Harris",
    "team": "Fulham",
    "number": 38,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Adrion Pajaziti",
    "team": "Fulham",
    "number": 44,
    "position": "Midfielder",
    "nationality": "Kosovo"
  },
  {
    "fullName": "Kristian Sekularac",
    "team": "Fulham",
    "number": 45,
    "position": "Midfielder",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Oliver O'Neill",
    "team": "Fulham",
    "number": 46,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Dan James",
    "team": "Fulham",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Aleksandar Mitrovic",
    "team": "Fulham",
    "number": 9,
    "position": "Forward",
    "nationality": "Serbia"
  },
  {
    "fullName": "Bobby De Cordova-Reid",
    "team": "Fulham",
    "number": 14,
    "position": "Forward",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Manor Solomon",
    "team": "Fulham",
    "number": 11,
    "position": "Forward",
    "nationality": "Israel"
  },
  {
    "fullName": "Terry Ablade",
    "team": "Fulham",
    "number": 37,
    "position": "Forward",
    "nationality": "Finland"
  },
  {
    "fullName": "Martial Godo",
    "team": "Fulham",
    "number": 47,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Willian",
    "team": "Fulham",
    "number": 20,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Carlos Vinicius",
    "team": "Fulham",
    "number": 30,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Illan Meslier",
    "team": "Leeds United",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "France"
  },
  {
    "fullName": "Kristoffer Klaesson",
    "team": "Leeds United",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Norway"
  },
  {
    "fullName": "Harry Christy",
    "team": "Leeds United",
    "number": 55,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Joel Robles",
    "team": "Leeds United",
    "number": 22,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Luke Ayling",
    "team": "Leeds United",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Junior Firpo",
    "team": "Leeds United",
    "number": 3,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Robin Koch",
    "team": "Leeds United",
    "number": 5,
    "position": "Defender",
    "nationality": "Germany"
  },
  {
    "fullName": "Liam Cooper",
    "team": "Leeds United",
    "number": 6,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Diego Llorente",
    "team": "Leeds United",
    "number": 14,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Pascal Struijk",
    "team": "Leeds United",
    "number": 21,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Leo Hjelde",
    "team": "Leeds United",
    "number": 33,
    "position": "Defender",
    "nationality": "Norway"
  },
  {
    "fullName": "Stuart Dallas",
    "team": "Leeds United",
    "number": 15,
    "position": "Defender",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Cody Drameh",
    "team": "Leeds United",
    "number": 37,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Rasmus Kristensen",
    "team": "Leeds United",
    "number": 25,
    "position": "Defender",
    "nationality": "Denmark"
  },
  {
    "fullName": "James Debayo",
    "team": "Leeds United",
    "number": 56,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Kris Moore",
    "team": "Leeds United",
    "number": 52,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Adam Forshaw",
    "team": "Leeds United",
    "number": 4,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jack Harrison",
    "team": "Leeds United",
    "number": 11,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Crysencio Summerville",
    "team": "Leeds United",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Mateusz Klich",
    "team": "Leeds United",
    "number": 43,
    "position": "Midfielder",
    "nationality": "Poland"
  },
  {
    "fullName": "Brenden Aaronson",
    "team": "Leeds United",
    "number": 7,
    "position": "Midfielder",
    "nationality": "United States"
  },
  {
    "fullName": "Marc Roca",
    "team": "Leeds United",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Spain"
  },
  {
    "fullName": "Darko Gyabi",
    "team": "Leeds United",
    "number": 18,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Tyler Adams",
    "team": "Leeds United",
    "number": 12,
    "position": "Midfielder",
    "nationality": "United States"
  },
  {
    "fullName": "Archie Gray",
    "team": "Leeds United",
    "number": 63,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Amari Miller",
    "team": "Leeds United",
    "number": 27,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Charlie Allen",
    "team": "Leeds United",
    "number": 51,
    "position": "Midfielder",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Joe Snowdon",
    "team": "Leeds United",
    "number": 57,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Joseph Snowdon",
    "team": "Leeds United",
    "number": 57,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Alfie McCalmont",
    "team": "Leeds United",
    "number": 38,
    "position": "Midfielder",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Patrick Bamford",
    "team": "Leeds United",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Rodrigo",
    "team": "Leeds United",
    "number": 19,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Joe Gelhardt",
    "team": "Leeds United",
    "number": 30,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Sam Greenwood",
    "team": "Leeds United",
    "number": 42,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Luis Sinisterra",
    "team": "Leeds United",
    "number": 23,
    "position": "Forward",
    "nationality": "Colombia"
  },
  {
    "fullName": "Sonny Perkins",
    "team": "Leeds United",
    "number": 16,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Wilfried Gnonto",
    "team": "Leeds United",
    "number": 29,
    "position": "Forward",
    "nationality": "Italy"
  },
  {
    "fullName": "Mateo Joseph",
    "team": "Leeds United",
    "number": 49,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Danny Ward",
    "team": "Leicester City",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Wales"
  },
  {
    "fullName": "Daniel Iversen",
    "team": "Leicester City",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "Denmark"
  },
  {
    "fullName": "Alex Smithies",
    "team": "Leicester City",
    "number": 12,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "James Justin",
    "team": "Leicester City",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Caglar Soyuncu",
    "team": "Leicester City",
    "number": 4,
    "position": "Defender",
    "nationality": "Turkey"
  },
  {
    "fullName": "Ryan Bertrand",
    "team": "Leicester City",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jonny Evans",
    "team": "Leicester City",
    "number": 6,
    "position": "Defender",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Daniel Amartey",
    "team": "Leicester City",
    "number": 18,
    "position": "Defender",
    "nationality": "Ghana"
  },
  {
    "fullName": "Ricardo Pereira",
    "team": "Leicester City",
    "number": 21,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Jannik Vestergaard",
    "team": "Leicester City",
    "number": 23,
    "position": "Defender",
    "nationality": "Denmark"
  },
  {
    "fullName": "Timothy Castagne",
    "team": "Leicester City",
    "number": 27,
    "position": "Defender",
    "nationality": "Belgium"
  },
  {
    "fullName": "Luke Thomas",
    "team": "Leicester City",
    "number": 33,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Wout Faes",
    "team": "Leicester City",
    "number": 3,
    "position": "Defender",
    "nationality": "Belgium"
  },
  {
    "fullName": "Joe Wormleighton",
    "team": "Leicester City",
    "number": 60,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Harvey Barnes",
    "team": "Leicester City",
    "number": 7,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Youri Tielemans",
    "team": "Leicester City",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "James Maddison",
    "team": "Leicester City",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Marc Albrighton",
    "team": "Leicester City",
    "number": 11,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Kiernan Dewsbury-Hall",
    "team": "Leicester City",
    "number": 22,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Wilfred Ndidi",
    "team": "Leicester City",
    "number": 25,
    "position": "Midfielder",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Boubakary Soumare",
    "team": "Leicester City",
    "number": 42,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Dennis Praet",
    "team": "Leicester City",
    "number": 26,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Nampalys Mendy",
    "team": "Leicester City",
    "number": 24,
    "position": "Midfielder",
    "nationality": "Senegal"
  },
  {
    "fullName": "Lewis Brunt",
    "team": "Leicester City",
    "number": 34,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Sammy Braybrooke",
    "team": "Leicester City",
    "number": 44,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jamie Vardy",
    "team": "Leicester City",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Kelechi Iheanacho",
    "team": "Leicester City",
    "number": 14,
    "position": "Forward",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Ayoze Perez",
    "team": "Leicester City",
    "number": 17,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Patson Daka",
    "team": "Leicester City",
    "number": 20,
    "position": "Forward",
    "nationality": "Zambia"
  },
  {
    "fullName": "Alisson",
    "team": "Liverpool",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Brazil"
  },
  {
    "fullName": "Adrian",
    "team": "Liverpool",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Caoimhin Kelleher",
    "team": "Liverpool",
    "number": 62,
    "position": "Goalkeeper",
    "nationality": "Ireland"
  },
  {
    "fullName": "Harvey Davies",
    "team": "Liverpool",
    "number": 95,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Virgil van Dijk",
    "team": "Liverpool",
    "number": 4,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Ibrahima Konate",
    "team": "Liverpool",
    "number": 5,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Joe Gomez",
    "team": "Liverpool",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Konstantinos Tsimikas",
    "team": "Liverpool",
    "number": 21,
    "position": "Defender",
    "nationality": "Greece"
  },
  {
    "fullName": "Andrew Robertson",
    "team": "Liverpool",
    "number": 26,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Joel Matip",
    "team": "Liverpool",
    "number": 32,
    "position": "Defender",
    "nationality": "Cameroon"
  },
  {
    "fullName": "Trent Alexander-Arnold",
    "team": "Liverpool",
    "number": 66,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Calvin Ramsay",
    "team": "Liverpool",
    "number": 22,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Nathaniel Phillips",
    "team": "Liverpool",
    "number": 47,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Stefan Bajcetic",
    "team": "Liverpool",
    "number": 43,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Luke Chambers",
    "team": "Liverpool",
    "number": 88,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jarell Quansah",
    "team": "Liverpool",
    "number": 78,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Fabinho",
    "team": "Liverpool",
    "number": 3,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Thiago",
    "team": "Liverpool",
    "number": 6,
    "position": "Midfielder",
    "nationality": "Spain"
  },
  {
    "fullName": "James Milner",
    "team": "Liverpool",
    "number": 7,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Naby Keita",
    "team": "Liverpool",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Guinea"
  },
  {
    "fullName": "Jordan Henderson",
    "team": "Liverpool",
    "number": 14,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Alex Oxlade-Chamberlain",
    "team": "Liverpool",
    "number": 15,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Curtis Jones",
    "team": "Liverpool",
    "number": 17,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Harvey Elliott",
    "team": "Liverpool",
    "number": 19,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Fabio Carvalho",
    "team": "Liverpool",
    "number": 28,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Bobby Clark",
    "team": "Liverpool",
    "number": 42,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Arthur",
    "team": "Liverpool",
    "number": 29,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Jake Cain",
    "team": "Liverpool",
    "number": 64,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Melkamu Frauendorf",
    "team": "Liverpool",
    "number": 94,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Roberto Firmino",
    "team": "Liverpool",
    "number": 9,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Mohamed Salah",
    "team": "Liverpool",
    "number": 11,
    "position": "Forward",
    "nationality": "Egypt"
  },
  {
    "fullName": "Diogo Jota",
    "team": "Liverpool",
    "number": 20,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Luis Diaz",
    "team": "Liverpool",
    "number": 23,
    "position": "Forward",
    "nationality": "Colombia"
  },
  {
    "fullName": "Darwin Nunez",
    "team": "Liverpool",
    "number": 27,
    "position": "Forward",
    "nationality": "Uruguay"
  },
  {
    "fullName": "Ben Doak",
    "team": "Liverpool",
    "number": 50,
    "position": "Forward",
    "nationality": "Scotland"
  },
  {
    "fullName": "Layton Stewart",
    "team": "Liverpool",
    "number": 81,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Ederson",
    "team": "Manchester City",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "Brazil"
  },
  {
    "fullName": "Scott Carson",
    "team": "Manchester City",
    "number": 33,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Stefan Ortega",
    "team": "Manchester City",
    "number": 18,
    "position": "Goalkeeper",
    "nationality": "Germany"
  },
  {
    "fullName": "Kyle Walker",
    "team": "Manchester City",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ruben Dias",
    "team": "Manchester City",
    "number": 3,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "John Stones",
    "team": "Manchester City",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Nathan Ake",
    "team": "Manchester City",
    "number": 6,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Aymeric Laporte",
    "team": "Manchester City",
    "number": 14,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Joao Cancelo",
    "team": "Manchester City",
    "number": 7,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Josh Wilson-Esbrand",
    "team": "Manchester City",
    "number": 97,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Rico Lewis",
    "team": "Manchester City",
    "number": 82,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Manuel Akanji",
    "team": "Manchester City",
    "number": 25,
    "position": "Defender",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Ilkay Gundogan",
    "team": "Manchester City",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Germany"
  },
  {
    "fullName": "Jack Grealish",
    "team": "Manchester City",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Rodri",
    "team": "Manchester City",
    "number": 16,
    "position": "Midfielder",
    "nationality": "Spain"
  },
  {
    "fullName": "Kevin De Bruyne",
    "team": "Manchester City",
    "number": 17,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Bernardo Silva",
    "team": "Manchester City",
    "number": 20,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Phil Foden",
    "team": "Manchester City",
    "number": 47,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Cole Palmer",
    "team": "Manchester City",
    "number": 80,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Kalvin Phillips",
    "team": "Manchester City",
    "number": 4,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Yangel Herrera",
    "team": "Manchester City",
    "number": "-",
    "position": "Midfielder",
    "nationality": "Venezuela"
  },
  {
    "fullName": "Sergio Gomez",
    "team": "Manchester City",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Spain"
  },
  {
    "fullName": "Ben Knight",
    "team": "Manchester City",
    "number": 96,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Riyad Mahrez",
    "team": "Manchester City",
    "number": 26,
    "position": "Forward",
    "nationality": "Algeria"
  },
  {
    "fullName": "Erling Haaland",
    "team": "Manchester City",
    "number": 9,
    "position": "Forward",
    "nationality": "Norway"
  },
  {
    "fullName": "Julian Alvarez",
    "team": "Manchester City",
    "number": 19,
    "position": "Forward",
    "nationality": "Argentina"
  },
  {
    "fullName": "David de Gea",
    "team": "Manchester United",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Spain"
  },
  {
    "fullName": "Tom Heaton",
    "team": "Manchester United",
    "number": 22,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Martin Dubravka",
    "team": "Manchester United",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "Slovakia"
  },
  {
    "fullName": "Radek Vitek",
    "team": "Manchester United",
    "number": 50,
    "position": "Goalkeeper",
    "nationality": "Czech Republic"
  },
  {
    "fullName": "Nathan Bishop",
    "team": "Manchester United",
    "number": 30,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Victor Lindelof",
    "team": "Manchester United",
    "number": 2,
    "position": "Defender",
    "nationality": "Sweden"
  },
  {
    "fullName": "Phil Jones",
    "team": "Manchester United",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Harry Maguire",
    "team": "Manchester United",
    "number": 5,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Raphael Varane",
    "team": "Manchester United",
    "number": 19,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Diogo Dalot",
    "team": "Manchester United",
    "number": 20,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Luke Shaw",
    "team": "Manchester United",
    "number": 23,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Aaron Wan-Bissaka",
    "team": "Manchester United",
    "number": 29,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Brandon Williams",
    "team": "Manchester United",
    "number": 33,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Axel Tuanzebe",
    "team": "Manchester United",
    "number": 38,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Tyrell Malacia",
    "team": "Manchester United",
    "number": 12,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Lisandro Martinez",
    "team": "Manchester United",
    "number": 6,
    "position": "Defender",
    "nationality": "Argentina"
  },
  {
    "fullName": "Teden Mengi",
    "team": "Manchester United",
    "number": 43,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Tyler Fredricson",
    "team": "Manchester United",
    "number": 80,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Fred",
    "team": "Manchester United",
    "number": 17,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Bruno Fernandes",
    "team": "Manchester United",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Scott McTominay",
    "team": "Manchester United",
    "number": 39,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Alejandro Garnacho",
    "team": "Manchester United",
    "number": 49,
    "position": "Midfielder",
    "nationality": "Argentina"
  },
  {
    "fullName": "Facundo Pellistri",
    "team": "Manchester United",
    "number": 28,
    "position": "Midfielder",
    "nationality": "Uruguay"
  },
  {
    "fullName": "Donny van de Beek",
    "team": "Manchester United",
    "number": 34,
    "position": "Midfielder",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Christian Eriksen",
    "team": "Manchester United",
    "number": 14,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Casemiro",
    "team": "Manchester United",
    "number": 18,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Zidane Iqbal",
    "team": "Manchester United",
    "number": 55,
    "position": "Midfielder",
    "nationality": "Iraq"
  },
  {
    "fullName": "Kobbie Mainoo",
    "team": "Manchester United",
    "number": 73,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Cristiano Ronaldo",
    "team": "Manchester United",
    "number": 7,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Marcus Rashford",
    "team": "Manchester United",
    "number": 10,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Jadon Sancho",
    "team": "Manchester United",
    "number": 25,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Anthony Elanga",
    "team": "Manchester United",
    "number": 36,
    "position": "Forward",
    "nationality": "Sweden"
  },
  {
    "fullName": "Anthony Martial",
    "team": "Manchester United",
    "number": 9,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Shola Shoretire",
    "team": "Manchester United",
    "number": 47,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Antony",
    "team": "Manchester United",
    "number": 21,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Charlie McNeill",
    "team": "Manchester United",
    "number": 56,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Karl Darlow",
    "team": "Newcastle United",
    "number": 26,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Mark Gillespie",
    "team": "Newcastle United",
    "number": 29,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Nick Pope",
    "team": "Newcastle United",
    "number": 22,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Loris Karius",
    "team": "Newcastle United",
    "number": 18,
    "position": "Goalkeeper",
    "nationality": "Germany"
  },
  {
    "fullName": "Paul Dummett",
    "team": "Newcastle United",
    "number": 3,
    "position": "Defender",
    "nationality": "Wales"
  },
  {
    "fullName": "Fabian Schar",
    "team": "Newcastle United",
    "number": 5,
    "position": "Defender",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Jamaal Lascelles",
    "team": "Newcastle United",
    "number": 6,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jamal Lewis",
    "team": "Newcastle United",
    "number": 12,
    "position": "Defender",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Kieran Trippier",
    "team": "Newcastle United",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Emil Krafth",
    "team": "Newcastle United",
    "number": 17,
    "position": "Defender",
    "nationality": "Sweden"
  },
  {
    "fullName": "Javier Manquillo",
    "team": "Newcastle United",
    "number": 19,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Dan Burn",
    "team": "Newcastle United",
    "number": 33,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Sven Botman",
    "team": "Newcastle United",
    "number": 4,
    "position": "Defender",
    "nationality": "Netherlands"
  },
  {
    "fullName": "Matt Targett",
    "team": "Newcastle United",
    "number": 13,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Jonjo Shelvey",
    "team": "Newcastle United",
    "number": 8,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Matt Ritchie",
    "team": "Newcastle United",
    "number": 11,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Ryan Fraser",
    "team": "Newcastle United",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Jacob Murphy",
    "team": "Newcastle United",
    "number": 23,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Miguel Almiron",
    "team": "Newcastle United",
    "number": 24,
    "position": "Midfielder",
    "nationality": "Paraguay"
  },
  {
    "fullName": "Joe Willock",
    "team": "Newcastle United",
    "number": 28,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Sean Longstaff",
    "team": "Newcastle United",
    "number": 36,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Bruno Guimaraes",
    "team": "Newcastle United",
    "number": 39,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Elliot Anderson",
    "team": "Newcastle United",
    "number": 32,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Joelinton",
    "team": "Newcastle United",
    "number": 7,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Callum Wilson",
    "team": "Newcastle United",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Allan Saint-Maximin",
    "team": "Newcastle United",
    "number": 10,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Chris Wood",
    "team": "Newcastle United",
    "number": 20,
    "position": "Forward",
    "nationality": "New Zealand"
  },
  {
    "fullName": "Alexander Isak",
    "team": "Newcastle United",
    "number": 14,
    "position": "Forward",
    "nationality": "Sweden"
  },
  {
    "fullName": "Jordan Smith",
    "team": "Nottingham Forest",
    "number": 12,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Dean Henderson",
    "team": "Nottingham Forest",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Wayne Hennessey",
    "team": "Nottingham Forest",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Wales"
  },
  {
    "fullName": "Keehan Willows",
    "team": "Nottingham Forest",
    "number": "-",
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Joe Worrall",
    "team": "Nottingham Forest",
    "number": 4,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Loic Mbe Soh",
    "team": "Nottingham Forest",
    "number": 6,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Scott McKenna",
    "team": "Nottingham Forest",
    "number": 26,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Steve Cook",
    "team": "Nottingham Forest",
    "number": 3,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Giulian Biancone",
    "team": "Nottingham Forest",
    "number": 2,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Moussa Niakhate",
    "team": "Nottingham Forest",
    "number": 19,
    "position": "Defender",
    "nationality": "Senegal"
  },
  {
    "fullName": "Omar Richards",
    "team": "Nottingham Forest",
    "number": 27,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Neco Williams",
    "team": "Nottingham Forest",
    "number": 7,
    "position": "Defender",
    "nationality": "Wales"
  },
  {
    "fullName": "Harry Toffolo",
    "team": "Nottingham Forest",
    "number": 15,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Zach Abbott",
    "team": "Nottingham Forest",
    "number": 46,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Aaron Donnelly",
    "team": "Nottingham Forest",
    "number": 50,
    "position": "Defender",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Renan Lodi",
    "team": "Nottingham Forest",
    "number": 32,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Willy Boly",
    "team": "Nottingham Forest",
    "number": 30,
    "position": "Defender",
    "nationality": "Cote D’Ivoire"
  },
  {
    "fullName": "Loic Bade",
    "team": "Nottingham Forest",
    "number": 28,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Serge Aurier",
    "team": "Nottingham Forest",
    "number": 24,
    "position": "Defender",
    "nationality": "Cote D’Ivoire"
  },
  {
    "fullName": "Jack Colback",
    "team": "Nottingham Forest",
    "number": 8,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Cafu",
    "team": "Nottingham Forest",
    "number": 18,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Ryan Yates",
    "team": "Nottingham Forest",
    "number": 22,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Harry Arter",
    "team": "Nottingham Forest",
    "number": 31,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Lewis O'Brien",
    "team": "Nottingham Forest",
    "number": 14,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Jesse Lingard",
    "team": "Nottingham Forest",
    "number": 11,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Oliver Hammond",
    "team": "Nottingham Forest",
    "number": 41,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Orel Mangala",
    "team": "Nottingham Forest",
    "number": 5,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Cheikhou Kouyate",
    "team": "Nottingham Forest",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Senegal"
  },
  {
    "fullName": "Remo Freuler",
    "team": "Nottingham Forest",
    "number": 23,
    "position": "Midfielder",
    "nationality": "Switzerland"
  },
  {
    "fullName": "Morgan Gibbs-White",
    "team": "Nottingham Forest",
    "number": 10,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Alexander Gibson-Hammond",
    "team": "Nottingham Forest",
    "number": 55,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Billy Fewster",
    "team": "Nottingham Forest",
    "number": 45,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Sam Surridge",
    "team": "Nottingham Forest",
    "number": 16,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Brennan Johnson",
    "team": "Nottingham Forest",
    "number": 20,
    "position": "Forward",
    "nationality": "Wales"
  },
  {
    "fullName": "Taiwo Awoniyi",
    "team": "Nottingham Forest",
    "number": 9,
    "position": "Forward",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Lyle Taylor",
    "team": "Nottingham Forest",
    "number": 33,
    "position": "Forward",
    "nationality": "Montserrat"
  },
  {
    "fullName": "Emmanuel Dennis",
    "team": "Nottingham Forest",
    "number": 25,
    "position": "Forward",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Dale Taylor",
    "team": "Nottingham Forest",
    "number": 36,
    "position": "Forward",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Alex McCarthy",
    "team": "Southampton",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Willy Caballero",
    "team": "Southampton",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Argentina"
  },
  {
    "fullName": "Gavin Bazunu",
    "team": "Southampton",
    "number": 31,
    "position": "Goalkeeper",
    "nationality": "Ireland"
  },
  {
    "fullName": "Kyle Walker-Peters",
    "team": "Southampton",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Lyanco",
    "team": "Southampton",
    "number": 4,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Romain Perraud",
    "team": "Southampton",
    "number": 15,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Tino Livramento",
    "team": "Southampton",
    "number": 21,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Mohammed Salisu",
    "team": "Southampton",
    "number": 22,
    "position": "Defender",
    "nationality": "Ghana"
  },
  {
    "fullName": "Armel Bella-Kotchap",
    "team": "Southampton",
    "number": 37,
    "position": "Defender",
    "nationality": "Germany"
  },
  {
    "fullName": "Lewis Payne",
    "team": "Southampton",
    "number": 61,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Duje Caleta-Car",
    "team": "Southampton",
    "number": 6,
    "position": "Defender",
    "nationality": "Croatia"
  },
  {
    "fullName": "Juan Larios",
    "team": "Southampton",
    "number": 28,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Nico Lawrence",
    "team": "Southampton",
    "number": 59,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "James Ward-Prowse",
    "team": "Southampton",
    "number": 8,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Stuart Armstrong",
    "team": "Southampton",
    "number": 17,
    "position": "Midfielder",
    "nationality": "Scotland"
  },
  {
    "fullName": "Moussa Djenepo",
    "team": "Southampton",
    "number": 19,
    "position": "Midfielder",
    "nationality": "Mali"
  },
  {
    "fullName": "Mohamed Elyounoussi",
    "team": "Southampton",
    "number": 24,
    "position": "Midfielder",
    "nationality": "Norway"
  },
  {
    "fullName": "Ibrahima Diallo",
    "team": "Southampton",
    "number": 27,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Romeo Lavia",
    "team": "Southampton",
    "number": 45,
    "position": "Midfielder",
    "nationality": "Belgium"
  },
  {
    "fullName": "Joe Aribo",
    "team": "Southampton",
    "number": 7,
    "position": "Midfielder",
    "nationality": "Nigeria"
  },
  {
    "fullName": "Diamond Edwards",
    "team": "Southampton",
    "number": 66,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Ainsley Maitland-Niles",
    "team": "Southampton",
    "number": 3,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Ryan Finnigan",
    "team": "Southampton",
    "number": 50,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Adam Armstrong",
    "team": "Southampton",
    "number": 9,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Che Adams",
    "team": "Southampton",
    "number": 10,
    "position": "Forward",
    "nationality": "Scotland"
  },
  {
    "fullName": "Theo Walcott",
    "team": "Southampton",
    "number": 32,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Sekou Mara",
    "team": "Southampton",
    "number": 18,
    "position": "Forward",
    "nationality": "France"
  },
  {
    "fullName": "Dominic Ballard",
    "team": "Southampton",
    "number": 66,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Samuel Edozie",
    "team": "Southampton",
    "number": 23,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Jimmy Morgan",
    "team": "Southampton",
    "number": 46,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Hugo Lloris",
    "team": "Tottenham Hotspur",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "France"
  },
  {
    "fullName": "Brandon Austin",
    "team": "Tottenham Hotspur",
    "number": 40,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Fraser Forster",
    "team": "Tottenham Hotspur",
    "number": 20,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Matt Doherty",
    "team": "Tottenham Hotspur",
    "number": 2,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "Cristian Romero",
    "team": "Tottenham Hotspur",
    "number": 17,
    "position": "Defender",
    "nationality": "Argentina"
  },
  {
    "fullName": "Davinson Sanchez",
    "team": "Tottenham Hotspur",
    "number": 6,
    "position": "Defender",
    "nationality": "Colombia"
  },
  {
    "fullName": "Emerson Royal",
    "team": "Tottenham Hotspur",
    "number": 12,
    "position": "Defender",
    "nationality": "Brazil"
  },
  {
    "fullName": "Eric Dier",
    "team": "Tottenham Hotspur",
    "number": 15,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Japhet Tanganga",
    "team": "Tottenham Hotspur",
    "number": 25,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Ben Davies",
    "team": "Tottenham Hotspur",
    "number": 33,
    "position": "Defender",
    "nationality": "Wales"
  },
  {
    "fullName": "Clement Lenglet",
    "team": "Tottenham Hotspur",
    "number": 34,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Djed Spence",
    "team": "Tottenham Hotspur",
    "number": 24,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Pierre-Emile Højbjerg",
    "team": "Tottenham Hotspur",
    "number": 5,
    "position": "Midfielder",
    "nationality": "Denmark"
  },
  {
    "fullName": "Ryan Sessegnon",
    "team": "Tottenham Hotspur",
    "number": 19,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Dejan Kulusevski",
    "team": "Tottenham Hotspur",
    "number": 21,
    "position": "Midfielder",
    "nationality": "Sweden"
  },
  {
    "fullName": "Oliver Skipp",
    "team": "Tottenham Hotspur",
    "number": 4,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Rodrigo Bentancur",
    "team": "Tottenham Hotspur",
    "number": 30,
    "position": "Midfielder",
    "nationality": "Uruguay"
  },
  {
    "fullName": "Ivan Perisic",
    "team": "Tottenham Hotspur",
    "number": 14,
    "position": "Midfielder",
    "nationality": "Croatia"
  },
  {
    "fullName": "Yves Bissouma",
    "team": "Tottenham Hotspur",
    "number": 38,
    "position": "Midfielder",
    "nationality": "Mali"
  },
  {
    "fullName": "Pape Sarr",
    "team": "Tottenham Hotspur",
    "number": 29,
    "position": "Midfielder",
    "nationality": "Senegal"
  },
  {
    "fullName": "Harvey White",
    "team": "Tottenham Hotspur",
    "number": 42,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Son Heung-Min",
    "team": "Tottenham Hotspur",
    "number": 7,
    "position": "Forward",
    "nationality": "South Korea"
  },
  {
    "fullName": "Harry Kane",
    "team": "Tottenham Hotspur",
    "number": 10,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Lucas Moura",
    "team": "Tottenham Hotspur",
    "number": 27,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Bryan Gil",
    "team": "Tottenham Hotspur",
    "number": 11,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Richarlison",
    "team": "Tottenham Hotspur",
    "number": 9,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Lukasz Fabianski",
    "team": "West Ham United",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Poland"
  },
  {
    "fullName": "Darren Randolph",
    "team": "West Ham United",
    "number": 35,
    "position": "Goalkeeper",
    "nationality": "Ireland"
  },
  {
    "fullName": "Alphonse Areola",
    "team": "West Ham United",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "France"
  },
  {
    "fullName": "Krisztian Hegyi",
    "team": "West Ham United",
    "number": 47,
    "position": "Goalkeeper",
    "nationality": "Hungary"
  },
  {
    "fullName": "Aaron Cresswell",
    "team": "West Ham United",
    "number": 3,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Kurt Zouma",
    "team": "West Ham United",
    "number": 4,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Vladimir Coufal",
    "team": "West Ham United",
    "number": 5,
    "position": "Defender",
    "nationality": "Czech Republic"
  },
  {
    "fullName": "Craig Dawson",
    "team": "West Ham United",
    "number": 15,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Angelo Ogbonna",
    "team": "West Ham United",
    "number": 21,
    "position": "Defender",
    "nationality": "Italy"
  },
  {
    "fullName": "Ben Johnson",
    "team": "West Ham United",
    "number": 2,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Nayef Aguerd",
    "team": "West Ham United",
    "number": 27,
    "position": "Defender",
    "nationality": "Morocco"
  },
  {
    "fullName": "Harrison Ashby",
    "team": "West Ham United",
    "number": 50,
    "position": "Defender",
    "nationality": "Scotland"
  },
  {
    "fullName": "Thilo Kehrer",
    "team": "West Ham United",
    "number": 24,
    "position": "Defender",
    "nationality": "Germany"
  },
  {
    "fullName": "Jamal Baptiste",
    "team": "West Ham United",
    "number": 75,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Emerson",
    "team": "West Ham United",
    "number": 33,
    "position": "Defender",
    "nationality": "Italy"
  },
  {
    "fullName": "Regan Clayton",
    "team": "West Ham United",
    "number": 71,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Michael Forbes",
    "team": "West Ham United",
    "number": 65,
    "position": "Defender",
    "nationality": "Northern Ireland"
  },
  {
    "fullName": "Kaelan Casey",
    "team": "West Ham United",
    "number": 70,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Pablo Fornals",
    "team": "West Ham United",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Spain"
  },
  {
    "fullName": "Manuel Lanzini",
    "team": "West Ham United",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Argentina"
  },
  {
    "fullName": "Tomas Soucek",
    "team": "West Ham United",
    "number": 28,
    "position": "Midfielder",
    "nationality": "Czech Republic"
  },
  {
    "fullName": "Declan Rice",
    "team": "West Ham United",
    "number": 41,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Conor Coventry",
    "team": "West Ham United",
    "number": 32,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Flynn Downes",
    "team": "West Ham United",
    "number": 12,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Pierre Ekwah",
    "team": "West Ham United",
    "number": 46,
    "position": "Midfielder",
    "nationality": "France"
  },
  {
    "fullName": "Kamarai Simon-Swyer",
    "team": "West Ham United",
    "number": 58,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Lucas Paqueta",
    "team": "West Ham United",
    "number": 11,
    "position": "Midfielder",
    "nationality": "Brazil"
  },
  {
    "fullName": "Freddie Potts",
    "team": "West Ham United",
    "number": 62,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Oliver Scarles",
    "team": "West Ham United",
    "number": 68,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Keenan Appiah-Forson",
    "team": "West Ham United",
    "number": 59,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Lewis Orford",
    "team": "West Ham United",
    "number": 75,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Michail Antonio",
    "team": "West Ham United",
    "number": 9,
    "position": "Forward",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Jarrod Bowen",
    "team": "West Ham United",
    "number": 20,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Said Benrahma",
    "team": "West Ham United",
    "number": 22,
    "position": "Forward",
    "nationality": "Algeria"
  },
  {
    "fullName": "Gianluca Scamacca",
    "team": "West Ham United",
    "number": 7,
    "position": "Forward",
    "nationality": "Italy"
  },
  {
    "fullName": "Maxwel Cornet",
    "team": "West Ham United",
    "number": 14,
    "position": "Forward",
    "nationality": "Cote D’Ivoire"
  },
  {
    "fullName": "Divin Mubama",
    "team": "West Ham United",
    "number": 72,
    "position": "Forward",
    "nationality": "England"
  },
  {
    "fullName": "Matija Sarkic",
    "team": "Wolverhampton Wanderers",
    "number": 13,
    "position": "Goalkeeper",
    "nationality": "Montenegro"
  },
  {
    "fullName": "Jose Sa",
    "team": "Wolverhampton Wanderers",
    "number": 1,
    "position": "Goalkeeper",
    "nationality": "Portugal"
  },
  {
    "fullName": "Jackson Smith",
    "team": "Wolverhampton Wanderers",
    "number": 55,
    "position": "Goalkeeper",
    "nationality": "England"
  },
  {
    "fullName": "Rayan Ait-Nouri",
    "team": "Wolverhampton Wanderers",
    "number": 3,
    "position": "Defender",
    "nationality": "France"
  },
  {
    "fullName": "Yerson Mosquera",
    "team": "Wolverhampton Wanderers",
    "number": 14,
    "position": "Defender",
    "nationality": "Colombia"
  },
  {
    "fullName": "Jonny",
    "team": "Wolverhampton Wanderers",
    "number": 19,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Nelson Semedo",
    "team": "Wolverhampton Wanderers",
    "number": 22,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Maximilian Kilman",
    "team": "Wolverhampton Wanderers",
    "number": 23,
    "position": "Defender",
    "nationality": "England"
  },
  {
    "fullName": "Toti",
    "team": "Wolverhampton Wanderers",
    "number": 24,
    "position": "Defender",
    "nationality": "Portugal"
  },
  {
    "fullName": "Nathan Collins",
    "team": "Wolverhampton Wanderers",
    "number": 4,
    "position": "Defender",
    "nationality": "Ireland"
  },
  {
    "fullName": "Hugo Bueno",
    "team": "Wolverhampton Wanderers",
    "number": 64,
    "position": "Defender",
    "nationality": "Spain"
  },
  {
    "fullName": "Dexter Lembikisa",
    "team": "Wolverhampton Wanderers",
    "number": 81,
    "position": "Defender",
    "nationality": "Jamaica"
  },
  {
    "fullName": "Ruben Neves",
    "team": "Wolverhampton Wanderers",
    "number": 8,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Daniel Podence",
    "team": "Wolverhampton Wanderers",
    "number": 10,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Joao Moutinho",
    "team": "Wolverhampton Wanderers",
    "number": 28,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Connor Ronan",
    "team": "Wolverhampton Wanderers",
    "number": 25,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Joseph Hodge",
    "team": "Wolverhampton Wanderers",
    "number": 59,
    "position": "Midfielder",
    "nationality": "Ireland"
  },
  {
    "fullName": "Matheus Nunes",
    "team": "Wolverhampton Wanderers",
    "number": 27,
    "position": "Midfielder",
    "nationality": "Portugal"
  },
  {
    "fullName": "Boubacar Traore",
    "team": "Wolverhampton Wanderers",
    "number": 6,
    "position": "Midfielder",
    "nationality": "Mali"
  },
  {
    "fullName": "Chem Campbell",
    "team": "Wolverhampton Wanderers",
    "number": 77,
    "position": "Midfielder",
    "nationality": "Wales"
  },
  {
    "fullName": "Harvey Griffiths",
    "team": "Wolverhampton Wanderers",
    "number": 66,
    "position": "Midfielder",
    "nationality": "England"
  },
  {
    "fullName": "Pedro Neto",
    "team": "Wolverhampton Wanderers",
    "number": 7,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Raul Jimenez",
    "team": "Wolverhampton Wanderers",
    "number": 9,
    "position": "Forward",
    "nationality": "Mexico"
  },
  {
    "fullName": "Chiquinho",
    "team": "Wolverhampton Wanderers",
    "number": 20,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Hwang Hee-Chan",
    "team": "Wolverhampton Wanderers",
    "number": 11,
    "position": "Forward",
    "nationality": "South Korea"
  },
  {
    "fullName": "Adama Traore",
    "team": "Wolverhampton Wanderers",
    "number": 37,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Leo Bonatini",
    "team": "Wolverhampton Wanderers",
    "number": 33,
    "position": "Forward",
    "nationality": "Brazil"
  },
  {
    "fullName": "Goncalo Guedes",
    "team": "Wolverhampton Wanderers",
    "number": 17,
    "position": "Forward",
    "nationality": "Portugal"
  },
  {
    "fullName": "Sasa Kalajdzic",
    "team": "Wolverhampton Wanderers",
    "number": 18,
    "position": "Forward",
    "nationality": "Austria"
  },
  {
    "fullName": "Diego Costa",
    "team": "Wolverhampton Wanderers",
    "number": 29,
    "position": "Forward",
    "nationality": "Spain"
  },
  {
    "fullName": "Nathan Fraser",
    "team": "Wolverhampton Wanderers",
    "number": 63,
    "position": "Forward",
    "nationality": "Ireland"
  }
]

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/teams", (req, res) => {
  res.json([
    {
      "name": "Arsenal",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t3.svg"
    },
    {
      "name": "Aston Villa",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t7.svg"
    },
    {
      "name": "Bournemouth",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t91.svg"
    },
    {
      "name": "Brentford",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t94.svg"
    },
    {
      "name": "Brighton and Hove Albion",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t36.svg"
    },
    {
      "name": "Chelsea",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t8.svg"
    },
    {
      "name": "Crystal Palace",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t31.svg"
    },
    {
      "name": "Everton",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t11.svg"
    },
    {
      "name": "Fulham",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t54.svg"
    },
    {
      "name": "Leeds United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t2.svg"
    },
    {
      "name": "Leicester City",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t13.svg"
    },
    {
      "name": "Liverpool",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t14.svg"
    },
    {
      "name": "Manchester City",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t43.svg"
    },
    {
      "name": "Manchester United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t1.svg"
    },
    {
      "name": "Newcastle United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t4.svg"
    },
    {
      "name": "Nottingham Forest",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t17.svg"
    },
    {
      "name": "Southampton",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t20.svg"
    },
    {
      "name": "Tottenham Hotspur",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t6.svg"
    },
    {
      "name": "West Ham United",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t21.svg"
    },
    {
      "name": "Wolverhampton Wanderers",
      "imgURL": "https://resources.premierleague.com/premierleague/badges/t39.svg"
    }
  ]);
});

router.get("/players", (req, res) => {
  res.json(players);
});


router.get("/search", (req, res) => {
  const filters = req.query;
  const filteredUsers = players.filter(player => {
    let isValid = true;
    for (key in filters) {
      isValid = isValid && player[key].toLowerCase().includes(filters[key].toLowerCase());
    }
    return isValid;
  });
  res.json(filteredUsers);
});


app.use(`/.netlify/functions/api`, router);
app.use(cors(corsOptions));


module.exports = app;
module.exports.handler = serverless(app);

 

