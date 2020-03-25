<template>
 <div class="py-5">
     <div class="py-3 mx-5 mb-5 border-top border-bottom d-flex justify-content-between" style="width:200px">
         <p class="PNR m-0 themeGrey">selection</p>
         <b-icon icon="chevron-down" font-scale="1" class="rounded-circle themeGrey"  style="font-weight:bold"></b-icon>
     </div>
     <div class="">
         <div class="my-4">
            <p class="PNB mb-0">Good morning, John Smith</p>
            <p class="PNB mb-0 themeGrey">You have 1503 players across 2 networks</p>
         </div>
         <b-container-fluid class="bv-example-row">
            <b-row>
                <b-col lg="9">
                    <b-row>
                        <b-col lg="4" class="px-5">
                            <div class="d-flex justify-content-between">
                                 <p class="themeVoilet PNB" >MineSuperior</p>
                                 <p>
                                    <b-icon icon="person" font-scale="1" class="rounded-circle themeGrey"  ></b-icon>
                                    <span class="themeGrey PNB pl-2">2300 Players </span>
                                </p>
                            </div>
                        </b-col>
                        <b-col lg="4" class="px-5">
                            <div class="d-flex justify-content-between">
                                <p class="themeVoilet PNB">BreakingMC</p>
                                <p>
                                    <b-icon icon="person" font-scale="1" class="rounded-circle themeGrey"  ></b-icon>
                                    <span class="themeGrey PNB pl-2">900 Players </span>
                                </p>
                            </div>
                        </b-col>
                        <b-col lg="4">
                            <div class="border rounded-lg" >
                                <div class="d-flex justify-content-center align-items-center" style="height:200px;">
                                    <div class="text-center">
                                        <b-icon icon="plus-circle" font-scale="3" class="rounded-circle p-2"  style="color: #622fe6;"></b-icon>
                                        <p class="themeVoilet PNB">ADD NEW SERVER</p>
                                    </div>
                                </div>
                            </div>    
                        </b-col>
                    </b-row>
                     <b-row>
                        <b-col lg="8">
                             <p class="PNB">Backend IP’s</p>
                             <b-table striped hover :items="items" :fields="fields"></b-table>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="3" class="px-5">
                   <div>
                       <p class="PNB">Support</p>
                       <hr>
                       <p class="themeGrey PNR">
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                       </p>
                       <p class="PNB">
                           Documentation
                       </p>
                       <p class="PNB">
                           +180 454 323 777
                       </p>
                       <div class="p-2 bg-info text-center rounded">
                            <p class="m-0 PNB text-white">
                                SUBMIT TICKET
                            </p>
                       </div>
                   </div>
                   <div class="mt-5">
                       <p class="PNB">Blog</p>
                       <hr>
                       <p class="themeGrey PNR">
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
                       </p>
                       <div class="p-2 bg-info text-center rounded">
                            <p class="m-0 PNB text-white">
                                VIEW BLOG
                            </p>
                       </div>
                   </div>
                </b-col>
            </b-row>
</b-container-fluid>
     </div>
 </div>
</template>

<script>
export default {
    name:"home",
     data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'Domain',
            sortable: true
          },
          {
            key: 'Backends',
            sortable: false
          },
          {
            key: 'age',
            label: 'Forge Support',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>

<style scoped>
    @import './../css/fonts.css';
    .themeVoilet{
        color:#622fe6;
    }
    .themeGrey{
        color:#a7aab3;
    }
    .PNB{
        font-family:"Proxima Nova Bold" ;
    }
    .PNR{
            font-family:"Proxima Nova Regular"
        }
</style>