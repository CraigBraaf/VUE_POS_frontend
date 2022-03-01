<template>
    
      <div class="container">
        <div class="Productheading">Choose your product:</div>
    
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 mr-auto">
            <li class="nav-item">
              <a
                class="btn btn-primary me-3 active"
                aria-current="page"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="btn btn-primary me-3 position-relative"
                href="./cart.html"
                >Cart
                <span
                  id="badge"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                ></span
              ></a>
            </li>
            <li class="nav-item">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
              >
                Add a product
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    <div
                class="modal fade"
                id="addProductModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Add product
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="addTitle" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addTitle"
                          id="addTitle"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="addCategory"
                          id="addCategory"
                        >
                          <option value="Leashes">Leashes</option>
                          <option value="Treats">Treats</option>
                          <option value="Cages">Cages</option>
                          <option value="Jackets">Jackets</option>
                          

                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="addPrice" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addPrice"
                          id="addPrice"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="addImg" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="addImg"
                          id="addImg"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="createProduct()"
                      >
                        Create Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    <div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="All">All</option>
          <option value="Brushes">Brushes</option>
          <option value="Hairdryer">Hair Dryer</option>
          <option value="Eyeshadow">Eye Shadow Pallatte</option>
          <option value="FlatIron">Flat Iron</option>

        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-25 ms-3">
        <label for="" class="form-label">Sort price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
    <div id="products" class="container d-flex mb-3">
      
    </div>
</template>

<script>
export default {


}
</script>

<style>
.Productheading {
     font-size: 90px;
}
</style>