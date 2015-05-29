/**
 * [crearProductosAruba funcion que crea los productos de Chile]
 * @return {[type]} [description]
 */
 function crearProductosAruba (){
 	console.log("*************En crearProductos Aruba");
 	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosAruba'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosAruba (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria VARCHAR(1), beneficios VARCHAR(250), sabores VARCHAR(60), foto TEXT)');			     

				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Fórmula 1 Batido Nutricional", 
					"1", 
					"Polvo para preparar batido nutricional con proteína de soya, fibra, vitaminas y minerales. Este delicioso batido está especialmente formulado para contribuir a una alimentación nutritiva y saludable. Contiene proteína, 21 vitaminas y minerales incluyendo antioxidantes además de fibra y hierbas. Una porción tiene 90 calorías y menos de 1 gramo de grasa*. Cuando se mezcla con 240ml de leche descremada, aporta 170 calorías. Dependiendo del sabor",
					"Vainilla Fresa Cookies & Cream",
					"../imagenes/productos/aruba/1/formula_pina.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Proteína personalizada en polvo", 
					"1", 
					"Complemento alimenticio a base de proteínas de soya y suero de leche. Proteína de alta calidad y libre de grasas para ayudarle a satisfacer su apetito y lograr sus metas de buena nutrición. Una forma de incrementar la ingesta de proteína, lo cual ayuda a mantener su nivel de energía entre comidas y le ayuda a mantener la masa muscular magra.",
					"",
					"../imagenes/productos/aruba/1/ProteinaPersonalizadenPolvo.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Fórmula 2 Complejo Multivitamínico", 
					"1", 
					"Suplemento alimenticio con vitaminas, minerales y hierbas. Provee 22 vitaminas y minerales esenciales para contribuir a una alimentación más saludable que ayude a cubrir las necesidades diarias de vitaminas y minerales. Contiene las vitaminas antioxidantes C, E y beta caroteno además de complejo B. Inclúyalo como parte de su alimentación diaria para una buena nutrición.",
					"",
					"../imagenes/productos/aruba/1/Multivitaminico.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Cell Activator", 
					"1", 
					"Mezcla seleccionada de extractos vegetales y otros nutrientes que contribuyen al bienestar general y pueden ayudar a la absorción de micronutrientes en el organismo. Promueve una mejor absorción de las vitaminas y otros nutrientes. Debido a su contenido de antioxidantes, puede ayudar a proteger las células de todo el organismo. Contiene ingredientes botánicos seleccionados, nutrientes y antioxidantes que le ayudarán a promover una nutrición saludable.",
					"",
					"../imagenes/productos/aruba/1/CellActivatorInternas.jpg" 
					]);
 	
				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Té concentrado de hierbas", 
					"1", 
					"Esta deliciosa bebida en polvo combina té verde y té de orange pekoe con semillas de hibisco y cardamomo y fuentes naturales de cafeína, que logran un sabor agradable. El té verde es conocido por sus propiedades termogénicas naturales (estimula el metabolismo) y antioxidantes. No se hace la declaración de calorías ni se mencionan en el producto. Se puede preparar frío o caliente para acompañar su comida o merienda.",
					"Original –  100 gramos. Limón - 100 gramos. Durazno - 100 gramos",
					"../imagenes/productos/aruba/1/Te1.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosAruba (nombre, categoria, beneficios, sabores, foto) VALUES (?,?,?,?,?)',[
					"Herbal Aloe Concentrado", 
					"2", 
					"Concentrado para preparar bebida de aloe vera. Puede apoyar su bienestar digestivo. Puede consumirse a gusto como parte de su alimentación diaria.",
					"Original.",
					"../imagenes/productos/aruba/2/HerbalAloeConcentradoInternas.jpg" 
					],

					function(tx){},
					function(tx,err){
						self.error(tx,err);
					});				     
			})
}