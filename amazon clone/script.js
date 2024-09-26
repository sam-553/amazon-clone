let itemcontainer=document.querySelector('.shopping');
let maincode='';
item.forEach(item=>{
maincode+=` <div class="box">
                <div class="content-box">
                    <h2>${item.deals}</h2>
                <div class="box-img">
                    <img src="${item.image}" class="image" alt="">
                </div>
                <p >${item.category}</p>
                <div class="price">
                    <span class="current-price">₹${item.cprice}<sup>00</sup></span>
                    <span class="original-price">M.R.P:
                       <a >₹${item.oprice}</a> </span>

                </div>
                </div>
            </div>`
});


itemcontainer.innerHTML=maincode;