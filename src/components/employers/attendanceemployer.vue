<template>
  <div class="attendance-employer-comp">
    <h3>Departments</h3>
    <apexchart
      class="pie"
      type="pie"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "attendancecomp",

  data: function () {
    return {
      //to add new chart change the code bootom and code in templte only
      //to add new chart change the code from here keep return and data function and code in templte only
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        title: {
          text: "Total Departments",
        },
        labels: [
          "Room-Services",
          "Engineer",
          "Reciption",
          "Resturant",
          "Gaurds",
        ],
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
.attendance-employer-comp {
  
  width: 50%;
  height: 270px;
  h3 {
    margin-bottom: 20px;
     font-family: "Indie Flower", cursive;
     font-size: 25px;
  }
.pie {
  cursor: pointer;
  width: 100%;
}
}
</style>
