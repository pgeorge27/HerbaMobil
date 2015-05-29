/**
 * [crearProductosChile funcion que crea los productos de Chile]
 * @return {[type]} [description]
 */
 function crearProductosChile (){
 	console.log("*************En crearProductos Chile");
 	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosChile'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosChile (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria VARCHAR(1), beneficios VARCHAR(250), sabores VARCHAR(60), foto TEXT)');			     

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Nutritional Shake Mix", 
					"1", 
					"Suplemento dietario en polvo para preparar bebida a base de fructosa, proteínas, fibra, vitaminas y minerales. Este delicioso batido aporta proteína que ayuda a satisfacer el apetito. Contiene vitaminas y minerales, incluyendo antioxidantes, además de hierbas y fibra. El polvo Nutritional Shake Mix tiene solo 80 kilocalorías y menos de 1 gramo de grasa por porción. Cuando se mezcla con 240 ml de leche descremada, este batido provee solo entre 170 y 180 kilocalorías.",
					"Vainilla - 550 gr. Chocolate - 550 gr. Fresa - 550 gr. Frutas Tropicales - 550 gr. Cookies & Cream - 550 gr y  sobres individuales de 25 gr.",
					"../imagenes/productos/chile/1/batidofresa_2014ok.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Proteína en Polvo Personalizada", 
					"1", 
					"Suplemento dietario en polvo a base de proteína de soja y suero de leche. Contribuye al aporte de proteínas para el desarrollo y mantenimiento de la masa muscular. Las proteínas brindan saciedad ayudando a mantener el apetito bajo control. Una forma de incrementar la ingesta de proteínas sin sumar calorías provenientes de grasas o carbohidratos. Cada porción aporta 5,4 gramos de proteínas de alta calidad de soja y suero de leche, y sólo 23 kilocalorías.",
					"",
					"../imagenes/productos/chile/1/250x250-PPP-AR.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Barra de Proteína", 
					"1", 
					"Alimento dietético (barra) a base de proteína de leche y soja, cacao sabor brownie, con baño sabor chocolate. Libre de gluten. Sólo 132 calorías por porción. 9.6 gr. de proteína por barra. Reemplazo saludable de golosinas. Ideal para disfrutar entre las comidas. Práctica presentación en cajas de 7 unidades.",
					"",
					"../imagenes/productos/chile/1/BarraProteina_2014.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe Concentrado", 
					"1", 
					"Contribuye al bienestar del sistema gastrointestinal. Con concentrado de Aloe vera purificado que garantiza su calidad. El Aloe vera puede ayudar a la absorción de nutrientes. Nuevo envase transparente.",
					"Original",
					"../imagenes/productos/chile/1/Banner-250x250-HAC-AR.jpg" 
					]);


				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Té Concentrado de Hierbas", 
					"1", 
					"Esta deliciosa bebida en polvo combina té verde y extracto de orange pekoe con semillas de cardamomo e hibisco, que logran un sabor agradable. El té verde es conocido por sus propiedades termogénicas y antioxidantes. Se puede preparar frío o caliente. Ideal para acompañar su comida o merienda.",
					"Herbal Concentrate Original - 100 gramos. Herbal Concentrate Limón - 50 gramos y sobres de 5.1 gr",
					"../imagenes/productos/chile/1/te.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Fibra Activa", 
					"2", 
					"Suplemento alimenticio con sabor a manzana. Aporta fibra, 5 g de los 25 g de la ingesta diaria recomendada. Puede contribuir diariamente al correcto funcionamiento intestinal. Añada Fibra Activa a su Nutritional Shake Mix o mézclela con agua.",
					"",
					"../imagenes/productos/chile/2/fibra_activa.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Lipo-Bond", 
					"2", 
					"Suplemento dietario a base de fibras en tabletas. Fórmula única que incluye una combinación de fibras, para ayudar a su bienestar interior.",
					"",
					"../imagenes/productos/chile/2/lipo_bond.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Complejo Multivitamínico", 
					"2", 
					"Suplemento dietario a base de vitaminas, minerales y vegetales en tabletas. Ayuda a reducir el cansancio y fatiga: Contiene magnesio, iodo, folato, ácido pantoténico nutrientes que contribuyen a reducir el cansancio y la fatiga. Protección antioxidante: Con acción antioxidante, gracias a sus vitaminas C, E y betacaroteno. Apoya el sistema inmune: Apoya el sistema inmune gracias a que contiene selenio, zinc, cobre, hierro, vitamina A, B12, B6, C y D. Apoya el metabolismo energético: Ayuda al metabolismo energético gracias a que contiene vitaminas del grupo B, vitaminas A y C, cobre, iodo, hierro, magnesio, manganeso. Piel y cabello: Contiene biotina, zinc, cobre, vitamina C, niacina y riboflavina que contribuyen al mantenimiento de la piel y el cabello saludable.",
					"",
					"../imagenes/productos/chile/2/F2_AR.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbalifeline", 
					"2", 
					"Suplemento dietario a base de aceite de pescado y vitamina E en cápsulas blandas. Proporciona Omega-3. Incluye vitamina E, que apoya la protección contra los radicales libres. En prácticas cápsulas blandas.",
					"",
					"../imagenes/productos/chile/2/herbalifeline.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"RoseActive", 
					"2", 
					"Suplemento dietario a base de extracto de romero y vitamina C en tabletas. Antioxidantes que ayudan a las células del cuerpo a combatir los efectos del estrés y que trabajan contra el daño provocado por los radicales libres del ambiente.",
					"",
					"../imagenes/productos/chile/2/roseactive.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Amarillo", 
					"2", 
					"Suplemento Dietario a Base de Extracto de Garcinia Cambogia, Cromo y Calcio en Tabletas. Formulado a base de cromo y extracto de Garcinia Cambogia.",
					"",
					"../imagenes/productos/chile/2/Amarillo1.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Xtra-Cal Advanced", 
					"2", 
					"Suplemento dietario a base de vitamina D y minerales en tabletas. Alto contenido de Calcio. Contiene magnesio para una mejor absorción y utilización del calcio.",
					"",
					"../imagenes/productos/chile/2/extracal.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"N-R-G Tabletas", 
					"3", 
					"Suplemento dietario a base de guaraná en tabletas. El ingrediente activo del guaraná es la cafeína. Contiene 32 mg de cafeína por tableta.",
					"",
					"../imagenes/productos/chile/3/NRG_tabletas1.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"N-R-G Polvo", 
					"3", 
					"Polvo para preparar bebida analcohólica a base de té con guaraná y saborizado con limón. El ingrediente activo del guaraná es la cafeína. Ayuda a mantener los niveles de vitalidad y atención.",
					"",
					"../imagenes/productos/chile/3/nrg_polvo.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Skin Activator Crema renovadora de noche", 
					"4", 
					"Rica crema humectante que ayuda a promover una piel saludable y de apariencia más joven. El uso continuo de esta suave fórmula, ayuda a reducir la apariencia de líneas finas y arrugas. Ayuda a la piel elevando el nivel de humectación y firmeza durante la noche. Apoya la producción de colágeno, hidrata y nutre la piel. Úsela diariamente por la noche, después de limpiar y tonificar su piel.",
					"",
					"../imagenes/productos/chile/4/sa_crema_noche.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Skin Activator Crema para cuello y escote", 
					"4", 
					"Dado que la piel de su cuello y del escote es delgada y puede mostrar señales de envejecimiento, protéjala con esta fórmula sin grasa y de rápida absorción, diseñada para ayudar a reducir la aparición de líneas finas y arrugas, al tiempo que suaviza la piel. Aplíquela por la mañana y por la noche con suaves masajes sobre el área de cuello y escote limpios.",
					"",
					"../imagenes/productos/chile/4/sa_crema_cuello.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Skin Activator Crema Refinadora de labios", 
					"4", 
					"Crema humectante ligera para labios con una mezcla única de elementos botánicos que ayuda a disminuir la aparición de líneas finas y arrugas. Los labios se sentirán suaves y tersos. Hidratación instantánea para los labios con un fresco sabor a hierbabuena y FPS 15. Ayuda a reducir las finas líneas alrededor de la boca y brinda un efecto de mayor volumen en los labios. Ideal para todo tipo de piel. Aplique suavemente sobre los labios según sea necesario. Puede ser usado debajo o sobre el lápiz labial.",
					"",
					"../imagenes/productos/chile/4/sa_lip_refiner.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Skin activator Loción de día para el rostro", 
					"4", 
					"Hidrata y ayuda a recobrar la firmeza, luminosidad y suavidad de la piel. Su uso continuo ayuda a reducir la aparición de líneas finas y arrugas. Fórmula ligera de fácil absorción. Contiene FPS 15, glucosamina que deja la piel suave, flexible y de apariencia más joven mientras la protege de los dañinos rayos ultravioletas. Puede aplicarse también antes de exponerse al sol. No es un protector solar. Aplíquela todas las mañanas con un delicado masaje después de limpiar y tonificar la piel.",
					"",
					"../imagenes/productos/chile/4/sa_locion_rostro.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion limpiador multivitamínico", 
					"4", 
					"Gel limpiador espumoso que remueve el maquillaje e impurezas. Ayuda a disminuir el exceso de grasa. Deja la piel limpia y fresca. Contiene vitaminas A,C y E. Úselo todos los días, por la mañana y por la noche.",
					"",
					"../imagenes/productos/chile/4/limpiador_oily.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion limpiador multivitamínico", 
					"4", 
					"Remueve suavemente el maquillaje e impurezas. Limpia delicadamente y sin resecar la piel. Contiene vitaminas A,C y E. Úselo diariamente por la mañana y por la noche.",
					"",
					"../imagenes/productos/chile/4/limpiador_dry.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion tonificador multivitamínico", 
					"4", 
					"Contiene vitaminas A, C y E. Prepara la piel para la humectación. Fórmula ligera y refrescante que ayuda a controlar el exceso de grasa en la piel. Ayuda a mejorar la firmeza de la piel. Aplíquelo diariamente por la mañana y la noche después de limpiar el rostro.",
					"",
					"../imagenes/productos/chile/4/tonificador_oily.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion tonificador multivitamínico", 
					"4", 
					"Contiene vitaminas A, C y E. Prepara la piel para la humectación. Tonifica la piel sin resecarla porque no contiene alcohol. Úselo diariamente por la mañana y por la noche después de limpiar el rostro.",
					"",
					"../imagenes/productos/chile/4/tonificador_dry.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion humectante multivitamínico con FPS 15", 
					"4", 
					"Humecta la piel sin dejar una sensación grasosa. La piel se siente suave y tersa. Factor de Protección Solar 15. No es un protector solar. Contiene vitaminas A,C y E. Aplíquelo diariamente por la mañana, luego de tonificar la piel.",
					"",
					"../imagenes/productos/chile/4/humectante_oily.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion humectante multivitamínico con FPS 15", 
					"4", 
					"Humectante con FPS 15 para piel normal a seca. Humecta e hidrata la piel dejándola con una sensación de suavidad y elasticidad. Contiene vitaminas A,C y E. Aplíquelo diariamente por la mañana, luego de tonificar la piel.",
					"",
					"../imagenes/productos/chile/4/humectante_dry.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion exfoliante facial multivitamínico", 
					"4", 
					"Para todo tipo de piel. Revitalizador que suavemente exfolia la piel. Deja la piel suave y sedosa. Contiene vitaminas A,C y E. Ayuda a eliminar las células muertas de la superficie de la piel, promoviendo un aspecto luminoso. Contiene aceite de jojoba, glicerina, semillas de fresa y frambuesa y cera de abejas. Aplicar después de limpiar la piel extendiendo con las yemas de los dedos y con movimientos circulares, evitando la zona de los ojos y los labios. Retirar con agua tibia. Se sugiere continuar con el tonificador.",
					"",
					"../imagenes/productos/chile/4/nf_exfoliante.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion crema para contorno de ojos multivitamínica", 
					"4", 
					"Crema para ojos para todo tipo de piel. Crema rica en emoliente que suaviza y humecta la delicada zona de los ojos, sin dejar una sensación grasosa. Contiene vitaminas A, C y E. Contiene aceite de almendra dulce, extracto de hoja de aloe y extracto de semillas de uva.",
					"",
					"../imagenes/productos/chile/4/nf_crema_ojos.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion gel para ojos multivitamínico", 
					"4", 
					"Para todo tipo de piel. Gel liviano y refrescante para el área alrededor de los ojos. La piel se siente fresca y renovada. Contiene vitaminas A, C y E. Ayuda a reducir la apariencia de bolsas y ojeras en el párpado inferior. Aplíquelo a cualquier hora del día, incluso sobre el maquillaje, para ayudar a aliviar la expresión de cansancio.",
					"",
					"../imagenes/productos/chile/4/nf_gel_ojos.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion máscara aclarante multivitamínica", 
					"4", 
					"Máscara aclaradora para todo tipo de piel. Arcillosa, liviana y limpia efectivamente la piel. Ayuda a remover el exceso de grasa. La piel queda suave y fresca. Contiene vitaminas A, C y E. Contiene aceite de hoja de eucalipto, aceite de naranja y glicerina. Esparza una cantidad abundante de la máscara sobre el cutis limpio y seco, evitando el área de los ojos. Déjela puesta aproximadamente de 10 a 20 minutos. Enjuague bien con agua tibia. Continúe con el tonificador.",
					"",
					"../imagenes/productos/chile/4/nf_clarifying_mask.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion crema de noche multivitamínica", 
					"4", 
					"Para todo tipo de piel que hidrata y humecta la piel. Contiene aceite de semilla de girasol, aceite de oliva y pantenol que promueven una nutrición profunda mientras usted descansa. Contiene vitaminas A, C y E. Aplíquela en el rostro y cuello todas las noches antes de acostarse.",
					"",
					"../imagenes/productos/chile/4/nf_crema_noche.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"NouriFusion máscara humectante multivitamínica", 
					"4", 
					"Máscara humectante para todo tipo de piel. Brinda hidratación profunda. Contiene vitamina A, C y E. Contiene extracto de adelfa, manteca de shea, palta, aceite de lavanda, extracto de pepino y aceite de uva. Aplicar después de limpiar la piel, extendiendo una capa delgada sobre la cara y el cuello. Dejar actuar hasta 20 minutos. Retirar con agua tibia.",
					"",
					"../imagenes/productos/chile/4/nf_mascara_humectante.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Crema corporal modeladora", 
					"4", 
					"Contiene ginkgo biloba y ácidos frutales que le ayudarán a recuperar la firmeza de la piel. Aplíquela regularmente luego de usar la Crema corporal exfoliante de Herbalife para ayudar a mejorar la textura y el tono de su piel. Aplicar la crema corporal modeladora con la yema de los dedos en las áreas deseadas dando ligeros golpes ascendentes.",
					"",
					"../imagenes/productos/chile/4/corporal_modeladora.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Crema corporal exfoliadora", 
					"4", 
					"Ayuda a eliminar las células muertas de la superficie de la piel dejándola suave y tersa. Contiene jojoba, ingrediente botánico que contribuye a la hidratación y protección de la piel. Aplicar la crema corporal exfoliadora con suaves movimientos circulares hasta que sienta su piel limpia y suave. Después de secarse, aplique la crema corporal modeladora.",
					"",
					"../imagenes/productos/chile/4/corporal_exfoliante.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Hand Sanitizer", 
					"4", 
					"Elimina bacterias y gérmenes hasta en un 99.99% sin afectar la humedad natural de la piel. Fórmula libre de alcohol basada en una mezcla botánica hidratante con agradable y suave fragancia. Fácil de llevar en su bolsillo, bolso o maleta de viaje. No deja sensación pegajosa. Ideal para desinfectar superficies, juguetes de niños, etc. Rocíe y espere 30 segundos hasta que el producto se absorba.",
					"",
					"../imagenes/productos/chile/4/spray-ar.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe Shampoo y acondicionador fortificante", 
					"4", 
					"Fórmulas enriquecidas con aloe vera, proteína de trigo hidrolizada y selectos ingredientes botánicos. Dejan el cabello 10 veces más fuerte después de un solo uso y reducen al 90% el cabello quebradizo Ayudan a proteger, reparar y fortalecer el cabello, dejándolo suave y sedoso. Ayudan a conservar el color del cabello teñido. Libres de sulfatos y parabenos. Fórmulas suaves y seguras, ideales para ser usadas por toda la familia, todos los días. Fragancia fresca y suave",
					"",
					"../imagenes/productos/chile/4/HA_shamp_acondi.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe Gel refrescante corporal", 
					"4", 
					"De uso diario para todo tipo de piel. Resultados de suavidad y tersura clínicamente mostrados. Libre de parabenos. Brinda humectación prolongada con extractos botánicos acondicionadores de la piel. Hidrata, suaviza y refresca su piel con esta textura ligera tipo gel y libre de fragancia. Contiene aloe vera y extractos botánicos acondicionadores que cuidarán su piel y la de toda su familia. Aplique diariamente sobre la piel según sea necesario.",
					"",
					"../imagenes/productos/chile/4/HA_gel_corp.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe crema para manos y cuerpo", 
					"4", 
					"De uso diario, para todo tipo de piel. Libre de parabenos. Con ingredientes botánicos. Atrapa la humedad en su piel gracias a los humectantes de triple acción y rápida absorción. Crema ligera a base de sábila y manteca de karité, que deja su piel suave y tersa. Aplicar según sea necesario.",
					"",
					"../imagenes/productos/chile/4/HA_crema_manos.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosChile (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe Jabón líquido para manos y cuerpo", 
					"4", 
					"Humecta y suaviza. Limpia y refresca. Para todo tipo de piel, todos los días. Libre de sulfatos y parabenos con ingrediente botánicos. Su fórmula a base de aloe vera y aceite de oliva es ideal para una limpieza suave e hidratación profunda de la piel; mientras usted disfruta de un baño reconfortante.",
					"",
					"../imagenes/productos/chile/4/HA_jabon_liquid.jpg" 
					],

					function(tx){},
					function(tx,err){
						self.error(tx,err);
					});				     
			})
}