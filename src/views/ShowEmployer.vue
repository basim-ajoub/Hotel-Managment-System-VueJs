<template>
  <div class="show-employer-view">
    <h1 id="show-employer-title">Show Employers  </h1>
    <div id="cards-view" class="cards-view">
    
    <showEmployer />

    </div>
  </div>
</template>
<script>
import showEmployer from "../components/employers/showemployercard.vue";
export default {
  name: "showEmployers",
  
  
  components: {
    showEmployer,
    
  },
 
  
};
</script>
<style lang="scss">
.show-employer-view{
  h1{
     font-family: "Indie Flower", cursive;
     font-size: 28px;
  }
  #show-employer-title{
text-align: left;
margin-left: 2%;
margin-top: 40px;
  }
 #cards-view{
 
}
}
</style>
