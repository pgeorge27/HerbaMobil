var id = null;
var categoria = 0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	console.log('******deviceready******');
	cargarProductos();
}


	var listaProductos = [
		{ Id: "0", Nombre: "Mezcla para Preparar Bebida Nutricional", Categoria: "1", Descripcion: "El batido nutricional de Herbalife contiene proteina de soya (9gr. por porcion), fibra y 12 vitaminas y minerales para una nutricion completa.", Sabores: "Vainilla, chocolate, fresa, frutas tropicales, galletas con crema.", Beneficios: "Nutritivo y saludable, buena fuente de vitaminas y minerales, contiene fibra.", Foto: "./imagenes/productos/1/VE-0141-F1-Vainilla.jpg" },
		{ Id: "1", Nombre: "Formula 2 Multivitamin Complex", Categoria: "1", Descripcion: "Formula exclusiva que provee 23 vitaminas y minerales esenciales.", Sabores:"N/A", Beneficios: "Vitaminas A, B, C y D, practica manera de compensar las necesidades diarias de nutrientes, buena fuente de minerales y antioxidantes esenciales.", Foto: "./imagenes/productos/1/multivitaminico.jpg"},
		{ Id: "2", Nombre: "Formula 3 Mezcla en Polvo a Base de Proteinas", Categoria: "1", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Combinacion de proteina de soya y proteina de suero de leche, ayuda a fortalecer la masa muscular magra, es ideal para mezclar con su batido comida favorita.", Foto: "./imagenes/productos/1/proteina.jpg" },
		{ Id: "3", Nombre: "Concentrado a Base de Hierbas", Categoria: "1", Descripcion: "N/A", Sabores: "Limon, frambuesa, durazno, original", Beneficios: "Delicioso te instantaneo con todas las bondades antioxidantes y termogenicas del te verde. Ayuda a promover la quema de calorias,apoyando sus metas de control de peso. Bajo en calorias.", Foto: "./imagenes/productos/1/te.jpg" },
		{ Id: "4", Nombre: "Cell-U-Loss®", Categoria: "1", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Apoya el equilibrio normal de liquidos en el cuerpo. Nutre su piel desde adentro.", Foto: "./imagenes/productos/1/VE-CellULoss.jpg" },
		{ Id: "5", Nombre: "Total Control", Categoria: "1", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Poderosa combinacion de te verde, yerba mate y cacao con otras 9 hierbas. Mantiene los niveles de energia y combate la fatiga.", Foto: "./imagenes/productos/1/total_control.jpg" },
		{ Id: "6", Nombre: "Cell Activator Capsulas", Categoria: "1", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Promueve una mejor absorcion de las vitaminas y otros nutrientes. Apoya la actividad celular. Ayuda a proteger las celulas de todo el organismo.", Foto: "./imagenes/productos/1/cel_activator.jpg" },

		{ Id: "7", Nombre: "Herbal Aloe", Categoria: "2", Descripcion: "Mezcla concentrada de Aloe Vera para Bebida", Sabores: "N/A", Beneficios: "Refrescante bebida de sabila. Ayuda a calmar la indigestion ocasional. Apoya el sistema inmunologico y la accion autolimpiadora del cuerpo.", Foto: "./imagenes/productos/2/aloe.jpg" },
		{ Id: "8", Nombre: "Herbalifeline", Categoria: "2", Descripcion: "Este suplemento alimenticio esta dirigido a cuatro indicadores claves de la salud cardiaca: el colesterol, los trigliceridos, la homocisteina y el estres oxidante.", Sabores: "N/A", Beneficios: "Ayuda a mantener la presion arterial en rangos normales. Buena fuente de Omega 3 y rico en vitamina E. Promueve los niveles sanos de colesterol y trigliceridos.", Foto: "./imagenes/productos/2/herbalifeline.jpg" },
		{ Id: "9", Nombre: "Xtra-Cal", Categoria: "2", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Suplemento de calcio concentrado para fortalecer los huesos y dientes. Contiene vitamina D, magnesio y hierbas para una mejor absorcion.", Foto: "./imagenes/productos/2/xtracal.jpg" },
		{ Id: "10", Nombre: "Schizandra Plus®", Categoria: "2", Descripcion: "N/A", Sabores: "N/A", Beneficios: "C ontiene bayas de schizandra y polen de abejas. Vitaminas C, E, betacaroteno y selenio. Apoya las funciones del sistema inmunologico.", Foto: "./imagenes/productos/2/schizandra.jpg" },
		{ Id: "11", Nombre: "Factor 1000", Categoria: "2", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Contiene calcio y vitamina C. Promueve un mejor rendimiento al realizar la actividad fisica. Mezcla exclusiva de ingredientes vigorizantes.", Foto: "./imagenes/productos/2/factor1000.jpg" },
		{ Id: "12", Nombre: "Tang Kuei Plus", Categoria: "2", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Apoya la circulacion. Promueve el relajamiento muscular y el sueño reparador. Contiene Manzanilla y Tang Kuei Chino.", Foto: "./imagenes/productos/2/tangkueiplus.jpg" },
		{ Id: "13", Nombre: "Rose OX", Categoria: "2", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Tabletas con extractos vegetales antioxidantes. Elaborado a base de romero. Neutraliza los dañinos radicales libres.", Foto: "./imagenes/productos/2/rosex.jpg" },
		{ Id: "14", Nombre: "Fibra Activa", Categoria: "2", Descripcion: "N/A", Sabores: "Manzana", Beneficios: "Polvo para preparar bebida a base de fibras con el delicioso sabor a manzana. Promueve la regularidad de la digestion y el transito intestinal. Apoya el crecimiento saludable de la flora intestinal. Contiene 5g de fibra soluble e insoluble por porcion. Facil de preparar – y delicioso cuando se mezcla o se añade a cualquier sabor de batido.", Foto: "./imagenes/productos/2/fibraactiva.jpg" },

		{ Id: "15", Nombre: "NRG", Categoria: "3", Descripcion: "Thermojetics® Mezcla de Te de Guarana y Naranja Pekoe", Sabores: "N/A", Beneficios: "Ayuda a mantener los niveles de energia. Apoya el estado de concentracion y alerta. Excelente refrigerio. Puede tomarse frio o caliente.", Foto: "./imagenes/productos/3/nrg.jpg" },
		{ Id: "16", Nombre: "LIFTOFF", Categoria: "3", Descripcion: "Liftoff® Tabletas efervescentes Sabor Lima-Limon Alimento Para Deportistas Suplementado Con 4 Vitaminas Alimento en tabletas efervescentes con base en guarana, con adicion de taurina, cafeina y biotina, bajo en calorias, fortificado con vitaminas C, B6, y acido pantotenico, y suplementado con 4 vitaminas del complejo B.", Sabores: "N/A", Beneficios: "Exclusiva combinacion de cafeina, taurina y guarana. Refuerza la produccion de energia. Contiene vitaminas del Complejo B y vitamina C. Dos deliciosos sabores: Limon y Naranja. En tabletas individuales para llevar y disfrutar en cualquier momento.", Foto: "./imagenes/productos/3/CI-liftoff-naranja.jpg" },

		{ Id: "17", Nombre: "Crema Regeneradora de Noche", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Ayuda a la piel elevando el nivel de humectacion y firmeza durante la noche. Apoya la produccion de colageno, hidrata y nutre la piel. Ayuda a revelar una piel mas tersa, clara y luminosa. usela diariamente por la noche, despues de tonificar la piel.", Foto: "./imagenes/productos/4/sa_cremanoche.jpg" },
		{ Id: "18", Nombre: "Locion de Dia para el Rostro con FPS 15", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Hidrata y ayuda a recobrar la firmeza, luminosidad y suavidad de la piel. Formula ligera de facil absorcion. Contiene FPS 15. Apliquela todas las mañanas con un delicado masaje despues de lmi piar y tonificar la piel.", Foto: "./imagenes/productos/4/sa_locion_rostro.jpg" },
		{ Id: "19", Nombre: "Crema Para Cuello y Escote", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Hidrata y revitaliza ayudando a minimizar las lineas finas y arrugas. Formula no grasosa y de facil absorcion. Apliquela por la mañana y por la noche.", Foto: "./imagenes/productos/4/sa_cuello.jpg" },
		{ Id: "20", Nombre: "Crema Refinadora de Labios FPS 15", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Hidratacion instantanea para los labios con un fresco sabor a hierbabuena y FPS 15. Ayuda a reducir las finas lineas alrededor de la boca y brinda un efecto de mayor volumen en los labios.Ideal para todo tipo de piel. Puede ser usado debajo o sobre el lapiz labial.", Foto: "./imagenes/productos/4/sa_labios.jpg" },
		{ Id: "21", Nombre: "NouriFusion Multivitamin Limpiador", Categoria: "4", Descripcion: "Piel Normal a Grasa", Sabores: "N/A", Beneficios: "Remueve el exceso de grasa y el maquillaje sin perjudicar la capa protectora de la piel. Apliquelo todos los dias, por la mañana y por la noche.", Foto: "./imagenes/productos/4/nf_limpiador_oily.jpg" },
		{ Id: "22", Nombre: "NouriFusion Cleaser Multivitamin Limpiador", Categoria: "4", Descripcion: "Piel Normal a Seca.", Sabores: "N/A", Beneficios: "Limpia delicadamente y protege sin resecar la piel. Contiene ingredientes botanicos que ayudan a limpiar la piel manteniendo su humectacion. Apliquelo diariamente por la mañana y por la noche.", Foto: "./imagenes/productos/4/nf_limpiador_dry.jpg" },
		{ Id: "23", Nombre: "NouriFusion Multivitamin Tonificador", Categoria: "4", Descripcion: "Piel Normal a Grasa.", Sabores: "N/A", Beneficios: "Prepara la piel para la humectación. Fórmula ligera y refrescante que ayuda a controlar el exceso de grasa en la piel. Ayuda a mejorar la firmeza de la piel. Aplíquelo diariamente por la mañana y la noche después de limpiar el rostro.", Foto: "./imagenes/productos/4/nf_tonificador_oily.jpg" },
		{ Id: "24", Nombre: "NouriFusion Multivitamin Tonificador", Categoria: "4", Descripcion: "Piel Normal a Seca.", Sabores: "N/A", Beneficios: "Prepara la piel para la humectacion. Tonifica la piel sin resecarla porque no contiene alcohol. uselo diariamente por la mañana y por la noche despues de limpiar el rostro.", Foto: "./imagenes/productos/4/nf_tonificador_dry.jpg" },
		{ Id: "25", Nombre: "NouriFusion Multivitamin Humectante con FPS 15", Categoria: "4", Descripcion: "Piel Normal a Grasa.", Sabores: "N/A", Beneficios: "Humecta ayudando a mantener la firmeza y el tono de la piel. Protege a la piel de los rayos solares. Formula ligera y no grasosa. Apliquelo diariamente por la mañana, luego de tonificar la piel.", Foto: "./imagenes/productos/4/nf_humectante_oily.jpg" },
		{ Id: "26", Nombre: "NouriFusion Multivitamin Moisturizer Humectante con FPS 15", Categoria: "4", Descripcion: "Piel Normal a Seca.", Sabores: "N/A", Beneficios: "Humecta la piel dejandola suave y tersa. Ayuda a prevenir el envejecimiento prematuro y opacidad de la piel con su Factor de Proteccion Solar 15. Apliquelo diariamente luego de tonificar la piel.", Foto: "./imagenes/productos/4/nf_humectante_dry.jpg" },
		{ Id: "27", Nombre: "NouriFusion Multivitamin Mascara Purificante", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Realza el tono natural de la piel. Limpia profundamente los poros y tonifica la piel dejandola suave y lisa. Contiene aceite de hoja de eucalipto, aceite de naranja y glicerina. Aplicar una pequeña cantidad extendiendola suavemente sobre la piel del rostro y cuello, dejar actuar por 10 minutos y enjuagar con agua tibia. Usarla 2 o 3 veces por semana, o segun lo necesite.", Foto: "./imagenes/productos/4/nf_aclarante.jpg" },
		{ Id: "28", Nombre: "NouriFusion Multivitamin Gel para Ojos", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Ayuda a reducir la apariencia de bolsas y ojeras en el parpado inferior. Contiene extracto de pepino, pantenol, ginseng y extracto de hiedra. Apliquelo a cualquier hora del dia, incluso sobre el maquillaje, para ayudar a aliviar la expresion de cansancio.", Foto: "./imagenes/productos/4/nf_eyegel.jpg" },
		{ Id: "29", Nombre: "NouriFusion Multivitamin Exfoliante", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Ayuda a eliminar las celulas muertas de la superficie de la piel, promoviendo un aspecto luminoso y atractivo. Contiene aceite de hoja de eucalipto, papaya, glicerina, semillas de fresa y frambuesa y cera de abejas. Aplicar despues de limpiar la piel extendiendo con las yemas de los dedos y con movimientos circulares, evitando la zona de los ojos y los labios. Retirar con agua tibia.", Foto: "./imagenes/productos/4/nf_exfoliante.jpg" },
		{ Id: "30", Nombre: "NouriFusion Multivitamin Mascara Humectante", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Brinda hidratacion profunda. Promueve la elasticidad en la piel. Contiene extracto de adelfa, manteca de shea, aguacate, aceite de lavanda, extracto de pepino y aceite de uva. Aplicar despues de limpiar la piel, extendiendo una capa de crema sobre la cara y el cuello. Dejar actuar durante 15 minutos. Retirar con agua tibia. Aplicar dos veces por semana.", Foto: "./imagenes/productos/4/nf_mascara.jpg" },
		{ Id: "31", Nombre: "NouriFusion Multivitamin Crema para Ojos", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Perfecta para usar por la mañana, antes del maquillaje y antes de dormir. Humecta y promueve una piel mas firme en el area del contorno de ojos. Contiene aceite de almendra dulce, extracto de hoja de aloe y extracto de semillas de uva. Aplicar durante el dia y la noche dando ligeros toques con la yema de los dedos hasta que la crema se absorba.", Foto: "./imagenes/productos/4/nf_eyecream.jpg" },
		{ Id: "32", Nombre: "Radiant C Crema Limpiadora y Exfoliante Facial", Categoria: "4", Descripcion: "Las esferas de jojoba y el poder antioxidante de la vitamina C se combinan para restaurar la frescura de su rostro cada día.", Sabores: "N/A", Beneficios: "Suaviza su piel dejándola tersa y radiante. Deja una agradable sensación de limpieza en su cutis. Ideal para todo tipo de piel. Aplicar sobre el rostro ligeramente humedecido con suaves movimientos circulares. Enjuagar con agua tibia.", Foto: "./imagenes/productos/4/radiantc_exfoliante.jpg" },
		{ Id: "33", Nombre: "Radiant C Loción Corporal con FPS 15", Categoria: "4", Descripcion: "Con FPS 15. Humecta la piel y la protege de los rayos solares UVA/UVB. Refrescante aroma cítrico. Se absorbe rápidamente sin dejar sensación grasosa sobre la piel. Aplíquela diariamente sobre la piel seca luego de su baño habitual.", Foto: "./imagenes/productos/4/radiantc_locion.jpg" },
		{ Id: "34", Nombre: "Radiant C Face Quencher", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Refresca e hidrata la piel al instante. Humecta y calma la piel. Apliquelo sobre el rostro con los ojos cerrados.", Foto: "./imagenes/productos/4/radiantc_quencher.jpg" },
		{ Id: "35", Nombre: "Man FraganceSpray", Categoria: "4", Descripcion: "Una fragancia viva, refinada y natural. Base citrica con notas de menta acuatica y albahaca.", Sabores: "N/A", Beneficios: "N/A", Foto: "./imagenes/productos/4/VE-man-400px.jpg" },
		{ Id: "36", Nombre: "Woman FraganceSpray", Categoria: "4", Descripcion: "Perfume sutil, distintivo y original. Base citrica con notas de jazmin, lirio acuatico y peonia.", Sabores: "N/A", Beneficios: "N/A", Foto: "./imagenes/productos/4/VE-perfumewoman-400px.jpg" },
		{ Id: "37", Nombre: "Crema Corporal Modeladora", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Contiene ginkgo biloba y acidos frutales. Ayuda a recuperar la firmeza de la piel luego de la reduccion de medidas. Apliquela regularmente luego de usar el Exfoliante Corporal. para ayudar a mejorar la textura y el tono de su piel.", Foto: "./imagenes/productos/4/crema_modeladora.jpg" },
		{ Id: "38", Nombre: "Crema Corporal Exfoliante", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Ayuda a eliminar las celulas muertas de la superficie de la piel dejandola suave y tersa. Contiene jojoba, ingrediente botanico que contribuye a la hidratacion y proteccion de la piel. Prepara su piel para absorber de mejor manera la Crema Corporal Modeladora Herbalife. Apliquela durante el baño dando masajes circulares con una esponja.", Foto: "./imagenes/productos/4/crema_exfoliante.jpg" },
		{ Id: "39", Nombre: "Nourifusion Multivitamin Crema de Noche", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Contiene aceite de semilla de girasol, aceite de oliva y pantenol que promueven una nutricion profunda mientras usted descansa. Apliquela en el rostro y cuello todas las noches antes de acostarse.", Foto: "./imagenes/productos/4/nf_cremanoche.jpg" },
		{ Id: "40", Nombre: "Crema para Manos y Cuerpo", Categoria: "4", Descripcion: "Estudios realizados por un laboratorio independiente demostraron el 100% de aumento de hidratación con la Crema para Manos y Cuerpo Herbal Aloe, comparada con la línea base del estudio.", Sabores: "N/A", Beneficios: "Formulada con aloe vera y manteca de Karité, ingredientes de rápida absorción que dejan la piel con una sensación suave y tersa. Aumenta la hidratación de la piel en un promedio de 100% después de un solo uso.* Brinda hidratación prolongada. Fórmula de rápida absorción.", Foto: "./imagenes/productos/4/HA_crema_manos.jpg" },
		{ Id: "41", Nombre: "Gel Refrescante Corporal", Categoria: "4", Descripcion: "En un estudio clínico, el 100% de los participantes percibió la piel más tersa y suave.", Sabores: "N/A", Beneficios: "Gel formulado con aloe vera y extractos botánicos acondicionadores que hidratan y suavizan la piel. Consistencia ligera, libre de fragancia.", Foto: "./imagenes/productos/4/HA_gel_corp.jpg" },
		{ Id: "42", Nombre: "Jabón de Tocador", Categoria: "4", Descripcion: "N/A", Sabores: "N/A", Beneficios: "Jabón suave para el uso diario formulado con aloe vera, aceite de oliva y vitaminas A, C y E para nutrir la piel. Limpia suavemente sin eliminir los aceites naturales de la piel. Fragancia fresca y suave.", Foto: "./imagenes/productos/4/HA_jabon_barra.jpg" },
	];

	var listaPrincipal = 
			{tag:'li','data-theme':'e','data-corners':'false',
			'data-shadow':'false','data-wrapperels':'div','data-icon':'arrow-r',
			'data-iconpos':'right', class:'prod ${Categoria} ui-link-inherit ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-e',
			children:[
				{tag:'div',class:'ui-btn-inner ui-li',children:[
				{tag:'div',class:'ui-btn-text',children:[
				{tag:'a',class:'ui-link-inherit',href:'productoDetalles.html?id=${Id}','data-ajax':'false',children:[
				{tag:'h2',class:'ui-li-heading',html:'${Nombre}'},
				{tag:'img',class:'ui-li-thumb','style':'height:62px; width:100px',src:'${Foto}'}
				]}
				]},
				{tag:'span',class:'ui-icon ui-icon-arrow-r ui-icon-shadow',html:''}
				]}
			]};

		function cargarProductos(){
			$('#attrTest ul').html('');
			$('#attrTest ul').json2html(listaProductos, listaPrincipal);
			mostrar(0);
		}

		function getUrlVars() {
			var vars = [], hash;
			var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');
			for ( var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		}


function obtenerProducto() {
	id = getUrlVars()["id"];
	console.log("Dentro de obtenerProductos_success");
	tema = '';
	var item = listaProductos[id];
	categoria = listaProductos[id]['Categoria'];
	if(categoria == '1'){tema = 'a';}
	else if(categoria == '2'){tema = 'b';}
	else if(categoria == '3'){tema = 'c';}
	else{tema = 'd';}
	changeGlobalTheme(tema);

	$('#foto-val').css('background-image', 'url(' + item['Foto'] + ')');

	$('#nombre-val').text(item['Nombre']);
	if(item['Descripcion'] == "N/A"){
			$('#contentDescripcion').css('display', 'none');
		}else{
			$('#descripcion-val').text(item['Descripcion']);
		}
	
		if(item['Sabores'] == "N/A"){
			$('#contentSabores').css('display', 'none');
		}else{
			$("#sabores-val").text(item['Sabores']);
		}
		if(item['Beneficios'] == "N/A"){
			$('#contentBeneficios').css('display', 'none');
		}else{
			$('#beneficios-val').text(item['Beneficios']);
		}

	$("#beneficios-val").text(item['Beneficios']);

}

function changeGlobalTheme (theme){
    // These themes will be cleared, add more
    // swatch letters as needed.
    var themes = "a b c d e";

    // Updates the theme for all elements that match the
    // CSS selector with the specified theme class.
    function setTheme(cssSelector, themeClass, theme)
    {
        $(cssSelector)
            .removeClass(themes.split(" ").join(" " + themeClass + "-"))
            .addClass(themeClass + "-" + theme)
            .attr("data-theme", theme);
    }

    // Add more selectors/theme classes as needed.
//    setTheme(".ui-mobile-viewport", "ui-overlay", theme);
//     setTheme("[data-role='page']", "ui-body", theme);
//     setTheme("[data-role='header']", "ui-bar", theme);
//     setTheme("[data-role='listview'] > li", "ui-bar", theme);
    setTheme(".ui-collapsible-heading .ui-btn-icon-left .ui-btn-inner", "ui-btn-up", theme);
//    setTheme(".ui-collapsible-heading .ui-btn-icon-left .ui-btn-inner", "ui-btn-hover", theme);
};

function getData(dropdown) {
    categoria = dropdown.options[dropdown.selectedIndex].value;
    mostrar(categoria);
}

function mostrar(categoria){

	$('.prod').removeClass('ui-first-child');
	$('.prod').removeClass('ui-last-child');

	$('.prod').css('display','none');
	if(categoria==0){
    	$('.prod').css('display','block');
    }else{
    	$('.'+categoria).css('display','block');
    	$('li.'+categoria).first().addClass('ui-first-child');
		$('li.'+categoria).last().addClass('ui-last-child');
    }
	$('.prod').first().addClass('ui-first-child');
	$('.prod').last().addClass('ui-last-child');
}
