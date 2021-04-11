const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法》',
                date:'2000-6',
                price:85.50,
                count:1
            },
            {
                id:2,
                name:'《法》',
                date:'2000-6',
                price:85.00,
                count:1
            },
            {
                id:3,
                name:'《算》',
                date:'2000-6',
                price:85.00,
                count:1
            },
            {
                id:4,
                name:'《睡觉》',
                date:'2000-6',
                price:85.60,
                count:1
            },
        ]
    },
    methods:{
        // getFinaPrice(price){
        //     return '￥' + price.toFixed(2);
        // }
        dec(index){
            this.books[index].count--
        },
        inc(index){
            this.books[index].count++
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let total = 0
            for (let i = 0;i<this.books.length;i++){
                total+= this.books[i].price*this.books[i].count
            }
            return total
        }
    },
    filters:{
        showPerice(price){
            return '￥' + price.toFixed(2);
        }
    }
})