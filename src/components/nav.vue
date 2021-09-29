<template>
<!-- <nav class="navbar navbar-expand-lg  navbar-light bg-dark">
        <a class="navbar-brand text-white" href="#">
            <img src="@/assets/images/logo.png" class="w-50" alt="" srcset="">
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active ">
                    <router-link to="/" class="nav-link text-white">Home<span class="sr-only">(current)</span></router-link>
                  
                </li>
                <li class="nav-item">
                       <a class="nav-link text-white" href="#">Interior Design</a>
                
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link text-white">Contact us</router-link>
                    
                </li>
                <li class="nav-item">
                    <router-link to="/blog" class="nav-link text-white" > Blog</router-link> 
                </li>
            </ul>
        </div>
    </nav> 
-->

  <nav class="navbar navbar-light bg-secondary">
    <a class="navbar-brand" href="#">
      <img src="@/assets/images/logo.png" class="w-50" alt="" srcset=""
    /></a>
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
        <li class="nav-item active">
          <router-link to="/" class="nav-link text-white"
            >Home<span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Interior Design</a>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link text-white">
            Blog</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link text-white"
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
</style>