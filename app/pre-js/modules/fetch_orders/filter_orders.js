


class FilterOrders{
    // 1. Take search tag criteria
    filterOut(searchCriteria){
 
        fetch("./orders_json/order_items.json")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // 2. Iterate thru all objects and filter only those that have this in tag
            let filteredOrders = data.orderItems.filter((order)=> {
                return order.tags.includes(searchCriteria)
            })

            // 3. Return ids of orders that should be left on page
            filteredOrders = filteredOrders.map(order=> {
                return order.item_id
            })

            // 4. Iterate thru dom objects and assign display: none to orders that id does not match those
            
            const orderItemsDOM = document.querySelectorAll('.menu-items .item')
            
            // console.log(orderItemsDOM)
            orderItemsDOM.forEach((orderItem)=>{
                if(!filteredOrders.includes(orderItem.id)){
                    orderItem.classList.add('item--hidden');
                } else {
                    orderItem.classList.remove('item--hidden');
                }
            })
        })  
    }

    start(){
        // Assign event listeners to buttons with appriopriate search criteria
        const btnAllDishes = document.getElementById('btn-all-dishes');
        const btnSeafood = document.getElementById('btn-seafood');
        const btnMeat = document.getElementById('btn-meat');
        const btnSushiRolls = document.getElementById('btn-sushi-roll');
        const btnRice = document.getElementById('btn-rice');
        const btnNoodles = document.getElementById('btn-noodles');
        const btnSalads = document.getElementById('btn-salads');
        const btnDesserts = document.getElementById('btn-desserts');

        btnAllDishes.addEventListener('click', ()=> {
            this.filterOut("all-dishes")
        });

        btnSeafood.addEventListener('click', ()=> {
            this.filterOut("seafood")
        });

        btnMeat.addEventListener('click', ()=> {
            this.filterOut("meat")
        })

        btnSushiRolls.addEventListener('click', ()=> {
            this.filterOut("sushi-rolls")
        })

        btnRice.addEventListener('click', ()=> {
            this.filterOut("rice")
        })

        btnNoodles.addEventListener('click', ()=> {
            this.filterOut("noodles")
        })

        btnSalads.addEventListener('click', ()=> {
            this.filterOut("salads")
        })

        btnDesserts.addEventListener('click', ()=> {
            this.filterOut("desserts")
        })

    }
}

export default FilterOrders;