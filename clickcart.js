function  cartSection() {
    var cartsection=document.querySelector(".cartpage");
    if(cartsection.style.display=="block")
    {
      cartsection.style.display="none";
    }
    else{
        cartsection.style.display="block";
    }
}


function toggleCart() {
      document.getElementById('.cartpage').style.display = 'block';
    }
	
	
function toggleMensWear() {
      document.getElementById('mensWearSection').style.display = 'block';
    }




	

let cart = [];
let totalAmount = 0;

const cartCountElement = document.querySelector('.cartcount');
const totalAmountElement = document.querySelector('.total_amount');

function updateCartDisplay() {
  cartCountElement.textContent = cart.length;
  totalAmountElement.textContent = totalAmount;
}

function clearCart() {
  cart = [];
  totalAmount = 0;
  updateCartDisplay();
  alert("Your cart is empty !\n Please add items to your cart 😞😞😞");
}

function placeorder() {
  if (cart.length === 0) {
    alert("Order Placed Successfully \n Thanks for shopping with us 💜💜💜");
  } else {
    alert("Order Placed Successfully\n Total Amount to be Paid : "+totalamount+"/-\n Thanks for shopping with us 💜💜💜");
    clearCart();
  }
}


    






 









































