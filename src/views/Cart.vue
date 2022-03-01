<template>
  <body>
   
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 mr-auto">
            <li class="nav-item">
              <a
                class="btn btn-primary me-3"
                aria-current="page"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="btn btn-primary active position-relative"
                href="./cart.html"
                >Cart
                <span
                  id="badge"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                ></span
              ></a>
            </li>
          </ul>
        </div>
      </div>
    <div class="container mt-5 pt-4"></div>

   
  </body>

</template>

<script>
export default {

}


</script>

<style>

</style>