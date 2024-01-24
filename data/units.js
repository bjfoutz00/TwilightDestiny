let units = [
    { 'name': 'Space Dock I', 'cost': null, 'combat': null, 'move': 0, 'capacity': 3, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {2: true}, 'production': 2, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Space Dock II', 'cost': null, 'combat': null, 'move': 0, 'capacity': 3, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {2: true}, 'production': 4, 'transportable': false, 'tech': {1: 2}, 'img': '' },
    { 'name': 'Floating Factory I', 'cost': null, 'combat': null, 'move': 1, 'capacity': 4, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {2: true}, 'production': 5, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Floating Factory II', 'cost': null, 'combat': null, 'move': 2, 'capacity': 5, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {2: true}, 'production': 7, 'transportable': false, 'tech': {1: 2}, 'img': '' },
    { 'name': 'PDS I', 'cost': null, 'combat': null, 'move': 0, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': [6, 1], 'type': {2: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'PDS II', 'cost': null, 'combat': null, 'move': 0, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': [5, 1], 'type': {2: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Infantry I', 'cost': 0.5, 'combat': [8, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 0, 'transportable': true, 'tech': null, 'img': '' },
    { 'name': 'Infantry II', 'cost': 0.5, 'combat': [7, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 0, 'transportable': true, 'tech': {2: 2}, 'img': '' },
    { 'name': 'Letani Warrior I', 'cost': 0.5, 'combat': [8, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 1, 'transportable': true, 'tech': null, 'img': '' },
    { 'name': 'Letani Warrior II', 'cost': 0.5, 'combat': [7, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 2, 'transportable': true, 'tech': {2: 2}, 'img': '' },
    { 'name': 'Spec Ops I', 'cost': 0.5, 'combat': [7, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 0, 'transportable': true, 'tech': null, 'img': '' },
    { 'name': 'Spec Ops II', 'cost': 0.5, 'combat': [6, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {1: true}, 'production': 0, 'transportable': true, 'tech': {2: 2}, 'img': '' },
    { 'name': 'Fighter I', 'cost': 0.5, 'combat': [9, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': true, 'tech': null, 'img': '' },
    { 'name': 'Fighter II', 'cost': 0.5, 'combat': [8, 1], 'move': 2, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': true, 'tech': {2: 1, 3: 1}, 'img': '' },
    { 'name': 'Hybrid Crystal Fighter I', 'cost': 0.5, 'combat': [8, 1], 'move': null, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': true, 'tech': null, 'img': '' },
    { 'name': 'Hybrid Crystal Fighter II', 'cost': 0.5, 'combat': [7, 1], 'move': 2, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': true, 'tech': {2: 1, 3: 1}, 'img': '' },
    { 'name': 'Destroyer I', 'cost': 1, 'combat': [9, 1], 'move': 2, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': [9, 2], 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Destroyer II', 'cost': 1, 'combat': [8, 1], 'move': 2, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': [6, 3], 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {0: 2}, 'img': '' },
    { 'name': 'Cruiser I', 'cost': 2, 'combat': [7, 1], 'move': 2, 'capacity': 0, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Cruiser II', 'cost': 2, 'combat': [6, 1], 'move': 3, 'capacity': 1, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {0: 1, 1: 1, 2: 1}, 'img': '' },
    { 'name': 'Carrier I', 'cost': 3, 'combat': [9, 1], 'move': 1, 'capacity': 4, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Carrier II', 'cost': 3, 'combat': [9, 1], 'move': 2, 'capacity': 6, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {3: 2}, 'img': '' },
    { 'name': 'Advanced Carrier I', 'cost': 3, 'combat': [9, 1], 'move': 1, 'capacity': 6, 'sustainDamage': false, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {3: 2}, 'img': '' },
    { 'name': 'Advanced Carrier II', 'cost': 3, 'combat': [9, 1], 'move': 2, 'capacity': 8, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Dreadnought I', 'cost': 4, 'combat': [5, 1], 'move': 1, 'capacity': 1, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [5, 1], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Dreadnought II', 'cost': 4, 'combat': [5, 1], 'move': 2, 'capacity': 1, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [5, 1], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {1: 1, 3: 2}, 'img': '' },
    { 'name': 'Super Dreadnought I', 'cost': 4, 'combat': [5, 1], 'move': 1, 'capacity': 2, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [5, 1], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Super Dreadnought II', 'cost': 4, 'combat': [4, 1], 'move': 2, 'capacity': 2, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [4, 1], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {1: 1, 3: 2}, 'img': '' },
    { 'name': 'Exotrireme I', 'cost': 4, 'combat': [5, 1], 'move': 1, 'capacity': 1, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [4, 2], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Exotrireme II', 'cost': 4, 'combat': [5, 1], 'move': 2, 'capacity': 1, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [4, 2], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {1: 1, 3: 2}, 'img': '' },
    { 'name': 'War Sun', 'cost': 12, 'combat': [3, 3], 'move': 2, 'capacity': 6, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [3, 3], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {0: 3, 1: 1}, 'img': '' },
    { 'name': 'Prototype War Sun I', 'cost': 12, 'combat': [5, 3], 'move': 1, 'capacity': 6, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [3, 3], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },
    { 'name': 'Prototype War Sun II', 'cost': 10, 'combat': [3, 3], 'move': 3, 'capacity': 6, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [3, 3], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': {0: 3, 1: 1}, 'img': '' },
    { 'name': 'C\'Morran N\'orr', 'cost': 8, 'combat': [6, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Duha Menaimon', 'cost': 8, 'combat': [7, 2], 'move': 1, 'capacity': 5, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Arc Secundus', 'cost': 8, 'combat': [5, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': [5, 3], 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Son of Ragh', 'cost': 8, 'combat': [5, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': [6, 4], 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'The Inferno', 'cost': 8, 'combat': [5, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Wrath of Kenara', 'cost': 8, 'combat': [7, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Genesis', 'cost': 8, 'combat': [5, 2], 'move': 1, 'capacity': 12, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Hil Colish', 'cost': 8, 'combat': [5, 1], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': '[0.0.1]', 'cost': 8, 'combat': [5, 2], 'move': 1, 'capacity': 5, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Fourth Moon', 'cost': 8, 'combat': [7, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Matriarch', 'cost': 8, 'combat': [9, 2], 'move': 1, 'capacity': 6, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'The Alastor', 'cost': 8, 'combat': [9, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'J.N.S. Hylarim', 'cost': 8, 'combat': [6, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Salai Sai Corian', 'cost': 8, 'combat': [7, 1], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Loncara Ssodu', 'cost': 8, 'combat': [7, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': [5, 3], 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Van Hauge', 'cost': 8, 'combat': [9, 2], 'move': 1, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
    { 'name': 'Y\'sia Y\'ssrila', 'cost': 8, 'combat': [5, 2], 'move': 2, 'capacity': 3, 'sustainDamage': true, 'antiFighterBarrage': null, 'bombardment': null, 'spaceCannon': null, 'type': {0: true}, 'production': 0, 'transportable': false, 'tech': null, 'img': '' },  
]

// add limit field

// type enum:
// 0: ship
// 1: ground force
// 2: structure

// type field: dict for each of enums as keys, true or false for values. This way the Titans of Ul can have multiple types when expansion is added


// if movement 0, stays
// if movement null, must be carried

// add type en{u: true}m? structure, ship, ground force

// special:
// production same for all units. need to make sure space dock's production value is *added*

// pds II's space cannon is deep space cannon. PDS have planetary shield (only type of{ : true}unit with that ability, so didn't include)

// if transportable is true, can be carried. if movement is null, has to be carried