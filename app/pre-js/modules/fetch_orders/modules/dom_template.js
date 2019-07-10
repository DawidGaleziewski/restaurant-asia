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