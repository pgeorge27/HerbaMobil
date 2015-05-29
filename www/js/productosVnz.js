/**
 * [crearProductosVnz funcion que crea los productos de Venezuela]
 * @return {[type]} [description]
 */
function crearProductosVnz (){
	console.log("*************En crearProductos VNZ");
	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosVnz'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosVnz (id INTEGER PRIMARY KEY ASC, pais VARCHARD(2), nombre VARCHAR(50), categoria TEXT, descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), detalles VARCHAR(60), uso VARCHAR(60), foto TEXT)');			     

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Mezcla para Preparar Bebida Nutricional", 
					"1", 
					"El batido nutricional de Herbalife contiene proteina de soya (9gr. por porcion), fibra y 12 vitaminas y minerales para una nutricion completa.", 
					"Vainilla, chocolate, fresa, frutas tropicales, galletas con crema.", 
					"Nutritivo y saludable, buena fuente de vitaminas y minerales, contiene fibra.",
					"N/A",
					"N/A", 
					"../imagenes/productos/espanol/1/121010quickstart4b_r3_4801_400.jpg"]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Formula 2 Multivitamin Complex", 
					"1", 
					"Formula exclusiva que provee 23 vitaminas y minerales esenciales.", 
					"N/A", 
					"Vitaminas A, B, C y D, practica manera de compensar las necesidades diarias de nutrientes, buena fuente de minerales y antioxidantes esenciales.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/1/multivitaminico.jpg"]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',["0", 
					"Formula 3 Mezcla en Polvo a Base de Proteinas", 
					"1", 
					"N/A", 
					"N/A", 
					"Combinacion de proteina de soya y proteina de suero de leche, ayuda a fortalecer la masa muscular magra, es ideal para mezclar con su batido comida favorita.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/1/proteina.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',["0", 
					"Concentrado a Base de Hierbas", 
					"1", 
					"N/A", 
					"Limon, frambuesa, durazno, original", 
					"Delicioso te instantaneo con todas las bondades antioxidantes y termogenicas del te verde. Ayuda a promover la quema de calorias,apoyando sus metas de control de peso. Bajo en calorias.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/1/te.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',["0", 
					"Cell-U-Loss®", 
					"1", 
					"N/A", 
					"N/A", 
					"Apoya el equilibrio normal de liquidos en el cuerpo. Nutre su piel desde adentro.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/1/VE-CellULoss.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',["0", 
					"Total Control", 
					"1", 
					"N/A", 
					"N/A", 
					"Poderosa combinacion de te verde, yerba mate y cacao con otras 9 hierbas. Mantiene los niveles de energia y combate la fatiga.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/1/total_control.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',["0", 
					"Cell Activator Capsulas", 
					"1", 
					"N/A", 
					"N/A", 
					"Promueve una mejor absorcion de las vitaminas y otros nutrientes. Apoya la actividad celular. Ayuda a proteger las celulas de todo el organismo.", 
					"N/A",
					"N/A",		
					"../imagenes/productos/espanol/1/cel_activator.jpg" ]);


				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Herbal Aloe", 
					"2", 
					"Mezcla concentrada de Aloe Vera para Bebida", 
					"N/A", 
					"Refrescante bebida de sabila. Ayuda a calmar la indigestion ocasional. Apoya el sistema inmunologico y la accion autolimpiadora del cuerpo.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/aloe.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Herbalifeline", 
					"2", 
					"Este suplemento alimenticio esta dirigido a cuatro indicadores claves de la salud cardiaca: el colesterol, los trigliceridos, la homocisteina y el estres oxidante.", 
					"N/A", 
					"Ayuda a mantener la presion arterial en rangos normales. Buena fuente de Omega 3 y rico en vitamina E. Promueve los niveles sanos de colesterol y trigliceridos.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/herbalifeline.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Xtra-Cal", 
					"2", 
					"N/A", 
					"N/A", 
					"Suplemento de calcio concentrado para fortalecer los huesos y dientes. Contiene vitamina D, magnesio y hierbas para una mejor absorcion.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/xtracal.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Schizandra Plus®", 
					"2", 
					"N/A", 
					"N/A", 
					"C ontiene bayas de schizandra y polen de abejas. Vitaminas C, E, betacaroteno y selenio. Apoya las funciones del sistema inmunologico.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/schizandra.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Factor 1000", 
					"2", 
					"N/A", 
					"N/A", 
					"Contiene calcio y vitamina C. Promueve un mejor rendimiento al realizar la actividad fisica. Mezcla exclusiva de ingredientes vigorizantes.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/factor1000.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Tang Kuei Plus", 
					"2", 
					"N/A", 
					"N/A", 
					"Apoya la circulacion. Promueve el relajamiento muscular y el sueño reparador. Contiene Manzanilla y Tang Kuei Chino.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/tangkueiplus.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Rose OX", 
					"2", 
					"N/A", 
					"N/A", 
					"Tabletas con extractos vegetales antioxidantes. Elaborado a base de romero. Neutraliza los dañinos radicales libres.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/rosex.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Fibra Activa", 
					"2", 
					"N/A", 
					"Manzana", 
					"Polvo para preparar bebida a base de fibras con el delicioso sabor a manzana. Promueve la regularidad de la digestion y el transito intestinal. Apoya el crecimiento saludable de la flora intestinal. Contiene 5g de fibra soluble e insoluble por porcion. Facil de preparar – y delicioso cuando se mezcla o se añade a cualquier sabor de batido.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/2/fibraactiva.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NRG", 
					"3", 
					"Thermojetics® Mezcla de Te de Guarana y Naranja Pekoe", 
					"N/A", 
					"Ayuda a mantener los niveles de energia. Apoya el estado de concentracion y alerta. Excelente refrigerio. Puede tomarse frio o caliente.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/3/nrg.jpg" ]);
				
				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[ 
					"0", 
					"LIFTOFF", 
					"3", 
					"Liftoff® Tabletas efervescentes Sabor Lima-Limon Alimento Para Deportistas Suplementado Con 4 Vitaminas Alimento en tabletas efervescentes con base en guarana, con adicion de taurina, cafeina y biotina, bajo en calorias, fortificado con vitaminas C, B6, y acido pantotenico, y suplementado con 4 vitaminas del complejo B.", 
					"N/A", 
					"Exclusiva combinacion de cafeina, taurina y guarana. Refuerza la produccion de energia. Contiene vitaminas del Complejo B y vitamina C. Dos deliciosos  Limon y Naranja. En tabletas individuales para llevar y disfrutar en cualquier momento.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/3/CI-liftoff-naranja.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema Regeneradora de Noche", 
					"4", 
					"N/A", 
					"N/A", 
					"Ayuda a la piel elevando el nivel de humectacion y firmeza durante la noche. Apoya la produccion de colageno, hidrata y nutre la piel. Ayuda a revelar una piel mas tersa, clara y luminosa. usela diariamente por la noche, despues de tonificar la piel.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/sa_cremanoche.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[	 
					"0", 
					"Locion de Dia para el Rostro con FPS 15", 
					"4", 
					"N/A", 
					"N/A", 
					"Hidrata y ayuda a recobrar la firmeza, luminosidad y suavidad de la piel. Formula ligera de facil absorcion. Contiene FPS 15. Apliquela todas las mañanas con un delicado masaje despues de lmi piar y tonificar la piel.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/sa_locion_rostro.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema Para Cuello y Escote", 
					"4", 
					"N/A", 
					"N/A", 
					"Hidrata y revitaliza ayudando a minimizar las lineas finas y arrugas. Formula no grasosa y de facil absorcion. Apliquela por la mañana y por la noche.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/sa_cuello.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema Refinadora de Labios FPS 15", 
					"4", 
					"N/A", 
					"N/A", 
					"Hidratacion instantanea para los labios con un fresco sabor a hierbabuena y FPS 15. Ayuda a reducir las finas lineas alrededor de la boca y brinda un efecto de mayor volumen en los labios.Ideal para todo tipo de piel. Puede ser usado debajo o sobre el lapiz labial.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/sa_labios.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Limpiador", 
					"4", 
					"Piel Normal a Grasa", 
					"N/A", 
					"Remueve el exceso de grasa y el maquillaje sin perjudicar la capa protectora de la piel. Apliquelo todos los dias, por la mañana y por la noche.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_limpiador_oily.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Cleaser Multivitamin Limpiador", 
					"4", 
					"Piel Normal a Seca.", 
					"N/A", 
					"Limpia delicadamente y protege sin resecar la piel. Contiene ingredientes botanicos que ayudan a limpiar la piel manteniendo su humectacion. Apliquelo diariamente por la mañana y por la noche.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_limpiador_dry.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Tonificador", 
					"4", 
					"Piel Normal a Grasa.", 
					"N/A", 
					"Prepara la piel para la humectación. Fórmula ligera y refrescante que ayuda a controlar el exceso de grasa en la piel. Ayuda a mejorar la firmeza de la piel. Aplíquelo diariamente por la mañana y la noche después de limpiar el rostro.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_tonificador_oily.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Tonificador", 
					"4", 
					"Piel Normal a Seca.", 
					"N/A", 
					"Prepara la piel para la humectacion. Tonifica la piel sin resecarla porque no contiene alcohol. uselo diariamente por la mañana y por la noche despues de limpiar el rostro.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_tonificador_dry.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Humectante con FPS 15", 
					"4", 
					"Piel Normal a Grasa.", 
					"N/A", 
					"Humecta ayudando a mantener la firmeza y el tono de la piel. Protege a la piel de los rayos solares. Formula ligera y no grasosa. Apliquelo diariamente por la mañana, luego de tonificar la piel.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_humectante_oily.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Moisturizer Humectante con FPS 15", 
					"4", 
					"Piel Normal a Seca.", 
					"N/A", 
					"Humecta la piel dejandola suave y tersa. Ayuda a prevenir el envejecimiento prematuro y opacidad de la piel con su Factor de Proteccion Solar 15. Apliquelo diariamente luego de tonificar la piel.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_humectante_dry.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Mascara Purificante", 
					"4", 
					"N/A", 
					"N/A", 
					"Realza el tono natural de la piel. Limpia profundamente los poros y tonifica la piel dejandola suave y lisa. Contiene aceite de hoja de eucalipto, aceite de naranja y glicerina. Aplicar una pequeña cantidad extendiendola suavemente sobre la piel del rostro y cuello, dejar actuar por 10 minutos y enjuagar con agua tibia. Usarla 2 o 3 veces por semana, o segun lo necesite.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_aclarante.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Gel para Ojos", 
					"4", 
					"N/A", 
					"N/A", 
					"Ayuda a reducir la apariencia de bolsas y ojeras en el parpado inferior. Contiene extracto de pepino, pantenol, ginseng y extracto de hiedra. Apliquelo a cualquier hora del dia, incluso sobre el maquillaje, para ayudar a aliviar la expresion de cansancio.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_eyegel.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Exfoliante", 
					"4", 
					"N/A", 
					"N/A", 
					"Ayuda a eliminar las celulas muertas de la superficie de la piel, promoviendo un aspecto luminoso y atractivo. Contiene aceite de hoja de eucalipto, papaya, glicerina, semillas de fresa y frambuesa y cera de abejas. Aplicar despues de limpiar la piel extendiendo con las yemas de los dedos y con movimientos circulares, evitando la zona de los ojos y los labios. Retirar con agua tibia.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_exfoliante.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Mascara Humectante", 
					"4", 
					"N/A", 
					"N/A", 
					"Brinda hidratacion profunda. Promueve la elasticidad en la piel. Contiene extracto de adelfa, manteca de shea, aguacate, aceite de lavanda, extracto de pepino y aceite de uva. Aplicar despues de limpiar la piel, extendiendo una capa de crema sobre la cara y el cuello. Dejar actuar durante 15 minutos. Retirar con agua tibia. Aplicar dos veces por semana.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_mascara.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"NouriFusion Multivitamin Crema para Ojos", 
					"4", 
					"N/A", 
					"N/A", 
					"Perfecta para usar por la mañana, antes del maquillaje y antes de dormir. Humecta y promueve una piel mas firme en el area del contorno de ojos. Contiene aceite de almendra dulce, extracto de hoja de aloe y extracto de semillas de uva. Aplicar durante el dia y la noche dando ligeros toques con la yema de los dedos hasta que la crema se absorba.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_eyecream.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Radiant C Crema Limpiadora y Exfoliante Facial", 
					"4", 
					"Las esferas de jojoba y el poder antioxidante de la vitamina C se combinan para restaurar la frescura de su rostro cada día.", 
					"N/A", 
					"Suaviza su piel dejándola tersa y radiante. Deja una agradable sensación de limpieza en su cutis. Ideal para todo tipo de piel. Aplicar sobre el rostro ligeramente humedecido con suaves movimientos circulares. Enjuagar con agua tibia.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/radiantc_exfoliante.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Radiant C Loción Corporal con FPS 15", 
					"4", 
					"Con FPS 15. Humecta la piel y la protege de los rayos solares UVA/UVB. Refrescante aroma cítrico. Se absorbe rápidamente sin dejar sensación grasosa sobre la piel. Aplíquela diariamente sobre la piel seca luego de su baño habitual.", 
					"N/A",
					"N/A",
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/radiantc_locion.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Radiant C Face Quencher", 
					"4", 
					"N/A", 
					"N/A", 
					"Refresca e hidrata la piel al instante. Humecta y calma la piel. Apliquelo sobre el rostro con los ojos cerrados.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/radiantc_quencher.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Man FraganceSpray", 
					"4", 
					"Una fragancia viva, refinada y natural. Base citrica con notas de menta acuatica y albahaca.", 
					"N/A", 
					"N/A", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/VE-man-400px.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Woman FraganceSpray", 
					"4", 
					"Perfume sutil, distintivo y original. Base citrica con notas de jazmin, lirio acuatico y peonia.", 
					"N/A", 
					"N/A", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/VE-perfumewoman-400px.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema Corporal Modeladora", 
					"4", 
					"N/A", 
					"N/A", 
					"Contiene ginkgo biloba y acidos frutales. Ayuda a recuperar la firmeza de la piel luego de la reduccion de medidas. Apliquela regularmente luego de usar el Exfoliante Corporal. para ayudar a mejorar la textura y el tono de su piel.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/crema_modeladora.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema Corporal Exfoliante", 
					"4", 
					"N/A", 
					"N/A", 
					"Ayuda a eliminar las celulas muertas de la superficie de la piel dejandola suave y tersa. Contiene jojoba, ingrediente botanico que contribuye a la hidratacion y proteccion de la piel. Prepara su piel para absorber de mejor manera la Crema Corporal Modeladora Herbalife. Apliquela durante el baño dando masajes circulares con una esponja.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/crema_exfoliante.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Nourifusion Multivitamin Crema de Noche", 
					"4", 
					"N/A", 
					"N/A", 
					"Contiene aceite de semilla de girasol, aceite de oliva y pantenol que promueven una nutricion profunda mientras usted descansa. Apliquela en el rostro y cuello todas las noches antes de acostarse.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/nf_cremanoche.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Crema para Manos y Cuerpo", 
					"4", 
					"Estudios realizados por un laboratorio independiente demostraron el 100% de aumento de hidratación con la Crema para Manos y Cuerpo Herbal Aloe, comparada con la línea base del estudio.", 
					"N/A", 
					"Formulada con aloe vera y manteca de Karité, ingredientes de rápida absorción que dejan la piel con una sensación suave y tersa. Aumenta la hidratación de la piel en un promedio de 100% después de un solo uso. Brinda hidratación prolongada. Fórmula de rápida absorción.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/HA_crema_manos.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Gel Refrescante Corporal", 
					"4", 
					"En un estudio clínico, el 100% de los participantes percibió la piel más tersa y suave.", 
					"N/A", 
					"Gel formulado con aloe vera y extractos botánicos acondicionadores que hidratan y suavizan la piel. Consistencia ligera, libre de fragancia.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/HA_gel_corp.jpg" ]);

				tx.executeSql('INSERT INTO ProductosVnz (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"0", 
					"Jabón de Tocador", 
					"4", 
					"N/A", 
					"N/A", 
					"Jabón suave para el uso diario formulado con aloe vera, aceite de oliva y vitaminas A, C y E para nutrir la piel. Limpia suavemente sin eliminir los aceites naturales de la piel. Fragancia fresca y suave.", 
					"N/A",
					"N/A",
					"../imagenes/productos/espanol/4/HA_jabon_barra.jpg"
					],
					function(tx){},
					function(tx,err){
						self.error(tx,err);
					});				     
			})
}