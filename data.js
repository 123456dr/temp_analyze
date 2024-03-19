var cleanedData = `t=0
t=78
t=35
t=78
t=37
t=80
h=0
h=12
h=34
h=78
h=35
h=78







`;
    const  myData= cleanedData.replace(/\n/g, ' '); // 移除所有換行符
    


// 正則表達式來匹配第一個 t 和 h 值
const firstTempMatch = myData.match(/t=(\d+)/);
const firstHumidMatch = myData.match(/h=(\d+)/);

let firstTemp, firstHumid;

// 如果匹配成功，則提取值
if (firstTempMatch) {
    firstTemp = parseInt(firstTempMatch[1]);
}

if (firstHumidMatch) {
    firstHumid = parseInt(firstHumidMatch[1]);
}

// 正則表達式來匹配最後一個 t 值
const lastTempMatch = myData.match(/t=(\d+)(?!.*t)/g);
const lastHumidMatch = myData.match(/h=(\d+)(?!.*h)/g);

let lastTemp, lastHumid;

// 如果匹配成功，則提取值
if (lastTempMatch) {
    lastTemp = parseInt(lastTempMatch.pop().split('=')[1]);
}

if (lastHumidMatch) {
    lastHumid = parseInt(lastHumidMatch.pop().split('=')[1]);
}

// 計算溫度和濕度變化量
const tempChange = lastTemp - firstTemp;
const humidChange = lastHumid - firstHumid;


