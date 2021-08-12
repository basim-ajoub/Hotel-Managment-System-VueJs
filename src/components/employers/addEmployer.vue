<template>
  <div class="add-employer">
    <!--Add Employer Left Section-->
    <form class="add-employer-form-left" action="">
      <div class="add-employer-container-left box">
        <h1>Add New Employer</h1>
        <p>Employer Name:</p>
        <input class="employer-input" id="input-employer-name" type="text" />
        <p>Date Of Birth:</p>
        <input class="employer-input" id="input-employer-date" type="date" />
        <p>Address :</p>
        <input class="employer-input" id="input-employer-address" type="text" />
        <p>ID Number:</p>
        <input class="employer-input" id="input-employer-id" type="text" />
        <p>Nationality:</p>
        <input
          class="employer-input"
          id="input-employer-nationality"
          type="text"
        />
        <p>Position:</p>
        <select id="input-employer-position-list" name="position-list">
          <option value="software-engineer">SofWare Engineer</option>
          <option value="electric-engineer">Electric Engineer</option>
          <option value="mechanical-engineer">Mechanical Engineer</option>
          <option value="cheef">Cheef</option>
          <option value="room-service">Room Service</option>
        </select>
        <p>Start Time:</p>
        <input class="employer-input" id="employer-start-time" type="time" />
        <p>End Time:</p>
        <input class="employer-input" id="employer-end-time" type="time" />
        <p>Working Days:</p>
        <div class="working-days">
          <div class="working-days-checkbox">
            <input class="employer-check-bix" type="checkbox" id="monday" />
            <label for="monday">monday</label>

            <input class="employer-check-bix" type="checkbox" id="tuesday" />
            <label for="tuesday">Tuesday</label>

            <input class="employer-check-bix" type="checkbox" id="wednsday" />
            <label for="wednsday">wednsday</label>

            <input class="employer-check-bix" type="checkbox" id="thursday" />
            <label for="thursday">Thursday</label>
          </div>
          <div class="working-days-checkbox">
            <input class="employer-check-bix" type="checkbox" id="friday" />
            <label for="friday">Friday</label>

            <input class="employer-check-bix" type="checkbox" id="saturday" />
            <label for="saturday">Saturday</label>

            <input class="employer-check-bix" type="checkbox" id="sunday" />
            <label for="sunday">Sunday</label>
          </div>
        </div>
      </div>
      <!--Add medium Section -->
      <div class="add-employer-container-medium box">
        <h4 class="employer-salary-title">Salary Details</h4>
        <p>Salary:</p>
        <input
          class="employer-input"
          id="input-employer-salary"
          type="number"
        />
        <p>Month:</p>
        <input class="employer-input" id="input-employer-month" type="month" />
        <p>Tax :</p>
        <input class="employer-input" id="input-employer-tax" type="number" />
        <p>Date Of Start Working :</p>
        <input
          class="employer-input"
          id="input-employer-start-working-date"
          type="date"
        />

        <h4>Leaf Details</h4>
        <p>Leaf Allwoed :</p>
        <input
          class="employer-input"
          id="input-employer-leaf-allwoed"
          type="number"
        />
        <p>Token leaf :</p>
        <input
          class="employer-input"
          id="input-employer-token-leaf"
          type="number"
        />
        <p>Seek Leaf :</p>
        <input
          class="employer-input"
          id="input-employer-seek-leaf"
          type="number"
        />
      </div>
      <!--Add Employer Right Section-->
      <div class="add-employer-container-right box">
        <img src="../../assets/emplyer-pic.jpg" value="emp-img" alt="" />
        <input type="file" id="employer-input-file-image" class="file-image" />

        <button @click="addNewEmployer" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddEmployPage",
  data: function () {
    return {
      employerInfoValue: [],
    };
  },

  methods: {
    addNewEmployer: function () {
      let i = 0;

      const inpEmployerName = document.getElementById(
        "input-employer-name"
      ).value;
      const inpEmployerAddress = document.getElementById(
        "input-employer-address"
      ).value;
      const inpEmployerDate = document.getElementById(
        "input-employer-date"
      ).value;
      const inpEmployerNationality = document.getElementById(
        "input-employer-nationality"
      ).value;
      const inpEmployerId = document.getElementById("input-employer-id").value;

      const inpEmployerPosition = document.getElementById(
        "input-employer-position-list"
      ).value;
      const inpEmployerStartTime = document.getElementById(
        "employer-start-time"
      ).value;
      const inpEmployerEndTime =
        document.getElementById("employer-end-time").value;
      const inpEmployerSalary = document.getElementById(
        "input-employer-salary"
      ).value;

      const inpEmployerSalaryMonth = document.getElementById(
        "input-employer-month"
      ).value;

      const inpEmployerTax =
        document.getElementById("input-employer-tax").value;
      const inpEmployerLeafAllwoed = document.getElementById(
        "input-employer-leaf-allwoed"
      ).value;
      const inpEmployerTokenLeaf = document.getElementById(
        "input-employer-token-leaf"
      ).value;
      const inpEmployerSeekLeaf = document.getElementById(
        "input-employer-seek-leaf"
      ).value;

      const inpEmployerStartWorkingMonth = document.getElementById(
        "input-employer-start-working-date"
      ).value;

      // To Upload Image To LocalStorage
      var inpEmployerFileImage = document.getElementById(
        "employer-input-file-image"
      ).files[0].name;

      //var reader = new FileReader();
      //var finalimg = reader.readAsDataURL(document.getElementById("employer-input-file-image").files);
      var src = "../../assets/";

      window.alert(inpEmployerFileImage);

      if (i < localStorage.length) {
        i = localStorage.length + 1;

        var employerInfoKey = "emplyerInfoKey" + i;
        var employerInfoValue = {
          name: inpEmployerName,
          address: inpEmployerAddress,
          id: inpEmployerId,
          nationality: inpEmployerNationality,
          date: inpEmployerDate,
          fileimg: src + inpEmployerFileImage,
          starttime: inpEmployerStartTime,
          endtime: inpEmployerEndTime,
          position: inpEmployerPosition,
          salary: inpEmployerSalary,
          salarymonth: inpEmployerSalaryMonth,
          salarytax: inpEmployerTax,
          startworking: inpEmployerStartWorkingMonth,
          leafallwoed: inpEmployerLeafAllwoed,
          tokenleaf: inpEmployerTokenLeaf,
          seekleaf: inpEmployerSeekLeaf,
        };

        let serializedEmployerInfo = JSON.stringify(employerInfoValue);
        localStorage.setItem(employerInfoKey, serializedEmployerInfo);
        console.log(localStorage.length);
        console.log(serializedEmployerInfo);
      }
      var rete = localStorage.getItem(employerInfoKey);
      var des = JSON.parse(rete);
      this.employerInfoValue.name = des.name;
    },
    //showEmployer: function(){},
  },
  mounted() {
    if (localStorage.getItem("employerInfoValue")) {
      this.employerInfoValue = JSON.parse(
        localStorage.getItem("employerInfoValue")
      );
    }
  },
};
</script>

<style lang="scss">
$mainCol: rgb(248, 228, 163);
$redCol: rgb(236, 47, 47);
.add-employer {
  width: 100%;
  height: 640px;
  //Add Employer Left Section
  .add-employer-form-left {
    background: red;
    left: 4%;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    text-align: left;
    .box {
      width: 32%;
      height: 545px;
      float: left;
      padding-top: 80px;

      h1 {
         font-family: "Indie Flower", cursive;
         font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .employer-input {
        width: 60%;
        box-shadow: 3px 3px 3px $redCol;
        cursor: auto;
      }

      .working-days {
        width: 100%;
        input {
          cursor: pointer;
        }

        .employer-check-bix {
          width: 5%;
          margin-left: 0.9%;
        }
        label {
          font-size: 12px;
        }
      }
    }

    //Employer Medium Section

    .add-employer-container-medium {
      .employer-salary-title {
        margin-top: 45px;
      }
      #input-employer-start-working-date {
        margin-bottom: 25px;
      }
    }

    //Add Employer Right Section
    .add-employer-container-right {
      height: 480px;
      padding-top: 150px;
      img {
        width: 90%;
        height: 170px;
        border-radius: 100%;
        border: 1px solid $redCol;
        margin-left: 4%;
      }
      .file-image {
        cursor: copy;
        margin-left: 20%;
        margin-top: 25px;
      }
      button {
        width: 30%;
        height: 25px;
        margin-top: 210px;
        margin-left: 57.5%;
        border-radius: 15%;
                  font-family: "Indie Flower", cursive;
           font-size: 15px;
        cursor: pointer;
        box-shadow: 5px 5px 5px $redCol;
        font-weight: bold;
        border: 0.5px solid black;
         transition: 0.1 ease-in-out;
        &:hover {
          width: 31%;
          height: 29px;
          font-weight: bolder;
           font-size: 16px;
          background-color: rgb(37, 194, 37);
         
        }
      }
    }
  }
}
</style>
