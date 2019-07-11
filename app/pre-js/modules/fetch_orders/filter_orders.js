const testJson = {
    "orderItems":[
        {
            "item_id": "ORD001",
            "order_name": "Dragon Roll: Shrimp Tempura with Eel",
            "order_description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quas",
            "image_name": "sushi-1.jpeg",
            "tags": ["popular", "seafood", "rice", "sushi-rolls", "popular"]
        },

        {
            "item_id": "ORD002",
            "order_name": "Sushi special",
            "order_description": "Dolor sit amet consectetur adipisicing elit",
            "image_name": "sushi-3.jpeg",
            "tags": ["seafood", "sushi-rolls"]
        },

        {
            "item_id": "ORD003",
            "order_name": "Cupcakes",
            "order_description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quas dolor sit amet consectetur adipisicing elit. Officiis.",
            "image_name": "cupcakes.jpeg",
            "tags": ["desserts"]
        },

        {
            "item_id": "ORD004",
            "order_name": "Fishy rice",
            "order_description": "Rice that looks quite fishy, yet tasty",
            "image_name": "fish-rice.jpeg",
            "tags": ["seafood", "rice", "popular"]
        },

        {
            "item_id": "ORD005",
            "order_name": "Turbo noodles",
            "order_description": "Lorem noodles with ipsum spices on a amet plate",
            "image_name": "noodles-1.jpeg",
            "tags": ["noodles"]
        },

        {
            "item_id": "ORD006",
            "order_name": "Uncle Wang special noodles",
            "order_description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quas dolor sit amet consectetur adipisicing elit. Officiis.",
            "image_name": "noodles-2.jpeg",
            "tags": ["popular","noodles"]
        },

        {
            "item_id": "ORD007",
            "order_name": "Rice",
            "order_description": "Plain rice in plain bowl",
            "image_name": "rice-1.jpeg",
            "tags": ["rice", "popular"]
        },

        {
            "item_id": "ORD008",
            "order_name": "Salad style salad",
            "order_description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quas dolor sit amet consectetur adipisicing elit. Officiis.",
            "image_name": "salad-2.jpeg",
            "tags": ["rice", "popular"]
        },

        {
            "item_id": "ORD009",
            "order_name": "Sihuan soup",
            "order_description": "Dolor sit amet consectetur adipisicing elit. Quas dolor sit amet consectetur adipisicing elit. Officiis.",
            "image_name": "soup-1.jpeg",
            "tags": ["soup"]
        }

    ]
}



class FilterOrders{
    start(){

        console.clear()
        // console.log(testJson.orderItems)
        // console.log(testJson.orderItems[0].tags.includes("popular"))
        
        // 1. Take search tag criteria
        const searchCriteria = "desserts"

        // 2. Iterate thru all objects and filter only those that have this in tag
        let filteredOrders = testJson.orderItems.filter((order)=> {
            return order.tags.includes(searchCriteria)
        })

        // 3. Return ids of orders that should be left on page
        filteredOrders = filteredOrders.map(order=> {
            return order.item_id
        })

        // 4. Iterate thru dom objects and assign display: none to orders that id does not match those
        
        const orderItemsDOM = document.querySelectorAll('.menu-items .item')
        
        console.log(orderItemsDOM)
        orderItemsDOM.forEach((orderItem)=>{
            if(!filteredOrders.includes(orderItem.id)){
                orderItem.style.display = "none"
            }
        })

        // console.log(filteredOrders)
        


    }
}

export default FilterOrders;