class FetchJson{
    start(){

        // Important, those files will be only fetched when this code is runnin on a server
        fetch("./orders_json/order_items.json")
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                
                const jsonObj = data.orderItems;
                const menuList = document.querySelector('.dishes-menu .menu-items');
                const imgPath = './img-min/main-header/'
                let finalDOMStructure = "";

                jsonObj.forEach(orderItem => {
                    // console.log(orderItem)
                    const orderItemDOMMarkup = `<li class="item" id="${orderItem.item_id}">
                    <img class="item__img" src="${imgPath}${orderItem.image_name}" alt="Dish picture">
                        <div class="description">
                            <h4 class="description__title">${orderItem.order_name}</h4>
                            <p class="description__text">
                                ${orderItem.order_description}
                            </p>
                            <button class="button-primary">
                                order online
                            </button>
                        </div>
                    </li>` 

                    finalDOMStructure += orderItemDOMMarkup;
                })

                
                menuList.innerHTML = finalDOMStructure; 
            })

    }
}

export default FetchJson;


// const orderItemDOM = createElement("li");
// const orderItemDOMImage = createElement("img");



