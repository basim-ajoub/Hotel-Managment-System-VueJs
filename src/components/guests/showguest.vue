<template>
  <div class="show-guest-comp">
    <h1>Show Guests </h1>
    <div id="example">
      <div class="guest-lists">
        <table id="guest-table">
          <tr id="costant-row">
            <th id="col1">No.</th>
            <th id="col2">Name</th>
            <th id="col3">Nationality</th>
            <th id="col4">ID</th>
            <th id="col5">Birth Date</th>
            <th id="col6">Resiervation from</th>
            <th id="col7">Resiervation to</th>
            <th id="col8">Fees per Night</th>
            <th id="col9">Total Nights</th>
          </tr>
        </table>
      </div>

      <div class="view-guest-list-info">
        <p id="total-guests">
          <span>Totla Guest :</span><span id="total-guests-value"></span>
        </p>
        <p id="leaving-guests">
          <span>Leaving Guest :</span><span id="leaving-guest-value">7</span>
        </p>
        <section id="delete-guest-section">
          <input
            id="input-guest-number"
            placeholder="Enter Guest ID"
            type="text"
          />
          <button
            @click="viewGuestCard"
            class="guest-btn-list view-guest-details-btn"
            id="view-guest-btn"
          >
            View
          </button>
          <p id="pop-up-not-found-view">Not Found</p>
        </section>
      </div>
    </div>
    <!--View guest Details-->
    <div id="view-guest-details">
      <div id="guest-card">
        <h4 id="card-title">Guest Card</h4>
        <button @click="closeGuestCard" id="close-btn">X</button>
        <div id="guest-card-info">
          <h5>Name :</h5>
          <p id="guest-card-name"></p>
          <br />
          <h5>Nationality :</h5>
          <p id="guest-card-nationality"></p>
          <br />
          <h5>Adress :</h5>
          <p id="guest-card-address"></p>
          <br />
          <h5>Birth Date :</h5>
          <p id="guest-card-date"></p>
          <br />
          <h5>ID Number :</h5>
          <p id="guest-card-id"></p>
          <br />
          <h5>Gest's Number :</h5>
          <p id="guest-card-number"></p>
          <br />
          <!--Realtive Person 1 Details-->
          <div class="personone">
            <h4>Relatives Person-1 :</h4>
            <h5>Name :</h5>
            <p id="guest-card-one-name"></p>
            <br />
            <h5>Birth Date :</h5>
            <p id="guest-card-one-date"></p>
            <br />
            <h5>Nationality:</h5>
            <p id="guest-card-one-nationality"></p>
            <br />
            <h5>ID Number :</h5>
            <p id="guest-card-one-id"></p>
            <br />
          </div>
          <!--Realtive Person 2 Details-->
          <div class="perontwo">
            <h4>Relatives Person-2 :</h4>
            <h5>Name :</h5>
            <p id="guest-card-two-name">Samir</p>
            <br />
            <h5>Birth Date :</h5>
            <p id="guest-card-two-date">15-2-1995</p>
            <br />
            <h5>Nationality:</h5>
            <p id="guest-card-two-nationality">indian</p>
            <br />
            <h5>ID Number :</h5>
            <p id="guest-card-two-id">N 25852147</p>
            <br />
          </div>
          <div id="card-list-btn" class="card-list-btn">
            <button
              @click="deleteGuestInfo"
              class="guest-btn-list delete-guest-btn"
              id="delete-guest-btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../guests/addguest.vue";
export default {
  name: "showguestcomp",
  mounted: function () {
    this.showGuestInfo(); //method showEmployerCards  will execute at pageload
  },

  methods: {
    // Start Show Guests List
    showGuestInfo: function () {
      let n = 0;
      document.getElementById("example").style.display = "block";

      for (let j = 1; j < localStorage.length + 1; j++) {
        const guestInfoKey = "guestInfokey" + j;
        if (localStorage.getItem(guestInfoKey) !== null) {
          n = n + 1;
          var retrievedInfo = localStorage.getItem(guestInfoKey);
          //reconvert the string to normal
          let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
          //end converting
          document.getElementById("guest-table").innerHTML +=
            '<tr @click="viewGuestCard" class="table-row" id="row' +
            j +
            '"><td id="coll' +
            j +
            '">' +
            n +
            '</td><td id="col2">' +
            deserializedRetrGuestInfo.name +
            '</td><td id="col3">' +
            deserializedRetrGuestInfo.nationality +
            '</td> <td id="col4">' +
            deserializedRetrGuestInfo.id +
            '</td><td id="col5">' +
            deserializedRetrGuestInfo.date +
            '</td><td id="col6">' +
            deserializedRetrGuestInfo.resiervationfrom +
            '</td><td id="col7">' +
            deserializedRetrGuestInfo.resiervationto +
            '</td><td id="col8"> ' +
            deserializedRetrGuestInfo.pricepernight +
            "$" +
            '</td><td id="col9">' +
            deserializedRetrGuestInfo.totalnights +
            "</td></tr>";
        }
      }
      document.getElementById("total-guests-value").innerHTML +=
        "" + n ;

      // End Show Guests List
    },
    // Start View Guests List

    //  localStorage.removeItem(this.guestInfoKey);
    viewGuestCard: function () {
      //define constants

      console.log("viewed");
      const inpGuestIdToView =
        document.getElementById("input-guest-number").value;
      for (let i = 1; i < 200; i++) {
        const guestInfoKey = "guestInfokey" + i;
        var retrievedInfo = localStorage.getItem(guestInfoKey);
        let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(guestInfoKey) !== null) {
          if (inpGuestIdToView == deserializedRetrGuestInfo.id) {
            document.getElementById("pop-up-not-found-view").style.display = "none";
            document.getElementById("view-guest-details").style.display =
              "block";
            document.getElementById("guest-card-name").innerHTML =
              deserializedRetrGuestInfo.name;
            document.getElementById("guest-card-nationality").innerHTML =
              deserializedRetrGuestInfo.nationality;
            document.getElementById("guest-card-address").innerHTML =
              deserializedRetrGuestInfo.adress;
            document.getElementById("guest-card-date").innerHTML =
              deserializedRetrGuestInfo.date;
            document.getElementById("guest-card-id").innerHTML =
              deserializedRetrGuestInfo.id;
            document.getElementById("guest-card-number").innerHTML =
              deserializedRetrGuestInfo.guestno;
            document.getElementById("guest-card-one-name").innerHTML =
              deserializedRetrGuestInfo.persononename;
            document.getElementById("guest-card-one-nationality").innerHTML =
              deserializedRetrGuestInfo.persononenationality;
            document.getElementById("guest-card-one-date").innerHTML =
              deserializedRetrGuestInfo.persononedate;
            document.getElementById("guest-card-one-id").innerHTML =
              deserializedRetrGuestInfo.persononeid;
            document.getElementById("guest-card-two-name").innerHTML =
              deserializedRetrGuestInfo.persontwoname;
            document.getElementById("guest-card-two-nationality").innerHTML =
              deserializedRetrGuestInfo.persontwonationality;
            document.getElementById("guest-card-two-id").innerHTML =
              deserializedRetrGuestInfo.persontwoid;
            document.getElementById("guest-card-two-date").innerHTML =
              deserializedRetrGuestInfo.persontwodate;
          } 
          else{
            document.getElementById("pop-up-not-found-view").style.display = "block";
          }
        }
      }

    },
    // End View New Guest

    // Start Close Guest card
    closeGuestCard: function () {
      document.getElementById("view-guest-details").style.display = "none";
                  document.getElementById("pop-up-not-found-view").style.display =
              "none";
    },

      // Start Delete old Guest
    deleteGuestInfo: function () {
      const guestIdToDelete =
        document.getElementById("guest-card-id").innerText;
      for (let i = 2; i < localStorage.length + 1; i++) {
        const guestInfoKey = "guestInfokey" + i;
        var retrievedInfo = localStorage.getItem(guestInfoKey);
        let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(guestInfoKey) !== null) {
        if (guestIdToDelete == deserializedRetrGuestInfo.id) {
          localStorage.removeItem(guestInfoKey);
          location.reload();
        }
        }
      }
    },
    // End Delete old Guest
  },
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
.show-guest-comp {
  // Start Guest Table
  h1 {
    text-align: left;
    margin-left: 1%;
    margin-top: 10px;
     font-family: "Indie Flower", cursive;
     font-size: 28px;
  }
  #example {
    position: absolute;
    width: 100%;
    height: 610px;

    .close-guest-list {
      width: 10%;
      height: 25px;
      background: red;
      border-radius: 15%;
      cursor: pointer;
      position: absolute;
      margin-top: 3px;
      right: 2%;
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 17px;
      font-family: "Indie Flower", cursive;
      &:hover {
        box-shadow: 1px 1px 2px 2px $mainCol;
      }
    }
    .view-guest-list-info {
      width: 80%;
      height: 25px;
      margin-left: 1%;
      float: left;
      display: inline-flex;
      #pop-up-not-found-view {
        padding-top: 4px;
        z-index: 5;
        width: 35%;
        height: 21px;
        top: 583px;
        left: 50%;
        color: $pinkCol;
        text-align: center;
        display: none;
      }
      #total-guests {
        width: 22%;
        height: 20px;
        background-color: $mainCol;
        text-align: left;

        padding-left: 1%;
        padding-top: 5px;

        span {
          font-weight: bold;
        }
        #total-guests-value {
          margin-left: 7%;
        }
      }
      #leaving-guests {
        width: 22%;
        background: green;
        height: 20px;
        background-color: $mainCol;
        text-align: left;
        margin-right: 3%;

        padding-left: 1%;
        padding-top: 5px;
        span {
          font-weight: bold;
        }
        #leaving-guest-value {
          margin-left: 7%;
        }
      }
      #delete-guest-section {
        width: 50%;
        display: inline-flex;

        input {
          padding-left: 1px;
          margin-right: 1%;
          border-radius: 10%;
          &::placeholder {
            color: $pinkCol;
          }
        }
        #delete-guest-btn{
          background: $redCol;
        }
        .guest-btn-list {
          width: 20%;
          height: 25px;
          border-radius: 10%;
          margin-right: 1%;
                            font-family: "Indie Flower", cursive;
           font-size: 17px;
           font-weight: bold;
           cursor: pointer;
           background: $yellowCol;
           &:hover{
width: 21%;
height: 27px;
           font-size: 19px;
             font-weight: bolder;
           }
        }
      }
    }

    .guest-lists {
      width: 98%;
      background: red;
      margin-left: 1%;
      margin-top: 1%;
      height: 510px;
      background-color: wheat;
      overflow: hidden;
      overflow-y: scroll;
      margin-top: 50px;
      #guest-table {
        widows: 100%;
        border: 2px solid black;

        display: table;

        th {
          width: 12%;
          padding-left: 0.5%;
          border-bottom: 1px solid black;
          text-align: center;
        }
        .table-row {
          height: 60px;
          cursor: pointer;

          &:hover {
            background: $pinkColOp;
            color: $mainCol;
            font-weight: bold;
          }
          .btn-list {
            border: 0.5px solid $pinkColOp;
          }
        }
        td {
          border-right: 1px solid black;
          text-align: center;
        }
        #col1,
        #col8,
        #col9 {
          width: 4%;
        }
        #col10 {
          width: 2%;
        }
      }
    }
  }
  //View guest Card
  #view-guest-details {
    width: 100%;
    height: 643px;
    background: rgba(44, 44, 44, 0.644);
    position: absolute;
    top: 0;
    right: 0.1px;
    display: none;

    #guest-card {
      width: 50%;
      height: 500px;
      background: white;
      display: flexbox;
      margin: 90px 0px 0px 260px;
      border-radius: 5%;
      box-shadow: 2px 4px 8px 8px $blueCol;

      #card-title {
        position: absolute;
        margin-top: 17px;
        margin-left: 2%;
      }
      #close-btn {
        position: absolute;
        right: 27%;
        margin-top: 7px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      //Card Information
      #guest-card-info {
        width: 90%;
        margin-left: 10px;
        height: 400px;
        padding-top: 80px;
        padding: 80px 1% 1% 10px;
        h5 {
          float: left;
          margin-right: 3px;
        }
        p {
          font-size: 14px;
        }
        //Relatives Person-1
        .personone {
          float: left;
          margin-right: 25%;
          h4 {
            margin-bottom: 5px;
          }
        }
        //Card button
        button {
          width: 10%;
          height: 25px;
          margin-right: 2%;
          cursor: pointer;
        }
      }
      #card-list-btn {
        width: 50%;
        margin-top: 80px;
        margin-left: 50%;
        .guest-btn-list {
          width: 40%;
          border-radius: 20%;
        }
      }
    }
  }
}
</style>
