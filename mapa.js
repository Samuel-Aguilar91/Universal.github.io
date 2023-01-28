let map = L.map('map').setView([24.3106269,-104.2991871],6)

//Agregar tilelAyer mapa base desde openstreetmap
var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,8);
})

// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

//Agregar escala mini mapa

new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
  if(feature.properties && feature.properties.carteles){
      layer.bindPopup("<strong>Organización Delictiva: </strong>" + feature.properties.carteles + "<br/>" + "<strong>Municipio: </strong>" + 
      feature.properties.NOMGEO+ "<br/>"+
      "<strong>Período: </strong>"+
       feature.properties.fecha);
  }
}

//Generamos layer de Cárteles
var carteles_1 = L.layerGroup().addTo(map)

// Generar colores por organización delictiva
function getColor(d) {

return     d == "Alianza la Unión-Nuevo Imperio, Banda Charal y Banda Pamela "                                                                           ? '#5e5e5e' :
           d == "Árturo Álvarez Pérez, Arturo Gress Calva, El Chita, Julio Tovar Escamilla"                                                              ? '#5e5e5e' :
           d == "Cártel del Golfo-Ciclones"                                                                                                             ? '#cb76de' :
           d == "Cártel del Golfo-Ciclones, Cártel del Noreste"                                                                                          ? '#5e5e5e' :
           d == "Cártel del Golfo-Ciclones, Los Sierra"                                                                                                 ? '#5e5e5e' :
           d == "Cártel del Golfo-Metros (facción aliada a células del Cártel Jalisco Nueva Generación)"                                                                            ? '#cb76de' :
           d == "Cártel del Golfo-Metros (facción aliada a células del Cártel Jalisco Nueva Generación), Cártel del Golfo-Ciclones"                                                  ? '#cb76de' :
           d == "Cártel del Golfo-Panteras"                                                                                                              ? '#cb76de' :
           d == "Cártel del Golfo-Rojos"                                                                                                                 ? '#cb76de' :
           d == "Los Caballeros Templarios"                                                                                                                  ? '#e48f2e' :
           d == "Caballeros Templarios, Guardia Guerrerense"                                                                                             ? '#5e5e5e' :
           d == "Caballeros Templarios, Las Rojas Romero, Cártel Jalisco Nueva Generación, Sangre Nueva Zeta"                                            ? '#5e5e5e' :
           d == "Caballeros Templarios, Los Rojas Romero, Cártel Jalisco Nueva Generación"                                                               ? '#5e5e5e' :
           d == "Cártel Beltrán Leyva"                                                                                                                   ? '#2173ca' :
           d == "Cártel Beltrán Leyva, Cártel de Sinaloa"                                                                                                ? '#5e5e5e' :
           d == "Cártel Jalisco Nueva Generación, La Unión Tepito, Fuerza Anti Unión, Ronda 88"                                                          ? '#5e5e5e' :
           d == "Cártel de la Sierra, Los Jefes"                                                                                                         ? '#5e5e5e' :
           d == "Cártel de los Arellano Félix, Cártel Jalisco Nueva Generación"                                                                          ? '#5e5e5e' :
           d == "Cártel de los Zetas"                                                                                                                    ? '#b36117' :
           d == "Cártel de los Zetas (facción 35-Z)"                                                                                                     ? '#db751c' :
           d == "Cártel de los Zetas, Cártel Jalisco Nueva Generación"                                                                                   ? '#5e5e5e' :
           d == "Cártel de Sinaloa"                                                                                                                      ? '#45afb5' :
           d == "Cártel de Sinaloa, Cártel Jalisco Nueva Generación, Cártel de los Zetas"                                                                ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Cártel Jalisco Nueva Generación, Cártel de los Zetas, Cártel del Golfo-Zetas Vieja Escuela"                          ? '#5e5e5e' :
           d == "Cártel de Sinaloa (faccción Cártel de los Cabrera Sarabia)"                                                                            ? '#45afb5' :
           d == "Cártel de Sinaloa (facción Cártel de los Cabrera Sarabia), Cártel Independiente de la Laguna, Cártel del Noreste"                      ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Cártel de los Cabrera Sarabia), Cártel Independiente de la Laguna y/o Cártel del Poniente"                  ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Mara Salvatrucha 13"                                                                                                 ? '#5e5e5e' :
           d == "Cártel de Tláhuac, Cártel Jalisco Nueva Generación, Los Rodolfos, Los Molina"                                                           ? '#5e5e5e' :
           d == "Cártel de Tláhuac, Cártel Jalisco Nueva Generación, Los Rodolfos, Los Molina, Los Maceros"                                              ? '#5e5e5e' :
           d == "Cártel de Tláhuac, Cártel Jalisco Nueva Generación, Los Rodolfos, Los Molina, Los Maceros, Los Tanzanios"                               ? '#5e5e5e' :
           d == "Cártel del Golfo-Zetas Vieja Escuela"                                                                                                   ? '#5e5e5e' :
           d == "Cártel del Golfo"                                                                                                                       ? '#ab4fe1' :
           d == "Alianza Cártel del Golfo-Cártel Jalisco Nueva Generación"                                                                               ? '#ab4fe1' :
           d == "Alianza Cártel del Golfo-Cártel Jalisco Nueva Generación, Cártel del Noreste"                                                           ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1)"                                                                                     ? '#be61fd' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación"                                                    ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel de los Zetas"                               ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel de los Zetas y Zetas Vieja Escuela"         ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel de los Zetas, Cártel del Golfo-Escorpiones" ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel de San Luis Potosí Nueva Generación, Cártel del Golfo-Escorpiones, Cártel Los Alemanes, Cártel del Golfo (facción del Señor de la P. Grupo Squalo)"     ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Los Zetas"                                                                                                                                                     ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel del Golfo (facción del Señor de la P. Grupo Squalo), Cártel del Golfo-Escorpiones"                                                                      ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación, Cártel del Golfo (facción del Señor de la P. Grupo Squalo), Cártel del Golfo-Escorpiones, Cártel Los Alemanes"                                                 ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel de San Luis Potosí Nueva Generación, La Familia Michoacana, Los Alemanes, Los Zetas"                                                                                                     ? '#5e5e5e' :
           d == "Cártel del Golfo, (facción Operativa Espartano #1), Cártel de San Luis Potosí Nueva Generación, Cártel Los Alemanes"                                                                                                                                ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela"                                                                                                                                                                                                              ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela, Cártel de Los Beltrán Leyva"                                                                                                                                                                                 ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela, Cártel del Noreste"                                                                                                                                                                                          ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela, Cártel del Noreste, Cártel de Los Beltrán Leyva"                                                                                                                                                             ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela-Grupo Sombra"                                                                                                                                                                                                 ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela"                                                                                                                                                                                                              ? '#5e5e5e' :
           d == "Cártel del Golfo, Zetas Vieja Escuela, Cártel Jalisco Nueva Generación"                                                                                                                                                                             ? '#5e5e5e' :
           d == "Cártel del Noreste"                                                                                                                                                                                                                                 ? '#a7dc61' :
           d == "Cártel del Noreste, Cártel del Golfo-Metros, (facción aliada a células del Cártel Jalisco Nueva Generación)"                                                                                                                                        ? '#5e5e5e' :
           d == "Cártel del Noreste, Cártel del Golfo, Zetas Vieja Escuela, Cártel de Los Beltrán Leyva"                                                                                                                                                             ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Los Menores)"                                                                                                                                                                                                            ? '#56dfe6' :
           d == "Cártel de Sinaloa (facción Cártel de los Cabrera Sarabia)"                                                                                                                                                                                           ? '#56dfe6' :
           d == "Cártel de Sinaloa (facción Los Menores), Cártel Jalisco Nueva Generación"                                                                                                                                                                           ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Los Menores), Cártel Jalisco Nueva Generación, Cártel de los Arellano Félix"                                                                                                                                             ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Los Menores), Cártel de Juárez (facción La Línea)"                                                                                                                                                                       ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Los Menores), Los Trinis"                                                                                                                                                                                                ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facción Mayo Zambada)"                                                                                                                                                                                                           ? '#56dfe6' :                                                                                                                      
           d == "Cártel de Sinaloa (facción Mayo Zambada), Cártel Jalisco Nueva Generación"                                                                                                                                                                           ? '#5e5e5e' :
           d == "Cártel de Sinaloa (facciones aliadas a Los Menores y al Mayo Zambada)"                                                                                                                                                                               ? '#45afb5' :
           d == "Cártel de Sinaloa-Los Cazadores(aliados de Los Menores), Cártel de Sinaloa-Los Gigios (aliados del Mayo Zambada)"                                                                                                                                ? '#5e5e5e' :
           d == "Cártel de Sinaloa-Los Costeños (aliados de Los Menores), Cártel de Sinaloa-Los Páez (aliados del Mayo Zambada)"                                                                                                                                 ? '#5e5e5e' :
           d == "Cártel de Sinaloa-Los Salazar (aliados de Los Menores), Cártel de Sinaloa-Los Licenciados (aliados del Mayo Zambada)"                                                                                                                                ? '#5e5e5e' :
           d == "Cártel de Sinaloa-Los Tintori (aliados de Los Menores), Cártel de Sinaloa-Los Pipen (aliados del Mayo Zambada)"                                                                                                                                    ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Carrillo Fuentes"                                                                                                                                                                                                                ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Alianza Cártel del Golfo-Cártel Jalisco Nueva Generación"                                                                                                                                                              ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Alianza Cártel del Golfo-Cártel Jalisco Nueva Generación, Cártel del Noreste"                                                                                                                                          ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Los Ántrax, Cártel Jalisco Nueva Generación"                                                                                                                                                                                     ? '#5e5e5e' :
           d == "Cártel de Sinaloa, Los Ántrax, Cártel Jalisco Nueva Generación, Los Mezcales (José Bernabé Brizuela Meraz)"                                                                                                                                         ? '#5e5e5e' :
d == "Cártel de Sinaloa, Gente Nueva del Tigre"                                                                                                                                             ? '#5e5e5e' :
d == "Cártel del Golfo, Zetas Vieja Escuela, Mara Salvatrucha 13"                                                                                                                                ? '#5e5e5e' :
d == "Cártel Independiente de la Laguna, Cártel de Sinaloa (facción Cártel de los Cabrera Sarabia)"                                                                    ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación"                                                                                                                                                        ? '#a40c49' :
d == "Cártel Jalisco Nueva Generación, Los Viagras"                                                                                                                                          ? '#a40c49' :
d == "Alianza Cártel Jalisco Nueva Generación-Cártel de los Arellano Félix, Cártel Beltrán Leyva, Cártel de Sinaloa"                                                    ? '#5e5e5e' :
d == "Alianza Cártel Jalisco Nueva Generación-Cártel de los Arellano Félix, Cártel de Sinaloa"                                                                                 ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel del Golfo"                                                                                                                                     ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Los Mezcales (José Bernabé Brizuela Meraz)"                                                                                      ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, La Familia Michoacana"                                                                                                                                ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel de los Zetas"                                                                                                                                   ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel de Sinaloa, Cártel Golfo"                                                                                                                      ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel de Sinaloa"                                                                                                                        ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel de Tláhuac, Los Rodolfos, Los Molina, Güero Fresa, Los Tanzanios"                                                                               ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel del Golfo, Cártel de Sinaloa"                                                                                                                  ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Cártel del Sinaloa"                                                                                                                                   ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, El Loco Téllez, El Mamer"                                                                                      ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, La Familia Michoacana"                                                                                                                ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Los Rojos, Guerreros Unidos"                                                                                                                           ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Los Talibanes"                                                                                                                                         ? '#5e5e5e' :
d == "Cártel Jalisco Nueva Generación, Sangre Nueva Zeta"                                                                                                                                     ? '#5e5e5e' :
d == "Cártel San Luis Potosí Nueva Generación"                                                                                                                                                ? '#59d045' :
d == "Cártel San Luis Potosí Nueva Generación, Cártel Los Alemanes, los Zetas, Cártel del Golfo (facción Operativa Espartano #1), Cártel Jalisco Nueva Generación"                                                                   ? '#5e5e5e' :
d == "Cártel Santa Rosa de Lima"                                                                                                                                                              ? '#BD87BB' :
d == "Cártel Santa Rosa de Lima, Cártel Jalisco Nueva Generación"                                                                                                                             ? '#5e5e5e' :
d == "Cártel Unido de la Huasteca"                                                                                                                                                            ? '#e18cf0' :
d == "Alianza La Oficina-Cártel de Sinaloa (Cárteles Unidos)"                                                                                                                    ? '#5e5e5e' :
d == "Alianza La Oficina-Cártel de Sinaloa (Cárteles Unidos), Cártel Jalisco Nueva Generación"                                                                                   ? '#5e5e5e' :
d == "Alianza La Oficina-Cártel de Sinaloa (Cárteles Unidos), Cártel Jalisco Nueva Generación, Los Talibanes"                                                                    ? '#5e5e5e' :
d == "Cártel del Golfo-Zetas Vieja Escuela, Grupo Sombra"                                                                                                                                                                   ? '#5e5e5e' :
d == "El Loco Téllez"                                                                                                                                                     ? '#e79c82' :
d == "El Mamer"                                                                                                                                                           ? '#F8E469' :
d == "Los Mezcales (José Bernabé Brizuela Meraz), Cártel Jalisco Nueva Generación"                                                                                       ? '#5e5e5e' :
d == "CIDA (Los Marin), Cártel Beltrán Leyva"                                                                                                                                                        ? '#9b9b9b' :
d == "Cártel Jalisco Nueva Generación, Cártel del Noreste, Cártel del Golfo"                                                                                                                                                                     ? '#9b9b9b' :
d == "Columna Armada Pedro J. Méndez"                                                                                                                                                         ? '#F29A86' :
d == "Grupos Comunitarios, Cártel Jalisco Nueva Generación"                                                                                                                                          ? '#9b9b9b' :
d == "Cártel de San Luis Potosí Nueva Generación, La Familia Michoacana"                                                                                                                                                          ? '#9b9b9b' :
d == "Cártel  Santa Rosa de Lima, Cártel Jalisco Nueva Generación"                                                                                                                                                  ? '#9b9b9b' :
d == "Don José"                                                                                                                                                                               ? '#767ee7' :
d == "El América"                                                                                                                                                           ? '#1a28eb' :
d == "El América, El Hijin"                                                                                                                                               ? '#5e5e5e' :
d == "El América, El Talachas"                                                                                                                                            ? '#5e5e5e' :
d == "El Gabo, El Ardilla, Don Lupe, Erick Estrada Hernández, El Marino"                                                                                                  ? '#5e5e5e' :
d == "El Hijin"                                                                                                                                                             ? '#d44acd' :
d == "El Jes y/o el Sierra"                                                                                                                                                 ? '#e3808a' :
d == "El Jes y/o el Sierra, Bigotes Blancos"                                                                                                                              ? '#5e5e5e' :
d == "Gema Rosas Fernández, El Estaca"                                                                                                                                    ? '#9b9b9b' :
d == "Cártel de Sinaloa (facción Gente Nueva Salazar)"                                                                                                                                                                    ? '#56dfe6' :
d == "Cártel de Sinaloa (facción Gente Nueva Salazar), Cártel Jalisco Nueva Generación"                                                                                                                                   ? '#9b9b9b' :
d == "Cártel de Sinaloa (facción Gente Nueva Salazar), Cártel Santa Rosa de Lima, Cártel Jalisco Nueva Generación"                                                                                                        ? '#9b9b9b' :
d == "Granados"                                                                                                                                                                               ? '#82dab2' :
d == "Guerreros Unidos"                                                                                                                                                                       ? '#a2cd3e' :
d == "Guerreros Unidos, La Familia Michoacana"                                                                                                                                                           ? '#9b9b9b' :
d == "El Abuelo"                                                                                                                                                                          ? '#e07e79' :
d == "El Abuelo"                                                                                                                                                                ? '#eec041' : 
d == "La Familia Michoacana"                                                                                                                                                                             ? '#7a7853' :
d == "La Familia Michoacana"                                                                                                                                                                  ? '#7a7853' :
d == "La Familia Michoacana, Cártel Los Alemanes"                                                                                                                                             ? '#9b9b9b' :
d == "La Familia Michoacana, Guerreros Unidos"                                                                                                                                                           ? '#9b9b9b' :
d == "La Familia Michoacana, Guerreros Unidos, Cártel Jalisco Nueva Generación"                                                                                                                          ? '#9b9b9b' :
d == "La Familia Michoacana, Los Rojos, Guerreros Unidos, Cártel Jalisco Nueva Generación"                                                                                                               ? '#9b9b9b' :
d == "Las Rojas Romero, Cártel Jalisco Nueva Generación"                                                                                                                                      ? '#9b9b9b' :
d == "Los Ardillos"                                                                                                                                                                           ? '#8599eb' :
d == "Los Ardillos, Cártel de la Sierra"                                                                                                                                                      ? '#9b9b9b' :
d == "Los Ardillos, Los Jefes"                                                                                                                                                                ? '#9b9b9b' :
d == "Los Chehuis, Los Terán"                                                                                                                                                                 ? '#9b9b9b' :
d == "Los Correa"                                                                                                                                                                             ? '#597cb9' :
d == "Los Durango, La Unión de León, Nueva Plaza, Cártel Santa Rosa de Lima, Cártel Jalisco Nueva Generación"                                                                                 ? '#9b9b9b' :
d == "Los Granados"                                                                                                                                                                           ? '#8ceca5' :
d == "Los Granados, Cártel Jalisco Nueva Generación"                                                                                                                                          ? '#9b9b9b' :
d == "Los Grandso, Cártel Jalisco Nueva Generación, Guardia Guerrerense"                                                                                                                     ? '#9b9b9b' :
d == "Los Hades"                                                                                                                                                                              ? '#5ed3ea' :
d == "Los Hades, Cártel Jalisco Nueva Generación"                                                                                                                                             ? '#9b9b9b' :
d == "Los Puga, Cártel Jalisco Nueva Generación, JJ"                                                                                                                                          ? '#9b9b9b' :
d == "Los Rodolfo, Los Molina, Malcriados 3AD, Los Maestrin"                                                                                                                                  ? '#9b9b9b' :
d == "Los Rojas Romero"                                                                                                                                                                       ? '#d7ce2b' :
d == "Los Rojas Romero, Cártel Jalisco Nueva Generación"                                                                                                                                      ? '#9b9b9b' :
d == "Los Rojos"                                                                                                                                                                              ? '#df9526' :
d == "Los Rojos, Cártel Jalisco Nueva Generación"                                                                                                                                             ? '#9b9b9b' :
d == "Los Rojos, Guerreros Unidos"                                                                                                                                                            ? '#9b9b9b' :
d == "Los Rojos, Guerreros Unidos, Cártel Jalisco Nueva Generación"                                                                                                                           ? '#9b9b9b' :
d == "Los Rojos, La Familia Michoacana, Guerreros Unidos"                                                                                                                                                ? '#9b9b9b' :
d == "Los Sierra"                                                                                                                                                                             ? '#471aec' :
d == "Los Sierra, Columna Armada Pedro J. Méndez"                                                                                                                                             ? '#9b9b9b' :
d == "Los Talibanes"                                                                                                                                                                          ? '#BD0026' :
d == "Los Téllez"                                                                                                                                                                             ? '#e79c82' :
d == "Los Trinis"                                                                                                                                                                             ? '#5ee316' :
d == "Los Viagras, El Abuelo"                                                                                                                                                                           ? '#5ee316' :
d == "Los Viagras"                                                                                                                                                                            ? '#cc49d9' :
d == "Los Viagras-Sangre Nueva Guerrerense, Cártel Jalisco Nueva Generación, Guardia Guerrerense"                                                                                           ? '#9b9b9b' :
d == "Los Viagras-Sangre Nueva Guerrerense, Guardia Guerrerense"                                                                                                                            ? '#9b9b9b' :
d == "Los Viagras, Independiente, El Abuelo"                                                                                                                                                  ? '#9b9b9b' :
d == "Los Yglesias"                                                                                                                                                                           ? '#8C4966' :
d == "Los Yglesias, Cártel Beltrán Leyva"                                                                                                                                                            ? '#9b9b9b' :
d == "Malcriados 3AD, Los Maestrin"                                                                                                                                                           ? '#9b9b9b' :
d == "Sin registro"                                                                                                                                                                        ? '#d8aeba' :
d == "Nueva Plaza, Cártel Jalisco Nueva Generación"                                                                                                                                           ? '#9b9b9b' :
d == "Nueva Sangre Zeta"                                                                                                                                                                      ? '#e47e59' :
d == "Nueva Sangre Zeta, Cártel Jalisco Nueva Generación"                                                                                                                                     ? '#9b9b9b' :
d == "Cártel de Juárez (facción La Línea)"                                                                                                                                              ? '#c62d90' :
d == "Cártel de Juárez (facción La Línea), Cártel de Sinaloa"                                                                                                                    ? '#9b9b9b' :
d == "Cártel de Juárez (facción La Línea), Cártel de Sinaloa, Cártel Jalisco Nueva Generación"                                                                                                                               ? '#9b9b9b' :
d == "Cártel de Juárez (facción La Línea), Cártel de Sinaloa, Gente Nueva del Tigre"                                                                                                       ? '#9b9b9b' :
d == "Posible Alianza Unión Tepito"                                                                                                                                                           ? '#dde383' :
d == "Pura Gente Nueva-Cártel de los Zetas"                                                                                                                                                 ? '#da9c75' :
d == "Sangre Nueva Zeta"                                                                                                                                                                      ? '#e47e59' :
d == "Talibanes"                                                                                                                                                                              ? '#BD0026' :
d == "La Unión Tepito, Cártel Jalisco Nueva Generación, Fuerza Anti Unión, Malcriados 3AD, Los Maestrin"                                                                                         ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Cártel de Tláhuac, Cártel Jalisco Nueva Generación, Los Rodolfos, Los Molina, Ronda 88, Güero Fresa, Los Tanzanios"                                    ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Cártel Jalisco Nueva Generación, Ronda 88"                                                                                           ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Los Rodolfos"                                                                                                           ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Ronda 88"                                                                                                                                             ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Ronda 88, Cártel Jalisco Nueva Generación"                                                                                                             ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión, Ronda 88, Los Tanzanios"                                                                                                                               ? '#9b9b9b' :
d == "La Unión Tepito, Fuerza Anti Unión,Cártel de Tláhuac, Los Rodolfos"                                                                                                                       ? '#9b9b9b' :
d == "Zetas Vieja Escuela"                                                                                                                                                                      ? '#e47e59' :
d == "Cártel de los Zetas, Cártel del Noreste, Cártel Jalisco Nueva Generación"                                                                                                                                                                  ? '#9b9b9b' :
d == "Cártel de los Zetas, Cártel del Golfo, Cártel del Noreste y Cártel Jalisco Nueva Generación"                                                                                                                                                                 ? '#9b9b9b' :
d == "Cártel de los Zetas, Cártel Jalisco Nueva Generación, Cártel del Noreste"                                                                                                                                                                  ? '#9b9b9b' :
d == "Sin registro"                                                                                                                                                                           ? '#d8aeba' :
     '#d8aeba'; 
}

for(var i in municipios_1.features)
municipios_1.features[i].properties.color = getColor( municipios_1.features[i].properties.carteles);

// Función para mostrar colores
function style(feature) {
    return {
        fillColor: getColor(feature.properties.carteles),
        weight: 0.4,
        opacity: 0.5,
        color: 'white',
        dashArray: '1',
        fillOpacity: 0.7
    };
}

// Variable para estilo estatal
var myStyle = {
    "color": "white",
    "weight": 4.5,
    "opacity": 1,
    "fillColor": "Baja California"? 'transparent' : getColor("Baja California")
};

// Agregar capa en formato GeoJson estados
var estadosJS = L.geoJson(estados,{
    style: myStyle
}).addTo(map);

// Agregar capa de cárteles por municipio en formato GeoJson
var barriosJS = L.geoJson(municipios_1,{
    style: style,
    onEachFeature: popup
}).addTo(map);

//Añadimos control "Search"
var searchControl = new L.Control.Search({
    layer: barriosJS,
    propertyName: 'carteles',
    circleLocation: false
});

//Definimos el estilo de control "Search"
searchControl.on('search_locationfound', function(e) {
    e.layer.setStyle({fillColor: '#e51a4c', color: '#e51a4c'});
})
.on('search_collapsed', function(e) {
    barriosJS.eachLayer(function(layer) { //restauramos el color del elemento
        barriosJS.resetStyle(layer);
    });	
});

//Bloqueamos vista de zoom
map.dragging.disable();

//Agregamos botón de Inicio
L.Control.zoomHome = L.Control.extend({
  options: {
      position: 'topleft',
      zoomInText: '+',
      zoomInTitle: 'Acercar',
      zoomOutText: '-',
      zoomOutTitle: 'Alejar',
      zoomHomeText: '<i class="fa fa-home" style="line-height:1.65;"></i>',
      zoomHomeTitle: 'Inicio'
  },

  onAdd: function (map) {
      var controlName = 'gin-control-zoom',
          container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
          options = this.options;

      this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
      controlName + '-in', container, this._zoomIn);
      this._zoomHomeButton = this._createButton(options.zoomHomeText, options.zoomHomeTitle,
      controlName + '-home', container, this._zoomHome);
      this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
      controlName + '-out', container, this._zoomOut);

      this._updateDisabled();
      map.on('zoomend zoomlevelschange', this._updateDisabled, this);

      return container;
  },

  onRemove: function (map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
  },

  _zoomIn: function (e) {
      this._map.zoomIn(e.shiftKey ? 3 : 1);
  },

  _zoomOut: function (e) {
      this._map.zoomOut(e.shiftKey ? 3 : 1);
  },

  _zoomHome: function (e) {
      map.setView([24.3106269,-104.2991871], 6);
  },

  _createButton: function (html, title, className, container, fn) {
      var link = L.DomUtil.create('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;

      L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
          .on(link, 'click', L.DomEvent.stop)
          .on(link, 'click', fn, this)
          .on(link, 'click', this._refocusOnMap, this);

      return link;
  },

  _updateDisabled: function () {
      var map = this._map,
          className = 'leaflet-disabled';

      L.DomUtil.removeClass(this._zoomInButton, className);
      L.DomUtil.removeClass(this._zoomOutButton, className);

      if (map._zoom === map.getMinZoom()) {
          L.DomUtil.addClass(this._zoomOutButton, className);
      }
      if (map._zoom === map.getMaxZoom()) {
          L.DomUtil.addClass(this._zoomInButton, className);
      }
  }
});
// Agregamos Control de Zoom
var zoomHome = new L.Control.zoomHome();
zoomHome.addTo(map);

//Eliminamos el Control de Zoom que tiene por default Leaflet
map.removeControl(map.zoomControl);

//Añadimos control SearchControl
map.addControl(searchControl)

//Funcion Filtro de carteles


//function myFunction() { 
  //var barriosJS = L.geoJSON(municipios_1, {	
    //   style:style,
      // onEachFeature: popup	
   //});		

   //carteles_1.addLayer(barriosJS)	

//}

//Añadimos función de Filtro de Cárteles
function estiloSelect() {
  var miSelect = document.getElementById("carteles").value;
    
  var barriosJS = L.geoJSON(municipios_1, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, MarkerOptions);
              },
            filter: function(feature, layer) {								
               if(miSelect != "TODOS")		
                return (feature.properties.carteles == miSelect );
              else
                return true;
            },	
            style:style,
            onEachFeature: popup
        });		

  carteles.clearLayers();
  carteles.addLayer(municipios_1);

}


//Agregar atribución
map.attributionControl.addAttribution('EL UNIVERSAL - Unidad de Investigación y Datos');

// Agregamos Menú
L.control.slideMenu('<p>test</p>').addTo(map);









