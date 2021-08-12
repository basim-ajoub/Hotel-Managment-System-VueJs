<template>
  <div class="guest-expectaion-comp">
    <apexchart
      class="pie"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: "guestinfocomp",

  data: function () {
    return {
      //to add new chart change the code bootom and code in templte only
      //to add new chart change the code from here keep return and data function and code in templte only

      series: [4, 2, 18, 32],
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: [
          "Expected Coming Guest",
          "Expected Leaving Guests",
          "Leaving Guests",
          "Staying Guests",
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
.guest-expectaion-comp {
  width: 90%;
  height: 300px;

  .pie {
    cursor: pointer;
  }
}
</style>
