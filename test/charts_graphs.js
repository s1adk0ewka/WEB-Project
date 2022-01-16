function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}
//#region первый график тема Перенос социального взаимодействия
let perenosCanvas = document.getElementById('perenos-chart').getContext('2d');
let perenosConfig={
  type:"bar",
  data:{
    labels:[["Поддержать","бренд"],["Общение","в сети"],["Самореализация"], ["Рассказать", "о себе", "другим"], ["Опубликовать","ценный контент"]],
    datasets:[{
      backgroundColor:["blue","gray","black","#d48b0d","red"],
      data:[84,78,69,68,49]
    }
      
    ]},
    options: {
      scales:{
        y:{
          ticks:{
            callback: function (value) {
              return `${value}%`; 
            },
          },
        },
      },
      plugins: 
      {
          tooltip:{
              callbacks:{
                label: data => ` ${data.formattedValue}%`,
                title: (context) => {
                      return context[0].label.replaceAll(',',' ')
                  }
              },
          },
          title:{
              display:true,
              text: 'Почему люди делают публикации в соцсетях',
              font:{
                  size:25,
                  color: 'black'
                },
            },
            legend: {
                display: false,
            },
            datalabels:{
                color:"#FFF", 
                formatter: (value, context) =>{
                    return `${value}%`
                }
            }
        }
    },
    plugins:[ChartDataLabels]
};
let perenosChart = new Chart(perenosCanvas,perenosConfig);
//#endregion
//#region график с мессенджерами
const WhatsAppImage = new Image();
const FacebookImage = new Image();
const WeChatImage = new Image();
const QQImage = new Image();
const TelegramImage = new Image();
const SnapchatImage = new Image();
const DiscordImage = new Image();
const ViberImage = new Image();
const LineImage = new Image();
const SkypeImage = new Image();
WhatsAppImage.src='images/icons/WhatsApp.png';
FacebookImage.src='images/icons/Facebook.png';
WeChatImage.src='images/icons/WeChat.png';
QQImage.src='images/icons/QQ.png';
TelegramImage.src='images/icons/Telegram.png';
SnapchatImage.src='images/icons/Snapchat.png';
DiscordImage.src='images/icons/Discord.png';
ViberImage.src='images/icons/Viber.png';
LineImage.src='images/icons/Line.png';
SkypeImage.src='images/icons/Skype.png';

const iconsArray=[WhatsAppImage,FacebookImage,WeChatImage,QQImage,TelegramImage,SnapchatImage,DiscordImage,ViberImage,LineImage,SkypeImage];
const datapoints=[2000,1300,1200,648,500,433,300,260,250,50];
const barAvatar={
  id:'barAvatar',
  afterDatasetDraw(chart, args, options) {
    const { ctx, chartArea:{top, bottom, left, right, width, height}, scales:{x,y} } = chart;
    ctx.save();
    for(let i=0; i<datapoints.length;i++){
      ctx.drawImage(iconsArray[i], x.getPixelForValue(i)-(30/2),y.getPixelForValue(datapoints[i])-(40),30,30);
    }
  }
}
let msgCanvas = document.getElementById('messenger-chart').getContext('2d');
let msgConfig=
{
  type:"bar",
  data:{
    labels:["WhatsApp","Facebook","WeChat","QQ","Telegram","Snapchat","Discord","Viber","Line","Skype"],
    datasets:[{
      backgroundColor:["#00b248","#0171c3","#6ed142","#fd0002","#01b1f4","#ffff00","#b96bd9","#812ca5","#44af3b","#0078b8"],
      data:datapoints}
      
    ]
  },
    options: {
      layout:{
      },
      scales:{
        y:{
          max:2500,
          ticks:{
            callback: function (value) {
              if (value===0){
                return value;
              }
              return `${value}млн.`; 
            },
          },
        },
      },
      plugins: 
      {
        tooltip:{
          callbacks: {

            label: data => ` ${data.formattedValue}М`
        
          }        
        },
        title:{
          display:true,
          text: 'Количество пользователей мессенджеров за 2021 год',
          font:{
            size:25,
            color: 'black'
          }
        },
        legend: {
          display: false,
        },
        datalabels:{
          color:"#3b3b3b",
          formatter: (value, context) =>{
            return `${value}М`
          }
        }
      }
    },
    plugins:[barAvatar,ChartDataLabels]
  }; 
  let msgChart = new Chart(msgCanvas,msgConfig);
//#endregion
//#region график безопасности в тыртырнете
let safetyCanvas=document.getElementById('safety-chart').getContext('2d');
const safetyData = {
  labels: [
    'Цензура не нужна',
    'Затрудняюсь ответить',
    'Необходима цензура'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [20, 17, 63],
    backgroundColor: [
      '#ffd41a',
      '#ff4006',
      '#004387'
    ],
    hoverOffset: 4
  }]
};

// const legendMargin={
//   id:'legendMargin',
//   beforeInit(chart, legend, options) {
//     const fitValue=chart.legend.fit;
//     chart.legend.fit = function fit(){
//       fitValue.bind(chart.legend)();
//       return this.height += 20;
//     }
//   }
// };

const safetyConfig = {
  type: 'pie',
  data: safetyData,
  options:{
    plugins:{
      title:{
        font:{
          size:18
        },
        display:true,
        text:"Результаты всероссийского опроса «Левада-центра» относительно цензуры в Интернете",
        position:'top'
      },
      tooltip:{
        callbacks:{
          label: (context) => {
            return `${context.label}: ${context.parsed}%`;
          }
        },
      },
      legend:{
        padding:10,
        position:'right'
      },
      datalabels:{
        color:'#000',
        formatter: (value, context) =>{
          return `${value}%`
        }
      }
    }
  },
  plugins:[ChartDataLabels]
};
let safetyChart=new Chart(safetyCanvas,safetyConfig);
//#endregion
//#region диаграма пончик в разделе накопление и сложность восприятия
ponchikCanvas=document.getElementById('ponchik-chart').getContext('2d');
const ponchikData = {
  labels: [
    '2M просмотров',
    '$1.6M потрачено',
    '2M свайпнуто',
    '197.6M писем',
    '500 часов загружено',
    '5K скачиваний',
    '69M сообщений',
    '9K соединений',
    '695K историй',
    '28K подписчиков смотрят'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [1, 1, 1,1,1, 1, 1, 1,1,1],
    backgroundColor: [
      '#4d0b80',
      '#0f0f0f',
      '#fc3d83',
      '#03387f',
      '#fd0000',
      '#19cbff',
      '#4d0b80',
      '#0386e6',
      '#f09124',
      '#c00406'
    ],
    hoverOffset: 4,
    cutout:'60%'
  }]
};

const ponchikPlugin ={
  id:'ponchikPlugin',
  afterDatasetDraw(chart, args, options){
    const {ctx,chartArea:{top, bottom, left, right, width, height}}= chart;
    chart.data.datasets.forEach((dataset, i) =>{
      chart.getDatasetMeta(i).data.forEach((datapoint,index)=>{
        let{x,y}=datapoint.tooltipPosition();
        let halfWidth= width/2;
        let halfHeight = height/2;
        let xLine = x>=halfWidth?x+vw(5):x-vw(5);
        let yLine = y>=halfHeight?y+vw(5):y-vw(5);
        let extraLine = x >= halfWidth?vw(2.5):-vw(2.5);
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(xLine,yLine);
        ctx.lineTo(xLine+extraLine,yLine);
        ctx.strokeStyle = dataset.backgroundColor[index];
        ctx.stroke();
        const textWidth = ctx.measureText(chart.data.labels[index]).width;
        ctx.font='16px Arial';
        ctx.textAlign= x>= halfWidth?'left':'right';
        const offset= x>= halfWidth?10:-10;
        ctx.textBaseline='middle';
        ctx.fillStyle = dataset.backgroundColor[index];
        ctx.fillText(chart.data.labels[index], xLine + extraLine + offset, yLine);
        ctx.drawImage(imagesArray[index],x-20,y-20,45,45);
        
      })
    })
    // for(let i=0; i<ponchikData.length;i++){
    //   ctx.drawImage(imagesArray[i], x.getPixelForValue(i)-(30/2),y.getPixelForValue(ponchikData[i])-(40),30,30);
    // };
    ctx.drawImage(clock,width/2-25,height/2-25,150,150);
  }
};
const cart = new Image();
const clock = new Image();
const linked = new Image();
const insta = new Image();
const mail = new Image();
const msg = new Image();
const netflix = new Image();
const tiktok = new Image();
const tinder = new Image();
const twich = new Image();
const yt = new Image();
cart.src='images/minuta/корзина.png';
clock.src='images/minuta/часы.png';
linked.src='images/minuta/in.png';
insta.src='images/minuta/instagram.png';
mail.src='images/minuta/mail.png';
msg.src='images/icons/Facebook.png';
netflix.src='images/minuta/netflix.png';
tiktok.src='images/minuta/tiktok.png';
tinder.src='images/minuta/tinder.png';
twich.src='images/minuta/twich.png';
yt.src='images/minuta/youtube.png';
const imagesArray=[twich,cart,tinder,mail,yt,tiktok,msg,linked,insta,netflix];
const ponchikConfig = {
  type: 'doughnut',
  data: ponchikData,
  options:{
    layout:{
      padding:50
    },
    maintainAspectRatio:false,
    plugins:{
      title:{
        // padding: 110,
        display:false,
        text:'Минута в интернете в 2021 году',
        font:{
          size:16,
          color: 'black'
        }
      },
      legend:{
        display:false
      },
      tooltip: {
        enabled: false
      },
    }
  },
  plugins:[ponchikPlugin]
};

let ponchikChart = new Chart(ponchikCanvas, ponchikConfig);
//#endregion
//#region процент устройств
devicePercentCanvas=document.getElementById('device-percent-chart').getContext('2d');

devicePercentData=[56,40,3,1];
devicePercentLabels=['Мобильные телефоны', 'ПК и ноутбуки','Планшеты','Другие'];

const phone = new Image(30,30);
const laptop = new Image(30,30);
const tablet= new Image(30,30);
const other = new Image(30,30);
phone.src='images/dolya_ustroystv/смартфон рисунок.png';
laptop.src='images/dolya_ustroystv/ноутбук рисунок.png';
tablet.src='images/dolya_ustroystv/планшет рисунок.png';
other.src='images/dolya_ustroystv/геймпад рисунок2.png';

devicesImagesArray=[phone,laptop,tablet,other];

const devicePercentPlugin={
  id:'devicePercentPlugin',
  afterDatasetDraw(chart, args, options) {
    const { ctx, chartArea:{top, bottom, left, right, width, height}, scales:{x,y} } = chart;
    ctx.save();
    for(let i=0; i<devicePercentData.length;i++){
      ctx.drawImage(devicesImagesArray[i], x.getPixelForValue(i)-(30/2),y.getPixelForValue(devicePercentData[i])-(40),30,30);
    }
  }
}

devicePercentConfig={
  type:'bar',
  data:{
    labels:devicePercentLabels,
    datasets:[{
      data:devicePercentData,
      backgroundColor:[
        '#0081e2',
        '#fc9c01',
        '#ff110e',
        '#00c103'
      ],
      hoverOffset: 4
    }]
  },
  options:{
    layout:{
      // padding:20
    },
    scales:{
      y:{
        max:100,
        ticks:{
          callback: function (value) {
            return `${value}%`; 
          },
        }
      }
    },
    plugins:{
      tooltip:{
        callbacks: {
          label: data => ` ${data.formattedValue}%`
        }
      },
      legend:{
        display:false
      },
      datalabels:{
        color:"#3b3b3b",
          formatter: (value, context) =>{
            return `${value}%`
          }
      },
      title:{
        display:true,
        text:'Доля веб-трафика на устройстве за 2021 год',
        font:{
          color:'black',
          size:24
        }
      }
    },
  },
  plugins:[devicePercentPlugin,ChartDataLabels]
};
devicePercentChart= new Chart(devicePercentCanvas,devicePercentConfig);
//#endregion
//#region состояние интернета
digitalCanvas=document.getElementById('digital-chart').getContext('2d');
const inet = new Image();
const people = new Image();
const smartphone = new Image();
const msges = new Image();
inet.src='images/internet/интернет.png';
people.src='images/internet/люди.png';
smartphone.src='images/internet/смартфон рисунок.png';
msges.src='images/internet/сообщения.png';

digitalImages=[inet,people,smartphone,msges];

const digitalPlugin={
  id:'digitalPlugin',
  afterDatasetDraw(chart, args, options) {
    const { ctx, chartArea:{top, bottom, left, right, width, height}, scales:{x,y} } = chart;
    ctx.save();
    for(let i=0; i<devicePercentData.length;i++){
      ctx.drawImage(digitalImages[i], x.getPixelForValue(i)-(30/2),y.getPixelForValue(digitalData[i])-(40),30,30);
    }
  }
}

digitalData=[7.83,5.22,4.66,4.20];
digitalPercents=['урбанизация 56.4%','66.6% от населения','59.5% от населения','53.6% от населения'];
digitalLabels=[
  ['Население'],
  ['Уникальных', 'пользователей','смартфоном'],
  ['Пользователи', 'интернета'],
  ['Активные', 'пользователи','интернета']
];
digitalConfig={
  type:'bar',
  data:{
    labels:digitalLabels,
    datasets:[{
      data:digitalData,
      backgroundColor:[
        '#f01913',
        '#60c01e',
        '#1780df',
        '#fe9a00'
      ],
      hoverOffset: 4
    }]
  },
  options:{
    layout:{
      // padding:20
    },
    scales:{
      y:{
        max:10,
        ticks:{
          callback: function (value) {
            if (value===0) return value;
            return `${value} млрд.`; 
          },
        }
      }
    },
    plugins:{
      tooltip:{
        callbacks:{
          title: (context) => {
            return context[0].label.replaceAll(',',' ')
          },
          label: (context) =>{
            console.log(context);
            return `${context.raw} млрд, ${digitalPercents[context.dataIndex]}`
          },
          // afterBody: (context) => {
          //   return `${digitalPercents[context[0].dataIndex]}`
          // }
        }
      },
      legend:{
        display:false
      },
      datalabels:{
        color:"#3b3b3b",
          formatter: (value, context) =>{
            return `${value} млрд.`
          }
      },
      title:{
        display:true,
        text:'Состояние интернета',
        font:{
          color:'black',
          size:24
        }
      }
    },
  },
  plugins:[digitalPlugin,ChartDataLabels]
};

digitalChart= new Chart(digitalCanvas,digitalConfig);
//#endregion
//#region макс скорость
speedCanvas=document.getElementById('operators-speed-chart').getContext('2d');
speedData=[229.5,160.5,94.1,88.4];
speedLabels=["МегаФон","Вымпелком","МТС","Tele2"];
const megafon= new Image();
const vympel= new Image();
const mts= new Image();
const tele2= new Image();
megafon.src='images/operatory/мегафон.png';
vympel.src='images/operatory/вымпелком.png';
mts.src='images/operatory/мтс.png';
tele2.src='images/operatory/теле2.png';
const speedImages=[megafon,vympel,mts,tele2];
const speedPlugin={
  id:'speedPlugin',
  afterDatasetDraw(chart, args, options) {
    const { ctx, chartArea:{top, bottom, left, right, width, height}, scales:{x,y} } = chart;
    ctx.save();
    for(let i=0; i<devicePercentData.length;i++){
      ctx.drawImage(speedImages[i], x.getPixelForValue(i)-(30/2),y.getPixelForValue(speedData[i])-(40),30,30);
    }
  }
}

speedConfig={
  type:'bar',
  data:{
    labels:speedLabels,
    datasets:[{
      data:speedData,
      backgroundColor:[
        '#17955a',
        '#f9e13e',
        '#e40109',
        '#000000'
      ],
      hoverOffset: 4
    }]
  },
  options:{
    layout:{
      // padding:20
    },
    scales:{
      y:{
        max:300,
        ticks:{
          callback: function (value) {
            // if (value===0) return value;
            return `${value} Мбит/сек`; 
          },
        }
      }
    },
    plugins:{
      tooltip:{
        callbacks:{
          label: (context) =>{
            console.log(context);
            return `${context.raw} Мбит/сек`
          }
        }
      },
      legend:{
        display:false
      },
      datalabels:{
        color:"white",
          formatter: (value, context) =>{
            return `${value} Мбит/сек`
          }
      },
      title:{
        padding:20,
        display:true,
        text:'Максимальная скорость передачи данных в РФ(размещение контента от абонента)',
        font:{
          color:'black',
          size:24
        }
      }
    },
  },
  plugins:[speedPlugin,ChartDataLabels]
};
speedChart= new Chart(speedCanvas,speedConfig);
//#endregion
//#region статистика по полу и возрасту
adoptCanvas=document.getElementById('ecom-adoption-chart').getContext('2d');
adoptMaleData=[72.6,76.6,77.9,74.6,71.9];
adoptFemaleData=[77.7,79.9,79.9,79.5,75.6];
adoptLabels=["16-24 лет","25-34 лет","35-44 лет","45-54 лет","55-64 лет"]
adoptConfig={
  type:'bar',
  data:{
    labels:adoptLabels,
    datasets:[{
      label:'Мужчины',
      data:adoptMaleData,
      backgroundColor:[
        '#1880df'
      ],
    },
    {
      label:'Женщины',
      data:adoptFemaleData,
      backgroundColor:[
        '#fc3d83'
      ],
    }
  ]
  },
  options:{
    layout:{
      // padding:20
    },
    scales:{
      y:{
        max:100,
        ticks:{
          callback: function (value) {
            // if (value===0) return value;
            return `${value}%`; 
          },
        }
      }
    },
    plugins:{
      tooltip:{
        callbacks:{
          label: (context) =>{
            console.log(context);
            return `${context.raw}%`
          }
        }
      },
      legend:{
        display:true,
        // position:'bottom'
      },
      datalabels:{
        color:"white",
          formatter: (value, context) =>{
            return `${value}%`
          }
      },
      title:{
        padding:20,
        display:true,
        text:'Статистика по полу и возрасту',
        font:{
          color:'black',
          size:24
        }
      }
    },
  },
  plugins:[ChartDataLabels]
};
adoptChart= new Chart(adoptCanvas,adoptConfig);
//#endregion