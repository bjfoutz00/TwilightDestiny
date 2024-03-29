let tech = [
    { 'name': 'Plasma Scoring', 'type': 0, 'prereqs': {}, 'basic': true, 'img': '' },
    { 'name': 'Magen Defense Grid', 'type': 0, 'prereqs': {0: 1}, 'basic': true, 'img': '' },
    { 'name': 'Magen Defense Grid Ω', 'type': 0, 'prereqs': {0: 1}, 'basic': true, 'img': '' },
    { 'name': 'Duranium Armor', 'type': 0, 'prereqs': {0: 2}, 'basic': true, 'img': '' },
    { 'name': 'Assault Cannon', 'type': 0, 'prereqs': {0: 3}, 'basic': true, 'img': '' },
    { 'name': 'Sarween Tools', 'type': 1, 'prereqs': {}, 'basic': true, 'img': '' },
    { 'name': 'Graviton Laser System', 'type': 1, 'prereqs': {1: 1}, 'basic': true, 'img': '' },
    { 'name': 'Transit Diodes', 'type': 1, 'prereqs': {1: 2}, 'basic': true, 'img': '' },
    { 'name': 'Integrated Economy', 'type': 1, 'prereqs': {1: 3}, 'basic': true, 'img': '' },
    { 'name': 'Neural Motivator', 'type': 2, 'prereqs': {}, 'basic': true, 'img': '' },
    { 'name': 'Daxcive Animators', 'type': 2, 'prereqs': {2: 1}, 'basic': true, 'img': '' },
    { 'name': 'Hyper Metabolism', 'type': 2, 'prereqs': {2: 2}, 'basic': true, 'img': '' },
    { 'name': 'X-89 Bacterial Weapon', 'type': 2, 'prereqs': {2: 3}, 'basic': true, 'img': '' },
    { 'name': 'X-89 Bacterial Weapon Ω', 'type': 2, 'prereqs': {2: 3}, 'basic': true, 'img': '' },
    { 'name': 'Antimass Deflectors', 'type': 3, 'prereqs': {}, 'basic': true, 'img': '' },
    { 'name': 'Gravity Drive', 'type': 3, 'prereqs': {3: 1}, 'basic': true, 'img': '' },
    { 'name': 'Fleet Logistics', 'type': 3, 'prereqs': {3: 2}, 'basic': true, 'img': '' },
    { 'name': 'Light/Wave Deflector', 'type': 3, 'prereqs': {3: 3}, 'basic': true, 'img': '' },
    { 'name': 'Non-Euclidian Shielding', 'type': 0, 'prereqs': {0: 2}, 'basic': false, 'img': ''},
    { 'name': 'Magmus Reactor', 'type': 0, 'prereqs': {0: 2}, 'basic': false, 'img': ''},
    { 'name': 'Magmus Reactor Ω', 'type': 0, 'prereqs': {0: 2}, 'basic': false, 'img': ''},
    { 'name': 'Dimensional Splicer', 'type': 0, 'prereqs': {0: 1}, 'basic': false, 'img': ''},
    { 'name': 'Valkyrie Particle Weave', 'type': 0, 'prereqs': {0: 2}, 'basic': false, 'img': ''},
    { 'name': 'L4 Disruptors', 'type': 1, 'prereqs': {1: 1}, 'basic': false, 'img': ''},
    { 'name': 'Quantum Datahub Node', 'type': 1, 'prereqs': {1: 3}, 'basic': false, 'img': ''},
    { 'name': 'Inheritance Systems', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Salvage Operations', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Mirror Computing', 'type': 1, 'prereqs': {1: 3}, 'basic': false, 'img': ''},
    { 'name': 'E-Res Siphons', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Hegemonic Trade Policy', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Nullification Field', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Impulse Core', 'type': 1, 'prereqs': {1: 2}, 'basic': false, 'img': ''},
    { 'name': 'Bioplasmosis', 'type': 2, 'prereqs': {2: 2}, 'basic': false, 'img': ''},
    { 'name': 'Production Biomes', 'type': 2, 'prereqs': {2: 2}, 'basic': false, 'img': ''},
    { 'name': 'Neuroglaive', 'type': 2, 'prereqs': {2: 3}, 'basic': false, 'img': ''},
    { 'name': 'Instinct Training', 'type': 2, 'prereqs': {2: 1}, 'basic': false, 'img': ''},
    { 'name': 'Yin Spinner', 'type': 2, 'prereqs': {2: 2}, 'basic': false, 'img': ''},
    { 'name': 'Yin Spinner Ω', 'type': 2, 'prereqs': {2: 2}, 'basic': false, 'img': ''},
    { 'name': 'Transparasteel Plating', 'type': 2, 'prereqs': {2: 1}, 'basic': false, 'img': ''},
    { 'name': 'Mageon Implants', 'type': 2, 'prereqs': {2: 3}, 'basic': false, 'img': ''},
    { 'name': 'Chaos Mapping', 'type': 3, 'prereqs': {3: 1}, 'basic': false, 'img': ''},
    { 'name': 'Wormhole Generator', 'type': 3, 'prereqs': {3: 2}, 'basic': false, 'img': ''},
    { 'name': 'Wormhole Generator Ω', 'type': 3, 'prereqs': {3: 2}, 'basic': false, 'img': ''},
    { 'name': 'Spacial Conduit Cylinder', 'type': 3, 'prereqs': {3: 2}, 'basic': false, 'img': ''},
    { 'name': 'Lazax Gate Folding', 'type': 3, 'prereqs': {3: 2}, 'basic': false, 'img': ''},
]


// 0: red
// 1: yellow
// 2: green
// 3: blue