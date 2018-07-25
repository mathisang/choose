// Fonction stock question, réponses et caractéristiques

function Noeud(question, reponses, processeur, graphic, ram, hdd, ssd, prix, last) {
    this.texte = question;
    this.reponses = reponses;
    this.processeur = processeur;
    this.graphic = graphic;
    this.ram = ram;
    this.hdd = hdd;
    this.ssd = ssd;
    this.prix = prix;
    this.last = last;
}

// Fonction réponse

function Reponse(titre, texte, noeud, img) {
   this.titre = titre;
   this.texte = texte;
   this.noeud = noeud;
   this.img = img;
}

// test

function Retour(id, numero) {
    this.id = id;
    this.numero = numero;
}

// Tableau qui contient des noeuds

var noeuds = [];

noeuds[0] = new Noeud("Recherchez-vous un ordinateur qui vous permet de travailler en déplacement ?",
   [
      new Reponse("Ordinateur Portable", "Un ordinateur portable vous permettra d'amenez votre appareil partout où vous le souhaitez.", 1, "iconLaptop"),
      new Reponse("Ordinateur Fixe", "Un ordinateur fixe sacrifiera la mobilité au profit de la puissance de la machine. Il est plus adapté à un usage gourmand en ressource.", 2, "iconDesktop")
   ]);

// PC Portable

noeuds[1] = new Noeud("Quel type de portable préférez-vous ?",
   [
      new Reponse("Hybride", "Un Hybride vous permettra d'utiliser votre ordinateur en mode tablette.", 11, "iconConvertible"),
      new Reponse("Ultraportable", "Un Ultraportable vous proposera un très bon rapport portabilité / puissance.", 12, "iconUltra"),
      new Reponse("Notebook", "Un Notebook est très mobile. Il est surtout réservé à un usage bureautique.", 13, "iconNote"),
   ], '','','','','','',[new Retour(0, 0)]);

noeuds[11] = new Noeud("Quel système d'exploitation préférez-vous ?",
    [
        new Reponse("Windows 10", "Un ordinateur sous Windows 10 vous donnera accès à pratiquement tout les programmes disponibles dans le monde.", 111, "windows_logo"),
        new Reponse("Mac OS", "Le système d'exploitation Mac OS possède un design fin et la possibilité d'accéder à des logiciels exclusifs.", 112, "apple_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 0)]);

noeuds[12] = new Noeud("Quel système d'exploitation préférez-vous ?",
    [
        new Reponse("Windows 10", "Un ordinateur sous Windows 10 vous donnera accès à pratiquement tout les programmes disponibles dans le monde.", 121, "windows_logo"),
        new Reponse("Mac OS", "Le système d'exploitation Mac OS possède un design fin et la possibilité d'accéder à des logiciels exclusifs.", 122, "apple_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1)]);

noeuds[13] = new Noeud("Quel système d'exploitation préférez-vous ?",
    [
        new Reponse("Windows 10", "Un ordinateur sous Windows 10 vous donnera accès à pratiquement tout les programmes disponibles dans le monde.", 131, "windows_logo"),
        new Reponse("Mac OS", "Le système d'exploitation Mac OS possède un design fin et la possibilité d'accéder à des logiciels exclusifs.", 132, "apple_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 2)]);

// PC hybride et 2 en 1

noeuds[111] = new Noeud("Quelle fonctionnalité est la plus importante dans votre ordinateur ?",
    [
        new Reponse("Bureautique", "Une machine de bureautique sera moins chère et suffisament puissante pour l'usage que vous en ferez.", 1111, "bureau_logo"),
        new Reponse("Multimédia", "Une machine axé dans le multimédia sert à la retouche photo, vidéo ou encore pour utiliser des logiciels gourmands en ressources.", 1112, "multim_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0)]);

// Résultat PC Portable > PC Hybride > Mac

noeuds[112] = new Noeud("iPad Pro",
        undefined, "Apple A10X Fusion avec architecture 64 bits", "Non renseigné", "Non renseigné", "Non", "256 Go", "1 299€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 1)]
    );

noeuds[1111] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("Asus", "", 11112, "asus_logo"),
        new Reponse("HP", "", 11111, "hp_logo"),
        new Reponse("Acer", "", 11113, "acer_logo"),
        new Reponse("Samsung", "", 11114, "samsung_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0)]);

noeuds[1112] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("HP", "", 11122, "hp_logo"),
        new Reponse("Microsoft", "", 11121, "microsoft_logo"),
        new Reponse("Lenovo", "", 11123, "lenovo_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 1)]);

// Résultats PC Portable > PC Hybride > Windows > Bureautique

noeuds[11111] = new Noeud("HP Spectre x2",
    undefined, "Intel Core M7-6Y75 1.2 GHz", "Intel HD Graphics", "8 Go", "Non", "256 Go", "1 299€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1111, 1)]
);

noeuds[11112] = new Noeud("Asus Transformer Book",
    undefined, "Intel Atom x5-Z8500 1.44 GHz", "Intel HD Graphics Gen8", "2 Go", "64 Go", "Non", "349€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1111, 0)]
);

noeuds[11113] = new Noeud("Acer Spin 3",
    undefined, "Intel Core i3-6006U 2 GHz", "Intel HD Graphics 520", "4 Go", "Non", "128 Go", "449€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1111, 2)]
);

noeuds[11114] = new Noeud("Samsung Galaxy Book",
    undefined, "Intel Core i5 3.1 GHz", " Intel HD Graphics 620", "4 Go", "Non", "128 Go", "1 229€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1111, 3)]
);

// Résultats PC Portable > PC Hybride > Windows > Multimédia

noeuds[11121] = new Noeud("Microsoft Surface Book",
    undefined, "Intel Core i5-6300U 1.7 GHz", "Non renseigné", "8 Go", "Non", "128 Go", "1 200€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1112, 1)]
);

noeuds[11122] = new Noeud("HP Spectre x360",
    undefined, "Intel Core i7-8550U 1,8 GHz", "Intel HD Graphics 620", "8 Go", "Non", "256 Go", "1 399€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1112, 0)]
);

noeuds[11123] = new Noeud("Lenovo Yoga",
    undefined, "Celeron® N3060 1.6 GHz", "Intel HD Graphics", "2 Go", "32 Go", "Non", "279€",[new Retour(0, 0), new Retour(1, 0), new Retour(11, 0), new Retour(111, 0), new Retour(1112, 2)]
);

// Ordinateur portable & Ultraportable

noeuds[121] = new Noeud("Quelle fonctionnalité est la plus importante dans votre ordinateur ?",
    [
        new Reponse("Bureautique", "Une machine de bureautique sera moins chère et suffisament puissante pour l'usage que vous en ferez.", 1211, "bureau_logo"),
        new Reponse("Multimédia" ,"Une machine axé dans le multimédia sert à la retouche photo, vidéo ou encore pour utiliser des logiciels gourmands en ressources.", 1212, "multim_logo"),
        new Reponse("Jeux" ,"Une machine qui est conçu pour vous offrir des graphismes et une fluidité sans pareil dans les jeux vidéos.", 1213, "jeux-icon")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0)]);

noeuds[122] = new Noeud("Quelle aspect est le plus important pour vous ?",
    [
        new Reponse("Bureautique" ,"Une machine de bureautique sera moins chère et suffisament puissante pour l'usage que vous en ferez.", 1222, "bureau_logo"),
        new Reponse("Ultramobilité" ,"Toujours plus fin et toujours plus léger un ordinateur ultraportable vous offrira un très bon rapport portabilité / puissance.", 1223, "ultraportable_icon"),
        new Reponse("Professionnel" ,"Nettement plus chère, une machine pour professionnel vous permettra de réaliser des tâches gourmandes en ressources.", 1221, "professional_icon"),
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1), new Retour(12, 1)]);

noeuds[1211] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("Asus", "", 12111, "asus_logo"),
        new Reponse("HP", "", 12112, "hp_logo"),
        new Reponse("Acer", "", 12113, "acer_logo"),
        new Reponse("Dell", "", 12114, "dell_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 0)]);

noeuds[1212] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("LG", "", 12121, "lg_logo"),
        new Reponse("HP", "", 12122, "hp_logo"),
        new Reponse("Microsoft", "", 12123, "microsoft_logo"),
        new Reponse("Asus", "", 12124, "asus_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 1)]);

noeuds[1213] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("Alienware", "", 12133, "alienware_logo"),
        new Reponse("Razer", "", 12131, "razer_logo"),
        new Reponse("Acer Predator", "", 12134, "acer_logo"),
        new Reponse("MSI", "", 12132, "msi_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 2)]);

// Résultats PC Portable > Ordinateur Portable & Ultraportable > Windows > Bureautique

noeuds[12111] = new Noeud("Asus Zenbook",
    undefined, "Intel Core i7 7500U 2.7 GHz", "NVIDIA GeForce GTX 950M", "8 Go", "1 To", "128 Go", "999€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 0), new Retour(1211, 0)]
);

noeuds[12112] = new Noeud("HP Pavilion",
    undefined, "Intel Core i5-7200U 2,5 GHz", "Intel HD Graphics 620", "4 Go", "1 To", "128 Go", "799€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 0), new Retour(1211, 1)]
);

noeuds[12113] = new Noeud("Acer Swift",
    undefined, "Intel Core i5 7200U 2.5 GHz", "Intel HD Graphics 620", "4 Go", "Non", "128 Go", "799€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 0), new Retour(1211, 2)]
);

noeuds[12114] = new Noeud("Dell Inspirion",
    undefined, "Intel Core i3 3217U 1.8 GHz", "Intel HD Graphics 4000", "4 Go", "500 Go", "Non", "699€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 0), new Retour(1211, 3)]
);

// Résultats PC Portable > Ordinateur Portable & Ultraportable > Windows > Multimédia

noeuds[12121] = new Noeud("LG Gram",
    undefined, "Intel Core i3-7100U", "Intel HD Graphics 620", "4 Go", "Non", "256 Go", "1 299€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 1), new Retour(1212, 0)]
);

noeuds[12122] = new Noeud("HP Spectre 13",
    undefined, "Intel i5-6200U 2.3 GHz", "Intel HD Graphics", "8 Go", "Non", "256 Go", "1 235€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 1), new Retour(1212, 1)]
);

noeuds[12123] = new Noeud("Microsoft Surface Laptop",
    undefined, "Intel Core i5 2.5 GHz", "Intel HD 620", "4 Go", "Non", "128 Go", "842€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 1), new Retour(1212, 2)]
);

noeuds[12124] = new Noeud("Asus Zenbook 13",
    undefined, "Intel Core i5-8250U 1.6 GHz", "Intel UHD Graphics 620", "8 Go", "Non", "256 Go", "1 199€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 1), new Retour(1212, 3)]
);

// Résultats PC Portable > Ordinateur Portable & Ultraportable > Windows > Jeux

noeuds[12131] = new Noeud("Razer Blade 2018",
    undefined, "Intel Core i7-7700HQ 2,80 GHz", "NVIDIA GeForce GTX 1060", "16 Go", "Non", "256 Go", "1 999€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 2), new Retour(1213, 1)]
);

noeuds[12132] = new Noeud("MSI Optix",
    undefined, "Intel Core i7-7820HK 2.9 GHz", "2 x NVIDIA GeForce GTX 1080", "64 Go", "1 To", "1 To", "4 225€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 2), new Retour(1213, 3)]
);

noeuds[12133] = new Noeud("Alienware 15",
    undefined, "Intel Core i7-6820HK 2,7 GHz", "NVIDIA GeForce GTX 1070", "16 Go", "1 To", "256 Go" ,"2 699€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 2), new Retour(1213, 0)]
);

noeuds[12134] = new Noeud("Acer Predator Helios 300",
    undefined, "Intel Core i7-7700HQ 2.8 GHz", "NVIDIA GeForce GTX 1050 Ti", "8 Go", "1 To", "128 Go" ,"1 249€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 0), new Retour(121, 2), new Retour(1213, 2)]
);

// Résultats PC Portable > Ordinateur Portable & Ultraportable > Mac

noeuds[1221] = new Noeud("Macbook Pro",
    undefined, "Intel Core i7 2,9 GHz", "Radeon Pro 560 & Intel HD Graphics 630", "8 Go", "Non", "512 Go", "3 299€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 1), new Retour(122, 2)]
);

noeuds[1222] = new Noeud("Macbook Air",
    undefined, "Intel Core i5 1,8 GHz", "Intel HD Graphics 6000", "8 Go", "Non", "259 Go" ,"1 349€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 1), new Retour(122, 0)]
);

noeuds[1223] = new Noeud("Macbook",
    undefined, "Intel Core i5 1,3 GHz", "Intel HD Graphics 615", "8 Go", "Non", "512 Go", "1 799€",[new Retour(0, 0), new Retour(1, 1), new Retour(12, 1), new Retour(122, 1)]
);

// Notebook

noeuds[131] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("HP", "", 1311, "hp_logo"),
        new Reponse("Acer", "", 1313,"acer_logo"),
        new Reponse("Asus", "", 1314, "asus_logo"),
        new Reponse("Google", "", 1312, "google_logo")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 2), new Retour(13, 0)]);

noeuds[132] = new Noeud("Quelle aspect est le plus important pour vous ?",
    [
        new Reponse("Bureautique", "Une machine de bureautique sera moins chère et suffisament puissante pour l'usage que vous en ferez.", 1321, "bureau_logo"),
        new Reponse("Ultramobilité" ,"Toujours plus fin et toujours plus léger un ordinateur ultraportable vous offrira un très bon rapport portabilité / puissance.", 1322, "ultraportable_icon")
    ], '','','','','','',[new Retour(0, 0), new Retour(1, 2), new Retour(13, 1)]);

// Résultats PC Portable > Notebook > Windows

noeuds[1311] = new Noeud("HP Stream",
    undefined, "Intel Celeron N3060 1.6 GHz", "Intel HD 400", "4 Go", "32 Go", "Non", "160€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 0), new Retour(131, 0)]
);

noeuds[1314] = new Noeud("Asus Vivobook",
    undefined, "Intel Core i5-8250U 1,6 GHz", "Intel UHD Graphics 620", "4 Go", "1 To", "Non", "572€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 0), new Retour(131, 2)]
);

noeuds[1313] = new Noeud("Acer Swift",
    undefined, "Intel Core i5-6200U 2.8 GHz", "Intel HD Graphics 520", "8 Go", "Non", "256 Go", "799€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 0), new Retour(131, 1)]
);

noeuds[1312] = new Noeud("Google Chromebook Pixel",
    undefined, "Intel Core i5-3427U 1.8 GHz", "Intel HD Graphics 4000", "4 Go", "Non", "32 Go", "1 300€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 0), new Retour(131, 3)]
);

// Résultats PC Portable > Notebook > Mac

noeuds[1321] = new Noeud("Macbook Air",
    undefined, "Intel Core i5 1,8 GHz", "Intel HD Graphics 6000", "8 Go", "Non", "259 Go" ,"1 349€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 1), new Retour(132, 0)]
);

noeuds[1322] = new Noeud("Macbook",
    undefined, "Intel Core i5 1,3 GHz", "Intel HD Graphics 615", "8 Go", "Non", "512 Go", "1 799€",[new Retour(0, 0), new Retour(1, 2), new Retour(13, 1), new Retour(132, 1)]
);

// PC fixe

noeuds[2] = new Noeud("Quel système d'exploitation préférez-vous ?",
    [
        new Reponse("Windows 10", "Un ordinateur sous Windows 10 vous donnera accès à pratiquement tout les programmes disponibles dans le monde.", 21, "windows_logo"),
        new Reponse("Mac OS", "Le système d'exploitation Mac OS possède un design fin et la possibilité d'accéder à des logiciels exclusifs.", 22, "apple_logo")
    ], '','','','','','',[new Retour(0, 1)]);

// PC fixe > Windows

noeuds[21] = new Noeud("Quelle fonctionnalité est la plus importante dans votre ordinateur ?",
    [
        new Reponse("Bureautique", "Une machine de bureautique sera moins chère et suffisament puissante pour l'usage que vous en ferez.", 211, "bureau_logo"),
        new Reponse("Multimédia", "Une machine axé dans le multimédia sert à la retouche photo, vidéo ou encore pour utiliser des logiciels gourmands en ressources.", 212, "multim_logo"),
        new Reponse("Jeux", "Une machine qui est conçu pour vous offrir des graphismes et une fluidité sans pareil dans les jeux vidéos.", 213, "jeux-icon")
    ], '','','','','','',[new Retour(0, 1), new Retour(2, 0)]);

noeuds[211] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("Dell", "", 2112, "dell_logo"),
        new Reponse("HP", "", 2111, "hp_logo"),
        new Reponse("Acer", "", 2113, "acer_logo"),
        new Reponse("Asus", "", 2114, "asus_logo")
    ], '','','','','','',[new Retour(0, 1), new Retour(2, 0), new Retour(21, 0)]);

noeuds[212] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("HP", "", 2121, "hp_logo"),
        new Reponse("Acer", "", 2123, "acer_logo"),
        new Reponse("Asus", "", 2122, "asus_logo")
    ], '','','','','','',[new Retour(0, 1), new Retour(2, 0), new Retour(21, 1)]);

noeuds[213] = new Noeud("Quelle marque préférez-vous ?",
    [
        new Reponse("HP", "", 2131, "hp_logo"),
        new Reponse("Alienware", "", 2134, "alienware_logo"),
        new Reponse("Asus", "", 2133, "asus_logo"),
        new Reponse("MSI", "", 2132, "msi_logo")
    ], '','','','','','',[new Retour(0, 1), new Retour(2, 0), new Retour(21, 2)]);

// Résultat Pc fixe > Windows > Bureautique

noeuds[2111] = new Noeud("HP Slimline",
    undefined, "AMD A6 7310 2 GHz", "AMD Radeon R4", "8 Go", "2 To", "Non", "489€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 0), new Retour(211, 1)]
);

noeuds[2112] = new Noeud("Dell Optiplex",
    undefined, "Intel Pentium G630 2,70 GHz", "Intel HD Graphics 2000", "4 Go", "250 Go", "Non", "249€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 0), new Retour(211, 0)]
);

noeuds[2113] = new Noeud("Acer Aspire",
    undefined, "Intel Core i3-7100 3.9 GHz", "Intel HD Graphics", " 4 Go", "1 To", "Non", "399€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 0), new Retour(211, 2)]
);

noeuds[2114] = new Noeud("Asus M32",
    undefined, "Intel Core i3-4150 3.5 GHz", "Intel HD Graphics 4400", "8 Go", "500 Go", "Non", "699€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 0), new Retour(211, 3)]
);

// Résultat Pc fixe > Windows > Multimédia

noeuds[2121] = new Noeud("HP Pavilion P6",
    undefined, "Intel Pentium J3710 1.6 GHz", "Intel HD", "8 Go", "1 To", "Non", "499€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 1), new Retour(212, 0)]
);

noeuds[2122] = new Noeud("Asus Zen",
    undefined, "Intel Core i3-6089P 3.6 GHz", "Intel Graphics HD", "4 Go", "1 To", "Non", "489€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 1), new Retour(212, 2)]
);

noeuds[2123] = new Noeud("Acer Aspire X3300",
    undefined, "Intel Core i3-7100 3.9 GHz", "NVIDIA GeForce GTX 1050", "4 Go", "1 To", "Non", "699€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 1), new Retour(212, 1)]
);

// Résultat Pc fixe > Windows > Jeux

noeuds[2131] = new Noeud("HP Omen",
    undefined, "Intel Core i7-8700 3,2 GHz", "NVIDIA GeForce GTX1070", "16 Go", "1 To", "256 Go", "1 799€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 2), new Retour(213, 0)]
);

noeuds[2133] = new Noeud("Asus ROG",
    undefined, "Intel Core i7 7700 3.6 GHz", "NVIDIA GeForce GTX1080", "16 Go", "1 To", "256 Go", "1 999€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 2), new Retour(213, 2)]
);

noeuds[2134] = new Noeud("Alienware X51",
    undefined, "Intel Core i7-4770 3.7 GHz", "NVIDIA GTX 760 ti OEM", "8 Go", "1 To", "128 Go", "1 399€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 2), new Retour(213, 1)]
);

noeuds[2132] = new Noeud("MSI Infinite",
    undefined, "Intel Core i7-7700 3.6 GHz", "NVIDIA GeForce GTX 1060", "16 Go", "2 To", "256 Go", "1 699€",[new Retour(0, 1), new Retour(2, 0), new Retour(21, 2), new Retour(213, 3)]
);

// PC fixe > Mac

noeuds[22] = new Noeud("Quelle fonctionnalité est la plus importante dans votre iMac ?",
    [
        new Reponse("Professionnel", "Un iMac pour professionnel pourra durée de très nombreuses année avec un qualité de production et des performances parfaites.", 221, "professional_icon"),
        new Reponse("Personnel" ,"Un iMac vous offrera dans tout les cas de très bonnes performances dans l'utilisation de logiciels gourmants.", 222, "iconDesktop")
    ], '','','','','','',[new Retour(0, 1), new Retour(2, 1)]);

// Résultat PC fixe > Mac

noeuds[221] = new Noeud("iMac Pro",
    undefined, "Intel Xeon 3.2 GHz", "Radeon Pro Vega 56", "32 Go", "Non", "1 To", "4950€",[new Retour(0, 1), new Retour(2, 1), new Retour(22, 0)]
);

noeuds[222] = new Noeud("iMac",
    undefined, "Intel Core i5 3,8 GHz", "Radeon Pro 580", "8 Go", "2 To", "256 Go", "2 599€",[new Retour(0, 1), new Retour(2, 1), new Retour(22, 1)]
);

// Première question du noeud

racine = noeuds[0];