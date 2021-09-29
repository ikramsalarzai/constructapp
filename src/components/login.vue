<template>
  <div class="container-fluid p-4">
    <div class="row">
      <div class="col-md-5 offset-1 picture1"></div>
      <div class="col-md-5 col-sm-12 col2 bg-white text-center">
        <img
          class="w-50 p-3"
          src="../assets/images/logo.png"
          alt=""
          srcset=""
        />

        <h5 class="text-center text-muted mt-5">Welcome to Duxpro</h5>
        <form action="" class="mt-4">
          <label class="text-muted"> User name or Email: </label>
          <input type="text" class="mb-2" placeholder="David Brooks" value="" />
          <br /><br />

          <label class="text-muted"> Password: </label>
          <input type="password" class="mb-2" placeholder="********" value="" />
          <br />
          <a href="forgetpassword.html" class="float-right">Forget password?</a>
          <div class="clearfix"></div>

          <div class="btn btn-info Signin">Sign in</div>
        </form>
 
        <hr>


        <p class="font-weight-bold">
          <img src="../assets/images/google.png" class="" width="5%" alt="" />
          Sign in with Google
        </p>
        <p>New to Loverbirds? <a href="signup.html">Create Acount</a></p>
 

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.Signin {
  border-radius: 20px;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

input {
  border: none;
  border-bottom: 1px solid rgb(136, 136, 136);
  width: 90%;
  margin-left: 20px;
  text-align: left !important;
}

::placeholder {
  color: rgb(0, 0, 0);
  font-weight: 600;
}

.col2 {
  text-align: center;
}

form > span {
  margin-left: 20px;
}

a {
  text-decoration: underline;
  color: cadetblue;
}

hr {
  margin-top: 30px;
  padding: 0;
  border: none;
  border-top: 2px solid #ccc;
  color: #333;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
  width: 30%;
}

hr:after {
  content: "Or";
  display: inline-block;
  position: relative;
  top: -0.8em;
  font-size: 1.2em;
  padding: 0 0.25em;
  background: white;
}

form {
  min-height: 200px;
}

.row {
  padding: 0px 30px 0px 30px;
}

.slider {
  padding: 0px 30px 0px 30px;
}

.container1 {
  position: relative;
  font-family: Arial;
}

.text-block {
  position: absolute;
  /* bottom: 20px;
  right: 20px; */
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;

  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.picture1 {
  background-image: url("../assets/images/1.jpg");
  background-position: center;
  background-size: cover;
}

.logo {
  background-color: black;
}

body {
  background-color: hsl(195, 53%, 79%);
}
form > label {
  float: left;
  margin-left: 33px;
}
</style>