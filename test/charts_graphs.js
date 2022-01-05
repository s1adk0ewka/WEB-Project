let perenosCanvas = document.getElementById('perenos-chart').getContext('2d');
let config={
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
}
let perenosChart = new Chart(perenosCanvas,config);