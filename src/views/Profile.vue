<template>
  <div class="container">
    <header class="jumbotron">
      <div class="card" style="background-color:#3bb2d6">
        <img
          class="headshot"
          src="https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"
        />
        <div class="text-area">
          <h4>
            <strong>{{ currentUser.name }}</strong>
          </h4>
          <p class="title">
            <strong>Token:</strong>
            {{ currentUser.accessToken.substring(0, 20) }} ...
            {{
              currentUser.accessToken.substr(
                currentUser.accessToken.length - 20
              )
            }}
          </p>
          <p>
            <strong>Id:</strong>
            {{ currentUser._id }}
          </p>
          <p>
            <strong>Email:</strong>
            {{ currentUser.email }}
          </p>
          <p><button class="button">Edit</button></p>
        </div>
      </div>
    </header>
  </div>
 
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.headshot {
  width: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 33.3%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 16px;
}

html {
  box-sizing: border-box;
}

.title {
  color: grey;
}

.text-area {
  padding: 16px;
}

.button {
  border: none;
  display: block;
  padding: 8px;
  color: white;
  background-color: black;
  text-align: center;
  cursor: pointer;
  width: 100%;
}
</style>