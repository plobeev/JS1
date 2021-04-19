class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    getSum(){
        let sum = 0;
        this.goods.forEach(element =>  sum += element.price);
        document.querySelector(".price_sum").innerHTML = `Товаров в корзине на сумму: ${sum}`
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    
}


class ProductItem{
	constructor(product, img = 'https://www.thompsonschools.org/cms/lib/CO01900772/Centricity/Domain/6918/image-placeholder.jpg'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

class cart {
    addProduct(){};
    removeProduct(){};
    changeQuantity(){};
    render(){};
}

class cartItem{
    render(){};
}


let list = new ProductsList();
list.render();
list.getSum();