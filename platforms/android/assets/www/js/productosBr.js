/**
 * [crearProductosBrasil funcion que crea los productos de Brasil]
 * @return {[type]} [description]
 */
function crearProductosBrasil (){
	console.log("*************En crearProductos BR");
	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosBrasil'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosBrasil (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria VARCHAR(2), descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), preparacion VARCHAR(60), uso VARCHAR(60), indicacion TEXT, ingrediente TEXT, foto TEXT)');			     

//////////////////////////////////PRODUCTOS BRASIL //////////////////////////////////
////////////////////////////////// CATEGORIA 1 //////////////////////////////////
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Shake Herbalife", 
	"1", 
	"Pó para o Preparo de Bebida para Controle de Peso.  Para diversificar o sabor do seu Shake, prepare novas receitas adicionando frutas, sucos sem calorias, iogurte para beber e outros alimentos saudáveis e de baixas calorias. Além de tornar o Shake ainda mais gostoso, estes alimentos o deixam ainda mais nutritivo, porém é importante observar a quantidade de calorias que está sendo adicionada para que isso não comprometa o programa de controle de peso. ", 
	"- Embalagem 550g (21 porções): - Chocolate com Coco • Mousse de Maracujá • Doce de Leite • Baunilha Cremoso • Chocolate Cremoso • Morango Cremoso • Cookies & Cream • Baunilha • Frutas Tropicais - Embalagem com 7 sachês de 26g cada: • Baunilha Cremoso", 
	"Para controlar de forma simples o total de calorias ingeridas e manter uma proporção saudável entre carboidratos, proteínas e gorduras durante um programa de Controle de Peso. Para garantir a ingestão dos nutrientes necessários para o bom funcionamento do organismo: os Shakes Herbalife fornecem 23 vitaminas e minerais. Os Shakes Herbalife, quando preparados conforme instruções do rótulo, fornecem aproximadamente 18 g de proteínas por porção – 23% mais proteína do que a média de outros substitutos de refeição comuns** • 100% das proteínas do Shake são de alto valor biológico, contêm todos os aminoácidos essenciais em proporções ideais para suprir as necessidades de proteínas do organismo • Cada porção contém mais de um terço das necessidades diárias de cálcio quando preparada com 250 ml de leite semidesnatado  Shakes Chocolate com Coco, Mousse de Maracujá, Doce de Leite, Baunilha Cremoso, Chocolate Cremoso, Morango Cremoso e Cookies & Cream  • Doces e adequados ao paladar brasileiro com a mesma média calórica dos demais sabores. • Cremosos e fáceis de preparar. Você vai precisar de poucos segundos para atingir a cremosidade desejada tanto no liquidificador quanto no preparador de shake. • Aromas ricos e equilibrados. Macronutrientes na medida certa • Proteínas de alta qualidade: O perfil conta com a proteína concentrada do soro do leite e a isolada da soja. Ambas são classificadas como proteínas de alto valor biológico.• Fibras de aveia e inulina adicionadas na proporção ideal entre fibras solúveis e insolúveis. • Carboidratos diferenciados – de mais lenta absorção: A frutose (açúcar das frutas) leva mais tempo para ser digerida porque sua absorção é mais lenta, o que ajuda a manter os níveis de glicose no sangue equilibrados.", 
	"",
	"Redução do peso Substitua duas das três refeições principais do dia pelo Shake Herbalife. Manutenção do peso Substitua uma das três refeições principais do dia pelo Shake Herbalife. Ganho de peso Acrescente até dois Shakes Herbalife ao seu cardápio diário. Inclua em sua refeição principal ou como lanche saudável no intervalo entre as refeições. ",
	"Quem pode consumir? O Shake Herbalife foi desenvolvido para ser consumido por adultos saudáveis. Grupos populacionais específicos, como lactentes (crianças em fase de amamentação), mães que amamentam, crianças, adolescentes, gestantes e idosos devem consultar um médico ou nutricionista antes de iniciar o consumo. Como é um alimento, o Shake Herbalife pode ser consumido todos os dias em programas de Controle de Peso. ",
	"",
	"../imagenes/productos/brasil/1/Shakes_170x160.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Protein Powder", 
	"2", 
	"Alimento com proteína isolada de soja e de soro de leite - 240 g. Alimento com proteína isolada de soja e de soro de leite - 480 g O Protein Powder é um pó de proteína sem sabor para ser adicionado ao Shake Herbalife e a outros alimentos e bebidas. ", 
	"N/A", 
	"Uma colher de sopa (6 g) fornece 5 g de proteínas e apenas 22 calorias. Possui proteínas de alto valor biológico, ou seja, contém aminoácidos em proporções ideais para ajudar a suprir as necessidades de proteínas do organismo. Livre de gorduras, açúcar e carboidratos, é uma excelente opção para suplementar as necessidades de proteína do organismo. Pode ser acrescentado ao Shake Herbalife e em outros alimentos e bebidas ", 
	"",
	"Uma colher de sopa rasa (aproximadamente 6 g) de uma a seis vezes ao dia, associada a uma salada, sopa ou Shake ",
	"",
	"",
	"../imagenes/productos/brasil/2/PPP-produto.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Multivitaminas e Minerais", 
	"2", 
	"Suplemento de Vitaminas e Minerais É um suplemento que contém 23 micronutrientes essenciais. ", 
	"N/A", 
	"As vitaminas e minerais desempenham funções fundamentais no organismo. O Multivitaminas e Minerais é um suplemento especialmente formulado que fornece quantidades adequadas de micronutrientes para complementar as necessidades do dia a dia de forma rápida e prática. Possui fórmula balanceada e não contém calorias.", 
	" ",
	"Dois tabletes por dia, preferencialmente nas refeições.",
	" ",	
	" ",
	"../imagenes/productos/brasil/2/multi-vitaminas-peq.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Herbalifeline®", 
	"2", 
	"Óleo de Peixe com Ômega 3 em cápsulas É uma exclusiva combinação de óleos marinhos altamente refinados, fonte de Ômega 3, especialmente EPA e DHA. ", 
	"N/A", 
	"O consumo de ácidos graxos Ômega 3 auxilia na manutenção de níveis saudáveis de triglicerídeos (gorduras “ruins”). Contém 200 mg de Ômega 3 por cápsula. Não deixa sabor de peixe. Composto por lipídios marinhos. Contém 54% da ingestão diária recomendada de Vitamina E ", 
	" ",
	" Uma cápsula por dia após qualquer refeição.",
	" ",
	" ",
	"../imagenes/productos/brasil/2/Herbalifeline-11-2012.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Xtra-Cal", 
	"2", 
	"Xtra-Cal: Suplemento de Cálcio, Magnésio e Vitamina D", 
	"N/A", 
	"As vitaminas e minerais desempenham funções essenciais em nosso organismo e algumas associações otimizam sua ação. 40% da ingestão diária recomendada de Cálcio. 57% da ingestão diária recomendada de Magnésio. 50% da ingestão diária recomendada de Vitamina D ", 
	" ",
	"Um tablete uma vez ao dia, antes da refeição",
	" ",
	" ",
	"../imagenes/productos/brasil/2/ni-ni-xtra-cal.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Fiber & Herb", 
	"2", 
	"- Fibras vegetais em tabletes. Fiber & Herb é um suplemento de fibras formulado com exclusiva combinação da fibra de aveia e de diversos vegetais. ", 
	"N/A", 
	"• É uma forma prática de complementar as necessidades de fibras do organismo • Possui exclusiva combinação de fibras e vegetais • Adiciona poucas calorias à dieta • Possui alto teor de fibras (38,7 g de fibra em 100g) ", 
	"",
	"• Dois tabletes a cada refeição, três vezes ao dia • Para um melhor desempenho das fibras é importante aumentar a ingestão de água ",
	"",
	"",
	"../imagenes/productos/brasil/2/FiberHerb.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Fiberbond®", 
	"2", 
	"Fibra de aveia e beterraba em tabletes O Fiberbond® é um suplemento de fibras formulado com exclusiva combinação de fibras de aveia e beterraba.", 
	"N/A", 
	"• É uma forma prática de complementar as necessidades de fibras do organismo • Possui alto teor de fibras (56 g de fibras em 100 g) • Contém fibras solúveis e insolúveis importantes para o bom funcionamento do intestino • Praticamente não adiciona calorias à dieta (1,67 kcal por tablete) ", 
	"",
	"• Dois tabletes a cada refeição, três vezes ao dia • Para melhor desempenho das fibras, é importante beber água com frequência, em torno de 1,5 litros por dia ",
	"",
	"",
	"../imagenes/productos/brasil/2/ni-Fiberbond.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Fiber Concentrate", 
	"2", 
	"Fiber Concentrate Fiber Concentrate é um produto prático e muito saboroso que auxilia no consumo diário de fibras, responsáveis pelo bom ritmo intestinal, ao mesmo tempo que hidrata e refresca. ", 
	"N/A", 
	"• É uma forma prática de complementar as necessidades de fibras do organismo • Adiciona poucas calorias à dieta • Ajuda a regular os níveis de açúcar no sangue • Ajuda a diminuir os níveis de colesterol no sangue * Aumentando a quantidade de fibras ingeridas, mantenha seu corpo sempre hidratado ", 
	"• Dissolver 15 ml (1 e 1/2 colher de sopa) do concentrado em 185 ml de água (também pode ser dissolvido em água gaseificada). ",
	"• Para um melhor desempenho das fibras é importante aumentar a ingestão de água • A sugestão de ingestão do Fiber Concentrate é de até duas porções por dia O Ministério da Saúde adverte:Não existem evidências científicas comprovadas de que este alimento previna, trate ou cure doenças.",
	" ",
	" ",
	"../imagenes/productos/brasil/2/ni-n-Fiber-Concentrate.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"N.R.G", 
	"3", 
	"NRG é um produto à base de guaraná, planta conhecida como ótima fonte de cafeína. Em tabletes ou em pó, o NRG é destinado a pessoas que buscam produtos saudáveis e sem calorias", 
	"Abebida à base de chá preto e guaraná", 
	"Pó • Uma porção de NRG em pó (1 g) contém 40 mg de cafeína. • Possui delicioso sabor cítrico. • Não contém calorias ou açúcar. Tabletes • Uma porção de NRG (2 tabletes) contém 64 mg de cafeína. • Versão prática de consumo do guaraná ", 
	"• Pó: dissolver ½ colher de chá (1 g) do pó em 200 ml de água quente ou fria. ",
	"• Pó: Consumir a qualquer hora do dia, observando que contêm 40 mg de cafeína por porção de 200ml*. * Uma xícara (30 ml) de café expresso possui teor de cafeína de 30 a 50 ml – IFIC [2008]. • Tabletes: ingerir dois tabletes por dia, preferencialmente pela manhã e à tarde. ",
	"",
	"",
	"../imagenes/productos/brasil/3/NRG-po.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Bebidas", 
	"4", 
	"As Bebidas à base de Chá Herbalife são bebidas de baixas calorias que contêm chá verde e preto. Como não há adição de açúcar, são excelentes opções de bebida para hidratar o corpo. ", 
	"Sabor: Original Embalagem 100 g – 59 porções. Sabores: Original, Limão, Framboesa e Pêssego Embalagem 50g – 29 porções", 
	"• Possuem baixas calorias e baixo teor de açúcares. • Deliciosos sabores para sua hidratação diária. • Contêm 85 mg de cafeína por porção. • São práticos, possuem embalagem pequena e fácil de levar para qualquer lugar. • É possível consumi-los quentes ou frios ", 
	"• Dissolver ½ colher de chá (1,7 g) em 200 ml de água e beber quente ou frio ",
	"Pode ser consumido várias vezes ao dia, observando que contêm 85 mg de cafeína por porção de 200 ml*. * Uma xícara (30 ml) de café expresso possui teor de cafeína de 30 a 50 mg – IFIC [2008] ",
	"",
	"",
	"../imagenes/productos/brasil/4/Cha-Original-Herbalife-2013.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sopa Instantânea", 
	"5", 
	"Mistura para sopa instantânea nos sabores. As Sopas Instantâneas são produzidas com matérias-primas liofilizadas, um processo de desidratação do alimento que garante sua forma original e seu valor nutritivo, além do sabor. São uma excelente opção de lanche saudável para ser consumido entre as principais refeições ou como entrada no almoço ou jantar.", 
	"• Legumes e Verduras. • Frango com Legumes. • 4 Queijos com Croutons.", 
	"• Cremosas e saborosas, as sopas são preparadas com grande variedade de ingredientes e temperos naturais • Ajudam a reduzir os picos de fome entre as refeições • Alimento com cerca de 90 calorias por sachê • Ricas em vitaminas e minerais • Fonte de de fibras (4,5 g por porção) • Fonte de proteínas (5,1 g por porção), possui como principais fontes a proteína isolada de soja, do leite e do soro de leite, consideradas de alto valor biológico • Baixo teor de sódio: 40% menos sódio que uma sopa tradicional • Sem gordura trans e com baixo teor de gorduras saturadas ", 
	"Despeje o conteúdo do sachê em uma caneca ou prato fundo. Acrescente 200 ml de água fervente e misture até ficar homogêneo. Para preparo no micro-ondas, misture o conteúdo do sachê em 200 ml de água fria e leve ao micro-ondas por um minuto e meio. Misture novamente e a sopa estará pronta para consumo. ",
	"Consumir as Sopas Instantâneas entre as principais refeições. As sopas também podem servir como entrada ou complemento das refeições principais. Consumir até duas porções por dia, sendo uma de cada vez.",
	"",
	"",
	"../imagenes/productos/brasil/5/ni-cp-sopas-instantaneas.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Barras de Proteína", 
	"5", 
	"As Barras de Proteína Herbalife, formuladas com proteínas de alto valor biológico, são uma excelente opção de lanche saudável ou para os momentos de desejo por doces, já que são cobertas por chocolate. ", 
	" Barra de Proteína com recheio sabor brownie e cobertura de chocolate. Barra de Proteína com recheio sabor artificial de limão e cobertura de chocolate ", 
	"• Ajudam a reduzir os picos de fome entre as refeições. • Contêm cerca de 10g de proteínas de alto valor biológico por porção. • Dois deliciosos sabores: Brownie (recheio macio de brownie com pedacinhos de amendoim) e Citrus Lemon (delicioso recheio cítrico). • Alimento fácil de transportar e que pode ser consumido em qualquer lugar.", 
	" ",
	"Consumir as Barras de Proteína entre as principais refeições.",
	"",
	"",
	"../imagenes/productos/brasil/5/barra_brownie.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Hydrate", 
	"6", 
	"O Hydrate é um suplemento hidroeletrolítico que ajuda a manter o corpo hidratado.", 
	"N/A", 
	"Reidrate seu corpo para que você esteja pronto para sua atividade física. Rápida reposição de líquidos. Baixo teor de açúcares (1,4 g). Eletrólitos disponíveis (318 mg). Vitaminas do Complexo B (Tiamina e B6). Sabor leve e refrescante de tangerina", 
	"Adicione um sachê em 480 ml de água. Agite bem.",
	"Antes, durante ou após a atividade física para atletas de resistência e força. O seu consumo deve ser orientado por um nutricionista ou médico",
	"Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Dextrose",
	"",
	"../imagenes/productos/brasil/6/24H-hidrate-s.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Prolong", 
	"6", 
	"O Prolong é um suplemento energético que garante energia extra durante o treino. Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Frutose", 
	"Limão", 
	"A combinação de carboidratos da frutose e maltodextrina auxilia na utilização adequada das calorias durante o treino, repondo a energia consumida com a atividade física. Relação Carbo-Proteína 12:1 (Carboidratos: frutosee maltodextrina e Proteína: Isolada do soro do leite). Adequado teor calórico (252 calorias). Eletrólitos disponíveis (522 mg). Vitaminas do Complexo B (Tiamina, Riboflavina e B6). Delicioso sabor limão. ", 
	"Misture 70 g (6 colheres de sopa) em 650 ml de água. Agite bem.",
	"Durante a atividade física para atletas de resistência. O seu consumo deve ser orientado por um nutricionista ou médico. ",
	"Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Frutose",
	"",
	"../imagenes/productos/brasil/6/24H-prolong-s.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Rebuild Strength", 
	"6", 
	"O Rebuild Strength é um suplemento protéico que contribui para a recuperação e ganho de massa muscular. Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Frutose e Sacarose", 
	"N/A", 
	"Oferece um mix de proteínas (proteínas isolada e concentrada do soro do leite), vitaminas do complexo B e ferro. Mix de proteínas (25 g): isolada e concentrada do soro do leite. Vitaminas do complexo B (Tiamina e B6). Ferro (3,5 mg): componente essencial da hemoglobina. Com favorito sabor chocolate.", 
	"Misture 50,5 g (5 colheres de sopa) em 280 ml de água. Agite bem.",
	"Após a atividade física para atletas de força. O seu consumo deve ser orientado por um nutricionista ou médico.",
	"Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Frutose e Sacarose",
	"",
	"../imagenes/productos/brasil/6/24H-rebuild-strength-s.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Rebuild Endurance", 
	"6", 
	"O Rebuild Endurance é um suplemento energético que auxilia a recuperação muscular e a reposição de energia. Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Sacarose", 
	"Baunilha", 
	"Contém uma combinação elaborada de carboidratos e de proteínas isolada e concentrada do soro do leite. Mix de proteínas (8,4 g): isolada e concentrada do soro do leite. Maltodextrina como fonte de carboidratos. Com versátil sabor baunilha", 
	"Misture 44,5 g (4 colheres de sopa) em 250 ml de água. Agite bem.",
	"Após a atividade física para atletas de resistência. O seu consumo deve ser orientado por um nutricionista ou médico. ",
	"Os produtos da linha Herbalife24 Hours foram desenvolvidos para serem consumidos por atletas. Diabéticos: Contém Sacarose",
	"",
	"../imagenes/productos/brasil/6/24H-rebuild-endurance-s.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sabonete em Barra Soft Green Frutas Vermelhas", 
	"7", 
	"O Sabonete em Barra Soft Green Frutas Vermelhas limpa e deixa a pele macia e delicadamente perfumada", 
	"N/A", 
	"Fórmula não oleosa elaborada com chá verde e frutas vermelhas, que limpa suavemente sem ressecar a pele. • Produz uma espuma cremosa que proporciona hidratação e suavidade a pele. • É produzido sem gordura animal. • Dermatologicamente testado e aprovad", 
	"",
	"1.Espalhe sobre a pele molhada com movimentos suaves até obter espuma. 2. Enxágue em seguida",
	"• Todos os tipos de pele. • Homens e mulheres. • Uso diário (durante o banho ou ao lavar as mãos).",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes; • Extrato de Frutas Vermelhas: contém extrato de amora e extrato de morango, ingredientes naturais que possuem propriedades emolientes; • Fragrância de Frutas Vermelhas: associada à beleza e sensualidade; • Glicerina 100 % vegetal e manteiga de Karité: que produzem uma espuma cremosa e não ressecam a pele.",
	"../imagenes/productos/brasil/7/soap-softgreen-redberries.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Óleo de Banho Hidratante Desodorante Frutas Vermelhas", 
	"7", 
	"Óleo de banho hidratante leve e suave elaborado com extrato de chá verde e de frutas vermelha.", 
	"N/A", 
	"• Perfuma e hidrata a pele. • Dermatologicamente testado e aprovado. • Excelente opção para ser usada em massagens desde que seja removido posteriormente.", 
	"",
	"1. Aplique na pele do corpo limpa e úmida espalhando com movimentos suaves. 2. Enxágue retirando o excesso",
	"• Todos os tipos de pele. • Uso diário (durante o banho). • Homens e mulheres.",
	"",
	"../imagenes/productos/brasil/7/bath_oil-softgreen-redberries.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Creme Hidratante Desodorante para o Corpo Frutas Vermelhas", 
	"7", 
	"Creme hidratante para o corpo elaborado com extrato chá verde e frutas vermelhas, que hidrata e protege a pele.", 
	"N/A", 
	"• Fórmula elaborada com extrato de chá verde e de frutas vermelhas que forma uma película protetora na pele e ajuda a mantê-la hidratada. • Dermatologicamente testado e aprovado.", 
	"",
	"Massageie o produto sobre o corpo após o banho ou sempre que necessário.",
	"• Todos os tipos de pele. • Uso diário (após o banho ou sempre que necessário). • Homens e mulheres",
	"- Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. - Extrato de Frutas Vermelhas: contém extrato de amora e extrato de morango, ingredientes naturais que possuem propriedades emolientes. - Fragrância de Frutas Vermelhas: associada à beleza e sensualidade. - Ésteres de óleo de oliva: ingrediente natural que hidrata.",
	"../imagenes/productos/brasil/7/moisturizer-softgreen-redberries.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Desodorante Antitranspirante Roll-On Frutas Vermelhas", 
	"7", 
	"", 
	"N/A", 
	"• Proteção clinicamente comprovada durante 24 horas contra os odores da transpiração. • Fórmula leve e sem álcool, perfuma e hidrata oferecendo suavidade e maciez às axilas. • Dermatologicamente testado e aprovado.", 
	"",
	" 1. Agite antes de usar 2. Deslize a esfera nas axilas secas 3. Espere o produto secar antes de se vestir ",
	"• Todos os tipos de pele. • Uso diário (sempre que necessário). • Homens e mulheres.",
	"- Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes.- Extrato de Frutas Vermelhas: contém extrato de amora e extrato de morango, ingredientes naturais que possuem propriedades emolientes. - Fragrância de Frutas Vermelhas: associada à beleza e sensualidade. - Farnesol: inibe o crescimento de micro- organismos causadores do mau odor. - Sesquicloridróxido de alumínio: elimina micro-organismos causadores do mau odor.",
	"../imagenes/productos/brasil/7/deodorant-softgreen-redberries.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Creme Hidratante Desodorante Baunilha.", 
	"7", 
	"", 
	"N/A", 
	"• Hidrata e protege a pele formando uma ‘película protetora’, dando um toque macio e aveludado. • Dermatologicamente testado e aprovado. • pH fisiológico. ", 
	"",
	"1.Massageie o produto sobre o corpo após o banho ou sempre que necessário.",
	"• Todos os tipos de pele. • Uso diário após o banho ou sempre que necessário. • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. • Extrato de baunilha: ingrediente natural que possui propriedades emolientes. • Fragrância de baunilha: associada a conforto e sedução. • Ésteres de óleo de oliva: ingrediente natural que hidrata.",
	"../imagenes/productos/brasil/7/SGBaun-CremeCorpo-peq.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Creme Hidratante Desodorante para o Corpo", 
	"7", 
	"Creme hidratante para o corpo elaborado com chá verde, que hidrata e protege a pele.", 
	"N/A", 
	"• Fórmula elaborada com chá verde que forma uma película protetora na pele e ajuda a mantê-la hidratada. • Dermatologicamente testado e aprovado", 
	"",
	"Massageie o produto sobre o corpo após o banho ou sempre que necessário.",
	"• Todos os tipos de pele. • Uso diário após o banho ou sempre que necessário. • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. • Ésteres de óleo de oliva: ingrediente natural que hidrata",
	"../imagenes/productos/brasil/7/SG_Hidratcorpo.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sabonete Líquido Para as Mãos", 
	"7", 
	"Sabonete líquido que limpa sem agredir a pele, com o equilíbrio e o frescor do chá verde.", 
	"N/A", 
	"Fórmula elaborada com chá verde que limpa suavemente a pele sem remover sua proteção natural. Perfuma e deixa as mãos com um toque macio.", 
	"",
	"1. Aplique nas mãos molhadas massageando-as suavemente. 2. Enxágue em seguida.",
	"• Todos os tipos de pele. • Uso diário (sempre que necessário). • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes.• Ésteres de óleo de oliva ",
	"../imagenes/productos/brasil/7/SGSabMaos.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Desodorante Antitranspirante Roll-On", 
	"7", 
	"Proteção 24 horas contra odores e cuidado suave com o equilíbrio e o frescor do chá verde.", 
	"N/A", 
	"Proteção durante 24 horas contra os odores da transpiração com fórmula hidratante que oferece suavidade e maciez às axilas.", 
	"",
	"1. Agite antes de usar. 2. Deslize a esfera nas axilas secas. 3. Espere o produto secar antes de se vestir.",
	"• Todos os tipos de pele. • Uso diário (sempre que necessário). • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes • Triclosan e Sesquicloridróxido de alumínio, que inibem o crescimento de microorganismos causadores do mau odor. ",
	"../imagenes/productos/brasil/7/SGDesod.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Óleo de Banho Hidratante", 
	"7", 
	"Óleo de banho hidratante leve e suave elaborado com chá verde.", 
	"N/A", 
	"• Perfuma e hidrata a pele. • Dermatologicamente testado e aprovado. • Excelente opção para ser usada em massagens.", 
	"",
	"1. Aplique na pele do corpo limpa e úmida espalhando com movimentos suaves. 2. Enxágue retirando o excesso.",
	"• Todos os tipos de pele. • Uso diário (sempre que necessário). • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. • Óleo vegetal de arroz: ingrediente natural que hidrata.",
	"../imagenes/productos/brasil/7/SGOleoBanho.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Gel Hidratante para o Corpo", 
	"7", 
	"Hidratante em gel para suavizar, refrescar e aliviar a pele do corpo.", 
	"N/A", 
	"• Rico em Aloe Vera e com Extrato de Chá Verde, é ideal para pessoas que gostam de produtos com textura mais leve, ou que buscam sensação de alívio pós-sol. • Fórmula com textura leve e não-oleosa, refrescante e de rápida absorção que hidrata e suaviza a pele do corpo. • Pode ser usado como pós-sol, pois proporciona alívio e frescor, prevenindo a descamação da pele. • Ajuda a recuperar peles secas ou danificadas pelo sol. • Dermatologicamente testado, possui pH fisiológico (próximo ao da nossa pele), o que reduz os riscos de incompatibilidades com a pele. • Perfume suave.", 
	"",
	"Massageie o produto sobre o corpo após o banho ou sempre que necessário.",
	"• Todos os tipos de pele. • Uso diário (sempre que necessário). • Homens e mulheres.",
	"• Extrato de chá verde: ingrediente natural com propriedades antioxidantes • Aloe Vera: ingrediente de origem natural com propriedades suavizantes e condicionantes, que ajudam a reidratar peles secas e/ou queimadas pelo sol, proporcionando sensação de frescor.",
	"../imagenes/productos/brasil/7/SGGelCorpo.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Gel Antisséptico para as mãos.", 
	"7", 
	"", 
	"N/A", 
	"• O gel antisséptico com chá verde higieniza, mata microorganismos e perfuma as mãos. • Ação instantânea e secagem rápida. • Higieniza e perfuma as mãos sem o uso de água e sabão.", 
	"",
	"1. Aplique uma pequena quantidade do gel na palma das mãos e esfregue até secar. 2. Não enxágue",
	"• Todos os tipos de pele. • Uso diário ou sempre que necessário. • Homens e mulheres",
	"• Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. • Álcool etílico e Triclosan para combater microorganismos.",
	"../imagenes/productos/brasil/7/SG_Gel_Maos.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sabonete em Barra.", 
	"7", 
	"O Sabonete em Barra Soft Green limpa e deixa a pele macia e delicadamente perfumada. Com extrato de chá verde, glicerina 100% vegetal e manteiga de Karité, o sabonete Soft Green tem fórmula suave. Sua espuma cremosa proporciona frescor e suavidade à pele.", 
	"N/A",  
	"Fórmula elaborada com chá verde, com textura cremosa e não oleosa que limpa suavemente sem ressecar a pele. Produz uma espuma cremosa que proporciona frescor e suavidade a pele. Dermatologicamente testado. Pele levemente perfumada.", 
	"", 
	"1. Espalhe sobre a pele molhada com movimentos suaves até obter espuma. 2. Enxágue em seguida ",
	"Todos os tipos de pele. Homens e mulheres. Uso diário (durante o banho ou ao lavar as mãos).",
	"Extrato de Chá verde: ingrediente natural que possui propriedades antioxidantes. Glicerina 100% vegetal e manteiga de Karité: que produz espuma cremosa e não ressecam a pele",
	"../imagenes/productos/brasil/7/SGSab.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Creme Hidratante Desodorante para as Mãos.", 
	"7", 
	"Creme hidratante para as mãos elaborado com chá verde, de textura leve e toque refrescante que perfuma a pele.", 
	"N/A", 
	"Fórmula com textura leve de absorção rápida que hidrata e perfuma as mãos.", 
	"",
	"1. Massageie o produto sobre as mãos sempre que necessário. 2. Não enxágue.",
	"• Todos os tipos de pele. • Uso diário ou sempre que necessário. • Homens e mulheres.",
	"Extrato de chá verde: ingrediente natural que possui propriedades antioxidantes. • Ésteres de óleo de oliva: ingrediente natural que hidrata.",
	"../imagenes/productos/brasil/7/SG_Hidr_Maos.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Gel Suavizante Herbal Aloe", 
	"7", 
	"Gel leve, hidratante e não oleoso elaborado com Aloe Vera. Com nova reformulação e embalagem!.", 
	"N/A", 
	"Suaviza e hidrata, sem fragrância, com textura leve e refrescante. ", 
	"",
	"1. Massageie o produto sobre o corpo após o banho ou sempre que necessário. 2. Não enxágüe.",
	"- Gel refrescante e hidratante de fácil absorção, ajuda a recuperar a pele ressecada e danificada pelo sol. - Textura leve e não oleosa que alivia as irritações leves da pele. - Todos os tipos de pele. - Uso diário (ou sempre que necessário). - Aplicar sobre o corpo limpo e seco. ",
	"• Aloe Vera: ingrediente natural com propriedades regeneradoras da pele. • Também é hidratante, calmante e refrescante. • Ingredientes botânicos: hidratam e suavizam a pele.",
	"../imagenes/productos/brasil/7/gel.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Condicionador Hidratante Herbal Aloe ", 
	"7", 
	"Condicionador com Aloe Vera que proporciona hidratação e movimento aos cabelos. Com nova reformulação e embalagem!.", 
	"N/A", 
	"Nutre e protege, além de reparar o cabelo ao deixa-lo macio e sedoso. A fórmula foi desenvolvida para facilitar o penteado e dar vitalidade aos fios. Livre de parabenos, fórmula suave e segura, com fragrância fresca. Hidratação e movimento aos cabelos, reforçando o brilho natural.", 
	"",
	"1. Após usar o Shampoo Herbal Aloe, espalhe o condicionador sobre os fios, massageando por um a dois minutos. 2. Enxágue em seguida com água morna a fria, retirando todo o produto.",
	"Indicado para todos os tipos de cabelo de homens e mulheres e para o uso diário. ",
	" Aloe Vera: ingrediente natural que hidrata e condiciona os cabelos. • ngredientes botânicos: hidratam e suavizam os cabelos. • Proteína hidrolisada do trigo ou microproteína: capaz de penetrar profundamente na estrutura do cabelo a fim de proteger e reparar os fios. • Aumenta a capacidade do cabelo em reter a umidade, deixando-o suave e brilhante. • Óleo de Jojoba: deixa os cabelos macios e hidratados.",
	"../imagenes/productos/brasil/7/Condicionador.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Shampoo Hidratante Herbal Aloe ", 
	"7", 
	"Shampoo com Aloe Vera nutre e hidrata, além de reparar os cabelos, deixando-os macios e sedosos.", 
	"N/A", 
	"Livre de parabenos e sulfatos, a fórmula suave e segura e fragrâncias frescas.", 
	"",
	"1. Espalhe o shampoo nas mãos e esfregue nos fios e no couro cabeludo com a ponta dos dedos. Prefira água morna ou fria para lavar os cabelos. A água fria ajuda a fechar as cutículas e a devolver o brilho dos cabelos. 2. Antes de usar o secador, retire o excesso de água com uma toalha, apenas espremendo os fios. Mantenha o secador a uns 15 centímetros dos fios, em temperatura mínima ou média.",
	"Indicado para todos os tipos de cabelo, homens e mulheres e uso diário.",
	"• Aloe Vera: ingrediente natural que proporciona brilho e maciez aos cabelos. • Ingredientes botânicos: hidratam e suavizam os cabelos. • Proteína hidrolisada do trigo ou microproteína: capaz de penetrar profundamente na estrutura do cabelo a fim de proteger e reparar os fios. Também aumenta a capacidade do cabelo em reter a umidade, deixando-o suave e brilhante. • Óleo de Jojoba: deixa os cabelos macios e hidratados.",
	"../imagenes/productos/brasil/7/Shampoo.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Loção de Limpeza | Pele normal a seca", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Seca. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200ml - Tônico: 200ml - Hidratante para o Rosto FPS 15: 50ml.", 
	"N/A", 
	"Remove as impurezas sem agredir a camada protetora natural da pele ", 
	"",
	"1. Molhe o rosto e pescoço. 2. Aplique a loção com movimentos circulares de dentro para fora. 3. Evite a região dos olhos. 4. Enxágue com água morna ou fria.", 
	"• Pele normal a seca. • Uso diário, pelo menos duas vezes ao dia, antes de tonificar e hidratar a pele. • Homens e mulheres.", 
	"Vitaminas A, C e E, Óleos naturais de amêndoa e kukui.",
	"../imagenes/productos/brasil/7/ne-nourifusion-locao-limp-ns.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Tônico | Pele normal a seca", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Seca. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200ml. - Tônico: 200ml. - Hidratante para o Rosto FPS 15: 50ml.", 
	"N/A", 
	"Equilibra o pH da pele preparando-a para receber o hidratante e auxilia na remoção de impurezas complementando a ação da loção de limpeza.", 
	"",
	"1. Aplique o tônico com algodão fazendo movimentos suaves e circulares. 2. Evite a região dos olhos. 3. Não enxágue. Espere alguns segundos para a pele absorver o produto.",
	"• Pele normal a seca. • Uso diário, pelo menos duas vezes ao dia, após limpar e antes de hidratar a pele. • Homens e mulheres.",
	"• Vitaminas A, C e E. • D Pantenol, que ajuda na hidratação. • Extrato de Hamamelis com propriedade adistringente, que auxilia a desobstruir os poros.",
	"../imagenes/productos/brasil/7/ne-nourifusion-tonico-ns.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Hidratante FPS 15 | Pele normal a seca ", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Seca. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200 ml. - Tônico: 200 ml. - Hidratante para o Rosto FPS 15: 50 ml.", 
	"N/A", 
	"Hidrata e protege a pele contra raios solares UVA e UVB e previne o envelhecimento cutâneo precoce.", 
	"",
	"1. Aplique o hidratante no rosto com movimentos circulares de dentro para fora. 2. Evite a região dos olhos. 3. Não enxágue. Espere alguns segundos para a pele absorver o produto",
	"• Pele normal a seca. • Uso diário, após limpar e tonificar a pele. • Homens e mulheres. ",
	"",
	"../imagenes/productos/brasil/7/ne-nourifusion-hidratante-ns.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Loção de Limpeza | Pele normal a oleosa", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Oleosa. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200ml. - Tônico: 200ml. - Hidratante para o Rosto FPS 15: 50ml", 
	"N/A", 
	"Limpa, remove e regula o excesso de oleosidade sem agredir a pele e promove uma sensação de limpeza e frescor.", 
	"",
	"1. Aplique o hidratante no rosto com movimentos circulares de dentro para fora. 2. Evite a região dos olhos. 3. Enxágue com água morna ou fria.",
	"Pele normal a oleosa. Uso diário, pelo menos duas vezes ao dia, antes de tonificar e hidratar a pele. Homens e mulheres.",
	"Vitaminas A, C e E. Óleo de Malaleuca e óleo essencial de laranja: função adstringente que ajuda a regular a oleosidade da pele. Extrato de Aloe Vera.",
	"../imagenes/productos/brasil/7/ne-nourifusion-locao-limp-no.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Tônico | Pele normal a oleosa", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Oleosa. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200ml. - Tônico: 200ml. - Hidratante para o Rosto FPS 15: 50ml.", 
	"N/A", 
	"Equilibra o pH da pele, auxilia na remoção de impurezas e promove a sensação de frescor.", 
	"",
	"1. Aplique o tônico com algodão no rosto fazendo movimentos suaves e circulares. 2. Evite a região dos olhos. 3. Não enxágüe. Espere alguns segundos para a pele absorver o produto.",
	"Pele normal a oleosa. Uso diário, pelo menos duas vezes ao dia, após limpar e antes de hidratar a pele. Homens e mulheres.",
	"Vitaminas A, C e E. Óleo de Malaleuca e óleo essencial de laranja: função adstringente que ajuda a regular a oleosidade. Extrato de Aloe Vera.",
	"../imagenes/productos/brasil/7/ne-nourifusion-tonico-no.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Hidratante FPS 15 | Pele normal a oleosa", 
	"7", 
	"Produto disponível apenas no Kit Pele Normal a Oleosa. Não é vendido separadamente. Composição do Kit: - Loção de Limpeza: 200ml. - Tônico: 200ml. - Hidratante para o Rosto FPS 15: 50ml.", 
	"N/A", 
	"Protege contra os raios solares UVA e UVB e previne o envelhecimento cutâneo precoce por meio da hidratação.", 
	"", 
	"1. Aplique o hidratante no rosto com movimentos circulares e de dentro para fora. 2. Evite a região dos olhos. 3. Não enxágüe. Espere alguns segundos para a pele absorver o produto.",
	"Pele normal a oleosa. Uso diário. Homens e mulheres.",
	"Vitaminas A, C e E. D Pantenol que hidrata a pele.",
	"../imagenes/productos/brasil/7/ne-nourifusion-hidratante-no.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Gel Esfoliante Facial", 
	"7", 
	"", 
	"N/A", 
	"Auxilia na renovação da pele removendo as células mortas e devolvendo seu brilho natural Prepara a pele para outras etapas do tratamento", 
	"",
	"1. Aplique o gel esfoliante na pele do rosto molhada e limpa com movimentos circulares. 2. Evite a região dos olhos. 3. Enxágue com água morna ou fria",
	"Todos os tipos de pele. Uma a três vezes por semana, após limpar e tonificar a pele. Homens e mulheres.",
	"• Sementes de morango e framboesa. • Ceras de carnaúba e de abelha. • Óleo de jojoba.",
	"../imagenes/productos/brasil/7/ne-nourifusion-gel-esfoliante.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Máscara Hidratante", 
	"7", 
	"A Máscara Hidratante Multivitaminas recupera a pele seca e diminui a aparência escamosa causada pela falta de hidratação", 
	"N/A", 
	"Ação rápida e profunda graças à alta concentração dos componentes", 
	"", 
	"1. Aplique a máscara com a pele limpa e seca com movimentos circulares e deixe agir de 10 a 20 minutos. 2. Evite a região dos olhos. 3. Enxágue com água morna ou fria", 
	"Todos os tipos de pele. Duas a três vezes por semana ou sempre que a pele estiver mais seca que o normal. Homens e mulheres.",
	"• Vitaminas A, C e E. • Manteiga de Karitê que promove hidratação profunda. • D Pantenol que hidrata a pele",
	"../imagenes/productos/brasil/7/ne-nourifusion-masc-hidratante.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Máscara Clareadora", 
	"7", 
	"Elaborada com argila branca e rica em alumínio, a Máscara Clareadora ajuda a retirar o excesso de oleosidade e revitaliza a pele.", 
	"N/A", 
	"Ação rapidamente retirando o excesso de oleosidade da pele graças à alta concentração dos componentes.", 
	"",
	"1. Aplique a máscara com a pele limpa e seca com movimentos circulares e deixe agir de 10 a 20 minutos. 2. Evite a região dos olhos. 3. Enxágue com água morna ou fria.",
	"Todos os tipos de pele. Duas a três vezes por semana ou sempre que a pele estiver mais seca que o normal. Homens e mulheres.", 
	"• Vitaminas A, C e E. • Azeloglicina: ativo hidratante. • Óleo de eucalipto e extrato de Hamamelis: adstringentes que ajudam a controlar a oleosidade da pele.",
	"../imagenes/productos/brasil/7/ne-nourifusion-masc-clareadora.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Gel Para o Contorno dos Olhos", 
	"7", 
	"Gel de rápida absorção para reduzir o inchaço e as olheiras.", 
	"N/A", 
	"Reduz visivelmente o inchaço e as olheiras. Hidrata e revitaliza a pele assegurando um aspecto sadio e prevenindo o aparecimento de linhas de expressão.",
	"",
	"1. Aplique o gel ao redor dos olhos com toques suaves das pontas dos dedos. 2. Não enxágüe. Espere alguns segundos para a pele absorver o produto.",
	"Todos os tipos de pele. Homens e mulheres. Uso diário, após limpar e tonificar e antes de hidratar a pele.",
	"• Vitaminas A, C e E. • D Pantenol. • Tecnologia Eyeliss: combinação de 3 moléculas que melhoram a circulação local diminuindo a retenção de líquidos",
	"../imagenes/productos/brasil/7/ne-nourifusion-gel-contorno-olhos.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Creme Noturno", 
	"7", 
	"O Creme Noturno fornece os nutrientes necessários para renovação saudável da pele.", 
	"N/A", 
	"• Rico em vitaminas. • Renova e hidrata a pele intensamente durante a noite promovendo um aspecto saudável. • Rápida absorção e textura cremosa.",
	"",
	"1. À noite, aplique o creme na pele seca após a limpeza e tonificação. 2. Evite a região dos olhos. 3. Enxágue apenas pela manhã com água morna ou fria",
	"Todos os tipos de pele. • Homens e mulheres. • Uso diário (noite), após limpar e tonificar a pele.",
	"Vitaminas A, C e E. Hidrolito 5: ativo moderno que age como excelente hidratante.",
	"../imagenes/productos/brasil/7/ne-nourifusion-creme-noturno.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Kit NouriFusion™ - Pele Normal a Seca", 
	"7", 
	"Kit com produtos da linha NouriFusion™ para peles normal a seca, formada pelos produtos: • Loção de Limpeza - 200ml. • Tônico - 200ml. • Hidratante - 50ml.",
	"N/A",
	"Produtos para limpar, tonificar e hidratar a pele do rosto. Adequados para peles normal a seca, contém vitaminas A, C e E.", 
	"",
	"Conforme instruções nos rótulos dos produtos. ",
	"• Para pele opaca e sem brilho, com poros quase imperceptíveis, que apresenta sinais de desidratação, com maior tendência à descamação e vermelhidão. • Uso diário.",
	"",
	"../imagenes/productos/brasil/7/kit_normal_dry.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Kit NouriFusion™ - Pele Normal a Oleosa", 
	"7", 
	"Kit com produtos da linha NouriFusion™ para peles normal a oleosa, formada pelos produtos: • Loção de Limpeza - 200ml. • Tônico - 200ml. • Hidratante - 50ml.", 
	"N/A", 
	"Produtos para limpar, tonificar e hidratar a pele do rosto. Adequados para peles normal a oleosa, contém vitaminas A, C e E.", 
	"",
	"Conforme instruções nos rótulos dos produtos.",
	"Para pele que apresenta brilho excessivo devido a abundância de oleosidade, com tendência à formação de acnes e com poros dilatados e visíveis. Uso diário.",
	"",
	"../imagenes/productos/brasil/7/kit_normal_oily.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Skin Activator® Daily Replenishing Cream", 
	"7", 
	"Ajuda a fornecer a nutrição que a pele necessita para manter uma aparência mais jovem e saudável.", 
	"N/A", 
	"Testes clínicos comprovaram que após 4 semanas de uso contínuo do complexo Glucosamina ocorre a redução visível das linhas finas e rugas, além de melhorar a textura da pele.", 
	"", 
	"1. Aplique o creme na pele limpa e tonificada com movimentos circulares e de dentro para fora. 2. Evite a região dos olhos. 3. Não enxágue.", 
	"Homens e mulheres com mais de 35 anos. Todos os tipos de pele. Uso diário, após limpar e tonificar a pele.",
	"• Glucosamina: estimula a produção de colágeno. • Óleo de amêndoas: tem propriedade hidratante. • Chá verde: ingrediente natural com propriedade antioxidante.",
	"../imagenes/productos/brasil/7/Skin-Activator-2012.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Fresh Style", 
	"7", 
	"Colônia Desodorante Para a mulher com estilo Um perfume fresco e leve cheio de resplendor.",
	"N/A",
	"",
	"",
	"",
	"Mulheres com estilo, dinâmicas, otimistas, que vivem a vida de forma feliz e plena.",
	"Cítrica Fresca Saída (frutado cítrico): Limão italiano, bergamota, maçã vermelha, pêssego. Coração (flora branca com especiarias): Canela, lírio do vale. Fundo (almíscar amadeirado): Madeira de cedro, almíscar.",
	"../imagenes/productos/brasil/7/freshstyle.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sensual Secret", 
	"7", 
	"Colônia Desodorante Desfrute a arte da sedução com o perfume Sensual Secret", 
	"N/A", 
	"", 
	"",
	"", 
	"Mulheres modernas e sensuais, que gostam de seduzir e serem seduzidas", 
	"Oriental Gourmand: possui notas de frutas vermelhas, baunilha e essências orientais como o sândalo e o patchouli",
	"../imagenes/productos/brasil/7/ne-lively-fragances-sensual-secret.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"So Happy!", 
	"7", 
	"Desfrute de um momento de alegria intensa com o perfume So Happy!", 
	"N/A", 
	"", 
	"",
	"",
	"Mulheres felizes, que gostam de aproveitar a vida e sentem-se bem em qualquer ambiente.",
	"Floral Frutal: possui notas de flores brancas e frutas exóticas que conferem frescor, delicadeza e feminilidade",
	"../imagenes/productos/brasil/7/ne-lively-fragances-so-happy.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Night Style", 
	"7", 
	"Expresse o seu poder sedutor. Um perfume sedutor com um toque de estilo e elegância.", 
	"N/A", 
	"", 
	"",
	"",
	"Homens modernos e encantadores, que conhecem seu lado intrigante e sedutor.",
	"Frescor Oriental Saída (cítrico frutado): Toranja, bergamota, abacaxi. Coração (floral com especiarias): flor de laranjeira, pimenta preta, noz moscada. Fundo (amadeirado oriental almíscar): madeira de cedro, madeira de sândalo, sementes de tonka, baunilha e almíscar.",
	"../imagenes/productos/brasil/7/NIGHTSTYLE-bottle_small.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Sea Power", 
	"7", 
	"Sinta a força da natureza com o perfume Sea Power.", 
	"N/A", 
	"", 
	"",
	"",
	"Homens que gostam do mar, céu azul e sol. São independentes e modernos.",
	"Marinho Aquático Fresco: combina notas marinhas e cítricas como bergamota e mandarina.",
	"../imagenes/productos/brasil/7/ne-lively-fragances-sea-power.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Extreme Adventure", 
	"7", 
	"Desfrute da adrenalina sentida em aventuras radicais com o perfume Extreme Adventure", 
	"N/A", 
	"", 
	"",
	"",
	"Homens que apreciam aventuras. Estão sempre prontos para escalar montanhas e aproveitar a vida.",
	"Amadeirado Especiado: combina notas de madeira com especiarias como o alecrim, flores de laranja e vetiver",
	"../imagenes/productos/brasil/7/ne-lively-fragances-ext-adventure.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Radiant CTM Daily Facial Scrub Cleanser", 
	"7", 
	"Gel esfoliante de limpeza com vitamina C para uso diário na pele do rosto", 
	"N/A", 
	"Fórmula desenvolvida com ceras naturais que auxilia na renovação natural da pele, devolvendo seu brilho natural.", 
	"",
	"1. Molhe o rosto e pescoço. 2. Aplique o gel com movimentos circulares e de dentro para fora. 3. Evite a região dos olhos. 4. Enxágue com água morna ou fria.",
	"Todos os tipos de pele. Homens e mulheres. Uso diário, antes de tonificar e hidratar a pele",
	"• Vitamina C, poderoso antioxidante. • Cera de carnaúba e óleo de jojoba. • Óleos de laranja e limão com propriedades calmantes, que ajudam na limpeza da pele.",
	"../imagenes/productos/brasil/7/ne-radiant-c-facial-scrub.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Radiant CTM Daily Skin Booster", 
	"7", 
	"Gel hidratante para o rosto com Vitamina C", 
	"N/A", 
	"Ajuda a suavizar os sinais visíveis de fadiga, realçando o vigor e a textura da pele.",
	"", 
	"1. Aplique o gel na pele seca com movimentos circulares e de dentro para fora. 2. Evite a região dos olhos. 3. Não enxágue.",
	"Todos os tipos de pele. Homens e mulheres. Uso diário, após limpar e tonificar a pele.",
	"• Vitamina C, poderoso antioxidante. • Óleos naturais para hidratação intensa",
	"../imagenes/productos/brasil/7/ne-radiant-c-skin-booster.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Body Buffing Scrub", 
	"7", 
	"Loção esfoliante que prepara a pele do corpo para o creme delineador", 
	"N/A", 
	"Deixa a pele mais lisa, macia e com aparência saudável além de ajudar no processo de esfoliação natural", 
	"",
	"1. Aplique o produto durante o banho sobre as coxas, culotes, glúteos e abdômen com movimentos circulares. 2. Enxágue.",
	"Todos os tipos de pele. Uso diário durante o banho. Região dos glúteos, coxa e abdômen.",
	"Óleo de jojoba que proporciona maciez à pele.",
	"../imagenes/productos/brasil/7/ne-body-buffing-scrub.png" 
	]);
tx.executeSql('INSERT INTO ProductosBrasil (nombre , categoria, descripcion, sabores, beneficios, preparacion, uso, indicacion, ingrediente, foto) VALUES (?,?,?,?,?,?,?,?,?,?)',[
	"Body Contouring Creme", 
	"7", 
	"Creme rico em ingredientes naturais que ajuda a deixar a pele mais lisa e o corpo delineado.", 
	"N/A", 
	"• Hidrata e ajuda a delinear o corpo. • Melhora a textura da pele, deixando-a mais lisa, a absorção e que melhora a aparência de “casca de laranja” da pele", 
	"",
	"1. Aplique com as pontas dos dedos sobre as áreas do corpo desejadas com movimentos circulares e de baixo para cima.",
	"• Todos os tipos de pele • Uso diário antes ou após a prática de atividade física para potencializar os resultados do produto. • Usar após o Body Buffing Scrub para obter melhores resultados. • É recomendável usar antes ou após a prática de atividade física para potencializar o efeito do produto",
	"• Extratos de Centella asiática e de Ginko Biloba que auxiliam na circulação local. • Óleo de jojoba que hidrata e deixa a pele macia. • Cafeína que ajuda na absorção dos principais ingredientes.",
	"../imagenes/productos/brasil/7/ne-body-contouring-creme.png" 
	],
	function(tx){},
	function(tx,err){
		self.error(tx,err);
	});				     
})
}