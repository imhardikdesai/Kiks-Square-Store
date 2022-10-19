let topProducts = document.getElementById("topProducts");
function showTopShoes() {
	fetch('https://raw.githubusercontent.com/imhardikdesai/Kiks-Square-Store/master/Assets/js/json/topProducts.json')
		.then(response => response.json())
		.then(data => {
			let shoes = data.shoes;
			console.log(shoes);
			let str = "";
			for (let i = 0; i < 4; i++) {
				str += `
			<div class="p-body">
			<div class="circle" style="${shoes[i].bgGradient}"></div>
                <img class="shoesImg" src="${shoes[i].imgSrc}" alt="shoes">
                <div class="rating">
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star clicked"></i>
                    <i class="fa fa-star"></i>
                </div>
				<div class="top-p-text">
                	<p class="top-p-name">${shoes[i].name}</p>
					<p class="top-p-price">${shoes[i].price}<span id="${shoes[i].id}" onClick="addProduct(this.id)" class="material-symbols-outlined addIcon">add_shopping_cart</span></p>
				</div>
            </div>
			`;
			}
			topProducts.innerHTML = str;
		})
		.catch(err => console.error(err));
}
showTopShoes();


let cartCount = document.getElementById("cartCount");
let count = 0;
function addProduct(id) {
	count++;
	cartCount.innerHTML = count;
	console.log(id);
}

function displayNewShoes() {
	let toggleGender = document.getElementById("toggleGender");
	let sellerShoes = document.getElementById("sellerShoes");
	if (toggleGender.checked == true) {
		sellerShoes.setAttribute('src', './Assets/img/best-seller-women.png');
		document.getElementById('shoesDisplay').style.background = 'linear-gradient(270deg, #FF3C78 0%, #FFB2B2 100%) ';
	} else {
		sellerShoes.setAttribute('src', './Assets/img/best-seller-men.png');
		document.getElementById('shoesDisplay').style.background = 'linear-gradient(270deg, #2226d4 0%, #98cef9 100%) ';
	}
}