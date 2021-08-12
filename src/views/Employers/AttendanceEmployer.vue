<template>
  <div class="attendance-employer-view">
    <h1>Attendance</h1>
    <span id="time-real">06:55 AM</span>
    <div class="charts">
    <attendanceEmployer class="part1" />
    <attendanceDepartment class="part2" />
    </div>
  </div>
</template>

<script>
import attendanceEmployer from "../../components/employers/attendanceemployer.vue";
import attendanceDepartment from "../../components/employers/attendancedepartment.vue";
export default {
  name: "attendanceviews",
  components: {
    attendanceEmployer,
    attendanceDepartment,
  },
  //end export
};
</script>

<style lang="scss">
.attendance-employer-view {
  #time-real {
    margin-bottom: 180px;
  }
  h1{
     font-family: "Indie Flower", cursive;
     font-size: 28px;
     text-align: left;
     margin-left: 2%;
     margin-top: 20px;
  }
  .charts{
    width: 100%;
    background-color: red;
    border: black;
    margin-top: 100px;
  }
  
   
  
  h1 {
    margin-bottom: 15px;
  }
  .part1 , .part2{
    float: left;
  }
}
</style>
