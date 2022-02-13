const shirt_newArrival=[
    {
        "id":1,
        "title":"Lorem ipsum dolor sit amet",
        "price":10000,
        "image1":["images/shirt1.jpg","images/shirt6.jpg","images/shirt6.jpg"],
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus dolore eum neque "


        
    },

    {
        "id":2,
        "title":"Lorem ipsum dolor sit amet",
        "price":10000,
        "image2":["images/sh8.png","images/shirt6.jpg"],
        "description":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum"

    },

    {
        "id":3,
        "title":"Lorem ipsum dolor sit amet",
        "price":13000,
        "image3":["images/shirt6.jpg","images/sh7.jpg"],
        "description":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum"

    },

    {
        "id":4,
        "title":"Lorem ipsum dolor sit amet",
        "price":13000,
        "image4":["images/shirt6.jpg","images/sh7.jpg"],
        "description":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum"

    },
    {
        "id":5,
        "title":"Lorem ipsum dolor sit amet",
        "price":13000,
        "image5":["images/shirt6.jpg","images/sh7.jpg"],
        "description":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum"


    },
    {
        "id":6,
        "title":"Lorem ipsum dolor sit amet",
        "price":13000,
        "image6":["images/shirt6.jpg","images/sh7.jpg"],
        "description":"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum"

    },
];

const dress_Array=[
    {
        "id":1,
        "price":10000,
        "image1":["images/dress1.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image2":["images/dress2.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image3":["images/dress3.png"]
    },
    {
        "id":1,
        "price":10000,
        "image4":["images/dress4.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image5":["images/dress5.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image6":["images/dress8.jpg"]
    },
];

const jeanArray=[
    {
        "id":1,
        "price":10000,
        "image1":["images/jean2.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image2":["images/pant1.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image3":["images/pant2.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image4":["images/jean5.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image5":["images/pant6.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image6":["images/jean2.jpg"]
    },
];

const shirt_featureArray=[
    {
        "id":1,
        "price":10000,
        "image1":["images/sh7.jpg"

 ]   },

    {
        "id":2,
        "price":10000,
        "image2":["images/shirt6.jpg"]
    },

    {
        "id":3,
        "price":13000,
        "image3":["images/shirt4.jpg"]
    },

    {
        "id":4,
        "price":13000,
        "image4":["images/shirt5.jpg"]
    },
    {
        "id":5,
        "price":13000,
        "image5":["images/shirt7.png"]

    },
    {
        "id":6,
        "price":13000,
        "image6":["images/shirt2.jpg"]
    },
];

const dress_featureArray=[
    {
        "id":1,
        "price":10000,
        "image1":["images/dress1.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image2":["images/dress10.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image3":["images/dress11.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image4":["images/dress12.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image5":["images/dress9.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image6":["images/dress8.jpg"]
    },
];

const jean_featureArray=[
    {
        "id":1,
        "price":10000,
        "image1":["images/pant1.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image2":["images/pant2.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image3":["images/pant4.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image4":["images/pant6.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image5":["images/pant5.jpg"]
    },
    {
        "id":1,
        "price":10000,
        "image6":["images/jean2.jpg"]
    },
]



let newArrival=document.getElementById("new-arrival");
let dressCollection=document.getElementById("dress");
let JeanCollection=document.getElementById("jean");

let feature_shirt=document.getElementById('feature_shirt');
let feature_dress=document.getElementById('feature_dress');
let feature_jean=document.getElementById('feature_jean');

let category=[shirt_newArrival,dress_Array,jeanArray,shirt_featureArray,dress_featureArray,jean_featureArray]
let category_id=[newArrival,dressCollection,JeanCollection,feature_shirt,feature_dress,feature_jean]

let cart=[];
let c = 1;

category.forEach(function (category_item){
    category_item.forEach(item=> {

        for(n in item){
            if(n=='image'+c){
                // console.log(item[n][0])

              category_id.forEach(id=>{
                  console.log(id);
                  id.innerHTML += `
    
    <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
        <div class="card sale-card position-relative" >
            <div class="box card-body" id="sale-box${c}">
                    
                         
              <div class="content  ">
              
                         <img src="${item[n][0]}" alt="" class="sale-photo card-img-top " id="large-img${c}" width="200px" >
                 
                         <p class="mb-0 text-center text-black mt-2"><span>${item.price}</span> kyats</p>
                          <div class="d-flex align-items-center justify-content-between mt-2 ">
                         <button class="Cart-btn"><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
                                                
                         <button type="button" class=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${c}">
                            View Detail
                        </button>
                    </div>
                    

                        
                </div>
                
               <div id="select-img${c}"  class="selectImg d-flex flex-column justify-content-center" style="display: inline"></div>

                
               
            </div>
           
             
                 
        
           
          
        </div>
    </div>
    <div class="modal fade " id="exampleModal${c}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                
                  <div class="modal-body">
                     <div class="container-fluid">
                          <div class="row">
                                
                                    <div class="col-6 col-lg-6">
                                     <img src="${item[n][0]}" alt="" class="w-100 modal_largeImg${c}" id="modal_largeImg${c}" >
                                     <div class="d-flex flex-nowrap justify-content-center my-3 modal_selectImg" id="modal_selectImg${c}">
                                    
                                    </div>
                                    </div>
                                    
                                   
                              
                                <div class="col-6 col-lg-6">
                                    <h3 class="mb-4">${item.title}</h3>
                                    <p class="fw-bold mb-3">$<span>${item.price}</span></p>
                                    <div class="btn-group me-2" role="group" aria-label="First group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">-</button>
                                        <div class="d-flex align-items-center px-4"><p class="mb-0">1</p></div>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">+</button>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-12 col-lg-12">
                                 <p>${item.description}</p>
                                   <div class="d-flex justify-content-between">
                                    <button class="btn btn-outline-secondary">Buy Now</button>
                                    <button class="btn btn-primary">Add to Cart</button>
</div>
                                   
                                 </div>
                    
                            </div>
                     </div>
                   </div>
                  <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
         </div>
    </div>

`
              })




                item[n].forEach(x=>{

                    document.getElementById(`select-img${c}`).innerHTML +=`<img src="${x}"  id="thum-img${c}" class="thum-img"></img>`

                    document.getElementById(`modal_selectImg${c}`).innerHTML+=`
                
                <img src="${x}" alt="" id="modal_thumImg${c} " class="modal_thumImg ms-3 w-25">
               
                `
                })

                c++;
            }
        }


    });
    let i=1;
    category_item.forEach(function (x){

        for(n in x){
            console.log(x[n])
            if(n=='image'+i){
                x[n].forEach(t=>console.log(t));

            }

        }
        i++;

    })
})







// dress_Array.forEach(item=> {
//     let c = 1;
//
//
//     dressCollection.innerHTML += `
//
//     <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
//         <div class="card sale-card">
//             <div class="box card-body">
//
//
//                          <div class="content ">
//                          <img src="${item.image}+c" alt="" class="sale-photo card-img-top" width="200px" >
//                          <div class="d-flex align-items-center justify-content-between mt-2">
//                          <p class="mb-0"><span>${item.price}</span> kyats</p>
//                          <button class="Cart-btn"><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
//                         </div>
//
//                 </div>
//
//             </div>
//             </div>
//           </div>
//     </div>
//
// `
// });
//
// jeanArray.forEach(item=> {
//     let c = 1;
//
//
//     JeanCollection.innerHTML += `
//
//     <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
//         <div class="card sale-card">
//             <div class="box card-body">
//
//
//                          <div class="content ">
//                          <img src="${item.image1}" alt="" class="sale-photo card-img-top" width="200px" >
//                          <div class="d-flex align-items-center justify-content-between mt-2">
//                          <p class="mb-0"><span>${item.price}</span> kyats</p>
//                          <button class="Cart-btn"><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
//                         </div>
//
//                 </div>
//
//             </div>
//             </div>
//           </div>
//     </div>
//
// `
// });
// let smallImage=document.getElementById("smallImages");


// item[`${c-1}`].image1.forEach(function (aa) {

//     document.getElementById(`smallImages${c}`).innerHTML +=`<img src="${aa}" width=30px></img>`
// })


// console.log(item.image1)
// let smallImages=document.querySelector(".smallImages");
// smallImages.innerHTML+=`<img class="smallImg" src="${item[0]}"></img>`
    

    
//     c++;

// console.log(item.image1);
//     item.image1.forEach(function (x,index) {
//         Object.keys(x).forEach(function (prop) {
//             // console.log(prop + " = " + x[prop]);
//             smallImages.innerHTML+=`<img class="smallImg" src="${x[prop]}" width="30px"></img>`
            
//         })
//     })

    
//feature item


//
// shirt_featureArray.forEach(x=> {
//     let c = 1;
//
//
//     feature_shirt.innerHTML += `
//
//     <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
//         <div class="card sale-card">
//             <div class="box card-body">
//
//
//                          <div class="content ">
//                          <img src="${x.image1}" alt="" class="sale-photo card-img-top" width="200px" >
//                          <div class="d-flex align-items-center justify-content-between mt-2">
//                          <p class="mb-0"><span>${x.price}</span> kyats</p>
//                          <button class="Cart-btn"><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
//                         </div>
//
//                 </div>
//
//             </div>
//             </div>
//           </div>
//     </div>
//
// `
// })
//
//
// dress_featureArray.forEach(x=>{
//     feature_dress.innerHTML+=`
//
//     <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
//         <div class="card sale-card">
//             <div class="box card-body">
//
//
//                          <div class="content ">
//                          <img src="${x.image1}" alt="" class="sale-photo card-img-top" width="200px" >
//                          <div class="d-flex align-items-center justify-content-between mt-2">
//                          <p class="mb-0"><span>${x.price}</span> kyats</p>
//                          <button class="Cart-btn"><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
//                         </div>
//
//                 </div>
//
//             </div>
//             </div>
//           </div>
//     </div>
//
// `
// })
//
// jean_featureArray.forEach(x=>{
//    feature_jean.innerHTML+=`
//
//     <div class="col-sm-12 col-md-6 col-lg-4 mb-2 column-card">
//         <div class="card sale-card">
//             <div class="box card-body">
//
//
//                          <div class="content ">
//                          <img src="${x.image1}" alt="" class="sale-photo card-img-top" width="200px" >
//                          <div class="d-flex align-items-center justify-content-between mt-2">
//                          <p class="mb-0"><span>${x.price}</span> kyats</p>
//                          <button class="Cart-btn" type="button" ><i class="fas fa-cart-plus Cart-btn-icon"></i></button>
//
//                 </div>
//
//             </div>
//             </div>
//           </div>
//
//     </div>
//
//
// `
// })


function change(){
    var selectImg=document.querySelectorAll(".selectImg")
console.log(selectImg)

    for(let i=1; i<=selectImg.length; i++ ){
        console.log(selectImg)
        // document.getElementById(`large-img${i}`).src=document.getElementById(`thum-img${i}`
        selectImg[i-1].addEventListener('mouseover',function (e){


            if (e.target.src.name=='undefined'){
                return false;
            }else {
                document.getElementById(`large-img${i}`).src =e.target.src;
            }
        })
    }

}
selectModalThumbnailImg();

change();

function selectModalThumbnailImg(){
    let modal_selectImg=document.querySelectorAll(".modal_selectImg");


    for(let si=1; si<=modal_selectImg.length; si++){
        modal_selectImg[si-1].addEventListener('mouseover',function (event){
            if (event.target.src.name=='undefined'){
                return false;
            }else {

                document.getElementById(`modal_largeImg${si}`).src=event.target.src;
            }
        })
    }
}



//nav active

let navLink=document.querySelectorAll(".nav-link");

function navActive() {
   navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n=>n.addEventListener('click',navActive))



// let selectImgAll=document.querySelectorAll('selectImg');
// selectImgAll.forEach(simg=>{
//     for(t in simg){
//         console.log(t)
//     }
// })
//
// function showThumImg(){
//
// }