<template>
    <div id="available-room-comp">
 <div class="show-room">
        <h1 id="show-room-title">Show Available Room </h1>
      <table id="room-table">
          <tr id="costant-row">
            <th id="col1">No.</th>
            <th id="col2">Room Type</th>
            <th id="col3">Floor</th>
            <th id="col4"> Number</th>
            <th id="col5"> Status</th>

          </tr>
        </table>
    </div>
    </div>
</template>

<script>
    export default {
        name: "RoomAvailable",
        
       mounted: function () {
    this.showRoomInfo(); //method showEmployerCards  will execute at pageload
  },
methods: {

      // Start Show Rooms List
    showRoomInfo: function () {
      let n =0 ;
     
      for (let j = 2; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;
        
    if (localStorage.getItem(roomInfoKey) !== null) {
        
      
        var retrievedInfo = localStorage.getItem(roomInfoKey);
        //reconvert the string to normal
        let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
        //end converting

        //filter with available room
        if(deserializedRetrRoomInfo.roomavailability == "available"){
             n = n+1;
        
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
          deserializedRetrRoomInfo.roomavailability +'</tr>'
      }
    }
  //    document.getElementById("total-rooms-value").innerHTML += "" + localStorage.length - 1;

      // End Show Rooms List
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
$blueCol: rgba(0, 143, 251, 1);
$purpleCol: rgba(119, 93, 208, 1);
   //Start Show Room
     .show-room{
          width: 95%;
          height: 540px;
          overflow: hidden;
          overflow-y: scroll;

        
    margin-top: 90px;
        margin-left: 2%;
    #show-room-title{
      text-align: left;
                 font-family: "Indie Flower", cursive;
           font-size: 28px;
    }
#room-table {
      width:95%;
      margin-top: 70px;
      border: 2px solid black;
      display: table;
      cursor: pointer;
      #costant-row{
          height: 40px;
      }
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
</style>