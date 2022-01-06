//#region первый график тема Перенос социального взаимодействия
let perenosCanvas = document.getElementById('perenos-chart').getContext('2d');
let perenosConfig={
  type:"bar",
  data:{
    labels:[["Поддержать","бренд"],["Общение","в сети"],["Самореализация"], ["Рассказать", "о себе", "другим"], ["Опубликовать","ценный контент"]],
    datasets:[{
      backgroundColor:["blue","gray","black","#d48b0d","red"],
      data:[84,78,69,68,49]}
      
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

const iconsArray=[WhatsAppImage,FacebookImage,WeChatImage,QQImage,TelegramImage,SnapchatImage,DiscordImage,ViberImage,LineImage,SkypeImage]
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
          // callbacks:{
          //   callback: (value) => {
          //     return `${value}M`;
          //   }
          // },
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