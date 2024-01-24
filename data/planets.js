const planets = [
    { 'systemId': 18, 'name': 'Mecatol Rex', 'resources': 1, 'influence': 6, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 38, 'name': 'Abyz', 'resources': 3, 'influence': 0, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 38, 'name': 'Fria', 'resources': 2, 'influence': 0, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 37, 'name': 'Arinam', 'resources': 1, 'influence': 2, 'tech': null, 'trait': 1, 'img': '' },
    { 'systemId': 37, 'name': 'Meer', 'resources': 0, 'influence': 4, 'tech': 0, 'trait': 0, 'img': '' },
    { 'systemId': 36, 'name': 'Arnor', 'resources': 2, 'influence': 1, 'tech': null, 'trait': 1, 'img': '' },
    { 'systemId': 36, 'name': 'Lor', 'resources': 1, 'influence': 2, 'tech': null, 'trait': 1, 'img': '' },
    { 'systemId': 35, 'name': 'Bereg', 'resources': 3, 'influence': 1, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 35, 'name': 'Lirta IV', 'resources': 2, 'influence': 3, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 34, 'name': 'Centauri', 'resources': 1, 'influence': 3, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 34, 'name': 'Gral', 'resources': 1, 'influence': 1, 'tech': 3, 'trait': 1, 'img': '' },
    { 'systemId': 33, 'name': 'Coorneeq', 'resources': 1, 'influence': 2, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 33, 'name': 'Resculon', 'resources': 2, 'influence': 0, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 32, 'name': 'Dal Bootha', 'resources': 0, 'influence': 2, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 32, 'name': 'Xxehan', 'resources': 1, 'influence': 1, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 31, 'name': 'Lazar', 'resources': 1, 'influence': 0, 'tech': 1, 'trait': 1, 'img': '' },
    { 'systemId': 31, 'name': 'Sakulag', 'resources': 2, 'influence': 1, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 26, 'name': 'Lodor', 'resources': 3, 'influence': 1, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 24, 'name': 'Mehar Xull', 'resources': 1, 'influence': 3, 'tech': 0, 'trait': 0, 'img': '' },
    { 'systemId': 30, 'name': 'Mellon', 'resources': 0, 'influence': 2, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 30, 'name': 'Zohbat', 'resources': 3, 'influence': 1, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 27, 'name': 'New Albion', 'resources': 1, 'influence': 1, 'tech': 2, 'trait': 1, 'img': '' },
    { 'systemId': 27, 'name': 'Starpoint', 'resources': 3, 'influence': 1, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 25, 'name': 'Quann', 'resources': 2, 'influence': 1, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 29, 'name': 'Qucen\'n', 'resources': 1, 'influence': 2, 'tech': null, 'trait': 1, 'img': '' },
    { 'systemId': 29, 'name': 'Rarron', 'resources': 0, 'influence': 3, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 23, 'name': 'Saudor', 'resources': 2, 'influence': 2, 'tech': null, 'trait': 1, 'img': '' },
    { 'systemId': 22, 'name': 'Tar\'Mann', 'resources': 1, 'influence': 1, 'tech': 2, 'trait': 1, 'img': '' },
    { 'systemId': 28, 'name': 'Tequ\'ran', 'resources': 2, 'influence': 0, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 28, 'name': 'Torkan', 'resources': 0, 'influence': 3, 'tech': null, 'trait': 2, 'img': '' },
    { 'systemId': 21, 'name': 'Thibah', 'resources': 1, 'influence': 1, 'tech': 3, 'trait': 1, 'img': '' },
    { 'systemId': 20, 'name': 'Vefut II', 'resources': 2, 'influence': 2, 'tech': null, 'trait': 0, 'img': '' },
    { 'systemId': 19, 'name': 'Wellon', 'resources': 1, 'influence': 2, 'tech': 1, 'trait': 1, 'img': '' },
    // home systems
    { 'systemId': 5, 'name': 'Nestphar', 'resources': 3, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 10, 'name': 'Arc Prime', 'resources': 4, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 10, 'name': 'Wren Terra', 'resources': 2, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 11, 'name': 'Lisis II', 'resources': 1, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 11, 'name': 'Ragh', 'resources': 2, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 4, 'name': 'Muaat', 'resources': 4, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 16, 'name': 'Hercant', 'resources': 1, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 16, 'name': 'Arretze', 'resources': 2, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 16, 'name': 'Kamdorn', 'resources': 0, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 1, 'name': 'Jord', 'resources': 4, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 51, 'name': 'Creuss', 'resources': 4, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 6, 'name': '[0.0.0]', 'resources': 5, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 2, 'name': 'Moll Primus', 'resources': 4, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 9, 'name': 'Druaa', 'resources': 3, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 9, 'name': 'Maaluuk', 'resources': 0, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 8, 'name': 'Mordai II', 'resources': 4, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 13, 'name': 'Tren\'Lak', 'resources': 1, 'influence': 0, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 13, 'name': 'Quinarra', 'resources': 3, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 12, 'name': 'Jol', 'resources': 1, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 12, 'name': 'Nar', 'resources': 2, 'influence': 3, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 7, 'name': 'Winnu', 'resources': 3, 'influence': 4, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 14, 'name': 'Archon Ren', 'resources': 2, 'influence': 3, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 14, 'name': 'Archon Tau', 'resources': 1, 'influence': 1, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 3, 'name': 'Darien', 'resources': 4, 'influence': 4, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 15, 'name': 'Retillion', 'resources': 2, 'influence': 3, 'tech': null, 'trait': null, 'img': '' },
    { 'systemId': 15, 'name': 'Shalloq', 'resources': 1, 'influence': 2, 'tech': null, 'trait': null, 'img': '' },
]


//dynamic:
// ownerid, deploymentid, gameid, exhausted

// enums:
// tech
// - 0: red
// - 1: yellow
// - 2: green
// - 3: blue


// planet trait
// - 0: hazardous
// - 1: industrial
// - 2: cultural