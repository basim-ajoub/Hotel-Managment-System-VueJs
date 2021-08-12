<template>
  <div class="add-guest-comp">
    <form class="add-guest" action="">
      <section class="add-guest-sec sec1">
        <h1>Add New Guest</h1>
        <p id="error-note">You Must Fill The Following Field</p>
        <p>Guest Name:</p>
        <input id="guest-name" class="guest-name" type="text" />
        <p>Guest Address:</p>
        <input id="guest-address" class="guest-address" type="text" />
        <section id="sec11">
          <section id="box-input">
            <p>Birth Date:</p>
            <input id="guest-date" type="date" />
            <p>Nationality:</p>
            <input
              id="guest-nationality"
              class="guest-nationality"
              type="text"
            />
          </section>
          <section id="box-input" class="box-d">
            <p>ID Number:</p>
            <input id="guest-id" type="text" />
            <p>Number Of Guest:</p>
            <input id="guest-number" type="number" />
          </section>
          <section id="box-input-resiervation">
            <section id="box-input-resiervation-from">
              <p><span>Resiervation</span> From:</p>
              <input id="guest-resiervation-from" type="date" />
            </section>
            <section id="box-input-resiervation-to">
              <p>To:</p>
              <input id="guest-resiervation-to" type="date" />
            </section>
          </section>
                    <section id="price-nights-details">
            <section id="box-input-total-night">
              <p>Room Type:</p>
          <select @change="showRoomInfo" id="input-room-type-list" name="room-type-list">
            <option value="single-room">Single Room</option>
            <option value="double-room">Double Room</option>
            <option value="golden-room">Golden Room</option>
          </select>
            </section>
            <section id="box-input-price">
              <p>Available Room No. :</p>
              <select id="input-room-available-list" name="room-available-list">
          </select>
            </section>
          </section>
          <section id="price-nights-details">
            <section id="box-input-total-night">
              <p>Total Nights:</p>
              <input id="guest-total-nights" type="number" />
            </section>
            <section id="box-input-price">
              <p>Price/night:</p>
              <input id="guest-price-per-night" type="number" />
            </section>
          </section>
        </section>
      </section>
      <section class="add-guest-sec sec2">
        <p>Add Relatives Person-1</p>
        <input type="checkbox" id="person p-1" class="person p-1" />
        <p>Name:</p>
        <input id="person-one-name" type="text" />
        <p>Birth Date:</p>
        <input id="person-one-date" type="date" />
        <p>Nationality:</p>
        <input id="person-one-nationality" type="text" />
        <p>ID Number:</p>
        <input id="person-one-id" type="text" />
      </section>
      <section class="add-guest-sec sec3">
        <p>Person-2</p>
        <input type="checkbox" id="person p-2" class="person p-2" />
        <p>Name:</p>
        <input id="person-two-name" type="text" />
        <p>Birth Date:</p>
        <input id="person-two-date" type="date" />
        <p>Nationality:</p>
        <input id="person-two-nationality" type="text" />
        <p>ID Number:</p>
        <input id="person-two-id" type="text" /><br />
        <button @click="showGuestInfo" id="show-guest-btn" type="button">
          Show
        </button>
        <button @click="saveGuestInfo" id="add-guest-btn" type="button">
          Save
        </button>
        <button @click="updateOldGuestInfo" id="update-guest-btn" type="button">
          Update
        </button>
      </section>
    </form>
    <div id="example">
      <div class="guest-lists">
        <table id="guest-table">
          <tr id="costant-row">
            <th id="col1">No.</th>
            <th id="col2">Name</th>
            <th id="col3">Nationality</th>
            <th id="col4">Adress</th>
            <th id="col5">Birth Date</th>
            <th id="col6">Resiervation from</th>
            <th id="col7">Resiervation to</th>
            <th id="col8">Fees per Night</th>
            <th id="col9">Total Nights</th>
            <th id="col10">View Guest</th>
          </tr>
        </table>
      </div>
      <button
        @click="closeGuestList"
        id="close-guest-list"
        class="close-guest-list"
      >
        Close
      </button>
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
            placeholder="Enter Guest Number"
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
          <p id="guest-card-name">Basim Ajoub</p>
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
          <p id="guest-card-id">N 0145987</p>
          <br />
          <h5>Gest's Number :</h5>
          <p id="guest-card-number">5</p>
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
              @click="updateGuestInfo"
              class="guest-btn-list update-guest-btn"
              id="update-guest-btn"
            >
              Update
            </button>
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
export default {
  name: "addGuestComp",


mounted: function () {
    this.showRoomInfo(); //method show Room Type will execute at pageload
  },
  methods: {
    // Start Close Guest List
    closeGuestList: function () {
      document.getElementById("example").style.display = "none";
    },
    // Start Add New Guest
    saveGuestInfo: function () {
      const inpGuestName = document.getElementById("guest-name").value;
      const inpGuestAddress = document.getElementById("guest-address").value;
      const inpGuestDate = document.getElementById("guest-date").value;
      const inpGuestNationality =
        document.getElementById("guest-nationality").value;
      const inpGuestId = document.getElementById("guest-id").value;
      const inpGuestNumber = document.getElementById("guest-number").value;
      const inpGuestResiervationFrom = document.getElementById(
        "guest-resiervation-from"
      ).value;
      const inpGuestResiervationTo = document.getElementById(
        "guest-resiervation-to"
      ).value;
            const inpGuestRoomType = document.getElementById(
        "input-room-type-list"
      ).value;
            const inpGuestRoomNumber = document.getElementById(
        "input-room-available-list"
      ).value;
      const inpGuestTotalNights =
        document.getElementById("guest-total-nights").value;
      const inpGuestPricePerNight = document.getElementById(
        "guest-price-per-night"
      ).value;

      const inpGuestPersonOneName =
        document.getElementById("person-one-name").value;
      const inpGuestPersonOneDate =
        document.getElementById("person-one-date").value;
      const inpGuestPersonOneNationality = document.getElementById(
        "person-one-nationality"
      ).value;
      const inpGuestPersonOneId =
        document.getElementById("person-one-id").value;
      const inpGuestPersonTwoName =
        document.getElementById("person-two-name").value;
      const inpGuestPersonTwoDate =
        document.getElementById("person-two-date").value;
      const inpGuestPersonTwoNationality = document.getElementById(
        "person-two-nationality"
      ).value;
      const inpGuestPersonTwoId =
        document.getElementById("person-two-id").value;
     
      var i = 0;
      //to prevent the empty save
      if (
        inpGuestName &&
        inpGuestAddress &&
        inpGuestDate &&
        inpGuestNationality &&
        inpGuestId &&
        inpGuestNumber &&
        inpGuestResiervationFrom &&
        inpGuestResiervationTo &&
        inpGuestTotalNights &&
        inpGuestPricePerNight && inpGuestRoomType && inpGuestRoomNumber  !== ""
      ) {
        //لازم كلشي منحفظه بال localstorage يكون اله key فريد غير التاني لينحفظ
        if (i < localStorage.length) {
          i = localStorage.length + 1;
          const guestInfoKey = "guestInfokey" + i;

// change the room status to unavailable room
        
   for (let j = 1; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;
        
    if (localStorage.getItem(roomInfoKey) !== null) {
        
      
        var retrievedInfo = localStorage.getItem(roomInfoKey);
        //reconvert the string to normal
        let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        //end converting
    if(deserializedRetrRoomInfo.roomnumber == inpGuestRoomNumber && deserializedRetrRoomInfo.roomtype == inpGuestRoomType){
        //filter with available room
        if(deserializedRetrRoomInfo.roomavailability == "available"){
          const reUploadRoomType = deserializedRetrRoomInfo.roomtype;
          const reUploadRoomNumber= deserializedRetrRoomInfo.roomnumber;
const reUploadRoomFloor= deserializedRetrRoomInfo.roomfloor;
var roomInfoValue = {
            //checkkey: checkKey,
            roomtype:reUploadRoomType,
            roomfloor: reUploadRoomNumber,
            roomnumber: reUploadRoomFloor,
            roomavailability: "unavailable",
          };
          //conver it to string becouse localstorage accept only string fot lists
          var roomInfoValueSerialized = JSON.stringify(roomInfoValue);
          //end converting
          localStorage.setItem(roomInfoKey, roomInfoValueSerialized);
        }
        }
        }
        }
//End Room Status Changing


          var guestInfoValue = {
            //checkkey: checkKey,
            name: inpGuestName,
            adress: inpGuestAddress,
            date: inpGuestDate,
            nationality: inpGuestNationality,
            id: inpGuestId,
            guestno: inpGuestNumber,
            resiervationfrom: inpGuestResiervationFrom,
            resiervationto: inpGuestResiervationTo,
            resiervedroomtype : inpGuestRoomType,
            resiervedroomnumber : inpGuestRoomNumber, 
            totalnights: inpGuestTotalNights,
            pricepernight: inpGuestPricePerNight,
            persononename: inpGuestPersonOneName,
            persononedate: inpGuestPersonOneDate,
            persononenationality: inpGuestPersonOneNationality,
            persononeid: inpGuestPersonOneId,
            persontwoname: inpGuestPersonTwoName,
            persontwodate: inpGuestPersonTwoDate,
            persontwonationality: inpGuestPersonTwoNationality,
            persontwoid: inpGuestPersonTwoId,
          };
          //conver it to string becouse localstorage accept only string fot lists
          var guestInfoValueSerialized = JSON.stringify(guestInfoValue);
          //end converting
          localStorage.setItem(guestInfoKey, guestInfoValueSerialized);
          // Retrieve the object from storage
          //reconvert the string to normal
          let retrievedGuestInfo = JSON.parse(
            localStorage.getItem(guestInfoKey)
          );
          //end converting
          console.log("retrievedGuestInfo: ", retrievedGuestInfo);
          //chose the item from list to show
          location.reload();
          ////////////////

          window.alert(localStorage.length);
        }
      }
      //if the field is empyt
      else {
        document.getElementById("error-note").style.display = "block";
      }
    },

    // End Add New Guest

    // Start Show Guests List
    showGuestInfo: function () {
      let n=2;
      document.getElementById("example").style.display = "block";
      document.getElementById("guest-table").innerHTML =
        '<tr id="costant-row"><th id="col1">No.</th><th id="col2">Name</th><th id="col3">Nationality</th><th id="col4">ID</th><th id="col5">Birth Date</th><th id="col6">Resiervation from</th><th id="col7">Resiervation to</th><th id="col8">Fees per Night</th><th id="col9">Total Nights</th><th id="col10">View Guest</th></tr>';
      for (let j = 1; j < localStorage.length + 1; j++) {
        const guestInfoKey = "guestInfokey" + j;
        if (localStorage.getItem(guestInfoKey) !== null) {

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
          j +
          '</td><td id="col2">' +
          deserializedRetrGuestInfo.name +
          '</td><td id="col3">' +
          deserializedRetrGuestInfo.nationality +
          '</td> <td id="col4">' +
          deserializedRetrGuestInfo.id+
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
          "</td>" +
          '<td class="btn-list" id="col10"><button class="guest-btn-list view-guest-details-btn" id="view-guest-details-btn' +
          j +
          '">View</button><button class="guest-btn-list update-guest-btn" id="update-guest-btn' +
          j +
          '">Update</button><button class="guest-btn-list delete-guest-btn" id="delete-guest-btn">Delete</button></td></tr>';
      }
      }
      document.getElementById("total-guests-value").innerHTML +=
        "" + n;

      // End Show Guests List
    },
    // Start View Guests List

    //  localStorage.removeItem(this.guestInfoKey);
    viewGuestCard: function () {
      //define constants

      console.log("viewed");
      const inpGuestIdToView =
        document.getElementById("input-guest-number").value;
      for (let i = 2; i < localStorage.length + 1; i++) {
        const guestInfoKey = "guestInfokey" + i;
        var retrievedInfo = localStorage.getItem(guestInfoKey);
        let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(guestInfoKey) !== null) {
        if (inpGuestIdToView == deserializedRetrGuestInfo.id) {
          document.getElementById("pop-up-not-found-view").style.display =
            "none";
          document.getElementById("view-guest-details").style.display = "block";
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

          console.log(inpGuestIdToView + "is viewd");
        } else {
          document.getElementById("pop-up-not-found-view").style.display =
            "block";
        }
        }
      }
    },
    // End View New Guest

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

    // Start Update old Guest
    updateGuestInfo: function () {
      const guestIdToUpdate =
        document.getElementById("guest-card-id").innerText;
      for (let i = 2; i < localStorage.length + 1; i++) {
        const guestInfoKey = "guestInfokey" + i;
        var retrievedInfo = localStorage.getItem(guestInfoKey);
        let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(guestInfoKey) !== null) {
        if (guestIdToUpdate == deserializedRetrGuestInfo.id) {
                    document.getElementById("example").style.display = "none";
                    document.getElementById("add-guest-btn").style.display = "none";
          document.getElementById("show-guest-btn").style.display = "none";
          document.getElementById("view-guest-details").style.display = "none";
          document.getElementById("update-guest-btn").style.display = "block";

          document.getElementById("guest-name").value =
            deserializedRetrGuestInfo.name;
          document.getElementById("guest-nationality").value =
            deserializedRetrGuestInfo.nationality;
          document.getElementById("guest-address").value =
            deserializedRetrGuestInfo.adress;
          document.getElementById("guest-date").value =
            deserializedRetrGuestInfo.date;
          document.getElementById("guest-number").value =
            deserializedRetrGuestInfo.guestno;
          document.getElementById("guest-id").value =
            deserializedRetrGuestInfo.id;
          document.getElementById("guest-resiervation-from").value =
            deserializedRetrGuestInfo.resiervationfrom;
          document.getElementById("guest-resiervation-to").value =
            deserializedRetrGuestInfo.resiervationto;
                      document.getElementById("input-room-available-list").value =deserializedRetrGuestInfo.resiervedroomnumber;
                      document.getElementById("input-room-type-list").value =deserializedRetrGuestInfo.resiervedroomtype;
          document.getElementById("guest-total-nights").value =
            deserializedRetrGuestInfo.totalnights;
          document.getElementById("guest-price-per-night").value =
            deserializedRetrGuestInfo.pricepernight;
          document.getElementById("person-one-name").value =
            deserializedRetrGuestInfo.persononename;
          document.getElementById("person-one-id").value =
            deserializedRetrGuestInfo.persononeid;
          document.getElementById("person-one-date").value =
            deserializedRetrGuestInfo.persononedate;
          document.getElementById("person-one-nationality").value =
            deserializedRetrGuestInfo.persononenationality;
          document.getElementById("person-two-name").value =
            deserializedRetrGuestInfo.persontwoname;
          document.getElementById("person-two-id").value =
            deserializedRetrGuestInfo.persontwoid;
          document.getElementById("person-two-date").value =
            deserializedRetrGuestInfo.persontwodate;
          document.getElementById("person-two-nationality").value =
            deserializedRetrGuestInfo.persontwonationality;

        }
        }
      }
    },

    updateOldGuestInfo: function () {
      const guestIdToUpdateOldGuest = document.getElementById("guest-id").value;
      for (let i = 2; i < 200 ; i++) {
        const guestInfoKey = "guestInfokey" + i;
        var retrievedInfo = localStorage.getItem(guestInfoKey);
        var deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
        if (localStorage.getItem(guestInfoKey) !== null) {
        if (guestIdToUpdateOldGuest == deserializedRetrGuestInfo.id) {
            var guestInfoValue = {
            //checkkey: checkKey,
            name: document.getElementById("guest-name").value,
            adress: document.getElementById("guest-address").value,
            date: document.getElementById("guest-date").value,
            nationality: document.getElementById("guest-nationality").value,
            id:   document.getElementById("guest-id").value,
            guestno: document.getElementById("guest-number").value,
            resiervationfrom: document.getElementById("guest-resiervation-from").value,
            resiervationto: document.getElementById("guest-resiervation-to").value,
            resiervedroomtype: document.getElementById("input-room-type-list").value,
            resiervedroomnumber: document.getElementById("input-room-available-list").value,
            totalnights: document.getElementById("guest-total-nights").value,
            pricepernight: document.getElementById("guest-price-per-night").value,
            persononename: document.getElementById("person-one-name").value,
            persononedate: document.getElementById("person-one-date").value,
            persononenationality: document.getElementById("person-one-nationality").value,
            persononeid: document.getElementById("person-one-id").value,
            persontwoname: document.getElementById("person-two-name").value,
            persontwodate:  document.getElementById("person-two-date").value,
            persontwonationality:  document.getElementById("person-two-nationality").value,
            persontwoid:  document.getElementById("person-two-id").value,
          };
          //conver it to string becouse localstorage accept only string fot lists
          var guestInfoValueSerialized = JSON.stringify(guestInfoValue);
          //end converting
          localStorage.setItem(guestInfoKey, guestInfoValueSerialized);
          location.reload();
          }
        }
      }
    
    },

    // End Update old Guest

    closeGuestCard: function () {
      document.getElementById("pop-up-not-found-view").style.display = "none";
      document.getElementById("view-guest-details").style.display = "none";
      document.getElementById("input-guest-number").value = "";
    },

    //View Room To Select One
    showRoomInfo: function () {
      let n =0 ;
      document.getElementById("input-room-available-list").innerHTML = "";
     const inpRoomType = document.getElementById("input-room-type-list").value;
          for (let j = 2; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;
        
    if (localStorage.getItem(roomInfoKey) !== null) {
        
      
        var retrievedInfo = localStorage.getItem(roomInfoKey);
        //reconvert the string to normal
        let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        //end converting

        //filter with available room type
        if(deserializedRetrRoomInfo.roomtype == inpRoomType){
             n = n+1;
        
        if(deserializedRetrRoomInfo.roomavailability == "available"){
        document.getElementById("input-room-available-list").innerHTML += '<option value="'+deserializedRetrRoomInfo.roomnumber+'">'+ deserializedRetrRoomInfo.roomnumber  + '</option>';
        }
      }
    }
  //    document.getElementById("total-rooms-value").innerHTML += "" + localStorage.length - 1;

      // End Show Rooms List
      }
 
      

    }
    //End Methods
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lobster&family=Source+Sans+Pro&display=swap");
$MainColor: #0d2137;
$FontColor: #f3f298;
$defaultColor: #2e77ae;
$mainCol: rgb(248, 228, 163);
$redCol: rgb(236, 47, 47);
$pinkCol: rgba(255, 69, 96, 1);
$pinkColOp: rgba(255, 69, 97, 0.938);
$yellowCol: rgba(254, 176, 25, 1);
$lightGreenCol: rgba(0, 227, 150, 1);
$darkGreenCol: rgb(42, 167, 42);
$blueCol: rgba(0, 143, 251, 1);
$purpleCol: rgba(119, 93, 208, 1);
.add-guest-comp {
  width: 100%;
  height: 640px;
  .guest-btn-list {
    width: 100%;
    cursor: pointer;
    font-weight: bold;
    font-family: "Indie Flower", cursive;
    &:hover {
      background: $darkGreenCol;
      height: 27px;
      color: $mainCol;
    }
  }
  .view-guest-details-btn {
    width: 100%;
    background: $purpleCol;
  }
  .update-guest-btn {
    background: $yellowCol;
  }
  .delete-guest-btn {
    background: $pinkCol;
    &:hover {
      background: red;
    }
  }
  #circle {
    width: 25%;
    height: 150px;
    background-color: aqua;
    position: absolute;
    border-radius: 50%;
    margin-left: 50%;
  }
  .add-guest {
    .add-guest-sec {
      width: 25%;
      margin-top: 70px;
      padding-left: 4%;
      margin-right: 2%;
      text-align: left;
      float: left;
      #error-note {
        color: red;
        display: none;
      }

      h1 {
         font-family: "Indie Flower", cursive;
        margin-bottom: 70px;
        font-size: 28px;
      }
      p {
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      input {
        width: 100%;
        box-shadow: 3px 3px 3px $redCol;
      }
      #sec11 {
        width: 100%;

        #box-input {
          width: 50%;
          float: left;
        }
        .box-d {
          margin-top: 4.5px;
          float: right;
          margin-bottom: 10px;
        }
        input {
          width: 90%;
        }
        #box-input-resiervation {
          width: 100%;
          display: flex;
          input {
            width: 90%;
          }
        }
        #box-input-resiervation-from {
          width: 50%;
          text-align: left;
          p {
            font-size: 15px;
            margin-right: 50%;
            span {
              font-weight: bold;
            }
          }
        }
        #box-input-resiervation-to {
          width: 50%;
          margin-top: 17.5px;
        }
        #price-nights-details {
          width: 100%;
          display: flex;
          #box-input-total-night {
            width: 50%;
            float: left;
          }
          #box-input-price {
            width: 50%;
          }
        }
      }
    }
    button {
      width: 37%;
      height: 25px;
      cursor: pointer;
      box-shadow: 2px 2px 2px $redCol;
      font-weight: bold;
      border: 0.5px solid black;
      border-radius: 15%;
      &:hover {
        width: 38.5%;
        height: 29px;
        font-weight: bolder;
        transition: 0.2s ease-in-out;
        box-shadow: 4px 5px 5px 0.5px $redCol;
        border: 1.2px solid black;
      }
    }
    #add-guest-btn {
      margin-top: 135px;
      background: $purpleCol;
      letter-spacing: 1px;
      font-weight: bolder;
      font-size: 17px;
      font-family: "Indie Flower", cursive;
      &:hover {
        background: $darkGreenCol;
      }
    }
    #show-guest-btn {
      margin-left: 13%;
      margin-right: 5%;
      background: $yellowCol;
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 17px;
      font-family: "Indie Flower", cursive;
      &:hover {
        background: $darkGreenCol;
      }
    }
    #update-guest-btn {
      margin-top: 130px;
      margin-left: 60%;
      background: $yellowCol;
      display: none;
       &:hover {
        background: $darkGreenCol;
      }
    }
 
    .sec2,
    .sec3 {
      padding-top: 86px;
      .person {
        width: 8%;
      }
    }
  }
  // Start Guest Table
  #example {
    position: absolute;
    width: 100%;
    height: 643px;
    background: rgba(0, 0, 0, 0.37);
    display: none;

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
        background: $mainCol;
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
        .guest-btn-list {
          width: 20%;
          border-radius: 10%;
          margin-right: 1%;
        }
      }
    }

    .guest-lists {
      width: 98%;
      height: 500px;
      background: red;
      margin-left: 1%;
      margin-top: 1%;
      height: 600px;
      background-color: wheat;
      overflow: hidden;
      overflow-y: scroll;
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
