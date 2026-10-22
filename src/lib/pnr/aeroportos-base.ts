/* GERADO POR scripts/gerar-aeroportos.mjs — NÃO EDITE À MÃO.
 *
 * Fontes, ambas sem amarra de licença:
 *   OurAirports (domínio público) — código, nome, cidade, país, coordenadas
 *   tz-lookup (CC0) — zona IANA a partir da coordenada, resolvida no build
 *
 * 5459 aeroportos com código IATA e voo regular.
 * 377 zonas distintas, referenciadas por índice.
 *
 * Formato de cada linha: IATA|nome|cidade|país(ISO)|índice da zona
 * O país fica em ISO de duas letras: `Intl.DisplayNames` traduz para
 * português no navegador, e assim nenhum nome de país viaja no bundle.
 */

export const ZONAS: string[] = ["Pacific/Majuro","America/New_York","America/Nome","America/Sitka","America/Los_Angeles","America/Anchorage","America/Vancouver","America/Antigua","Pacific/Guadalcanal","Pacific/Bougainville","Pacific/Nauru","Australia/Perth","Australia/Sydney","Australia/Brisbane","Asia/Shanghai","Pacific/Port_Moresby","Asia/Baku","Africa/Maputo","Europe/Sofia","America/Godthab","America/Thule","America/Scoresbysund","Atlantic/Reykjavik","Asia/Colombo","Europe/Belgrade","America/Fortaleza","America/Bahia","America/Nassau","Asia/Kuala_Lumpur","Europe/Minsk","America/Guatemala","America/Belize","America/St_Johns","America/Goose_Bay","America/Yellowknife","America/Toronto","America/Winnipeg","Asia/Urumqi","America/Bogota","America/Iqaluit","America/Blanc-Sablon","America/Rankin_Inlet","America/Detroit","America/Cambridge_Bay","America/Regina","America/Edmonton","America/Moncton","America/Dawson_Creek","America/Whitehorse","America/Halifax","America/Pangnirtung","America/Thunder_Bay","America/Glace_Bay","America/Fort_Nelson","America/Atikokan","Africa/Algiers","Africa/Tripoli","Africa/Porto-Novo","Asia/Jayapura","Africa/Ouagadougou","Africa/Accra","Africa/Abidjan","Asia/Vladivostok","Asia/Anadyr","Africa/Lagos","Africa/Niamey","Africa/Tunis","Africa/Lome","Europe/Brussels","Europe/Berlin","Europe/Tallinn","Africa/Cairo","Europe/Helsinki","Europe/Moscow","Europe/Mariehamn","Europe/London","Europe/Guernsey","Europe/Jersey","Europe/Isle_of_Man","Atlantic/Stanley","Europe/Amsterdam","Europe/Dublin","Europe/Copenhagen","Atlantic/Faroe","Europe/Luxembourg","Europe/Oslo","Europe/Stockholm","Arctic/Longyearbyen","Europe/Warsaw","Africa/Addis_Ababa","Europe/Riga","America/Juneau","Europe/Vilnius","Africa/Windhoek","Africa/Johannesburg","Africa/Gaborone","Africa/Luanda","Africa/Brazzaville","Africa/Mbabane","Africa/Bangui","Africa/Malabo","Africa/Douala","Atlantic/St_Helena","Indian/Mauritius","Indian/Chagos","Africa/Lusaka","Africa/Lubumbashi","Indian/Comoro","Indian/Mayotte","Indian/Reunion","Indian/Antananarivo","Indian/Maldives","Africa/Libreville","Africa/Sao_Tome","Indian/Mahe","Africa/Ndjamena","Africa/Harare","Africa/Blantyre","Africa/Dar_es_Salaam","Africa/Maseru","Africa/Kinshasa","Africa/Bamako","Africa/Banjul","Atlantic/Canary","Africa/Casablanca","Africa/Ceuta","Africa/Freetown","Africa/Bissau","Africa/Monrovia","Africa/El_Aaiun","Africa/Dakar","Africa/Conakry","Africa/Nouakchott","Atlantic/Cape_Verde","Africa/Bujumbura","Africa/Mogadishu","Africa/Djibouti","Asia/Amman","Africa/Asmara","Africa/Juba","Africa/Nairobi","Africa/Kampala","Africa/Kigali","Africa/Khartoum","Asia/Jakarta","Asia/Kolkata","Europe/Rome","America/Chicago","America/Denver","America/Indiana/Indianapolis","America/Boise","America/Phoenix","Asia/Phnom_Penh","America/Menominee","America/Kentucky/Louisville","Asia/Bangkok","Europe/Tirane","Asia/Famagusta","Asia/Nicosia","Europe/Zagreb","Europe/Madrid","Europe/Paris","Europe/Athens","Europe/Istanbul","Europe/Budapest","Europe/Ljubljana","Europe/Prague","Asia/Jerusalem","Europe/Malta","Europe/Monaco","Europe/Vienna","Atlantic/Azores","Europe/Lisbon","Atlantic/Madeira","Europe/Sarajevo","Europe/Bucharest","Europe/Zurich","Europe/Chisinau","Europe/Skopje","Europe/Gibraltar","Europe/Podgorica","Europe/Bratislava","America/Santo_Domingo","America/Grand_Turk","America/Puerto_Rico","Pacific/Kwajalein","America/Tegucigalpa","America/Jamaica","America/Mexico_City","America/Monterrey","America/Merida","America/Mazatlan","America/Cancun","America/Hermosillo","America/Ojinaga","America/Chihuahua","America/Tijuana","America/Matamoros","America/Managua","Asia/Makassar","America/Panama","America/Costa_Rica","America/El_Salvador","America/Port-au-Prince","America/Havana","America/Cayman","Pacific/Rarotonga","Pacific/Fiji","Pacific/Tongatapu","Pacific/Funafuti","Pacific/Tarawa","Pacific/Niue","Pacific/Wallis","Asia/Kathmandu","Pacific/Pago_Pago","Pacific/Apia","Pacific/Tahiti","Pacific/Gambier","Pacific/Marquesas","Pacific/Efate","Pacific/Noumea","Pacific/Auckland","Pacific/Chatham","Asia/Kabul","Asia/Tehran","Asia/Riyadh","Asia/Kuwait","Asia/Beirut","Asia/Muscat","Asia/Dubai","Asia/Karachi","Asia/Baghdad","Asia/Damascus","Asia/Qatar","Asia/Aden","America/Adak","America/Yakutat","Pacific/Enderbury","Pacific/Guam","Pacific/Saipan","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Midway","Pacific/Chuuk","Pacific/Pohnpei","Pacific/Palau","Pacific/Kosrae","Pacific/Wake","Asia/Taipei","Asia/Tokyo","Asia/Seoul","Asia/Manila","Asia/Kuching","Asia/Irkutsk","Asia/Krasnoyarsk","America/Argentina/Cordoba","America/Argentina/Buenos_Aires","America/Argentina/Salta","America/Argentina/Mendoza","America/Argentina/Catamarca","America/Argentina/La_Rioja","America/Argentina/Tucuman","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Jujuy","America/Argentina/Rio_Gallegos","America/Argentina/Ushuaia","America/Punta_Arenas","America/Belem","America/Sao_Paulo","America/Maceio","America/Cuiaba","America/Boa_Vista","America/Campo_Grande","America/Rio_Branco","America/Manaus","America/Santarem","America/Noronha","America/Porto_Velho","America/Cayenne","America/Araguaina","America/Recife","America/Eirunepe","America/Santiago","Pacific/Easter","America/Guayaquil","Pacific/Galapagos","America/Lima","America/Asuncion","America/Caracas","America/La_Paz","America/Paramaribo","America/Montevideo","America/Guyana","America/Barbados","America/Dominica","America/Guadeloupe","America/Martinique","America/Marigot","America/St_Barthelemy","America/Grenada","America/St_Thomas","America/St_Kitts","America/St_Vincent","Asia/Ashgabat","America/Aruba","America/Curacao","America/Kralendijk","America/Lower_Princes","America/Anguilla","America/Montserrat","America/Port_of_Spain","America/Tortola","Atlantic/Bermuda","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Oral","Asia/Aqtau","Asia/Atyrau","Asia/Aqtobe","Asia/Qostanay","Asia/Tbilisi","Asia/Yerevan","Asia/Yakutsk","Asia/Srednekolymsk","Asia/Ust-Nera","Asia/Khandyga","Asia/Magadan","Asia/Sakhalin","Asia/Kamchatka","Asia/Chita","Europe/Kiev","Europe/Zaporozhye","Europe/Simferopol","Europe/Uzhgorod","Europe/Kaliningrad","Asia/Barnaul","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Tomsk","Europe/Astrakhan","Europe/Volgograd","Asia/Yekaterinburg","Europe/Samara","Europe/Kirov","Asia/Dushanbe","Asia/Tashkent","Asia/Samarkand","Europe/Ulyanovsk","Europe/Saratov","Asia/Dhaka","Asia/Hong_Kong","Asia/Vientiane","Asia/Macau","Asia/Ho_Chi_Minh","Asia/Thimphu","Asia/Yangon","Asia/Pontianak","Asia/Brunei","Asia/Dili","Asia/Singapore","Australia/Melbourne","Australia/Darwin","Australia/Broken_Hill","Australia/Adelaide","Australia/Hobart","Australia/Currie","Australia/Lord_Howe","Indian/Cocos","Indian/Christmas","Pacific/Norfolk","Asia/Pyongyang","Asia/Ulaanbaatar","Asia/Hovd","Asia/Choibalsan"];

export const BASE = `AAA|Anaa|Anaa|PF|216
AAC|El Arish|El Arish|EG|71
AAE|Annaba Rabah Bitat|Annaba|DZ|55
AAK|Aranuka|Buariki|KI|210
AAL|Aalborg|Aalborg|DK|82
AAM|Malamala|Malamala|ZA|94
AAN|Al Ain|Al Ain|AE|229
AAO|Anaco|Anaco|VE|289
AAP|Aji Pangeran Tumenggung Pranoto|Samarinda|ID|199
AAQ|Anapa Vityazevo|Krasnyi Kurgan|RU|73
AAR|Aarhus|Aarhus|DK|82
AAT|Altay Xuedu|Altay|CN|37
AAV|Allah Valley|Surallah|PH|251
AAX|Romeu Zema|Araxá|BR|269
AAY|Al Ghaydah|Al Ghaydah|YE|234
AAZ|Quezaltenango|Quezaltenango|GT|30
ABA|Abakan|Abakan|RU|254
ABB|Asaba|Asaba|NG|64
ABC|Albacete Airport / Los Llanos Air Base|Albacete|ES|160
ABD|Abadan Ayatollah Jami|Abadan|IR|224
ABE|Lehigh Valley|Allentown/Bethlehem|US|1
ABI|Abilene|Abilene|US|147
ABJ|Félix-Houphouët-Boigny|Abidjan|CI|61
ABK|Kebri Dahar|Kebri Dahar|ET|89
ABL|Ambler|Ambler|US|5
ABM|Northern Peninsula|Bamaga|AU|13
ABQ|Albuquerque International Sunport|Albuquerque|US|148
ABR|Aberdeen|Aberdeen|US|147
ABS|Abu Simbel|Abu Simbel|EG|71
ABT|King Saud Bin Abdulaziz (Al Baha)|Al-Baha|SA|225
ABU|AA Bere Tallo (Haliwen)|Atambua|ID|199
ABV|Nnamdi Azikiwe|Abuja|NG|64
ABX|Albury|East Albury|AU|12
ABY|Southwest Georgia|Albany|US|1
ABZ|Aberdeen|Aberdeen|GB|75
ACA|General Juan N. Álvarez|Acapulco|MX|188
ACC|Kotoka|Accra|GH|60
ACE|César Manrique-Lanzarote|San Bartolomé|ES|123
ACF|Aral Tarim|Aral|CN|37
ACH|Sankt Gallen Altenrhein|St. Gallen|CH|176
ACI|Alderney|Saint Anne|GG|76
ACJ|Anuradhapura|Anuradhapura|LK|23
ACK|Nantucket Memorial|Nantucket|US|1
ACN|Ciudad Acuña|Ciudad Acuña|MX|147
ACS|Achinsk|Achinsk|RU|254
ACT|Waco|Waco|US|147
ACV|California Redwood Coast-Humboldt County|Arcata/Eureka|US|4
ACX|Xingyi Wanfenglin|Xingyi|CN|14
ACY|Atlantic City|Atlantic City|US|1
ACZ|Zabol|Zabol|IR|224
ADB|Adnan Menderes|Gaziemir|TR|163
ADD|Addis Ababa Bole|Addis Ababa|ET|89
ADE|Aden|Aden|YE|234
ADF|Adıyaman|Adıyaman|TR|163
ADI|Arandis|Arandis|NA|93
ADJ|Marka International (Amman Civil)|Amman|JO|137
ADK|Adak|Adak|US|235
ADL|Adelaide|Adelaide|AU|366
ADP|Ampara|Ampara|LK|23
ADQ|Kodiak|Kodiak|US|5
ADT|Ada|Ada|US|147
ADU|Ardabil|Ardabil|IR|224
ADW|Joint Base Andrews|Camp Springs|US|1
ADX|Leuchars Station|Leuchars, Fife|GB|75
ADZ|Gustavo Rojas Pinilla|San Andrés|CO|38
AEB|Baise (Bose) Bama|Baise (Tianyang)|CN|14
AEG|Aek Godang|Padang Sidempuan|ID|144
AEH|Abeche|Abeche|TD|115
AEP|Aeroparque Jorge Newbery|Buenos Aires|AR|256
AER|Sochi|Sochi|RU|73
AES|Ålesund|Ålesund|NO|85
AET|Allakaket|Allakaket|US|5
AEU|Abu Musa Island|Abu Musa|IR|224
AEX|Alexandria|Alexandria|US|147
AEY|Akureyri|Akureyri|IS|22
AFA|Suboficial Ay Santiago Germano|San Rafael|AR|258
AFL|Piloto Osvaldo Marques Dias|Alta Floresta|BR|271
AFW|Perot Field/Fort Worth Alliance|Fort Worth|US|147
AFY|Afyon Air Base|Afyonkarahisar|TR|163
AFZ|Sabzevar National|Sabzevar|IR|224
AGA|Al Massira|Agadir (Temsia)|MA|124
AGB|Augsburg|Augsburg|DE|69
AGC|Allegheny County|Pittsburgh|US|1
AGE|Wangerooge|Wangerooge|DE|69
AGF|Agen La Garenne|Agen|FR|161
AGH|Ängelholm-Helsingborg|Ängelholm|SE|86
AGI|Wageningen Airstrip|Wageningen|SR|291
AGJ|Aguni|Aguni|JP|249
AGM|Tasiilaq Heliport|Tasiilaq|GL|19
AGN|Angoon Seaplane Base|Angoon|US|3
AGP|Málaga-Costa del Sol|Málaga|ES|160
AGR|Agra Airport / Agra Air Force Station|Agra|IN|145
AGS|Augusta Regional At Bush Field|Augusta|US|1
AGT|Guaraní|Ciudad del Este|PY|288
AGU|Aguascalientes|Aguascalientes|MX|188
AGV|Oswaldo Guevara Mujica|Acarigua|VE|289
AGX|Agatti|Agatti|IN|145
AGZ|Aggeneys|Aggeneys|ZA|94
AHA|Maa Mahamaya|Ambikapur|IN|145
AHB|Abha|Abha|SA|225
AHE|Ahe|Ahe Atoll|PF|216
AHJ|Hongyuan|Ngawa (Hongyuan)|CN|14
AHN|Athens Ben Epps|Athens|US|1
AHO|Alghero-Fertilia|Alghero|IT|146
AHU|Cherif Al Idrissi|Al Hoceima|MA|124
AIA|Alliance|Alliance|US|148
AIN|Wainwright|Wainwright|US|5
AIP|Adampur|Adampur|IN|145
AIT|Aitutaki|Aitutaki|CK|206
AIU|Enua|Atiu Island|CK|206
AJA|Ajaccio Napoléon Bonaparte|Ajaccio|FR|161
AJF|Al-Jawf|Al-Jawf|SA|225
AJI|Ağrı|Ağrı|TR|163
AJL|Lengpui|Aizawl (Lengpui)|IN|145
AJN|Ouani|Ouani|KM|107
AJR|Arvidsjaur|Arvidsjaur|SE|86
AJU|Aracaju - Santa Maria|Aracaju|BR|270
AJY|Mano Dayak|Agadez|NE|65
AKA|Ankang Fuqiang|Ankang (Hanbin)|CN|14
AKB|Atka|Atka|US|235
AKC|Akron Fulton|Akron|US|1
AKD|Akola|Akola|IN|145
AKF|Kufra|Kufra|LY|56
AKH|Prince Sultan Air Base|Al Kharj|SA|225
AKI|Akiak|Akiak|US|5
AKJ|Asahikawa|Higashikagura|JP|249
AKK|Akhiok|Akhiok|US|5
AKL|Auckland|Auckland|NZ|221
AKN|King Salmon|King Salmon|US|5
AKP|Anaktuvuk Pass|Anaktuvuk Pass|US|5
AKR|Akure|Akure|NG|64
AKS|Gwaunaru'u|Auki|SB|8
AKT|RAF Akrotiri|Akrotiri|CY|158
AKU|Aksu Hongqipo|Aksu (Onsu)|CN|37
AKV|Akulivik|Akulivik|CA|39
AKW|Aghajari|Omidiyeh|IR|224
AKX|Aktobe|Aktobe|KZ|320
AKY|Sittwe|Sittwe|MM|358
ALA|Almaty|Almaty|KZ|314
ALB|Albany|Albany|US|1
ALC|Alicante-Elche Miguel Hernández|Alicante|ES|160
ALF|Alta|Alta|NO|85
ALG|Houari Boumediene|Algiers|DZ|55
ALH|Albany|Albany|AU|11
ALI|Alice|Alice|US|147
ALJ|Alexander Bay|Alexander Bay|ZA|93
ALM|Alamogordo White Sands|Alamogordo|US|148
ALN|St Louis|Alton/St Louis|US|147
ALO|Waterloo|Waterloo|US|147
ALP|Aleppo|Aleppo|SY|232
ALR|Alexandra|Alexandra|NZ|221
ALS|San Luis Valley Regional Airport/Bergman Field|Alamosa|US|148
ALW|Walla Walla|Walla Walla|US|4
ALZ|Alitak Seaplane Base|Lazy Bay|US|5
AMA|Rick Husband Amarillo|Amarillo|US|147
AMD|Sardar Vallabh Patel|Ahmedabad|IN|145
AMH|Arba Minch|Arba Minch|ET|89
AMM|Queen Alia|Amman|JO|137
AMQ|Pattimura|Ambon|ID|58
AMS|Amsterdam Airport Schiphol|Amsterdam|NL|80
AMV|Amderma|Amderma|RU|73
AMZ|Ardmore|Manurewa|NZ|221
ANB|Anniston|Anniston|US|147
ANC|Ted Stevens Anchorage|Anchorage|US|5
AND|Anderson|Anderson|US|1
ANE|Angers Marcé|Angers|FR|161
ANF|Andrés Sabella Gálvez|Antofagasta|CL|283
ANG|Angoulême Brie-Champniers|Angoulême|FR|161
ANI|Aniak|Aniak|US|5
ANK|Etimesgut Air Base|Ankara|TR|163
ANM|Antsirabe|Antsirabe|MG|110
ANN|Annette Island|Metlakatla|US|3
ANR|Antwerp International Airport (Deurne)|Antwerp|BE|68
ANS|Andahuaylas|Andahuaylas|PE|287
ANU|V. C. Bird|Osbourn|AG|7
ANV|Anvik|Anvik|US|5
ANX|Andøya Airport, Andenes|Andenes|NO|85
AOC|Leipzig–Altenburg|Nobitz|DE|69
AOE|Hasan Polatkan|Eskişehir|TR|163
AOG|Anshan Teng'ao Airport / Anshan Air Base|Anshan|CN|14
AOI|Marche|Falconara Marittima (AN)|IT|146
AOJ|Aomori|Aomori|JP|249
AOK|Karpathos|Karpathos Island|GR|162
AOL|Paso De Los Libres|Paso de los Libres|AR|255
AOO|Altoona Blair County|Altoona|US|1
AOQ|Aappilattoq Heliport|Aappilattoq|GL|19
AOR|Sultan Abdul Halim|Alor Satar|MY|28
AOS|Amook Bay Seaplane Base|Amook Bay|US|5
AOT|Aosta Corrado Gex|Saint-Christophe (AO)|IT|146
APA|Centennial|Denver|US|148
APF|Naples|Naples|US|1
APG|Phillips Army Air Field|Aberdeen|US|1
API|Gomez Nino Apiay Air Base|Apiay|CO|38
APJ|Ali Pulan|Burang Town|CN|14
APK|Apataki|Apataki|PF|216
APL|Nampula|Nampula|MZ|17
APN|Alpena County|Alpena|US|42
APO|Antonio Roldán Betancur|Carepa|CO|38
APW|Faleolo|Apia|WS|215
APZ|Zapala|Zapala|AR|257
AQA|Araraquara|Araraquara|BR|269
AQG|Anqing Tianzhushan Airport / Anqing North Air Base|Anqing|CN|14
AQI|Qaisumah–Hafar Al-Batin|Qaisumah|SA|225
AQJ|King Hussein|Aqaba|JO|137
AQP|Rodríguez Ballón|Arequipa|PE|287
ARA|Acadiana|New Iberia|US|147
ARC|Arctic Village|Arctic Village|US|5
ARD|Alor Island - Mali|Kabola|ID|199
ARE|Antonio Nery Juarbe Pol|Arecibo|PR|184
ARH|Talagi|Archangelsk|RU|73
ARI|Chacalluta|Arica|CL|283
ARK|Arusha|Arusha|TZ|118
ARM|Armidale|Armidale|AU|12
ARN|Stockholm-Arlanda|Stockholm|SE|86
ART|Watertown|Watertown|US|1
ARU|Araçatuba|Araçatuba|BR|269
ARW|Arad|Arad|RO|175
ARX|Aracati Dragão do Mar|Aracati|BR|25
ARY|Ararat|Ararat|AU|363
ASA|Assab|Assab|ER|138
ASB|Ashgabat|Ashgabat|TM|304
ASD|Andros Town|Andros Town|BS|27
ASE|Aspen-Pitkin County Airport (Sardy Field)|Aspen|US|148
ASF|Astrakhan Narimanovo Boris M. Kustodiev|Astrakhan|RU|342
ASI|RAF Ascension Island|Cat Hill|SH|102
ASJ|Amami|Amami|JP|249
ASK|Yamoussoukro|Yamoussoukro|CI|61
ASM|Asmara|Asmara|ER|138
ASO|Asosa|Asosa|ET|89
ASP|Alice Springs|Alice Springs|AU|364
ASR|Kayseri Erkilet|Kayseri|TR|163
AST|Astoria|Astoria|US|4
ASU|Silvio Pettirossi|Asunción|PY|288
ASV|Amboseli|Ol Tukai|KE|140
ASW|Aswan|Aswan|EG|71
ATA|Comandante FAP German Arias Graziani|Anta|PE|287
ATC|Arthur's Town|Arthur's Town|BS|27
ATF|Chachoán|Ambato|EC|285
ATG|Minhas Air Base|Kamra|PK|230
ATH|Athens Eleftherios Venizelos|Spata-Artemida|GR|162
ATK|Atqasuk Edward Burnell Sr Memorial|Atqasuk|US|5
ATL|Hartsfield Jackson Atlanta|Atlanta|US|1
ATM|Altamira Interstate|Altamira|BR|268
ATQ|Sri Guru Ram Das Ji|Amritsar|IN|145
ATR|Atar|Atar|MR|132
ATT|Atmautluak|Atmautluak|US|2
ATW|Appleton|Appleton|US|147
ATY|Watertown|Watertown|US|147
ATZ|Asyut|Asyut|EG|71
AUA|Queen Beatrix|Oranjestad|AW|305
AUC|Santiago Perez|Arauca|CO|38
AUF|Auxerre Branches|Auxerre|FR|161
AUG|Augusta State|Augusta|US|1
AUH|Zayed|Abu Dhabi|AE|229
AUK|Alakanuk|Alakanuk|US|2
AUL|Aur Island|Aur Atoll|MH|0
AUQ|Hiva Oa-Atuona|Hiva Oa Island|PF|218
AUR|Aurillac|Aurillac|FR|161
AUS|Austin Bergstrom|Austin|US|147
AUU|Aurukun|Aurukun|AU|13
AUW|Wausau Downtown|Wausau|US|147
AUX|Araguaína|Araguaína|BR|280
AVA|Anshun Huangguoshu|Anshun (Xixiu)|CN|14
AVB|Aviano Air Base|Aviano (PN)|IT|146
AVI|Máximo Gómez|Ciro Redondo|CU|204
AVK|Arvaikheer|Arvaikheer|MN|374
AVL|Asheville|Asheville|US|1
AVN|Avignon Caumont|Avignon|FR|161
AVP|Wilkes-Barre/Scranton|Wilkes-Barre/Scranton|US|1
AVR|Amravati|Amravati|IN|145
AVV|Melbourne Avalon|Geelong/Melbourne|AU|363
AWA|Hawassa|Hawassa|ET|89
AWK|Wake Island|Wake Island|UM|247
AWZ|Qasem Soleimani|Ahvaz|IR|224
AXA|Clayton J. Lloyd|The Valley|AI|309
AXD|Alexandroupoli Democritus|Alexandroupolis|GR|162
AXF|Alxa Left Banner Bayanhot|Bayanhot|CN|14
AXJ|Amakusa|Amakusa|JP|249
AXK|Ataq|Ataq|YE|234
AXM|El Eden|Armenia|CO|38
AXN|Chandler Field|Alexandria|US|147
AXP|Spring Point|Spring Point|BS|27
AXR|Arutua||PF|216
AXT|Akita|Akita|JP|249
AXU|Axum|Axum|ET|89
AYJ|Maharshi Valmiki|Faizabad|IN|145
AYO|Aeropuerto Nacional Juan de Ayolas|Ayolas|PY|288
AYP|Air Force Colonel Alfredo Mendivil Duarte|Ayacucho|PE|287
AYQ|Ayers Rock Connellan|Yulara|AU|364
AYT|Antalya|Antalya|TR|163
AYX|Teniente General Gerardo Pérez Pinedo|Atalaya|PE|287
AZA|Mesa Gateway|Mesa|US|151
AZD|Shahid Sadooghi|Yazd|IR|224
AZI|Al Bateen Executive|Abu Dhabi|AE|229
AZN|Andijan|Andijan|UZ|348
AZO|Battle Creek|Kalamazoo|US|42
AZR|Touat-Cheikh Sidi Mohamed Belkebir|Adrar|DZ|55
AZS|Samaná El Catey|Samana|DO|182
BAB|Beale Air Force Base|Beale Air Force Base|US|4
BAD|Barksdale Air Force Base|Bossier City|US|147
BAF|Westfield-Barnes|Westfield|US|1
BAG|Loakan|Baguio|PH|251
BAH|Bahrain|Manama|BH|224
BAI|Buenos Aires|Punta Arenas|CR|201
BAL|Batman|Batman|TR|163
BAQ|Ernesto Cortissoz|Barranquilla|CO|38
BAR|Qionghai Bo'ao|Qionghai (Basuo)|CN|14
BAS|Ballalae|Ballalae|SB|8
BAT|Chafei Amsei|Barretos|BR|269
BAV|Baotou Donghe|Baotou|CN|14
BAX|Barnaul Gherman Titov|Barnaul|RU|337
BAY|Maramureș|Tăuții-Măgherăuș|RO|175
BAZ|Barcelos|Barcelos|BR|275
BBA|Balmaceda|Balmaceda|CL|259
BBD|Curtis Field|Brady|US|147
BBG|Butaritari|Butaritari|KI|210
BBI|Biju Patnaik|Bhubaneswar|IN|145
BBK|Kasane|Kasane|BW|95
BBM|Battambang|Battambang|KH|152
BBN|Bario|Bario|MY|199
BBO|Berbera|Berbera|SO|135
BBQ|Burton-Nibbs|Codrington|AG|7
BBR|Basse-Terre Baillif|Basse-Terre|GP|296
BBS|Blackbushe|Camberley, Surrey|GB|75
BBT|Berbérati|Berbérati|CF|99
BBU|Bucharest Băneasa Aurel Vlaicu|Bucharest|RO|175
BCA|Gustavo Rizo|Baracoa|CU|204
BCD|Bacolod-Silay|Bacolod City|PH|251
BCE|Bryce Canyon|Bryce Canyon|US|148
BCH|Baucau|Baucau|TL|361
BCI|Barcaldine|Barcaldine|AU|13
BCL|Barra del Colorado|Pococi|CR|201
BCM|Bacău George Enescu|Bacău|RO|175
BCN|Josep Tarradellas Barcelona-El Prat|Barcelona|ES|160
BCO|Jinka|Jinka|ET|89
BCQ|Brak|Brak|LY|56
BCT|Boca Raton|Boca Raton|US|1
BCU|Sir Abubakar Tafawa Balewa Bauchi State|Bauchi|NG|64
BCW|Benguera Island|Benguera Island|MZ|17
BDA|L.F. Wade|Hamilton|BM|313
BDB|Bundaberg|Bundaberg|AU|13
BDD|Badu Island|Badu Island|AU|13
BDE|Baudette|Baudette|US|147
BDH|Bandar Lengeh|Bandar Lengeh|IR|224
BDJ|Syamsudin Noor|Banjarbaru|ID|199
BDL|Bradley|Hartford|US|1
BDM|Bandırma|Bandırma|TR|163
BDO|Husein Sastranegara|Bandung|ID|144
BDP|Bhadrapur|Bhadrapur|NP|213
BDQ|Vadodara|Vadodara|IN|145
BDR|Igor I Sikorsky Memorial|Bridgeport|US|1
BDS|Brindisi|Brindisi|IT|146
BDT|Gbadolite|Gbadolite|CD|99
BDU|Bardufoss|Målselv|NO|85
BEB|Benbecula|Balivanich|GB|75
BED|Laurence G Hanscom Field|Bedford|US|1
BEF|Bluefields|Bluefields|NI|198
BEG|Belgrade Nikola Tesla|Belgrade|RS|24
BEJ|Kalimarau|Tanjung Redeb - Borneo Island|ID|199
BEK|Bareilly Air Force Station|Bareilly|IN|145
BEL|Val de Cans/Júlio Cezar Ribeiro|Belém|BR|268
BEM|Beni Mellal|Oulad Yaich|MA|124
BEN|Benina|Benina|LY|56
BEP|Bellary|Bellary|IN|145
BEQ|RAF Honington|Bury Saint Edmunds, Suffolk|GB|75
BER|Berlin Brandenburg|Berlin|DE|69
BES|Brest Bretagne|Brest|FR|161
BET|Bethel|Bethel|US|2
BEU|Bedourie|Bedourie|AU|13
BEW|Beira|Beira|MZ|17
BEX|RAF Benson|Wallingford, Oxfordshire|GB|75
BEY|Beirut Rafic Hariri|Beirut|LB|227
BFD|Bradford|Bradford|US|1
BFE|Bielefeld|Bielefeld|DE|69
BFF|Western Neb. Rgnl/William B. Heilig|Scottsbluff|US|148
BFH|Bacacheri|Curitiba|BR|269
BFI|King County International Airport - Boeing Field|Seattle|US|4
BFJ|Bijie Feixiong|Bijie|CN|14
BFK|Buckley Space Force Base|Aurora|US|148
BFL|Meadows Field|Bakersfield|US|4
BFM|Mobile Downtown|Mobile|US|147
BFN|Bram Fischer|Bloemfontein|ZA|94
BFO|Buffalo Range|Chiredzi|ZW|116
BFP|Beaver County|Beaver Falls|US|1
BFQ|Bahia Piña|Puerto Piña|PA|200
BFS|Belfast|Belfast|GB|75
BFU|Bengbu Renheji|Bengbu|CN|14
BFV|Buri Ram|Buriram|TH|155
BFX|Bafoussam|Bafoussam|CM|101
BFY|Bengbu Tenghu|Bengbu|CN|14
BGA|Palonegro|Bucaramanga|CO|38
BGC|Bragança|Bragança|PT|172
BGF|Bangui M'Poko|Bangui|CF|99
BGG|Bingöl|Bingöl|TR|163
BGI|Grantley Adams|Bridgetown|BB|294
BGK|Big Creek|Big Creek|BZ|30
BGM|Greater Binghamton/Edwin A Link field|Binghamton|US|1
BGN|Belaya Gora|Belaya Gora|RU|325
BGO|Bergen Airport, Flesland|Bergen|NO|85
BGR|Bangor|Bangor|US|1
BGW|Baghdad International Airport / New Al Muthana Air Base|Baghdad|IQ|231
BGX|Comandante Gustavo Kraemer|Bagé|BR|269
BGY|Il Caravaggio|Orio al Serio (BG)|IT|146
BHB|Hancock County-Bar Harbor|Bar Harbor|US|1
BHD|George Best Belfast City|Belfast|GB|75
BHE|Woodbourne|Blenheim|NZ|221
BHH|Bisha|Bisha|SA|225
BHI|Comandante Espora|Bahía Blanca|AR|256
BHJ|Bhuj|Bhuj|IN|145
BHK|Bukhara|Bukhara|UZ|349
BHM|Birmingham-Shuttlesworth|Birmingham|US|147
BHO|Raja Bhoj|Bhopal|IN|145
BHQ|Broken Hill|Broken Hill|AU|365
BHR|Bharatpur|Bharatpur|NP|213
BHS|Bathurst|Bathurst|AU|12
BHU|Bhavnagar|Bhavnagar|IN|145
BHV|Bahawalpur|Bahawalpur|PK|230
BHX|Birmingham|Birmingham, West Midlands|GB|75
BHY|Beihai Fucheng|Beihai|CN|14
BIA|Bastia-Poretta|Bastia|FR|161
BID|Block Island State|Block Island|US|1
BIF|Biggs Army Air Field (Fort Bliss)|Fort Bliss/El Paso|US|148
BIG|Allen Army|Delta Junction Ft Greely|US|5
BIH|Eastern Sierra|Bishop|US|4
BIK|Frans Kaisiepo|Biak|ID|58
BIL|Billings Logan|Billings|US|148
BIM|South Bimini|South Bimini|BS|27
BIO|Bilbao|Bilbao|ES|160
BIQ|Biarritz Pays Basque|Biarritz|FR|161
BIR|Biratnagar|Biratnagar|NP|213
BIS|Bismarck|Bismarck|US|147
BIU|Bildudalur|Bildudalur|IS|22
BIX|Keesler Air Force Base|Biloxi|US|147
BIY|Bisho|Bisho|ZA|94
BJA|Soummam–Abane Ramdane|Béjaïa|DZ|55
BJB|Bojnord|Bojnord|IR|224
BJC|Rocky Mountain Metropolitan|Denver|US|148
BJF|Båtsfjord|Båtsfjord|NO|85
BJI|Bemidji|Bemidji|US|147
BJL|Banjul|Banjul (Yundum)|GM|122
BJM|Bujumbura Melchior Ndadaye|Bujumbura|BI|134
BJO|Bermejo|Bermejo|BO|257
BJR|Bahir Dar|Bahir Dar|ET|89
BJT|Bentota River Waterdrome|Bentota|LK|23
BJV|Milas Bodrum|Bodrum|TR|163
BJX|Guanajuato|Silao|MX|188
BJY|Batajnica Air Base|Zemun|RS|24
BJZ|Badajoz|Badajoz|ES|160
BKA|Baykit|Baykit|RU|254
BKB|Nal|Bikaner|IN|145
BKC|Buckland|Buckland|US|5
BKE|Baker City|Baker City|US|4
BKF|Lake Brooks Seaplane Base|Katmai National Park|US|5
BKG|Branson|Branson|US|147
BKH|Barking Sands|Kekaha|US|240
BKI|Kota Kinabalu|Kota Kinabalu|MY|252
BKK|Suvarnabhumi|Bangkok|TH|155
BKL|Burke Lakefront|Cleveland|US|1
BKM|Bakalalan|Bakalalan|MY|252
BKN|Balkanabat|Balkanabat|TM|304
BKO|Modibo Keita|Bamako|ML|121
BKQ|Blackall|Blackall|AU|13
BKS|Fatmawati Soekarno|Bengkulu|ID|144
BKW|Raleigh County Memorial|Beaver|US|1
BKY|Bukavu Kavumu|Kamakombe|CD|106
BKZ|Bukoba|Bukoba|TZ|118
BLA|General José Antonio Anzoategui|Barcelona|VE|289
BLB|Panamá Pacífico|Panamá City|PA|200
BLD|Boulder City|Boulder City|US|4
BLE|Dala|Borlange|SE|86
BLF|Mercer County|Bluefield|US|1
BLH|Blythe|Blythe|US|4
BLI|Bellingham|Bellingham|US|4
BLJ|Batna Mostefa Ben Boulaid|Batna|DZ|55
BLK|Blackpool|Blackpool|GB|75
BLL|Billund|Billund|DK|82
BLN|Benalla|Benalla|AU|363
BLQ|Bologna Guglielmo Marconi|Bologna|IT|146
BLR|Kempegowda International Airport Bengaluru|Bengaluru|IN|145
BLT|Blackwater||AU|13
BLV|Scott AFB/Midamerica|Belleville|US|147
BLW|Beledweyne|Beledweyne|SO|135
BLZ|Chileka|Blantyre|MW|117
BMA|Stockholm-Bromma|Stockholm|SE|86
BME|Broome|Broome|AU|11
BMG|Monroe County|Bloomington|US|149
BMI|Central Illinois Regional Airport at Bloomington-Normal|Bloomington/Normal|US|147
BMK|Borkum|Borkum|DE|69
BMM|Bitam|Bitam|GA|101
BMO|Banmaw|Banmaw|MM|358
BMR|Baltrum|Baltrum|DE|69
BMU|Sultan Muhammad Salahuddin|Bima|ID|199
BMV|Buon Ma Thuot|Buon Ma Thuot|VN|356
BMW|Bordj Badji Mokhtar|Bordj Badji Mokhtar|DZ|55
BMY|Île Art - Waala|Waala|NC|220
BNA|Nashville|Nashville|US|147
BNB|Boende|Boende|CD|120
BND|Bandar Abbas|Bandar Abbas|IR|224
BNE|Brisbane|Brisbane|AU|13
BNI|Benin|Benin|NG|64
BNK|Ballina Byron Gateway|Ballina|AU|12
BNN|Brønnøysund Airport, Brønnøy|Brønnøy|NO|85
BNO|Burns|Burns|US|4
BNS|Barinas|Barinas|VE|289
BNX|Banja Luka|Mahovljani|BA|174
BNY|Bellona/Anua|Anua|SB|8
BOB|Bora Bora|Motu Mute|PF|216
BOC|Bocas del Toro "Isla Colón"|Isla Colón|PA|200
BOD|Bordeaux–Mérignac|Bordeaux|FR|161
BOG|El Dorado|Bogota|CO|38
BOH|Bournemouth|Bournemouth|GB|75
BOI|Boise Air Terminal/Gowen Field|Boise|US|150
BOJ|Burgas|Burgas|BG|18
BOM|Chhatrapati Shivaji Maharaj|Mumbai|IN|145
BON|Flamingo|Kralendijk|BQ|289
BOO|Bodø|Bodø|NO|85
BOR|Bokeo|Ton Phueng|LA|155
BOS|Boston Logan|Boston|US|1
BOT|Bosset|Bosset|PG|15
BOU|Bourges|Bourges|FR|161
BOY|Bobo Dioulasso|Bobo Dioulasso|BF|59
BPC|Bamenda|Bamenda|CM|101
BPE|Qinhuangdao Beidaihe|Qinhuangdao (Changli)|CN|14
BPG|Barra do Garças|Barra do Garças|BR|271
BPH|Bislig|Bislig|PH|251
BPI|Miley Memorial Field|Big Piney|US|148
BPL|Bole Alashankou|Bole|CN|37
BPM|Begumpet|Hyderabad|IN|145
BPN|Sultan Aji Muhammad Sulaiman Sepinggan|Balikpapan|ID|199
BPS|Porto Seguro|Porto Seguro|BR|26
BPT|Jack Brooks|Beaumont/Port Arthur|US|147
BPX|Qamdo Bangda|Bangda|CN|14
BPY|Besalampy|Besalampy|MG|110
BQA|Dr. Juan C. Angara|Baler|PH|251
BQB|Busselton Margaret River|Busselton|AU|11
BQG|Bogorodskoye|Bogorodskoye|RU|62
BQH|London Biggin Hill|London|GB|75
BQJ|Batagay|Batagay|RU|62
BQK|Brunswick Golden Isles|Brunswick|US|1
BQL|Boulia||AU|13
BQN|Rafael Hernández|Aguadilla|PR|184
BQS|Ignatyevo|Blagoveschensk|RU|324
BQT|Brest|Brest|BY|29
BQU|J F Mitchell|Bequia|VC|300
BRA|Dom Ricardo Weberberger|Barreiras|BR|26
BRC|Teniente Luis Candelaria|San Carlos de Bariloche|AR|257
BRD|Brainerd Lakes|Brainerd|US|147
BRE|Bremen|Bremen|DE|69
BRI|Bari Karol Wojtyła|Bari|IT|146
BRK|Bourke||AU|12
BRL|Southeast Iowa|Burlington|US|147
BRM|Jacinto Lara|Barquisimeto|VE|289
BRN|Bern|Bern|CH|176
BRO|Brownsville South Padre Island|Brownsville|US|147
BRQ|Brno-Tuřany|Brno|CZ|166
BRR|Barra|Eoligarry|GB|75
BRS|Bristol|Bristol|GB|75
BRT|Bathurst Island|Wurrumiyanga|AU|364
BRU|Brussels|Zaventem|BE|68
BRW|Wiley Post Will Rogers Memorial|Utqiaġvik|US|5
BRX|Maria Montez|Barahona|DO|182
BSA|Bender Qassim|Bosaso|SO|135
BSB|Presidente Juscelino Kubitschek|Brasília|BR|269
BSC|José Celestino Mutis|Bahía Solano|CO|38
BSD|Baoshan Yunrui|Baoshan (Longyang)|CN|14
BSG|Bata|Bata|GQ|101
BSJ|Bairnsdale|Bairnsdale|AU|363
BSK|Biskra - Mohamed Khider|Biskra|DZ|55
BSL|EuroAirport Basel–Mulhouse–Freiburg|Bâle / Mulhouse|FR|161
BSO|Basco|Basco|PH|251
BSR|Basra|Basra|IQ|231
BSX|Pathein|Pathein|MM|358
BSZ|Manas|Bishkek|KG|315
BTC|Batticaloa|Batticaloa|LK|23
BTH|Hang Nadim|Batam|ID|144
BTI|Barter Island Long Range Radar Station|Barter Island|US|5
BTJ|Sultan Iskandar Muda|Banda Aceh|ID|144
BTK|Bratsk|Bratsk|RU|253
BTL|Battle Creek Executive Airport at Kellogg Field|Battle Creek|US|42
BTM|Bert Mooney|Butte|US|148
BTR|Baton Rouge Metropolitan|Baton Rouge|US|147
BTS|M. R. Štefánik|Bratislava|SK|181
BTT|Bettles|Bettles|US|5
BTU|Bintulu|Bintulu|MY|252
BTV|Patrick Leahy Burlington|Burlington|US|1
BTW|Bersujud|Batu Licin|ID|199
BTZ|Betong|Betong|TH|28
BUA|Buka|Buka Island|PG|9
BUC|Burketown||AU|13
BUD|Budapest Liszt Ferenc|Budapest|HU|164
BUF|Buffalo Niagara|Buffalo|US|1
BUG|Benguela|Benguela|AO|96
BUI|Bokondini|Bokondini|ID|58
BUJ|Bou Saada|Ouled Sidi Brahim|DZ|55
BUN|Gerardo Tobar López|Buenaventura|CO|38
BUP|Bhatinda Air Force Station||IN|145
BUQ|Joshua Mqabuko Nkomo|Bulawayo|ZW|116
BUR|Hollywood Burbank/Bob Hope|Burbank|US|4
BUS|Alexander Kartveli Batumi|Batumi|GE|322
BUT|Bathpalathang|Jakar|BT|357
BUU|Muara Bungo|Muara Bungo|ID|144
BUX|Bunia|Bunia|CD|106
BUZ|Bushehr|Bushehr|IR|224
BVA|Beauvais-Tillé|Beauvais|FR|161
BVB|Atlas Brasil Cantanhede|Boa Vista|BR|272
BVC|Aristides Pereira|Rabil|CV|133
BVE|Brive Souillac|Brive|FR|161
BVG|Berlevåg|Berlevåg|NO|85
BVH|Brigadeiro Camarão|Vilhena|BR|278
BVI|Birdsville||AU|13
BVJ|Bovanenkovo|Bovanenkovo|RU|344
BVS|Breves|Breves|BR|268
BVY|Beverly|Beverly / Danvers|US|1
BWA|Gautam Buddha|Siddharthanagar (Bhairahawa)|NP|213
BWE|Braunschweig-Wolfsburg|Braunschweig|DE|69
BWF|Barrow Walney Island|Barrow-in-Furness|GB|75
BWG|Bowling Green Warren County|Bowling Green|US|147
BWH|RMAF Butterworth Air Base|Butterworth|MY|28
BWI|Washington International Thurgood Marshall|Baltimore|US|1
BWK|Brač|Gornji Humac|HR|159
BWN|Brunei|Bandar Seri Begawan|BN|360
BWO|Balakovo|Balakovo|RU|351
BWQ|Brewarrina||AU|12
BWT|Wynyard|Burnie|AU|367
BWU|Sydney Bankstown|Sydney|AU|12
BWX|Banyuwangi|Rogojampi, Banyuwangi|ID|144
BXB|Babo|Babo|ID|58
BXE|Bakel|Bakel|SN|130
BXG|Bendigo||AU|363
BXH|Balkhash|Balkhash|KZ|314
BXR|Bam|Bam|IR|224
BXT|LNG Badak|Bontang-Borneo Island|ID|199
BXU|Bancasi|Butuan|PH|251
BXY|Baikonur Krayniy|Baikonur|KZ|316
BYC|Yacuiba|Yacuíba|BO|290
BYH|Arkansas|Blytheville|US|147
BYI|Burley|Burley|US|150
BYJ|Beja Airport / Airbase|Beja|PT|172
BYK|Bouaké|Bouaké|CI|61
BYM|Carlos Manuel de Cespedes|Bayamo|CU|204
BYN|Bayankhongor|Bayankhongor|MN|374
BYO|Bonito|Bonito|BR|273
BYR|Læsø|Læsø|DK|82
BYS|Bicycle Lake Army Air Field|Fort Irwin/Barstow|US|4
BYU|Bayreuth|Bindlach|DE|69
BYW|Blakely Island|Blakely Island|US|4
BZB|Bazaruto Island|Bazaruto Island|MZ|17
BZC|Umberto Modiano|Cabo Frio|BR|269
BZD|Balranald||AU|12
BZE|Philip S. W. Goldson|Belize City|BZ|31
BZG|Ignacy Jan Paderewski Bydgoszcz|Bydgoszcz|PL|88
BZI|Balıkesir|Balıkesir|TR|163
BZK|Bryansk|Bryansk|RU|73
BZL|Barisal|Barisal|BD|352
BZN|Bozeman Yellowstone|Bozeman|US|148
BZO|Bolzano|Bolzano (BZ)|IT|146
BZR|Béziers Vias|Béziers|FR|161
BZU|Buta Zega|Buta|CD|106
BZV|Maya-Maya|Brazzaville|CG|97
BZX|Bazhong Enyang|Bazhong|CN|14
BZY|Bălți-Leadoveni|Bălți|MD|177
BZZ|RAF Brize Norton|Carterton, Oxfordshire|GB|75
CAB|Cabinda|Cabinda|AO|96
CAC|Coronel Adalberto Mendes da Silva|Cascavel|BR|269
CAE|Columbia Metropolitan|Columbia|US|1
CAF|Carauari|Carauari|BR|275
CAG|Cagliari Elmas|Cagliari|IT|146
CAH|Cà Mau|Ca Mau City|VN|356
CAI|Cairo|Cairo|EG|71
CAJ|Canaima|Canaima|VE|289
CAK|Akron Canton|Akron|US|1
CAL|Campbeltown|Campbeltown|GB|75
CAN|Guangzhou Baiyun|Guangzhou (Huadu)|CN|14
CAP|Cap Haitien|Cap Haitien|HT|203
CAQ|Juan H White|Caucasia|CO|38
CAR|Caribou|Caribou|US|1
CAT|Cascais|Cascais|PT|172
CAU|Caruaru|Caruaru|BR|281
CAW|Bartolomeu Lisandro|Campos dos Goytacazes|BR|269
CAX|Carlisle Lake District|Carlisle, Cumbria|GB|75
CAY|Cayenne – Félix Eboué|Matoury|GF|279
CAZ|Cobar||AU|12
CBB|Jorge Wilsterman|Cochabamba|BO|290
CBD|Car Nicobar Air Force Base|IAF Camp|IN|145
CBG|Cambridge City|Cambridge, Cambridgeshire|GB|75
CBH|Béchar Boudghene Ben Ali Lotfi|Béchar|DZ|55
CBJ|Cabo Rojo|Cabo Rojo|DO|182
CBL|General Tomas de Heres|Ciudad Bolivar|VE|289
CBM|Columbus Air Force Base|Columbus|US|147
CBO|Cotabato (Awang)|Datu Odin Sinsuat|PH|251
CBQ|Margaret Ekpo|Calabar|NG|64
CBR|Canberra|Canberra|AU|12
CBT|Catumbela|Catumbela|AO|96
CBV|Coban|Coban|GT|30
CCA|Chimore|Chimore|BO|290
CCC|Jardines Del Rey|Cayo Coco|CU|204
CCE|Capital|New Cairo|EG|71
CCF|Carcassonne Salvaza|Carcassonne|FR|161
CCH|Chile Chico|Chile Chico|CL|265
CCJ|Calicut|Calicut|IN|145
CCK|Cocos (Keeling) Islands|West Island|CC|370
CCL|Chinchilla|Chinchilla|AU|13
CCM|Forquilhinha - Criciúma|Criciúma|BR|269
CCP|Carriel Sur|Concepcion|CL|283
CCR|Buchanan Field|Concord|US|4
CCS|Maiquetía Simón Bolívar|Maiquetía|VE|289
CCU|Netaji Subhash Chandra Bose|Kolkata|IN|145
CCV|Craig Cove|Craig Cove|VU|219
CCY|Northeast Iowa|Charles City|US|147
CCZ|Chub Cay|Chub Cay|BS|27
CDB|Cold Bay|Cold Bay|US|2
CDC|Cedar City|Cedar City|US|148
CDE|Chengde Puning|Chengde|CN|14
CDG|Charles de Gaulle|Paris (Roissy-en-France, Val-d'Oise)|FR|161
CDJ|Conceição do Araguaia|Conceição do Araguaia|BR|268
CDP|Kadapa|Kadapa|IN|145
CDR|Chadron|Chadron|US|148
CDS|Childress|Childress|US|147
CDT|Castellón-Costa Azahar|Castellón de la Plana|ES|160
CDU|Camden|Cobbitty|AU|12
CDV|Merle K (Mudhole) Smith|Cordova|US|5
CEB|Mactan Cebu|Cebu City/Lapu-Lapu City|PH|251
CEC|Jack Mc Namara Field|Crescent City|US|4
CED|Ceduna||AU|366
CEE|Cherepovets|Cherepovets|RU|73
CEF|Westover Metropolitan Airport / Westover Air Reserve Base|Chicopee|US|1
CEG|Hawarden|Broughton|GB|75
CEI|Mae Fah Luang - Chiang Rai|Chiang Rai|TH|155
CEK|Kurchatov Chelyabinsk|Chelyabinsk|RU|344
CEL|Canela|Canela|BR|269
CEM|Central|Central|US|5
CEN|Ciudad Obregón|Ciudad Obregón|MX|193
CEQ|Cannes Mandelieu|Cannes|FR|161
CER|Cherbourg Manche|Cherbourg|FR|161
CEW|Bob Sikes|Crestview|US|147
CEZ|Cortez|Cortez|US|148
CFB|Cabo Frio|Cabo Frio|BR|269
CFE|Clermont-Ferrand Auvergne|Clermont-Ferrand|FR|161
CFG|Jaime Gonzalez|Cienfuegos|CU|204
CFK|Chlef Aboubakr Belkaid|Chlef|DZ|55
CFN|Donegal|Donegal|IE|81
CFR|Caen Carpiquet|Caen|FR|161
CFS|Coffs Harbour|Coffs Harbour|AU|12
CFU|Corfu Ioannis Kapodistrias|Kerkyra (Corfu)|GR|162
CGA|Craig Seaplane Base|Craig|US|3
CGB|Várzea Grande–Marechal Rondon|Cuiabá|BR|271
CGD|Changde Taohuayuan|Changde (Dingcheng)|CN|14
CGF|Cuyahoga County|Cleveland|US|1
CGH|Congonhas–Deputado Freitas Nobre|São Paulo|BR|269
CGI|Cape Girardeau|Cape Girardeau|US|147
CGJ|Kasompe|Chingola|ZM|105
CGK|Soekarno-Hatta|Jakarta|ID|144
CGM|Camiguin|Mambajao|PH|251
CGN|Cologne Bonn|Köln (Cologne)|DE|69
CGO|Zhengzhou Xinzheng|Zhengzhou|CN|14
CGP|Shah Amanat|Chattogram (Chittagong)|BD|352
CGQ|Changchun Longjia|Changchun|CN|14
CGR|Campo Grande|Campo Grande|BR|273
CGY|Laguindingan|Laguindingan|PH|251
CHA|Chattanooga Metropolitan Airport (Lovell Field)|Chattanooga|US|1
CHC|Christchurch|Christchurch|NZ|221
CHE|Tallinn Linnahall Heliport|Tallinn|EE|70
CHG|Chaoyang|Shuangta, Chaoyang|CN|14
CHH|Chachapoyas|Chachapoyas|PE|287
CHM|FAP Lieutenant Jaime Andres de Montreuil Morales|Chimbote|PE|287
CHO|Charlottesville Albemarle|Charlottesville|US|1
CHQ|Chania|Souda|GR|162
CHR|Châteauroux Déols|Châteauroux|FR|161
CHS|Charleston|Charleston|US|1
CHT|Inia William Tuuta Memorial|Te One|NZ|222
CHU|Chuathbaluk|Chuathbaluk|US|5
CHX|Changuinola Captain Manuel Niño|Changuinola|PA|201
CHY|Choiseul Bay|Choiseul Bay|SB|8
CIA|Ciampino–G. B. Pastine|Rome|IT|146
CID|The Eastern Iowa|Cedar Rapids|US|147
CIF|Chifeng Yulong|Chifeng|CN|14
CIH|Changzhi Wangcun|Changzhi|CN|14
CIJ|Capitán Aníbal Arab|Cobija|BO|274
CIK|Chalkyitsik|Chalkyitsik|US|5
CIO|Lieutenant Colonel Carmelo Peralta National|Concepción|PY|288
CIS|Canton Island|Abariringa|KI|237
CIT|Shymkent|Shymkent|KZ|314
CIU|Chippewa County|Kincheloe|US|42
CIW|Canouan|Canouan|VC|300
CIX|Capitán FAP José A. Quiñones González|Chiclayo|PE|287
CIY|Comiso|Comiso|IT|146
CJA|Mayor General FAP Armando Revoredo Iglesias|Cajamarca|PE|287
CJB|Coimbatore|Coimbatore|IN|145
CJC|El Loa|Calama|CL|283
CJJ|Cheongju International Airport/Cheongju Air Base (K-59/G-513)|Cheongju|KR|250
CJL|Chitral|Chitral|PK|230
CJM|Chumphon|Chumphon|TH|155
CJN|Nusawiru|Cijulang|ID|144
CJS|Abraham González|Ciudad Juárez|MX|194
CJU|Jeju|Jeju City|KR|250
CJZ|Pedro Vieira Moreira|Cajazeiras|BR|25
CKB|North Central West Virginia|Bridgeport|US|1
CKC|Cherkasy|Cherkasy|UA|332
CKD|Crooked Creek|Crooked Creek|US|5
CKG|Chongqing Jiangbei|Chongqing|CN|14
CKH|Chokurdakh|Chokurdah|RU|325
CKL|Chkalovskiy Air Base|Moscow|RU|73
CKS|Carajás|Parauapebas|BR|268
CKT|Sarakhs|Sarakhs|IR|224
CKW|Christmas Creek|Christmas Creek Mine|AU|11
CKX|Chicken|Chicken|US|5
CKY|Ahmed Sékou Touré|Conakry|GN|131
CKZ|Çanakkale|Çanakkale|TR|163
CLD|McClellan-Palomar|Carlsbad|US|4
CLE|Cleveland Hopkins|Cleveland|US|1
CLJ|Avram Iancu Cluj|Cluj-Napoca|RO|175
CLL|Easterwood Field|College Station|US|147
CLM|William R Fairchild|Port Angeles|US|4
CLN|Brig. Lysias Augusto Rodrigues|Carolina|BR|25
CLO|Alfonso Bonilla Aragon|Cali|CO|38
CLP|Clarks Point|Clarks Point|US|5
CLQ|Licenciado Miguel de la Madrid|Colima|MX|188
CLT|Charlotte Douglas|Charlotte|US|1
CLU|Columbus|Columbus|US|149
CLV|Nelson Ribeiro Guimarães|Caldas Novas|BR|269
CLY|Calvi Sainte Catherine|Calvi|FR|161
CLZ|Calabozo|Guarico|VE|289
CMA|Cunnamulla||AU|13
CMB|Bandaranaike International Colombo|Colombo|LK|23
CMD|Cootamundra||AU|12
CME|Ciudad del Carmen|Ciudad del Carmen|MX|190
CMF|Chambéry Aix les Bains|Chambéry|FR|161
CMG|Corumbá|Corumbá|BR|273
CMH|John Glenn Columbus|Columbus|US|1
CMI|University of Illinois Willard|Savoy|US|147
CMN|Mohammed V|Casablanca|MA|124
CMQ|Clermont||AU|13
CMR|Colmar Houssen|Colmar|FR|161
CMU|Chimbu|Kundiawa|PG|15
CMW|Ignacio Agramonte|Camaguey|CU|204
CMX|Houghton County Memorial|Hancock|US|42
CNB|Coonamble||AU|12
CNC|Coconut Island||AU|13
CND|Mihail Kogălniceanu|Constanța|RO|175
CNF|Tancredo Neves|Belo Horizonte|BR|269
CNG|Cognac-Châteaubernard (BA 709) Air Base|Cognac/Châteaubernard|FR|161
CNI|Changhai Dachangshandao|Dalian (Changhai)|CN|14
CNJ|Cloncurry|Cloncurry|AU|13
CNL|Sindal|Sindal|DK|82
CNM|Cavern City Air Terminal|Carlsbad|US|148
CNN|Kannur|Kannur|IN|145
CNP|Neerlerit Inaat|Neerlerit Inaat|GL|19
CNQ|Corrientes|Corrientes|AR|255
CNR|Chañaral|Chañaral|CL|283
CNS|Cairns|Cairns|AU|13
CNU|Chanute Martin Johnson|Chanute|US|147
CNX|Chiang Mai|Chiang Mai|TH|155
CNY|Canyonlands|Moab|US|148
COC|Comodoro Pierrestegui|Concordia|AR|255
COD|Yellowstone|Cody|US|148
COE|Coeur D'Alene Airport - Pappy Boyington Field|Coeur d'Alene|US|4
COF|Patrick Space Force Base|Cocoa Beach|US|1
COJ|Coonabarabran||AU|12
COK|Cochin|Kochi|IN|145
COL|Coll|Coll Island|GB|75
CON|Concord|Concord|US|1
COO|Cotonou Cadjehoun|Cotonou|BJ|57
COQ|Choibalsan||MN|376
COR|Ingeniero Aeronáutico Ambrosio L.V. Taravella|Cordoba|AR|255
COS|City of Colorado Springs|Colorado Springs|US|148
COU|Columbia|Columbia|US|147
COV|Çukurova|Tarsus|TR|163
CPC|Aviador C. Campos|Chapelco/San Martin de los Andes|AR|257
CPD|Coober Pedy|Coober Pedy|AU|366
CPE|Ingeniero Alberto Acuña Ongay|Campeche|MX|190
CPH|Copenhagen Kastrup|Copenhagen|DK|82
CPO|Desierto de Atacama|Copiapo|CL|283
CPR|Casper-Natrona County|Casper|US|148
CPT|Cape Town|Cape Town|ZA|94
CPV|Presidente João Suassuna|Campina Grande|BR|25
CPX|Benjamin Rivera Noriega|Culebra|PR|184
CQD|Shahrekord|Shahrekord|IR|224
CQF|Calais Marck|Calais|FR|161
CQM|Ciudad Real|Ciudad Real|ES|160
CQW|Chongqing Xiannüshan|Wulong|CN|14
CRA|Craiova|Craiova|RO|175
CRC|Santa Ana|Cartago|CO|38
CRD|General Enrique Mosconi|Comodoro Rivadavia|AR|259
CRE|Grand Strand|North Myrtle Beach|US|1
CRG|Jacksonville Executive at Craig|Jacksonville|US|1
CRI|Colonel Hill|Colonel Hill|BS|27
CRK|Clark International Airport / Clark Air Base|Mabalacat|PH|251
CRL|Brussels South Charleroi|Charleroi|BE|68
CRM|Catarman National|Catarman|PH|251
CRP|Corpus Christi|Corpus Christi|US|147
CRQ|Caravelas|Caravelas|BR|26
CRU|Lauriston|Carriacou Island|GD|300
CRV|Crotone Sant'Anna Pythagoras|Isola di Capo Rizzuto (KR)|IT|146
CRW|Yeager|Charleston|US|1
CRZ|Türkmenabat|Türkmenabat|TM|304
CSA|Colonsay Airstrip|Colonsay|GB|75
CSB|Caransebeş|Caransebeş|RO|175
CSF|Creil Air Base|Creil|FR|161
CSG|Columbus|Columbus|US|1
CSH|Solovki|Solovetsky Islands|RU|73
CSK|Cap Skirring|Cap Skirring|SN|130
CSN|Carson|Carson City|US|4
CSV|Crossville Memorial Airport Whitson Field|Crossville|US|147
CSW|Cabo San Lucas|Cabo San Lucas|MX|191
CSX|Changsha Huanghua|Changsha (Changsha)|CN|14
CSY|Cheboksary|Cheboksary|RU|73
CTA|Catania-Fontanarossa|Catania|IT|146
CTB|Cut Bank|Cut Bank|US|148
CTC|Coronel Felipe Varela|Catamarca|AR|259
CTD|Alonso Valderrama|Chitré|PA|200
CTG|Rafael Nuñez|Cartagena|CO|38
CTL|Charleville|Charleville|AU|13
CTM|Chetumal|Chetumal|MX|192
CTN|Cooktown||AU|13
CTS|New Chitose|Sapporo|JP|249
CTT|Le Castellet|Le Castellet, Var|FR|161
CTU|Chengdu Shuangliu|Chengdu (Shuangliu)|CN|14
CUA|Ciudad Constitución National|Comondú|MX|191
CUB|Jim Hamilton L.B. Owens|Columbia|US|1
CUC|Camilo Daza|Cúcuta|CO|38
CUE|Mariscal Lamar|Cuenca|EC|285
CUF|Cuneo|Levaldigi (CN)|IT|146
CUK|Caye Caulker|Caye Caulker|BZ|31
CUL|Bachigualato Federal|Culiacán|MX|191
CUM|Antonio José de Sucre|Cumaná|VE|289
CUN|Cancún|Cancún|MX|192
CUP|General Francisco Bermúdez|Carúpano|VE|289
CUQ|Coen|Coen|AU|13
CUR|Hato|Willemstad|CW|306
CUT|Cutral-Co|Cutral-Co|AR|257
CUU|General Roberto Fierro Villalobos|Chihuahua|MX|195
CUZ|Alejandro Velasco Astete|Cusco|PE|287
CVC|Cleve||AU|366
CVE|Coveñas|Coveñas|CO|38
CVG|Cincinnati Northern Kentucky|Cincinnati / Covington|US|1
CVJ|General Mariano Matamoros|Temixco|MX|188
CVM|General Pedro Jose Mendez|Ciudad Victoria|MX|189
CVN|Clovis|Clovis|US|147
CVO|Corvallis|Corvallis|US|4
CVQ|Carnarvon|Carnarvon|AU|11
CVS|Cannon Air Force Base|Clovis|US|148
CVU|Corvo|Corvo|PT|171
CWA|Central Wisconsin|Mosinee|US|147
CWB|Curitiba-Afonso Pena|Curitiba|BR|269
CWC|Chernivtsi|Chernivtsi|UA|332
CWJ|Cangyuan Washan|Lincang (Cangyuan)|CN|358
CWL|Cardiff|Cardiff|GB|75
CWS|Center Island|Center Island|US|4
CWT|Cowra||AU|12
CWW|Corowa||AU|12
CXA|Caicara del Orinoco||VE|289
CXB|Cox's Bazar|Cox's Bazar|BD|352
CXH|Vancouver Harbour Water|Vancouver|CA|6
CXI|Cassidy|Kiritimati|KI|241
CXJ|Hugo Cantergiani|Caxias Do Sul|BR|269
CXO|Conroe-North Houston|Houston|US|147
CXP|Tunggul Wulung|Cilacap|ID|144
CXR|Cam Ranh International Airport / Cam Ranh Air Base|Nha Trang/nha Trang aiurportCam Ranh|VN|356
CYA|Antoine-Simon|Les Cayes|HT|203
CYB|Charles Kirkconnell|West End|KY|205
CYC|Caye Chapel|Caye Chapel|BZ|31
CYF|Chefornak|Chefornak|US|2
CYG|Corryong||AU|363
CYI|Chiayi|Shuishang|TW|248
CYM|Chatham Seaplane Base|Chatham|US|3
CYO|Vilo Acuña|Cayo Largo del Sur|CU|204
CYP|Calbayog|Calbayog City|PH|251
CYS|Cheyenne Regional Jerry Olson Field|Cheyenne|US|148
CYT|Yakataga|Yakataga|US|5
CYU|Cuyo|Cuyo|PH|251
CYW|Captain Rogelio Castillo National|Celaya|MX|188
CYX|Cherskiy|Cherskiy|RU|63
CYZ|Cauayan|Cauayan City|PH|251
CZE|José Leonardo Chirinos|Coro|VE|289
CZF|Cape Romanzof LRRS|Cape Romanzof|US|2
CZH|Corozal|Corozal|BZ|31
CZL|Mohamed Boudiaf|Constantine|DZ|55
CZM|Cozumel|Cozumel|MX|192
CZS|Cruzeiro do Sul|Cruzeiro Do Sul|BR|274
CZU|Las Brujas|Corozal|CO|38
CZX|Changzhou Benniu|Changzhou|CN|14
DAA|Davison Army Air Field|Fort Belvoir|US|1
DAB|Daytona Beach|Daytona Beach|US|1
DAC|Hazrat Shahjalal|Dhaka|BD|352
DAD|Da Nang|Da Nang|VN|356
DAG|Barstow Daggett|Daggett|US|4
DAL|Dallas Love Field|Dallas|US|147
DAM|Damascus|Damascus|SY|232
DAN|Danville|Danville|US|1
DAR|Julius Nyerere|Dar es Salaam|TZ|118
DAT|Datong Yungang|Datong|CN|14
DAU|Daru|Daru|PG|15
DAV|Enrique Malek|David|PA|200
DAX|Dachuan|Dazhou (Daxian)|CN|14
DAY|James M. Cox Dayton|Dayton|US|1
DBA|Dalbandin|Dalbandin|PK|230
DBB|El Alamein|El Alamein|EG|71
DBC|Baicheng Chang'an|Baicheng|CN|14
DBD|Dhanbad||IN|145
DBM|Debre Markos|Debre Markos|ET|89
DBO|Dubbo City|Dubbo|AU|12
DBQ|Dubuque|Dubuque|US|147
DBR|Darbhanga|Darbhanga|IN|145
DBV|Dubrovnik Ruđer Bošković|Dubrovnik|HR|159
DCA|Ronald Reagan Washington National|Washington|US|1
DCF|Canefield|Canefield|DM|295
DCI|Decimomannu Air Base|Decimomannu|IT|146
DCM|Castres Mazamet|Castres|FR|161
DCN|RAAF Base Curtin|Derby|AU|11
DCT|Duncan Town|Duncan Town|BS|27
DCY|Daocheng Yading|Garzê (Daocheng)|CN|14
DDC|Dodge City|Dodge City|US|147
DDG|Dandong Langtou|Dandong (Zhenxing)|CN|14
DDR|Shigatse Tingri|Xigazê (Dingri)|CN|14
DEA|Dera Ghazi Khan|Dera Ghazi Khan|PK|230
DEB|Debrecen|Debrecen|HU|164
DEC|Decatur|Decatur|US|147
DED|Dehradun Jolly Grant|Dehradun (Jauligrant)|IN|145
DEE|Yuzhno-Kurilsk Mendeleyevo|Yuzhno-Kurilsk|RU|326
DEF|Dezful|Dezful|IR|224
DEJ|Tongren Dejiang Airport (Under Construction)|Tongren|CN|14
DEL|Indira Gandhi|New Delhi|IN|145
DEM|Dembidollo|Dembidollo|ET|89
DEN|Denver|Denver|US|148
DET|Coleman A. Young|Detroit|US|42
DEX|Nop Goliat Dekai|Dekai|ID|58
DEZ|Deir ez-Zor|Deir ez-Zor|SY|232
DFW|Dallas Fort Worth|Dallas-Fort Worth|US|147
DGA|Dangriga|Dangriga|BZ|31
DGE|Mudgee|Mudgee|AU|12
DGH|Deoghar|Deoghar|IN|145
DGO|General Guadalupe Victoria|Durango|MX|189
DGT|Sibulan|Dumaguete City|PH|251
DHA|King Abdulaziz Air Base|Dhahran|SA|225
DHB|Deer Harbor SPB|Deer Harbor|US|4
DHF|Al Dhafra Air Base||AE|229
DHH|Barkol Dahe|Barkol|CN|37
DHM|Kangra|Kangra|IN|145
DHN|Dothan|Dothan|US|147
DHR|De Kooy Airfield / Den Helder Naval Air Station|Den Helder|NL|80
DHT|Dalhart|Dalhart|US|147
DHX|Dhoho|Kediri|ID|144
DIA|Doha|Doha|QA|233
DIB|Dibrugarh|Dibrugarh|IN|145
DIE|Arrachart|Antisiranana|MG|110
DIG|Diqing Shangri-La|Diqing (Shangri-La)|CN|14
DIJ|Dijon Longvic|Dijon|FR|161
DIK|Dickinson Theodore Roosevelt|Dickinson|US|148
DIL|Presidente Nicolau Lobato|Dili|TL|199
DIN|Dien Bien Phu|Dien Bien Phu|VN|354
DIO|Diomede Heliport|Diomede|US|63
DIR|Aba Tenna Dejazmach Yilma|Dire Dawa|ET|89
DIS|Ngot Nzoungou|Dolisie|CG|97
DIU|Diu|Diu|IN|145
DIY|Diyarbakır|Diyarbakır|TR|163
DJB|Sultan Thaha|Jambi|ID|144
DJE|Djerba Zarzis|Mellita|TN|66
DJG|Tiska Djanet|Djanet|DZ|55
DJJ|Dortheys Hiyo Eluay|Sentani|ID|58
DJO|Daloa||CI|61
DJT|President Donald J. Trump|West Palm Beach|US|1
DKA|Umaru Musa Yar'adua|Katsina|NG|64
DKR|Léopold Sédar Senghor|Dakar|SN|130
DKS|Dikson|Dikson|RU|254
DLA|Douala|Douala|CM|101
DLC|Dalian Zhoushuizi|Dalian (Ganjingzi)|CN|14
DLE|Dole Tavaux|Dole|FR|161
DLF|Laughlin Air Force Base|Del Rio|US|147
DLG|Dillingham|Dillingham|US|5
DLH|Duluth|Duluth|US|147
DLI|Lien Khuong|Da Lat|VN|356
DLM|Dalaman|Dalaman|TR|163
DLR|Dalnerechensk|Dalnerechensk|RU|62
DLS|Columbia Gorge|Dallesport / The Dalles|US|4
DLU|Dali Fengyi|Dali (Xiaguan)|CN|14
DLZ|Dalanzadgad|Dalanzadgad|MN|374
DMA|Davis Monthan Air Force Base|Tucson|US|151
DMB|Taraz|Taraz|KZ|314
DMD|Doomadgee||AU|13
DME|Domodedovo|Moscow|RU|73
DMK|Don Mueang|Bangkok|TH|155
DMM|King Fahd|Ad Dammam|SA|225
DMN|Deming|Deming|US|148
DMU|Dimapur|Dimapur|IN|145
DNA|Kadena Air Base|Okinawa|JP|249
DND|Dundee|Dundee|GB|75
DNH|Dunhuang Mogao|Dunhuang|CN|14
DNK|Dnipro|Dnipro|UA|332
DNL|Daniel Field|Augusta|US|1
DNQ|Deniliquin|Deniliquin|AU|12
DNR|Dinard Pleurtuit Saint-Malo|Dinard|FR|161
DNZ|Çardak|Denizli|TR|163
DOD|Dodoma|Dodoma|TZ|118
DOG|Dongola|Dongola|SD|143
DOH|Hamad|Doha|QA|233
DOL|Deauville Normandie|Deauville|FR|161
DOM|Douglas-Charles|Marigot|DM|295
DOP|Dolpa|Dolpa|NP|213
DOV|Dover Civil Air Terminal/Dover Air Force Base|Dover|US|1
DOY|Dongying Shengli|Dongying (Kenli)|CN|14
DPA|Dupage|Chicago/West Chicago|US|147
DPL|Dipolog|Dipolog|PH|251
DPO|Devonport|Devonport|AU|367
DPS|Denpasar I Gusti Ngurah Rai|Kuta, Badung|ID|199
DPT|Deputatskiy|Deputatskiy|RU|62
DQA|Daqing Sartu|Daqing|CN|14
DQM|Duqm|Duqm|OM|228
DRA|Desert Rock|Mercury|US|4
DRB|Derby|Derby|AU|11
DRG|Deering|Deering|US|2
DRI|Beauregard|DeRidder|US|147
DRJ|Drietabbetje|Drietabbetje|SR|291
DRN|Dirranbandi||AU|13
DRO|Durango La Plata County|Durango|US|148
DRP|Bicol|Legazpi|PH|251
DRS|Dresden|Dresden|DE|69
DRT|Del Rio|Del Rio|US|147
DRV|Dharavandhoo|Baa Atoll|MV|111
DRW|Darwin International Airport / RAAF Darwin|Darwin|AU|364
DSD|La Désirade|Grande Anse|GP|296
DSE|Kombolcha|Dessie|ET|89
DSI|Destin Executive|Destin|US|147
DSK|Dera Ismael Khan Airport [IN-ACTIVE]|Dera Ismael Khan|PK|230
DSM|Des Moines|Des Moines|US|147
DSN|Ordos Ejin Horo|Ordos|CN|14
DSO|Sondok|Sŏndŏng-ni|KP|373
DSS|Blaise Diagne|Dakar|SN|130
DSY|Dara Sakor|Ta Noun|KH|152
DTB|Silangit|Siborong-Borong|ID|144
DTD|Datadawai|Datadawai-Borneo Island|ID|199
DTE|Daet|Daet|PH|251
DTM|Dortmund|Dortmund|DE|69
DTR|Decatur Shores|Decatur|US|4
DTU|Wudalianchi Dedu|Heihe|CN|14
DTW|Detroit Metropolitan Wayne County|Detroit|US|42
DUA|Durant Regional Airport - Eaker Field|Durant|US|147
DUB|Dublin|Dublin|IE|81
DUD|Dunedin|Dunedin|NZ|221
DUE|Dundo|Chitato|AO|106
DUG|Bisbee Douglas|Douglas Bisbee|US|151
DUJ|DuBois|Dubois|US|1
DUM|Pinang Kampai|Dumai|ID|144
DUR|King Shaka|Durban|ZA|94
DUS|Düsseldorf|Düsseldorf|DE|69
DUT|Tom Madsen (Dutch Harbor)|Unalaska|US|2
DVL|Devils Lake|Devils Lake|US|147
DVO|Francisco Bangoy|Davao|PH|251
DWA|Dwangwa|Dwangwa|MW|117
DWB|Soalala|Soalala|MG|110
DWC|Al Maktoum|Dubai(Jebel Ali)|AE|229
DWD|Dawadmi Domestic|Dawadmi|SA|225
DWO|Diyawanna Oya Seaplane Base|Sri Jayawardenepura Kotte|LK|23
DXB|Dubai|Dubai|AE|229
DXJ|Xiangxi Biancheng|Xiangxi|CN|14
DXN|Noida|Gautam Buddha Nagar|IN|145
DXR|Danbury|Danbury|US|1
DYA|Dysart||AU|13
DYG|Zhangjiajie Hehua|Zhangjiajie (Yongding)|CN|14
DYR|Ugolny Yuri Ryktheu|Anadyr|RU|63
DYS|Dyess Air Force Base|Abilene|US|147
DYU|Dushanbe|Dushanbe|TJ|347
DZA|Dzaoudzi Pamandzi|Dzaoudzi|YT|108
DZH|Dazhou Jinya|Dazhou (Dachuan)|CN|14
DZN|Zhezkazgan National|Zhezkazgan|KZ|314
DZO|Santa Bernardina|Durazno|UY|292
EAA|Eagle|Eagle|US|5
EAM|Najran Domestic|Najran|SA|225
EAR|Kearney|Kearney|US|147
EAS|San Sebastián|Hondarribia|ES|160
EAT|Pangborn Memorial|Wenatchee|US|4
EAU|Chippewa Valley|Eau Claire|US|147
EAX|Eduard Alexander Gummels|Kwatta|SR|291
EBA|Marina di Campo|Campo nell'Elba (LI)|IT|146
EBB|Entebbe|Entebbe|UG|141
EBD|El-Obeid|El-Obeid|SD|143
EBG|El Bagre|El Bagre|CO|38
EBH|El Bayadh|El Bayadh|DZ|55
EBJ|Esbjerg|Esbjerg|DK|82
EBL|Erbil|Arbil|IQ|231
EBM|El Borma|El Borma|TN|55
EBU|Saint-Étienne-Bouthéon|Andrézieux-Bouthéon, Loire|FR|161
ECG|Elizabeth City Regional Airport & Coast Guard Air Station|Elizabeth City|US|1
ECH|Echuca||AU|363
ECN|Ercan|Tymbou (Kirklar)|CY|157
ECP|Northwest Florida Beaches|Panama City Beach|US|147
EDA|Edna Bay Seaplane Base|Edna Bay|US|3
EDF|Elmendorf Air Force Base|Anchorage|US|5
EDI|Edinburgh|Ingliston, Edinburgh|GB|75
EDL|Eldoret|Eldoret|KE|140
EDM|La Roche-sur-Yon Les Ajoncs|La Roche-sur-Yon|FR|161
EDO|Balıkesir Koca Seyit|Edremit|TR|163
EDR|Pormpuraaw|Pormpuraaw|AU|13
EDW|Edwards Air Force Base|Edwards|US|4
EEA|Planalto Serrano|Correia Pinto|BR|269
EED|Needles|Needles|US|4
EEK|Eek|Eek|US|2
EEN|Dillant Hopkins|Keene|US|1
EES|Berenice International Airport / Banas Cape Air Base|Berenice Troglodytica|EG|71
EFD|Ellington|Houston|US|147
EFL|Kefallinia|Kefallinia Island|GR|162
EGC|Bergerac Dordogne-Périgord|Bergerac|FR|161
EGE|Eagle County|Eagle|US|148
EGH|El Jora|El Jora|EG|71
EGI|Duke Field|Crestview|US|147
EGO|Belgorod|Belgorod|RU|73
EGS|Egilsstaðir|Egilsstaðir|IS|22
EGX|Egegik|Egegik|US|5
EHL|El Bolsón|El Bolsón|AR|257
EHM|Cape Newenham LRRS|Cape Newenham|US|5
EHU|Ezhou Huahu|Ezhou|CN|14
EIB|Eisenach-Kindel|Hörselberg-Hainich|DE|69
EIE|Yeniseysk|Yeniseysk|RU|254
EIK|Yeysk|Yeysk|RU|73
EIL|Eielson Air Force Base|Fairbanks|US|5
EIN|Eindhoven|Eindhoven|NL|80
EIS|Terrance B. Lettsome|Beef Island|VG|312
EJA|Yariguíes|Barrancabermeja|CO|38
EJH|Al Wajh Domestic|Al Wajh|SA|225
EJT|Enejit|Enejit Island|MH|0
EKA|Murray Field|Eureka|US|4
EKB|Ekibastuz|Ekibastuz|KZ|314
EKN|Elkins-Randolph County|Elkins|US|1
EKO|Elko|Elko|US|4
EKS|Shakhtyorsk|Shakhtyorsk|RU|329
EKT|Eskilstuna|Eskilstuna|SE|86
ELB|Las Flores|El Banco|CO|38
ELC|Elcho Island|Elcho Island|AU|364
ELD|South Arkansas Regional Airport at Goodwin Field|El Dorado|US|147
ELF|El Fasher|El Fasher|SD|143
ELG|El Golea|El Menia|DZ|55
ELH|North Eleuthera|North Eleuthera|BS|27
ELI|Elim|Elim|US|2
ELM|Elmira Corning|Elmira/Corning|US|1
ELP|El Paso|El Paso|US|148
ELQ|Prince Naif bin Abdulaziz|Qassim|SA|225
ELS|King Phalo|East London|ZA|94
ELU|Guemar Airport - مطار قمار بالوادي|Guemar|DZ|55
ELV|Elfin Cove Seaplane Base|Elfin Cove|US|91
ELY|Ely Airport Yelland Field|Ely|US|4
EMA|East Midlands|Nottingham, Leicestershire|GB|75
EMD|Emerald|Emerald|AU|13
EME|Emden|Emden|DE|69
EMK|Emmonak|Emmonak|US|2
EML|Emmen Air Base|Emmen|CH|176
ENA|Kenai|Kenai|US|5
ENC|Nancy-Essey|Tomblaine, Meurthe-et-Moselle|FR|161
END|Vance Air Force Base|Enid|US|147
ENE|H. Hasan Aroeboesman (Ende)|Ende|ID|199
ENF|Enontekio|Enontekio|FI|72
ENH|Enshi Xujiaping|Enshi (Enshi)|CN|14
ENI|El Nido|El Nido|PH|251
ENK|Enniskillen/St Angelo|Enniskillen, Fermanagh and Omagh|GB|75
ENN|Nenana|Nenana|US|5
ENO|Teniente Ramon A. Ayub Gonzalez|Encarnación|PY|288
ENS|Twente|Enschede|NL|80
ENT|Eniwetok|Eniwetok Atoll|MH|0
ENU|Akanu Ibiam|Enegu|NG|64
ENV|Wendover|Wendover|US|4
ENW|Kenosha|Kenosha|US|147
ENY|Yan'an Nanniwan|Yan'an (Baota)|CN|14
EOH|Enrique Olaya Herrera|Medellín|CO|38
EOI|Eday|Eday|GB|75
EOR|El Dorado|Bolivar|VE|293
EOZ|Elorza||VE|38
EPA|El Palomar|El Palomar|AR|256
EPL|Épinal Mirecourt|Épinal|FR|161
EPR|Esperance|Esperance|AU|11
EPU|Pärnu|Pärnu|EE|70
EQS|Esquel Brigadier Antonio Parodi|Esquel|AR|259
ERC|Erzincan|Erzincan|TR|163
ERD|Berdyansk|Berdyansk|UA|333
ERF|Erfurt-Weimar|Erfurt|DE|69
ERH|Moulay Ali Cherif|Errachidia|MA|124
ERI|Erie International Tom Ridge Field|Erie|US|1
ERL|Erenhot Saiwusu|Erenhot|CN|14
ERS|Eros|Windhoek|NA|93
ERZ|Erzurum|Erzurum|TR|163
ESB|Esenboğa|Ankara|TR|163
ESC|Delta County|Escanaba|US|42
ESD|Orcas Island|Eastsound|US|4
ESE|Ensenada International Airport / El Ciprés Air Base|Ensenada|MX|196
ESF|Esler Army Airfield / Esler|Alexandria|US|147
ESG|Dr. Luis María Argaña|Mariscal Estigarribia|PY|288
ESH|Brighton City|Brighton, East Sussex|GB|75
ESK|Eskişehir Air Base|Eskişehir|TR|163
ESL|Elista|Elista|RU|73
ESM|Carlos Concha Torres|Tachina|EC|285
ESR|Ricardo García Posada|El Salvador|CL|283
ESU|Essaouira-Mogador|Essaouira|MA|124
ETM|Ramon|Eilat|IL|137
ETR|Santa Rosa - Artillery Colonel Victor Larrea|Santa Rosa|EC|285
ETZ|Metz-Nancy-Lorraine|Goin|FR|161
EUA|Kaufana|Eua Island|TO|208
EUG|Eugene|Eugene|US|4
EUN|Laayoune Hassan I|El Aaiún|EH|129
EUQ|Evelio Javier|San Jose|PH|251
EUX|F. D. Roosevelt|Oranjestad|BQ|307
EVE|Harstad/Narvik|Evenes|NO|85
EVG|Sveg|Sveg|SE|86
EVN|Zvartnots|Yerevan|AM|323
EVV|Evansville|Evansville|US|147
EVW|Evanston-Uinta County Airport-Burns Field|Evanston|US|148
EVX|Évreux-Fauville (BA 105) Air Base|Fauville, Eure|FR|161
EWB|New Bedford|New Bedford|US|1
EWN|Coastal Carolina|New Bern|US|1
EWR|Newark Liberty|Newark|US|1
EXI|Excursion Inlet Seaplane Base|Excursion Inlet|US|91
EXT|Exeter|Exeter, Devon|GB|75
EYK|Beloyarskiy||RU|344
EYP|El Alcaravan - Yopal|Yopal|CO|38
EYW|Key West|Key West|US|1
EZE|Ezeiza International Airport - Ministro Pistarini|Buenos Aires (Ezeiza)|AR|256
EZS|Elazığ|Elazığ|TR|163
EZV|Berezovo||RU|344
FAB|Farnborough|Farnborough, Hampshire|GB|75
FAE|Vágar|Vágar|FO|83
FAF|Felker Army Air Field|Newport News (Fort Eustis)|US|1
FAI|Fairbanks|Fairbanks|US|5
FAO|Faro - Gago Coutinho|Faro|PT|172
FAR|Hector|Fargo|US|147
FAT|Fresno Yosemite|Fresno|US|4
FAV|Fakarava||PF|216
FAY|Fayetteville Regional Airport - Grannis Field|Fayetteville|US|1
FAZ|Fasa|Fasa|IR|224
FBD|Fayzabad|Fayzabad|AF|223
FBE|Paulo Abdala|Francisco Beltrão|BR|269
FBG|Simmons Army Air Field|Fort Bragg|US|1
FBK|Ladd Army|Fairbanks|US|5
FBM|Lubumbashi|Lubumbashi|CD|106
FBS|Friday Harbor Seaplane Base|Friday Harbor|US|4
FCA|Glacier Park|Kalispell|US|148
FCB|Ficksburg Sentraoes|Ficksburg|ZA|94
FCN|Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase|Wurster Nordseeküste|DE|69
FCO|Rome–Fiumicino Leonardo da Vinci|Rome|IT|146
FCS|Butts AAF (Fort Carson) Air Field|Fort Carson|US|148
FDE|Førde Airport, Bringeland|Førde|NO|85
FDF|Martinique Aimé Césaire|Fort-de-France|MQ|297
FDH|Bodensee Airport Friedrichshafen|Friedrichshafen|DE|69
FDU|Bandundu|Bandundu|CD|120
FDY|Findlay|Findlay|US|1
FEC|João Durval Carneiro|Feira de Santana|BR|26
FEG|Fergana|Fergana|UZ|348
FEN|Fernando de Noronha|Fernando de Noronha|BR|277
FEZ|Fes Saïss|Saïss|MA|124
FFD|RAF Fairford|Fairford, Gloucestershire|GB|75
FFO|Wright-Patterson Air Force Base|Dayton|US|1
FGU|Fangatau|Fangatau|PF|216
FHU|Sierra Vista Municipal Airport / Libby Army Air Field|Fort Huachuca / Sierra Vista|US|151
FHZ|Fakahina|Fakahina|PF|216
FIE|Fair Isle|Fair Isle|GB|75
FIH|Ndjili|Kinshasa|CD|120
FIZ|Fitzroy Crossing||AU|11
FJR|Fujairah|Fujairah|AE|229
FKB|Karlsruhe Baden-Baden|Rheinmünster|DE|69
FKI|Bangoka|Kisangani|CD|106
FKJ|Fukui|Fukui|JP|249
FKL|Venango|Franklin|US|1
FKQ|Fakfak|Fakfak|ID|58
FKS|Fukushima|Sukagawa|JP|249
FLA|Gustavo Artunduaga Paredes|Florencia|CO|38
FLG|Flagstaff Pulliam|Flagstaff|US|151
FLL|Fort Lauderdale Hollywood|Fort Lauderdale|US|1
FLN|Hercílio Luz|Florianópolis|BR|269
FLO|Florence|Florence|US|1
FLR|Florence Airport, Peretola|Firenze (FI)|IT|146
FLS|Flinders Island|Whitemark|AU|367
FLW|Flores|Santa Cruz das Flores|PT|171
FLZ|Dr. Ferdinand Lumban Tobing|Sibolga (Pinangsori)|ID|144
FMA|Formosa National|Formosa|AR|255
FME|Fort Meade Executive|Fort Meade(Odenton)|US|1
FMI|Kalemie|Kalemie|CD|106
FMM|Memmingen Allgau|Memmingen|DE|69
FMN|Four Corners|Farmington|US|148
FMO|Münster Osnabrück|Greven|DE|69
FMT|Faresmaathoda|Faresmaathodaa|MV|111
FMY|Page Field|Fort Myers|US|1
FNA|Lungi|Freetown (Lungi-Town)|SL|126
FNB|Neubrandenburg Trollenhagen|Trollenhagen|DE|69
FNC|Cristiano Ronaldo|Funchal|PT|173
FND|Funadhoo|Funadhoo|MV|111
FNI|Nîmes-Arles-Camargue|Nîmes/Garons|FR|161
FNJ|Pyongyang Sunan|Pyongyang|KP|373
FNL|Northern Colorado|Loveland|US|148
FNR|Funter Bay Seaplane Base|Funter Bay|US|91
FNT|Bishop|Flint|US|42
FOA|Foula|Foula|GB|75
FOC|Fuzhou Changle|Fuzhou (Changle)|CN|14
FOD|Fort Dodge|Fort Dodge|US|147
FOE|Topeka|Topeka|US|147
FOG|Foggia Gino Lisa|Foggia (FG)|IT|146
FOM|Foumban Nkounja|Foumban|CM|101
FON|La Fortuna Arenal|La Fortuna|CR|201
FOR|Pinto Martins|Fortaleza|BR|25
FOS|Forrest||AU|11
FPO|Grand Bahama|Freeport|BS|27
FPR|Treasure Coast|Fort Pierce|US|1
FRA|Frankfurt Main|Frankfurt am Main|DE|69
FRB|Forbes|Forbes|AU|12
FRD|Friday Harbor|Friday Harbor|US|4
FRE|Fera/Maringe|Fera Island|SB|8
FRG|Republic|East Farmingdale|US|1
FRI|Marshall Army Air Field|Fort Riley (Junction City)|US|147
FRL|Forlì-Luigi Ridolfi|Forlì (FC)|IT|146
FRO|Florø|Florø|NO|85
FRS|Mundo Maya|San Benito|GT|30
FRW|Phillip Gaonwe Matante|Francistown|BW|95
FRZ|Fritzlar Army|Fritzlar|DE|69
FSC|Figari Sud-Corse|Figari|FR|161
FSD|Sioux Falls|Sioux Falls|US|147
FSH|Syekh Hamzah Fansyuri|Singkil|ID|144
FSI|Henry Post Army Air Field|Fort Sill|US|147
FSM|Fort Smith|Fort Smith|US|147
FSP|Saint-Pierre Pointe-Blanche|Saint-Pierre|PM|32
FST|Fort Stockton Pecos County|Fort Stockton|US|147
FSZ|Mount Fuji Shizuoka|Makinohara / Shimada|JP|249
FTA|Futuna|Futuna Island|VU|219
FTE|El Calafate - Commander Armando Tola|El Calafate|AR|265
FTI|Fitiuta|Fitiuta Village|AS|214
FTK|Godman Army Air Field|Fort Knox|US|1
FTU|Tôlanaro|Tôlanaro|MG|110
FTW|Fort Worth Meacham|Fort Worth|US|147
FTX|Owando|Owando|CG|97
FTY|Fulton County Airport Brown Field|Atlanta|US|1
FUE|Fuerteventura|El Matorral|ES|123
FUG|Fuyang Xiguan|Yingzhou, Fuyang|CN|14
FUJ|Fukue|Goto|JP|249
FUK|Fukuoka|Fukuoka|JP|249
FUN|Funafuti|Funafuti|TV|209
FUO|Foshan Shadi|Foshan (Nanhai)|CN|14
FUT|Pointe Vele|Futuna Island|WF|212
FWA|Fort Wayne|Fort Wayne|US|149
FWH|NAS Fort Worth JRB / Carswell Field|Fort Worth|US|147
FXE|Fort Lauderdale Executive|Fort Lauderdale|US|1
FYJ|Fuyuan Dongji|Fuyuan|CN|14
FYN|Fuyun Koktokay|Fuyun|CN|37
FYT|Faya-Largeau|Faya-Largeau|TD|115
FYU|Fort Yukon|Fort Yukon|US|5
FYV|Drake Field|Fayetteville|US|147
GAE|Gabès Matmata|Gabès|TN|66
GAF|Gafsa Ksar|Gafsa|TN|66
GAJ|Yamagata|Higashine|JP|249
GAL|Edward G. Pitka Sr|Galena|US|5
GAM|Gambell|Gambell|US|63
GAN|Gan|Gan|MV|111
GAO|Mariana Grajales|Guantánamo|CU|204
GAQ|Gao|Gao|ML|121
GAU|Lokpriya Gopinath Bordoloi|Guwahati|IN|145
GAX|Gamba|Gamba|GA|112
GAY|Gaya|Gaya|IN|145
GBB|Gabala|Gabala|AZ|16
GBE|Sir Seretse Khama|Gaborone|BW|95
GBI|Kalaburagi|Kalaburagi|IN|145
GBJ|Marie-Galante|Grand-Bourg|GP|295
GBT|Gorgan|Gorgan|IR|224
GBZ|Great Barrier|Claris|NZ|221
GCC|Northeast Wyoming|Gillette|US|148
GCH|Gachsaran|Gachsaran|IR|224
GCI|Guernsey|Saint Peter Port|GG|76
GCJ|Grand Central|Midrand|ZA|94
GCK|Garden City|Garden City|US|147
GCM|Owen Roberts|George Town|KY|205
GCN|Grand Canyon National Park|Grand Canyon - Tusayan|US|151
GDB|Gondia|Gondia|IN|145
GDE|Gode|Gode|ET|89
GDL|Guadalajara|Guadalajara|MX|188
GDN|Gdańsk Lech Wałęsa|Gdańsk|PL|88
GDO|Guasdualito|Guasdualito|VE|38
GDQ|Gondar|Azezo|ET|89
GDT|JAGS McCartney|Cockburn Town|TC|182
GDV|Dawson Community|Glendive|US|148
GDX|Sokol|Magadan|RU|328
GDZ|Gelendzhik|Gelendzhik|RU|73
GEA|Nouméa Magenta|Nouméa|NC|220
GEC|Geçitkale Airbase|Lefkoniko (Geçitkale)|CY|157
GEG|Spokane|Spokane|US|4
GEL|Santo Ângelo|Santo Ângelo|BR|269
GEM|President Obiang Nguema|Mengomeyén|GQ|100
GEO|Cheddi Jagan|Georgetown|GY|293
GER|Rafael Cabrera|Nueva Gerona|CU|204
GES|General Santos|General Santos|PH|251
GET|Geraldton|Moonyoonooka|AU|11
GEV|Gällivare|Gällivare|SE|86
GFF|Griffith|Griffith|AU|12
GFK|Grand Forks|Grand Forks|US|147
GFL|Floyd Bennett Memorial|Glens Falls|US|1
GFN|Clarence Valley|Grafton|AU|12
GFR|Granville|Bréville-sur-Mer, Manche|FR|161
GFY|Grootfontein|Grootfontein|NA|93
GGF|Almeirim|Almeirim|BR|276
GGG|East Texas|Longview|US|147
GGJ|Guaíra|Guaíra|BR|269
GGR|Garowe|Garowe|SO|135
GGS|Gobernador Gregores|Gobernador Gregores|AR|265
GGT|Exuma|Moss Town|BS|27
GGW|Glasgow Valley County Airport Wokal Field|Glasgow|US|148
GHA|Noumérat - Moufdi Zakaria|El Atteuf|DZ|55
GHB|Governor's Harbour|Governor's Harbour|BS|27
GHC|Great Harbour Cay|Bullocks Harbour|BS|27
GHN|Guanghan|Deyang (Guanghan)|CN|14
GHT|Ghat|Ghat|LY|56
GHU|Gualeguaychu|Gualeguaychu|AR|255
GHV|Brașov-Ghimbav|Brașov (Ghimbav)|RO|175
GIB|Gibraltar|Gibraltar|GI|179
GIC|Boigu Island|Boigu Island|AU|15
GID|Gitega|Gitega|BI|134
GIG|Rio de Janeiro Galeão – Tom Jobim|Rio De Janeiro|BR|269
GIL|Gilgit|Gilgit|PK|230
GIR|Santiago Vila|Girardot|CO|38
GIS|Gisborne|Gisborne|NZ|221
GIZ|Jizan Regional Airport / King Abdullah bin Abdulaziz|Jizan|SA|225
GJA|La Laguna|Guanaja|HN|186
GJL|Jijel Ferhat Abbas|Tahir|DZ|55
GJM|Guajará-Mirim|Guajará-Mirim|BR|278
GJT|Grand Junction|Grand Junction|US|148
GKA|Goroka|Goronka|PG|15
GKE|Geilenkirchen Air Base|Geilenkirchen|DE|69
GKK|Kooddoo|Huvadhu Atoll|MV|111
GKN|Gulkana|Gulkana|US|5
GLA|Glasgow|Glasgow|GB|75
GLD|Goodland|Goodland|US|148
GLF|Golfito|Golfito|CR|201
GLH|Mid Delta|Greenville|US|147
GLI|Glen Innes|Glen Innes|AU|12
GLK|Galcaio|Galcaio|SO|135
GLO|Gloucestershire|Staverton, Gloucestershire|GB|75
GLS|Scholes International At Galveston|Galveston|US|147
GLT|Gladstone|Gladstone|AU|13
GLU|Gelephu|Gelephu|BT|357
GLV|Golovin|Golovin|US|2
GLZ|Gilze Rijen Air Base|Rijen|NL|80
GMA|Gemena|Gemena|CD|120
GMB|Gambela|Gambela|ET|89
GME|Gomel|Gomel|BY|29
GMI|Gasmata Island|Gasmata Island|PG|15
GMO|Gombe Lawanti|Gombe|NG|64
GMP|Seoul Gimpo|Seoul|KR|250
GMQ|Golog Maqên|Golog (Maqên)|CN|14
GMR|Totegegie||PF|217
GMU|Greenville Downtown|Greenville|US|1
GMZ|La Gomera|Alajero, La Gomera Island|ES|123
GNA|Hrodna|Hrodna|BY|29
GNB|Grenoble Alpes Isère|Grenoble|FR|161
GND|Maurice Bishop|Saint George's|GD|300
GNJ|Ganja|Ganja|AZ|16
GNS|Binaka|Gunungsitoli|ID|144
GNU|Goodnews|Goodnews|US|5
GNV|Gainesville|Gainesville|US|1
GNY|Şanlıurfa GAP|Şanlıurfa|TR|163
GOA|Genoa Cristoforo Colombo|Genova (GE)|IT|146
GOH|Nuuk|Nuuk|GL|19
GOI|Goa Dabolim|Vasco da Gama|IN|145
GOJ|Nizhny Novgorod / Strigino|Nizhny Novgorod|RU|73
GOM|Goma|Goma|CD|106
GON|Groton New London|Groton|US|1
GOP|Gorakhpur|Gorakhpur|IN|145
GOQ|Golmud|Golmud|CN|14
GOT|Göteborg Landvetter|Göteborg|SE|86
GOU|Garoua|Garoua|CM|101
GOV|Gove|Nhulunbuy|AU|364
GOX|Manohar|Mopa|IN|145
GOY|Tura Mountain|Tura|RU|254
GOZ|Gorna Oryahovitsa|Gorna Oryahovitsa|BG|18
GPA|Patras Araxos Agamemnon|Patras|GR|162
GPI|Guapi|Guapi|CO|38
GPL|Guapiles|Pococi|CR|201
GPN|Garden Point|Pirlangimpi|AU|364
GPO|General Pico|General Pico|AR|257
GPS|Seymour Galapagos Ecological|Isla Baltra|EC|286
GPT|Gulfport Biloxi|Gulfport|US|147
GRB|Austin Straubel|Green Bay|US|147
GRF|Gray Army Air Field|Joint Base Lewis McChord|US|4
GRI|Central Nebraska|Grand Island|US|147
GRJ|George|George|ZA|94
GRK|Killeen Regional Airport / Robert Gray Army|Fort Cavazos|US|147
GRO|Girona-Costa Brava|Girona|ES|160
GRQ|Groningen Airport Eelde|Groningen|NL|80
GRR|Gerald R. Ford|Grand Rapids|US|42
GRS|Grosseto Corrado Baccarini Air Base / Grosseto|Grosseto (GR)|IT|146
GRU|Guarulhos–Governor André Franco Montoro|São Paulo|BR|269
GRV|Akhmat Kadyrov Grozny|Grozny|RU|73
GRW|Graciosa|Santa Cruz da Graciosa|PT|171
GRX|F.G.L. Airport Granada-Jaén|Granada|ES|160
GRY|Grímsey|Grímsey/Sandvík|IS|22
GRZ|Graz|Feldkirchen bei Graz|AT|170
GSB|Seymour Johnson Air Force Base|Goldsboro|US|1
GSE|Säve|Göteborg|SE|86
GSJ|San José|Puerto San José|GT|30
GSM|Qeshm|Qeshm(Dayrestan)|IR|224
GSO|Piedmont Triad|Greensboro|US|1
GSP|Greenville-Spartanburg|Greenville/Greer/Spartanburg|US|1
GST|Gustavus|Gustavus|US|91
GSV|Gagarin|Saratov|RU|351
GTA|Gatokae|Gatokae|SB|8
GTE|Groote Eylandt|Groote Eylandt|AU|364
GTF|Great Falls|Great Falls|US|148
GTN|Glentanner|Glentanner Station|NZ|221
GTO|Jalaluddin|Gorontalo|ID|199
GTR|Golden Triangle|Columbus/W Point/Starkville|US|147
GUA|La Aurora|Guatemala City|GT|30
GUB|Guerrero Negro|San Quintín|MX|191
GUC|Gunnison Crested Butte|Gunnison|US|148
GUH|Gunnedah||AU|12
GUI|Guiria||VE|289
GUJ|Edu Chaves Field|Guaratinguetá|BR|269
GUL|Goulburn||AU|12
GUM|Antonio B. Won Pat|Hagåtña|GU|238
GUP|Gallup|Gallup|US|148
GUQ|Guanare|Guanare|VE|289
GUR|Gurney|Gurney|PG|15
GUS|Grissom Air Reserve Base|Peru|US|149
GUW|Atyrau|Atyrau|KZ|319
GUY|Guymon|Guymon|US|147
GUZ|Guarapari|Guarapari|BR|269
GVA|Geneva|Geneva|CH|176
GVN|Sovetskaya Gavan (Maygatka)|Sovetskaya Gavan|RU|62
GVR|Coronel Altino Machado|Governador Valadares|BR|269
GVX|Gävle–Sandviken|Sandviken|SE|86
GWD|New Gwadar|Gurandani|PK|230
GWE|Josiah Tungamirai Air Force Base|Gweru|ZW|116
GWL|Gwalior|Gwalior|IN|145
GWO|Greenwood–Leflore|Greenwood|US|147
GWT|Westerland Sylt|Sylt|DE|69
GXF|Seiyun Hadhramaut|Seiyun|YE|234
GXG|Negage|Negage|AO|96
GXH|Gannan Xiahe|Gannan (Xiahe)|CN|14
GXQ|Teniente Vidal|Coyhaique|CL|283
GYA|Guayaramerín|Guayaramerín|BO|278
GYD|Heydar Aliyev|Baku|AZ|16
GYE|José Joaquín de Olmedo|Guayaquil|EC|285
GYG|Magan|Magan|RU|324
GYI|Gisenyi|Gisenyi|RW|142
GYM|General José María Yáñez|Guaymas|MX|193
GYN|Santa Genoveva|Goiânia|BR|269
GYS|Guangyuan Panlong|Guangyuan (Lizhou)|CN|14
GYU|Guyuan Liupanshan|Guyuan (Yuanzhou)|CN|14
GYY|Chicago|Gary|US|147
GYZ|Gruyere|Cosmo Newbery|AU|11
GZG|Garze Gesar|Garzê (Garzê)|CN|14
GZM|Xewkija Heliport|Gozo|MT|168
GZO|Nusatupe|Gizo|SB|8
GZP|Gazipaşa-Alanya|Gazipaşa|TR|163
GZT|Gaziantep Oğuzeli|Gaziantep|TR|163
GZW|Qazvin|Qazvin|IR|224
HAA|Hasvik|Hasvik|NO|85
HAC|Hachijojima|Hachijojima|JP|249
HAD|Halmstad|Halmstad|SE|86
HAH|Prince Said Ibrahim|Moroni|KM|107
HAJ|Hannover|Hannover|DE|69
HAK|Haikou Meilan|Haikou (Meilan)|CN|14
HAL|Halali|Halali|NA|93
HAM|Hamburg Helmut Schmidt|Hamburg|DE|69
HAN|Noi Bai|Hanoi (Soc Son)|VN|155
HAQ|Hanimaadhoo|Haa Dhaalu Atoll|MV|111
HAS|Hail|Hail|SA|225
HAU|Haugesund Airport, Karmøy|Karmøy|NO|85
HAV|José Martí|Havana|CU|204
HAW|Haverfordwest|Haverfordwest|GB|75
HBA|Hobart|Hobart (Cambridge)|AU|367
HBE|Alexandria|Alexandria|EG|71
HBG|Hattiesburg Bobby L Chain|Hattiesburg|US|147
HBQ|Haibei Qilian|Haibei (Qilian)|CN|14
HBR|Hobart|Hobart|US|147
HBT|Hambantota Seaplane Base|Hambantota|LK|23
HBX|Hubballi|Hubballi|IN|145
HCJ|Hechi Jinchengjiang|Hechi (Jinchengjiang)|CN|14
HCN|Hengchun|Hengchun|TW|248
HCQ|Halls Creek||AU|11
HCR|Holy Cross|Holy Cross|US|5
HCZ|Chenzhou Beihu|Chenzhou|CN|14
HDD|Hyderabad|Hyderabad|PK|230
HDF|Heringsdorf|Zirchow|DE|69
HDG|Handan|Handan|CN|14
HDK|Kulhudhuffushi|Kulhudhuffushi|MV|111
HDM|Hamadan|Hamadan|IR|224
HDN|Yampa Valley|Hayden|US|148
HDO|Hindon Airport / Hindon Air Force Station|Ghaziabad|IN|145
HDS|Eastgate Airport / Air Force Base Hoedspruit|Hoedspruit|ZA|94
HDY|Hat Yai|Hat Yai|TH|155
HEA|Herat - Khwaja Abdullah Ansari|Guzara|AF|223
HEH|Heho|Heho|MM|358
HEI|Heide-Büsum|Oesterdeichstrich|DE|69
HEK|Heihe Aihui|Heihe|CN|14
HEL|Helsinki Vantaa|Helsinki (Vantaa)|FI|72
HER|Heraklion International Nikos Kazantzakis|Heraklion|GR|162
HET|Hohhot Baita|Hohhot|CN|14
HFA|Uri Michaeli Haifa|Haifa|IL|167
HFD|Hartford Brainard|Hartford|US|1
HFE|Hefei Xinqiao|Hefei|CN|14
HFN|Hornafjörður|Höfn|IS|22
HFS|Hagfors|Råda|SE|86
HFT|Hammerfest|Hammerfest|NO|85
HGA|Egal|Hargeisa|SO|135
HGD|Hughenden|Hughenden|AU|13
HGH|Hangzhou Xiaoshan|Hangzhou|CN|14
HGI|Itanagar Donyi Polo Hollongi|Hollongi|IN|145
HGL|Helgoland-Düne|Helgoland|DE|69
HGN|Mae Hong Son|Mae Hong Son|TH|155
HGO|Korhogo|Korhogo|CI|61
HGR|Hagerstown Regional Richard A Henson Field|Hagerstown|US|1
HGU|Mount Hagen Kagamuga|Mount Hagen|PG|15
HHE|JMSDF Hachinohe Air Base / Hachinohe|Hachinohe|JP|249
HHH|Hilton Head|Hilton Head Island|US|1
HHN|Frankfurt-Hahn|Frankfurt am Main (Lautzenhausen)|DE|69
HHP|Shun Tak Heliport|Central and Western|HK|353
HHQ|Hua Hin|Hua Hin|TH|155
HHR|Jack Northrop Field Hawthorne|Hawthorne|US|4
HHZ|Hikueru|Hikueru|PF|216
HIA|Huai'an Lianshui|Huai'an|CN|14
HIB|Range|Hibbing|US|147
HID|Horn Island|Horn|AU|13
HIF|Hill Air Force Base|Ogden|US|148
HII|Lake Havasu City|Lake Havasu City|US|151
HIJ|Hiroshima|Hiroshima|JP|249
HIL|Shilavo|Shilavo|ET|89
HIM|Hingurakgoda Air Force Base|Polonnaruwa Town|LK|23
HIN|Sacheon Airport / Sacheon Air Base|Sacheon|KR|250
HIO|Portland Hillsboro|Portland|US|4
HIR|Honiara|Honiara|SB|8
HIS|Hayman Island Resort Seaplane Base|Hayman Island|AU|13
HJB|Hejing Bayinbuluke|Hejing|CN|37
HJJ|Huaihua Zhijiang|Huaihua|CN|14
HJR|Khajuraho|Khajuraho|IN|145
HKD|Hakodate|Hakodate|JP|249
HKG|Hong Kong|Hong Kong|HK|353
HKK|Hokitika||NZ|221
HKN|Hoskins|Kimbe|PG|15
HKT|Phuket|Phuket|TH|155
HKY|Hickory|Hickory|US|1
HLA|Lanseria|Johannesburg|ZA|94
HLD|Hulunbuir Hailar|Hailar|CN|14
HLE|Saint Helena|Jamestown|SH|102
HLG|Wheeling Ohio County|Wheeling|US|1
HLH|Ulanhot Yilelite|Ulanhot|CN|14
HLN|Helena|Helena|US|148
HLP|Halim Perdanakusuma|Jakarta|ID|144
HLT|Hamilton||AU|363
HLZ|Hamilton|Hamilton|NZ|221
HMA|Khanty Mansiysk|Khanty-Mansiysk|RU|344
HMB|Suhaj|Suhaj|EG|71
HME|Hassi Messaoud-Oued Irara Krim Belkacem|Hassi Messaoud|DZ|55
HMI|Hami|Hami|CN|37
HMJ|Khmelnytskyi|Khmelnytskyi|UA|332
HMN|Holloman Air Force Base|Alamogordo|US|148
HMO|General Ignacio L. Pesqueira|Hermosillo|MX|193
HMS|Haji Muhammad Sidik|Muara Teweh|ID|359
HMV|Hemavan|Hemavan|SE|86
HNA|Iwate Hanamaki|Hanamaki|JP|249
HND|Tokyo Haneda|Tokyo|JP|249
HNG|Hainanzhou Gonghe|Hainan (Gonghe)|CN|14
HNH|Hoonah|Hoonah|US|3
HNL|Daniel K. Inouye|Honolulu, Oahu|US|240
HNM|Hana|Hana|US|240
HNS|Haines|Haines|US|91
HNY|Hengyang Nanyue|Hengyang|CN|14
HOB|Lea County|Hobbs|US|148
HOF|Al-Ahsa|Hofuf|SA|225
HOG|Frank Pais|Holguin|CU|27
HOI|Hao|Otepa|PF|216
HOK|Hooker Creek|Lajamanu|AU|364
HOM|Homer|Homer|US|5
HON|Huron|Huron|US|147
HOP|Campbell Army Airfield (Fort Campbell)|Fort Campbell|US|147
HOQ|Hof-Plauen|Hof|DE|69
HOR|Horta|Horta|PT|171
HOT|Memorial Field|Hot Springs|US|147
HOU|William P. Hobby|Houston|US|147
HOV|Ørsta-Volda Airport, Hovden|Ørsta|NO|85
HPA|Lifuka Island|Lifuka|TO|208
HPB|Hooper Bay|Hooper Bay|US|2
HPG|Shennongjia Hongping|Shennongjia (Hongping)|CN|14
HPH|Cat Bi|Haiphong (Hai An)|VN|155
HPN|Westchester County|White Plains|US|1
HQL|Tashikuergan Hongqilafu|Tashikuergan|CN|37
HQM|Bowerman|Hoquiam|US|4
HQQ|Anyang Hongqiqu|Anyang|CN|14
HRB|Harbin Taiping|Harbin|CN|14
HRE|Robert Gabriel Mugabe|Harare|ZW|116
HRF|Hoarafushi||MV|111
HRG|Hurghada|Hurghada|EG|71
HRI|Mattala Rajapaksa|Mattala|LK|23
HRK|Kharkiv|Kharkiv|UA|332
HRL|Valley|Harlingen|US|147
HRM|Hassi R'Mel|Hassi R'Mel|DZ|55
HRO|Boone County|Harrison|US|147
HRS|Harrismith|Harrismith|ZA|94
HSA|Hazrat Sultan|Turkıstan|KZ|314
HSC|Shaoguan Danxia|Shaoguan|CN|14
HSG|Kyushu Saga|Saga|JP|249
HSL|Huslia|Huslia|US|5
HSM|Horsham||AU|363
HSN|Zhoushan Putuoshan|Zhoushan|CN|14
HSR|Rajkot|Rajkot|IN|145
HSS|Maharaja Agrasen|Hisar|IN|145
HST|Homestead Air Reserve Base|Homestead|US|1
HSV|Huntsville|Huntsville|US|147
HSZ|Hsinchu Air Base|Hsinchu City|TW|248
HTA|Chita-Kadala|Chita|RU|331
HTG|Khatanga|Khatanga|RU|254
HTI|Hamilton Island|Hamilton Island|AU|13
HTN|Hotan|Hotan|CN|37
HTS|Tri-State Airport / Milton J. Ferguson Field|Huntington|US|1
HTT|Huatugou|Mengnai|CN|14
HTU|Hopetoun||AU|363
HTV|Huntsville|Huntsville|US|147
HTY|Hatay|Antakya|TR|163
HUA|Redstone Army Air Field|Redstone Arsnl Huntsville|US|147
HUE|Humera|Akwi|ET|89
HUF|Terre Haute Regional Airport, Hulman Field|Terre Haute|US|149
HUG|Huehuetenango|Huehuetenango|GT|30
HUH|Huahine-Fare|Fare|PF|216
HUI|Phu Bai|Huế|VN|356
HUL|Houlton|Houlton|US|46
HUN|Hualien Chiashan|Hualien City|TW|248
HUO|Holingol Huolinhe|Holingol|CN|14
HUS|Hughes|Hughes|US|5
HUT|Hutchinson|Hutchinson|US|147
HUU|Alferez Fap David Figueroa Fernandini|Huánuco|PE|287
HUX|Bahías de Huatulco|Huatulco|MX|188
HUY|Humberside|Grimsby, Lincolnshire|GB|75
HUZ|Huizhou Pingtan|Huizhou (Pingtan)|CN|14
HVA|Analalava|Analalava|MG|110
HVB|Hervey Bay|Hervey Bay|AU|13
HVD|Khovd|Khovd|MN|375
HVG|Honningsvåg Airport, Valan|Honningsvåg|NO|85
HVN|Tweed New Haven|New Haven|US|1
HVR|Havre City County|Havre|US|148
HWN|Hwange National Park|Gwayi River Farms|ZW|116
HWO|North Perry|Hollywood|US|1
HWR|Halwara|Halwara|IN|145
HXD|Haixi Delingha|Delingha|CN|14
HXX|Hay||AU|12
HYA|Cape Cod Gateway|Hyannis|US|1
HYD|Rajiv Gandhi|Hyderabad|IN|145
HYG|Hydaburg Seaplane Base|Hydaburg|US|3
HYL|Hollis Clark Bay Seaplane Base|Hollis|US|3
HYN|Taizhou Luqiao|Taizhou (Luqiao)|CN|14
HYR|Sawyer County|Hayward|US|147
HYS|Hays|Hays|US|147
HZA|Heze Mudan|Heze (Dingtao)|CN|14
HZB|Merville-Calonne|Merville, Nord|FR|161
HZG|Hanzhong Chenggu|Hanzhong (Chenggu)|CN|14
HZH|Liping|Liping|CN|14
HZK|Húsavík|Húsavík|IS|22
HZU|Chengdu Huaizhou|Chengdu (Jintang)|CN|14
IAA|Igarka|Igarka|RU|254
IAB|McConnell Air Force Base|Wichita|US|147
IAD|Washington Dulles|Dulles|US|1
IAG|Niagara Falls|Niagara Falls|US|1
IAH|George Bush Intercontinental|Houston|US|147
IAM|Zarzaitine - In Aménas|In Aménas|DZ|56
IAN|Bob Baker Memorial|Kiana|US|5
IAO|Siargao|Del Carmen|PH|251
IAR|Golden Ring Yaroslavl|Tunoshna|RU|73
IAS|Iaşi|Iaşi|RO|175
IBA|Ibadan|Ibadan|NG|64
IBB|General Villamil|Puerto Villamil|EC|286
IBE|Perales|Ibagué|CO|38
IBL|Indigo Bay Lodge|Bazaruto Island|MZ|17
IBP|Iberia|Iberia|PE|287
IBR|Ibaraki|Omitama|JP|249
IBZ|Ibiza|Ibiza (Eivissa)|ES|160
ICC|Andrés Miguel Salazar Marcano|Isla de Coche|VE|289
ICI|Cicia|Cicia|FJ|207
ICN|Incheon|Seoul|KR|250
ICT|Wichita Dwight D. Eisenhower National|Wichita|US|147
IDA|Idaho Falls|Idaho Falls|US|150
IDR|Devi Ahilya Bai Holkar|Indore|IN|145
IEG|Zielona Góra-Babimost|Nowe Kramsko|PL|88
IEJ|Iejima|Ie|JP|249
IEV|Igor Sikorsky Kyiv International Airport (Zhuliany)|Kyiv|UA|332
IFJ|Ísafjörður|Ísafjörður|IS|22
IFN|Isfahan Shahid Beheshti|Isfahan|IR|224
IFO|Ivano-Frankivsk|Ivano-Frankivsk|UA|332
IFP|Laughlin Bullhead|Bullhead City|US|151
IGA|Inagua|Matthew Town|BS|27
IGD|Iğdır|Iğdır|TR|163
IGG|Igiugig|Igiugig|US|5
IGL|Çiğli Airbase|Çiğli|TR|163
IGM|Kingman|Kingman|US|151
IGR|Cataratas Del Iguazú|Puerto Iguazu|AR|255
IGS|Ingolstadt Manching|Manching|DE|69
IGT|Magas|Sunzha|RU|73
IGU|Cataratas|Foz do Iguaçu|BR|269
IHR|Iranshahr|Iranshahr|IR|224
IIA|Inishmaan|Inis Meáin|IE|81
IIL|Ilam|Ilam|IR|224
IJK|Izhevsk|Izhevsk|RU|345
IKA|Imam Khomeini|Tehran|IR|224
IKE|Ikerasak Heliport|Ikerasak|GL|19
IKG|Karakol|Karakol|KG|315
IKI|Iki|Iki|JP|249
IKK|Greater Kankakee|Kankakee|US|147
IKO|Nikolski Air Station|Nikolski|US|235
IKS|Tiksi|Tiksi|RU|324
IKT|Irkutsk|Irkutsk|RU|253
IKU|Issyk-Kul|Tamchy|KG|315
ILD|Lleida-Alguaire|Lleida|ES|160
ILF|Ilford|Ilford|CA|36
ILG|Wilmington|Wilmington|US|1
ILI|Iliamna|Iliamna|US|5
ILM|Wilmington|Wilmington|US|1
ILN|Wilmington Airpark|Wilmington|US|1
ILO|Iloilo|Cabatuan|PH|251
ILP|Île des Pins|Île des Pins|NC|220
ILQ|General Jorge Fernandez Maldon|Ilo|PE|287
ILR|General Tunde Idiagbon|Ilorin/Ogbomosho|NG|64
ILS|Ilopango|San Salvador|SV|202
ILY|Islay|Isle of Islay, Argyll and Bute|GB|75
ILZ|Žilina-Dolný Hričov|Dolný Hričov|SK|181
IMF|Bir Tikendrajit|Imphal|IN|145
IMK|Simikot|Simikot|NP|213
IMP|Prefeito Renato Moreira|Imperatriz|BR|25
IMQ|Maku National|Showt|IR|224
IMT|Ford|Kingsford|US|153
INA|Inta|Inta|RU|73
INB|Independence|Independence|BZ|30
INC|Yinchuan Hedong|Yinchuan|CN|14
IND|Indianapolis|Indianapolis|US|149
INH|Inhambane|Inhambane|MZ|17
INI|Niš Constantine the Great|Niš|RS|24
INK|Winkler County|Wink|US|147
INL|Falls|International Falls|US|147
INN|Innsbruck|Innsbruck|AT|170
INO|Inongo|Inongo|CD|120
INQ|Inisheer|Inis Oírr|IE|81
INT|Smith Reynolds|Winston Salem|US|1
INU|Nauru|Yaren|NR|10
INV|Inverness|Inverness|GB|75
INW|Winslow Lindbergh|Winslow|US|151
INZ|In Salah|In Salah|DZ|55
IOA|Ioannina King Pyrrhus National|Ioannina|GR|162
IOM|Isle of Man|Castletown|IM|78
IOQ|Isortoq Heliport|Isortoq|GL|19
IOR|Inishmore|Inis Mór|IE|81
IOS|Bahia - Jorge Amado|Ilhéus|BR|26
IOT|Illorsuit Heliport|Illorsuit|GL|19
IPC|Mataveri|Isla De Pascua|CL|284
IPH|Sultan Azlan Shah|Ipoh|MY|28
IPI|San Luis|Ipiales|CO|38
IPL|Imperial County|Imperial|US|4
IPN|Usiminas|Ipatinga|BR|269
IPT|Williamsport|Williamsport|US|1
IQA|Al Asad Air Base|Hīt|IQ|231
IQM|Qiemo Yudu|Qiemo|CN|37
IQN|Qingyang Xifeng|Qingyang (Xifeng)|CN|14
IQQ|Diego Aracena|Iquique|CL|283
IQT|Coronel FAP Francisco Secada Vignetta|Iquitos|PE|287
IRA|Ngorangora|Kirakira|SB|8
IRC|Circle City (New)|Circle|US|5
IRD|Ishurdi|Ishurdi|BD|352
IRG|Lockhart River|Lockhart River|AU|13
IRI|Iringa|Nduli|TZ|118
IRJ|Capitan V A Almonacid|La Rioja|AR|260
IRK|Kirksville|Kirksville|US|147
IRP|Matari|Isiro|CD|106
IRZ|Tapuruquara|Santa Isabel do Rio Negro|BR|275
ISA|Mount Isa|Mount Isa|AU|13
ISB|Islamabad|Attock|PK|230
ISC|St. Mary's|St. Mary's, Isles of Scilly|GB|75
ISE|Süleyman Demirel|Isparta|TR|163
ISG|New Ishigaki|Ishigaki|JP|249
ISK|Nashik|Nashik|IN|145
ISL|İstanbul Atatürk|Istanbul(Bakırköy)|TR|163
ISM|Kissimmee Gateway|Orlando|US|1
ISO|Kinston Regional Jetport At Stallings Field|Kinston|US|1
ISP|Long Island MacArthur|Islip|US|1
IST|İstanbul|Istanbul|TR|163
ISU|Jalal Talabani|Sulaymaniyah|IQ|231
ITA|Itacoatiara|Itacoatiara|BR|275
ITB|Itaituba|Itaituba|BR|276
ITH|Ithaca Tompkins|Ithaca|US|1
ITM|Osaka Itami|Osaka|JP|249
ITO|Hilo|Hilo|US|240
ITU|Iturup|Kurilsk|RU|326
IUE|Niue|Alofi|NU|211
IUI|Innarsuit Heliport|Innarsuit|GL|19
IVC|Invercargill|Invercargill|NZ|221
IVL|Ivalo|Ivalo|FI|72
IVR|Inverell|Inverell|AU|12
IWA|Ivanovo South|Ivanovo|RU|73
IWD|Gogebic Iron County|Ironwood|US|153
IWJ|Iwami|Masuda|JP|249
IWK|Iwakuni Kintaikyo|Iwakuni|JP|249
IWO|Ioto (Iwo Jima) Airbase|Ogasawara|JP|249
IXA|Agartala - Maharaja Bir Bikram|Agartala|IN|145
IXB|Bagdogra|Siliguri|IN|145
IXC|Shaheed Bhagat Singh|Chandigarh|IN|145
IXD|Prayagraj|Allahabad|IN|145
IXE|Mangaluru|Mangaluru|IN|145
IXG|Belagavi|Belgaum|IN|145
IXH|Kailashahar|Kailashahar|IN|145
IXI|Lilabari North Lakhimpur|Lilabari|IN|145
IXJ|Jammu|Jammu|IN|145
IXK|Keshod|Keshod|IN|145
IXL|Leh Kushok Bakula Rimpochee|Leh|IN|145
IXM|Madurai|Madurai|IN|145
IXP|Pathankot|Pathankot|IN|145
IXR|Birsa Munda|Ranchi|IN|145
IXS|Silchar|Silchar|IN|145
IXU|Aurangabad|Aurangabad|IN|145
IXV|Along||IN|145
IXW|Sonari|Jamshedpur|IN|145
IXX|Bidar Airport / Bidar Air Force Station|Bidar|IN|145
IXY|Kandla|Kandla|IN|145
IXZ|Veer Savarkar International Airport / INS Utkrosh|Port Blair|IN|145
IZA|Presidente Itamar Franco|Juiz de Fora|BR|269
IZO|Izumo Enmusubi|Izumo|JP|249
IZT|General Antonio Cárdenas Rodríguez National Airport / Ixtepec Air Base|Ixtepec|MX|188
JAA|Jalalabad|Jalalabad|AF|223
JAC|Jackson Hole|Jackson|US|150
JAD|Perth Jandakot|Perth|AU|11
JAE|Shumba|Jaén|PE|287
JAF|Jaffna|Jaffna|LK|23
JAG|Shahbaz Air Base|Jacobabad|PK|230
JAI|Jaipur|Jaipur|IN|145
JAK|Jacmel|Jacmel|HT|203
JAL|El Lencero|Emiliano Zapata|MX|188
JAM|Bezmer Air Base|Bezmer|BG|18
JAN|Jackson-Medgar Wiley Evers|Jackson|US|147
JAU|Francisco Carle|Jauja|PE|287
JAV|Ilulissat|Ilulissat|GL|19
JAX|Jacksonville|Jacksonville|US|1
JBB|Notohadinegoro|Jember|ID|144
JBK|Qitai Jiangbulake|Qitai|CN|37
JBQ|La Isabela|La Isabela|DO|182
JBR|Jonesboro|Jonesboro|US|147
JCH|Qasigiannguit Heliport|Qasigiannguit|GL|19
JCK|Julia Creek||AU|13
JCL|České Budějovice South Bohemian|České Budějovice|CZ|166
JCR|Jacareacanga|Jacareacanga|BR|276
JCT|Kimble County|Junction|US|147
JCU|Ceuta Heliport|Ceuta|ES|124
JDE|Jiande Qiandaohu General|Hangzhou|CN|14
JDF|Francisco de Assis|Juiz de Fora|BR|269
JDG|Jeongseok|Jeju Island|KR|250
JDH|Jodhpur|Jodhpur|IN|145
JDO|Orlando Bezerra de Menezes|Juazeiro do Norte|BR|25
JDZ|Jingdezhen Luojia|Jingdezhen|CN|14
JED|King Abdulaziz|Jeddah|SA|225
JEE|Jérémie|Carrefour Sanon|HT|203
JEG|Aasiaat|Aasiaat|GL|19
JEJ|Jeh|Ailinglapalap Atoll|MH|0
JER|Jersey|St. Peter|JE|77
JFK|John F. Kennedy|New York|US|1
JFN|Northeast Ohio|Ashtabula|US|1
JFR|Paamiut|Paamiut|GL|19
JGA|Jamnagar|Jamnagar|IN|145
JGB|Jagdalpur|Jagdalpur|IN|145
JGD|Daxing'anling Elunchun|Jiagedaqi|CN|14
JGN|Jiayuguan|Jiayuguan|CN|14
JGO|Qeqertarsuaq Heliport|Qeqertarsuaq|GL|19
JGR|Kangilinnguit Heliport|Kangilinnguit|GL|19
JGS|Jinggangshan|Ji'an|CN|14
JHB|Senai|Johor Bahru|MY|28
JHF|São Paulo Catarina Executive|São Roque|BR|269
JHG|Xishuangbanna Gasa|Jinghong (Gasa)|CN|14
JHM|Kapalua|Lahaina|US|240
JHS|Sisimiut|Sisimiut|GL|19
JHW|Chautauqua County-Jamestown|Jamestown|US|1
JIB|Djibouti-Ambouli|Djibouti City|DJ|136
JIC|Jinchang Jinchuan|Jinchang|CN|14
JIJ|Gerad Wilwal|Jijiga|ET|89
JIK|Ikaria|Ikaria Island|GR|162
JIM|Jimma|Jimma|ET|89
JIO|Jos Orno Imsula|Tiakur|ID|58
JIQ|Qianjiang Wulingshan|Qianjiang|CN|14
JIU|Jiujiang Lushan|Jiujiang|CN|14
JJD|Comandante Ariston Pessoa|Cruz|BR|25
JJG|Humberto Ghizzo Bortoluzzi|Jaguaruna|BR|269
JJI|Juanjui|Juanjuí|PE|287
JJM|Mulika Lodge|Meru-Kinna|KE|140
JJN|Quanzhou Jinjiang|Quanzhou|CN|14
JJU|Qaqortoq|Qaqortoq|GL|19
JKG|Jönköping|Jönköping|SE|86
JKH|Chios Island National|Chios Island|GR|162
JKL|Kalymnos|Kalymnos Island|GR|162
JKR|Janakpur|Janakpur|NP|213
JLG|Jalgaon|Jalgaon|IN|145
JLN|Joplin|Joplin|US|147
JLR|Jabalpur|Jabalpur|IN|145
JMJ|Lancang Jingmai|Pu'er (Lancang)|CN|14
JMK|Mykonos Island National|Mykonos|GR|162
JMO|Jomsom|Jomsom|NP|213
JMS|Jamestown|Jamestown|US|147
JMU|Jiamusi Songjiang|Jiamusi|CN|14
JNB|O.R. Tambo|Johannesburg|ZA|94
JNG|Jining Da'an|Jining|CN|14
JNH|Jiaxing Nanhu|Xiuzhou, Hangzhou|CN|14
JNN|Nanortalik Heliport|Nanortalik|GL|19
JNS|Narsaq Heliport|Narsaq|GL|19
JNU|Juneau|Juneau|US|91
JNX|Naxos Island National|Naxos|GR|162
JNZ|Jinzhou Bay|Jinzhou (Linghai)|CN|14
JOE|Joensuu|Joensuu|FI|72
JOG|Adisutjipto|Yogyakarta|ID|144
JOH|Port St Johns|Port St Johns|ZA|94
JOI|Lauro Carneiro de Loyola|Joinville|BR|269
JOK|Yoshkar-Ola|Yoshkar-Ola|RU|73
JOL|Jolo|Jolo|PH|251
JOS|Yakubu Gowon|Jos|NG|64
JPA|Presidente Castro Pinto|João Pessoa|BR|25
JPE|Nagib Demachki|Paragominas|BR|268
JPR|Ji-Paraná|Ji-Paraná|BR|271
JQA|Qaarsut|Uummannaq|GL|19
JRA|West 30th Street Heliport|New York|US|1
JRF|Kalaeloa|Kapolei|US|240
JRG|Jharsuguda||IN|145
JRH|Jorhat|Jorhat|IN|145
JRO|Kilimanjaro|Arusha|TZ|118
JSA|Jaisalmer||IN|145
JSH|Sitia|Crete Island|GR|162
JSI|Skiathos Island National|Skiathos|GR|162
JSJ|Jiansanjiang Shidi|Jiansanjiang|CN|14
JSK|Jask|Bandar-e-Jask|IR|224
JSO|Dr. Luciano de Arruda Coelho|Sobral|BR|25
JSR|Jessore|Jashore (Jessore)|BD|352
JST|John Murtha Johnstown Cambria County|Johnstown|US|1
JSU|Maniitsoq|Maniitsoq|GL|19
JSY|Syros|Syros Island|GR|162
JTC|Arealva–Moussa Nakhal Tobias State|Bauru|BR|269
JTR|Santorini|Santorini Island|GR|162
JTY|Astypalaia|Astypalaia Island|GR|162
JUB|Juba|Juba|SS|139
JUH|Chizhou Jiuhuashan|Chizhou|CN|14
JUI|Juist|Juist|DE|69
JUJ|Gobernador Horacio Guzman|San Salvador de Jujuy|AR|264
JUK|Ukkusissat Heliport|Ukkusissat|GL|19
JUL|Inca Manco Capac|Juliaca|PE|287
JUM|Jumla|Jumla|NP|213
JUU|Nuugaatsiaq Heliport|Nuugaatsiaq|GL|19
JUV|Upernavik|Upernavik|GL|19
JUZ|Quzhou|Quzhou (Kezheng)|CN|14
JWA|Jwaneng|Jwaneng|BW|95
JWN|Zanjan|Zanjan|IR|224
JWO|Jungwon Air Base/Chungju|Gimseang-ro|KR|250
JXA|Jixi Xingkaihu|Jixi|CN|14
JXN|Jackson County Airport/Reynolds Field|Jackson|US|42
JYR|Jiroft|Jiroft|IR|224
JYV|Jyväskylä|Jyväskylän Maalaiskunta|FI|72
JZH|Jiuzhai Huanglong|Ngawa (Songpan)|CN|14
KAA|Kasama|Kasama|ZM|105
KAB|Kariba|Kariba|ZW|105
KAC|Qamishli|Qamishli|SY|232
KAD|Kaduna|Kaduna|NG|64
KAE|Kake Seaplane Base|Kake|US|3
KAG|Gangneung Airport (K-18)|Gangneung|KR|250
KAI|Kaieteur|Kaieteur Falls|GY|293
KAJ|Kajaani|Kajaani|FI|72
KAL|Kaltag|Kaltag|US|5
KAN|Mallam Aminu Kano|Kano|NG|64
KAO|Kuusamo|Kuusamo|FI|72
KAT|Kaitaia|Awanui|NZ|221
KAU|Kauhava|Kauhava|FI|72
KAW|Kawthoung|Kawthoung|MM|155
KAX|Kalbarri|Kalbarri|AU|11
KBC|Birch Creek|Birch Creek|US|5
KBK|Kushinagar|Kushinagar|IN|145
KBL|Kabul|Kabul|AF|223
KBP|Boryspil|Boryspil|UA|332
KBR|Sultan Ismail Petra|Kota Baharu|MY|28
KBS|Bo|Bo|SL|126
KBU|Gusti Syamsir Alam|Stagen|ID|199
KBV|Krabi|Krabi|TH|155
KCA|Kuqa Qiuci|Kuqa|CN|37
KCC|Coffman Cove Seaplane Base|Coffman Cove|US|3
KCG|Chignik|Chignik|US|5
KCH|Kuching|Kuching|MY|252
KCM|Kahramanmaraş|Kahramanmaraş|TR|163
KCO|Cengiz Topel|Kartepe|TR|163
KCQ|Chignik Lake|Chignik Lake|US|5
KCT|Koggala|Galle|LK|23
KCY|Krasnoyarsk Cheremshanka|Krasnoyarsk|RU|254
KCZ|Kochi Ryoma|Nankoku|JP|249
KDD|Khuzdar|Khuzdar|PK|230
KDH|Ahmad Shah Baba|Kandahar|AF|223
KDI|Haluoleo|Kendari|ID|199
KDL|Kärdla|Kärdla|EE|70
KDM|Kaadedhdhoo|Huvadhu Atoll|MV|111
KDO|Kadhdhoo|Kadhdhoo|MV|111
KDT|Kamphaeng Saen|Nakhon Pathom|TH|155
KDU|Skardu|Skardu|PK|230
KDV|Vunisea|Vunisea|FJ|207
KDZ|Polgolla Reservoir Seaplane Base|Kandy|LK|23
KEB|Nanwalek|Nanwalek|US|5
KEF|Keflavik|Reykjavík|IS|22
KEH|Kenmore Air Harbor LLC Seaplane Base|Kenmore|US|4
KEJ|Alexei Leonov Kemerovo|Kemerovo|RU|338
KEL|Kiel-Holtenau|Kiel|DE|69
KEM|Kemi-Tornio|Kemi / Tornio|FI|72
KEN|Kenema|Kenema|SL|126
KEP|Nepalgunj|Nepalgunj|NP|145
KER|Ayatollah Hashemi Rafsanjani|Kerman|IR|224
KES|Kelsey|Kelsey|CA|36
KET|Kengtung|Kengtung|MM|358
KEV|Halli|Jämsä|FI|72
KEW|Keewaywin|Keewaywin|CA|36
KFG|Kalkgurung||AU|364
KFP|False Pass|False Pass|US|2
KFS|Kastamonu|Kastamonu|TR|163
KFZ|Kukës|Kukës|AL|156
KGA|Kananga|Kananga|CD|106
KGC|Kingscote||AU|366
KGD|Khrabrovo|Kaliningrad|RU|336
KGE|Kaghau|Kagau Island|SB|8
KGF|Sary-Arka|Karaganda|KZ|314
KGG|Kédougou|Kédougou|SN|131
KGI|Kalgoorlie Boulder|Broadwood|AU|11
KGJ|Karonga|Karonga|MW|118
KGK|Koliganek|Koliganek|US|5
KGL|Kigali|Kigali|RW|142
KGP|Kogalym|Kogalym|RU|344
KGQ|Kangersuatsiaq Heliport|Kangersuatsiaq|GL|19
KGS|Kos International Airport "Ippokratis"|Kos Island|GR|162
KGT|Kangding|Garzê (Kangding)|CN|14
KGX|Grayling|Grayling|US|5
KGY|Kingaroy||AU|13
KHD|Khoram Abad||IR|224
KHE|Kherson|Kherson|UA|332
KHG|Kashgar Laining|Kashgar|CN|37
KHH|Kaohsiung|Kaohsiung (Xiaogang)|TW|248
KHI|Jinnah|Karachi|PK|230
KHJ|Kauhajoki|Kauhajoki|FI|72
KHK|Khark|Khark|IR|224
KHM|Kanti|Kanti|MM|358
KHN|Nanchang Changbei|Nanchang|CN|14
KHS|Khasab|Khasab|OM|228
KHT|Khost|Khost|AF|223
KHV|Khabarovsk Novy|Khabarovsk|RU|62
KHX|Savannah Airstrip|Kihihi|UG|141
KHZ|Kauehi|Kauehi|PF|216
KID|Kristianstad|Kristianstad|SE|86
KIE|Aropa|Kieta|PG|8
KIF|Kingfisher Lake|Kingfisher Lake|CA|35
KIH|Kish|Kish Island|IR|224
KIJ|Niigata|Niigata|JP|249
KIK|Kirkuk|Kirkuk|IQ|231
KIM|Kimberley|Kimberley|ZA|94
KIN|Norman Manley|Kingston|JM|187
KIO|Kili|Kili Island|MH|0
KIR|Kerry|Farranfore|IE|81
KIS|Kisumu|Kisumu|KE|140
KIT|Kithira|Kithira Island|GR|162
KIW|Southdowns|Kitwe|ZM|105
KIX|Kansai|Osaka|JP|249
KJA|Krasnoyarsk|Krasnoyarsk|RU|254
KJB|Kurnool|Orvakal|IN|145
KJH|Kaili Huangping|Kaili  (Huangping)|CN|14
KJI|Burqin Kanas|Burqin|CN|37
KJK|Kortrijk-Wevelgem|Wevelgem|BE|68
KJT|Kertajati|Kertajati|ID|144
KKA|Koyuk Alfred Adams|Koyuk|US|5
KKB|Kitoi Bay Seaplane Base|Kitoi Bay|US|5
KKC|Khon Kaen|Khon Kaen|TH|155
KKE|Kerikeri|Kerikeri|NZ|221
KKH|Kongiganak|Kongiganak|US|5
KKI|Akiachak|Akiachak|US|2
KKJ|Kitakyushu|Kitakyushu|JP|249
KKM|Khok Kathiam|Lop Buri|TH|155
KKN|Kirkenes Airport, Høybuktmoen|Kirkenes|NO|85
KKR|Kaukura|Raitahiti|PF|216
KKS|Kashan|Kashan|IR|224
KKW|Kikwit|Kikwit|CD|120
KKX|Kikai|Kikai|JP|249
KLC|Kaolack|Kaolack|SN|130
KLD|Migalovo Air Base|Tver|RU|73
KLF|Grabtsevo|Kaluga|RU|73
KLG|Kalskag|Kalskag|US|5
KLH|Kolhapur|Kolhapur|IN|145
KLN|Larsen Bay|Larsen Bay|US|5
KLO|Kalibo|Kalibo|PH|251
KLP|Seruyan Kuala Pembuang|Seruyan|ID|359
KLR|Kalmar|Kalmar|SE|86
KLS|Southwest Washington|Kelso|US|4
KLU|Klagenfurt|Klagenfurt am Wörthersee|AT|170
KLV|Karlovy Vary|Karlovy Vary|CZ|166
KLW|Klawock|Klawock|US|3
KLX|Kalamata|Kalamata|GR|162
KLZ|Kleinsee|Kleinsee|ZA|94
KMA|Kerema|Kerema|PG|15
KMC|King Khaled Military City|King Khaled Military City|SA|225
KME|Kamembe|Kamembe|RW|142
KMG|Kunming Changshui|Kunming|CN|14
KMH|Johan Pienaar|Kuruman|ZA|94
KMI|Miyazaki|Miyazaki|JP|249
KMJ|Kumamoto|Kumamoto|JP|249
KMN|Kamina City|Kamina|CD|106
KMO|Manokotak|Manokotak|US|5
KMP|Keetmanshoop|Keetmanshoop|NA|93
KMQ|Komatsu Airport / JASDF Komatsu Air Base|Kanazawa|JP|249
KMS|Prempeh I|Kumasi|GH|60
KMU|Kismayo|Kismayo|SO|135
KMW|Kostroma Sokerkino|Kostroma|RU|73
KMX|King Khalid Air Base|Khamis Mushait|SA|225
KMY|Moser Bay Seaplane Base|Moser Bay|US|5
KNA|Viña del Mar|Viña del Mar|CL|283
KND|Kindu|Kindu|CD|106
KNF|RAF Marham|King's Lynn, Norfolk|GB|75
KNG|Utarom|Kaimana|ID|58
KNH|Kinmen|Shang-I|TW|248
KNK|Kokhanok|Kokhanok|US|5
KNO|Kualanamu|Beringin|ID|144
KNQ|Koné|Koné|NC|220
KNR|Jam|Jam|IR|224
KNS|King Island||AU|368
KNU|Kanpur|Kanpur|IN|145
KNW|New Stuyahok|New Stuyahok|US|5
KNX|East Kimberley Regional (Kununurra)|Kununurra|AU|11
KOA|Ellison Onizuka Kona International Airport at Keāhole|Kailua-Kona|US|240
KOC|Koumac|Koumac|NC|220
KOE|El Tari|Kupang|ID|199
KOI|Kirkwall|Kirkwall, Orkney Islands|GB|75
KOJ|Kagoshima|Kagoshima|JP|249
KOK|Kokkola-Pietarsaari|Kokkola / Kruunupyy|FI|72
KOP|Nakhon Phanom|Nakhon Phanom|TH|155
KOS|Sihanouk|Preah Sihanouk|KH|152
KOT|Kotlik|Kotlik|US|2
KOU|Koulamoutou Mabimbi|Koulamoutou|GA|112
KOV|Kokshetau|Kokshetau|KZ|314
KOW|Ganzhou Huangjin|Ganzhou|CN|14
KOY|Olga Bay Seaplane Base|Olga Bay|US|5
KOZ|Ouzinkie|Ouzinkie|US|5
KPB|Point Baker Seaplane Base|Point Baker|US|3
KPC|Port Clarence Coast Guard Station|Port Clarence|US|2
KPN|Kipnuk|Kipnuk|US|2
KPO|Pohang Airport (G-815/K-3)|Pohang|KR|250
KPR|Port Williams Seaplane Base|Port Williams|US|5
KPS|Kempsey||AU|12
KPV|Perryville|Perryville|US|5
KPW|Keperveem|Keperveem|RU|63
KPY|Port Bailey Seaplane Base|Port Bailey|US|5
KQA|Akutan|Akutan|US|2
KQH|Kishangarh Airport Ajmer|Ajmer (Kishangarh)|IN|145
KQR|Karara|Karara|AU|11
KQT|Bokhtar|Bokhtar|TJ|347
KRA|Kerang||AU|363
KRB|Karumba||AU|13
KRC|Departi Parbo|Sungai Penuh|ID|144
KRE|Kirundo|Kirundo|BI|134
KRF|Kramfors-Sollefteå Höga Kusten|Nyland|SE|86
KRI|Kikori|Kikori|PG|15
KRK|Kraków John Paul II|Balice|PL|88
KRL|Korla Licheng|Korla|CN|37
KRN|Kiruna|Kiruna|SE|86
KRO|Kurgan|Kurgan|RU|344
KRP|Midtjyllands Airport / Air Base Karup|Karup|DK|82
KRR|Krasnodar Pashkovsky|Krasnodar|RU|73
KRS|Kristiansand|Kristiansand(Kjevik)|NO|85
KRT|Khartoum|Khartoum|SD|143
KRW|Turkmenbaşy|Turkmenbaşy|TM|304
KRY|Karamay|Karamay|CN|37
KSA|Kosrae|Okat|FM|246
KSC|Košice|Košice|SK|181
KSD|Karlstad|Karlstad|SE|86
KSF|Kassel|Calden|DE|69
KSH|Shahid Ashrafi Esfahani|Kermanshah|IR|224
KSJ|Kasos|Kasos Island|GR|162
KSK|Karlskoga|Karlskoga|SE|86
KSL|Kassala|Kassala|SD|143
KSM|St Mary's|St Mary's|US|2
KSN|Kostanay|Kostanay|KZ|321
KSO|Kastoria National Airport Aristotle|Argos Orestiko|GR|162
KSQ|Karshi|Karshi|UZ|349
KSR|Selayar - Haji Aroeppala|Benteng|ID|199
KSU|Kristiansund Airport, Kvernberget|Kvernberget|NO|85
KSY|Kars|Kars|TR|163
KSZ|Kotlas|Kotlas|RU|73
KTA|Karratha|Karratha|AU|11
KTB|Thorne Bay Seaplane Base|Thorne Bay|US|3
KTD|Kitadaito|Kitadaitōjima|JP|249
KTE|Kerteh|Kerteh|MY|28
KTG|Rahadi Osman|Ketapang|ID|359
KTI|Techo|Phnom Penh (Boeng Khyang)|KH|152
KTL|Kitale|Kitale|KE|140
KTM|Tribhuvan|Kathmandu|NP|213
KTN|Ketchikan|Ketchikan|US|3
KTP|Tinson Pen|Tinson Pen|JM|187
KTQ|Kitee|Kitee|FI|73
KTR|Tindal||AU|364
KTS|Brevig Mission|Brevig Mission|US|2
KTT|Kittilä|Kittilä|FI|72
KTU|Kota|Kota|IN|145
KTW|Katowice Wojciech Korfanty|Katowice|PL|88
KUA|Kuantan|Kuantan|MY|28
KUD|Kudat|Kudat|MY|252
KUF|Kurumoch|Samara|RU|345
KUG|Kubin Island|Kubin Island|AU|13
KUH|Kushiro|Kushiro|JP|249
KUK|Kasigluk|Kasigluk|US|2
KUL|Kuala Lumpur|Sepang|MY|28
KUM|Yakushima|Yakushima|JP|249
KUN|Kaunas|Kaunas|LT|92
KUO|Kuopio|Kuopio / Siilinjärvi|FI|72
KUS|Kulusuk|Kulusuk|GL|19
KUT|David the Builder Kutaisi|Kopitnari|GE|322
KUU|Kullu Manali|Bhuntar|IN|145
KUV|Gunsan Airport / Gunsan Air Base|Gunsan|KR|250
KUZ|Kuummiut Heliport|Kuummiut|GL|19
KVA|Kavala Alexander the Great|Kavala|GR|162
KVB|Skövde|Skövde|SE|86
KVC|King Cove|King Cove|US|2
KVG|Kavieng|Kavieng|PG|15
KVK|Kirovsk-Apatity|Apatity|RU|73
KVL|Kivalina|Kivalina|US|2
KVM|Markovo|Markovo|RU|63
KVO|Morava|Kraljevo|RS|24
KVX|Pobedilovo|Kirov|RU|346
KWA|Bucholz Army Air Field|Kwajalein|MH|185
KWB|Dewadaru|Karimunjawa|ID|144
KWE|Guiyang Longdongbao|Guiyang (Nanming)|CN|14
KWG|Kryvyi Rih|Kryvyi Rih|UA|332
KWI|Kuwait|Kuwait City|KW|226
KWJ|Gwangju|Gwangju|KR|250
KWK|Kwigillingok|Kwigillingok|US|2
KWL|Guilin Liangjiang|Guilin (Lingui)|CN|14
KWM|Kowanyama|Kowanyama|AU|13
KWN|Quinhagak|Quinhagak|US|5
KWP|West Point Village Seaplane Base|West Point|US|5
KWT|Kwethluk|Kwethluk|US|2
KWY|Kiwayu|Kiwayu|KE|140
KWZ|Kolwezi|Kolwezi|CD|106
KXA|Kasaan Seaplane Base|Kasaan|US|3
KXB|Sangia Nibandera|Kolaka|ID|199
KXE|P C Pelser|Klerksdorp|ZA|94
KXF|Koro Island|Koro Island|FJ|207
KXK|Komsomolsk-on-Amur|Komsomolsk-on-Amur|RU|62
KXO|Kisoro|Kisoro|UG|141
KYA|Konya|Konya|TR|163
KYD|Lanyu|Orchid Island|TW|248
KYE|Rene Mouawad Air Base|Tripoli|LB|227
KYK|Karluk|Karluk|US|5
KYP|Kyaukpyu|Kyaukpyu|MM|358
KYS|Kayes Dag Dag|Kayes|ML|121
KYU|Koyukuk|Koyukuk|US|5
KYZ|Kyzyl|Kyzyl|RU|254
KZB|Zachar Bay Seaplane Base|Zachar Bay|US|5
KZI|Kozani National Airport Filippos|Kozani|GR|162
KZN|Kazan|Kazan|RU|73
KZO|Korkyt Ata|Kyzylorda|KZ|316
KZR|Zafer|Altıntaş|TR|163
KZS|Kastelorizo|Kastelorizo Island|GR|163
LAA|Southeast Colorado|Lamar|US|148
LAD|Quatro de Fevereiro|Luanda|AO|96
LAE|Nadzab Tomodachi|Lae|PG|15
LAF|Purdue University|West Lafayette|US|149
LAI|Lannion|Lannion|FR|161
LAJ|Lages|Lages|BR|269
LAK|Freddie Carmichael|Aklavik|CA|34
LAL|Lakeland Linder|Lakeland|US|1
LAN|Capital Region|Lansing|US|42
LAO|Laoag|Laoag City|PH|251
LAP|Manuel Márquez de León|La Paz|MX|191
LAQ|Al Abraq|Al Albraq|LY|56
LAR|Laramie|Laramie|US|148
LAS|Harry Reid|Las Vegas|US|4
LAU|Manda|Lamu|KE|140
LAW|Lawton Fort Sill|Lawton|US|147
LAX|Los Angeles|Los Angeles|US|4
LAY|Ladysmith|Ladysmith|ZA|94
LAZ|Bom Jesus da Lapa|Bom Jesus da Lapa|BR|26
LBA|Leeds Bradford|Leeds, West Yorkshire|GB|75
LBB|Lubbock Preston Smith|Lubbock|US|147
LBC|Lübeck Blankensee|Lübeck|DE|69
LBD|Khujand|Khujand|TJ|347
LBE|Arnold Palmer|Latrobe|US|1
LBF|North Platte Regional Airport Lee Bird Field|North Platte|US|147
LBG|Paris-Le Bourget|Paris|FR|161
LBH|Palm Beach Seaplane Base|Sydney|AU|12
LBI|Albi Le Sequestre|Albi|FR|161
LBJ|Komodo|Labuan Bajo, Manggarai Barat|ID|199
LBL|Liberal Mid-America|Liberal|US|147
LBP|Long Banga|Long Banga|MY|199
LBQ|Lambarene|Lambarene|GA|112
LBR|Lábrea|Lábrea|BR|275
LBS|Labasa|Labasa|FJ|207
LBT|Lumberton|Lumberton|US|1
LBU|Labuan|Labuan|MY|252
LBV|Libreville Leon M'ba|Libreville|GA|112
LBW|Yuvai Semaring|Long Bawan|ID|252
LBX|Lubang|Lubang|PH|251
LBY|La Baule-Escoublac|La Baule-Escoublac|FR|161
LCA|Larnaca|Larnaca|CY|158
LCC|Lecce Galatina Air Base / Galatina Fortunato Cesari|Galatina (LE)|IT|146
LCE|Golosón|La Ceiba|HN|186
LCG|A Coruña|Culleredo|ES|160
LCH|Lake Charles|Lake Charles|US|147
LCJ|Łódź Władysław Reymont|Łódź|PL|88
LCK|Rickenbacker|Columbus|US|1
LCR|Virgilio Barco Vargas (La Chorrera)|La Chorrera|CO|38
LCX|Liancheng Guanzhishan|Longyan (Liancheng)|CN|14
LCY|London City|London|GB|75
LDB|Governor José Richa|Londrina|BR|269
LDE|Tarbes-Lourdes-Pyrénées|Tarbes/Lourdes/Pyrénées|FR|161
LDG|Leshukonskoye|Leshukonskoye|RU|73
LDH|Lord Howe Island|Lord Howe Island|AU|369
LDS|Yichun Lindu|Yichun|CN|14
LDU|Lahad Datu|Lahad Datu|MY|252
LDV|Landivisiau Air Base|Landivisiau|FR|161
LDX|Saint-Laurent-du-Maroni|Saint-Laurent-du-Maroni|GF|279
LDY|City of Derry|Derry, Derry and Strabane|GB|75
LEA|Learmonth|Exmouth|AU|11
LEB|Lebanon|Lebanon|US|1
LEC|Coronel Horácio de Mattos|Lençóis|BR|26
LED|Pulkovo|St. Petersburg|RU|73
LEE|Leesburg|Leesburg|US|1
LEH|Le Havre-Octeville|Le Havre|FR|161
LEI|Almería|Almería|ES|160
LEJ|Leipzig/Halle|Schkeuditz|DE|69
LEL|Lake Evella||AU|364
LEN|León|La Virgen del Camino|ES|160
LEQ|Land's End|Land's End, Cornwall|GB|75
LER|Leinster||AU|11
LET|Alfredo Vásquez Cobo|Leticia|CO|282
LEU|Pirineus - la Seu d'Urgel|La Seu d'Urgell Pyrenees and Andorra|ES|160
LEV|Levuka|Bureta|FJ|207
LEX|Blue Grass|Lexington|US|1
LEY|Lelystad|Lelystad|NL|80
LFI|Langley Air Force Base|Hampton|US|1
LFK|Angelina County|Lufkin|US|147
LFM|Lamerd|Lamerd|IR|224
LFQ|Linfen Yaodu|Linfen (Yaodu)|CN|14
LFR|La Fria||VE|38
LFT|Lafayette|Lafayette|US|147
LFW|Lomé–Tokoin|Lomé|TG|67
LGA|LaGuardia|New York|US|1
LGB|Long Beach|Long Beach|US|4
LGG|Liège|Grâce-Hollogne|BE|68
LGH|Leigh Creek||AU|366
LGI|Deadman's Cay|Deadman's Cay|BS|27
LGK|Langkawi|Langkawi|MY|28
LGL|Long Lellang|Long Datih|MY|199
LGR|Cochrane|Cochrane|CL|265
LGS|Comodoro D.R. Salomón|Malargue|AR|258
LGU|Logan-Cache|Logan|US|148
LGW|London Gatwick|London|GB|75
LGZ|Shannan Longzi|Shannan|CN|14
LHA|Lahr|Lahr/Schwarzwald|DE|69
LHE|Allama Iqbal|Lahore|PK|230
LHG|Lightning Ridge||AU|12
LHK|Guangzhou MR Air Base / Guanghua|Xiangyang (Laohekou)|CN|14
LHL|Lachin|Lachin|AZ|16
LHN|Linhares|Linhares|BR|269
LHR|London Heathrow|London|GB|75
LHS|Las Heras|Las Heras|AR|265
LHW|Lanzhou Zhongchuan|Lanzhou (Yongdeng)|CN|14
LIF|Lifou|Lifou|NC|220
LIG|Limoges|Limoges/Bellegarde|FR|161
LIH|Lihue|Lihue, Kauai|US|240
LIK|Likiep|Likiep Island|MH|0
LIL|Lille|Lesquin|FR|161
LIM|Jorge Chávez|Lima|PE|287
LIN|Milano Linate|Segrate (MI)|IT|146
LIO|Limón|Limón|CR|201
LIP|Lins|Lins|BR|269
LIQ|Lisala|Lisala|CD|120
LIR|Daniel Oduber Quirós|Liberia|CR|201
LIS|Lisbon Humberto Delgado|Lisbon|PT|172
LIT|Bill & Hillary Clinton National Airport/Adams Field|Little Rock|US|147
LIW|Loikaw|Loikaw|MM|358
LJG|Lijiang Sanyi|Lijiang|CN|14
LJN|Texas Gulf Coast|Angleton|US|147
LJU|Ljubljana Jože Pučnik|Zgornji Brnik|SI|165
LKA|Larantuka Gewayentana|Tiwatobi|ID|199
LKB|Lakeba Island|Lakeba Island|FJ|207
LKE|Kenmore Air Harbor Seaplane Base|Seattle|US|4
LKG|Lokichogio|Lokichogio|KE|139
LKI|Lasikin|Lubang|ID|144
LKL|Lakselv Airport, Banak|Lakselv|NO|85
LKM|Bolaang Mongondow|Lolak|ID|199
LKN|Leknes|Leknes|NO|85
LKO|Chaudhary Charan Singh|Lucknow|IN|145
LKY|Lake Manyara|Lake Manyara National Park|TZ|118
LKZ|RAF Lakenheath|Brandon, Suffolk|GB|75
LLA|Luleå|Luleå|SE|86
LLB|Libo|Qiannan (Libo)|CN|14
LLC|Cagayan North|Lal-lo|PH|251
LLF|Yongzhou Lingling|Yongzhou|CN|14
LLK|Lankaran|Lankaran|AZ|16
LLO|Bua - Palopo Lagaligo|Palopo|ID|199
LLU|Alluitsup Paa Heliport|Alluitsup Paa|GL|19
LLV|Lüliang Dawu|Lüliang|CN|14
LLW|Kamuzu|Lumbadzi|MW|117
LMA|Minchumina|Minchumina|US|5
LMC|La Macarena|La Macarena|CO|38
LME|Le Mans-Arnage|Le Mans, Sarthe|FR|161
LMM|Valle del Fuerte|Los Mochis|MX|191
LMN|Limbang|Limbang|MY|252
LMO|RAF Lossiemouth|Lossiemouth, Moray|GB|75
LMP|Lampedusa|Lampedusa|IT|66
LMQ|Marsa al Brega|Marsa al Brega|LY|56
LMR|Lime Acres Finsch Mine|Lime Acres|ZA|94
LMT|Crater Lake-Klamath|Klamath Falls|US|4
LMY|Lake Murray|Lake Murray|PG|15
LNB|Lamen Bay|Lamen Bay|VU|219
LND|Hunt Field|Lander|US|148
LNE|Lonorore|Lonorore|VU|219
LNJ|Lincang Boshang|Lincang|CN|14
LNK|Lincoln|Lincoln|US|147
LNL|Longnan Chengzhou|Longnan (Cheng)|CN|14
LNO|Leonora|Leonora|AU|11
LNS|Lancaster|Lancaster|US|1
LNU|Robert Atty Bessing|Malinau|ID|199
LNV|Londolovit|Londolovit|PG|15
LNX|Smolensk North|Smolensk|RU|73
LNY|Lanai|Lanai City|US|240
LNZ|Linz-Hörsching|Linz|AT|170
LOD|Longana|Longana|VU|219
LOE|Loei||TH|155
LOH|Ciudad de Catamayo|La Toma (Catamayo)|EC|285
LOK|Lodwar|Lodwar|KE|141
LOL|Derby Field|Lovelock|US|4
LOO|Laghouat - Molay Ahmed Medeghri|Laghouat|DZ|55
LOP|Lombok|Mataram (Pujut, Lombok Tengah)|ID|199
LOS|Murtala Muhammed|Lagos|NG|64
LOU|Bowman Field|Louisville|US|154
LOV|Monclova|Monclova|MX|189
LOZ|London-Corbin Airport/Magee Field|London|US|1
LPA|Gran Canaria|Gran Canaria Island|ES|123
LPB|El Alto|La Paz / El Alto|BO|290
LPD|La Pedrera|La Pedrera|CO|38
LPF|Liupanshui Yuezhao|Liupanshui (Zhongshan)|CN|14
LPG|La Plata|La Plata|AR|256
LPI|Linköping City|Linköping|SE|86
LPK|Lipetsk|Lipetsk|RU|73
LPL|Liverpool John Lennon|Liverpool|GB|75
LPM|Lamap|Lamap|VU|219
LPP|Lappeenranta|Lappeenranta|FI|72
LPQ|Luang Phabang|Luang Phabang|LA|354
LPS|Lopez Island|Lopez|US|4
LPT|Lampang||TH|155
LPU|Long Apung|Long Apung-Borneo Island|ID|199
LPX|Liepāja|Liepāja|LV|90
LPY|Le Puy-Loudes|Chaspuzac, Haute-Loire|FR|161
LQM|Caucaya|Puerto Leguízamo|CO|38
LRD|Laredo|Laredo|US|147
LRE|Longreach|Longreach|AU|13
LRF|Little Rock Air Force Base|Jacksonville|US|147
LRH|La Rochelle Île de Ré|La Rochelle|FR|161
LRL|Niamtougou|Niamtougou|TG|57
LRM|Casa De Campo|La Romana|DO|182
LRR|Lar|Lar|IR|224
LRS|Leros|Leros Island|GR|162
LRT|Lorient South Brittany (Bretagne Sud)|Lorient/Lann/Bihoué|FR|161
LRU|Las Cruces|Las Cruces|US|148
LRV|Los Roques|Gran Roque Island|VE|289
LSA|Losuia|Losuia|PG|15
LSC|La Florida|La Serena-Coquimbo|CL|283
LSE|La Crosse|La Crosse|US|147
LSF|Lawson Army Air Field|Fort Benning|US|1
LSG|Leshan|Leshan (Wutongqiao)|CN|14
LSH|Lashio|Lashio|MM|358
LSI|Sumburgh|Lerwick, Shetland|GB|75
LSL|Los Chiles|Los Chiles|CR|201
LSP|Josefa Camejo|Paraguaná|VE|289
LSR|Alas Leuser|Kutacane|ID|144
LST|Launceston|Launceston (Western Junction)|AU|367
LSV|Nellis Air Force Base|Las Vegas|US|4
LSW|Malikus Saleh|Lhok Seumawe-Sumatra Island|ID|144
LSX|Lhok Sukon|Lhok Sukon-Sumatra Island|ID|144
LSY|Lismore|Lismore|AU|12
LTA|Tzaneen|Tzaneen|ZA|94
LTD|Ghadames|Ghadames|LY|56
LTH|Long Thanh International Airport (Under Construction)|Ho Chi Minh City (Long Thanh)|VN|356
LTI|Altai|Altai|MN|375
LTK|Latakia|Latakia|SY|232
LTM|Lethem|Lethem|GY|293
LTN|London Luton|Luton, Luton|GB|75
LTO|Loreto|Loreto|MX|191
LTQ|Le Touquet-Côte d'Opale|Le Touquet-Paris-Plage|FR|161
LTS|Altus Air Force Base|Altus|US|147
LTT|La Môle|Saint-Tropez|FR|161
LTU|Murod Kond|Latur|IN|145
LTX|Cotopaxi|Latacunga|EC|285
LUA|Tenzing-Hillary|Lukla|NP|213
LUD|Luderitz|Luderitz|NA|93
LUF|Luke Air Force Base|Glendale|US|151
LUG|Lugano|Agno|CH|176
LUH|Ludhiana||IN|145
LUK|Cincinnati Municipal Airport Lunken Field|Cincinnati|US|1
LUM|Dehong Mangshi|Dehong (Mangshi)|CN|14
LUN|Kenneth Kaunda|Lusaka|ZM|105
LUO|Luena|Luena|AO|96
LUP|Kalaupapa|Kalaupapa|US|240
LUQ|Brigadier Mayor D Cesar Raul Ojeda|San Luis|AR|263
LUR|Cape Lisburne LRRS|Cape Lisburne|US|2
LUV|Karel Sadsuitubun|Langgur|ID|58
LUW|Syukuran Aminuddin Amir|Luwok|ID|199
LUX|Luxembourg-Findel|Luxembourg|LU|84
LUZ|Lublin|Lublin|PL|88
LVA|Laval-Entrammes|Laval, Mayenne|FR|161
LVI|Harry Mwanga Nkumbula|Livingstone|ZM|105
LVM|Mission Field|Livingston|US|148
LVO|Laverton|Laverton|AU|11
LVP|Lavan|Lavan Airport|IR|224
LVS|Las Vegas|Las Vegas|US|148
LWB|Greenbrier Valley|Lewisburg|US|1
LWK|Lerwick / Tingwall|Lerwick, Shetland Islands|GB|75
LWM|Lawrence|Lawrence|US|1
LWN|Shirak|Gyumri|AM|323
LWO|Lviv|Lviv|UA|332
LWR|Leeuwarden Air Base|Leeuwarden|NL|80
LWS|Lewiston Nez Perce County|Lewiston|US|4
LWT|Lewistown|Lewistown|US|148
LWY|Lawas|Lawas|MY|252
LXA|Lhasa Gonggar|Shannan (Gonggar)|CN|14
LXG|Luang Namtha|Luang Namtha|LA|354
LXR|Luxor|Luxor|EG|71
LXS|Limnos|Limnos Island|GR|162
LYA|Luoyang Beijiao|Luoyang (Laocheng)|CN|14
LYB|Edward Bodden Little Cayman|Blossom Village|KY|205
LYC|Lycksele|Lycksele|SE|86
LYG|Lianyungang Huaguoshan|Lianyungang|CN|14
LYH|Lynchburg Regional Airport - Preston Glenn Field|Lynchburg|US|1
LYI|Linyi Qiyang|Linyi (Hedong)|CN|14
LYN|Lyon Bron|Chassieu, Lyon|FR|161
LYP|Faisalabad|Faisalabad|PK|230
LYR|Svalbard Airport, Longyear|Longyearbyen|NO|87
LYS|Lyon Saint-Exupéry|Colombier-Saugnieu, Rhône|FR|161
LYU|Ely|Ely|US|147
LYX|Lydd London Ashford|Romney Marsh, Kent|GB|75
LZC|Lázaro Cárdenas|Lázaro Cárdenas|MX|188
LZG|Langzhong Gucheng|Nanchong (Langzhong)|CN|14
LZH|Liuzhou Bailian Airport / Bailian Air Base|Liuzhou (Liujiang)|CN|14
LZN|Matsu Nangan|Matsu (Nangan)|TW|14
LZO|Luzhou Yunlong|Luzhou (Yunlong)|CN|14
LZY|Nyingchi Mainling|Nyingchi (Mainling)|CN|145
MAA|Chennai|Chennai|IN|145
MAB|João Correa da Rocha|Marabá|BR|268
MAD|Adolfo Suárez Madrid–Barajas|Madrid|ES|160
MAF|Midland International Air and Space Port|Midland|US|147
MAG|Madang|Madang|PG|15
MAH|Menorca|Mahón (Maó)|ES|160
MAJ|Marshall Islands|Majuro Atoll|MH|0
MAK|Malakal|Malakal|SS|143
MAM|General Servando Canales|Matamoros|MX|197
MAN|Manchester|Manchester, Greater Manchester|GB|75
MAO|Eduardo Gomes|Manaus|BR|275
MAQ|Mae Sot||TH|155
MAR|La Chinita|Maracaibo|VE|289
MAS|Momote|Manus Island|PG|15
MAU|Maupiti||PF|216
MAX|Ouro Sogui|Ouro Sogui|SN|130
MAY|Clarence A. Bain|Mangrove Cay|BS|27
MAZ|Eugenio Maria De Hostos|Mayaguez|PR|184
MBA|Moi|Mombasa|KE|140
MBD|Mmabatho|Mafeking|ZA|94
MBE|Monbetsu|Monbetsu|JP|249
MBG|Mobridge|Mobridge|US|148
MBI|Songwe|Mbeya|TZ|118
MBJ|Sangster|Montego Bay|JM|187
MBL|Manistee County Blacker|Manistee|US|42
MBO|Mamburao|Mamburao|PH|251
MBS|MBS|Freeland|US|42
MBT|Moises R. Espinosa|Masbate|PH|251
MBW|Melbourne Moorabbin|Melbourne|AU|363
MBX|Maribor Edvard Rusjan|Maribor|SI|165
MCB|McComb-Pike County Airport / John E Lewis Field|McComb|US|147
MCC|McClellan|Sacramento|US|4
MCE|Merced Regional Macready Field|Merced|US|4
MCF|MacDill Air Force Base|Tampa|US|1
MCG|McGrath|McGrath|US|5
MCI|Kansas City|Kansas City|US|147
MCJ|Jorge Isaac|La Mina-Maicao|CO|38
MCK|McCook Ben Nelson|McCook|US|147
MCM|Monaco Heliport|Fontvieille|MC|169
MCN|Middle Georgia|Macon|US|1
MCO|Orlando|Orlando|US|1
MCP|Macapá - Alberto Alcolumbre|Macapá|BR|268
MCS|Monte Caseros|Monte Caseros|AR|255
MCT|Muscat|Muscat/Seeb|OM|228
MCU|Montluçon-Guéret|Lépaud, Creuse|FR|161
MCV|McArthur River Mine|McArthur River Mine|AU|364
MCW|Mason City|Mason City|US|147
MCX|Makhachkala Uytash|Makhachkala|RU|73
MCY|Sunshine Coast|Maroochydore|AU|13
MCZ|Zumbi dos Palmares|Maceió|BR|270
MDC|Sam Ratulangi|Manado|ID|199
MDE|Jose Maria Córdova|Medellín|CO|38
MDG|Mudanjiang Hailang|Mudanjiang|CN|14
MDH|Southern Illinois|Murphysboro|US|147
MDI|Makurdi|Makurdi|NG|64
MDK|Mbandaka|Mbandaka|CD|120
MDL|Mandalay|Mandalay|MM|358
MDQ|Ástor Piazzola|Mar del Plata|AR|256
MDT|Harrisburg|Harrisburg|US|1
MDU|Mendi|Mendi|PG|15
MDW|Chicago Midway|Chicago|US|147
MDY|Henderson Field|Sand Island|UM|242
MDZ|Governor Francisco Gabrielli|Mendoza|AR|258
MEA|Macaé Benedito Lacerda|Macaé|BR|269
MEB|Melbourne Essendon|Essendon Fields|AU|363
MEC|Eloy Alfaro|Manta|EC|285
MED|Prince Mohammad Bin Abdulaziz|Medina|SA|225
MEE|Maré|Maré|NC|220
MEG|Malanje|Malanje|AO|96
MEH|Mehamn|Mehamn|NO|85
MEI|Key Field / Meridian|Meridian|US|147
MEK|Bassatine|Meknes|MA|124
MEL|Melbourne|Melbourne|AU|363
MEM|Frederick W. Smith|Memphis|US|147
MEN|Mende-Brenoux|Mende/Brénoux|FR|161
MEQ|Cut Nyak Dhien|Kuala Pesisir|ID|144
MER|Castle|Merced|US|4
MES|Soewondo Air Force Base|Medan|ID|144
MEU|Monte Dourado - Serra do Areão|Almeirim|BR|276
MEX|Mexico City Benito Juárez|Mexico City|MX|188
MFA|Mafia|Kilindoni|TZ|118
MFD|Mansfield Lahm|Mansfield|US|1
MFE|McAllen Miller|McAllen|US|147
MFG|Muzaffarabad|Muzaffarabad|PK|230
MFH|Mesquite|Mesquite|US|4
MFJ|Moala|Moala|FJ|207
MFK|Matsu Beigan|Matsu (Beigan)|TW|14
MFM|Macau|Nossa Senhora do Carmo|MO|355
MFQ|Maradi|Maradi|NE|65
MFR|Rogue Valley International-Medford|Medford|US|4
MFU|Mfuwe|Mfuwe|ZM|105
MGA|Augusto C. Sandino (Managua)|Managua|NI|198
MGB|Mount Gambier|Mount Gambier|AU|366
MGC|Michigan City|Michigan City|US|147
MGE|Dobbins Air Reserve Base|Marietta|US|1
MGF|Regional de Maringá - Sílvio Name Júnior|Maringá|BR|269
MGH|Margate|Margate|ZA|94
MGL|Mönchengladbach|Mönchengladbach|DE|69
MGM|Montgomery Regional (Dannelly Field)|Montgomery|US|147
MGN|Baracoa|Magangué|CO|38
MGQ|Aden Adde|Mogadishu|SO|135
MGT|Milingimbi|Milingimbi Island|AU|364
MGW|Morgantown Municipal Airport Walter L. (Bill) Hart Field|Morgantown|US|1
MGZ|Myeik|Mkeik|MM|358
MHC|Mocopulli|Dalcahue|CL|283
MHD|Mashhad|Mashhad|IR|224
MHG|Mannheim-City|Mannheim|DE|69
MHH|Leonard M. Thompson|Marsh Harbour|BS|27
MHK|Manhattan|Manhattan|US|147
MHM|Manaoba|Manaoba|SB|8
MHQ|Mariehamn|Mariehamn|FI|74
MHR|Sacramento Mather|Sacramento|US|4
MHT|Manchester-Boston|Manchester|US|1
MHU|Mount Hotham|Mount Hotham|AU|363
MHV|Mojave Air &  Space Port|Mojave|US|4
MHX|Manihiki Island|Manihiki Island|CK|206
MHZ|RAF Mildenhall|Bury Saint Edmunds, Suffolk|GB|75
MIA|Miami|Miami|US|1
MIB|Minot Air Force Base|Minot|US|147
MID|Manuel Crescencio Rejón|Mérida|MX|190
MIE|Delaware County Johnson Field|Muncie|US|149
MIG|Mianyang Nanjiao|Mianyang (Fucheng)|CN|14
MII|Frank Miloye Milenkowichi–Marília State|Marília|BR|269
MIJ|Mili Island|Mili Island|MH|0
MIK|Mikkeli|Mikkeli|FI|72
MIM|Merimbula|Merimbula|AU|12
MIR|Monastir Habib Bourguiba|Monastir|TN|66
MIS|Misima Island|Misima Island|PG|15
MIU|Maiduguri|Maiduguri|NG|64
MIV|Millville|Millville|US|1
MJC|Man||CI|61
MJD|Moenjodaro|Moenjodaro|PK|230
MJE|Majkin|Majkin|MH|185
MJF|Mosjøen Airport, Kjærstad|Mosjøen|NO|85
MJI|Mitiga|Tripoli|LY|56
MJK|Shark Bay|Denham|AU|11
MJL|Mouilla Ville|Mouila|GA|112
MJM|Mbuji Mayi|Mbuji Mayi|CD|106
MJN|Amborovy|Mahajanga|MG|110
MJT|Mytilene|Mytilene|GR|162
MJY|Motygino|Motygino|RU|254
MJZ|Mirny|Mirny|RU|324
MKC|Charles B. Wheeler Downtown|Kansas City|US|147
MKE|General Mitchell|Milwaukee|US|147
MKG|Muskegon County|Muskegon|US|42
MKK|Molokai|Kaunakakai|US|240
MKL|McKellar-Sipes|Jackson|US|147
MKM|Mukah|Mukah|MY|252
MKP|Makemo|Makemo|PF|216
MKQ|Mopah|Merauke|ID|58
MKR|Meekatharra||AU|11
MKU|Makokou|Makokou|GA|112
MKW|Rendani|Manokwari|ID|58
MKY|Mackay|Mackay|AU|13
MKZ|Malacca|Malacca|MY|28
MLA|Malta|Valletta|MT|168
MLB|Melbourne Orlando|Melbourne|US|1
MLC|Mc Alester|Mc Alester|US|147
MLE|Velana|Malé|MV|111
MLG|Abdul Rachman Saleh|Malang|ID|144
MLI|Quad City|Moline|US|147
MLL|Marshall Don Hunter Sr|Marshall|US|2
MLM|General Francisco J. Mujica|Morelia|MX|188
MLN|Melilla|Melilla|ES|125
MLO|Milos|Milos Island|GR|162
MLS|Miles City Airport - Frank Wiley Field|Miles City|US|148
MLU|Monroe|Monroe|US|147
MLW|Spriggs Payne|Monrovia|LR|128
MLX|Malatya Erhaç|Malatya|TR|163
MLY|Manley Hot Springs|Manley Hot Springs|US|5
MMB|Memanbetsu|Ōzora|JP|249
MMD|Minamidaito|Minamidaito|JP|249
MME|Teesside|Darlington, Durham|GB|75
MMG|Mount Magnet||AU|11
MMH|Mammoth Yosemite|Mammoth Lakes|US|4
MMJ|Shinshu-Matsumoto|Matsumoto|JP|249
MMK|Emperor Nicholas II Murmansk|Murmansk|RU|73
MMO|Maio|Vila do Maio|CV|133
MMT|Mc Entire Joint National Guard Base|Eastover|US|1
MMU|Morristown|Morristown|US|1
MMX|Malmö Sturup|Malmö|SE|86
MMY|Miyako|Miyakojima|JP|249
MMZ|Maymana Zahiraddin Faryabi|Maymana|AF|223
MNC|Nacala|Nacala|MZ|17
MNF|Mana Island|Mana Island|FJ|207
MNG|Maningrida|Maningrida|AU|364
MNH|Mussanah|Al Masna'ah|OM|228
MNI|John A. Osborne|Gerald's Park|MS|310
MNJ|Mananjary|Mananjary|MG|110
MNL|Ninoy Aquino|Manila (Pasay)|PH|251
MNR|Mongu|Mongu|ZM|105
MNT|Minto Al Wright|Minto|US|5
MNU|Mawlamyine|Mawlamyine|MM|358
MNX|Manicoré|Manicoré|BR|275
MNY|Mono|Stirling Island|SB|9
MNZ|Washington Manassas Harry P. Davis Field|Manassas|US|1
MOA|Orestes Acosta|Moa|CU|27
MOB|Mobile|Mobile|US|147
MOC|Mário Ribeiro|Montes Claros|BR|269
MOD|Modesto City Co-Harry Sham Field|Modesto|US|4
MOE|Momeik||MM|358
MOF|Frans Xavier Seda|Waioti|ID|199
MOG|Mong Hsat|Mong Hsat|MM|358
MOH|Maleo|Morowali|ID|199
MOI|Mitiaro Island|Mitiaro Island|CK|206
MOJ|Moengo Airstrip|Moengo|SR|291
MOL|Molde Airport, Årø|Årø|NO|85
MON|Mount Cook||NZ|221
MOQ|Morondava|Morondava|MG|110
MOT|Minot|Minot|US|147
MOU|Mountain Village|Mountain Village|US|2
MOV|Moranbah|Moranbah|AU|13
MOZ|Moorea Temae|Moorea-Maiao|PF|216
MPA|Katima Mulilo|Mpacha|NA|95
MPC|Muko Muko|Muko Muko|ID|144
MPH|Godofredo P. Ramos|Caticlan|PH|251
MPL|Montpellier-Méditerranée|Montpellier/Méditerranée|FR|161
MPM|Maputo|Maputo|MZ|17
MPN|Mount Pleasant Airport / RAF Mount Pleasant|Mount Pleasant|FK|79
MPV|Edward F Knapp State|Barre/Montpelier|US|1
MPW|Mariupol|Mariupol|UA|332
MPY|Maripasoula|Maripasoula|GF|279
MQC|Miquelon|Miquelon|PM|32
MQF|Magnitogorsk|Magnitogorsk|RU|344
MQH|Minaçu|Minaçu|BR|269
MQJ|Moma|Khonuu|RU|325
MQL|Mildura|Mildura|AU|363
MQM|Mardin|Mardin|TR|163
MQN|Mo i Rana Airport, Røssvoll|Mo i Rana|NO|85
MQP|Kruger Mpumalanga|Mbombela|ZA|94
MQQ|Moundou|Moundou|TD|115
MQS|Mustique|Lovell|VC|300
MQT|Marquette Sawyer|Gwinn|US|42
MQU|Mariquita|Mariquita|CO|38
MQX|Mekele Alula Aba Nega|Mekele|ET|89
MQY|Smyrna|Smyrna|US|147
MRA|Misrata|Misrata|LY|56
MRB|Eastern WV Regional Airport/Shepherd Field|Martinsburg|US|1
MRD|Alberto Carnevalli|Mérida|VE|289
MRE|Mara Serena Lodge Airstrip|Serena|KE|140
MRG|Mareeba|Mareeba|AU|13
MRI|Merrill Field|Anchorage|US|5
MRO|Hood|Masterton|NZ|221
MRQ|Marinduque|Gasan|PH|251
MRR|Jose Maria Velasco Ibarra|Macará|EC|287
MRS|Marseille Provence|Marignane, Bouches-du-Rhône|FR|161
MRU|Sir Seewoosagur Ramgoolam|Plaine Magnien|MU|103
MRV|Mineralnye Vody|Mineralnyye Vody|RU|73
MRW|Lolland Falster Maribo|Rødby|DK|82
MRX|Mahshahr|Mahshahr|IR|224
MRY|Monterey|Monterey|US|4
MRZ|Moree|Moree|AU|12
MSA|Muskrat Dam|Muskrat Dam|CA|36
MSH|RAFO Masirah|Masirah|OM|228
MSJ|Misawa Airport / Misawa Air Base|Misawa|JP|249
MSL|Northwest Alabama|Muscle Shoals|US|147
MSN|Dane County Regional Truax Field|Madison|US|147
MSO|Missoula Montana|Missoula|US|148
MSP|Minneapolis–Saint Paul International Airport / Wold–Chamberlain Field|Minneapolis|US|147
MSQ|Minsk National|Minsk|BY|29
MSR|Muş|Muş|TR|163
MSS|Massena International Airport Richards Field|Massena|US|1
MST|Maastricht Aachen|Maastricht|NL|80
MSU|Moshoeshoe I|Maseru(Mazenod)|LS|119
MSW|Massawa|Massawa|ER|138
MSY|Louis Armstrong New Orleans|New Orleans|US|147
MSZ|Welwitschia Mirabilis|Moçâmedes|AO|96
MTC|Selfridge Air National Guard Base|Mount Clemens|US|42
MTF|Mizan Teferi|Mizan Teferi|ET|89
MTH|Florida Keys Marathon|Marathon|US|1
MTJ|Montrose|Montrose|US|148
MTM|Metlakatla Seaplane Base|Metlakatla|US|3
MTN|Martin State|Baltimore|US|1
MTP|Montauk|Montauk|US|1
MTR|Los Garzones|Montería|CO|38
MTS|Matsapha|Manzini|SZ|98
MTT|Minatitlán/Coatzacoalcos|Cosoleacaque|MX|188
MTY|Monterrey|Monterrey|MX|189
MTZ|Bar Yehuda|Masada|IL|167
MUA|Munda|Munda|SB|8
MUB|Maun|Maun|BW|95
MUC|Munich|Munich|DE|69
MUD|Mueda|Mueda|MZ|17
MUE|Waimea Kohala|Waimea (Kamuela)|US|240
MUH|Mersa Matruh|Marsa Matruh|EG|71
MUI|Muir Army Air Field (Fort Indiantown Gap)|Fort Indiantown Gap(Annville)|US|1
MUK|Mauke|Mauke Island|CK|206
MUN|José Tadeo Monagas|Maturín|VE|289
MUO|Mountain Home Air Force Base|Mountain Home|US|150
MUR|Marudi|Marudi|MY|252
MUW|Ghriss|Ghriss|DZ|55
MUX|Multan|Multan|PK|230
MUZ|Musoma|Musoma|TZ|118
MVA|Mývatn|Myvatn|IS|22
MVB|M'Vengue El Hadj Omar Bongo Ondimba|Franceville|GA|112
MVD|Carrasco General Cesáreo L. Berisso|Ciudad de la Costa|UY|292
MVF|Dix-Sept Rosado|Mossoró|BR|25
MVP|Fabio Alberto Leon Bentley|Mitú|CO|38
MVQ|Mogilev|Mogilev|BY|29
MVR|Salak|Maroua|CM|101
MVT|Mataiva||PF|216
MVY|Martha's Vineyard|Martha's Vineyard|US|1
MVZ|Masvingo|Masvingo|ZW|116
MWA|Veterans Airport of Southern Illinois|Marion|US|147
MWD|Mianwali Air Base|Mianwali|PK|230
MWE|Merowe|Merowe|SD|143
MWH|Grant County|Moses Lake|US|4
MWL|Mineral Wells|Mineral Wells|US|147
MWQ|Magway|Magway|MM|358
MWX|Muan|Muan (Piseo-ri)|KR|250
MWZ|Mwanza|Mwanza|TZ|118
MXF|Maxwell Air Force Base|Montgomery|US|147
MXH|Moro|Moro|PG|15
MXI|Mati National|Mati|PH|251
MXJ|Minna|Minna|NG|64
MXL|General Rodolfo Sánchez Taboada|Mexicali|MX|196
MXM|Morombe|Morombe|MG|110
MXN|Morlaix-Ploujean|Morlaix/Ploujean|FR|161
MXP|Milan Malpensa|Ferno (VA)|IT|146
MXV|Mörön|Mörön|MN|374
MXW|Mandalgobi|Mandalgobi|MN|374
MXX|Mora|Mora|SE|86
MXZ|Meizhou Meixian Changgangji|Meizhou (Meixian)|CN|14
MYA|Moruya|Moruya|AU|12
MYC|Escuela Mariscal Sucre|Maracay|VE|289
MYD|Malindi|Malindi|KE|140
MYE|Miyakejima|Miyakejima|JP|249
MYG|Mayaguana|Abraham Bay Settlement|BS|183
MYI|Murray Island|Murray Island|AU|13
MYJ|Matsuyama|Matsuyama|JP|249
MYK|May Creek|May Creek|US|5
MYL|McCall|McCall|US|150
MYP|Mary|Mary|TM|304
MYQ|Mysore|Mysore|IN|145
MYR|Myrtle Beach|Myrtle Beach|US|1
MYT|Myitkyina|Myitkyina|MM|358
MYU|Mekoryuk|Mekoryuk|US|2
MYV|Yuba County|Marysville|US|4
MYW|Mtwara|Mtwara|TZ|118
MYY|Miri|Miri|MY|252
MZB|Mocímboa da Praia|Mocímboa da Praia|MZ|17
MZG|Penghu Magong|Huxi|TW|248
MZH|Amasya Merzifon|Amasya|TR|163
MZI|Mopti|Sévaré|ML|121
MZL|La Nubia|Manizales|CO|38
MZO|Sierra Maestra|Manzanillo|CU|204
MZQ|Mkuze|Mkuze|ZA|94
MZR|Mazar-i-Sharif|Mazar-i-Sharif|AF|223
MZS|Moradabad|Moradabad|IN|145
MZT|General Rafael Buelna|Mazatlàn|MX|191
MZU|Muzaffarpur|Muzaffarpur|IN|145
MZV|Mulu|Mulu|MY|252
MZW|Mecheria|Mecheria|DZ|55
NAA|Narrabri|Narrabri|AU|12
NAG|Dr. Babasaheb Ambedkar|Nagpur|IN|145
NAH|Naha|Tabukan Utara, Sangihe Islands|ID|199
NAJ|Nakhchivan|Nakhchivan|AZ|16
NAK|Nakhon Ratchasima|Chaloem Phra Kiat|TH|155
NAL|Nalchik|Nalchik|RU|73
NAM|Namniwel|Namniwel|ID|58
NAN|Nadi|Nadi|FJ|207
NAO|Nanchong Gaoping|Nanchong (Gaoping)|CN|14
NAP|Naples|Napoli|IT|146
NAQ|Qaanaaq|Qaanaaq|GL|20
NAS|Lynden Pindling|Nassau|BS|27
NAT|Rio Grande do Norte/São Gonçalo do Amarante–Governador Aluízio Alves|Natal|BR|25
NAU|Napuka Island|Napuka Island|PF|216
NAV|Nevşehir Kapadokya|Nevşehir|TR|163
NAW|Narathiwat||TH|155
NBC|Begishevo|Nizhnekamsk|RU|73
NBE|Enfidha - Hammamet|Enfidha|TN|66
NBG|New Orleans NAS JRB/Alvin Callender Field|New Orleans|US|147
NBJ|Dr. Antonio Agostinho Neto|Luanda (Ícolo e Bengo)|AO|96
NBN|Annobón|San Antonio de Palé|GQ|100
NBO|Jomo Kenyatta|Nairobi|KE|140
NBS|Changbaishan|Baishan|CN|14
NBW|Leeward Point Field|Guantanamo Bay Naval Station|CU|204
NBX|Douw Aturure|Nabire|ID|58
NCA|North Caicos|North Caicos|TC|183
NCE|Nice-Côte d'Azur|Nice, Alpes-Maritimes|FR|161
NCL|Newcastle|Newcastle upon Tyne, Tyne and Wear|GB|75
NCN|Chenega Bay|Chenega|US|5
NCO|Quonset State|North Kingstown|US|1
NCS|Newcastle|Newcastle|ZA|94
NCU|Nukus|Nukus|UZ|349
NCY|Annecy Meythet|Annecy|FR|161
NDB|Nouadhibou|Nouadhibou|MR|132
NDC|Nanded|Nanded|IN|145
NDD|Sumbe|Sumbe|AO|96
NDG|Qiqihar Sanjiazi|Qiqihar|CN|14
NDJ|N'Djamena|N'Djamena|TD|115
NDR|Nador Al Aaroui|Al Aaroui|MA|124
NDU|Rundu|Rundu|NA|96
NDY|Sanday|Sanday|GB|75
NEC|Necochea|Necochea|AR|256
NEL|Lakehurst Maxfield Field|Lakehurst|US|1
NER|Chulman|Neryungri|RU|324
NEU|Sam Neua||LA|354
NEV|Vance W. Amory|Charlestown|KN|302
NEW|Lakefront|New Orleans|US|147
NFG|Nefteyugansk|Nefteyugansk|RU|344
NFL|Fallon Naval Air Station|Fallon|US|4
NGA|Young||AU|12
NGB|Ningbo Lishe|Ningbo|CN|14
NGE|N'Gaoundéré|N'Gaoundéré|CM|101
NGF|Kaneohe Bay MCAS (Marion E. Carl Field)|Kaneohe|US|240
NGI|Ngau|Ngau|FJ|207
NGK|Nogliki|Nogliki|RU|329
NGO|Chubu Centrair|Tokoname|JP|249
NGP|Naval Air Station Corpus Christi Truax Field|Corpus Christi|US|147
NGQ|Ngari Gunsa|Shiquanhe|CN|14
NGS|Nagasaki|Nagasaki|JP|249
NGU|Norfolk Naval Station (Chambers Field)|Norfolk|US|1
NHD|Al Minhad Air Base|Dubai|AE|229
NHK|Patuxent River Naval Air Station (Trapnell Field)|Patuxent River|US|1
NHT|RAF Northolt|Northolt, Greater London|GB|75
NHV|Nuku Hiva|Nuku Hiva|PF|218
NHZ|Brunswick Executive|Brunswick|US|1
NIB|Nikolai|Nikolai|US|5
NIM|Diori Hamani|Niamey|NE|65
NIP|Jacksonville Naval Air Station (Towers Field)|Jacksonville|US|1
NIQ|Niaqornat Heliport|Niaqornat|GL|19
NIT|Niort - Marais Poitevin|Niort/Souché|FR|161
NIU|Naiu|Naiu Atoll|PF|216
NJA|JMSDF Atsugi Air Base / Naval Air Facility Atsugi|Ayase / Yamato|JP|249
NJC|Nizhnevartovsk|Nizhnevartovsk|RU|344
NJF|Al Najaf|Najaf|IQ|231
NJK|El Centro NAF Airport (Vraciu Field)|El Centro|US|4
NKC|Nouakchott–Oumtounsy|Nouakchott|MR|132
NKG|Nanjing Lukou|Nanjing|CN|14
NKI|Naukati Bay Seaplane Base|Tuxekan Island|US|3
NKM|Nagoya Airport / JASDF Komaki Air Base|Nagoya|JP|249
NKT|Şırnak Şerafettin Elçi|Şırnak|TR|163
NKW|Naval Support Facility Diego Garcia|Diego Garcia|IO|104
NKX|Miramar Marine Corps Air Station - Mitscher Field|San Diego|US|4
NLA|Simon Mwansa Kapwepwe|Ndola|ZM|105
NLC|Lemoore Naval Air Station (Reeves Field)|Lemoore|US|4
NLD|Quetzalcóatl|Nuevo Laredo|MX|197
NLF|Darnley Island|Darnley Island|AU|13
NLG|Nelson Lagoon|Nelson Lagoon|US|5
NLH|Ninglang Luguhu|Ninglang|CN|14
NLI|Nikolayevsk-na-Amure|Nikolayevsk-na-Amure Airport|RU|329
NLK|Norfolk Island|Burnt Pine|NF|372
NLO|Ndolo|N'dolo|CD|120
NLT|Xinyuan Nalati|Xinyuan|CN|37
NLU|Felipe Ángeles|Mexico City|MX|188
NLV|Mykolaiv International Airport [CLOSED]|Mykolaiv|UA|332
NMA|Namangan|Namangan|UZ|348
NMB|Daman|Daman|IN|145
NMC|Normans Cay|Normans Cay|BS|27
NME|Nightmute|Nightmute|US|2
NMF|Maafaru|Noonu Atoll|MV|111
NMI|Navi Mumbai|Navi Mumbai|IN|145
NMS|Namsang|Namsang|MM|358
NNA|Kenitra Air Base|Kenitra|MA|124
NNB|Santa Ana|Santa Ana Island|SB|8
NNG|Nanning Wuxu|Nanning (Jiangnan)|CN|14
NNM|Naryan Mar|Naryan Mar|RU|73
NNR|Connemara|Inverin|IE|81
NNT|Nan||TH|155
NNY|Nanyang Jiangying|Nanyang (Wancheng)|CN|14
NOA|Naval Air Station Nowra - HMAS Albatross|Nowra Hill|AU|12
NOB|Nosara|Nicoya|CR|201
NOC|Ireland West Airport Knock|Charlestown|IE|81
NOD|Norden-Norddeich|Norddeich|DE|69
NOG|Nogales|Nogales|MX|193
NOI|Krymsk Air Base|Krymsk|RU|73
NOJ|Noyabrsk|Noyabrsk|RU|344
NOP|Sinop|Sinop|TR|163
NOS|Nosy Be|Nosy Be|MG|110
NOU|La Tontouta|Nouméa (La Tontouta)|NC|220
NOV|Albano Machado|Huambo|AO|96
NOZ|Spichenkovo|Novokuznetsk|RU|338
NPA|Naval Air Station Pensacola Forrest Sherman Field|Pensacola|US|147
NPE|Hawke's Bay|Napier|NZ|221
NPL|New Plymouth|New Plymouth|NZ|221
NPO|Nanga Pinoh|Nanga Pinoh-Borneo Island|ID|359
NPT|Newport State|Newport|US|1
NQA|Millington-Memphis|Millington|US|147
NQI|Kingsville Naval Air Station|Kingsville|US|147
NQN|Presidente Perón|Neuquén|AR|257
NQT|Nottingham City|Nottingham, Nottinghamshire|GB|75
NQU|Reyes Murillo|Nuquí|CO|38
NQX|Naval Air Station Key West/Boca Chica Field|Key West|US|1
NQY|Cornwall Airport Newquay|Newquay|GB|75
NQZ|Nursultan Nazarbayev|Astana|KZ|314
NRA|Narrandera|Narrandera|AU|12
NRB|Naval Station Mayport / Admiral David L McDonald Field|Jacksonville|US|1
NRD|Norderney|Norderney|DE|69
NRK|Norrköping|Norrköping|SE|86
NRL|North Ronaldsay|North Ronaldsay|GB|75
NRN|Weeze (Niederrhein)|Weeze|DE|69
NRR|José Aponte de la Torre|Ceiba|PR|184
NRT|Narita|Narita|JP|249
NSB|Bimini North Seaplane Base|Bimini|BS|27
NSE|Whiting Field Naval Air Station - North|Milton|US|147
NSH|Nowshahr|Nowshahr|IR|224
NSI|Yaoundé Nsimalen|Yaoundé|CM|101
NSK|Alykel|Norilsk|RU|254
NSN|Nelson|Nelson|NZ|221
NST|Nakhon Si Thammarat|Nakhon Si Thammarat|TH|155
NTB|Notodden|Notodden|NO|85
NTD|Point Mugu Naval Air Station (Naval Base Ventura Co)|Point Mugu|US|4
NTE|Nantes Atlantique|Nantes|FR|161
NTG|Nantong Xingdong|Nantong (Tongzhou)|CN|14
NTL|Newcastle|Williamtown|AU|12
NTN|Normanton|Normanton|AU|13
NTQ|Noto Satoyama|Wajima|JP|249
NTR|Del Norte|Monterrey|MX|189
NTT|Kuini Lavenia|Niuatoputapu|TO|208
NTU|Oceana Naval Air Station|Virginia Beach|US|1
NTX|Ranai|Ranai-Natuna Besar Island|ID|144
NTY|Pilanesberg|Pilanesberg|ZA|94
NUE|Nuremberg|Nuremberg|DE|69
NUI|Nuiqsut|Nuiqsut|US|5
NUJ|Nojeh Air Base|Amirabad|IR|224
NUL|Nulato|Nulato|US|5
NUM|Neom Bay|Sharma|SA|225
NUP|Nunapitchuk|Nunapitchuk|US|2
NUQ|Moffett Federal|Mountain View|US|4
NUS|Norsup|Norsup|VU|219
NUU|Nakuru Lanet|Nakuru|KE|140
NUW|Whidbey Island Naval Air Station (Ault Field)|Oak Harbor|US|4
NUX|Novy Urengoy|Novy Urengoy|RU|344
NVA|Benito Salas|Neiva|CO|38
NVI|Navoi|Navoi|UZ|349
NVS|Nevers-Fourchambault|Marzy, Nièvre|FR|161
NVT|Ministro Victor Konder|Navegantes|BR|269
NWA|Mohéli Bandar Es Eslam|Fomboni|KM|107
NWI|Norwich|Norwich, Norfolk|GB|75
NYA|Nyagan|Nyagan|RU|344
NYG|Quantico Marine Corps Airfield / Turner Field|Quantico|US|1
NYI|Sunyani|Sunyani|GH|60
NYK|Nanyuki Civil|Gathiuru|KE|140
NYM|Nadym|Nadym|RU|344
NYO|Stockholm Skavsta|Nyköping|SE|86
NYS|New York Skyports Inc Seaplane Base|New York|US|1
NYT|Nay Pyi Taw|Naypyitaw|MM|358
NYU|Bagan|Nyaung U|MM|358
NZC|Maria Reiche Neuman|Nazca|PE|287
NZG|Nizhneangarsk|Nizhneangarsk|RU|253
NZH|Manzhouli Xijiao|Manzhouli|CN|14
NZL|Zhalantun Genghis Khan|Zhalantun|CN|14
NZY|North Island Naval Air Station-Halsey Field|San Diego|US|4
OAG|Orange|Orange|AU|12
OAI|Bagram|Bagram|AF|223
OAJ|Albert J Ellis|Richlands|US|1
OAK|Oakland San Francisco Bay|Oakland|US|4
OAL|Cacoal|Cacoal|BR|278
OAM|Oamaru||NZ|221
OAX|Xoxocotlán|Oaxaca|MX|188
OBF|Oberpfaffenhofen|Weßling|DE|69
OBN|Oban|North Connel|GB|75
OBO|Tokachi-Obihiro|Obihiro|JP|249
OBS|Aubenas-South Ardèche|Lanas, Ardèche|FR|161
OBU|Kobuk|Kobuk|US|5
OBX|Obo|Obo|PG|15
OBY|Ittoqqortoormiit Heliport|Ittoqqortoormiit|GL|21
OCA|Ocean Reef Club|Key Largo|US|1
OCC|Francisco De Orellana|Coca|EC|285
OCE|Ocean City|Ocean City|US|1
OCJ|Ian Fleming|Boscobel|JM|187
OCN|Oceanside|Oceanside|US|4
OCS|Corisco|Corisco Island|GQ|112
OCV|Aguas Claras|Ocaña|CO|38
ODB|Córdoba|Córdoba|ES|160
ODE|Odense Hans Christian Andersen|Odense|DK|82
ODH|RAF Odiham|Hook, Hampshire|GB|75
ODN|Long Seridan|Long Seridan|MY|252
ODO|Bodaybo|Bodaybo|RU|253
ODS|Odesa|Odesa|UA|332
ODY|Oudomsay|Oudomsay|LA|354
OEC|Oecusse Route of the Sandalwood|Oecussi-Ambeno|TL|199
OER|Örnsköldsvik|Örnsköldsvik|SE|86
OES|Antoine de Saint Exupéry|San Antonio Oeste|AR|257
OFF|Offutt Air Force Base|Omaha|US|147
OFK|Karl Stefan Memorial|Norfolk|US|147
OFU|Ofu|Ofu|AS|214
OGB|Orangeburg|Orangeburg|US|1
OGD|Ogden Hinckley|Ogden|US|148
OGG|Kahului|Kahului|US|240
OGL|Eugene F. Correia|Ogle|GY|293
OGN|Yonaguni|Yonaguni|JP|249
OGS|Ogdensburg|Ogdensburg|US|1
OGU|Ordu–Giresun|Ordu|TR|163
OGX|Ain Beida|Ouargla|DZ|55
OGZ|Vladikavkaz Beslan|Beslan|RU|73
OHA|RNZAF Base Ohakea||NZ|221
OHD|Ohrid St. Paul the Apostle|Ohrid|MK|178
OHE|Mohe Gulian|Mohe|CN|14
OHO|Okhotsk|Okhotsk|RU|62
OHS|Suhar|Suhar|OM|228
OIM|Oshima|Izu Oshima|JP|249
OIR|Okushiri|Okushiri Island|JP|249
OIT|Oita|Oita|JP|249
OJU|Tanjung Api|Tojo Una-Una|ID|199
OKA|Naha|Naha|JP|249
OKC|OKC Will Rogers World|Oklahoma City|US|147
OKD|Sapporo Okadama|Sapporo|JP|249
OKE|Okinoerabu|Wadomari|JP|249
OKI|Oki Global Geopark|Okinoshima|JP|249
OKJ|Okayama Momotaro|Okayama|JP|249
OKL|Oksibil|Oksibil|ID|15
OKN|Okondja|Okondja|GA|112
OKO|Yokota Air Base|Fussa|JP|249
OKR|Yorke Island|Yorke Island|AU|13
OKY|Oakey Army Aviation Centre||AU|13
OLA|Ørland|Ørland|NO|85
OLB|Olbia Costa Smeralda|Olbia (SS)|IT|146
OLF|L M Clayton|Wolf Point|US|148
OLH|Old Harbor|Old Harbor|US|5
OLJ|North West Santo|Olpoi|VU|219
OLL|Oyo Ollombo|Oyo|CG|97
OLM|Olympia|Olympia|US|4
OLP|Olympic Dam|Olympic Dam|AU|366
OLS|Nogales|Nogales|US|151
OLU|Columbus|Columbus|US|147
OLZ|Olyokminsk|Olyokminsk|RU|324
OMA|Eppley|Omaha|US|147
OMB|Omboue Hospital|Omboue|GA|112
OMC|Ormoc|Ormoc City|PH|251
OMD|Oranjemund|Oranjemund|NA|93
OME|Nome|Nome|US|2
OMH|Urmia|Urmia|IR|224
OMN|Zomin|Zomin|UZ|348
OMO|Mostar|Mostar|BA|174
OMR|Oradea|Oradea|RO|175
OMS|Omsk Central|Omsk|RU|340
OND|Ondangwa|Ondangwa|NA|93
ONG|Mornington Island||AU|13
ONJ|Odate Noshiro|Kitaakita|JP|249
ONO|Ontario|Oregon|US|150
ONP|Newport|Newport|US|4
ONQ|Zonguldak Çaycuma|Zonguldak|TR|163
ONT|Ontario|Ontario|US|4
ONX|Enrique Adolfo Jimenez|Colón|PA|200
OOK|Toksook Bay|Toksook Bay|US|2
OOL|Gold Coast|Gold Coast|AU|13
OOM|Cooma Snowy Mountains|Cooma|AU|12
OPF|Miami-Opa Locka Executive|Miami|US|1
OPO|Francisco de Sá Carneiro|Porto|PT|172
OPP|Salinópolis|Salinópolis|BR|268
OPS|Presidente João Batista Figueiredo|Sinop|BR|271
OPU|Balimo|Balimo|PG|15
ORA|Orán|Orán|AR|257
ORB|Örebro|Örebro|SE|86
ORD|Chicago O'Hare|Chicago|US|147
ORF|Norfolk|Norfolk|US|1
ORG|Zorg en Hoop|Paramaribo|SR|291
ORH|Worcester|Worcester|US|1
ORI|Port Lions|Port Lions|US|5
ORK|Cork|Cork|IE|81
ORL|Orlando Executive|Orlando|US|1
ORN|Oran Es-Sénia (Ahmed Ben Bella)|Es-Sénia|DZ|55
ORT|Northway|Northway|US|5
ORU|Juan Mendoza|Oruro|BO|290
ORV|Robert (Bob) Curtis Memorial|Noorvik|US|5
ORY|Paris-Orly|Paris (Orly, Val-de-Marne)|FR|161
ORZ|H.E Alfredo Martinez (Tower Hill) Airstrip|Orange Walk|BZ|31
OSD|Åre Östersund|Östersund|SE|86
OSH|Wittman|Oshkosh|US|147
OSI|Osijek|Osijek(Klisa)|HR|159
OSL|Oslo-Gardermoen|Oslo (Gardermoen)|NO|85
OSM|Mosul|Mosul|IQ|231
OSN|Osan Air Base|Pyeongtaek|KR|250
OSR|Leoš Janáček Airport Ostrava|Mošnov|CZ|166
OSS|Osh|Osh|KG|315
OST|Ostend-Bruges|Oostende|BE|68
OSU|The Ohio State University Airport - Don Scott Field|Columbus|US|1
OSW|Orsk|Orsk|RU|344
OSY|Namsos|Namsos|NO|85
OTD|Raul Arias Espinoza|Contadora Island|PA|200
OTH|Southwest Oregon|North Bend|US|4
OTI|Pitu|Gotalalamo-Morotai Island|ID|58
OTM|Ottumwa|Ottumwa|US|147
OTP|Bucharest Henri Coandă|Otopeni|RO|175
OTR|Coto 47|Corredores|CR|201
OTS|Anacortes|Anacortes|US|4
OTZ|Ralph Wien Memorial|Kotzebue|US|2
OUA|Ouagadougou Thomas Sankara|Ouagadougou|BF|59
OUD|Oujda Angads|Ahl Angad|MA|124
OUE|Ouesso||CG|97
OUH|Oudtshoorn|Oudtshoorn|ZA|94
OUI|Ouessant|Ushant|FR|161
OUL|Oulu|Oulu / Oulunsalo|FI|72
OUZ|Tazadit|Zouérate|MR|132
OVB|Novosibirsk Tolmachevo|Novosibirsk|RU|339
OVD|Asturias|Ranón|ES|160
OVS|Sovetskiy|Sovetskiy|RU|344
OWB|Owensboro Daviess County|Owensboro|US|147
OWD|Norwood Memorial|Norwood|US|1
OXB|Osvaldo Vieira|Bissau|GW|127
OXF|London Oxford|Kidlington, Oxfordshire|GB|75
OXR|Oxnard|Oxnard|US|4
OYA|Goya|Goya|AR|255
OYE|Oyem|Oyem|GA|112
OYK|Oiapoque|Oiapoque|BR|279
OYO|Tres Arroyos|Tres Arroyos|AR|256
OYP|Saint-Georges-de-l'Oyapock|Saint-Georges-de-l'Oyapock|GF|279
OZC|Labo|Ozamiz|PH|251
OZG|Zagora|Zagora|MA|124
OZH|Zaporizhzhia|Zaporizhia|UA|333
OZP|Moron Air Base|Morón|ES|160
OZR|Cairns AAF (Fort Rucker) Air Field|Fort Rucker/Ozark|US|147
OZZ|Ouarzazate|Ouarzazate|MA|124
PAB|Bilaspur|Bilaspur|IN|145
PAC|Marcos A. Gelabert|Albrook|PA|200
PAD|Paderborn Lippstadt|Büren|DE|69
PAE|Seattle Paine Field|Everett|US|4
PAG|Pagadian|Pagadian|PH|251
PAH|Barkley|Paducah|US|147
PAL|German Olano Air Base|La Dorada|CO|38
PAM|Tyndall Air Force Base|Panama City|US|147
PAN|Pattani||TH|155
PAO|Palo Alto|Palo Alto|US|4
PAP|Toussaint Louverture|Port-au-Prince|HT|203
PAQ|Warren "Bud" Woods Palmer|Palmer|US|5
PAS|Paros National|Paros|GR|162
PAT|Jay Prakash Narayan|Patna|IN|145
PAV|Paulo Afonso|Paulo Afonso|BR|26
PAX|Port-de-Paix|Port-de-Paix|HT|203
PAZ|El Tajín National|Poza Rica|MX|188
PBC|Hermanos Serdán|Puebla|MX|188
PBD|Porbandar|Porbandar|IN|145
PBF|Pine Bluff Regional Airport, Grider Field|Pine Bluff|US|147
PBG|Plattsburgh|Plattsburgh|US|1
PBH|Paro|Paro|BT|357
PBJ|Tavie|Paama Island|VU|219
PBL|General Bartolome Salom|Puerto Cabello|VE|289
PBM|Johan Adolf Pengel|Paramaribo|SR|291
PBN|Porto Amboim|Port Amboim|AO|96
PBO|Paraburdoo|Paraburdoo|AU|11
PBR|Puerto Barrios|Puerto Barrios|GT|30
PBU|Putao|Putao|MM|358
PBZ|Plettenberg Bay|Plettenberg Bay|ZA|94
PCF|Potchefstroom|Potchefstroom|ZA|94
PCL|Cap FAP David Abenzur Rengifo|Pucallpa|PE|287
PCN|Picton|Koromiko|NZ|221
PCP|Principe|São Tomé & Príncipe|ST|113
PCR|German Olano|Puerto Carreño|CO|289
PDA|Obando Cesar Gaviria Trujillo|Puerto Inírida|CO|38
PDB|Pedro Bay|Pedro Bay|US|5
PDG|Minangkabau|Padang (Katapiang)|ID|144
PDK|DeKalb Peachtree|Atlanta|US|1
PDL|João Paulo II|Ponta Delgada|PT|171
PDM|Capt. J. Montenegro|Pedasí|PA|200
PDO|Pendopo|Talang Gudang-Sumatra Island|ID|144
PDP|Capitan Corbeta CA Curbelo|Punta del Este|UY|292
PDS|Piedras Negras|Piedras Negras|MX|197
PDT|Eastern Oregon Regional Airport at Pendleton|Pendleton|US|4
PDU|Tydeo Larre Borges|Paysandú|UY|292
PDV|Plovdiv|Plovdiv|BG|18
PDX|Portland|Portland|US|4
PEC|Pelican Seaplane Base|Pelican|US|3
PED|Pardubice|Pardubice|CZ|166
PEE|Perm|Perm|RU|344
PEG|Perugia San Francesco d'Assisi – Umbria|Perugia (PG)|IT|146
PEH|Comodoro Pedro Zanni|Pehuajó|AR|256
PEI|Matecaña|Pereira|CO|38
PEK|Beijing Capital|Beijing|CN|14
PEM|Padre Aldamiz|Puerto Maldonado|PE|290
PEN|Penang|Penang|MY|28
PER|Perth|Perth|AU|11
PES|Petrozavodsk|Petrozavodsk|RU|73
PET|João Simões Lopes Neto|Pelotas|BR|269
PEU|Puerto Lempira|Puerto Lempira|HN|186
PEV|Pécs-Pogány|Pécs|HU|164
PEW|Bacha Khan|Peshawar|PK|230
PEX|Pechora|Pechora|RU|73
PEZ|Penza|Penza|RU|73
PFB|Lauro Kurtz|Passo Fundo|BR|269
PFO|Paphos|Paphos|CY|158
PFQ|Parsabad-Moghan|Parsabad|IR|224
PFR|Ilebo|Ilebo|CD|120
PGA|Page|Page|US|151
PGD|Punta Gorda|Punta Gorda|US|1
PGF|Perpignan-Rivesaltes (Llabanère)|Perpignan/Rivesaltes|FR|161
PGH|Pantnagar|Pantnagar|IN|145
PGK|Depati Amir|Pangkal Pinang|ID|144
PGM|Port Graham|Port Graham|US|5
PGU|Persian Gulf|Khiyaroo|IR|224
PGV|Pitt-Greenville|Greenville|US|1
PGX|Périgueux-Bassillac|Périgueux/Bassillac|FR|161
PGZ|Ponta Grossa Airport - Comandante Antonio Amilton Beraldo|Ponta Grossa|BR|269
PHB|Parnaíba - Prefeito Doutor João Silva Filho|Parnaíba|BR|25
PHC|Port Harcourt|Port Harcourt|NG|64
PHE|Port Hedland|Port Hedland|AU|11
PHF|Newport News Williamsburg|Newport News|US|1
PHG|Port Harcourt City Airport / Port Harcourt Air Force Base|Port Harcourt|NG|64
PHH|Pokhara|Pokhara|NP|213
PHL|Philadelphia|Philadelphia|US|1
PHO|Point Hope|Point Hope|US|2
PHS|Phitsanulok|Phitsanulok|TH|155
PHW|Hendrik Van Eck|Phalaborwa|ZA|94
PHX|Phoenix Sky Harbor|Phoenix|US|151
PHY|Phetchabun||TH|155
PIA|General Wayne A. Downing Peoria|Peoria|US|147
PIB|Hattiesburg Laurel|Moselle|US|147
PIE|St. Petersburg Clearwater|Pinellas Park|US|1
PIH|Pocatello|Pocatello|US|150
PIK|Glasgow Prestwick|Prestwick, South Ayrshire|GB|75
PIL|Aeródromo Don Carlos Miguel Gimenez|Pilar|PY|255
PIO|Captain Renán Elías Olivera|Pisco|PE|287
PIP|Pilot Point|Pilot Point|US|5
PIR|Pierre|Pierre|US|147
PIS|Poitiers-Biard|Poitiers/Biard|FR|161
PIT|Pittsburgh|Pittsburgh|US|1
PIU|PAF Captain Guillermo Concha Iberico|Piura|PE|287
PIW|Pikwitonei|Pikwitonei|CA|36
PIX|Pico|Pico Island|PT|171
PIZ|Point Lay LRRS|Point Lay|US|2
PJA|Pajala|Pajala|SE|86
PJC|Aeropuerto Nacional Dr. Augusto Roberto Fuster|Pedro Juan Caballero|PY|288
PJG|Panjgur|Panjgur|PK|230
PJM|Puerto Jimenez|Puerto Jimenez|CR|201
PKA|Napaskiak|Napaskiak|US|2
PKB|Mid Ohio Valley|Parkersburg (Williamstown)|US|1
PKC|Yelizovo|Petropavlovsk-Kamchatsky|RU|330
PKE|Parkes|Parkes|AU|12
PKG|Pulau Pangkor|Pangkor Island|MY|28
PKN|Iskandar|Pangkalanbun|ID|359
PKP|Puka Puka||PF|216
PKR|Pokhara Domestic|Pokhara|NP|213
PKT|Port Keats|Wadeye|AU|364
PKU|Sultan Syarif Kasim II International Airport / Roesmin Nurjadin AFB|Pekanbaru|ID|144
PKV|Princess Olga Pskov|Pskov|RU|73
PKW|Selebi Phikwe|Selebi Phikwe|BW|95
PKX|Beijing Daxing|Beijing|CN|14
PKY|Tjilik Riwut|Palangkaraya|ID|359
PKZ|Pakse|Pakse|LA|354
PLJ|Placencia|Placencia|BZ|30
PLL|Ponta Pelada Airport / Manaus Air Base|Manaus|BR|275
PLM|Sultan Mahmud Badaruddin II|Palembang|ID|144
PLN|Pellston Regional Airport of Emmet County|Pellston|US|42
PLO|Port Lincoln|Port Lincoln|AU|366
PLQ|Palanga|Palanga|LT|92
PLS|Providenciales|Providenciales|TC|183
PLU|Pampulha - Carlos Drummond de Andrade|Belo Horizonte|BR|269
PLV|Suprunovka|Poltava|UA|332
PLW|Mutiara - SIS Al-Jufrie|Palu|ID|199
PLX|Semei|Semey|KZ|314
PLZ|Chief Dawid Stuurman|Gqeberha (Port Elizabeth)|ZA|94
PMA|Pemba|Chake Chake|TZ|118
PMC|El Tepual|Puerto Montt|CL|283
PMD|Palmdale Regional Airport / USAF Plant 42|Palmdale|US|4
PMF|Parma|Parma (PR)|IT|146
PMG|Ponta Porã|Ponta Porã|BR|273
PMI|Palma de Mallorca|Palma de Mallorca|ES|160
PMK|Palm Island||AU|13
PMO|Falcone–Borsellino|Palermo|IT|146
PMQ|Perito Moreno Jalil Hamer|Perito Moreno|AR|265
PMR|Palmerston North|Palmerston North|NZ|221
PMS|Palmyra|Tadmur|SY|232
PMV|Del Caribe Santiago Mariño|Isla Margarita|VE|289
PMW|Brigadeiro Lysias Rodrigues|Palmas|BR|280
PMY|El Tehuelche|Puerto Madryn|AR|259
PMZ|Palmar Sur|Palmar Sur|CR|201
PNA|Pamplona|Pamplona|ES|160
PNB|Porto Nacional|Porto Nacional|BR|280
PNC|Ponca City|Ponca City|US|147
PND|Punta Gorda|Punta Gorda|BZ|30
PNE|Northeast Philadelphia|Philadelphia|US|1
PNH|Phnom Penh|Phnom Penh (Pou Senchey)|KH|152
PNI|Pohnpei|Pohnpei Island|FM|244
PNK|Supadio|Pontianak|ID|359
PNL|Pantelleria|Pantelleria (TP)|IT|146
PNP|Girua|Popondetta|PG|15
PNQ|Pune|Pune|IN|145
PNR|Antonio Agostinho-Neto|Pointe Noire|CG|97
PNS|Pensacola|Pensacola|US|147
PNT|Lieutenant Julio Gallardo|Puerto Natales|CL|267
PNV|Panevėžys Air Base|Panevėžys|LT|92
PNX|North Texas Regional Airport Perrin Field|Denison|US|147
PNY|Pondicherry|Puducherry (Pondicherry)|IN|145
PNZ|Senador Nilo Coelho|Petrolina|BR|281
POA|Porto Alegre-Salgado Filho|Porto Alegre|BR|269
POB|Pope Field|Fort Bragg|US|1
POE|Polk Army Air Field|Fort Polk|US|147
POG|Port Gentil|Port Gentil|GA|112
POI|Capitan Nicolas Rojas|Potosí|BO|290
POL|Pemba|Pemba|MZ|17
POM|Port Moresby Jacksons|Port Moresby|PG|15
POO|Poços de Caldas - Embaixador Walther Moreira Salles|Poços De Caldas|BR|269
POP|Gregorio Luperon|Puerto Plata|DO|182
POR|Pori|Pori|FI|72
POS|Piarco|Port of Spain|TT|311
POT|Ken Jones|Ken Jones|JM|187
POU|Dutchess County|Poughkeepsie|US|1
POW|Portorož|Sečovlje|SI|165
POX|Pontoise-Cormeilles|Cormeilles-en-Vexin, Val-d'Oise|FR|161
POZ|Poznań-Ławica|Poznań|PL|88
PPB|Presidente Prudente|Presidente Prudente|BR|269
PPE|Mar de Cortés|Puerto Peñasco|MX|193
PPG|Pago Pago|Pago Pago|AS|215
PPI|Port Pirie||AU|366
PPK|Petropavl|Petropavl|KZ|314
PPN|Guillermo León Valencia|Popayán|CO|38
PPP|Proserpine Whitsunday Coast|Proserpine|AU|13
PPQ|Paraparaumu||NZ|221
PPS|Puerto Princesa International Airport / PAF Antonio Bautista Air Base|Puerto Princesa|PH|251
PPT|Fa'a'ā|Papeete|PF|216
PPV|Port Protection Seaplane Base|Port Protection|US|3
PPW|Papa Westray|Papa Westray, Orkney Islands|GB|75
PQC|Phú Quốc|Phu Quoc Island|VN|152
PQI|Presque Isle|Presque Isle|US|1
PQQ|Port Macquarie|Port Macquarie|AU|12
PQS|Pilot Station|Pilot Station|US|2
PQT|Qeqertaq Heliport|Qeqertaq|GL|19
PRA|General Urquiza|Parana|AR|255
PRB|Paso Robles|Paso Robles|US|4
PRC|Prescott Regional Airport - Ernest A. Love Field|Prescott|US|151
PRG|Václav Havel Airport Prague|Prague|CZ|166
PRH|Phrae||TH|155
PRI|Praslin Island|Praslin Island|SC|114
PRM|Portimão|Portimão|PT|172
PRN|Priština Adem Jashari|Prishtina|XK|24
PRV|Přerov Air Base|Přerov|CZ|166
PRX|Cox Field|Paris|US|147
PRY|Wonderboom|Pretoria|ZA|94
PSA|Pisa|Pisa (PI)|IT|146
PSC|Tri Cities|Pasco|US|4
PSD|Port Said|Port Said|EG|71
PSE|Mercedita|Ponce|PR|184
PSG|Petersburg James A Johnson|Petersburg|US|6
PSI|Pasni|Pasni|PK|230
PSJ|Kasiguncu|Poso-Celebes Island|ID|199
PSM|Portsmouth International Airport at Pease|Portsmouth|US|1
PSO|Antonio Nariño|Chachagüí|CO|38
PSP|Palm Springs|Palm Springs|US|4
PSR|Abruzzo|Pescara|IT|146
PSS|Libertador Gral D Jose De San Martin|Posadas|AR|255
PSU|Pangsuma|Putussibau-Borneo Island|ID|359
PSY|Port Stanley|Stanley|FK|79
PSZ|Capitán Av. Salvador Ogaya G.|Puerto Suárez|BO|290
PTA|Port Alsworth|Port Alsworth|US|5
PTD|Port Alexander Seaplane Base|Port Alexander|US|3
PTF|Malolo Lailai Island|Malolo Lailai Island|FJ|207
PTG|Polokwane|Polokwane|ZA|94
PTH|Port Heiden|Port Heiden|US|5
PTJ|Portland||AU|363
PTK|Oakland County|Pontiac|US|42
PTM|Palmarito|Palmarito|VE|289
PTO|Juvenal Loureiro Cardoso|Pato Branco|BR|269
PTP|Maryse Condé|Pointe-à-Pitre|GP|296
PTU|Platinum|Platinum|US|5
PTX|Pitalito|Pitalito|CO|38
PTY|Tocumen|Tocumen|PA|200
PUB|Pueblo Memorial|Pueblo|US|148
PUD|Puerto Deseado|Puerto Deseado|AR|265
PUF|Pau Pyrénées|Pau/Pyrénées (Uzein)|FR|161
PUG|Port Augusta||AU|366
PUJ|Punta Cana|Punta Cana|DO|184
PUQ|President Carlos Ibáñez|Punta Arenas|CL|267
PUR|Puerto Rico|Puerto Rico/Manuripi|BO|290
PUS|Gimhae|Busan|KR|250
PUT|Sri Sathya Sai|Puttaparthi|IN|145
PUU|Tres De Mayo|Puerto Asís|CO|38
PUW|Pullman-Moscow|Pullman|US|4
PUY|Pula|Pula|HR|159
PUZ|Puerto Cabezas|Puerto Cabezas|NI|198
PVA|El Embrujo|Providencia|CO|38
PVD|Rhode Island T. F. Green|Providence/Warwick|US|1
PVG|Shanghai Pudong|Shanghai (Pudong)|CN|14
PVH|Governador Jorge Teixeira de Oliveira|Porto Velho|BR|278
PVK|Aktion National|Preveza|GR|162
PVO|Reales Tamarindos|Portoviejo|EC|285
PVR|Puerto Vallarta|Puerto Vallarta|MX|188
PVS|Provideniya Bay|Chukotka|RU|63
PVU|Provo|Provo|US|148
PWE|Pevek|Apapelgino|RU|63
PWK|Chicago Executive|Chicago/Prospect Heights/Wheeling|US|147
PWM|Portland International Jetport|Portland|US|1
PWQ|Pavlodar|Pavlodar|KZ|314
PWT|Bremerton National|Bremerton|US|4
PWY|Ralph Wenz Field|Pinedale|US|148
PXH|Prominent Hill|Mount Eba|AU|366
PXM|Puerto Escondido|Puerto Escondido|MX|188
PXO|Porto Santo|Vila Baleira|PT|173
PXR|Surin|Surin|TH|155
PXU|Pleiku|Pleiku|VN|356
PYH|Cacique Aramare|Puerto Ayacucho|VE|38
PYJ|Polyarny|Yakutia|RU|324
PYK|Payam|Karaj|IR|224
PYR|Andravida Air Base|Andravida|GR|162
PYT|Pedro Rabelo de Souza|Paracatu|BR|269
PZA|Paz de Ariporo|Paz de Ariporo|CO|38
PZB|Pietermaritzburg|Pietermaritzburg|ZA|94
PZE|Penzance Heliport|Penzance, Cornwall|GB|75
PZH|Zhob|Fort Sandeman|PK|230
PZI|Panzhihua Bao'anying|Panzhihua (Renhe)|CN|14
PZO|General Manuel Carlos Piar|Guyana City|VE|289
PZS|Maquehue|Temuco|CL|283
PZU|Port Sudan New|Port Sudan|SD|143
PZY|Piešťany|Piešťany|SK|181
QBC|Bella Coola|Bella Coola|CA|6
QCU|Akunnaaq Heliport|Akunnaaq|GL|19
QCY|RAF Coningsby|Lincoln, Lincolnshire|GB|75
QFG|Eqalugaarsuit Heliport|Eqalugaarsuit|GL|19
QFI|Iginniarfik Heliport|Iginniarfik|GL|19
QFN|Narsarmijit Heliport|Narsarmijit|GL|19
QFX|Igaliku Heliport|Igaliku|GL|19
QGQ|Attu Heliport|Attu|GL|19
QGU|Gifu|Gifu|JP|249
QHR|Harar Meda|Debre Zeyit|ET|89
QJE|Kitsissuarsuit Heliport|Kitsissuarsuit|GL|19
QJH|Qassimiut Heliport|Qassimiut|GL|19
QJI|Ikamiut Heliport|Ikamiut|GL|19
QMJ|Shahid Asiyaee|Masjed Soleyman|IR|224
QNS|Canoas Air Force Base|Porto Alegre|BR|269
QOQ|Saarloq Heliport|Saarloq|GL|19
QOW|Sam Mbakwe International Cargo|Owerri|NG|64
QPG|Paya Lebar Air Base|Paya Lebar|SG|362
QPW|Kangaatsiaq Heliport|Kangaatsiaq|GL|19
QRA|Rand|Johannesburg|ZA|94
QRM|Narromine||AU|12
QRO|Querétaro Intercontinental|Querétaro|MX|188
QRW|Warri|Okpe|NG|64
QRY|Ikerassaarsuk Heliport|Ikerassaarsuk|GL|19
QSF|Ain Arnat|Sétif|DZ|55
QSR|Salerno Costa d'Amalfi|Salerno|IT|146
QSZ|Shache|Shache|CN|37
QUO|Akwa Ibom|Uyo|NG|64
QUV|Aappilattoq Heliport|Aappilattoq|GL|19
QUW|Ammassivik Heliport|Ammassivik|GL|19
RAB|Tokua|Kokopo|PG|15
RAE|Arar Domestic|Arar|SA|225
RAH|Rafha Domestic|Rafha|SA|225
RAI|Nelson Mandela|Praia|CV|133
RAJ|Rajkot|Rajkot|IN|145
RAK|Marrakesh Menara|Marrakesh|MA|124
RAL|Riverside|Riverside|US|4
RAM|Ramingining||AU|364
RAO|Leite Lopes|Ribeirão Preto|BR|269
RAP|Rapid City|Rapid City|US|148
RAR|Rarotonga|Avarua|CK|206
RAS|Sardar-e-Jangal|Rasht|IR|224
RAZ|Rawalakot|Rawalakot|PK|230
RBA|Rabat-Salé|Rabat|MA|124
RBB|Borba|Borba|BR|275
RBE|Ratanakiri|Ratanakiri|KH|152
RBL|Red Bluff|Red Bluff|US|4
RBQ|Rurrenabaque|Rurrenabaque|BO|290
RBR|Rio Branco-Plácido de Castro|Rio Branco|BR|274
RBV|Ramata|Ramata|SB|8
RBY|Ruby|Ruby|US|5
RCA|Ellsworth Air Force Base|Rapid City|US|148
RCB|Richards Bay|Richards Bay|ZA|94
RCE|Roche Harbor|Roche Harbor|US|4
RCH|Almirante Padilla|Riohacha|CO|38
RCM|Richmond||AU|13
RCO|Rochefort-Saint-Agnant (BA 721)|Rochefort/Saint-Agnant|FR|161
RCQ|Reconquista|Reconquista|AR|255
RCU|Area De Material|Rio Cuarto|AR|255
RDD|Redding|Redding|US|4
RDG|Reading Regional Airport (Carl A Spaatz Field)|Reading|US|1
RDL|Bardawil|El Hassana|EG|71
RDM|Roberts Field|Redmond|US|4
RDO|Warsaw Radom|Radom|PL|88
RDP|Kazi Nazrul Islam|Durgapur|IN|145
RDR|Grand Forks Air Force Base|Grand Forks|US|147
RDS|Rincon De Los Sauces|Rincon de los Sauces|AR|257
RDU|Raleigh-Durham|Raleigh/Durham|US|1
RDV|Red Devil|Red Devil|US|5
RDZ|Rodez–Aveyron|Rodez/Marcillac|FR|161
REA|Reao|Reao|PF|216
REC|Guararapes - Gilberto Freyre|Recife|BR|281
REG|Reggio Calabria|Reggio Calabria|IT|146
REL|Almirante Marco Andres Zar|Rawson|AR|259
REN|Orenburg Central|Orenburg|RU|344
RER|Retalhuleu|Retalhuleu|GT|30
RES|Resistencia|Resistencia|AR|255
RET|Røst|Røst|NO|85
REU|Reus|Reus|ES|160
REW|Rewa Airport, Chorhata, REWA|Rewa|IN|145
REX|General Lucio Blanco|Reynosa|MX|197
RFD|Chicago Rockford|Chicago/Rockford|US|147
RFP|Raiatea|Uturoa|PF|216
RGA|Gobernador Ramón Trejo Noel|Rio Grande|AR|266
RGI|Rangiroa||PF|216
RGK|Gorno-Altaysk|Gorno-Altaysk|RU|337
RGL|Piloto Civil Norberto Fernández|Rio Gallegos|AR|265
RGN|Yangon|Yangon|MM|358
RGO|Orang (Chongjin)|Hoemun-ri|KP|373
RGS|Burgos|Burgos|ES|160
RGT|Japura|Rengat-Sumatra Island|ID|144
RHD|Termas de Río Hondo|Termas de Río Hondo|AR|261
RHI|Rhinelander Oneida County|Rhinelander|US|147
RHO|Rhodes International Airport "Diagoras"|Rhodes|GR|162
RHT|Alxa Right Banner Badanjilin|Badanjilin|CN|14
RIA|Santa Maria|Santa Maria|BR|269
RIB|Capitán Av. Selin Zeitun Lopez|Riberalta|BO|290
RIC|Richmond|Richmond|US|1
RIH|Scarlett Martinez|Río Hato|PA|200
RIJ|Juan Simons Vela|Rioja|PE|287
RIL|Garfield County|Rifle|US|148
RIS|Rishiri|Rishiri|JP|249
RIV|March Air Reserve Base|Riverside|US|4
RIW|Central Wyoming|Riverton|US|148
RIX|Riga|Riga|LV|90
RIY|Riyan|Mukalla(Riyan)|YE|234
RIZ|Rizhao Shanzihe|Rizhao (Donggang)|CN|14
RJA|Rajahmundry|Madhurapudi|IN|145
RJH|Shah Makhdum|Rajshahi|BD|352
RJK|Rijeka|Rijeka(Omišalj)|HR|159
RJL|Logroño-Agoncillo|Logroño|ES|160
RJM|Marinda|Waisai|ID|58
RJN|Rafsanjan|Rafsanjan|IR|224
RKD|Knox County|Rockland|US|1
RKE|Copenhagen Roskilde|Roskilde|DK|82
RKI|Mentawai|Sipura Island|ID|144
RKS|Southwest Wyoming|Rock Springs|US|148
RKT|Ras Al Khaimah|Ras Al Khaimah|AE|229
RKV|Reykjavík Domestic|Reykjavík|IS|22
RKZ|Xigaze Peace Airport / Shigatse Air Base|Xigazê (Samzhubzê)|CN|14
RLG|Rostock-Laage|Laage|DE|69
RLK|Bayannur Tianjitai|Bayannur|CN|14
RMA|Roma|Roma|AU|13
RME|Griffiss|Rome|US|1
RMF|Marsa Alam|Marsa Alam|EG|71
RMG|Richard B Russell|Rome|US|1
RMI|Federico Fellini|Rimini (RN)|IT|146
RMK|Renmark||AU|363
RML|Colombo Ratmalana|Colombo|LK|23
RMO|Chişinău|Chişinău|MD|177
RMP|Rampart|Rampart|US|5
RMQ|Taichung International Airport / Ching Chuang Kang Air Base|Taichung (Qingshui)|TW|248
RMS|Ramstein Air Base|Ramstein-Miesenbach|DE|69
RMT|Rimatara|Rimatara Island|PF|216
RMU|Region of Murcia|Corvera|ES|160
RMZ|Tobolsk Remezov|Tobolsk|RU|344
RNB|Ronneby|Ronneby|SE|86
RND|Randolph Air Force Base|Universal City|US|147
RNE|Roanne-Renaison|Saint-Léger-sur-Roanne|FR|161
RNH|New Richmond|New Richmond|US|147
RNI|Corn Island|Corn Island|NI|198
RNJ|Yoron|Yoron|JP|249
RNL|Rennell/Tingoa|Rennell Island|SB|8
RNN|Bornholm|Rønne|DK|82
RNO|Reno Tahoe|Reno|US|4
RNP|Rongelap Island|Rongelap Island|MH|185
RNS|Rennes-Saint-Jacques|Saint-Jacques-de-la-Lande, Ille-et-Vilaine|FR|161
ROA|Roanoke–Blacksburg|Roanoke|US|1
ROB|Roberts|Monrovia|LR|128
ROC|Frederick Douglass Greater Rochester|Rochester|US|1
ROD|Robertson|Robertson|ZA|94
ROI|Roi Et|Roi Et|TH|155
ROK|Rockhampton|Rockhampton|AU|13
ROO|Maestro Marinho Franco|Rondonópolis|BR|271
ROP|Rota|Rota Island|MP|238
ROR|Roman Tmetuchl|Babelthuap Island|PW|245
ROS|Rosario Islas Malvinas|Rosario|AR|255
ROT|Rotorua|Rotorua|NZ|221
ROV|Platov|Rostov-on-Don|RU|73
ROW|Roswell Air Center|Roswell|US|148
ROZ|Rota Naval Station|Rota|ES|160
RPM|Ngukurr|Roper River|AU|364
RPN|Rosh Pina|Rosh Pina|IL|167
RPR|Swami Vivekananda|Raipur|IN|145
RQA|Ruoqiang Loulan|Ruoqiang Town|CN|37
RQW|Qayyarah West|Qayyarah|IQ|231
RQY|Rashtrakavi Kuvempu|Shimoga|IN|145
RRE|Marree||AU|366
RRG|Sir Charles Gaetan Duval|Port Mathurin|MU|103
RRJ|Jacarepaguá - Roberto Marinho|Rio de Janeiro|BR|269
RRK|Rourkela|Rourkela|IN|145
RRR|Raroia|Raroia|PF|216
RRS|Røros|Røros|NO|86
RSA|Santa Rosa|Santa Rosa|AR|257
RSD|Rock Sound|Rock Sound|BS|27
RSH|Russian Mission|Russian Mission|US|2
RSI|Red Sea|Hanak|SA|225
RSJ|Rosario Seaplane Base|Rosario|US|4
RSL|Russell|Russell|US|147
RST|Rochester|Rochester|US|147
RSU|Yeosu|Yeosu|KR|250
RSW|Southwest Florida|Fort Myers|US|1
RTA|Rotuma|Rotuma|FJ|207
RTB|Juan Manuel Gálvez|Coxen Hole|HN|186
RTC|Ratnagiri||IN|145
RTE|Campo de Marte|São Paulo|BR|269
RTG|Frans Sales Lega|Satar Tacik, Manggarai|ID|199
RTI|David Constantijn Saudale|Ba'a - Rote Island|ID|199
RTM|Rotterdam The Hague|Rotterdam|NL|80
RUA|Arua|Arua|UG|106
RUG|Rugao Air Base|Rugao (Nantong)|CN|14
RUH|King Khalid|Riyadh|SA|225
RUI|Sierra Blanca|Alto|US|148
RUL|Maavaarulaa|Maavaarulu|MV|111
RUN|Roland Garros|Sainte-Marie|RE|109
RUR|Rurutu||PF|216
RUS|Marau|Marau|SB|8
RUT|Rutland - Southern Vermont|Rutland|US|1
RUV|Rubelsanto|Rubelsanto|GT|30
RVE|Los Colonizadores|Saravena|CO|38
RVK|Rørvik Airport, Ryum|Rørvik|NO|85
RVN|Rovaniemi|Rovaniemi|FI|72
RVS|Tulsa Riverside|Tulsa|US|147
RVV|Raivavae||PF|216
RVY|Pres. Gral. Óscar D. Gestido Binational|Rivera/Santana do Livramento|UY|292
RWF|Redwood Falls|Redwood Falls|US|147
RWI|Rocky Mount Wilson|Rocky Mount|US|1
RWL|Rawlins Municipal Airport/Harvey Field|Rawlins|US|148
RWN|Rivne|Rivne|UA|332
RXS|Roxas|Roxas City|PH|251
RYB|Staroselye|Rybinsk|RU|73
RYK|Shaikh Zaid|Rahim Yar Khan|PK|230
RYN|Royan-Médis|Royan/Médis|FR|161
RYO|28 de Noviembre|Rio Turbio|AR|267
RZA|Santa Cruz|Puerto Santa Cruz|AR|265
RZE|Rzeszów-Jasionka|Jasionka|PL|88
RZR|Ramsar|Ramsar|IR|224
RZV|Rize–Artvin|Rize|TR|163
SAB|Juancho E. Yrausquin|Zion's Hill|BQ|307
SAC|Sacramento Executive|Sacramento|US|4
SAE|Saattut Heliport|Saattut|GL|19
SAF|Santa Fe|Santa Fe|US|148
SAG|Shirdi|Kakadi|IN|145
SAH|Sanaa|Sanaa|YE|234
SAI|Siem Reap-Angkor|Siem Reap|KH|152
SAL|El Salvador International Airport Saint Óscar Arnulfo Romero y Galdámez|San Salvador (San Luis Talpa)|SV|202
SAN|San Diego|San Diego|US|4
SAP|Ramón Villeda Morales|San Pedro Sula|HN|186
SAQ|San Andros|Andros Island|BS|27
SAT|San Antonio|San Antonio|US|147
SAV|Savannah Hilton Head|Savannah|US|1
SAW|Istanbul Sabiha Gökçen|Pendik, Istanbul|TR|163
SBA|Santa Barbara|Santa Barbara|US|4
SBD|San Bernardino|San Bernardino|US|4
SBH|St. Jean|Gustavia|BL|299
SBK|Saint-Brieuc-Armor|Trémuson, Côtes-d'Armor|FR|161
SBL|Santa Ana Del Yacuma|Santa Ana del Yacuma|BO|290
SBN|South Bend|South Bend|US|149
SBP|San Luis County|San Luis Obispo|US|4
SBR|Saibai Island|Saibai Island|AU|13
SBT|Sabetta|Sabetta|RU|344
SBU|Springbok|Springbok|ZA|94
SBW|Sibu|Sibu|MY|252
SBY|Salisbury Ocean City Wicomico|Salisbury|US|1
SBZ|Sibiu|Sibiu|RO|175
SCC|Deadhorse|Deadhorse|US|5
SCE|State College|State College|US|1
SCH|Schenectady County|Schenectady|US|1
SCI|Paramillo|San Cristóbal|VE|289
SCK|Stockton Metropolitan|Stockton|US|4
SCL|Comodoro Arturo Merino Benítez|Santiago|CL|283
SCM|Scammon Bay|Scammon Bay|US|2
SCN|Saarbrücken|Saarbrücken|DE|69
SCO|Aktau|Aktau|KZ|318
SCQ|Santiago-Rosalía de Castro|Santiago de Compostela|ES|160
SCR|Scandinavian Mountains|Malung-Sälen|SE|86
SCT|Socotra|Mori|YE|234
SCU|Antonio Maceo|Santiago|CU|204
SCV|Suceava Ștefan cel Mare|Suceava|RO|175
SCW|Syktyvkar|Syktyvkar|RU|73
SCY|San Cristóbal|Puerto Baquerizo Moreno|EC|286
SCZ|Santa Cruz/Graciosa Bay/Luova|Santa Cruz/Graciosa Bay/Luova|SB|8
SDB|Langebaanweg|Langebaanweg|ZA|94
SDD|Lubango Mukanka|Lubango|AO|96
SDE|Vicecomodoro Angel D. La Paz Aragonés|Santiago del Estero|AR|255
SDF|Louisville Muhammad Ali|Louisville|US|154
SDG|Sanandaj||IR|224
SDJ|Sendai|Natori|JP|249
SDK|Sandakan|Sandakan|MY|252
SDL|Sundsvall-Härnösand|Sundsvall/ Härnösand|SE|86
SDM|Brown Field|San Diego|US|4
SDN|Sandane Airport, Anda|Sandane|NO|85
SDP|Sand Point|Sand Point|US|5
SDQ|Las Américas|Santo Domingo|DO|182
SDR|Seve Ballesteros-Santander|Santander|ES|160
SDS|Sado|Sado|JP|249
SDT|Saidu Sharif|Saidu Sharif|PK|230
SDU|Santos Dumont|Rio de Janeiro|BR|269
SDW|Sindhudurg|Chipi|IN|145
SDY|Sidney - Richland|Sidney|US|148
SEA|Seattle–Tacoma|Seattle|US|4
SEB|Sabha|Sabha|LY|56
SEK|Srednekolymsk|Srednekolymsk|RU|325
SEN|London Southend|Southend-on-Sea, Essex|GB|75
SES|Svetlogorsk|Svetlogorsk|RU|254
SET|Santa Magalhães|Serra Talhada|BR|281
SEU|Seronera|Seronera|TZ|118
SEZ|Seychelles|Victoria|SC|114
SFA|Sfax Thyna|Sfax|TN|66
SFB|Orlando Sanford|Orlando|US|1
SFC|St-François|St-François|GP|296
SFD|San Fernando de Apure Las Flecheras National|San Fernando de Apure|VE|289
SFE|San Fernando|San Fernando|PH|251
SFF|Felts Field|Spokane|US|4
SFG|Grand Case-l'Espérance|Grand Case|MF|298
SFJ|Kangerlussuaq|Kangerlussuaq|GL|19
SFL|São Filipe|São Filipe|CV|133
SFN|Sauce Viejo|Santa Fe|AR|255
SFO|San Francisco|San Francisco|US|4
SFS|Subic Bay International Airport / Naval Air Station Cubi Point|Olongapo|PH|251
SFT|Skellefteå|Skellefteå|SE|86
SGC|Surgut|Surgut|RU|344
SGD|Sønderborg|Sønderborg|DK|82
SGE|Siegerland|Burbach|DE|69
SGF|Springfield Branson National|Springfield|US|147
SGG|Sermiligaaq Heliport|Sermiligaaq|GL|19
SGH|Springfield-Beckley|Springfield|US|1
SGI|Mushaf Air Base|Sargodha|PK|230
SGL|Danilo Atienza Air Base|Cavite|PH|251
SGN|Tan Son Nhat|Ho Chi Minh City|VN|356
SGO|St George||AU|13
SGR|Sugar Land|Houston|US|147
SGU|St George|St George|US|148
SGY|Skagway|Skagway|US|91
SGZ|Songkhla||TH|155
SHA|Shanghai Hongqiao|Shanghai (Minhang)|CN|14
SHB|Nakashibetsu|Nakashibetsu|JP|249
SHC|Shire Inda Selassie|Shire Inda Selassie|ET|89
SHD|Shenandoah Valley|Weyers Cave|US|1
SHE|Shenyang Taoxian|Shenyang|CN|14
SHF|Shihezi Huayuan|Shihezi|CN|37
SHG|Shungnak|Shungnak|US|5
SHH|Shishmaref|Shishmaref|US|2
SHI|Shimojishima|Miyakojima|JP|249
SHJ|Sharjah|Sharjah|AE|229
SHL|Shillong|Shillong|IN|145
SHM|Nanki Shirahama|Shirahama|JP|249
SHO|King Mswati III|Mpaka|SZ|98
SHR|Sheridan County|Sheridan|US|148
SHS|Jingzhou Shashi|Jingzhou (Shashi)|CN|14
SHT|Shepparton||AU|363
SHV|Shreveport|Shreveport|US|147
SHW|Sharurah Domestic|Sharurah|SA|225
SHY|Shinyanga|Shinyanga|TZ|118
SIA|Xi'an Xiguan|Xi'an (Baqiao)|CN|14
SID|Amílcar Cabral|Espargos|CV|133
SIF|Simara|Simara|NP|213
SIG|Fernando Luis Ribas Dominicci|San Juan|PR|184
SIH|Silgadi Doti|Silgadi Doti|NP|213
SIJ|Siglufjörður|Siglufjörður|IS|22
SIN|Singapore Changi|Singapore|SG|362
SIO|Smithton||AU|367
SIP|Simferopol|Simferopol|UA|334
SIR|Sion|Sion|CH|176
SIS|Sishen|Sishen|ZA|94
SIT|Sitka Rocky Gutierrez|Sitka|US|3
SJC|Mineta San Jose|San Jose|US|4
SJD|Los Cabos|San José del Cabo|MX|191
SJE|Jorge E. Gonzalez Torres|San José Del Guaviare|CO|38
SJI|San Jose|San Jose|PH|251
SJJ|Sarajevo|Sarajevo|BA|174
SJK|Professor Urbano Ernesto Stumpf|São José Dos Campos|BR|269
SJL|São Gabriel da Cachoeira|São Gabriel da Cachoeira|BR|275
SJO|Juan Santamaría|San José (Alajuela)|CR|201
SJP|Prof. Eribelto Manoel Reino State|São José do Rio Preto|BR|269
SJT|San Angelo Regional Mathis Field|San Angelo|US|147
SJU|Luis Munoz Marin|San Juan|PR|184
SJW|Shijiazhuang Zhengding|Shijiazhuang|CN|14
SJX|Sartaneja|Sartaneja|BZ|31
SJY|Seinäjoki|Seinäjoki / Ilmajoki|FI|72
SJZ|São Jorge|Velas|PT|171
SKA|Fairchild Air Force Base|Spokane|US|4
SKB|Robert L. Bradshaw|Basseterre|KN|302
SKD|Samarkand|Samarkand|UZ|349
SKF|Lackland Air Force Base|San Antonio|US|147
SKG|Thessaloniki Macedonia|Thessaloniki|GR|162
SKH|Surkhet|Surkhet|NP|213
SKK|Shaktoolik|Shaktoolik|US|5
SKN|Stokmarknes Airport, Skagen|Hadsel|NO|85
SKO|Sadiq Abubakar III|Sokoto|NG|64
SKP|Skopje|Ilinden|MK|178
SKS|Skrydstrup Air Base|Vojens|DK|82
SKT|Sialkot|Sialkot|PK|230
SKU|Skiros|Skiros Island|GR|162
SKV|Saint Catherine|Saint Catherine|EG|71
SKX|Saransk|Saransk|RU|73
SKZ|Begum Nusrat Bhutto International Airport Sukkur|Sukkur|PK|230
SLA|Martín Miguel de Güemes|Salta|AR|257
SLC|Salt Lake City|Salt Lake City|US|148
SLD|Sliač|Sliač|SK|181
SLE|Salem-Willamette Valley Airport/McNary Field|Salem|US|4
SLH|Sola|Sola|VU|219
SLI|Solwesi|Solwesi|ZM|106
SLK|Adirondack|Saranac Lake|US|1
SLL|Salalah|Salalah|OM|228
SLM|Salamanca|Salamanca|ES|160
SLN|Salina|Salina|US|147
SLP|Ponciano Arriaga|San Luis Potosí|MX|188
SLQ|Sleetmute|Sleetmute|US|5
SLU|George F. L. Charles|Castries|LC|303
SLW|Plan de Guadalupe|Saltillo|MX|189
SLX|Salt Cay|Salt Cay|TC|182
SLY|Salekhard|Salekhard|RU|344
SLZ|Marechal Cunha Machado|São Luís|BR|25
SMA|Santa Maria|Vila do Porto|PT|171
SME|Lake Cumberland|Somerset|US|1
SMF|Sacramento|Sacramento|US|4
SMI|Samos|Samos Island|GR|162
SMK|St Michael|St Michael|US|2
SML|Stella Maris|Stella Maris|BS|27
SMN|Lemhi County|Salmon|US|148
SMO|Santa Monica|Santa Monica|US|4
SMQ|Sampit (H.Asan)|Sampit|ID|359
SMR|Simón Bolívar|Santa Marta|CO|38
SMS|Sainte Marie|Vohilava|MG|110
SMT|Adolino Bedin|Sorriso|BR|271
SMV|Engadin|Samedan|CH|176
SMW|Smara|Smara|EH|129
SMX|Santa Maria Public Airport Captain G Allan Hancock Field|Santa Maria|US|4
SNA|John Wayne Orange County|Santa Ana|US|4
SNB|Snake Bay|Milikapiti|AU|364
SNC|General Ulpiano Paez|Salinas/La Libertad|EC|285
SNE|Preguiça|Preguiça|CV|133
SNF|Sub Teniente Nestor Arias|San Felipe|VE|289
SNI|Sinoe|Greenville|LR|128
SNJ|San Julián Air Base|Sandino|CU|204
SNN|Shannon|Shannon|IE|81
SNO|Sakon Nakhon||TH|155
SNP|St Paul Island|St Paul Island|US|2
SNR|Saint-Nazaire-Montoir|Saint-Nazaire/Montoir|FR|161
SNS|Salinas|Salinas|US|4
SNU|Abel Santamaria|Santa Clara|CU|204
SNV|Santa Elena de Uairén|Santa Elena de Uairén|VE|272
SNW|Thandwe|Thandwe|MM|358
SNX|Semnan|Semnan|IR|224
SNY|Sidney Municipal Airport Lloyd W Carr Field|Sidney|US|148
SNZ|Santa Cruz Air Force Base|Rio de Janeiro|BR|269
SOB|Hévíz–Balaton|Sármellék|HU|164
SOC|Adisoemarmo|Surakarta|ID|144
SOD|Sorocaba|Sorocaba|BR|269
SOF|Sofia|Sofia|BG|18
SOG|Sogndal Airport, Haukåsen|Sogndal|NO|85
SOJ|Sørkjosen|Sørkjosen|NO|85
SOM|San Tomé|El Tigre|VE|289
SON|Santo Pekoa|Luganville|VU|219
SOO|Söderhamn|Söderhamn|SE|86
SOQ|Domine Eduard Osok|Sorong|ID|58
SOT|Sodankyla|Sodankyla|FI|72
SOU|Southampton|Southampton|GB|75
SOV|Seldovia|Seldovia|US|5
SOW|Show Low|Show Low|US|151
SOY|Stronsay|Stronsay|GB|75
SOZ|Solenzara (BA 126) Air Base|Solenzara|FR|161
SPB|Charlotte Amalie Harbor Seaplane Base|Charlotte Amalie|VI|301
SPC|La Palma|Sta Cruz de la Palma, La Palma Island|ES|123
SPD|Saidpur|Saidpur|BD|352
SPI|Abraham Lincoln Capital|Springfield|US|147
SPM|Spangdahlem Air Base|Trier|DE|69
SPN|Saipan|I Fadang, Saipan|MP|239
SPP|Menongue|Menongue|AO|96
SPR|John Greif II|San Pedro|BZ|31
SPS|Wichita Falls Municipal Airport / Sheppard Air Force Base|Wichita Falls|US|147
SPU|Split Saint Jerome|Split|HR|159
SPX|Sphinx|Al Jiza|EG|71
SPY|San Pedro||CI|61
SQD|Shangrao Sanqingshan|Shangrao (Hengfeng)|CN|14
SQG|Tebelian|Sintang|ID|359
SQJ|Sanming Shaxian|Sanming (Sha)|CN|14
SQL|San Carlos|San Carlos|US|4
SQO|Storuman|Storuman|SE|86
SQQ|Šiauliai|Šiauliai|LT|92
SQW|Skive|Skive|DK|82
SRA|Luis Alberto Lehr|Santa Rosa|BR|269
SRE|Alcantarí|Sucre|BO|290
SRG|Jenderal Ahmad Yani|Semarang|ID|144
SRK|Siorapaluk Heliport|Siorapaluk|GL|20
SRL|Palo Verde|Mulegé|MX|191
SRP|Stord Airport, Sørstokken|Leirvik|NO|85
SRQ|Sarasota Bradenton|Sarasota/Bradenton|US|1
SRT|Soroti|Soroti|UG|141
SRV|Stony River 2|Stony River|US|5
SRX|Sirt International Airport / Ghardabiya Airbase|Sirt|LY|56
SRY|Sari Dasht-e Naz|Sari|IR|224
SRZ|El Trompillo|Santa Cruz|BO|290
SSA|Deputado Luiz Eduardo Magalhães|Salvador|BR|26
SSB|Christiansted Harbor Seaplane Base|Christiansted|VI|301
SSC|Shaw Air Force Base|Sumter|US|1
SSE|Solapur|Solapur|IN|145
SSF|Stinson|San Antonio|US|147
SSG|Malabo|Malabo|GQ|100
SSH|Sharm El Sheikh|Sharm El Sheikh|EG|71
SSI|St Simons Island|St Simons Island|US|1
SSJ|Sandnessjøen Airport, Stokka|Alstahaug|NO|85
SSN|Seoul Air Base (K-16)|Seongnam|KR|250
SSR|Sara|Pentecost Island|VU|219
SST|Santa Teresita|Santa Teresita|AR|256
SSW|Stuart Island Airpark|Friday Harbor|US|4
SSY|Mbanza Congo|Mbanza Congo|AO|96
SSZ|Santos Nero Moura Air Base / Guarujá|Guarujá|BR|269
STA|Stauning Vestjylland|Skjern|DK|82
STB|Miguel Urdaneta Fernández|San Carlos del Zulia|VE|289
STC|Saint Cloud|Saint Cloud|US|147
STD|Mayor Buenaventura Vivas|Santo Domingo|VE|289
STG|St George|St George|US|2
STI|Cibao|Santiago|DO|182
STJ|Rosecrans Memorial|St Joseph|US|147
STL|St. Louis Lambert|St Louis|US|147
STM|Santarém - Maestro Wilson Fonseca|Santarém|BR|276
STN|London Stansted|London, Essex|GB|75
STP|Saint Paul Downtown Holman Field|Saint Paul|US|147
STR|Stuttgart|Stuttgart|DE|69
STS|Charles M. Schulz Sonoma County|Santa Rosa|US|4
STT|Cyril E. King|Charlotte Amalie|VI|301
STV|Surat|Surat|IN|145
STW|Stavropol Shpakovskoye|Stavropol|RU|73
STX|Henry E. Rohlsen|Christiansted|VI|301
STY|Nueva Hesperides|Salto|UY|292
SUB|Juanda|Surabaya|ID|144
SUF|Lamezia Terme Sant'Eufemia|Lamezia Terme (CZ)|IT|146
SUG|Surigao|Surigao City|PH|251
SUI|Vladislav Ardzinba Sukhum|Sukhumi|GE|322
SUJ|Satu Mare|Satu Mare|RO|175
SUK|Sakkyryr|Batagay-Alyta|RU|324
SUL|Sui|Sui|PK|230
SUN|Friedman Memorial|Hailey|US|150
SUR|Summer Beaver|Summer Beaver|CA|35
SUS|Spirit of St Louis|St Louis|US|147
SUU|Travis Air Force Base|Fairfield|US|4
SUV|Nausori|Nausori|FJ|207
SUX|Sioux Gateway Airport / Brigadier General Bud Day Field|Sioux City|US|147
SUY|Suntar|Suntar|RU|324
SVA|Savoonga|Savoonga|US|2
SVB|Sambava|Sambava|MG|110
SVC|Grant County|Silver City|US|148
SVD|Argyle|Kingstown|VC|303
SVG|Stavanger Airport, Sola|Stavanger|NO|85
SVI|Eduardo Falla Solano|San Vicente Del Caguán|CO|38
SVJ|Svolvær Airport, Helle|Svolvær|NO|85
SVL|Savonlinna|Savonlinna|FI|72
SVN|Hunter Army Air Field|Savannah|US|1
SVO|Sheremetyevo|Moscow|RU|73
SVP|Kuito|Kuito|AO|96
SVQ|Seville|Seville|ES|160
SVR|Savissivik Heliport|Savissivik|GL|20
SVS|Stevens Village|Stevens Village|US|5
SVU|Savusavu|Savusavu|FJ|207
SVW|Sparrevohn LRRS|Sparrevohn|US|5
SVX|Koltsovo|Yekaterinburg|RU|344
SVZ|Juan Vicente Gómez|San Antonio del Tachira|VE|289
SWA|Jieyang Chaoshan|Jieyang (Rongcheng)|CN|14
SWC|Stawell||AU|363
SWD|Seward|Seward|US|5
SWF|New York Stewart|Newburgh|US|1
SWH|Swan Hill||AU|12
SWL|San Vicente|San Vicente|PH|251
SWO|Stillwater|Stillwater|US|147
SWQ|Sultan Muhammad Kaharuddin III|Sumbawa Besar|ID|199
SWS|Swansea|Swansea|GB|75
SWT|Strezhevoy|Strezhevoy|RU|341
SWU|Suwon|Suwon|KR|250
SWV|Severo-Evensk|Evensk|RU|328
SWX|Shakawe|Shakawe|BW|96
SXB|Strasbourg|Strasbourg|FR|161
SXE|West Sale|Sale|AU|363
SXI|Siri|Siri|IR|224
SXJ|Shanshan|Shanshan|CN|37
SXK|Mathilda Batlayeri|Saumlaki-Yamdena Island|ID|58
SXL|Sligo|Sligo|IE|81
SXM|Princess Juliana|Sint Maarten|SX|308
SXN|Sua Pan|Sowa|BW|95
SXP|Nunam Iqua|Nunam Iqua|US|2
SXQ|Soldotna|Soldotna|US|5
SXR|Srinagar|Srinagar|IN|145
SXV|Salem|Salem|IN|145
SXZ|Siirt|Siirt|TR|163
SYA|Eareckson Air Station|Shemya|US|235
SYB|Seal Bay Seaplane Base|Seal Bay|US|5
SYD|Sydney Kingsford Smith|Sydney (Mascot)|AU|12
SYF|Silva Bay Seaplane Base|Gabriola Island|CA|6
SYJ|Sirjan|Sirjan|IR|224
SYM|Pu'er Simao|Pu'er|CN|14
SYO|Shonai|Shonai|JP|249
SYP|Ruben Cantu|Santiago|PA|200
SYQ|Tobías Bolaños|San Jose|CR|201
SYR|Syracuse Hancock|Syracuse|US|1
SYS|Saskylakh|Saskylakh|RU|324
SYT|Saint-Yan|L'Hôpital-le-Mercier, Saône-et-Loire|FR|161
SYU|Warraber Island|Sue Islet|AU|13
SYW|Sehwan Sharif|Sehwan Sharif|PK|230
SYX|Sanya Phoenix|Sanya (Tianya)|CN|14
SYY|Stornoway|Stornoway, Western Isles|GB|75
SYZ|Shiraz Shahid Dastghaib|Shiraz|IR|224
SZA|Soyo|Soyo|AO|96
SZB|Sultan Abdul Aziz Shah|Subang|MY|28
SZE|Semera|Semera|ET|89
SZF|Samsun-Çarşamba|Samsun|TR|163
SZG|Salzburg|Salzburg|AT|170
SZH|Shuozhou Zirun|Shuozhou|CN|14
SZI|Zaysan|Zaysan|KZ|314
SZJ|Siguanea|Isla de la Juventud|CU|204
SZK|Skukuza|Skukuza|ZA|94
SZL|Whiteman Air Force Base|Knob Noster|US|147
SZV|Suzhou Guangfu|Suzhou|CN|14
SZX|Shenzhen Bao'an|Shenzhen|CN|14
SZY|Olsztyn-Mazury|Szymany|PL|88
SZZ|Solidarity Szczecin–Goleniów|Szczecin(Glewice)|PL|88
TAB|A.N.R. Robinson|Scarborough|TT|311
TAC|Daniel Z. Romualdez|Tacloban City|PH|251
TAE|Daegu|Daegu|KR|250
TAF|Oran Tafraoui|Tafraoui|DZ|55
TAG|Bohol-Panglao|Panglao|PH|251
TAH|Whitegrass|Tanna Island|VU|219
TAI|Taiz|Taiz|YE|234
TAK|Takamatsu|Takamatsu|JP|249
TAL|Ralph M Calhoun Memorial|Tanana|US|5
TAM|General Francisco Javier Mina|Ciudad Madero|MX|189
TAO|Qingdao Jiaodong|Qingdao (Jiaozhou)|CN|14
TAP|Tapachula|Tapachula|MX|188
TAR|Taranto-Grottaglie Marcello Arlotta|Grottaglie|IT|146
TAS|Tashkent|Tashkent|UZ|348
TAT|Poprad-Tatry|Poprad|SK|181
TAY|Tartu|Tartu|EE|70
TAZ|Dashoguz|Daşoguz|TM|304
TBB|Dong Tac|Tuy Hoa|VN|356
TBF|Tabiteuea North||KI|210
TBG|Tabubil|Tabubil|PG|15
TBH|Tugdan|Tablas Island|PH|251
TBI|New Bight|Cat Island|BS|27
TBJ|Tabarka-Aïn Draham|Tabarka|TN|66
TBM|Tumbang Samba|Tumbang Samba-Borneo Island|ID|359
TBN|Waynesville-St. Robert Regional Airport-Forney Field|Fort Leonard Wood|US|147
TBO|Tabora|Tabora|TZ|118
TBP|Captain Pedro Canga Rodríguez|Tumbes|PE|287
TBS|Tbilisi|Tbilisi|GE|322
TBT|Tabatinga|Tabatinga|BR|282
TBU|Fua'amotu|Nuku'alofa|TO|208
TBW|Donskoye|Tambov|RU|73
TBZ|Tabriz|Tabriz|IR|224
TCA|Tennant Creek|Tennant Creek|AU|364
TCB|Treasure Cay|Treasure Cay|BS|27
TCC|Tucumcari|Tucumcari|US|148
TCD|Tarapacá|Tarapacá|CO|38
TCE|Tulcea Danube Delta|Mihail Kogălniceanu|RO|175
TCG|Tacheng Qianquan|Tacheng|CN|37
TCL|Tuscaloosa National|Tuscaloosa|US|147
TCM|McChord Air Force Base|Tacoma|US|4
TCO|La Florida|Tumaco|CO|38
TCP|Taba|Taba|EG|137
TCQ|Coronel FAP Carlos Ciriani Santa Rosa|Tacna|PE|287
TCR|Tuticorin|Vagaikulam|IN|145
TCS|Truth or Consequences|Truth or Consequences|US|148
TCT|Takotna|Takotna|US|5
TCX|Tabas|Tabas|IR|224
TCZ|Tengchong Tuofeng|Baoshan (Tengchong)|CN|14
TDD|Teniente Av. Jorge Henrich Arauz|Trinidad|BO|290
TDG|Tandag|Tandag|PH|251
TDK|Taldykorgan|Taldykorgan|KZ|314
TDL|Héroes de Malvinas|Tandil|AR|256
TDS|Sasereme|Sasereme|PG|15
TDX|Trat|Laem Ngop|TH|155
TEA|Tela|Tela|HN|186
TEB|Teterboro|Teterboro|US|1
TEC|Telêmaco Borba|Telêmaco Borba|BR|269
TED|Thisted|Thisted|DK|82
TEE|Cheikh Larbi Tébessi|Tébessi|DZ|55
TEF|Telfer||AU|11
TEK|Tatitlek|Tatitlek|US|5
TEM|Temora|Temora|AU|12
TEN|Tongren Fenghuang|Tongren (Daxing)|CN|14
TEQ|Tekirdağ Çorlu|Çorlu|TR|163
TER|Lajes|Praia da Vitória|PT|171
TET|Tete|Tete|MZ|17
TEU|Manapouri||NZ|221
TEV|Teruel|Teruel|ES|160
TEX|Telluride|Telluride|US|148
TEZ|Tezpur||IN|145
TFF|Tefé|Tefé|BR|275
TFI|Tufi|Tufi|PG|15
TFN|Tenerife Norte-Ciudad de La Laguna|Tenerife|ES|123
TFS|Tenerife Sur|Tenerife|ES|123
TFU|Chengdu Tianfu|Chengdu (Jianyang)|CN|14
TGA|Tengah Air Base|Western Water Catchment|SG|362
TGD|Podgorica Airport / Podgorica Golubovci Airbase|Podgorica|ME|180
TGG|Sultan Mahmud|Kuala Terengganu|MY|28
TGH|Tongoa|Tongoa Island|VU|219
TGJ|Tiga|Tiga|NC|220
TGK|Taganrog Yuzhny|Taganrog|RU|73
TGM|Târgu Mureş Transilvania|Recea|RO|175
TGN|Latrobe Valley|Morwell|AU|363
TGO|Tongliao|Tongliao|CN|14
TGP|Podkamennaya Tunguska|Bor|RU|254
TGQ|Tangará da Serra|Tangará da Serra|BR|271
TGR|Touggourt Sidi Madhi|Touggourt|DZ|55
TGT|Tanga|Tanga|TZ|118
TGU|Toncontín|Tegucigalpa|HN|186
TGZ|Angel Albino Corzo|Tuxtla Gutiérrez|MX|188
THD|Tho Xuan|Thanh Hóa|VN|155
THE|Senador Petrônio Portela|Teresina|BR|25
THG|Thangool|Biloela|AU|13
THL|Tachileik|Tachileik|MM|358
THN|Trollhättan-Vänersborg|Trollhättan|SE|86
THO|Þórshöfn|Þórshöfn|IS|22
THQ|Tianshui Maijishan|Tianshui (Maiji)|CN|14
THR|Mehrabad|Tehran|IR|224
THS|Sukhothai||TH|155
THU|Pituffik Space Base|Pituffik|GL|20
THX|Turukhansk|Turukhansk|RU|254
THZ|Tahoua|Tahoua|NE|65
TIA|Tirana International Airport Mother Teresa|Rinas|AL|156
TID|Abdelhafid Boussouf Bou Chekif|Tiaret|DZ|55
TIE|Tippi|Tippi|ET|89
TIF|Taif|Taif|SA|225
TIH|Tikehau|Tuherahera|PF|216
TIJ|General Abelardo L. Rodriguez|Tijuana|MX|196
TIK|Tinker Air Force Base|Oklahoma City|US|147
TIM|Mozes Kilangin|Timika|ID|58
TIN|Tindouf|Tindouf|DZ|55
TIQ|Francisco Manglona Borja / Tinian|Tinian Island|MP|238
TIR|Tirupati|Tirupati|IN|145
TIU|Timaru||NZ|221
TIV|Tivat|Tivat|ME|180
TIW|Tacoma Narrows|Tacoma|US|4
TIX|Space Coast|Titusville|US|1
TIZ|Tari|Tari|PG|15
TJA|Capitan Oriel Lea Plaza|Tarija|BO|290
TJG|Warukin|Tanta-Tabalong|ID|199
TJH|Konotori Tajima|Toyooka|JP|249
TJI|Trujillo|Trujillo|HN|186
TJK|Tokat|Tokat|TR|163
TJL|Plínio Alarcom|Três Lagoas|BR|273
TJM|Roshchino|Tyumen|RU|344
TJQ|H A S Hanandjoeddin|Tanjung Pandan|ID|144
TJS|Tanjung Harapan|Tanjung Selor-Borneo Island|ID|199
TJU|Kulob|Kulob|TJ|347
TKA|Talkeetna|Talkeetna|US|5
TKC|Tiko|Tiko|CM|101
TKD|Takoradi|Sekondi-Takoradi|GH|60
TKE|Tenakee Seaplane Base|Tenakee Springs|US|3
TKF|Truckee Tahoe|Truckee|US|4
TKG|Radin Inten II|Bandar Lampung|ID|144
TKH|Takhli Royal Thai Air Force Base|Takhli|TH|155
TKJ|Tok Junction|Tok|US|5
TKK|Chuuk|Weno Island|FM|243
TKM|Taksimo|Taksimo|RU|253
TKN|Tokunoshima|Amagi|JP|249
TKP|Takapoto||PF|216
TKQ|Kigoma|Kigoma|TZ|118
TKS|Tokushima Awaodori Airport / JMSDF Tokushima Air Base|Tokushima|JP|249
TKT|Tak||TH|155
TKU|Turku|Turku|FI|72
TKV|Tatakoto|Tatakoto|PF|216
TKX|Takaroa||PF|216
TLA|Teller|Teller|US|2
TLC|Adolfo López Mateos|Toluca|MX|188
TLE|Toliara|Toliara|MG|110
TLH|Tallahassee|Tallahassee|US|1
TLI|Sultan Bantilan|Toli Toli-Celebes Island|ID|199
TLJ|Tatalina LRRS|Takotna|US|5
TLL|Lennart Meri Tallinn|Tallinn|EE|70
TLM|Zenata – Messali El Hadj|Zenata|DZ|55
TLN|Toulon-Hyères|Hyères, Var|FR|161
TLQ|Turpan Jiaohe|Turpan|CN|37
TLS|Toulouse-Blagnac|Toulouse/Blagnac|FR|161
TLT|Tuluksak|Tuluksak|US|5
TLU|Golfo de Morrosquillo|Santiago de Tolú|CO|38
TLV|Ben Gurion|Tel Aviv|IL|167
TLX|Panguilemo|Talca|CL|283
TLY|Plastun|Plastun|RU|62
TMB|Miami Executive|Miami|US|1
TMC|Tambolaka|Radamata|ID|199
TME|Gustavo Vargas|Tame|CO|38
TMF|Thimarafushi|Thimarafushi|MV|111
TMG|Tomanggong|Tomanggong|MY|252
TMH|Tanah Merah|Tanah Merah|ID|58
TMI|Tumling Tar|Tumling Tar|NP|213
TMJ|Termez|Termez|UZ|349
TML|Yakubu Tali|Tamale|GH|60
TMM|Toamasina Ambalamanasy|Toamasina|MG|110
TMO|Tumeremo||VE|293
TMP|Tampere-Pirkkala|Tampere / Pirkkala|FI|72
TMR|Aguenar – Hadj Bey Akhamok|Tamanrasset|DZ|55
TMS|São Tomé|São Tomé|ST|113
TMT|Trombetas|Oriximiná|BR|276
TMW|Tamworth|Tamworth|AU|12
TMX|Timimoun|Timimoun|DZ|55
TNA|Jinan Yaoqiang|Jinan (Licheng)|CN|14
TNC|Tin City Long Range Radar Station|Tin City|US|2
TND|Alberto Delgado|Trinidad|CU|204
TNE|New Tanegashima|Tanegashima|JP|249
TNF|Toussus-le-Noble|Toussus-le-Noble, Yvelines|FR|161
TNG|Tangier Ibn Battuta|Tangier|MA|124
TNH|Tonghua Sanyuanpu|Tonghua|CN|14
TNJ|Raja Haji Fisabilillah|Tanjung Pinang-Bintan Island|ID|144
TNK|Tununak|Tununak|US|2
TNN|Tainan International Airport / Tainan Air Base|Tainan (Rende)|TW|248
TNR|Ivato|Antananarivo|MG|110
TNW|Jumandy|Ahuano|EC|285
TOD|Tioman|Tioman Island|MY|28
TOE|Tozeur Nefta|Tozeur|TN|66
TOF|Tomsk Kamov|Tomsk|RU|341
TOG|Togiak|Togiak Village|US|5
TOI|Troy Municipal Airport at N Kenneth Campbell Field|Troy|US|147
TOJ|Madrid–Torrejón Airport / Torrejón Air Base|Madrid|ES|160
TOL|Eugene F. Kranz Toledo Express|Toledo|US|1
TOM|Tombouktou|Timbuktu|ML|121
TOP|Philip Billard|Topeka|US|147
TOQ|Barriles|Tocopilla|CL|283
TOS|Tromsø|Tromsø|NO|85
TOU|Touho|Touho|NC|220
TOW|Toledo - Luiz Dalcanale Filho|Toledo|BR|269
TOY|Toyama Kitokito|Toyama|JP|249
TPA|Tampa|Tampa|US|1
TPC|Tarapoa|Tarapoa|EC|285
TPE|Taiwan Taoyuan|Taoyuan|TW|248
TPH|Tonopah|Tonopah|US|4
TPI|Tapini|Tapini|PG|15
TPJ|Taplejung|Taplejung|NP|213
TPL|Draughon Miller Central Texas|Temple|US|147
TPP|Cadete FAP Guillermo Del Castillo Paredes|Tarapoto|PE|287
TPQ|Amado Nervo National|Tepic|MX|191
TPS|Vincenzo Florio Airport Trapani-Birgi|Trapani (TP)|IT|146
TQA|Tasiusaq Heliport|Tasiusaq|GL|19
TQD|Al Taqaddum Air Base|Al Habbaniyah|IQ|231
TQI|Tiniteqilaaq Heliport|Tiniteqilaaq|GL|19
TQO|Felipe Carrillo Puerto International Airport Tulum|Tulum|MX|192
TQR|San Domino Island Heliport|Tremiti Islands|IT|146
TQS|Captain Ernesto Esguerra Cubides Air Base|Tres Esquinas|CO|38
TRA|Tarama|Tarama|JP|249
TRC|Francisco Sarabia Tinoco|Torreón|MX|189
TRD|Trondheim Airport, Værnes|Trondheim|NO|85
TRE|Tiree|Balemartine, Argyll and Bute|GB|75
TRF|Sandefjord Airport, Torp|Sandefjord(Torp)|NO|85
TRG|Tauranga|Tauranga|NZ|221
TRI|Tri-Cities Regional TN/VA|Blountville|US|1
TRK|Juwata International Airport / Suharnoko Harbani AFB|Tarakan|ID|199
TRM|Jacqueline Cochran|Palm Springs|US|4
TRN|Turin|Caselle Torinese (TO)|IT|146
TRO|Taree|Taree|AU|12
TRQ|Tarauacá|Tarauacá|BR|274
TRR|China Bay|Trincomalee|LK|23
TRS|Trieste|Ronchi dei Legionari/Trieste|IT|146
TRT|Toraja|Toraja|ID|199
TRU|Capitán FAP Carlos Martínez de Pinillos|Trujillo|PE|287
TRV|Thiruvananthapuram|Thiruvananthapuram|IN|145
TRW|Bonriki|South Tarawa|KI|210
TRZ|Tiruchirappalli|Tiruchirappalli|IN|145
TSA|Taipei Songshan|Taipei (Songshan)|TW|248
TSB|Tsumeb|Tsumeb|NA|93
TSF|Treviso|Treviso (TV)|IT|146
TSJ|Tsushima|Tsushima|JP|249
TSM|Taos|Taos|US|148
TSN|Tianjin Binhai|Tianjin|CN|14
TSR|Timișoara Traian Vuia|Timişoara|RO|175
TSS|East 34th Street Heliport|New York|US|1
TST|Trang|Trang|TH|155
TSV|Townsville Airport / RAAF Base Townsville|Townsville|AU|13
TTA|Tan Tan|Tan Tan|MA|124
TTC|Las Breas|Taltal|CL|283
TTD|Portland Troutdale|Portland|US|4
TTE|Sultan Babullah|Ternate|ID|58
TTG|General Enrique Mosconi|Tartagal|AR|257
TTH|Thumrait Air Base|Thumrait|OM|228
TTJ|Tottori Sand Dunes Conan|Tottori|JP|249
TTN|Trenton Mercer|Ewing Township|US|1
TTS|Tsaratanana|Tsaratanana|MG|110
TTT|Taitung|Taitung City|TW|248
TTU|Sania Ramel|Tétouan|MA|124
TTW|Tissa Tank Waterdrome|Tissamaharama|LK|23
TUA|Lieutenant Colonel Luis A. Mantilla|Tulcán|EC|38
TUB|Tubuai||PF|216
TUC|Teniente Benjamín Matienzo|San Miguel de Tucumán|AR|261
TUD|Tambacounda|Tambacounda|SN|130
TUF|Tours Val de Loire|Tours, Indre-et-Loire|FR|161
TUG|Tuguegarao|Tuguegarao City|PH|251
TUI|Turaif Domestic|Turaif|SA|225
TUK|Turbat|Turbat|PK|230
TUL|Tulsa|Tulsa|US|147
TUM|Tumut|Tumut|AU|12
TUN|Tunis Carthage|Tunis|TN|66
TUO|Taupo|Taupo|NZ|221
TUP|Tupelo|Tupelo|US|147
TUR|Tucuruí|Tucuruí|BR|268
TUS|Tucson|Tucson|US|151
TUU|Prince Sultan bin Abdulaziz|Tabuk|SA|225
TUV|Tucupita|Tucupita|VE|289
TVC|Cherry Capital|Traverse City|US|42
TVF|Thief River Falls|Thief River Falls|US|147
TVL|Lake Tahoe|South Lake Tahoe|US|4
TVS|Tangshan Sannühe|Tangshan (Fengrun)|CN|14
TVT|Tashkent-Khumo|Tashkent|UZ|348
TVU|Matei|Matei|FJ|207
TVY|Dawei|Dawei|MM|358
TWA|Twin Hills|Twin Hills|US|5
TWC|Tumxuk Tangwangcheng|Tumxuk|CN|37
TWF|Joslin Field Magic Valley|Twin Falls|US|150
TWT|Sanga Sanga|Bongao|PH|252
TWU|Tawau|Tawau|MY|252
TWZ|Pukaki|Twitzel|NZ|221
TXC|Orsha Airport - Balbasovo Air Base|Orsha|BY|29
TXE|Rembele|Takengon|ID|144
TXK|Texarkana Regional Airport (Webb Field)|Texarkana|US|147
TXN|Huangshan Tunxi|Huangshan|CN|14
TYB|Tibooburra||AU|12
TYF|Torsby|Torsby|SE|86
TYL|Captain Victor Montes Arias|Talara|PE|287
TYM|Staniel Cay|Staniel Cay|BS|27
TYN|Taiyuan Wusu|Taiyuan|CN|14
TYR|Tyler Pounds|Tyler|US|147
TYS|McGhee Tyson|Knoxville/Maryville|US|1
TZA|Sir Barry Bowen|Belize City|BZ|31
TZL|Tuzla|Dubrave Gornje|BA|174
TZN|Congo Town|Andros|BS|27
TZX|Trabzon|Trabzon|TR|163
UAB|İncirlik Air Base|Sarıçam|TR|163
UAH|Ua Huka|Ua Huka|PF|218
UAI|Commander in Chief of FALINTIL, Kay Rala Xanana Gusmão,|Suai|TL|199
UAK|Narsarsuaq|Narsarsuaq|GL|19
UAM|Andersen Air Force Base|Yigo|GU|238
UAP|Ua Pou|Ua Pou|PF|218
UAQ|Domingo Faustino Sarmiento|San Juan|AR|262
UAR|Bouarfa|Bouarfa|MA|124
UBA|Mário de Almeida Franco|Uberaba|BR|269
UBB|Mabuiag Island|Mabuiag Island|AU|13
UBJ|Yamaguchi Ube|Ube|JP|249
UBN|Ulaanbaatar Chinggis Khaan|Ulaanbaatar (Sergelen)|MN|374
UBP|Ubon Ratchathani|Ubon Ratchathani|TH|155
UCB|Ulanqab Jining|Ulanqab|CN|14
UCT|Ukhta|Ukhta|RU|73
UDE|Volkel Air Base|Uden|NL|80
UDI|Ten. Cel. Aviador César Bombonato|Uberlândia|BR|269
UDJ|Uzhhorod|Uzhhorod|UA|335
UDR|Maharana Pratap|Udaipur|IN|145
UEL|Quelimane|Quelimane|MZ|17
UEO|Kumejima|Kumejima|JP|249
UET|Quetta|Quetta|PK|230
UFA|Ufa|Ufa|RU|344
UGA|Bulgan|Bulgan|MN|374
UGC|Urgench|Urgench|UZ|349
UGI|San Juan /Uganik/ Seaplane Base|San Juan|US|5
UGO|Uige|Uige|AO|96
UGU|Bilorai|Bilogai|ID|58
UHE|Kunovice|Uherské Hradiště|CZ|166
UIB|El Caraño|Quibdó|CO|38
UIH|Phu Cat|Quy Nohn|VN|356
UII|Utila|Utila Island|HN|186
UIN|Quincy Regional Airport Baldwin Field|Quincy|US|147
UIO|Mariscal Sucre|Quito|EC|285
UIP|Quimper-Cornouaille|Quimper/Pluguffan|FR|161
UIT|Jaluit|Jabor Jaluit Atoll|MH|0
UJE|Ujae Atoll|Ujae Atoll|MH|0
UKB|Kobe|Kobe|JP|249
UKE|Utkela|Bhawanipatna|IN|145
UKG|Ust-Kuyga|Ust-Kuyga|RU|62
UKI|Ukiah|Ukiah|US|4
UKK|Oskemen|Ust-Kamenogorsk (Oskemen)|KZ|314
UKS|Sevastopol International Airport / Belbek Air Base|Sevastopol|UA|334
UKX|Ust-Kut|Ust-Kut|RU|253
ULA|Capitan D Daniel Vazquez|San Julian|AR|265
ULD|Prince Mangosuthu Buthelezi|Ulundi|ZA|94
ULG|Ölgii Mongolei|Ölgii|MN|337
ULH|Al-Ula|Al-Ula|SA|225
ULK|Lensk|Lensk|RU|324
ULN|Buyant-Ukhaa|Ulaanbaatar|MN|374
ULO|Ulaangom|Ulaangom|MN|375
ULP|Quilpie||AU|13
ULQ|Heriberto Gíl Martínez|Tuluá|CO|38
ULU|Gulu|Gulu|UG|141
ULV|Ulyanovsk Baratayevka|Ulyanovsk|RU|350
ULY|Ulyanovsk Vostochny|Cherdakly|RU|73
ULZ|Donoi|Uliastai|MN|375
UMB|Kalumbila|Kalumbila|ZM|105
UMD|Uummannaq Heliport|Uummannaq|GL|19
UME|Umeå|Umeå|SE|86
UMS|Ust-Maya|Ust-Maya|RU|327
UMU|Orlando de Carvalho|Umuarama|BR|269
UNA|Una-Comandatuba|Una|BR|26
UND|Kunduz|Kunduz|AF|223
UNG|Kiunga|Kiunga|PG|15
UNI|Union Island|Union Island|VC|300
UNK|Unalakleet|Unalakleet|US|5
UNN|Ranong|Ranong|TH|155
UOL|Buol - Pogogul|Buol|ID|199
UOX|University Oxford|Oxford|US|147
UPB|Playa Baracoa|Havana|CU|204
UPG|Sultan Hasanuddin|Makassar|ID|199
UPL|Upala|Upala|CR|201
UPN|Uruapan - Licenciado y General Ignacio Lopez Rayon|Uruapan|MX|188
URA|Manshuk Mametova|Uralsk|KZ|317
URC|Ürümqi Tianshan|Ürümqi|CN|37
URE|Kuressaare|Kuressaare|EE|70
URG|Rubem Berta|Uruguaiana|BR|269
URJ|Uray|Uray|RU|344
URO|Rouen Vallée de Seine|Boos|FR|161
URS|Kursk East|Kursk|RU|73
URT|Surat Thani|Surat Thani|TH|155
URY|Gurayat Domestic|Gurayat|SA|137
USA|Concord-Padgett|Concord|US|1
USH|Ushuaia - Malvinas Argentinas|Ushuaia|AR|267
USJ|Usharal|Usharal|KZ|314
USK|Usinsk|Usinsk|RU|73
USM|Samui|Na Thon (Ko Samui Island)|TH|155
USN|Ulsan|Ulsan|KR|250
USQ|Uşak|Uşak|TR|163
USR|Ust-Nera|Ust-Nera|RU|326
UST|Northeast Florida|St Augustine|US|1
USU|Francisco B. Reyes (Busuanga)|Coron|PH|251
UTH|Udon Thani|Udon Thani|TH|155
UTI|Utti Air Base|Utti / Valkeala|FI|72
UTK|Utirik|Utirik Island|MH|0
UTN|Upington|Upington|ZA|94
UTO|Indian Mountain LRRS|Utopia Creek|US|5
UTP|U-Tapao–Rayong–Pattaya|Rayong|TH|155
UTS|Ust-Tsylma|Ust-Tsylma|RU|73
UTT|K. D. Matanzima|Mthatha|ZA|94
UTW|Queenstown|Queenstown|ZA|94
UUA|Bugulma|Bugulma|RU|73
UUD|Baikal|Ulan Ude|RU|253
UUN|Baruun Urt||MN|376
UUS|Yuzhno-Sakhalinsk|Yuzhno-Sakhalinsk|RU|329
UVE|Ouvéa|Ouvéa|NC|220
UVF|Hewanorra|Vieux Fort|LC|303
UVI|José Cleto|União da Vitória|BR|269
UYL|Nyala|Nyala|SD|143
UYN|Yulin Yuyang|Yulin|CN|14
UYU|Joya Andina|Quijarro|BO|290
UZC|Ponikve|Stapari|RS|24
UZR|Urzhar|Urzhar|KZ|314
UZU|Curuzu Cuatia|Curuzu Cuatia|AR|255
VAA|Vaasa|Vaasa|FI|72
VAD|Moody Air Force Base|Valdosta|US|1
VAF|Valence-Chabeuil|Chabeuil, Drôme|FR|161
VAG|Major Brigadeiro Trompowsky|Varginha|BR|269
VAI|Vanimo|Vanimo|PG|15
VAK|Chevak|Chevak|US|2
VAL|Valença|Valença|BR|26
VAM|Villa International Airport Maamigili|Maamigili|MV|111
VAN|Van Ferit Melen|Van|TR|163
VAO|Suavanao|Suavanao|SB|8
VAQ|Vanavara|Vanavara|RU|254
VAR|Varna|Varna|BG|18
VAS|Sivas Nuri Demirağ|Sivas|TR|163
VAV|Vava'u|Vava'u Island|TO|208
VAW|Vardø Airport, Svartnes|Vardø|NO|85
VBG|Vandenberg Space Force Base|Lompoc|US|4
VBS|Brescia Gabriele d'Annunzio|Montichiari (BS)|IT|146
VBV|Vanua Balavu|Vanua Balavu|FJ|207
VBY|Visby|Visby|SE|86
VCA|Can Tho|Can Tho|VN|356
VCE|Venice Marco Polo|Venezia (VE)|IT|146
VCL|Chu Lai|Tam Nghĩa|VN|356
VCP|Viracopos|Campinas|BR|269
VCS|Con Dao|Con Dao|VN|356
VCT|Victoria|Victoria|US|147
VDC|Glauber de Andrade Rocha|Vitória da Conquista|BR|26
VDE|El Hierro|El Hierro Island|ES|123
VDH|Dong Hoi|Dong Hoi|VN|155
VDM|Gobernador Castello|Viedma / Carmen de Patagones|AR|257
VDO|Van Don|Van Don|VN|155
VDP|Valle de La Pascua||VE|289
VDR|Villa Dolores|Villa Dolores|AR|255
VDS|Vadsø|Vadsø|NO|85
VDZ|Valdez Pioneer Field|Valdez|US|5
VEE|Venetie|Venetie|US|5
VEL|Vernal|Vernal|US|148
VEO|Severo-Yeniseysk|Severo-Yeniseysk|RU|254
VER|General Heriberto Jara|Veracruz|MX|188
VEY|Vestmannaeyjar|Vestmannaeyjar|IS|22
VFA|Victoria Falls|Victoria Falls|ZW|116
VGA|Vijayawada|Vijayawada|IN|145
VGD|Vologda|Vologda|RU|73
VGO|Vigo|Vigo|ES|160
VGT|North Las Vegas|Las Vegas|US|4
VHC|Saurimo|Saurimo|AO|96
VHM|Vilhelmina South Lapland|Vilhelmina|SE|86
VHV|Verkhnevilyuisk|Verkhnevilyuisk|RU|324
VHY|Vichy-Charmeil|Charmeil, Allier|FR|161
VIE|Vienna|Vienna|AT|170
VIG|Juan Pablo Pérez Alfonso|El Vigía|VE|289
VII|Vinh|Vinh|VN|155
VIJ|Virgin Gorda|Spanish Town|VG|312
VIL|Dakhla|Dakhla|EH|129
VIN|Vinnytsia/Gavyryshivka|Vinnitsa|UA|332
VIP|Payerne Air Base|Payerne|CH|176
VIR|Virginia|Durban|ZA|94
VIS|Visalia|Visalia|US|4
VIT|Vitoria|Alava|ES|160
VIX|Eurico de Aguiar Salles|Vitória|BR|269
VIY|Vélizy-Villacoublay Air Base|Vélizy-Villacoublay, Yvelines|FR|161
VJB|Xai-Xai Chongoene|Xai-Xai|MZ|17
VKG|Rach Gia|Rach Gia|VN|356
VKO|Vnukovo|Moscow|RU|73
VKT|Vorkuta|Vorkuta|RU|73
VKV|Vaskovo|Arkhangelsk|RU|73
VLC|Valencia|Valencia|ES|160
VLD|Valdosta|Valdosta|US|1
VLG|Villa Gesell|Villa Gesell|AR|256
VLI|Bauerfield|Port Vila|VU|219
VLL|Valladolid|Valladolid|ES|160
VLM|Teniente Coronel Rafael Pabón|Villamontes|BO|290
VLN|Arturo Michelena|Valencia|VE|289
VLR|Vallenar|Vallenar|CL|283
VLS|Valesdir|Epi Island|VU|219
VLU|Velikiye Luki|Velikiye Luki|RU|73
VLV|Dr. Antonio Nicolás Briceño|Valera|VE|289
VLY|Anglesey|Angelsey|GB|75
VME|Villa Reynolds|Villa Mercedes|AR|263
VMI|Aeropuerto Nacional Doctor Juan Plate|Puerto Vallemi|PY|273
VMU|Baimuru|Baimuru|PG|15
VNE|Vannes-Meucon|Vannes/Meucon|FR|161
VNO|Vilnius|Vilnius|LT|92
VNS|Lal Bahadur Shastri|Varanasi|IN|145
VNX|Vilankulo|Vilanculo|MZ|17
VNY|Van Nuys|Van Nuys|US|4
VOD|Vodochody|Vodochody|CZ|166
VOG|Volgograd|Volgograd|RU|343
VOH|Vohemar|Vohemar|MG|110
VOK|Volk Field|Camp Douglas|US|147
VOL|Nea Anchialos National|Nea Anchialos|GR|162
VOZ|Voronezh|Voronezh|RU|73
VPE|Ngjiva Pereira|Ngiva|AO|96
VPN|Vopnafjörður|Vopnafjörður|IS|22
VPS|Destin-Fort Walton Beach|Valparaiso|US|147
VPY|Chimoio|Chimoio|MZ|17
VPZ|Porter County|Valparaiso|US|147
VQQ|Cecil|Jacksonville|US|1
VQS|Antonio Rivera Rodriguez|Vieques|PR|184
VRA|Juan Gualberto Gomez|Matanzas|CU|204
VRB|Vero Beach|Vero Beach|US|1
VRC|Virac|Virac|PH|251
VRE|Vredendal|Vredendal|ZA|94
VRK|Varkaus|Varkaus / Joroinen|FI|72
VRL|Vila Real|Vila Real|PT|172
VRN|Verona Villafranca Valerio Catullo|Caselle (VR)|IT|146
VRO|Kawama|Santa Marta|CU|204
VRU|Vryburg|Vryburg|ZA|94
VRY|Værøy Heliport|Værøy|NO|85
VSA|Carlos Rovirosa Pérez|Villahermosa|MX|188
VSE|Aerodromo Goncalves Lobato (Viseu Airport)|Viseu|PT|172
VST|Stockholm Västerås|Stockholm / Västerås|SE|86
VSV|Shravasti|Shravasti|IN|145
VTB|Vitebsk Vostochny|Vitebsk|BY|29
VTE|Wattay|Vientiane|LA|354
VTM|Nevatim Air Base|Beersheba|IL|167
VTN|Miller Field|Valentine|US|147
VTU|Hermanos Ameijeiras|Las Tunas|CU|204
VTZ|Alluri Sitarama Raju International Airport (Vizag)|Visakhapatnam|IN|145
VUP|Alfonso López Pumarejo|Valledupar|CO|38
VUS|Velikiy Ustyug|Velikiy Ustyug|RU|73
VVC|Vanguardia|Villavicencio|CO|38
VVI|Viru Viru|Santa Cruz|BO|290
VVO|Vladivostok|Artyom|RU|62
VVZ|Illizi Takhamalt|Illizi|DZ|55
VXC|Lichinga|Lichinga|MZ|17
VXE|Cesaria Evora|São Pedro|CV|133
VXO|Växjö Kronoberg|Växjö|SE|86
VYI|Vilyuisk|Vilyuisk|RU|324
WAA|Wales|Wales|US|2
WAE|Wadi Al Dawasir Domestic|Wadi Al Dawasir|SA|225
WAG|Wanganui|Wanganui|NZ|221
WAI|Ambalabe|Antsohihy|MG|110
WAT|Waterford|Waterford|IE|81
WAW|Warsaw Chopin|Warsaw|PL|88
WBB|Stebbins|Stebbins|US|2
WBG|Schleswig Air Base|Jagel|DE|69
WBM|Wapenamanda|Wapenamanda|PG|15
WBQ|Beaver|Beaver|US|5
WCH|Nuevo Chaitén|Chaitén|CL|283
WDH|Hosea Kutako|Windhoek|NA|93
WDN|Waldron Airstrip|Eastsound|US|4
WDS|Shiyan Wudangshan|Shiyan (Maojian)|CN|14
WEF|Weifang Nanyuan|Weifang (Kuiwen)|CN|14
WEH|Weihai Dashuibo|Weihai|CN|14
WEI|Weipa|Weipa|AU|13
WFB|Ketchikan Harbor Seaplane Base|Ketchikan|US|3
WFI|Fianarantsoa|Fianarantsoa|MG|110
WGA|Wagga Wagga|Forest Hill|AU|12
WGE|Walgett||AU|12
WGN|Shaoyang Wugang|Shaoyang (Wugang)|CN|14
WGP|Umbu Mehang Kunda|Waingapu-Sumba Island|ID|199
WGT|Wangaratta|Laceby|AU|363
WHA|Wuhu Xuanzhou|Wuhu|CN|14
WHB|Eliwana||AU|11
WHD|Hyder Seaplane Base|Hyder|US|6
WHK|Whakatāne|Whakatāne|NZ|221
WHN|Wuhan Hannan|Wuhan (Hannan)|CN|14
WIC|Wick John O'Groats|Wick|GB|75
WIE|Wiesbaden Army|Wiesbaden|DE|69
WIL|Nairobi Wilson|Nairobi|KE|140
WIN|Winton||AU|13
WIR|Wairoa|Wairoa|NZ|221
WJF|General William J Fox|Lancaster|US|4
WJR|Wajir|Wajir|KE|140
WJU|Wonju Airport / Hoengseong Air Base (K-38/K-46)|Wonju|KR|250
WKA|Wanaka|Wanaka|NZ|221
WKB|Warracknabeal||AU|363
WKF|Waterkloof Air Force Base|Pretoria|ZA|94
WKJ|Wakkanai|Wakkanai|JP|249
WKK|Aleknagik / New|Aleknagik|US|5
WLG|Wellington|Wellington|NZ|221
WLH|Walaha|Walaha|VU|219
WLK|Selawik|Selawik|US|5
WLS|Hihifo|Wallis Island|WF|212
WMC|Winnemucca|Winnemucca|US|4
WME|Mount Keith||AU|11
WMH|Ozark|Mountain Home|US|147
WMI|Warsaw Modlin|Nowy Dwór Mazowiecki|PL|88
WMN|Maroantsetra|Maroantsetra|MG|110
WMO|White Mountain|White Mountain|US|2
WMR|Mananara Nord|Mananara Nord|MG|110
WMT|Zunyi Maotai|Zunyi|CN|14
WMX|Wamena|Wamena|ID|58
WNA|Napakiak|Napakiak|US|2
WNH|Wenshan Puzhehei|Wenshan|CN|14
WNI|Matahora|Wangi-wangi Island|ID|199
WNN|Wunnumin Lake|Wunnumin Lake|CA|35
WNP|Naga|Naga|PH|251
WNR|Windorah|Windorah|AU|13
WNS|Shaheed Benazirabad|Nawabashah|PK|230
WNZ|Wenzhou Longwan|Wenzhou (Longwan)|CN|14
WOE|Woensdrecht Air Base|Hoogerheide|NL|80
WOL|Shellharbour|Albion Park Rail|AU|12
WOS|Wonsan Kalma|Wonsan|KP|373
WPC|Pincher Creek|Pincher Creek|CA|45
WPL|Powell Lake Seaplane Base|Powell River|CA|6
WPR|Captain Fuentes Martinez|Porvenir|CL|267
WPU|Guardia Marina Zañartu|Puerto Williams|CL|267
WRB|Robins Air Force Base|Warner Robins|US|1
WRE|Whangarei|Whangarei|NZ|221
WRG|Wrangell|Wrangell|US|6
WRI|Mc Guire Air Force Base|Wrightstown|US|1
WRL|Worland|Worland|US|148
WRO|Copernicus Wrocław|Wrocław|PL|88
WRT|Warton|Warton|GB|75
WRY|Westray|Westray, Orkney Islands|GB|75
WSI|Western Sydney International (Nancy-Bird Walton)|Sydney|AU|12
WSK|Chongqing Wushan|Wushan|CN|14
WSN|South Naknek Number 2|South Naknek|US|5
WST|Westerly State|Westerly|US|1
WSX|Westsound/WSX Seaplane Base|West Sound|US|4
WSZ|Westport|Westport|NZ|221
WTA|Tambohorano|Tambohorano|MG|110
WTB|Toowoomba Wellcamp|Toowoomba|AU|13
WTE|Wotje|Wotje|MH|0
WTK|Noatak|Noatak|US|2
WTL|Tuntutuliak|Tuntutuliak|US|2
WTN|RAF Waddington|Lincoln, Lincolnshire|GB|75
WTO|Wotho Island|Wotho Island|MH|0
WUA|Wuhai|Wuhai|CN|14
WUH|Wuhan Tianhe|Wuhan (Huangpi)|CN|14
WUN|Wiluna||AU|11
WUS|Nanping Wuyishan|Wuyishan|CN|14
WUT|Xinzhou Wutaishan|Xinzhou|CN|14
WUU|Wau|Wau|SS|139
WUX|Sunan Shuofang|Wuxi|CN|14
WUZ|Wuzhou Xijiang|Tangbu|CN|14
WVB|Walvis Bay|Walvis Bay(Rooikop)|NA|93
WVK|Manakara|Manakara|MG|110
WWA|Wasilla|Wasilla|US|5
WWD|Cape May County|Wildwood|US|1
WWK|Wewak|Wewak|PG|15
WWP|Whale Pass Seaplane Float Harbor Facility|Whale Pass|US|3
WWR|West Woodward|Woodward|US|147
WWT|Mertarvik|Mertarvik|US|2
WWY|West Wyalong|West Wyalong|AU|12
WXN|Wanzhou Wuqiao|Wanzhou|CN|14
WYA|Whyalla|Whyalla|AU|366
WYE|Yengema|Yengema|SL|126
WYS|Yellowstone|West Yellowstone|US|148
XAI|Xinyang Minggang|Xinyang|CN|14
XAP|Serafin Enoss Bertaso|Chapecó|BR|269
XBE|Bearskin Lake|Bearskin Lake|CA|36
XBJ|Birjand|Birjand|IR|224
XCH|Christmas Island|Flying Fish Cove|CX|371
XCR|Chalons Vatry|Chalons en Champagne|FR|161
XEN|Xingcheng Air Base|Huludao (Xingcheng)|CN|14
XEQ|Tasiusaq Heliport|Tasiusak|GL|19
XFN|Xiangyang Liuji|Xiangyang (Xiangzhou)|CN|14
XFW|Hamburg-Finkenwerder|Hamburg|DE|69
XGN|Xangongo|Xangongo|AO|96
XGR|Kangiqsualujjuaq (Georges River)|Kangiqsualujjuaq|CA|50
XIC|Xichang Qingshan|Liangshan (Xichang)|CN|14
XIJ|Ahmed Al Jaber Air Base|Ahmed Al Jaber AB|KW|225
XIL|Xilinhot|Xilinhot|CN|14
XIQ|Ilimanaq Heliport|Ilimanaq|GL|19
XIY|Xi'an Xianyang|Xi'an|CN|14
XJD|Al Udeid Air Base|Ar Rayyan|QA|233
XJM|Mangla|Mangla|PK|230
XKH|Xieng Khouang|Xieng Khouang|LA|354
XKS|Kasabonika|Kasabonika|CA|35
XLB|Lac Brochet|Lac Brochet|CA|44
XLS|Saint Louis|Saint Louis|SN|130
XMH|Manihi||PF|216
XMN|Xiamen Gaoqi|Xiamen|CN|14
XMS|Coronel E Carvajal|Macas|EC|285
XMY|Yam Island|Yam Island|AU|13
XNA|Northwest Arkansas National|Fayetteville/Springdale/Rogers|US|147
XNH|Ali Air Base|Nasiriyah|IQ|231
XNN|Xining Caojiabao|Haidong (Huzhu Tu Autonomous County)|CN|14
XPK|Pukatawagan|Pukatawagan|CA|36
XPL|Palmerola|Palmerola|HN|186
XQP|Quepos Managua|Quepos|CR|201
XQU|Qualicum Beach|Qualicum Beach|CA|6
XRH|RAAF Base Richmond|Richmond|AU|12
XRR|Ross River|Ross River|CA|48
XRY|Jerez|Jerez de la Frontera|ES|160
XSB|Sir Bani Yas|Sir Bani Yas|AE|229
XSC|South Caicos|South Caicos|TC|183
XSI|South Indian Lake|South Indian Lake|CA|36
XSP|Seletar|Seletar|SG|362
XTG|Thargomindah|Thargomindah|AU|13
XTL|Tadoule Lake|Tadoule Lake|CA|36
XUZ|Xuzhou Guanyin|Xuzhou|CN|14
XWA|Williston Basin|Williston|US|148
XYA|Yandina|Yandina|SB|8
YAA|Anahim Lake|Anahim Lake|CA|6
YAB|Arctic Bay|Arctic Bay|CA|41
YAC|Cat Lake|Cat Lake|CA|36
YAG|Fort Frances|Fort Frances|CA|36
YAH|La Grande-4|La Grande-4|CA|35
YAI|Gral. Bernardo O´Higgins|Chillan|CL|283
YAJ|Lyall Harbour Seaplane Base|Saturna Island|CA|6
YAK|Yakutat|Yakutat|US|236
YAL|Alert Bay|Alert Bay|CA|6
YAM|Sault Ste Marie|Sault Ste Marie|CA|42
YAO|Yaoundé Ville|Yaoundé|CM|101
YAP|Yap|Yap Island|FM|243
YAQ|Maple Bay Seaplane Base|Maple Bay|CA|6
YAS|Yasawa Island|Yasawa Island|FJ|207
YAT|Attawapiskat|Attawapiskat|CA|39
YAV|Mayne Island Seaplane Base|Miners Bay|CA|6
YAX|Wapekeka|Angling Lake|CA|35
YAY|St. Anthony|St. Anthony|CA|32
YAZ|Tofino / Long Beach|Tofino|CA|6
YBB|Kugaaruk|Kugaaruk|CA|43
YBC|Baie-Comeau|Baie-Comeau|CA|35
YBE|Uranium City|Uranium City|CA|44
YBF|Bamfield Seaplane Base|Bamfield|CA|6
YBG|Saguenay-Bagotville|Saguenay|CA|35
YBI|Black Tickle|Black Tickle|CA|32
YBK|Baker Lake|Baker Lake|CA|41
YBL|Campbell River|Campbell River|CA|6
YBP|Yibin Wuliangye|Yibin (Cuiping)|CN|14
YBQ|Telegraph Harbour Seaplane Base|Thetis Island|CA|6
YBR|Brandon|Brandon|CA|36
YBT|Brochet|Brochet|CA|44
YBV|Berens River|Berens River|CA|36
YBW|Bedwell Harbour Seaplane Base|Bedwell Harbour|CA|6
YBX|Lourdes-de-Blanc-Sablon|Blanc-Sablon|CA|32
YBY|Bonnyville|Bonnyville|CA|45
YCB|Cambridge Bay|Cambridge Bay|CA|43
YCC|Cornwall|Cornwall|CA|35
YCD|Nanaimo|Nanaimo|CA|6
YCE|Centralia / James T. Field Memorial|Huron Park|CA|35
YCG|West Kootenay|Castlegar|CA|6
YCH|Miramichi|Miramichi|CA|46
YCK|Tommy Kochon|Colville Lake|CA|34
YCL|Charlo|Charlo|CA|35
YCM|Niagara District|Niagara-on-the-Lake|CA|35
YCN|Cochrane|Cochrane|CA|35
YCO|Kugluktuk|Kugluktuk|CA|43
YCQ|Chetwynd|Chetwynd|CA|47
YCR|Cross Lake (Charlie Sinclair Memorial)|Cross Lake|CA|36
YCS|Chesterfield Inlet|Chesterfield Inlet|CA|41
YCU|Yuncheng Yanhu|Yuncheng (Yanhu)|CN|14
YCY|Clyde River|Clyde River|CA|39
YDA|Dawson City|Dawson City|CA|48
YDB|Burwash|Burwash Landing|CA|48
YDF|Deer Lake|Deer Lake|CA|32
YDG|Digby / Annapolis|Digby|CA|49
YDL|Dease Lake|Dease Lake|CA|6
YDN|Dauphin Barker|Dauphin|CA|36
YDO|Dolbeau-Saint-Felicien|Dolbeau-Saint-Felicien|CA|35
YDP|Nain|Nain|CA|33
YDQ|Dawson Creek|Dawson Creek|CA|47
YDT|Boundary Bay|Delta|CA|6
YDV|Bloodvein River|Bloodvein River|CA|36
YEC|Yecheon Airbase|Yecheon-ri|KR|250
YEG|Edmonton|Edmonton|CA|45
YEI|Bursa Yenişehir|Yenişehir|TR|163
YEK|Arviat|Arviat|CA|41
YEL|Elliot Lake|Elliot Lake|CA|35
YEM|Manitoulin East|Sheguiandah|CA|35
YEN|Estevan|Estevan|CA|44
YEO|RNAS Yeovilton|Yeovil, Somerset|GB|75
YER|Fort Severn|Fort Severn|CA|35
YES|Yasuj|Yasuj|IR|224
YET|Edson|Edson|CA|45
YEV|Inuvik Mike Zubko|Inuvik|CA|34
YEY|Magny|Amos|CA|35
YFA|Fort Albany|Fort Albany|CA|35
YFB|Iqaluit|Iqaluit|CA|39
YFC|Fredericton|Fredericton|CA|46
YFE|Forestville|Forestville|CA|35
YFH|Fort Hope|Fort Hope|CA|35
YFJ|Wekweètì|Wekweètì|CA|34
YFO|Flin Flon|Flin Flon|CA|36
YFR|Fort Resolution|Fort Resolution|CA|34
YFS|Fort Simpson|Fort Simpson|CA|34
YFX|St. Lewis (Fox Harbour)|St. Lewis|CA|32
YGG|Ganges Seaplane Base|Salt Spring Island|CA|6
YGH|Fort Good Hope|Fort Good Hope|CA|34
YGJ|Yonago Kitaro Airport / JASDF Miho Air Base|Yonago|JP|249
YGK|Kingston Norman Rogers|Kingston|CA|35
YGL|La Grande Rivière|La Grande Rivière|CA|35
YGM|Gimli Industrial Park|Gimli|CA|36
YGN|Greenway Sound Seaplane Base|Broughton Island|CA|6
YGO|Gods Lake Narrows|Gods Lake Narrows|CA|36
YGP|Michel-Pouliot Gaspé|Gaspé|CA|35
YGQ|Geraldton Greenstone|Geraldton|CA|35
YGR|Îles-de-la-Madeleine|Les Îles-de-la-Madeleine|CA|49
YGT|Igloolik|Igloolik|CA|39
YGV|Havre-Saint-Pierre|Havre-Saint-Pierre|CA|35
YGW|Kuujjuarapik|Kuujjuarapik|CA|35
YGX|Gillam|Gillam|CA|36
YGZ|Grise Fiord|Grise Fiord|CA|39
YHA|Port Hope Simpson|Port Hope Simpson|CA|33
YHD|Dryden|Dryden|CA|36
YHF|Hearst René Fontaine|Hearst|CA|35
YHG|Charlottetown|Charlottetown|CA|32
YHH|Campbell River Seaplane Base|Campbell River|CA|6
YHI|Ulukhaktok Holman|Ulukhaktok|CA|34
YHK|Gjoa Haven|Gjoa Haven|CA|43
YHM|John C. Munro Hamilton|Hamilton|CA|35
YHN|Hornepayne|Hornepayne|CA|35
YHO|Hopedale|Hopedale|CA|33
YHP|Poplar Hill|Poplar Hill|CA|36
YHR|Chevery|Chevery|CA|32
YHT|Haines Junction|Haines Junction|CA|48
YHU|Montréal / Saint-Hubert Metropolitan|Montréal|CA|35
YHY|Hay River / Merlyn Carter|Hay River|CA|34
YHZ|Halifax / Stanfield|Halifax|CA|49
YIA|Yogyakarta|Yogyakarta|ID|144
YIB|Atikokan|Atikokan|CA|36
YIC|Yichun Mingyueshan|Yichun|CN|14
YIE|Arxan Yi'ershi|Arxan|CN|14
YIF|St Augustin|St-Augustin|CA|40
YIG|Big Bay Seaplane Base|Stuart Island|CA|6
YIH|Yichang Sanxia|Yichang (Xiaoting)|CN|14
YIK|Ivujivik|Ivujivik|CA|39
YIN|Ili Yining|Ili (Yining / Ghulja)|CN|37
YIO|Pond Inlet|Pond Inlet|CA|39
YIP|Willow Run|Detroit|US|42
YIV|Island Lake|Island Lake|CA|36
YIW|Yiwu|Yiwu/Jinhua|CN|14
YJF|Fort Liard|Fort Liard|CA|34
YJN|St Jean|St Jean|CA|35
YJT|Stephenville Dymond|Stephenville|CA|32
YKA|Kamloops John Moose Fulton Field|Kamloops|CA|6
YKD|Kincardine|Kincardine|CA|35
YKF|Region of Waterloo|Breslau|CA|35
YKG|Kangirsuk|Kangirsuk|CA|39
YKH|Yingkou Lanqi|Yingkou (Laobian)|CN|14
YKJ|Key Lake|Key Lake|CA|44
YKL|Schefferville|Schefferville|CA|35
YKM|Yakima Air Terminal McAllister Field|Yakima|US|4
YKN|Chan Gurney|Yankton|US|147
YKO|Hakkari Yüksekova|Hakkari|TR|163
YKQ|Waskaganish|Waskaganish|CA|39
YKS|Platon Oyunsky Yakutsk|Yakutsk|RU|324
YKU|Chisasibi|Chisasibi|CA|39
YKX|Kirkland Lake|Kirkland Lake|CA|35
YKY|Kindersley|Kindersley|CA|44
YLC|Kimmirut|Kimmirut|CA|39
YLD|Chapleau|Chapleau|CA|35
YLE|Whatì|Whatì|CA|34
YLH|Lansdowne House|Lansdowne House|CA|35
YLI|Ylivieska|Ylivieska|FI|72
YLJ|Meadow Lake|Meadow Lake|CA|44
YLK|Barrie-Lake Simcoe|Barrie|CA|35
YLL|Lloydminster|Lloydminster|CA|45
YLR|Leaf Rapids|Leaf Rapids|CA|36
YLT|Alert|Alert|CA|50
YLW|Kelowna|Kelowna|CA|6
YLX|Yulin Fumian|Yulin|CN|14
YLY|Langley|Langley|CA|6
YMA|Mayo|Mayo|CA|48
YME|Matane|Matane|CA|35
YMF|Montague Harbour Seaplane Base|Galiano Island|CA|6
YMG|Manitouwadge|Manitouwadge|CA|35
YMH|Mary's Harbour|Mary's Harbour|CA|32
YMJ|Moose Jaw Air Vice Marshal C. M. McEwen|Moose Jaw|CA|44
YML|Charlevoix|Charlevoix|CA|35
YMM|Fort McMurray|Fort McMurray|CA|45
YMN|Makkovik|Makkovik|CA|33
YMO|Moosonee|Moosonee|CA|39
YMP|Port McNeill|Port McNeill|CA|6
YMS|Moises Benzaquen Rengifo|Yurimaguas|PE|287
YMT|Chapais|Chibougamau|CA|35
YMX|Montreal Mirabel|Montréal|CA|35
YNA|Natashquan|Natashquan|CA|40
YNB|Prince Abdulmohsen Bin Abdulaziz|Yanbu|SA|225
YNC|Wemindji|Wemindji|CA|39
YND|Ottawa / Gatineau|Gatineau|CA|35
YNE|Norway House|Norway House|CA|36
YNG|Youngstown Warren|Youngstown/Warren|US|1
YNJ|Yanji Chaoyangchuan|Yanji|CN|14
YNL|Points North Landing|Points North Landing|CA|44
YNM|Matagami|Matagami|CA|35
YNO|North Spirit Lake|North Spirit Lake|CA|36
YNP|Natuashish|Natuashish|CA|33
YNS|Nemiscau|Nemiscau|CA|35
YNT|Yantai Penglai|Yantai|CN|14
YNY|Yangyang|Gonghang-ro|KR|250
YNZ|Yancheng Nanyang|Yancheng (Tinghu)|CN|14
YOA|Ekati|Ekati|CA|34
YOC|Old Crow|Old Crow|CA|48
YOD|CFB Cold Lake|Cold Lake|CA|44
YOG|Ogoki Post|Ogoki Post|CA|35
YOH|Oxford House|Oxford House|CA|36
YOJ|High Level|High Level|CA|45
YOL|Yola|Yola|NG|64
YON|Yongphulla|Yongphulla|BT|357
YOO|Oshawa Executive|Oshawa|CA|35
YOP|Rainbow Lake|Rainbow Lake|CA|45
YOS|Owen Sound / Billy Bishop|Owen Sound|CA|35
YOW|Ottawa Macdonald-Cartier|Ottawa|CA|35
YPA|Prince Albert Glass Field|Prince Albert|CA|44
YPC|Paulatuk (Nora Aliqatchialuk Ruben)|Paulatuk|CA|34
YPE|Peace River|Peace River|CA|45
YPG|Portage-la-Prairie / Southport|Portage la Prairie|CA|36
YPH|Inukjuak|Inukjuak|CA|35
YPJ|Aupaluk|Aupaluk|CA|35
YPL|Pickle Lake|Pickle Lake|CA|36
YPM|Pikangikum|Pikangikum|CA|36
YPN|Port-Menier|Port-Menier|CA|35
YPO|Peawanuck|Peawanuck|CA|35
YPQ|Peterborough|Peterborough|CA|35
YPR|Prince Rupert|Prince Rupert|CA|6
YPS|Port Hawkesbury|Port Hawkesbury|CA|49
YPW|Powell River|Powell River|CA|6
YPX|Puvirnituq|Puvirnituq|CA|39
YPY|Fort Chipewyan|Fort Chipewyan|CA|45
YPZ|Burns Lake|Burns Lake|CA|6
YQA|Muskoka|Gravenhurst|CA|35
YQB|Quebec Jean Lesage|Quebec|CA|35
YQC|Quaqtaq|Quaqtaq|CA|39
YQD|The Pas|The Pas|CA|36
YQF|Red Deer|Springbrook|CA|45
YQG|Windsor|Windsor|CA|35
YQH|Watson Lake|Watson Lake|CA|48
YQI|Yarmouth|Yarmouth|CA|49
YQK|Kenora|Kenora|CA|36
YQL|Lethbridge County|Lethbridge|CA|45
YQM|Greater Moncton Roméo LeBlanc|Moncton|CA|49
YQN|Nakina|Nakina|CA|35
YQQ|Comox Valley International Airport / CFB Comox|Comox|CA|6
YQR|Regina|Regina|CA|44
YQS|St Thomas|St Thomas|CA|35
YQT|Thunder Bay|Thunder Bay|CA|51
YQU|Grande Prairie|Grande Prairie|CA|45
YQV|Yorkton|Yorkton|CA|44
YQW|North Battleford|North Battleford|CA|44
YQX|Gander|Gander|CA|32
YQY|Sydney / J.A. Douglas McCurdy|Sydney|CA|52
YQZ|Quesnel|Quesnel|CA|6
YRA|Rae Lakes|Gamètì|CA|34
YRB|Resolute Bay|Resolute Bay|CA|41
YRF|Cartwright|Cartwright|CA|33
YRG|Rigolet|Rigolet|CA|33
YRI|Rivière-du-Loup|Rivière-du-Loup|CA|35
YRJ|Roberval|Roberval|CA|35
YRL|Red Lake|Red Lake|CA|36
YRO|Ottawa / Rockcliffe|Ottawa|CA|35
YRQ|Trois-Rivières|Trois-Rivières|CA|35
YRS|Red Sucker Lake|Red Sucker Lake|CA|36
YRT|Rankin Inlet|Rankin Inlet|CA|41
YRV|Revelstoke|Revelstoke|CA|6
YSB|Sudbury|Sudbury|CA|35
YSC|Sherbrooke|Sherbrooke|CA|35
YSF|Stony Rapids|Stony Rapids|CA|44
YSG|Lutselk'e|Lutselk'e|CA|34
YSH|Smiths Falls-Montague (Russ Beach)|Smiths Falls|CA|35
YSJ|Saint John|Saint John|CA|46
YSK|Sanikiluaq|Sanikiluaq|CA|39
YSL|Saint-Léonard|Saint-Léonard|CA|46
YSM|Fort Smith|Fort Smith|CA|34
YSN|Shuswap|Salmon Arm|CA|6
YSO|Postville|Postville|CA|33
YSP|Marathon|Marathon|CA|35
YSQ|Songyuan Chaganhu|Qian Gorlos Mongol Autonomous County|CN|14
YST|St. Theresa Point|St. Theresa Point|CA|36
YSU|Summerside|Slemon Park|CA|49
YSY|Sachs Harbour (David Nasogaluak Jr. Saaryuaq)|Sachs Harbour|CA|34
YTA|Pembroke|Pembroke|CA|35
YTD|Thicket Portage|Thicket Portage|CA|36
YTE|Cape Dorset|Kinngait|CA|39
YTF|Alma|Alma|CA|35
YTG|Sullivan Bay Seaplane Base|Sullivan Bay|CA|6
YTH|Thompson|Thompson|CA|36
YTL|Big Trout Lake|Big Trout Lake|CA|35
YTM|Mont-Tremblant|La Macaza|CA|35
YTP|Tofino Harbour Seaplane Base|Tofino|CA|6
YTQ|Tasiujaq|Tasiujaq|CA|35
YTR|CFB Trenton|Trenton|CA|35
YTS|Victor M. Power|Timmins|CA|35
YTW|Yutian Wanfang|Hotan (Yutian)|CN|14
YTY|Yangzhou Taizhou|Yangzhou|CN|14
YTZ|Billy Bishop Toronto City|Toronto|CA|35
YUA|Yuanmou Air Base|Chuxiong (Yuanmou)|CN|14
YUD|Umiujaq|Umiujaq|CA|35
YUL|Montreal / Pierre Elliott Trudeau|Montréal|CA|35
YUM|Yuma International Airport / Marine Corps Air Station Yuma|Yuma|US|151
YUS|Yushu Batang|Yushu (Batang)|CN|14
YUT|Naujaat|Repulse Bay|CA|41
YUX|Hall Beach|Sanirajak|CA|39
YUY|Rouyn Noranda|Rouyn-Noranda|CA|35
YVB|Bonaventure|Bonaventure|CA|46
YVC|La Ronge|La Ronge|CA|44
YVE|Vernon|Vernon|CA|6
YVM|Qikiqtarjuaq|Qikiqtarjuaq|CA|50
YVO|Val-d'Or|Val-d'Or|CA|35
YVP|Kuujjuaq|Kuujjuaq|CA|35
YVQ|Norman Wells|Norman Wells|CA|34
YVR|Vancouver|Vancouver|CA|6
YVV|Wiarton|Wiarton|CA|35
YVZ|Deer Lake|Deer Lake|CA|36
YWB|Kangiqsujuaq (Wakeham Bay)|Kangiqsujuaq|CA|35
YWG|Winnipeg / James Armstrong Richardson|Winnipeg|CA|36
YWH|Victoria Harbour Seaplane Base|Victoria|CA|6
YWJ|Déline|Déline|CA|34
YWK|Wabush|Wabush|CA|33
YWL|Williams Lake|Williams Lake|CA|6
YWM|Williams Harbour|Williams Harbour|CA|32
YWP|Webequie|Webequie|CA|35
YWS|Green Lake Water|Whistler|CA|6
YWY|Wrigley|Wrigley|CA|34
YXC|Canadian Rockies|Cranbrook|CA|45
YXE|Saskatoon John G. Diefenbaker|Saskatoon|CA|44
YXH|Medicine Hat|Medicine Hat|CA|45
YXJ|Fort St John / North Peace|Fort Saint John|CA|47
YXK|Rimouski|Rimouski|CA|35
YXL|Sioux Lookout|Sioux Lookout|CA|36
YXN|Whale Cove|Whale Cove|CA|41
YXP|Pangnirtung|Pangnirtung|CA|50
YXQ|Beaver Creek|Beaver Creek|CA|5
YXR|Earlton (Timiskaming Regional)|Earlton|CA|35
YXS|Prince George (International)|Prince George|CA|6
YXT|Northwest Regional Airport Terrace-Kitimat|Terrace|CA|6
YXU|London|London|CA|35
YXX|Abbotsford|Abbotsford|CA|6
YXY|Whitehorse / Erik Nielsen|Whitehorse|CA|48
YXZ|Wawa|Wawa|CA|35
YYA|Yueyang Sanhe|Yueyang (Yueyanglou)|CN|14
YYB|North Bay Jack Garland|North Bay|CA|35
YYC|Calgary|Calgary|CA|45
YYD|Smithers|Smithers|CA|6
YYE|Fort Nelson|Fort Nelson|CA|53
YYF|Penticton|Penticton|CA|6
YYG|Charlottetown|Charlottetown|CA|49
YYH|Taloyoak|Taloyoak|CA|43
YYJ|Victoria|Victoria|CA|6
YYL|Lynn Lake|Lynn Lake|CA|36
YYN|Swift Current|Swift Current|CA|44
YYQ|Churchill|Churchill|CA|36
YYR|Goose Bay|Goose Bay|CA|33
YYT|St. John's|St. John's|CA|32
YYU|Kapuskasing|Kapuskasing|CA|35
YYW|Armstrong|Armstrong|CA|35
YYY|Mont Joli|Mont-Joli|CA|35
YYZ|Toronto Pearson|Toronto|CA|35
YZA|Cache Creek-Ashcroft|Cache Creek|CA|6
YZE|Gore Bay Manitoulin|Gore Bay|CA|35
YZF|Yellowknife|Yellowknife|CA|34
YZG|Salluit|Salluit|CA|39
YZH|Slave Lake|Slave Lake|CA|45
YZP|Sandspit|Sandspit|CA|6
YZR|Chris Hadfield|Sarnia|CA|35
YZS|Coral Harbour|Coral Harbour|CA|54
YZT|Port Hardy|Port Hardy|CA|6
YZU|Whitecourt|Whitecourt|CA|45
YZV|Sept-Îles|Sept-Îles|CA|35
YZW|Teslin|Teslin|CA|48
YZX|CFB Greenwood|Greenwood|CA|49
YZY|Zhangye Ganzhou|Zhangye (Ganzhou)|CN|14
YZZ|Trail|Trail|CA|4
ZAD|Zadar|Zadar|HR|159
ZAG|Zagreb Franjo Tuđman|Velika Gorica|HR|159
ZAH|Zahedan|Zahedan|IR|224
ZAL|Pichoy|Valdivia|CL|283
ZAM|Zamboanga|Zamboanga|PH|251
ZAO|Cahors Lalbenque|Cahors|FR|161
ZAR|Zaria|Zaria|NG|64
ZAT|Zhaotong Zhaoyang|Zhaotong|CN|14
ZAZ|Zaragoza|Zaragoza|ES|160
ZBF|Bathurst|South Tetagouche|CA|46
ZBM|Bromont (Roland Désourdy)|Bromont|CA|35
ZBR|Chabahar Konarak|Konarak|IR|224
ZCL|General Leobardo C. Ruiz|Zacatecas|MX|188
ZCO|La Araucanía|Temuco|CL|283
ZDY|Delma|Delma Island|AE|229
ZEC|Secunda|Secunda|ZA|94
ZEL|Bella Bella (Campbell Island)|Bella Bella|CA|6
ZEM|Eastmain River|Eastmain River|CA|35
ZER|Ziro|Ziro|IN|145
ZFA|Faro|Faro|CA|48
ZFD|Fond-du-Lac|Fond-du-Lac|CA|44
ZFL|Zhaosu Tianma|Zhaosu|CN|37
ZFM|Fort Mcpherson|Fort Mcpherson|CA|48
ZFN|Tulita|Tulita|CA|34
ZGF|Grand Forks|Grand Forks|CA|6
ZGI|Gods River|Gods River|CA|36
ZGS|La Romaine|Le Golfe-du-Saint-Laurent|CA|40
ZGU|Gaua Island|Gaua Island|VU|219
ZHA|Zhanjiang Wuchuan|Zhanjiang|CN|14
ZHY|Zhongwei Shapotou|Zhongwei (Shapotou)|CN|14
ZIA|Zhukovsky|Moscow|RU|73
ZIC|Victoria|Victoria|CL|283
ZIG|Ziguinchor|Ziguinchor|SN|130
ZIH|Ixtapa-Zihuatanejo|Ixtapa|MX|188
ZIX|Zhigansk|Zhigansk|RU|324
ZJG|Jenpeg|Jenpeg|CA|36
ZJN|Swan River|Swan River|CA|36
ZKE|Kashechewan|Kashechewan|CA|35
ZKP|Zyryanka|Zyryanka|RU|325
ZLO|Playa de Oro|Manzanillo|MX|188
ZLT|La Tabatière|La Tabatière|CA|40
ZMT|Masset|Masset|CA|6
ZNA|Nanaimo Harbour Water|Nanaimo|CA|6
ZND|Zinder|Zinder|NE|65
ZNE|Newman|Newman|AU|11
ZNZ|Abeid Amani Karume|Zanzibar|TZ|118
ZOS|Cañal Bajo Carlos Hott Siebert|Osorno|CL|283
ZPB|Sachigo Lake|Sachigo Lake|CA|36
ZPC|Pucón|Pucon|CL|283
ZQN|Queenstown|Queenstown|NZ|221
ZQZ|Zhangjiakou Ningyuan|Zhangjiakou|CN|14
ZRH|Zürich|Zurich|CH|176
ZRI|Stevanus Rumbewas|Serui|ID|58
ZRJ|Round Lake (Weagamow Lake)|Round Lake|CA|36
ZSA|San Salvador|San Salvador|BS|27
ZSE|Saint-Pierre Pierrefonds|Saint-Pierre|RE|109
ZSJ|Sandy Lake|Sandy Lake|CA|36
ZST|Stewart|Stewart|CA|6
ZTB|Tête-à-la-Baleine|Tête-à-la-Baleine|CA|40
ZTH|Zakynthos International Airport Dionysios Solomos|Zakynthos|GR|162
ZTM|Shamattawa|Shamattawa|CA|36
ZTR|Zhytomyr|Zhytomyr|UA|332
ZTU|Zaqatala|Zaqatala|AZ|322
ZUC|Ignace|Ignace|CA|36
ZUH|Zhuhai Jinwan|Zhuhai (Jinwan)|CN|14
ZUM|Churchill Falls|Churchill Falls|CA|33
ZVA|Miandrivazo|Miandrivazo|MG|110
ZVK|Savannakhet||LA|354
ZWA|Andapa||MG|110
ZWL|Wollaston Lake|Wollaston Lake|CA|44
ZXT|Zabrat|Zabrat|AZ|16
ZYI|Zunyi Xinzhou|Zunyi|CN|14
ZYL|Osmany|Sylhet|BD|352
ZZU|Mzuzu|Mzuzu|MW|117
ZZV|Zanesville|Zanesville|US|1`;
