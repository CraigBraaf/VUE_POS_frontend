<template>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
     <div class="containerheading">ZC BEAUTY<br>
          <button id="Purchasebtn" :to="{name:'Products'}">Explore Products</button>
      </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.cossetmoi.com/wp-content/uploads/2020/08/rsz_4165669.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.cossetmoi.com/wp-content/uploads/2020/08/rsz_4165669.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.cossetmoi.com/wp-content/uploads/2020/08/rsz_4165669.png" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<footer>@Copyright ZCBeauty</footer>

</template>


<script>


export default {
    name: 'Home',
    components: {
        
    },

}
</script>

<style>


.carousel-inner {
    height: 88vh;
    opacity: 70%;
}

#Purchasebtn:hover {
  letter-spacing: 0.8em;
  background-color: #F08C99;
}

#Purchasebtn {
  color: white;
  height: 4em;
  width: 10%;
  padding: 1.5em auto;
  margin: 1em auto;
  background-color: #FEB1C0;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
}


</style>