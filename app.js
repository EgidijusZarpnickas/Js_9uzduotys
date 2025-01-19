
{
// NR 1 UZDUOTIS 

function desimt(a,b) {
    if (a===10 || b===10 || a+b==10) { 
        return'true';
    } else {
         return 'false'
        }
}

console.log(desimt(1,9));

}
//----------------------------------------------

{
// NR 2 UZDUOTIS 

function patikrinimas(a,b) {
    if (a =='turi'&& b>=18) {
        return'true';
    } else{
        return 'false';
    }
    }


    console.log (patikrinimas('turi',18)); 

}

    //------------------------------------------------
{
     // NR 3 UZDUOTIS



     function labas(a) {
        if ( a%3==0 && a%5==0) {
            return 'labas rytas';
        } else if (a%5==0){
            return 'rytas';
        } else if (a%3==0) {
            return 'labas';
        } else {return a}

     }

     console.log(labas(31))

}
     //--------------------------------------
{
     // NR 4 uzduotis


     let x=5 ;
     let y=2;

     let kvadratai = x*y*1.05;
     let z = kvadratai / 1.5 ;
     

     function kiekis(kvadratai) {
        if (kvadratai%1.5===0) {
            return z ;
        } else {
            return Math.floor(++z);
        }

     }

     z = kiekis(kvadratai);
     let e = 23 * z;

     console.log(
        `Kambario dydis ${x} ir ${y}, reikės ${z} pakuočių plytelių. Reikalinga pinigų suma ${e} EUR.`
    );


    
    // -------------------------------------
}
    // NR 5 uzduotis

{

    // x:5 : 2 : 1 ;
    const n = 33.3 ; 
    let a = n%5 ;
    let b = a%2 ;

  
    let n1 = Math.floor(n/5);
    let n2 = Math.floor(a/2);
    let n3 = Math.floor(b/1) ;




    function monetos () {
        if (a==0) {
            return n1 ;
        } else  { 
            return b,n2 ;
        }
        
    }

    function monetos2 () {
        if (b>0) {
            return n3;
        } else { 
            return 0; 
        }

    }

    let N = n1 + n2 +n3;

    console.log(
        `Norint gauti ${n} suma litais, mums reikes ${n1} monetu po 5lt, ${n2} monetu po 2lt ir ${n3} monetu po 1lt. Visu monetu ${N} skaicius`
    );

}



// NR6 UZDUOTIS -------------------------------------

{



function trikampis(a,b,c) {
    if (a + b > c && a + c > b && b + c > a) {
        return  `Kraštinės ${a}, ${b}, ${c} sudaro trikampį.`;
    } else {
         return `Kraštinės ${a}, ${b}, ${c} nesudaro trikampio.` ;
        }
}


console.log(trikampis(3,4,5));

}



// Nr7 -------------------------

{

let np=0;
let total=0;

function puodeliai (p) {
    if (p>=6) {
        np=Math.floor(p/6) ;
        total=p+np;
        return `total_cups(${p})=${total}`;
    } else {
        return `total_cups(${p})=${p}`;
    }
}


console.log (puodeliai(90));

}

// Nr8 --------------------------------------

{
let x = 0 ; // pinigai
let y = 0 ; // nuolaida
let z = 0 ; // sumoketa

function nuolaida (x) {
    if (x<50) {
        y='0 %';
        z=x ;
        return ` Pirkėjas pirko prekių už ${x} sumą, kam buvo pritaikyta nuolaida ${y}, Pirkėjas sumokėjo ${z} sumą pinigų.`;
    } else if (50<=x && x<100) {
        y='10 %';
        z=x*0.9 ;
        return ` Pirkėjas pirko prekių už ${x} sumą, kam buvo pritaikyta nuolaida ${y}, Pirkėjas sumokėjo ${z} sumą pinigų.`;
    } else if (100<=x && x<200) {
        y='15 %' ;
        z=x*0.85 ;
        return ` Pirkėjas pirko prekių už ${x} sumą, kam buvo pritaikyta nuolaida ${y}, Pirkėjas sumokėjo ${z} sumą pinigų.`;
    } else  {
        y = '20 %';
        z = x*0.8;
        return ` Pirkėjas pirko prekių už ${x} sumą, kam buvo pritaikyta nuolaida ${y}, Pirkėjas sumokėjo ${z} sumą pinigų.`;
    }
}

console.log(nuolaida(110.5))

}

// Nr9 ----------------------------

{


let min = 0 ;
let max = 0 ;

function zinios(b,c) {
    if (b<=c) {
        min=b;
        max=c;
        return 'suzinojom intervala';
    } else {
        min = c;
        max = b;
        return 'suzinojom intervala';
    }
}


function intervalas(a) {
    if (a>=min && a<=max ) {
        return true ;
    } else {
        return false ;
    }

}

console.log(zinios(2,11))
console.log(intervalas(26));





}

















