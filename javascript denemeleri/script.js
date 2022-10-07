var sinav1 = document.getElementById("sinav1");
var sinav2 = document.getElementById("sinav2");
var sozlu = document.getElementById("sozlu");
console.log(sinav1)

// var sonuc = document.getElementById("sonuc");

function hesapla(){
    // ortalama = (sinav1 + sinav2 + sozlu) / 3;
    var ortalama=(Number(sinav1.value)+Number(sinav2.value)+Number(sozlu.value)) / 3;
    document.getElementById("sonuc").innerHTML = ortalama;
    console.log(ortalama);
}



/* MATEMATİK DEĞİŞKENLERİ */

var mSinav1 = document.getElementById("mSinav1");
var mSinav2 = document.getElementById("mSinav2");
var mSozlu = document.getElementById("mSozlu");

/* TÜRKÇE DEĞİŞKENLERİ */

var tSinav1 = document.getElementById("tSinav1");
var tSinav2 = document.getElementById("tSinav2");
var tSozlu = document.getElementById("tSozlu");

/* TARİH DEĞİŞKENLERİ */

var tSinav1 = document.getElementById("taSinav1");
var taSinav2 = document.getElementById("taSinav2");
var taSozlu = document.getElementById("taSozlu");

/* EDEBİYAT DEĞİŞKENLERİ */

var eSinav1 = document.getElementById("eSinav1");
var eSinav2 = document.getElementById("eSinav2");
var eSozlu = document.getElementById("eSozlu");

/* DİL BİLGİSİ DEĞİŞKENLERİ */

var dSinav1= document.getElementById("dSinav1");
var dSinav2 = document.getElementById("dSinav2");
var dSozlu = document.getElementById("dSozlu");

/* SONUÇ YERLERİNİN DEĞİŞKENLERİ */

var msonuc = document.getElementById("msonuc");
var tsonuc = document.getElementById("tsonuc");
var tasonuc = document.getElementById("tasonuc");
var esonuc = document.getElementById("esonuc");
var dsonuc = document.getElementById("dsonuc");

function mhesapla(){
    var mortalama = (Number(mSinav1.value) + Number(mSinav2.value) + Number(mSozlu.value) ) /3;
    document.getElementById("msonuc").innerHTML = mortalama;
    console.log("Matematik ortalamanız : " + mortalama);
}

function thesapla(){
    var tortalama = (Number(tSinav1.value) + Number(tSinav2.value) + Number(tSozlu.value) ) /3;
    document.getElementById("tsonuc").innerHTML = tortalama ;
    console.log("Türkçe Ortalamanız : " + tortalama);

}

function tahesapla(){
    var taortalama = (Number(taSinav1.value) + Number(taSinav2.value) + Number(taSozlu.value) ) /3;
    document.getElementById("tasonuc").innerHTML = taortalama;
    console.log("Tarih Ortalamanız : " + taortalama);

}

function ehesapla(){
    var eortalama = (Number(eSinav1.value) + Number(eSinav2.value) + Number(eSozlu.value)) /3;
    document.getElementById("esonuc").innerHTML = eortalama;
    console.log("Edebiyat Ortalamanız : " + eortalama);
}

function dhesapla(){
    var dortalama = (Number(dSinav1.value) + Number(dSinav2.value) + Number(dSozlu.value)) /3;
    document.getElementById("dsonuc").innerHTML = dortalama;
    console.log("Dil Bilgisi Ortalamanız : " + dortalama);
}





function toplamsonuc(){
    var orttoplam = (Number(msonuc.innerHTML) + Number(tsonuc.innerHTML) + Number(tasonuc.innerHTML) + Number(esonuc.innerHTML) + Number(dsonuc.innerHTML)) /5;
    document.getElementsByClassName("toplamhesapla").innerHTML = orttoplam;
    alert("Bütün Derslerinizin Ortalaması : " + orttoplam);
}



// var kullanici = document.getElementById("personel");
// function bas(){
//     alert("Merhaba " + kullanici.value);
// }



// var deger1 = document.getElementById("deger1");
// var deger2 = document.getElementById("deger2");

// function bas(){
//     var sonuc = (Number(deger1.value) + Number(deger2.value));
//     alert(sonuc);
// }




// function bas(){
//     var sayi = document.getElementById("sayi").value;

//     if(sayi%2 == 0 ){
//         alert("Bu sayı çifttir");
//     }else{
//         alert("bu sayı tektir");
//     }
// }

/* FOREACH KULLANIM ŞEKİLLERİ */
var markalar =["BMW","MERDECES","TOYOTA","FORD"];


// markalar.forEach(myFunction);
// function myFunction(sayi){
//     console.log(sayi);
// }


// markalar.forEach(function(sayi){
//     console.log(sayi);
// });


// markalar.forEach(sayi => console.log(sayi)); 

markalar.forEach((sayi, index) => {
    console.log(index + ' => ' + sayi);
});