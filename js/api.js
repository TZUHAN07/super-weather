import fetch from 'node-fetch'
//apparent_temperature= AT; temperature= T; weather description= Wx;

var obj={ "天母棒球場":{"士林區":"61"},
"新莊棒球場":{"新莊區":"69"},
"桃園國際棒球場":{"中壢區":"05"},
"新竹棒球場":{"北區":"53"},
"臺中洲際棒球場":{"北屯區":"73"},
"臺中國立體大棒球場":{"北區":"73"},
"雲林斗六棒球場":{"斗六市":"25"},
"嘉義市立棒球場":{"東區":"57"},
"臺南市立棒球場":{"南區":"77"},
"高雄立德棒球場":{"前金區":"65"},
"澄清湖棒球場":{"鳥松區":"65"},
"中國信託公益園區棒球場":{"屏東市":"33"},
"屏東縣立棒球場":{"屏東市":"33"},
"宜蘭羅東運動公園棒球場":{"羅東鎮":"1"},
"花蓮縣立棒球場":{"花蓮市":"41"},
"臺東縣立棒球場":{"臺東市":"37"},
}
//select name of the baseball field
const baseball_field= document.querySelector()
const region=String(Object.keys(obj[baseball_field]))
const api_city=String(Object.values(obj[baseball_field]))
const api_city_week= (parseInt(api_city)+2).toLocaleString('en-US',{
    minimumIntegerDigits:2,
    useGrouping:false
})


//////逐3hr 
async function fetchWeather(api_city, region){
    let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-0${api_city}?Authorization=CWB-72A20779-A6B1-4C04-8C3C-4E22409C9C8A&locationName=${region}&elementName=T,AT,Wx`
    const response = await fetch(url);
    const ans = await response.json();
	const result= ans['records']['locations'][0]['location'][0]['weatherElement']
	for (let i=0; i<24; i++){
		const AT= result[1]['time'][i]['elementValue'][0]['value']
		const T= result[2]['time'][i]['elementValue'][0]['value']
		const Wx=result[0]['time'][i]['elementValue'][0]['value']
		const time_on_graph= result[0]['time'][i]['startTime'].split(" ")[1].split(":").reverse().slice(1).reverse().join(":")
		const starttime= result[0]['time'][i]['startTime'].split(" ")[1].split(":")[0]
		const date= result[0]['time'][i]['startTime'].split(" ")[0].split("-").slice(1).join("/")
		
	}
	
}
fetchWeather(api_city,region)

//////一週溫度
async function weeklyWeather(api_city_week, region){
    let url1= `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-0${api_city_week}?Authorization=CWB-72A20779-A6B1-4C04-8C3C-4E22409C9C8A&locationName=${region}&elementName=MaxT,MinT,Wx,MaxAT,MinAT`;
	const res = await fetch(url1);
    const outcome = await res.json();
	const rawData= outcome['records']['locations'][0]['location'][0]['weatherElement'];
	//高溫
	for (let j=1; j<14; j+=2){
		const MaxT= rawData[4]['time'][j]['elementValue'][0]['value'];
		const Wx= rawData[1]['time'][j]['elementValue'][0]['value'];
		const date= rawData[1]['time'][j]['startTime'].split(" ")[0].split("-").slice(1).join("/");
		console.log(MaxT)
	}
	//低溫
	for (let x=0; x<15; x+=2){
		const MinT= rawData[2]['time'][x]['elementValue'][0]['value'];
		const Wx= rawData[1]['time'][x]['elementValue'][0]['value'];
		console.log(MinT)
	}
	
	//體感高溫
	for(let y=1; y<14; y+=2){
		const MaxAT= rawData[0]['time'][y]['elementValue'][0]['value'];
		const Wx= rawData[1]['time'][y]['elementValue'][0]['value'];
		const date= rawData[1]['time'][y]['startTime'].split(" ")[0].split("-").slice(1).join("/");
	}
	//體感低溫
	for(let z=0; z<15; z+=2){
		const MinAT= rawData[3]['time'][z]['elementValue'][0]['value'];
		const Wx= rawData[1]['time'][z]['elementValue'][0]['value'];
	}


}
weeklyWeather(api_city_week,region)
