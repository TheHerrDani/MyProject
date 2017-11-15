"use strict"

var Elements = [{
		"name": "Hydrogen",
		"symbol": "H",
		"electronNegativity": 2.20,
		"OxidationState": [-1, 1],
		"selfbound": 2,
		"Material": "Nonmetal",
		"MeltingPoint":14.01,
		"BoilingPoint":20.28
	}, {
		"name": "Helium",
		"symbol": "He",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": 0,
		"Material": "Nonmetal",
		"MeltingPoint":-1,
		"BoilingPoint":4.22
	}, {
		"name": "Lithium",
		"symbol": "Li",
		"electronNegativity": 0.98,
		"OxidationState": [1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":453.65,
		"BoilingPoint":1615
	}, {
		"name": "Beryllium",
		"symbol": "Be",
		"electronNegativity": 1.57,
		"OxidationState": [1, 2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1560,
		"BoilingPoint":2744
	}, {
		"name": "Boron",
		"symbol": "B",
		"electronNegativity": 2.04,
		"OxidationState": [3, 2, 1, -1, -5],
		"selfbound": 5,
		"Material": "Semimetal",
		"MeltingPoint":2348,
		"BoilingPoint":4273 
	}, {
		"name": "Carbon",
		"symbol": "C",
		"electronNegativity": 2.55,
		"OxidationState": [4, 3, 2, 1, 0, -1, -2, -3, -4],
		"selfbound": 5,
		"Material": "Nonmetal",
		"MeltingPoint":3823,
		"BoilingPoint":4098  
	}, {
		"name": "Nitrogen",
		"symbol": "N",
		"electronNegativity": 3.04,
		"OxidationState": [5, 4, 3, 2, 1, -1, -2, -3],
		"selfbound": 2,
		"Material": "Nonmetal",
		"MeltingPoint":63.15 ,
		"BoilingPoint":77.36 
	}, {
		"name": "Oxygen",
		"symbol": "O",
		"electronNegativity": 3.44,
		"OxidationState": [2, 1, -1, -2],
		"selfbound": 2,
		"Material": "Nonmetal",
		"MeltingPoint":54.36,
		"BoilingPoint":90.20 
	}, {
		"name": "Fluorine",
		"symbol": "F",
		"electronNegativity": 3.98,
		"OxidationState": [-1],
		"selfbound": 2,
		"Material": "Nonmetal",
		"MeltingPoint":53.53,
		"BoilingPoint":85.03
	}, {
		"name": "Neon",
		"symbol": "Ne",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": 0,
		"Material": "Nonmetal",
		"MeltingPoint":24.56,
		"BoilingPoint":27.07
	}, {
		"name": "Natrium",
		"symbol": "Na",
		"electronNegativity": 0.93,
		"OxidationState": [1, -1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":370.95,
		"BoilingPoint":1156
	}, {
		"name": "Magnesium",
		"symbol": "Mg",
		"electronNegativity": 1.31,
		"OxidationState": [2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":923,
		"BoilingPoint":1363 
	}, {
		"name": "Aluminium",
		"symbol": "Al",
		"electronNegativity": 1.61,
		"OxidationState": [3, 2, 1, -1, -2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":933.44,
		"BoilingPoint":2792 
	}, {
		"name": "Silicon",
		"symbol": "Si",
		"electronNegativity": 1.90,
		"OxidationState": [4, 3, 2, 1, -1, -2, -3, -4],
		"selfbound": 5,
		"Material": "Semimetal",
		"MeltingPoint":1687,
		"BoilingPoint":3538 
	}, {
		"name": "Phosphorus",
		"symbol": "P",
		"electronNegativity": 2.19,
		"OxidationState": [5, 4, 3, 2, 1, -1, -2, -3],
		"selfbound": 4,
		"Material": "Nonmetal",
		"MeltingPoint":317.3,
		"BoilingPoint":550  
	}, {
		"name": "Sulfur",
		"symbol": "S",
		"electronNegativity": 2.58,
		"OxidationState": [6, 5, 4, 3, 2, 1, -1, -2],
		"selfbound": 8,
		"Material": "Nonmetal",
		"MeltingPoint":388.36,
		"BoilingPoint":717.8  
	}, {
		"name": "Chlorine",
		"symbol": "Cl",
		"electronNegativity": 3.16,
		"OxidationState": [7, 6, 5, 4, 3, 2, 1, -1],
		"selfbound": 2,
		"Material": "Nonmetal",
		"MeltingPoint":171.65,
		"BoilingPoint":	239.11  
	}, {
		"name": "Argon",
		"symbol": "Ar",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": 0,
		"Material": "Nonmetal",
		"MeltingPoint":83.80,
		"BoilingPoint":	87.30  
	}, {
		"name": "Potassium",
		"symbol": "K",
		"electronNegativity": 0.82,
		"OxidationState": [1, -1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":336.53,
		"BoilingPoint":1032 
	}, {
		"name": "Calcium",
		"symbol": "Ca",
		"electronNegativity": 1.00,
		"OxidationState": [2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1115,
		"BoilingPoint":1757 
	}, {
		"name": "Scandium",
		"symbol": "Sc",
		"electronNegativity": 1.36,
		"OxidationState": [3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1814,
		"BoilingPoint":3109  
	}, {
		"name": "Titanium",
		"symbol": "Ti",
		"electronNegativity": 1.54,
		"OxidationState": [4, 3, 2, 1, -1, -2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1941,
		"BoilingPoint":3560 
	}, {
		"name": "Vanadium",
		"symbol": "V",
		"electronNegativity": 1.63,
		"OxidationState": [5, 4, 3, 2, 1, -1, -3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint": 2183,
		"BoilingPoint": 3680
	}, {
		"name": "Chromium",
		"symbol": "Cr",
		"electronNegativity": 1.66,
		"OxidationState": [6, 5, 4, 3, 2, 1, -1, -2, -3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2180,
		"BoilingPoint":2944
	}, {
		"name": "Manganese",
		"symbol": "Mn",
		"electronNegativity": 1.55,
		"OxidationState": [7, 6, 5, 4, 3, 2, 1, -1, -2, -3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1519,
		"BoilingPoint":2334 
	}, {
		"name": "Iron",
		"symbol": "Fe",
		"electronNegativity": 1.83,
		"OxidationState": [-4, -2, -1, 1, 2, 3, 4, 5, 6],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1811,
		"BoilingPoint":3134  
	}, {
		"name": "Cobalt",
		"symbol": "Co",
		"electronNegativity": 1.88,
		"OxidationState": [-4, -2, -1, 1, 2, 3, 4, 5, 6],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1768 ,
		"BoilingPoint":3200 
	}, {
		"name": "Nickel",
		"symbol": "Ni",
		"electronNegativity": 1.91,
		"OxidationState": [4, 3, 2, 1, -1, -2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1728,
		"BoilingPoint":3186  
	}, {
		"name": "Copper",
		"symbol": "Cu",
		"electronNegativity": 1.90,
		"OxidationState": [-2, 1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1357,
		"BoilingPoint":2835 
	}, {
		"name": "Zinc",
		"symbol": "Zn",
		"electronNegativity": 1.65,
		"OxidationState": [-2, 1, 2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":692.68,
		"BoilingPoint":1180 
	}, {
		"name": "Gallium",
		"symbol": "Ga",
		"electronNegativity": 1.81,
		"OxidationState": [3, 2, 1, -1, -2, -4, -5],
		"selfbound": 1,
		"Material": "Metal",
		"MeltingPoint":302.91,
		"BoilingPoint":2477 
	}, {
		"name": "Germanium",
		"symbol": "Ge",
		"electronNegativity": 2.01,
		"OxidationState": [4, 3, 2, 1, -1, -2, -3, -4],
		"selfbound": 1,
		"Material": "Semimetal",
		"MeltingPoint":1211.40,
		"BoilingPoint":3106
	}, {
		"name": "Arsenic",
		"symbol": "As",
		"electronNegativity": 2.18,
		"OxidationState": [5, 4, 3, 2, 1, -1, -2, -3],
		"selfbound": 1,
		"Material": "Semimetal",
		"MeltingPoint":500,
		"BoilingPoint":887 
	}, {
		"name": "Selenium",
		"symbol": "Se",
		"electronNegativity": 2.55,
		"OxidationState": [6, 5, 4, 3, 2, 1, -1, -2],
		"selfbound": 1,
		"Material": "Nonmetal",
		"MeltingPoint":494,
		"BoilingPoint":958
	}, {
		"name": "Bromine",
		"symbol": "Br",
		"electronNegativity": 2.96,
		"OxidationState": [7, 5, 4, 3, 1, -1],
		"selfbound": 1,
		"Material": "Nonmetal",
		"MeltingPoint":265.95,
		"BoilingPoint":331.95 
	}, {
		"name": "Krypton",
		"symbol": "Kr",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": 0,
		"Material": "Nonmetal",
		"MeltingPoint":115.79,
		"BoilingPoint":119.93 
	}, {
		"name": "Rubidium",
		"symbol": "Rb",
		"electronNegativity": 0.82,
		"OxidationState": [1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":312.46,
		"BoilingPoint":961 
	}, {
		"name": "Strontium",
		"symbol": "Sr",
		"electronNegativity": 0.95,
		"OxidationState": [2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1050,
		"BoilingPoint":1655 
	}, {
		"name": "Yttrium",
		"symbol": "Y",
		"electronNegativity": 1.22,
		"OxidationState": [3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1799,
		"BoilingPoint":3609
	}, {
		"name": "Zirconium",
		"symbol": "Zr",
		"electronNegativity": 1.33,
		"OxidationState": [4, 3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2128,
		"BoilingPoint":4682  
	}, {
		"name": "Niobium",
		"symbol": "Nb",
		"electronNegativity": 1.6,
		"OxidationState": [5, 4, 3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2750,
		"BoilingPoint":5017  
	}, {
		"name": "Molybdenum",
		"symbol": "Mo",
		"electronNegativity": 2.16,
		"OxidationState": [6, 5, 4, 3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2896,
		"BoilingPoint":4912 
	}, {
		"name": "Technetium",
		"symbol": "Tc",
		"electronNegativity": 1.9,
		"OxidationState": [7, 6, 5, 4, 3, 2, 1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2430,
		"BoilingPoint":	4538  
	}, {
		"name": "Ruthenium",
		"symbol": "Ru",
		"electronNegativity": 2.2,
		"OxidationState": [4, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2607,
		"BoilingPoint":4423  
	}, {
		"name": "Rhodium",
		"symbol": "Rh",
		"electronNegativity": 2.28,
		"OxidationState": [3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2237,
		"BoilingPoint":3968  
	}, {
		"name": "Palladium",
		"symbol": "Pd",
		"electronNegativity": 2.2,
		"OxidationState": [2, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1828.05,
		"BoilingPoint":3236  
	}, {
		"name": "Silver",
		"symbol": "Ag",
		"electronNegativity": 1.93,
		"OxidationState": [1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1234.93,
		"BoilingPoint":2435  
	}, {
		"name": "Cadmium",
		"symbol": "Cd",
		"electronNegativity": 1.69,
		"OxidationState": [2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":594.22,
		"BoilingPoint":1040 
	}, {
		"name": "Indium",
		"symbol": "In",
		"electronNegativity": 1.78,
		"OxidationState": [3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":429.75,
		"BoilingPoint":	2345
	}, {
		"name": "Tin",
		"symbol": "Sn",
		"electronNegativity": 1.96,
		"OxidationState": [4, 2, -2, -4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":505.08,
		"BoilingPoint":2875 
	}, {
		"name": "Antimony",
		"symbol": "Sb",
		"electronNegativity": 2.05,
		"OxidationState": [5, 3, -3],
		"selfbound": "1",
		"Material": "Semimetal",
		"MeltingPoint":903.78,
		"BoilingPoint":1860  
	}, {
		"name": "Tellurium",
		"symbol": "Te",
		"electronNegativity": 2.1,
		"OxidationState": [6, 6, 2, -2],
		"selfbound": "1",
		"Material": "Semimetal",
		"MeltingPoint":722.66,
		"BoilingPoint":1261 
	}, {
		"name": "Iodine",
		"symbol": "I",
		"electronNegativity": 2.66,
		"OxidationState": [7, 6, 5, 4, 3, 1, -1],
		"selfbound": "1",
		"Material": "Nonmetal",
		"MeltingPoint":386.85,
		"BoilingPoint":457.4 
	}, {
		"name": "Xenon",
		"symbol": "Xe",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": "0",
		"Material": "Nonmetal",
		"MeltingPoint":161.4,
		"BoilingPoint":165.03 
	}, {
		"name": "Caesium",
		"symbol": "Cs",
		"electronNegativity": 0.79,
		"OxidationState": [1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":301.59,
		"BoilingPoint":944 
	}, {
		"name": "Barium",
		"symbol": "Ba",
		"electronNegativity": 0.89,
		"OxidationState": [1, 2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1000,
		"BoilingPoint":2170  
	}, {
		"name": "Lanthanum",
		"symbol": "La",
		"electronNegativity": 1.10,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1193,
		"BoilingPoint":3737  
	}, {
		"name": "Cerium",
		"symbol": "Ce",
		"electronNegativity": 1.12,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1071,
		"BoilingPoint":	3697 
	}, {
		"name": "Praseodymium",
		"symbol": "Pr",
		"electronNegativity": 1.13,
		"OxidationState": [2, 3, 4, 5],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1208,
		"BoilingPoint":3793  
	}, {
		"name": "Neodymium",
		"symbol": "Nd",
		"electronNegativity": 1.14,
		"OxidationState": [2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1297,
		"BoilingPoint":3347 
	}, {
		"name": "Promethium",
		"symbol": "Pm",
		"electronNegativity": 1.13,
		"OxidationState": [2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1315,
		"BoilingPoint":3273 
	}, {
		"name": "Samarium",
		"symbol": "Sm",
		"electronNegativity": 1.17,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1345,
		"BoilingPoint":2067  
	}, {
		"name": "Europium",
		"symbol": "Eu",
		"electronNegativity": 1.2,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1095,
		"BoilingPoint":1802  
	}, {
		"name": "Gadolinium",
		"symbol": "Gd",
		"electronNegativity": 1.20,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1585 ,
		"BoilingPoint":	3546  
	}, {
		"name": "Terbium",
		"symbol": "Tb",
		"electronNegativity": 1.2,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1629,
		"BoilingPoint":3503  
	}, {
		"name": "Dysprosium",
		"symbol": "Dy",
		"electronNegativity": 1.22,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1685 ,
		"BoilingPoint":2840 
	}, {
		"name": "Holmium",
		"symbol": "Ho",
		"electronNegativity": 1.23,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1734,
		"BoilingPoint":2993 
	}, {
		"name": "Erbium",
		"symbol": "Er",
		"electronNegativity": 1.24,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1802,
		"BoilingPoint":3141 
	}, {
		"name": "Thulium",
		"symbol": "Tm",
		"electronNegativity": 1.25,
		"OxidationState": [2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1818,
		"BoilingPoint":2223  
	}, {
		"name": "Ytterbium",
		"symbol": "Yb",
		"electronNegativity": 1.1,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1097 ,
		"BoilingPoint":	1469  
	}, {
		"name": "Lutetium",
		"symbol": "Lu",
		"electronNegativity": 1.27,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1936 ,
		"BoilingPoint":3675  
	}, {
		"name": "Hafnium",
		"symbol": "Hf",
		"electronNegativity": 1.3,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2506 ,
		"BoilingPoint":4876  
	}, {
		"name": "Tantalum",
		"symbol": "Ta",
		"electronNegativity": 1.5,
		"OxidationState": [1, 2, 3, 4, 5],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":3290 ,
		"BoilingPoint":5731  
	}, {
		"name": "Tungsten",
		"symbol": "W",
		"electronNegativity": 2.36,
		"OxidationState": [1, 2, 3, 4, 5, 6],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":3695 ,
		"BoilingPoint":5828  
	}, {
		"name": "Rhenium",
		"symbol": "Re",
		"electronNegativity": 1.9,
		"OxidationState": [1, 2, 3, 4, 5, 6, 7],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":3459,
		"BoilingPoint":5869 
	}, {
		"name": "Osmium",
		"symbol": "Os",
		"electronNegativity": 2.2,
		"OxidationState": [1, 2, 3, 4, 5, 6, 7, 8],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":3306,
		"BoilingPoint":5285  
	}, {
		"name": "Iridium",
		"symbol": "Ir",
		"electronNegativity": 2.20,
		"OxidationState": [1, 2, 3, 4, 5, 6, 7, 8, 9],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2719,
		"BoilingPoint":4701  
	}, {
		"name": "Platinum",
		"symbol": "Pt",
		"electronNegativity": 2.28,
		"OxidationState": [1, 2, 3, 4, 5, 6],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2041.4,
		"BoilingPoint":4098  
	}, {
		"name": "Gold",
		"symbol": "Au",
		"electronNegativity": 2.54,
		"OxidationState": [1, 2, 3, 4, 5, -2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1337.33,
		"BoilingPoint":3129  
	}, {
		"name": "Mercury",
		"symbol": "Hg",
		"electronNegativity": 2.00,
		"OxidationState": [1, 2, -2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":234.32,
		"BoilingPoint":629.88 
	}, {
		"name": "Thallium",
		"symbol": "Tl",
		"electronNegativity": 1.62,
		"OxidationState": [1, 2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":577,
		"BoilingPoint":1746  
	}, {
		"name": "Lead",
		"symbol": "Pb",
		"electronNegativity": 1.87,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":600.61,
		"BoilingPoint":2022 
	}, {
		"name": "Bismuth",
		"symbol": "Bi",
		"electronNegativity": 2.02,
		"OxidationState": [1, 2, 3, 4, 5],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":544.55,
		"BoilingPoint":1837 
	}, {
		"name": "Polonium",
		"symbol": "Po",
		"electronNegativity": 2.0,
		"OxidationState": [2, 4, -2],
		"selfbound": 1,
		"Material": "Semimetal",
		"MeltingPoint":527,
		"BoilingPoint":1235 
	}, {
		"name": "Astatine",
		"symbol": "At",
		"electronNegativity": 2.2,
		"OxidationState": [1, 3, 5, 7, -1],
		"selfbound": 1,
		"Material": "Semimetal",
		"MeltingPoint":575 ,
		"BoilingPoint":	610  
	}, {
		"name": "Radon",
		"symbol": "Rn",
		"electronNegativity": NaN,
		"OxidationState": [0],
		"selfbound": 0,
		"Material": "Nonmetal",
		"MeltingPoint":202 ,
		"BoilingPoint":211.3  
	}, {
		"name": "Francium",
		"symbol": "Fr",
		"electronNegativity": 0.79,
		"OxidationState": [1],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":300 ,
		"BoilingPoint":950  
	}, {
		"name": "Radium",
		"symbol": "Ra",
		"electronNegativity": 0.9,
		"OxidationState": [2],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":973 ,
		"BoilingPoint":2010  
	}, {
		"name": "Actinium",
		"symbol": "Ac",
		"electronNegativity": 1.1,
		"OxidationState": [2, 3],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1323,
		"BoilingPoint":3471  
	}, {
		"name": "Thorium",
		"symbol": "Th",
		"electronNegativity": 1.3,
		"OxidationState": [1, 2, 3, 4],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":2115,
		"BoilingPoint":	5061  
	}, {
		"name": "Protactinium",
		"symbol": "Pa",
		"electronNegativity": 1.5,
		"OxidationState": [2, 3, 4, 5],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1841 ,
		"BoilingPoint":	"Unknown" 
	}, {
		"name": "Uranium",
		"symbol": "U",
		"electronNegativity": 1.38,
		"OxidationState": [2, 3, 4, 5, 6],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1405.3 ,
		"BoilingPoint":	4404  
	}, {
		"name": "Neptunium",
		"symbol": "Np",
		"electronNegativity": 1.36,
		"OxidationState": [2, 3, 4, 5, 6, 7],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":"Unknown",
		"BoilingPoint":"Unknown"
	}, {
		"name": "Plutonium",
		"symbol": "Pu",
		"electronNegativity": 1.28,
		"OxidationState": [1, 2, 3, 4, 5, 6, 7],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":912.5 ,
		"BoilingPoint":3505  
	}, {
		"name": "Americium",
		"symbol": "Am",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1449 ,
		"BoilingPoint":	2284  
	}, {
		"name": "Curium",
		"symbol": "Cm",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1613 ,
		"BoilingPoint":3383 
	}, {
		"name": "Berkelium",
		"symbol": "Bk",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1323 ,
		"BoilingPoint":"Unknown" 
	}, {
		"name": "Californium",
		"symbol": "Cf",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1173 ,
		"BoilingPoint":"Unknown" 
	}, {
		"name": "Einsteinium",
		"symbol": "Es",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1133 ,
		"BoilingPoint":"Unknown" 
	}, {
		"name": "Fermium",
		"symbol": "Fm",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1800 ,
		"BoilingPoint":"Unknown"
	}, {
		"name": "Mendelevium",
		"symbol": "Md",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1100,
		"BoilingPoint":"Unknown" 
	}, {
		"name": "Nobelium",
		"symbol": "No",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1100 ,
		"BoilingPoint":"Unknown"
	}, {
		"name": "Lawrencium",
		"symbol": "Lr",
		"electronNegativity": NaN,
		"OxidationState": [],
		"selfbound": "sok",
		"Material": "Metal",
		"MeltingPoint":1900,
		"BoilingPoint":"Unknown"
	},



]