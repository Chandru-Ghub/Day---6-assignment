//class to calculate the uber price


class uberprice{

    constructor(kilometer,rupeesPerKilometer){
        this.kilometer = kilometer;
        this.rupeesPerKilometer = rupeesPerKilometer;

    }
    //method
    getuberPrice(total){
         let price = [];
         for(let i in total){
            if(total[i].kilometer >= 150){
                //give discount
            let a = (total[i].kilometer); 
            let b = (total[i].rupeesPerKilometer+2); 
            let sum = a * b;  
             price.push(`Rs:${sum-25} (discount Rs:50)`);
            }
            else if(total[i].kilometer >= 100 ){
                //give discount
            let a = (total[i].kilometer); 
            let b = (total[i].rupeesPerKilometer); 
            let sum = a * b;  
             price.push(`Rs:${sum-10} (discount Rs:10)`);
            }
            
            else{
            let a = (total[i].kilometer); 
            let b = (total[i].rupeesPerKilometer); 
            let sum = a * b;  
             price.push(`Rs:${sum}`);}
         }

         return price
    }
}

let listOfPrice = [
                new uberprice(100,5),
                new uberprice(50,5),
                new uberprice(155,5),
                new uberprice(60,5),
                new uberprice(102,5)
            ]
let sum = new uberprice();

const AmountList = sum.getuberPrice(listOfPrice);
AmountList.forEach((a)=>{
    console.log(a)
})