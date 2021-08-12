<template>
  <div id="add-room">
    <div class="add-room-input">
      <form class="add-room-form-left" action="">
        <h1 id="add-new-room-title">Add New Room</h1>
        <div class="add-room-container-left">
          <p>Type :</p>
          <select id="input-room-list" name="room-list">
            <option value="single-room">Single Room</option>
            <option value="double-room">Double Room</option>
            <option value="golden-room">Golden Room</option>
          </select>
          <p>Floor :</p>
          <input class="room-input" id="input-room-floor" type="number" />
          <p>Number :</p>
          <input class="room-input" id="input-room-number" type="number" />

          <p>Availability:</p>
          <select
            id="input-room-availability-list"
            name="room-availability-list"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <button id="save-btn" @click="saveRoomInfo">Save</button>
        <button @click="submitEditRoomInfo" class="room-btn" id="submit-edit-room-btn">Submit</button>
      </form>
      <div id="edit-room-form-left">
        <h3 id="edit-room-title">Edit Room Info</h3>
        <input
          id="edit-room-input"
          type="text"
          placeholder="Enter Room Number"
        /><br />
        <button @click="editRoomInfo" class="room-btn" id="edit-room-btn">
          Edit
        </button>
        <button @click="deleteRoomInfo" class="room-btn" id="delete-room-btn">Delete</button>
      </div>
    </div>
    <div class="show-room">
      <h3 id="show-room-title">Show Room</h3>
      <table id="room-table">
        <tr id="costant-row">
          <th id="col1">No.</th>
          <th id="col2">Room Type</th>
          <th id="col3">Floor</th>
          <th id="col4">Number</th>
          <th id="col5">Status</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRoomItem",
  mounted: function () {
    this.showRoomInfo(); //method showEmployerCards  will execute at pageload
  },
  methods: {
    saveRoomInfo: function () {
      const inpRoomType = document.getElementById("input-room-list").value;
      const inpRoomFloor = document.getElementById("input-room-floor").value;
      const inpRoomNumber = document.getElementById("input-room-number").value;
      const inpRoomAvailability = document.getElementById(
        "input-room-availability-list"
      ).value;
      var i = 0;
      //to prevent the empty save
      if (
        inpRoomType &&
        inpRoomFloor &&
        inpRoomNumber &&
        inpRoomAvailability !== ""
      ) {
        //لازم كلشي منحفظه بال localstorage يكون اله key فريد غير التاني لينحفظ
        if (i < localStorage.length) {
          i = localStorage.length + 1;
          const roomInfoKey = "roomInfokey" + i;
          var roomInfoValue = {
            //checkkey: checkKey,
            roomtype: inpRoomType,
            roomfloor: inpRoomFloor,
            roomnumber: inpRoomNumber,
            roomavailability: inpRoomAvailability,
          };
          //conver it to string becouse localstorage accept only string fot lists
          var roomInfoValueSerialized = JSON.stringify(roomInfoValue);
          //end converting
          localStorage.setItem(roomInfoKey, roomInfoValueSerialized);
          // Retrieve the object from storage
          //reconvert the string to normal
          let retrievedRoomInfo = JSON.parse(localStorage.getItem(roomInfoKey));
          //end converting
          console.log("retrievedGuestInfo: ", retrievedRoomInfo);
          //chose the item from list to show
          location.reload();
          ////////////////
        }
      }
      //if the field is empyt
      else {
        document.getElementById("error-note").style.display = "block";
      }
    },

    // End Add New Room

    // Start Show Rooms List
    showRoomInfo: function () {
      let n = 0;

      for (let j = 2; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;

        if (localStorage.getItem(roomInfoKey) !== null) {
          n = n + 1;
          var retrievedInfo = localStorage.getItem(roomInfoKey);
          //reconvert the string to normal
          let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
          //end converting
          console.log(deserializedRetrRoomInfo.roomfloor);

          document.getElementById("room-table").innerHTML +=
            '<tr  class="table-row" id="row' +
            j +
            '"><td id="coll' +
            j +
            '">' +
            n +
            '</td><td id="col2">' +
            deserializedRetrRoomInfo.roomtype +
            '</td><td id="col3">' +
            deserializedRetrRoomInfo.roomfloor +
            '</td> <td id="col4">' +
            deserializedRetrRoomInfo.roomnumber +
            '</td><td id="col5">' +
            deserializedRetrRoomInfo.roomavailability +
            "</tr>";
        }

        //    document.getElementById("total-rooms-value").innerHTML += "" + localStorage.length - 1;

        // End Show Rooms List
      }
    },
    //Start Edit Room
    editRoomInfo: function () {
      const roomNumberToUpdate =
        document.getElementById("edit-room-input").value;
      for (let j = 1; j < 100; j++) {
        const roomInfoKey = "roomInfokey" + j;

        var retrievedInfo = localStorage.getItem(roomInfoKey);
        var deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(roomInfoKey) !== null) {
          if (deserializedRetrRoomInfo.roomnumber == roomNumberToUpdate) {
            document.getElementById("submit-edit-room-btn").style.display =
              "block";
  document.getElementById("input-room-floor").style.boxShadow = "1px 2px 2px green";
   document.getElementById("input-room-number").style.boxShadow = "1px 2px 2px green";
            document.getElementById("save-btn").style.display = "none";
            
            document.getElementById("input-room-list").value =
              deserializedRetrRoomInfo.roomtype;
            document.getElementById("input-room-floor").value =
              deserializedRetrRoomInfo.roomfloor;
            document.getElementById("input-room-number").value =
              deserializedRetrRoomInfo.roomnumber;
            document.getElementById("input-room-availability-list").value =
              deserializedRetrRoomInfo.roomavailability;
          }
        }
      }
    },
    //Start Submit Edit Room
    submitEditRoomInfo: function () {
      const roomNumberToUpdate =
        document.getElementById("edit-room-input").value;
      for (let j = 1; j < 100; j++) {
        const roomInfoKey = "roomInfokey" + j;

        var retrievedInfo = localStorage.getItem(roomInfoKey);
        var deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(roomInfoKey) !== null) {
          if (deserializedRetrRoomInfo.roomnumber == roomNumberToUpdate) {
         
          var roomInfoValue = {
            //checkkey: checkKey,
            roomtype: document.getElementById("input-room-list").value ,
            roomfloor: document.getElementById("input-room-floor").value,
            roomnumber: document.getElementById("input-room-number").value,
            roomavailability: document.getElementById("input-room-availability-list").value,
          };
          //conver it to string becouse localstorage accept only string fot lists
          var roomInfoValueSerialized = JSON.stringify(roomInfoValue);
          //end converting
          localStorage.setItem(roomInfoKey, roomInfoValueSerialized);
          // Retrieve the object from storage
          }
        }
      }
    },

    //Start Delete Room
    deleteRoomInfo:function(){
   const roomNumberToUpdate =
        document.getElementById("edit-room-input").value;
      for (let j = 1; j < 100; j++) {
        const roomInfoKey = "roomInfokey" + j;

        var retrievedInfo = localStorage.getItem(roomInfoKey);
        var deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(roomInfoKey) !== null) {
          if (deserializedRetrRoomInfo.roomnumber == roomNumberToUpdate) {
            localStorage.removeItem(roomInfoKey);
            location.reload();
          }
        }
      }
    },
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
$pinkColOp: rgba(255, 69, 97, 0.349);
$yellowCol: rgba(254, 176, 25, 1);
$lightGreenCol: rgba(0, 227, 150, 1);
$darkGreenCol:rgb(37, 194, 37);
$blueCol: rgba(0, 143, 251, 1);
$purpleCol: rgba(119, 93, 208, 1);
#add-room {
  width: 100%;
  height: 540px;
  display: inline-flex;
  //Start Add Room
  .add-room-input {
    left: 4%;
    width: 25%;
    margin-left: 2%;
    margin-right: 2%;
    text-align: left;

    .add-room-form-left {
      width: 100%;
      #add-new-room-title {
        text-align: left;
        margin-top: 80px;
        margin-left: 2%;
                   font-family: "Indie Flower", cursive;
           font-size: 28px;
      }
      .add-room-container-left {
        width: 100%;
        height: 300px;
        margin-top: 15px;
        border-right: 1px solid $pinkColOp;
        #input-room-list {
          height: 20px;
        }

        h1 {
           font-family: "Indie Flower", cursive;
           font-size: 28px;
          margin-bottom: 50px;
        }
        p {
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .room-input {
          width: 60%;
          height: 20px;
          box-shadow: 3px 3px 3px $redCol;
          cursor: auto;
        }

        input {
          cursor: pointer;
        }
        label {
          font-size: 12px;
        }
      }
    }
    #save-btn {
      width: 25%;
      height: 25px;
      cursor: pointer;
      margin-left: 65%;
                     font-family: "Indie Flower", cursive;
           font-size: 15px;
           font-weight: bold;
      
      &:hover{
           font-weight: bolder;
        width: 27%;
        height: 26px;
        transition: 0.1s ease-in-out;
      background: $darkGreenCol;
    }
    }
    #submit-edit-room-btn {
      width: 25%;
      height: 25px;
      cursor: pointer;
      margin-left: 60%;
      display: none;
      background: $lightGreenCol;
                        font-family: "Indie Flower", cursive;
           font-size: 16px;
           &:hover{
             width:26%;
             height: 26px;
             transition: 0.1s ease-in-out;
           }
    }
    // Start Edit Room
    #edit-room-form-left {
      border: 0.5px solid $pinkColOp;
      width: 100%;
      height: 130px;
      margin-top: 25px;
      padding: 15px 0px 0px 5%;
      #edit-room-title {
        margin-bottom: 25px;
                   font-family: "Indie Flower", cursive;
           font-size: 20px;
      }
      #edit-room-input {
        margin-bottom: 10px;
        height: 20px;
        box-shadow: 3px 3px 3px $redCol;
        cursor: auto;
      }
      #delete-room-btn{
        background-color: $redCol;
      }
      #edit-room-btn{
        background: $yellowCol;
      }
      .room-btn {
                   font-family: "Indie Flower", cursive;
           font-size: 15px;
           font-size: bold;
        width: 25%;
        height: 20px;
        margin-right: 15%;
        cursor: pointer;
        border-radius: 10%;
        padding-bottom: 18px;
              &:hover{
           font-weight: bolder;
        width: 26%;
        height: 22px;
        transition: 0.1s ease-in-out;
    }
      }
    }
  }

  //Start Show Room
  .show-room {
    width: 60%;
    height: 540px;
    overflow: hidden;
    overflow-y: scroll;

    margin-top: 90px;
    margin-left: 5%;
    #show-room-title {
      text-align: left;
                        font-family: "Indie Flower", cursive;
           font-size: 28px;
    }
    #room-table {
      width: 95%;
      margin-top: 70px;
      border: 2px solid black;
      margin-right: 5%;
      display: table;
      cursor: pointer;
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
        .view-guest-details-btn {
          width: 90%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
