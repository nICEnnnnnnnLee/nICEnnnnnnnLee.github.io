function $(e){return document.getElementById(e)}
function jtgo(cc){ 
var str=''; 
for(var i=0;i<cc.length;i++){ 
if(charft().indexOf(cc.charAt(i))!=-1) 
str+=charjt().charAt(charft().indexOf(cc.charAt(i))); 
else if(charhx().indexOf(cc.charAt(i))!=-1) 
str+=charjt().charAt(charhx().indexOf(cc.charAt(i))); 
else 
str+=cc.charAt(i); } 
return str; }

function ftgo(cc){ 
var str=''; 
for(var i=0;i<cc.length;i++){ 
if(charjt().indexOf(cc.charAt(i))!=-1) 
str+=charft().charAt(charjt().indexOf(cc.charAt(i))); 
else if(charhx().indexOf(cc.charAt(i))!=-1) 
str+=charft().charAt(charhx().indexOf(cc.charAt(i))); 
else 
str+=cc.charAt(i); } 
return str; }

function qqgo(cc){ 
var str=''; 
for(var i=0;i<cc.length;i++){ 
if(charjt().indexOf(cc.charAt(i))!=-1) 
str+=charhx().charAt(charjt().indexOf(cc.charAt(i))); 
else if(charft().indexOf(cc.charAt(i))!=-1) 
str+=charhx().charAt(charft().indexOf(cc.charAt(i))); 
else 
str+=cc.charAt(i); } 
return str; }

function convert(ctype){ 
if(ctype==0) 
$("txtresult").value=jtgo($("txtsource").value); 
else if(ctype==2)  
$("txtresult").value=qqgo($("txtsource").value);
else
$("txtresult").value=ftgo($("txtsource").value);
} 

function charjt(){ 
return '陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞鴃麩麾黎橇樵機橈歙歷氅濂澱澡縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒①②③④⑤⑥⑦⑧⑨⑩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶАБВГДЕЁЖЗИЙК龰冈龱𧘇����������������������������������������￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣���ʃɐɛɔɵœøŋʊɪ氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱'; 
} 

function charft()
{ 
return '陛陝除陘陞隻飢陣骨坨鬥鬲焰霛偺偽停假偃偌做偉健偶偎偕偵側偷偏叢涂偭𠵼冕凰剪副勒務勘動匐匏匙匿區匾參曼两啪糞啄啞啡啃𤪤唱㷍問啕唯啤唸售啜薡啣唳啁啗圈國圉煇瞌堊者埠埤基�贋羺鶧欉^奢琀婁婉婦婪��情悻悵惜���黸��惟悸饎惇戚戛扈掠控�掖�𣂷^捷杰��𪆫捱掩掉掃掛捫推�靊簣簽覺鑄⑺サ�伄P捨捺敝敖�𥖁敗𡙡敏敘寯敔斜斛斬族旋旌旎晝��𦘦H晦晞�勗望煝煁梢㻢梵桿桶�梧�e訊梃棄𧴯燶揝硂條梨梟梡梂�鵐畊�K產略畦𥡲�蟮迆府玨怒K痍皎盔盒盛眷眾眼鎤眸艿硫娗硎祥票祭移窒窕笠笨笛第符�睻ザ�价妦侘戽�ＢQ��餹飬賫圢��}𨀣紲紱缽羞羚翌𣷸習���䛐𦵴脖脣脫脩脰脤舂舵舷舶船�篬藅騍�畕𩐿洒�䮎丨p蔩宴熼�𨮙𤂅��䜶都墿�磒c莅釣䛏釭釩閉陪滱陳陸陰陴陶陷�秐雲歲�竩竟頂頃魚电鹵鹿朻�閦證r𣈏想傑傀傖傘傚最䮾割惝創剩攎勝勛訓厥啻喀腷啼鎉鈎𣙙喂喜喪喔喇嘠喃骽洙喟�䒰曈禤悤P喱啾膏喫鄱圍墏堪場堤蒈𦮗堡鉺褰壹壺奠渙�朽ㄣ太|�縝妥迄庖�鰲炭韭悖螱偌探舂J�楲絕韌瑕N晶景暑智晾晷�替期鞍棺棕棠棘煠椅棟啅森棧揈棒�禛[�棍袵���鐦硒袨奡欿f欺稔殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥嶒減絻湘渤湖湮渭渦湯渴綉渺測愃渝渾滋窗窖𣲚竣�挀�昞�㴝延玥��筏悊�𡢃乾�橌𢞴��㷌絮𠁆絡給憷跚爀善翔翕耋寂肅腕腔腋抂腎脹腆脾�晠拑芚庰�𤚗萃菸𨰰菠菅萋菁華菱菴著萊綒��枤鉞廘禕c萎萄车�𠽌韏曀窱賮�蝰蛔蛛蛤蛐蛞街裁裂�𣜠{視註詠評詁�艶B間閒閎�籝𤣰血V隅��G𡌂隄雁雅���𧙕捷�鷇普絮塊Y飧飪飯飩飲飭馮瓧�𠶲x黑亂�債�傳僅傾催傷傻�伲�𠰍�剽�圓��勢�栀袪崲D嗓殟嗎嗜嗇嗑嗣𡃴嗯嗚嗡嗅嗆嗥嗉�榊窷錩Z塘謞�沲�𡉼塌塭塊塢甓塋奧�熄��𤆵D媽媼愓追簌楔極椰懅楊柒楫楞楓楹榆琵榰楛歇畆毀殿�𤀑溸賂�熒遠撥蔆噸蕙懋褶謹L�噡韁ⅲセ⻗w滔溪据溴煎𦶥煩愐煉照煜煬煦���卧棶皕�𠰋爺牒�㭻S傔猾𣏺瑚瑕鄣餫�琿瑙鎌穆烿畸韅痰瘁痲痱籌痿痴痳�媡鸕勅𤦩𡎎沜疎☆９ㄧ元斥�𣞢慏萱葵葦葫葉葬葛萼萵葡敥恚葭葆虞虜號�𤦉閨瑌�𠵿瘴蛻蜂蜃�𤦉譫靨}屳裙聡裘裝裡裊裕猧覜�𡢄砬M𠈹���𤦉袑媥V�虬蛝僄暙V詢詮詬詹詻�詨豢貊貉𤌚資�𥘵鼽竀賹儭薷騆襢w路綟��跪緻跦躲較載軾輊飽飾馳馱馴髡鳩�桖往疚�龧僮�䲮笆啡鈫聆h僑𩆨僎僩兢�糹�咴匱厭嗾嘀嘛嘗嗽嘔嘆嘉罘嘎嗷嘖嘟�葤拊芧庣�䌫揤珗蚢埳桯砦郰P夥夢罠奪禭嫡騻嫩�㧜�莬嫣孵�䌫覢�鯱�娪|�鸌顈䌫儮��葤藞F�␝�砈幔�廖�彆彰綎慇滿滯漆漱漸漲�𤪺那征表n漪滬漁滲滌滷熔熙煽熊熄熒爾犒𩣑獄獐瑤瑣瑪瑰瑭甄疑瘧�𤄄ⅵゾ�仴妧侉抮芮庥牬郕桄u碩碣禎福拟掔稱窪窩竭端管箕箋竛算箝溾箏箸箇�惣暻篝趧t綰綜綽綾綠緊摽網綱綺綢倃綵綸維緒緇綬說誥誨荾誑𨃴𡠹豪䝏М賓賑��𥺁耽凃掩�𤧸輕�餙虐遘���𡥼遞�劑��傦㙟鄞酵酸酷𦹮鉸銀銅銘銖鉻銓銜銨鉼猊閡𨩇揱閣閥閤隙银際雌雒需靼揥暖𩂰�Z𨘥焌惍霑�𥺁頠暺��髦魁魂漞鳶陂麼鼻齊�𠘑�梘僵價辻儈儉搪凜慼�剏ˉ尤I褧憫��憚婡憔�𣄽挺紡側掉票頃智絳�涥𢜔撕撩杍撮播撫撚撬�彼�𠲖敵敷�爫垈�扚H餞廢樁樞唥槽模樓わ螮撝樅�垈椇�r殤鞨毆�鵐O�潑頒嶲澆潭潛鑪潮鴆霓䐁潤𡅅梦𥺃𣟕���熟𦑩沎�𤏸b菀敜�𦠜I璋璃翩��佞T𪊓冚𠹭膘蔗蔽椙䶜蔬蔭阣𪊶�琌蔔嫠蔥蓿蔆螂蝴糯蝠蝦𨮙��尣蝗��q彪�e寶複褒�𩲭U篇誼諒談溓廌請諸課諉諂愚誰蕆諍誶�攰o齒儒觺儔譑儕冀�㦛挽紋堊i髺噫噹蔉𧗠留噪器�娧噯噬噢噶幟墾壇壅奮嬝嬴芳寰黯彊憲憑憩憊懍憶憾懊懈霥擅擁擋撻麝據擄擇𨫋操撿擒擔�𣶹蒝�𡣺暹�▽凞N樽樸樺橙�橘樹橄橢橡橋諛�傰斒瑍��椉Y賤賬賭賢賣賜質賡赭惈䁱踫踐踝踢踏踩踟駟嫹�H�𠇔M輟𡣘輦輪蟵輞專�龔G黎紒𢜪陜稷歙歷漚�膪𣾂癏▼Ⅶˋ毛E縝縉縐罹嶱翰翱�P耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融褷褪鶽褥褫褡親覦諦掝諫諱�𪊴諧諮諾謁謂諷𤦉諳諶諼豫豭貓賴蹄𤪕�蝰F踹踵輻輯�K輳�~辦�𠒒蹇嚙蟫鬵繺V醒閧暿�踎�箒硿鋼錫錄錚�壕𢒰壑壎嬰嬪嬤牐尷��珊倣晅㩒D彌徽Э�繇讏{懋豑㽣罰澢帗�禟���[煷嚐�抝斃曙曖檀檔檄檢𡛼�睎怹狨釔挴甡�𧨾毚猸濘踜濟濠濛濤𪄳濯澀��𦔒濩濕濮濰燧營燮蜥燥褩燬燴燠夎�𦅚Y獲璩環璦���豯[䢛瞳瞪瞰瞬薄蕾薜𡇙螈薯薛薇�z�磮謟B�眤�鵾𩥉��錇�䀹�𨸶�𠒣铁Z澶褽覬謎�异v講謊謠�袜藪鐘轡𤤙ヅ⺜|購賸賻�蹉蹋蹈蹊轄輾青轅輿避遽霹�贃[邀�C揎醞醜鍍鎂錨𢟍�袜碻�晉馞鍬竪薆鍚鍔闊闋闌闈繟隱�Ⅸ鶬鷙讔╯�@晠蓋騁癒䤑䒟螗国𠹺𩣪演穢穠姁崇韕㒖慯橒寿�𤧹碍朝肅黑煞T繒繙�㮖㓻嚊橡H�挕X�H藏薩䲁糕𩬅薰薺薹呍鄭篺�𨜏㕷覲�y謨謹响����侻霄�𣈴}蹟縫�㕑龫j�邃邈醫�𧬘j�𡐿擛𣞁a�𥮉R糠鎰�愬鵒I�筃u腯犢烯翷耷鉕雞霤鞣鞦�䔻〡␃勻永污忪�拙^禱穫箍簾簿簸簽簷扊欒繭繹繩繪璤繳𢬿羹羸潽藩藝藪藕藤藥嬡���蠍蟹蟾襠嶠襖哐譁譜識證譚譎猞�𢇃袓寋𠜎矞袺�褌甝葞d轔轎辭邊�𠜎磌褌餖橨篜踼�嗬鏝鏖𦦵鏍鏘鏤鏗�煾}隴難頀�齅広𣐀垳臯＿〢␄勾汁汛岌乖怯秈孩珀俸效紕啄\觸議譬警�譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰歊饒饑慮騫騰騷騵鰓鰍鹹褣黨𣆂嚶䅬瀼儷儸甔��裗傸暊畹葸鉔�渊�曩�欄櫺殲灌爛犧𨰣晫癩矓�讋續羼�蕯蘞m��䤯鬮��綳个烕�焻甴籟聾漃憂��吲煢讀贖贗躑躓轡酈�𩂋符傅棉Z韃阳𠋥麬驕䳢髒犏鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣屜攪曬欐瓚竊籤�𠂆埧桲秸覂媗棸硠袹凗暙畷萲鉣搫r顯饜驚驛�嚡餕橝篘蹁嚃簉醚幭蟔鯃艣齍i癱癲矗罐羈蠶蠹衢讓讒①②③④⑤⑥⑦⑧⑨⑩⑴⑵瀖髼⑸⑹⑺⑻⑼⑽螿�𠮿滑裟嘍睽Oⅷⅸ鶃丶啐亅亠�𠾍H冫勹匸卩厶夊㮖�⼳广廴彐彡攴塩疒癶辵舴¨ˆヽヾ𡛂ゞ〃仝𡤜〆〇ー［］✽ぁあぃ�𡠭Rうぇえ櫐お靪がき�藠嚾鶳�尠こ�马斈无藠𦤎�瓰䓴槊箌カ腛�獴肯tグケ嫶箑ゴ�𥕛�㘘莛织ズセゼ��剸鉸��𥌑N����鍥@デト点ナ��Sネノハ齋パヒ稟ピフブプ節麿ペ笒ボポマミムメ�亻萩靲p帋�Aヨラリルレロ�鯩�倴�睢ンヴヵヶАБВГ��^ЁЖ隇И��皡﹍ｕx𧘇��顁跃��������鮵掀笮�s趲�復������������𤃬�𣙟錐�骺����璲￤庲＂㈱徵℡゛゜⺀⺄⺆泟⺈⺊⺌⺍緬⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍�𤣻醙懟謱J嶰�虲蠓孇�攟灺ɵ饖ø�双𡒗�蓖〧␉�岕佛}𠍅肊阞伎㜺伬仵伔仱噐价伈�伂伅伢旖𣈥仴伒冱刓�h刐劦嬐�卍�螌巖厶ネ�琞�䀄枘p妅奻奾奷奿孖尕詧屼屺屻屾巟幵畿异掾彴忕忔忏瑨扞𨥾扡扦偞扙扠扚扥旯旮朾�𥱊鮸���风朼鯧氘𨈚�躧栛䀄斅湏K吽呏呁�棯}�槀妒{囥曱���坉坋坒夆媆妦妘姝�洂R妢妐妏妧�宎宒尨尪岍岏岈岋岉岒�楟ノ�彴m帊帎�䕘𨈘珅倇捗眣𡟚𧭥梛窐訧�㒓忨忮忳忡亭忣㼎忯忷忻�禛樀磉褖�𤩸渹抔抇扱扻扺扰抁抈扷宖胍扴䀝旰旴傛旲旵㩞杇芊芃芄豸迉辿�𤫀佯怩虱p邠掞阨阯�𠉴捨舶㻢椎f幅侇慽佴侉侄佷佌侗緲侚佹侁佸侐侜侔�輰�匟�𩯕�𣳾豖拏A悿刲刳𠗫刱妶匊匋匼厒厔咇呿咁咑偍顏呫呺呾螜呬蕦�渏駎�騼呠咘呣呧辧𢖯酬坯坲坭窺�檙爢i垀坵坻坳坴坢信㯄怗怳怚怞漋怢怍怐怮颷怑怌��𨀤c恢�抴拑抾舳�拊抮抳抯抻䦧抰錰攽斨斻昉旼昄昒昈旻昃昋蟖昅𠹶昑磧曶朊枅杬枎�爖訞媜渿v构猝枍枌杺豩枑觳枃杽闚杸杹枔欥殀𤥻毞氝沓泬泫泮泙沶泔𡐤泧沷泐惿踚泃䓤���N矷祂礿秅穸穻竻籵糽耵肏肮翞肸肵肭舠芠緙芫芚芘螹芵芧辜芼㇄芺芴凤芡芩苂芤苃㇅芢螴虯�䮾庋冞昅迋怤玵陏歗r邲鎛�込邰阹阽阼阺陃睥俅俓烝俉俋俁��丄俙薉侳俛俇俖侺俀侹俬剄剉р勂匽卼厗厖鋒厘咺咡咭咥哏峞峚峉璗綃峖�峔峏��賍鋤�𣻺晌��^帣�汘棒舒僇煎裕團睡銜樂^徆怷苾恔𤅺恞恅�慶恉�恌�𦸀冼怌Y㡣�崬睜扂扃闢挍挋拵�鳽u噝𡨭惛挌剠�覼閜�ヒ蓗餂槸禜覢駘橁�处昡閼昵昜昦�梉藑`昺昝昴昹昮朏朐柁柲屧㳑洁洘洷洃洏浀洇洠洬洈洢洉洐烔炟�澻救脯𣧂棲舜�㜢�𠱼團r牰牳�蓚�拥�b杯狟茚狦�瓓］v珂珈鰎儡鏓敪�澻矨e珇玾珃鞞蕔政侵瞥甮礌膿�𧹏椿瑔�眈芪�眅眊盷盻跐矧矨�稺錍𤦻臇𧹏懖蟴鵜藲鯞槑櫼鼘龢�䚮誏秏秖秎𡟚苤苠苺苳䴇虷虴虼虳衁�𡤕�f𣺿㬙訄訇爍淽�煷菩剷煩覜�膶珴邾郇郋踊釔釓陔陏陑陓�陎倞倅倇鶸倢倰倛俵俴倳倷倬俶俷倗倜倠倧𤌴倯倱倎党冔冓凊蓽凅凈錕剡剚剒��杮�惧嬦S匎厞𤩎哢唗唒哧哳哤髯鴦�耨䒢�𤍈唅哱腢起悈糊悒悁𡦀悃悕悛�嬣癸俱朗�𣱣鎧挐捖挬�𣙀渘d捃䰾挹鷸�挼挩捁挴捘捔捙挭捇����榲奷抎��𠇲咡}𥶹旃旄旂晊晟��𣌊豽寍棦硢覘嗀楉W桋桏�湶耯蓛�䕪栭栯焀�葜縠鋿�栔𢎽𡦖栮�栺栥�秢櫸鰤W璵畭歭肂殈毦��𠀾�綌矮畣狾狶狳�𪂇肫帝皆倡��𡛦曼啟舶𦴤�𦲀䒑珝珚珗珘瓞瓞嫢瓴�𣶶檠轄鎬U痁朡痄�x疿疶疺皊盉𧂈眛�眓眒眣眑眕�鿈笳貥寋�|砢砵砯砨砮砫砡砩砳�𩧉x祔祛�荽掜莩�霱繂轃[秮佧秪秜秞�𪂇齎毊y窋窌�灬𡠩熖[荂荎裿长��麐龜�𣈏�狢届�仫俾A荅荌搭茞茬��𤒇�藣楣b蚢蚨萉蚍�蚞㱔蚗蚆蚋蚚蚅�𧊲�𤉋蚧蚕赩�臁q蚐絿衃衄衭衵衶衲悾衱衿衯袃衾衴衼訒豇�劏隑慪碠~赸趵䏲趶軑𠸉迾鷂咲迿迻惤迼迶郖郠郙裳郣郟郥買郛郗沬郤荿唌唲啥蕼唹鎵鼆陖啀啋圊圇埻堔毹㇀�T㇁堀埭�凛h埸�𥹉墊碣遞s埣郿�𥰁�圿���埧�輇�襛E埰綅姖奫�麅汵俶晟祒s娵婭�婟徭婬婓婤�𤊄�脗E镽婛婈媎�瞓��𣸭諏髫橯縜郺嬦竀^孲��欅�t𥱊揊崋崝崚崠�垈覑尅�勌�𡡞l掁𦿟掍捰敓旍厜晡㮡晙晜�龘耿�𠵯梐梜桭密𠊙��滢桯梣嚤梩𥐯桴梲霉桷梒桼桫���𩻸桱桾絝旒梋�煱挍玸俷晇眙衾w桽欶欳欷欸殑殏殍柰溟氪潐涫稛涳湴涬淩淢涷淶�𤒹�尥縸鍘\涾淥��𢓌�壋�瑨鱆b�耼卿𡭄忟𤂑�𤁗痌�洂C皏皉盓眹眯眭眱眲眴眳�䪖𠵯敔累��硉硍硊硌砦硅硐祤���楲𤉶祫祡离𦍑秸秶秷窏窔斮笵筇𨅏笥笰笢笤笳潝笪皺意壤笭笯胐笸笚笣粔猗粖嵞紵紽紸�訩��豷紩絁絇紾喭焆崮紨罣�T羜羝��鿊翋翍翐翑翇愊鄯慷蛂蛁蛅霣蚰蛈蚹橃戟滖蚴�洂�𧫴み娊哣袉亇𡋾袢嘸袚���㗲Y�袧袙袛袗袤袬袌袓袎翍觖鍅�𠿪屾Y訬訞谹谻豜豝豽貥赽赻𩵚趼跂趹�訸睅C�築軿軗軠軡逤逋逑逜逌唵郯瞎�洂鄶孻繉鍉擼襐鵌藦鯚躆灉囆蠯鱧�'; 
}

function charhx()
{ 
return '𨳍皝除陘�塟幫妍辰庚�𠼰觩鬼㓁偺偽停騭��椘做偉健偶偎葓偵側�墖劓�聿�𠵼涂𠵼𢵄副釥釥𢵄動�眎�𢵄暋鶥匾𢵄曼商�啦𢵄陡啡��𤪤唱㷍囌啕餼餼唸售韗薡�𤺥Z煆瞌鱓國鱓�V堅��緵埠𨨥���瓸M�𨩙鰤�𨨥娶婁�猹𨀤��情悻𡞱惜𨀂�齄h吥𩂋悸惚𤅡䔳戛�楦鑽�𡞫湷接�p捧�銆僚滷�𦐑掃唿掃圜掄授掙隗筩懺页幄��塀捨捺敝𡙡𨄮𥖁敗啟敏敘寯�窓�辥瘻族旋踗旎晝鯡幈惾縰茽�勗煔煁煁況𣊉𡾡蔍嶚梱梧ぺ訊梃棄梭計燶梔㦒砽�兝}梂欲殺謪�K�㬢尤L�異略痔痕疵痊痍皎盔盒盛眷眾眼陟㤈眺惃葀硎釁�国[移�业�㼆笨笛�𠊙𠊙����蟮��𢠃絆捤�蟙���鍸�３蚙_組�赤�佡𪂹踒羞��𩐝�����婈�𦵴腳𡤧廚脩�睾恍垓錝鼤臄雯鼤��𤗈繰�藅纈K莒猄莓𤐄熼�蝰k荼�玏^�臈O野釵莅釣釧�翧弭�j滱�𠵯𠵯�𨧨偡陷�秐�竩雩ー猙頂𦌵撌鳥閙鹿⺜�閦籀�𣈏想懏傀ぷ��农��䮾�\烳創駖勞勝璠博饝啻馥�桼L馥鈎䭰喂�氪縖p喇喋媿骽洙𩼣�䕷𩐿[僯僯𢯎�u狅喫閃圍碭麧場𠺶𦮗𦮗堡鉺褰夃旗㵌蝛揣提握揖�𤾸逡搰�揪�輕砍趿i敞棋敢散熸��飠普饉饉�𠹌庖餃T�见T与替磠壏棺��絚棘煠絚棟啅�嵋揈�韐玅�挳㒥忳妠桭翉v楮摼款欺欽��𤨩𤨩毯氮廐廐廐裯�鸘v渲湧鏄渠渥渠荦�䕷E渤��𡟃�縝黥���綉渺�捿媫㨗�汘窗窖���挾朴�麦麦答�枤�鐦筑粟浴��攰𢞴��攰葍𠁆愛頌憷絰絳Ц愛翕腖寂瞓䱇�O穬抂梈脹穬脾貄��蟚雺葊𤚗葊菸萍菠菅萋烙�O𣔙纜𣔙蔴菰萌菌菽菲菊𡡷𤣳萄菜�𠽌韏�𡛀蛟蛙蛭蛔嵛𡍵籯蠂街�籭欋H蠂藇鉲颮颮詞𡅈涉諘�䓫∵�温隋陽м謿�G�㚬躧�髠鰌�沲捷聊揪I�鏗Z�c臷ば𢇃�V鉠飭黸鞃�帋鎖訜�綳ね傲傳��ⅱ戺H傻�琙�𠰍�属�圓𡥄▲涳�円嗟蕺嗓蜭嗎嗜嗇嗑嗑𡃴嗯鈄䓀嗅嗆嗥𨈇��𢲡𣂎麆x塗塚釗�賲繹騥艨鶧x顦�坾賱�玌�榊㛥皕��𢫏t楔𣳿狽概柒楨楫𡘙�㚁x榆楝楣��𡘙畆毀殿道毽𡄯認狽𢏺諪𢏺溝滇𢏺溥𢏺𢏺𢏺��𠹌蒤溜鵁Ь�啹抪俖�𦶥煩鯩叡照誽煬煆㧻�卧棶���𠰋㧻牒嘥獅��摚沼瑚㤿㤿餬�琿𩬎𧧽𩬎當裎鑝��𢫏剃痱籌痿ぱ痳盞淗睛嗍壼睞𡡒䓝腺�瓲元斥次孛�𣿭葵�𤨪爰�𣿭葛萼淗葡敥覧葭嗍虞虜號у�撣撳i蜀蛾蛻蜂鉔𦛚骲𩄐滭��𩄐煟喿裝裡鹽裕煟熄解𡵞該�聦L�敫M榙�𣆳瓲詊G貯詭𣈯詮繣㦡����S𨥉炣𤌚資賈賄貲��𩂯蜂罹跟跨路跳���袐欚睚╳u爉Л輊飽飾馳�𧀎k嶔实麂瀞�@���𥳀僥僖賧�閧�𩆨饞饞僎傇兢磎磎咴匱厭嗾嘀甯鎏�篅輪鸌器��f鷋甯��騛�脇�䌫��完�𡓨墅楪憝楪丌罠韍楪�罬�罬𤩅𣷣�孵�䌫蝜�鯱�w懁寪�汵䌫懭}�T�𩜠F幣幕甪�酜镇�𦐂彰綎鞜滿絘鉖漱漸�蒪宋那征表n𤜯�T漁�T烳迺熔熙煽析熄熒析𡨭𩣑獄㻐瑤瑣瑪憍瑭甄邨鄉��𤦈�Y篢鈶監衈鈍��Y�\婚碧碳監碣禎福禍衖繿鮍窩�魠���㓻��竛瓡𦻗溾𣶏箸补�虲�靕靕��酚酚�𥻗綠躆摽籲籲觟綢倃嬭�㺿𤪺𤎜昡弇◆˙�𡠹辠𡠹𡠹�呔𦉘愣愣�����凃��𤧸袧�餙敺遘���𡥼儊�噱噱蕃擊覬�𤐶糉糉䋴鉸銀銅�碸碸碸�鞾禦鉼糉��𦕲𦕲䌫閥閤��麱拴雌雒需拴鞅韶銕領�R颱餃銕餌𦄂�𩷶��㨘魁я鍐壒瀌𤒹鼻頲�𠘑㚹鷋�㿗�_儈儉搪凜慼慰慫�憧�㭻尬釆拋瓞姨狩乘���蟮�祤票�縇撐撰蜋�F撕撩撒撮播撢撚撬撙撢蜋敵敷�卝�縇暴𨯔樟蝁樁樞唥槽�篻尬埮梩�𨹥槭覦噎�r爁鞨噎蹨崢�潑潦�澆�Q潛潸𠵆澎潺𣟕潤澗潘滕𣟕����𠵌P沎熨牖犛冚�𢠃未𣸯�弎耦�汗公末汗李�碸↸椙𪊶嫈�蚲Y蔑𠾴琌蔔嫠刅蓿蔆螂��𪐴媰蝦蝸尣尣蝗蝌蝓衛衝寶𪐴褒褓��𪐴誼䖦談諄��𦾡挼�綫�秣桵祧袙婼�侞o�淮觺�𡅏@�楃狠�S橐蓐蟊髺胥橺��𧗠噸噪滶���𧩹�T鈺噶幟墾壇墾奮��𡄻學𥜥黯彊憲憑棩憑懍愔憾懊�▽��兝擋起麝據皁侴鋡���侴擔垡��樴�侴垡銝讙銝閦樺琔銝�㗲�𢜪慒慒蝗諛��𨪁瑍蔇鉠Y賤賬�賢賣潓𧜏㖘赭趟䁱�Jて榪��獢�馯駟𠰴�H�𨯬Q輟𡣘馯�𤙴媈�𤓖�龔G黎紒��圴�桕��陃�挵縛縛縛縛縣縛縝縉緄罹廨翰翰嵁耨�X膩膨臻鴞艘𨋍涤涤��㻐�㻐魰�蠘鉯蕞濡鹵邈䀝詏琙d𥡝鉧��𠨑𣏹𣏹孁�㻊\黠諜謀鵮鵮𨥈謁嗔��𤦉鳧榠歉�撚���萾蹄�𢒼�凒踹踵輻輯焟輳辨焟�𡢄U選雉徛遺膟𨪚膟暿𣸱錳錯硿鋼酯錄錚𢒰絭𢒰���𤪧𤪧⇧��H��愇��敉D躍彌����瓌芅僾阝戴芅擊帗�鼹�纎纎瓌纎鵐��]屴�]�穲穲�霃彯彯�睷N檗�𤪖j篌彯閞裲橍橍橍��脃傱楌詒畸僐飺熏�}濰�𣆳蝩飺橉縥魊嚓簎轃奰蟪魊聸騔蘉�𪘲謳療癌萷�𣆳�o瞬薄署薜薑薔�聒岐�|瀏�鶬偭俯�鵾蟆螫劋���𨸶������澶㻑覬��z�|墮澶捿澶𥭴硼漜�麨笠�匢�峵賻趨䶑蹋蚭�蚭侢青裌裌𨬬遽霹��𨬬裌鄹揎��瓻l厩�銮g勁鍥勁厩馞厩勁薆�喋������臗颾�䤰��s𦸀��𤿂鞭喍喍騁𧋦蜤蜤喍䔿䔿慛䔿�穠㒖崇簫㒖慯簞簣簡頎織繕��繡网繙罈𥟡�嚊橄e鼗鼗�呠鷈�䲁藐𩬅薰��i𩬅𥟡躰㷉𨜏覆覲�y嵯��譇譇蟟嵑蟟筄�𢓁蹟𢓁縫𢓁�玲熆蒔馹圿𤙴j��剨摬摬摬蹻糠剨耂鎚搕�筃u腯錋鬔�耷鬔�������𦟌☆�乸�嘔�䮽鬾��E礙𠎠磴穩塓簿ьь樍扊𦛨Ê̄繹嶎繪��䕜e凵羸臘嶎聰藪藕�屮灌X���й鼈蟾𨧜襟㛵哐㛵�鯇捙疰�𣺹𣺹譆𣺹贈贊蹼𨌯𨌯蹶𠰴蹺𠰴轔�鯇蓇鞀�𤷫𨂽𨂽𨂽樍�ˇ�𣔰���𤛔�𥖄艤�デ纈}帳難���𠗊𡡡��鬮�靊���靊靊靊𢹂𢹂��䌊蘇𢹂�鬮����脇��羣棕筑�譟拺躁贍躁躁躅頟頟釋鐘鐃�艡�𢯊𢯊闡闡𢯊騫�贘蛭方俓aイ褣业𣆂���㗛m儷��圿軸墙夔屬巍鑥䕢廬𠐔𣁦𠹻�曧櫺殲閏𢆡犧瓖瓔𦛼矓籐嗂𥣈蠡鉯審蘚鉯蠢蠡蠟襪襬覽鑼禳籠畓鞸璊摫蛺蛺蛺兛��𧄌�轉��囖掬掬眺z暘裛萺穇穇穇勷䳢勷鬚鱉卤�珐嬝嬝藷��唍��𥖏⺜裖�𡃁屜攪笌栶竊瓚籤��驅纓悽��������𤦊鑣碚鑤羓羓�𠓼驛嘥馹�髑鱔鱗𪆒ゅ隉黴囑壩й齺裎𧑐矗罐骭蝣𨔽骭讓讒①鵋③𨔽驥⑥⑦敏⑨ы婔蜙瀖𧎚𡛓⑹隒���灮淟l�𡁻𥟇備�䃸��䃸鶃埃丿藖腬鈑��䝄腬匸𣲵厶夊㇉囊㇉广湇雹彡槥㇉疒癶辵�𠡳嵙t�~�~ゝ隓錬Ｑ々〆〇ー��穅瞂あぃい珐うぇえ櫫お靪璠���𠡳嚾�嫑尠こ�马崘褪��骏�𥖄エォ箌鹽ガ�獴���骏剖Xコ馻揼ザ㘘ジスズ嗐��刟鱲タダ禠禠��刟ヅテ辶棓�枆��昒囟抔矢骏阽姜[驢驢嗢靜驢ベ��≡�𩥅𪈳ミ橩頍�ャ僛愩ユ�Aヨ�孈�灰�罍��ヰヱ睢��òヵ𤙴𤙴Б𡃵ГД嶉Ё𠘑隇И闒К嫏𡄽龱𧘇�恷黰�跃���𧗾��溴��慓U���s��復�㤔膺䲅䲅��𤹐���𠂇�𣕑N𣙟蕵�𦦨�躡��𦭒￢�𣜠J�U㈱№℡゛併⺀⺄�鍮�酰�����䓝q⺜𦨭𦨭軸酪⺬憒⺶銌�堘橨N�脹幪𣏌�𣸮⻞誫����喹嫲䔉攟�𥛣讟㽙諘諃糔��䔉熳熳�岕佛X𠍅馝阞瀘㜺檱仵ゃ�~�烾�o伝伂�孭\旖𣈥�蚒銅�峕�𠯋蹄罸U�卍厊吇�R��瘃圪��灵p妅��嬕奷巟巟巟詧屼𡌶屻�␉�p�顨楦痹F孿齜忏�䄎韎�鄄煑艸扙�檂郺Y娙�朾偊緀𡃁��风�h鯧氘𠏵�����𣙷㇍霎���\咓癖𨀉��㮾𢖍曱���坉夆ī��𧂯妦�倇��洂R妢妐妏�鎪宎綮𣌟帊��鑘�𤰉蟾巍���爉�圴巠侕昃俬𨈘������𨰻vっ𥥆禃��㒓惞忮溮疹�𤰉萯鉌撂剛���賖穵抌𤩸抏抔抔扱㗎扺扰抁抈訐宖𩓚蜸䀝嚡旴肄旲旵瑒杇芊鄑芄豸�𢫏��𤫀怩����挱掞𦡞饉倮丳葈��葈掊幅侇慽�@�@�@��h��㡵�佹秸佸Ｎ侜璁侞侒暆�𦷰呣墧�𤠒冾悿馝刳剆刱妶匊匋�啱x厔咇𣂼咁�玞V韂呫程�W呥瞜蕦圿咍捯楤呠爫呣呧辧𢖯囹坯樠樠窺熵潻�𧜏𠎠N𪃸��㽙者﹟十�最甘�𥴰咪熭怐贒贒葞怌怉�㷆捺��譃棧��抪�鍏抮抳�𩼰�䏰�嫰潔褎�𩖸栃旼閰儃昈旻昃昋昍��𠹶�轊�𣈱砌��无爖訞嵅熷�𦒘杴�坺痼萭雎祾�𣔙𣔙�臤杹枔�駚�𧄍����芦i娉泮��臁D𡐤泧沷𦎾暔�龥�𥯤��葢�K𦨴𦨴�K�K竻鈲�耵肏�L雯𤾆椕�箲㓁簀y珠�庋塗^芵芧辜𧁋㇄摦尐��𣗎𡰪𡰪�溴�㇅�䓫ミ�虭��𥫩迋迓𢞁�煳𤋉����邳鄟𢿌阽阼阺陃阺阺�壨m俉�覧�滝滝曷侻𡕷俛�n𥪮𡟙�侹俬剄�㦡g勂贑���贑����贑餸ゐ咥𡃉彾䇊�禜心`峖�峏峏�𤥵屋或��坔�乓�䉶帠𢹂�㹃�椉𡀝椉彾搯弮𡀝���㦒o恔𤅺��𩟔��顇搽恌��𨅯䛵怤恄睜酜�𤃉倀蚥P㛖挋べ�駘�噝𡩅べ��𥩔�覼頎�眛�𢃇斪僳��瞾Ｏ斿昶昡�𧧝蹍|�I�淀譭`媩�D�䲁�昮朏朐柁㜳��蟁隞洘裖洃洏洢媩洠洬𦧺洢洉洐炷炟�澻桿𥧌喧�S炩𡟸�𠂔l牬牰楁���軚軚軚齷狪鉔À珌珌啹�湳r𡥪玶敪�澻盻舜���𡘊珆��Z侵瞥甮��w疧��瑔�𡜼眃眄п椵盷盻僂矧矨�稺�𦜖�籭J砏����𦜖�鮍}祌祋ъ㑳秕种秏秖秎萶玌㑳苺苳苭虷虴虼虳衁衎蘓��𣺿觓徃訇爍鉈����田�吚蟡膶总邾猺郋郈�r���觧��陓陊襥清清洲鶸緌�橤挀D�𧋦w僪ょ蒗𣙷���𤌴倧倵倯鮝萫�c臑冓麧昭搰凈凎靀剚憒靀靀��T𢡱匎厞駃篣ề唒哧哳鼖髯鴦忉嚯嚯唑�駚R腢悢��k悒悁𥈡��}銂�豽�岞鉽�C銆廝檧�C�_��_綄�_䰾菙鷸�葙葙�|�|捘捔捙挭������熢捗捀����}𥶹潾旄��𥹉����遌朓栟�𢒼覘塤挕棦�歯�瑹瑵蓛馝�坺�]桎歠栴�𡘙�栔𤧷閪栮桍蜄畭�秢�n訖璵畭翳檾慲𣕑鞟鞟牶槕碎鞟垧葴狳��哌珓�𧂯����𦺋珣��𦴤毯�罎珝珚珘珘Ｋ瓞�𧪽懊耨��𡏾疰痁疻榦�x疿�𣖜弅�鍇俅愻癹慬�U眑璁�玾�𤧷眧砣�|砢砵砯砨砮�霱�攵�砪膽稂祛祏祜祓莩�霱繂鍇儮N秭鉿秜��𤙴sび�𠺘漡��澀髑啫��雓雓茈麐荍�晫�狢茷茯�荇�咜堆I蜉強�捖l趺虓虒𨥖罉蚖蚍迹迹𥗛迹蚆㱔�𣞢�𢫨𨚪𢫨蚧屑蚘蚎𢫨軃絿衃銚�僱v硝衲袀��愢𧅥楱翨衴衼訒豇豗�碃碃趷碃碃趷趶軑𢲲迾冒适迿ぬ㕸迼訛郖郠�該矐耗壧驞�P𩴾沬遄猏唌唲啥蕼唹啈鼆𠯫墒蜠圊��諹疋��㇀㇀堀薪�凛R㕭勼乜⻖堇�㚚哳゛�瑖���d�郾�堌��糌麌\�𧧽��麅�凼婧葅�a嘂嘂�婟嘂�畊諙抵�𤊄頞揕揕镽�𥑆圿馹�𣖜邕苑婩苑苑驘蜅婜苑𡆀ёに𥱊揊崋笔舢岙笔�琔姹縜濓𥈠⊿l崍掑�瑖耳色酁�𤩊晛晙��龘耿啦敕眸|罦桮𠊙梫楖�梣嚤餯𥐯罦�溝`桷戩桼桫��疍タw葕旒梖葕梠梉梤�桻梑梌猣𢔛欶枋欷��鷾��殎殌潐淀涫羥靺𣀳涬�釾諆髳毈丟䀝戊毚�𣀳涾䭻��e摺�𢃇��瑖鱠t�瑖𡭄��㨪痋痌���爏�𡲬撚𡲬�u�u𡲬眲𡲬午髱澽提𤧶硈逸隖硍饢垻Á硅�箷標}�祪祣魔魔离秺秸䯀�挮⻗躄|笵筇笴�涹�𦷜笤鈷頕笪阤意頕�␖棞\��嵛�𣸭漌萻雺戩甂蜣銊訩箷誸�B絁�B�B吪靘紻喥韆羕�漌趮灈纍齡齵饒d翇翏翉ず嚄嚄藼蚺蚰蛈腃痭戟裐蚴�洂修�㇌娊哣��M�M袢袪�袑�㗲Y袘砰銩𠺶𠵾噮袬袌袓袎覂觖觙觕礂譣礂愁谹谻䉠豝豽貥孔銎赹聢跂踦踦�踦澶駏軜犅擉擉气摼逑毻�檂a气气�洂錴碯E靁𦒍𦚯綕㇏�鱧躆孈gむ裋�'; 
} 
function oCopy(obj){
if(navigator.appVersion.match(/\bMSIE\b/)){
obj.select();
js=obj.createTextRange();
js.execCommand("Copy");
}
else
{
obj.select();
}
}