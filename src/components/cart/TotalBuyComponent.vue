<template>
    <div>
        <div class="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
                <input type="text" placeholder="Coupon code">
                <button type="submit">Apply</button>
            </form>
        </div>
        <div class="cart__total">
            <h6>Resumen</h6>
            <ul>
                <li>Subtotal <span>$ 169.50</span></li>
                <li>Total <span>$ {{total.getTotal}}</span></li>
            </ul>
            <button  @click="$emit('step2')" class="primary-btn text-center mx-auto">Realizar pago</button>
        </div>
    </div>
</template>

<script>
import { useCart, useLoader } from '@/store'

export default {
    data(){
        return{
            cart: useCart().cart,
            total: useCart(),
            loader: useLoader()

        }
    },
    mounted(){
        this.createPaypalEventHandler()
        this.loader.shoppingModal = false
    },
    methods:{
        createPaypalEventHandler(){
            this.loader.setLoader(true)
            const paypaltest = document.getElementById('paypal-button-container')
            paypal.Buttons({            
                // Sets up the transaction when a payment button is clicked
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code: "MXN",
                                value: this.total.getTotal, // Can also reference a variable or function
                                breakdown: {
                                    item_total: {  /* Required when including the items array */
                                        currency_code: "MXN",
                                        value: this.total.getTotal
                                    }
                                }
                            },
                            items: this.creteArrayItems()
                        }]
                    });
                },
                // Finalize the transaction after payer approval
                onApprove: (data, actions) => {
                    let self = this
                    return actions.order.capture().then(async function(orderData) {
                        // Successful capture! For dev/demo purposes:
                        // console.log(orderData);
                        // const transaction = orderData.purchase_units[0].payments.captures[0];
                        // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
                        await useCart().savePurchase(orderData)
                        useCart().removeAllItems()
                        console.log(orderData.id);
                        self.$emit('numeroOrden', orderData.id)
                        self.$forceUpdate()
                        // When ready to go live, remove the alert and show a success message within this page. For example:
                        // const element = document.getElementById('paypal-button-container');
                        // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                        // Or go to another URL:  actions.redirect('thank_you.html');
                    });
                }
            }).render('#paypal-button-container');
            this.loader.setLoader(false)

        },
        creteArrayItems(){
            let itemsTotal = []
            this.cart.forEach(element => {
                element.items.forEach(item =>{
                    
                    itemsTotal.push({
                        name: element.title,
                        description: JSON.stringify({color: item.color, size: item.size, _id: item?._id}),
                        unit_amount: {
                            currency_code: "MXN",
                            value: element.price
                        },
                        quantity: "1"
                    })
                })

            });
            console.log(itemsTotal);
            return itemsTotal
        }
        // getTotal(){
        //     this.total = 0
        //     useCart().cart.map(ele => {
        //        this.total = this.total + ele.price 
        //     })
        //     return this.total
        // }
    },
    watch:{
        useCart:{
            inmediatre: true,
            handler(newVal, oldVal){
                console.log('update');
                this.total = newVal.getTotal
            }
        }
    }
}
</script>

<style>

</style>