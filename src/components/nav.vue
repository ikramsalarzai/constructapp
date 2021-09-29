<template>
  <nav class="navbar navbar-light   bg-white navbar-expand-lg">
    <router-link to="/" class="navbar-brand">
           <img src="@/assets/images/logo.png" class="w-50" alt="" srcset=""
    /> </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active ml-lg-n5">
          <router-link to="/" class="nav-link  "
            >Home<span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link  " href="#">Interior Design</a>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link  ">
            Blog</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link  "
            >Contact us</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>

.navbar-link{
 
}
</style>