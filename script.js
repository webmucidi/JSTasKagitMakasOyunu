function oyunuBaslat(secim){
    //Önce kullanıcın seçimi değişkene aktaralım
    let kullaniciSecimi=secim.id;
    console.log(kullaniciSecimi);
    //Bilgisayar tarafından oluşturulan rastgele seçimi değişkene aktaralım
    let rastgeleSayi=Math.floor(Math.random()*3);
    let bilgisayarSecimi=["tas","kagit","makas"][rastgeleSayi];
    console.log(bilgisayarSecimi);
    //Puanlamaları kaydetmek için object(nesne) tipinde tanımlamaları yapalım
    let oyunPuanlamalari={
        "tas":{"makas":1,"tas":0.5,"kagit":0},
        "kagit":{"tas":1,"kagit":0.5,"makas":0},
        "makas":{"kagit":1,"makas":0.5,"tas":0}
    };

    //Diziden seçimimize karşılık gelen puanı alalım
    let kullaniciPuani=oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi];
    console.log(kullaniciPuani);

    //Kayıtlı tüm resimlerin kaynak adreslerini yine object tanımıyla alalım
    let kayitliResimler={
        "tas":document.getElementById("tas").src,
        "kagit":document.getElementById("kagit").src,
        "makas":document.getElementById("makas").src
    };

    //Temiz bir sonuç ekranı için tüm resimleri silelim
    document.getElementById("tas").remove();
    document.getElementById("kagit").remove();
    document.getElementById("makas").remove();

    //Sildiğimiz nesnelerin yerine sonuçlar için yeni nesneler oluşturalım
    let kullaniciResmi=document.createElement("img");
    let bilgisayarResmi=document.createElement("img");
    let sonucMesaji=document.createElement("div");

    //Resim nesnelerine seçimlere göre uygun kaynakları bağlayalım
    kullaniciResmi.src=kayitliResimler[kullaniciSecimi];
    bilgisayarResmi.src=kayitliResimler[bilgisayarSecimi];

    //Oluşturduğumuz nesneleri kapsayıcısı altına monte edelim
    document.getElementById("container").appendChild(kullaniciResmi);
    document.getElementById("container").appendChild(sonucMesaji);
    document.getElementById("container").appendChild(bilgisayarResmi);

    //Puana bakarak şart kontrolüyle sonucu yazdıralım
    sonucMesaji.classList.remove("basarili","basarisiz","berabere");

    if(kullaniciPuani === 0){
        sonucMesaji.innerHTML="Maalesef kaybettiniz :(";
        sonucMesaji.classList.add("basarisiz");
    }
    else if(kullaniciPuani === 0.5){
        sonucMesaji.innerHTML="Sonuç berabere";
        sonucMesaji.classList.add("berabere");
    }
    else{
        sonucMesaji.innerHTML="Tebrikler kazandınız :)";
        sonucMesaji.classList.add("basarili");
    }

}