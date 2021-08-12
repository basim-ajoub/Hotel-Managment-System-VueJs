<template>
  <div id="employer-card-comp" class="employer-card-comp">
    <div id="search-for-employer">
      <input id="input-employer-search" type="text" />
      <button @click="viewEmployerCard" id="employer-id-search">Search</button>
    </div>
    <div id="all-cards-box"></div>
    <!--View employer Details-->
    <div id="view-employer-details">
      <div id="employer-card">
        <h2 id="card-title">Employer Card</h2>
        <button @click="closeEmployerCard" id="close-btn">X</button>
        <div id="employer-card-info">
          <!--Emplyer General info-->
          <div class="box">
            <div id="employer-card-general-info" class="fix-box-size">
              <h4 id="card-info">Employer info</h4>
              <h5>Name :</h5>
              <p class="update-process" id="employer-card-name"></p>
              <input
                class="update-completed"
                id="employer-card-input-name"
                type="text"
              />
              <br />
              <h5>Nationality :</h5>
              <p class="update-process" id="employer-card-nationality"></p>
              <input
                class="update-completed"
                id="employer-card-input-nationality"
                type="text"
              />
              <br />
              <h5>Address :</h5>
              <p class="update-process" id="employer-card-adress"></p>
              <input
                class="update-completed"
                id="employer-card-input-address"
                type="text"
              />
              <br />
              <h5>Birth Date :</h5>
              <p class="update-process" id="employer-card-date"></p>
              <input
                class="update-completed"
                id="employer-card-input-date"
                type="date"
              />
              <br />
              <h5>ID Number :</h5>
              <p class="update-process" id="employer-card-id"></p>
              <input
                class="update-completed"
                id="employer-card-input-id"
                type="text"
              />
              <br />
              <h5>Position :</h5>
              <p class="update-process" id="employer-card-position">5</p>
              <input
                class="update-completed"
                id="employer-card-input-position"
                type="text"
              />
              <br />
              <h5>Working Time :</h5>
              <p id="employer-card-working-time">
                <span id="employer-card-start-time"></span>
                <input
                  class="update-completed"
                  id="employer-card-input-starttime"
                  type="time"
                />
                - <span id="employer-card-end-time"></span>
                <input
                  class="update-completed"
                  id="employer-card-input-endtime"
                  type="time"
                />
              </p>

              <br />
              <h5>Working Days :</h5>
              <p class="update-process" id="employer-card-working-days">5</p>
              <input
                class="update-completed"
                id="employer-card-input-working-days"
                type="text"
              />
              <br />
            </div>
          </div>
          <div class="box">
            <!--Leaf days-->
            <!--Salary Details Details-->
            <div class="employer-salary-details fix-box-size">
              <h4 id="card-info">Salary Details</h4>
              <h5>Salary :</h5>
              <p class="update-process" id="employer-card-salary"></p>
              <input
                class="update-completed"
                id="employer-card-input-salary"
                type="text"
              />
              <br />
              <h5>Tax :</h5>
              <p class="update-process" id="employer-card-salary-tax"></p>
              <input
                class="update-completed"
                id="employer-card-input-tax"
                type="text"
              />
              <br />
              <h5>Month:</h5>
              <p class="update-process" id="employer-card-salary-month"></p>
              <input
                class="update-completed"
                id="employer-card-input-month"
                type="month"
              />
              <br />
              <h5>Net Salary:</h5>
              <p id="employer-card-salary-net"></p>
              <br />
              <h5>Start Working:</h5>
              <p class="update-process" id="employer-card-start-working"></p>
              <input
                class="update-completed"
                id="employer-card-input-start-working"
                type="date"
              />
              <br />
            </div>
            <div class="employer-card-leaf fix-box-size">
              <h4 id="card-info">Leaf Details</h4>
              <h5>Leaf Allwoed:</h5>
              <p class="update-process" id="employer-card-leaf-allwoed"></p>
              <input
                class="update-completed"
                id="employer-card-input-leaf-allowed"
                type="text"
              />
              <br />
              <h5>Token leaf:</h5>
              <p class="update-process" id="employer-card-token-leaf"></p>
              <input
                class="update-completed"
                id="employer-card-input-token-leaf"
                type="text"
              />
              <br />
              <h5>Seek Leaf:</h5>
              <p class="update-process" id="employer-card-seek-leaf"></p>
              <input
                class="update-completed"
                id="employer-card-input-seek-leaf"
                type="text"
              />
              <br />
              <h5>Total Leaf/Month :</h5>
              <p class="update-process" id="employer-card-total-leaf"></p>
              <br />
            </div>
          </div>

          <div class="box">
            <div class="employer-card-img-btn">
              <div class="employer-card-img">
                <img src="../../assets/emplyer-pic.jpg" alt="" />
              </div>
              <div class="employer-card-btn-list">
                <button @click="updateEmployerCard" id="edit-btn">
                  Update
                </button>
                <button @click="deleteEmployerCard" id="delete-btn">
                  Delete
                </button>
                <button @click="updateOldEmployerInfo" id="save-btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "employerCardComp",
  props: ["name", "position"],
  mounted: function () {
    this.showEmployerCards(); //method showEmployerCards  will execute at pageload
  },
  data: function () {
    return {
      employerValueInfo: [],
    };
  },

  methods: {
    closeEmployerCard: function () {
      document.getElementById("view-employer-details").style.display = "none";
    },
    showEmployerCards: function () {
      let k = 0; //it is used to calculate number of employer
      for (let j = 1; j < 100; j++) {
        var employerInfoKey = "emplyerInfoKey" + j;
        if (localStorage.getItem(employerInfoKey) !== null) {
          console.log(employerInfoKey);
          var retrievedInfo = localStorage.getItem(employerInfoKey);
          //reconvert the string to normal
          let deserializedRetrEmployerInfo = JSON.parse(retrievedInfo);
          console.log(deserializedRetrEmployerInfo);
          document.getElementById("all-cards-box").innerHTML +=
            '<div @click="viewwindow" class="card-box"><div class="box-img"><img src="../../assets/emplyer-pic.jpg" alt="" /></div><div class="box-details"><p id="card-employer-name">Name : <span>' +
            deserializedRetrEmployerInfo.name +
            '</span></p><br><p id="card-employer-start-end-time">Working Time: <span>' +
            deserializedRetrEmployerInfo.starttime +
            " -" +
            deserializedRetrEmployerInfo.endtime +
            ' </span></p><br><p id="card-employer-posiotion">Position: <span>' +
            deserializedRetrEmployerInfo.position +
            '</span></p><br><p id="card-employer-id">ID: <span>' +
            deserializedRetrEmployerInfo.id +
            '</span></p></div><div class="btn-list"><button v-on:click="viewClick" id="card-view-btn" class="card-btn">View</button></div></div>';
          //end converting
          k++;
        }
      }
      console.log("number of employer is" + k);
    },

    //document.getElementById("card-view-btn").onclick = function(){console.log("viewed"); };
    viewEmployerCard: function () {
      document.getElementById("edit-btn").style.display = "block";
      document.getElementById("delete-btn").style.display = "block";
      document.getElementById("save-btn").style.display = "none";
      // Start hide all the fields

      document.getElementById("employer-card-input-id").style.display = "none";
      document.getElementById("employer-card-input-name").style.display =
        "none";
      document.getElementById("employer-card-input-starttime").style.display =
        "none";
      document.getElementById("employer-card-input-endtime").style.display =
        "none";
      document.getElementById("employer-card-input-date").style.display =
        "none";
      document.getElementById("employer-card-input-address").style.display =
        "none";
      document.getElementById("employer-card-input-position").style.display =
        "none";
      document.getElementById("employer-card-input-nationality").style.display =
        "none";
      document.getElementById("employer-card-input-salary").style.display =
        "none";
      document.getElementById(
        "employer-card-input-working-days"
      ).style.display = "none";
      document.getElementById("employer-card-input-tax").style.display = "none";
      document.getElementById(
        "employer-card-input-start-working"
      ).style.display = "none";
      document.getElementById("employer-card-input-month").style.display =
        "none";
      document.getElementById(
        "employer-card-input-leaf-allowed"
      ).style.display = "none";
      document.getElementById("employer-card-input-token-leaf").style.display =
        "none";
      document.getElementById("employer-card-input-seek-leaf").style.display =
        "none";

      // End hide all the fields

      const inpEmployerSearchId = document.getElementById(
        "input-employer-search"
      ).value;
      for (let j = 1; j < 100; j++) {
        var employerInfoKey = "emplyerInfoKey" + j;
        if (localStorage.getItem(employerInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(employerInfoKey);
          const deserializedRetrEmployerInfo = JSON.parse(retrievedInfo);
          if (deserializedRetrEmployerInfo.id == inpEmployerSearchId) {
            console.log(deserializedRetrEmployerInfo.starttime + "found");
            document.getElementById("view-employer-details").style.display =
              "block";
            document.getElementById("employer-card-name").innerHTML =
              deserializedRetrEmployerInfo.name + "    .";
            document.getElementById("employer-card-nationality").innerHTML =
              deserializedRetrEmployerInfo.nationality + "    .";
            document.getElementById("employer-card-adress").innerHTML =
              deserializedRetrEmployerInfo.address + "    .";
            document.getElementById("employer-card-date").innerHTML =
              deserializedRetrEmployerInfo.date + "    .";
            document.getElementById("employer-card-id").innerHTML =
              deserializedRetrEmployerInfo.id;
            document.getElementById("employer-card-position").innerHTML =
              deserializedRetrEmployerInfo.position + "    .";
            document.getElementById("employer-card-start-time").innerHTML =
              deserializedRetrEmployerInfo.starttime + "    .";
            document.getElementById("employer-card-end-time").innerHTML =
              deserializedRetrEmployerInfo.endtime + "    .";
            document.getElementById("employer-card-salary").innerHTML =
              deserializedRetrEmployerInfo.salary + "    .";
            document.getElementById("employer-card-salary-tax").innerHTML =
              deserializedRetrEmployerInfo.salarytax + "    .";
            document.getElementById("employer-card-salary-month").innerHTML =
              deserializedRetrEmployerInfo.salarymonth + "    .";
            document.getElementById("employer-card-salary-net").innerHTML =
              deserializedRetrEmployerInfo.salary -
              deserializedRetrEmployerInfo.salarytax +
              "    .";
            document.getElementById("employer-card-start-working").innerHTML =
              deserializedRetrEmployerInfo.startworking + "    .";
            document.getElementById("employer-card-leaf-allwoed").innerHTML =
              deserializedRetrEmployerInfo.leafallwoed + "    .";
            document.getElementById("employer-card-token-leaf").innerHTML =
              deserializedRetrEmployerInfo.tokenleaf + "    .";
            document.getElementById("employer-card-seek-leaf").innerHTML =
              deserializedRetrEmployerInfo.seekleaf + "    .";
            document.getElementById("employer-card-total-leaf").innerHTML =
              deserializedRetrEmployerInfo.seekleaf +
              deserializedRetrEmployerInfo.tokenleaf +
              "    .";
          }
        }
      }
    },
    //Start Delete Employer
    deleteEmployerCard: function () {
      const employerIdToDelete =
        document.getElementById("employer-card-id").innerText;
      for (let j = 1; j < 100; j++) {
        var employerInfoKey = "emplyerInfoKey" + j;
        if (localStorage.getItem(employerInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(employerInfoKey);
          var deserializedRetrEmployerInfo = JSON.parse(retrievedInfo);

          if (deserializedRetrEmployerInfo.id == employerIdToDelete) {
            console.log(employerIdToDelete);
            localStorage.removeItem(employerInfoKey);
            location.reload();
          }
        }
      }
    },

    //Start Update Employer
    updateEmployerCard: function () {
      document.getElementById("save-btn").style.display = "block";
      document.getElementById("card-info").style.margin = "0px";
      //Start Input Fields show
      document.getElementById("employer-card-input-id").style.display = "block";
      document.getElementById("employer-card-input-name").style.display =
        "block";
      document.getElementById("employer-card-input-starttime").style.display =
        "block";
      document.getElementById("employer-card-input-endtime").style.display =
        "block";
      document.getElementById("employer-card-input-date").style.display =
        "block";
      document.getElementById("employer-card-input-address").style.display =
        "block";
      document.getElementById("employer-card-input-position").style.display =
        "block";
      document.getElementById("employer-card-input-nationality").style.display =
        "block";
      document.getElementById("employer-card-input-salary").style.display =
        "block";
      document.getElementById(
        "employer-card-input-working-days"
      ).style.display = "block";
      document.getElementById("employer-card-input-tax").style.display =
        "block";
      document.getElementById(
        "employer-card-input-start-working"
      ).style.display = "block";
      document.getElementById("employer-card-input-month").style.display =
        "block";
      document.getElementById(
        "employer-card-input-leaf-allowed"
      ).style.display = "block";
      document.getElementById("employer-card-input-token-leaf").style.display =
        "block";
      document.getElementById("employer-card-input-seek-leaf").style.display =
        "block";
      //End Input Fields Show
      document.getElementById("edit-btn").style.display = "none";
      document.getElementById("delete-btn").style.display = "none";
      const employerIdToUpdate =
        document.getElementById("employer-card-id").innerText;

      for (let j = 1; j < 100; j++) {
        var employerInfoKey = "emplyerInfoKey" + j;
        if (localStorage.getItem(employerInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(employerInfoKey);
          var deserializedRetrEmployerInfo = JSON.parse(retrievedInfo);

          if (deserializedRetrEmployerInfo.id == employerIdToUpdate) {
            document.getElementById("employer-card-input-id").value =
              deserializedRetrEmployerInfo.id;
            document.getElementById("employer-card-input-name").value =
              deserializedRetrEmployerInfo.name;
            document.getElementById("employer-card-input-starttime").value =
              deserializedRetrEmployerInfo.starttime;
            document.getElementById("employer-card-input-endtime").value =
              deserializedRetrEmployerInfo.endtime;
            document.getElementById("employer-card-input-date").value =
              deserializedRetrEmployerInfo.date;
            document.getElementById("employer-card-input-address").value =
              deserializedRetrEmployerInfo.address;
            document.getElementById("employer-card-input-position").value =
              deserializedRetrEmployerInfo.position;
            document.getElementById("employer-card-input-nationality").value =
              deserializedRetrEmployerInfo.nationality;
            document.getElementById("employer-card-input-salary").value =
              deserializedRetrEmployerInfo.salary;
            document.getElementById("employer-card-input-tax").value =
              deserializedRetrEmployerInfo.salarytax;
            document.getElementById("employer-card-input-start-working").value =
              deserializedRetrEmployerInfo.startworking;
            document.getElementById("employer-card-input-month").value =
              deserializedRetrEmployerInfo.salarymonth;
            document.getElementById("employer-card-input-leaf-allowed").value =
              deserializedRetrEmployerInfo.leafallwoed;
            document.getElementById("employer-card-input-token-leaf").value =
              deserializedRetrEmployerInfo.tokenleaf;
            document.getElementById("employer-card-input-seek-leaf").value =
              deserializedRetrEmployerInfo.seekleaf;
            console.log(employerIdToUpdate);
          }
        }
      }
    },
    updateOldEmployerInfo: function () {
      const employerOldIdToUpdate = document.getElementById("employer-card-input-id").value;
      for (let j = 1; j < 100; j++) {
        const employerInfoKey = "emplyerInfoKey" + j;
        if (localStorage.getItem(employerInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(employerInfoKey);
          var deserializedRetrEmployerInfo = JSON.parse(retrievedInfo);
          if (deserializedRetrEmployerInfo.id == employerOldIdToUpdate) {
            var employerInfoValue = {
              name: document.getElementById("employer-card-input-name").value,
              address: document.getElementById("employer-card-input-address")
                .value,
              id: document.getElementById("employer-card-input-id").value,
              nationality: document.getElementById(
                "employer-card-input-nationality"
              ).value,
              date: document.getElementById("employer-card-input-date").value,
              starttime: document.getElementById(
                "employer-card-input-starttime"
              ).value,
              endtime: document.getElementById("employer-card-input-endtime")
                .value,
              position: document.getElementById("employer-card-input-position")
                .value,
              salary: document.getElementById("employer-card-input-salary")
                .value,
              salarymonth: document.getElementById("employer-card-input-month")
                .value,
              salarytax: document.getElementById("employer-card-input-tax")
                .value,
              startworking: document.getElementById(
                "employer-card-input-start-working"
              ).value,
              leafallwoed: document.getElementById(
                "employer-card-input-leaf-allowed"
              ).value,
              tokenleaf: document.getElementById(
                "employer-card-input-token-leaf"
              ).value,
              seekleaf: document.getElementById("employer-card-input-seek-leaf")
                .value,
            };

            
            //conver it to string becouse localstorage accept only string fot lists
            var employerInfoNewValueSerialized =
              JSON.stringify(employerInfoValue);
              console.log(employerInfoNewValueSerialized);
            //end converting
            localStorage.setItem(
              employerInfoKey,
              employerInfoNewValueSerialized
            );
            location.reload();
          }
          console.log('if id loop match');
        }
                  console.log('if null match');

      }
    },
  },

  // End Update old Employer
};
</script>
<style lang="scss">
$MainColor: #0d2137;
$FontColor: #f3f298;
$defaultColor: #2e77ae;
$mainCol: rgb(248, 228, 163);
$redCol: rgb(236, 47, 47);
$pinkCol: rgba(255, 69, 96, 1);
$pinkColOp: rgba(255, 69, 97, 0.938);
$yellowCol: rgba(254, 176, 25, 1);
$lightGreenCol: rgba(0, 227, 150, 1);
$blueCol: rgba(0, 143, 251, 1);
$purpleCol: rgba(119, 93, 208, 1);
.employer-card-comp {
  width: 100%;
  height: 545px;
  #search-for-employer {
    height: 40px;
    width: 30%;
    text-align: left;
    margin-left: 2.2%;
    margin-top: 25px;

    input {
      width: 70%;
    }
    #employer-id-search {
      width: 22%;
      height: 20px;
      border-radius: 10%;
      cursor: pointer;
      background: $MainColor;
      color: $FontColor;
    }
  }
  #all-cards-box {
    width: 100%;
    height: 510px;
    overflow-y: hidden;
    overflow-y: scroll;
    display: inline-flex;
  }
  .card-box {
    width: 25%;

    height: 320px;
    background-color: greenyellow;
    margin-top: 50px;
    padding-top: 7px;
    margin-left: 6%;

    box-shadow: 1px 3px 3px 4px $blueCol;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 3px 3px 4px $pinkCol;
    }

    .box-img {
      width: 95%;
      background: rgb(36, 35, 37);
      height: 170px;
      margin-left: 2%;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 170px;
      }
    }
    .box-details {
      width: 95%;
      height: 80px;
      box-shadow: 2px 1px 1px 1px wheat;
      padding-left: 1%;
      margin-left: 2%;
      text-align: left;
      p {
        font-size: 15px;
        font-weight: bold;
        float: left;
        span {
          font-size: 14.5px;
          font-weight: bolder;
        }
      }
    }
    .btn-list {
      text-align: right;
      margin-right: 2%;
      .card-btn {
        width: 25%;
        height: 25px;
        border-radius: 15%;
        margin-top: 15px;
        cursor: pointer;
      }
    }
  }
  //View Employer Card
  #view-employer-details {
    width: 100%;
    height: 643px;
    background: rgba(44, 44, 44, 0.644);
    position: absolute;
    top: 0;
    right: 0.1px;
    display: none;

    #employer-card {
      width: 90%;
      height: 570px;
      background: white;
      display: flexbox;
      margin: 30px 0px 0px 50px;
      border-radius: 5%;
      box-shadow: 2px 4px 8px 8px $blueCol;

      #card-title {
        position: absolute;
        margin-top: 17px;
        margin-left: 2%;
      }
      #close-btn {
        position: absolute;
        right: 7%;
        margin-top: 15px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      //Card Information
      #employer-card-info {
        width: 95%;
        margin-left: 10px;
        height: 470px;

        padding-top: 80px;
        padding: 80px 1% 1% 10px;
        display: inline-flex;
        .box {
          width: 50%;
          height: 470px;
          float: left;
          text-align: left;
        }
        .fix-box-size {
          width: 100%;
        }
        #card-info {
          text-align: left;
          margin-bottom: 5px;
        }
        h5 {
          float: left;
          margin-right: 8%;
        }

        p {
          font-size: 14px;
        }
        .update-completed {
          display: none;
          width: 20%;
        }
        .employer-salary-details {
          margin-right: 25%;
        }

        //leaf box
        .employer-card-leaf {
        }
        //Card button

        .box {
          .employer-card-img-btn {
            width: 100%;
            .employer-card-btn-list {
              width: 100%;
              margin-top: 190px;
              button {
                width: 40%;
                height: 25px;
                margin-right: 2%;
                cursor: pointer;
                border-radius: 15%;
                &:hover {
                  width: 41%;
                  height: 26px;
                  box-shadow: 1px 2px 3px 3px $redCol;
                }
              }
              #edit-btn {
                background: $yellowCol;
                float: left;
                &:hover {
                  box-shadow: 1px 2px 3px 3px $yellowCol;
                }
              }
              #delete-btn {
                background: $redCol;
              }
              #save-btn {
                width: 30%;
                height: 25px;
                margin-left: 47.5%;
                border-radius: 15%;
                display: none;
                background: rgb(37, 194, 37);
                cursor: pointer;
                font-weight: bold;
                border: 0.5px solid black;
                &:hover {
                  width: 31%;
                  height: 29px;
                  font-weight: bolder;
                  box-shadow: 1px 2px 3px 3px $lightGreenCol;
                }
              }
            }
            .employer-card-img {
              width: 95%;
              height: 250px;

              img {
                width: 100%;
                height: 200px;
                border: 1px solid $MainColor;
                border-radius: 15%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
