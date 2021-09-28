<template>
  <div>
         <div class="bg-info w-100 col1">

   </div>
    <div class="container ">
            <div class="row px-5  col2 ">
                <div class="col-lg-8 bg-light  shadow">
                    <h4 class="p-lg-3 ">Send us a message</h4>
                    <form action="" class="pb-4">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><label for="">Name*</label>
                                        <input type="text" placeholder="Your name" class="  " id="">
                                    </td>
                                    <td><label for="">Email*</label>
                                        <input type="email" placeholder="Your Email" class=" " id="">
                                    </td>
                                </tr>
                                <tr>
                                    <td><label for="">Phone</label>
                                        <input type="tel" placeholder="Your Phone" class=" " id="">
                                    </td>
                                    <td><label for="">Company</label>
                                        <input type="text" placeholder="Your Company" class=" " id="">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <textarea name="" rows="6" id=""
                                            class="form-control">Enter your message</textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-info px-5"> Submit</button>
                    </form>
                </div>
                <div class="col-lg-4 p-2 p-3 text-white shadow bg-secondary">
                    <h4>Contact Information</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Molestias, magnam!
                    </p>
                    <br><br>

                    <i class="fa fa-map-marker  fa-2x text-white  " aria-hidden="true"></i>
                    <span class="  ">Nasir Bagh road Peshawar Kpk</span>
                    <br><br>
                    <i class="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                    <span> +1 (291) 939 9321</span>
                    <br><br>
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <span> info@mywebsite.com</span>
                </div>
            </div>
      
  
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style  >
 .col1{
        min-height: 200px;
    }
    
    .col2 {
        margin-top: -160px;
    }


    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }

    input {
        border: none;
        border-bottom: 1px solid rgb(136, 136, 136);
        width: 100%;
        background-color: rgb(253, 251, 251);
        text-align: left !important;
        padding: 5px;
    }
</style>