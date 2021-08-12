<template>
  <div class="attendance-department-comp">
      <h3>Employers</h3>
    <apexchart
    class="pie"
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      //to add new chart change the code bootom and code in templte only
      //to add new chart change the code from here keep return and data function and code in templte only
      series: [44, 55, 41, 17],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Total Employers ",
        },
        labels: ["Attending", "Abscent", "Seek Leaf", "On Leaf"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      //end return
    };

    //end data
  },

  //end export
};
</script>

<style lang="scss">
.attendance-department-comp{
  width: 50%;
  height: 270px;
.pie {
  width: 100%;
  cursor: pointer;
}
  h3 {
    margin-bottom: 20px;
     font-family: "Indie Flower", cursive;
     font-size: 25px;
  }
}
</style>
