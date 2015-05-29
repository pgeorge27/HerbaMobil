/**
 * [crearProductosCa funcion que crea los productos de Usa]
 * @return {[type]} [description]
 */
 function crearProductosCa (){
 	console.log("*************En crearProductos Canada");
 	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosCa'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosCa (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria TEXT, descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), detalles VARCHAR(60), uso VARCHAR(60), foto TEXT)');			     

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Formula 1 Meal Replacement", 
					"1", 
					"Treat your body to a healthy, balanced meal in no time! Not only are these shakes easy to make, they’re also delicious. With up to 23 essential vitamins and minerals– and in various flavors – meal replacement never tasted so good!",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/1/3106_MealReplacement.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Formula 2 Multivitamin Mineral Complex", 
					"1", 
					"Provide your body with 24 essential vitamins and minerals for the maintenance of good health. Multivitamin Mineral Complex helps the body metabolize carbohydrates, fats and proteins.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/1/3115_MultivitaminMineralComplex.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Formula 3 Cell Activator®", 
					"1", 
					"Formula 3 Cell Activator® contains Alpha Lipoic Acid and select botanicals to provide antioxidant effects for the maintenance of good health.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/1/3123_Formula3CellActivator.jpg" 
					]);


				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Roasted Soy Nuts", 
					"2", 
					"This delicious, crunchy, nutritious treat makes an ideal snack at only 100 calories per serving and packed with 9 grams of protein. Portion-controlled servings list nutritional information on each packet. Available in Chile Lime.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/3124_ChileLimonSoyNuts_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Beverage Mix Canister", 
					"2", 
					"",
					"Enjoy an energy burst with this fruity cool Beverage Mix. Just add it to cold water for a refreshingly delicious way to enjoy a low-calorie (only 70 calories per service), healthy drink that boosts energy and helps meet your protein needs (contains 15g of protein per serving).. Available in Peach Mango.",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/3121_BevMix_PeachMango_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Protein Bar", 
					"2", 
					"Get your protein to go! Our Protein Bar is a perfect protein snack to help you sustain energy. The deliciously chewy bar provides 12 g of soy and milk protein and 4 g of fiber. Available in Chocolate Coconut.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0290_ProteinBar_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Protein Bar Deluxe", 
					"2", 
					"Raise the bar when it comes to snacks. Indulge in a chocolate treat while remaining guilt-free with Protein Bar Deluxe – a snack that’s as delicious as it is nutritious with 10 g of protein!",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0365_ProteinBarDeluxe_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Soup Mix", 
					"2", 
					"Enjoy a hearty pick-me-up. Creamy Chicken Soup Mix allows you to whip up a satisfying chicken-flavoured soup in a matter of minutes. It’s instant and delicious!",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0291_ProteinSoupMix_CreamOfChicken_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Total Control®", 
					"2", 
					"Total Control® tablets help relieve fatigue, promote endurance, and enhance motor performance.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0077_TotalControl_Harmonized_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Mineral Complex Advanced", 
					"2", 
					"Contains corn silk and dandelion which are traditionally used in herbal medicine as a diuretic.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0111_MineralComplexAdvanced_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"TJ Yellow", 
					"2", 
					"TJ Yellow tablets provides support for healthy glucose metabolism, helps prevent chromium deficiency, and helps the body metabolize carbohydrates and fats.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0117_TJYellow_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbal Tea Concentrate", 
					"2", 
					"A delicious tea blend of green tea and orange pekoe with cardamon seed and hibiscus for an uplifting treat to temporarily promote alertness and relieve fatigue.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0015_HerbalTeaConcentrate.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Canola Oil Capsules", 
					"2", 
					"Canola Oil Capsules provide a source of essential fatty acids for the maintenance of good health.",
					"Café Latte, Dutch Chocolate, French Vanilla, Wild Berry, Café Latte, Dutch Chocolate, French Vanilla, Wild Berry",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0027_CanolaOilCapsules_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Quickstart", 
					"2", 
					"Jumpstart your way to good nutrition! Get the benefits of our Core Products – Formula 1, Formula 2, Formula 3 and Herbal Tea Concentrate – with the Quickstart Pack.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/4316_QuickstartPack_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Advanced", 
					"2", 
					"The Advanced Pack contains the entire set of Quickstart Pack products, plus additional enhancers Canola Oil Capsules and Mineral Complex Advanced.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/4794_AdvancedPacl_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Protein Drink Mix", 
					"2", 
					"Meet your protein needs and maintain lean muscle mass with Protein Drink Mix. Add to your favorite Formula 1 shake or mix with water for a nutritious protein snack.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/1122_ProteinDrinkMix_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Personalized Protein Powder", 
					"2", 
					"Help build and maintain lean muscle mass with this fat-free protein supplement containing 5 grams of soy and whey protein and all 9 essential amino acids per serving.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/2/0194_PersonalizedProteinPowder_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Probiotic Complex", 
					"3", 
					"Probiotic Complex is formulated with friendly bacteria to temporarily modify gut flora.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0075_ProbioticComplex_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Florafibre", 
					"3", 
					"Replenish intestinal flora that form part of the natural gut flora and promote intestinal health with fibre from an array of sources.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0023_FloraFibre_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbal Aloe Drink", 
					"3", 
					"Our Herbal Aloe Drink, available in original flavor, is a refreshing beverage made from premium-quality aloe vera.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0006_HerbalAloeDrink.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbal Aloe Concentrate", 
					"3", 
					"Our Herbal Aloe Concentrate, available in original and delicious mango flavours, is a refreshing beverage made from premium-quality aloe vera.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/1065_HerbalAloeConcentrate_400_CA.jpg" 
					]);
				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbal Aloe Powder", 
					"3", 
					"Herbal Aloe Powder, available in original and delicious mango flavours, is a refreshing beverage made from premium-quality aloe vera.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/2748_HerbalAloePowder_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Core Complex", 
					"3", 
					"Core Complex targets the key indicators of heart health, including cholesterol, triglycerides and oxidative stress. These convenient daily packets contain six softgels, including Herbalifeline®, CoQ10 Plus, Tri-Shield®, and plant sterols. Not available in Quebec Province (which includes Montreal) for shipping or pick-up.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/1096_CoreComplex_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Niteworks®", 
					"3", 
					"Niteworks® powder mix, rich in vitamins C and E, helps create more life supporting nutrients during the night while you sleep. Niteworks® powder mix also supports vascular health.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0038_Niteworks_OrangeMango_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Garlic Plus", 
					"3", 
					"Garlic Plus supports cardiovascular health and provides antioxidant protection for the maintenance of good health.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0032_GarlicPlus_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Tri-Shield®", 
					"3", 
					"A proprietary formula with 100% pure Neptune Krill Oil (NKO®†), a source of Omega-3 fatty acids, EPA and DHA for the maintenance of good health. † NKO® is a registered trademark of Neptune Technologies & Bioressources, Inc.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0100_TriSheild_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbalifeline®", 
					"3", 
					"Herbalifeline® contains omega-3 fatty acids to help maintain and support cardiovascular health.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0065_Herbalifeline_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"RoseGuard™ (RoseOx)", 
					"3", 
					"RoseGuard™ is a source of vitamins C, A and E. RoseGuard™ also contains turmeric, which is used in Herbal Medicine to aid digestion and as a liver protectant, and Astragalus, which is used in Herbal Medicine to help maintain a healthy immune system.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0139_RoseGuard_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Flex Support®", 
					"3", 
					"Formulated with joints and muscles in mind, Flex Support® Glucosamine, MSM with Herbs helps relieve joint pain associated with osteoarthritis and helps protect against the deterioration of cartilage.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0261_FlexSupport_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Dong Quai", 
					"3", 
					"Dong Quai is formulated with dong quai (or tang kuei) and chamomile, used in Herbal Medicine as a calmative and sleep aid. Also contains calcium to help in development and maintenance of bones and teeth. Adequate calcium and vitamin D throughout life as part of a healthy diet, along with physical activity, may reduce the risk of developing osteoporosis in peri- and post-menopausal women in later life.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0003_DongQuai_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Factor 1000®", 
					"3", 
					"Factor 1000® capsules, containing ginseng, oat and nettle extracts, helps the body to metabolize fats and proteins.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0024_Factor1000_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Xtra-Cal", 
					"3", 
					"Xtra-Cal helps in the development and maintenance of bones and helps to prevent calcium deficiency.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/3/0020_XtraCal_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Canister", 
					"4", 
					"Quench your thirst! H3O® 3-in-1 caffeine-free fitness drink provides rapid hydration and contains essential electrolytes and carbohydrates.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/2744_H3OFitnessDrink.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Stick Packs (15 stick packs per box)", 
					"4", 
					"Quench your thirst while on the go with H3O® stick packs. This 3-in-1 caffeine-free fitness drink provides rapid hydration and contains essential electrolytes and carbohydrates.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/2717_H3O.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Liftoff® 10 Tablets", 
					"4", 
					"Liftoff® effervescent energy drink helps fight fatigue and temporarily helps you stay alert and focused. These individually wrapped on-the-go tablets contain an exclusive blend of taurine, guarana, caffeine, panax ginseng, ginkgo biloba and vitamins C, B6 and B12.",
					"Ignite-Me Orange, Lemon-Lime Blast",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/liftoff-orange.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Instant Tea Mix", 
					"4", 
					"It is derived from the same guarana source prized for centuries by the Amazon Indians. Guarana seeds contain a substance similar to caffeine. Stay refreshed with the Brazilian Herbal Tea, an instant tea mix infused with guarana, a caffeine source that can fight fatigue, temporarily helping you feel more energized.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/0102_BrazilianHerbalTea.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbalife24 Prepare", 
					"4", 
					"Working muscles require oxygen-rich blood. Herbalife24 Prepare contains creatine monohydrate which improves strength, power and performance in repetitive bouts of brief, high-intense activity.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/1414.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbalife24 Restore", 
					"4", 
					"Get the most out of your sleep. Herbalife24 Restore helps in connective tissue formation, provides antioxidants for the maintenance of good health and provides provitamin A to help maintain immune function.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/1418.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Herbalife24 Rebuild Strength", 
					"4", 
					"Herbalife24 Rebuild Strength is a sustained muscle building shake that delivers a tri-core protein-amino blend of free amino acids, whey and casein proteins, along with vitamins and minerals.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/4/1417.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Basic Program: Normal to Dry", 
					"5", 
					"Suited for normal to dry skin, this Herbalife SKIN program is perfect for anyone looking to reveal a smooth, glowing complexion.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1492_HerbaLifeSKIN_BasicProgram_NormaltoDry_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Basic Program: Normal to Oily", 
					"5", 
					"Suited for normal to oily skin, this Herbalife SKIN program is perfect for anyone looking to reveal a clear, glowing complexion.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1496_HerbaLifeSKIN_BasicProgram_NormaltoOily_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Advanced Program: Normal to Dry", 
					"5", 
					"Kick your skin care regimen up a notch. The Advanced Program contains the entire set of Basic – Normal to Oily Herbalife SKIN products, plus Line Minimizing Serum, Hydrating Eye Cream and Firming Eye Gel to help you achieve daily results that include softer, smoother, more radiant skin, and the benefit of a diminished appearance of fine lines and wrinkles.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1493_HerbaLifeSKIN_AdvancedProgram_NormaltoDry_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Advanced Program: Normal to Oily", 
					"5", 
					"Kick your skin care regimen up a notch. The Advanced Program contains the entire set of Basic – Normal to Dry Herbalife SKIN products, plus Line Minimizing Serum, Hydrating Eye Cream and Firming Eye Gel to help you achieve daily results that include softer, smoother, more radiant skin, and the benefit of a diminished appearance of fine lines and wrinkles.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1497_HerbaLifeSKIN_AdvancedProgram_NormaltoOily_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Ultimate Program: Normal to Dry", 
					"5", 
					"Are you ready to take your skin care to the ultimate level? The Ultimate Program contains the entire set of Advanced – Normal to Dry Herbalife SKIN products, plus the Instant Reveal Berry Scrub and Purifying Mint Clay Mask that will help you reveal healthy-looking skin.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1494_HerbaLifeSKIN_UlitmateProgram_NormaltoDry_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Ultimate Program: Normal to Oily", 
					"5", 
					"Are you ready to take your skin care to the ultimate level? The Ultimate Program contains the entire set of Advanced – Normal to Oily Herbalife SKIN products, plus the Instant Reveal Berry Scrub and Purifying Mint Clay Mask that will help you reveal healthy-looking skin.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/1498_HerbaLifeSKIN_UlitmateProgram_NormaltoOily_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"7-Day Results Kit", 
					"5", 
					"Herbalife SKIN 7-Day Results Kit is clinically tested to show that skin looks more glowing and feels softer and smoother in just seven days. Daily Glow Moisturizer, Line Minimizing Serum, Replenishing Night Cream.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0775_HerbalifeSKIN_7DayResultsKit_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Line Minimizing Serum", 
					"5", 
					"Suitable for all skin types, this serum helps diminish the appearance of fine lines and wrinkles while improving your skin’s softness, radiance and glow in a week. Clinically tested on subjects for smoothness, softness, glow, radiance and luminosity measured by visual expert grading at intervals of two, four and seven days. 100% of subjects showed improvement in all five areas over seven days.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0768_HerbaLifeSKIN_LineMinimizingSerum_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Polishing Citrus Cleanser", 
					"5", 
					"Citrus-infused polishing gel cleanser helps remove excess oil, dirt and makeup, leaving your skin feeling revitalized. Formulated for normal to oily skin.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0766_HerbaLifeSKIN_PolishingCitrusCleanser_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Soothing Aloe Cleanser", 
					"5", 
					"Formulate for normal to dry skin, this gentle cleanser leaves your skin feeling soft and clean.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0765_HerbaLifeSKIN_SoothingAloeCleanser_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Energizing Herbal Toner", 
					"5", 
					"No matter your skin type, this alcohol-free facial toner hydrates, gently conditions and soothes skin leaving your skin feeling clean and refreshed.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0767_HerbaLifeSKIN_EnergizingHerbalToner_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Firming Eye Gel", 
					"5", 
					"This refreshing gel helps improve the appearance of the delicate eye area by increasing your skin’s elasticity.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0770_HerbaLifeSKIN_FirmingEyeGel_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Hydrating Eye Cream", 
					"5", 
					"Hydrating Eye Cream minimizes the appearance of fine lines and wrinkles around the eyes, an area which has a lower amount of both sweat and oil glands, making it highly susceptible to dehydration.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0771_HerbaLifeSKIN_HydratingEyeCream_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Daily Glow Moisturizer", 
					"5", 
					"Suitable for all skin types, this all-purpose lotion with illuminating properties will give your face a healthy glow. Your skin will look radiant!",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0769_HerbaLifeSKIN_DailyGlowMoisturizer_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Replenishing Night Cream", 
					"5", 
					"Wake up to skin that feels soft and smooth. This luxurious cream helps double skin’s moisture overnight. Clinically tested on subjects, measuring skin moisture levels at eight-hour intervals. Skin of 100% of subjects showed double the moisture levels over base line after eight hours.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0774_HerbaLifeSKIN_ReplenishingNightCream_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Instant Reveal Berry Scrub", 
					"5", 
					"Use Instant Reveal Berry Scrub to help achieve soft, smooth and healthy-looking skin by removing dead skin cells.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0772_HerbaLifeSKIN_InstantRevealBerryScrub_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Purifying Mint Clay Mask", 
					"5", 
					"Pamper yourself with a spearmint-infused, clay-based mask. This rich, creamy mask has the absorbent and toning effects of bentonite clay to remove dirt and absorb excess oil.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0773_HerbaLifeSKIN_PurifyingMintClayMask_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Strengthening Shampoo", 
					"5", 
					"Fortify your hair with a strengthening shampoo that leaves hair 10 times stronger after just one use and reduces breakage by 90%. No added sulfate. When Strengthening Shampoo and Strengthening Conditioner are used in conjunction versus untreated hair. Results based on Clinical Strengthening and Breakage Study. Average value obtained from Combing Test conducted by a research laboratory on damaged hair tresses. Broken fibre counts were compared on untreated versus treated hair using Herbal Aloe Strengthening Shampoo and Strengthening Conditioner.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/TDC2564NA-00_shampoo_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Strengthening Conditioner", 
					"5", 
					"Strengthen your hair with ahydrolyzed wheat protein-infused conditioner that reduces hair breakage by 90%.* No added sulfate. When Strengthening Shampoo and Strengthening Conditioner are used in conjunction versus untreated hair. Results based on Clinical Strengthening and Breakage Study. Average value obtained from Combing Test conducted by a research laboratory on damaged hair tresses. Broken fibre counts were compared on untreated versus treated hair using Herbal Aloe Strengthening Shampoo and Strengthening Conditioner.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/DC2565NA-01_OP1_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Soothing Gel", 
					"5", 
					"Leave your skin smoother and softer with this aloe vera-infused gel.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/DC2562NA-00_soothing-gel_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Hand & Body Cream", 
					"5", 
					"Hydrate your skin for deep nourishment with Herbal Aloe Hand & Body Cream. This non-greasy cream increases your skin moisture content by 100% after just one use. Hand & Body Cream versus baseline after 20 minutes. Based on Nova Meter reading study coupled with blind sensory panelist observations. In vivo studies conducted by a research laboratory demonstrated 100% increase in skin hydration when using Herbal Aloe Hand & Body Cream compared to baseline.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/TDC2563NA-00_handbody-cream_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Bath & Body Bar Soap", 
					"5", 
					"A blend of aloe vera, olive oil and vitamins A, C and E gently cleanses without stripping necessary oils from your skin and leaves behind a fresh, clean scent.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/2566_HerbalAloe_BodyBar_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Hand & Body Wash", 
					"5", 
					"Hand and body wash made with gentle plant-derived cleansers.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/TDC2561NA-00_handbody-wash_400.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Skin Activator® Day Lotion SPF 15", 
					"5", 
					"Minimize the appearance of fine lines and wrinkles, this gentle, light lotion with UVA/UVB protection against the sun’s harmful and damaging rays moisturizes skin.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0862_SkinActivator_DayLotion_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Radiant C® Body Lotion SPF 15", 
					"5", 
					"Help moisturize and protect skin from daily exposure to the sun’s damaging rays with this citrus-scented lightweight, all-over body lotion infused with Vitamin C.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0445_RadiantC_BodyLotion_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Radiant C® Daily Skin Booster", 
					"5", 
					"This antioxidant-enriched gel-cream seals in skin’s moisture and enhances texture and tone, leaving skin silky soft.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/2890_RadiantC_DailySkinBooster_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Radiant C® Face Quencher", 
					"5", 
					"Instant hydrating mist, for men and women, energizes dehydrated skin. Also helps set makeup for longer wear.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/2997_RadiantC_FaceQuencher_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Body Buffing Scrub", 
					"5", 
					"Reveal softer and smoother-looking skin with the natural exfoliation of jojoba beads.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0353_BodyBuffingScrub_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Body Contouring Crème", 
					"5", 
					"Ginkgo biloba extract and fruit acids help skin appear firmer and more toned.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0354_BodyContouringCream_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Man", 
					"5", 
					"For men who enjoy more refined and natural essences, Man is a cool invigorating scent with watermint and basil.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0344_Man_Fragrance_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Woman", 
					"5", 
					"A subtle yet distinct citrus blend for the modern woman; contains a blend of jasmine, water lily and peony.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/0343_Woman_Fragrance_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Soul", 
					"5", 
					"Harness masculinity with Soul’s blend of yuzu citrus, parsley, lavender and cedarwood, making for a contemporary fragrance that is light and sexy.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/2328_Soul_Fragrance_400_CA.jpg" 
					]);

				tx.executeSql('INSERT INTO ProductosCa (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
					"Heart", 
					"5", 
					"Inspire love with this gentle fragrance for women. Heart is made with botanicals inspired by nature, including water lily, green ivy tea leaves and gardenia.",
					"",
					"",
					"",
					"",
					"../imagenes/productos/canada/5/2329_Heart_Fragrance_400_CA.jpg" 
					],

					function(tx){},
					function(tx,err){
						self.error(tx,err);
					});				     
			})
}