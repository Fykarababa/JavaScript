//Bu ilk JavaScript denemem olup kaynak olarak Çağatay Çalı'ya ait cagatay.me adresli siteyi kullanmaktayım.
//Bu dökümantasyonda JavaScript ile temel dizi işlemlerini inceleyeceğiz.
//-----------------------------
//Every Metodu
//Bu Metod Dizi içerisindeki değerleri döndürüp boolen(mantıksal) değer döndürecek metoddur

var array=[1,2,3,4,5]

var result = array.every(function(piece){
  if (piece<6) {
    return true
  }
})
console.log(result)
//Eğer fonksiyonumuzda dizi içerisindeki değerlerin 6 dan küçük olup olmadığına bakılmaktadır cevap ise True dönecektir.

//-----------------------------
//Filter Metodu
//Bu metod dizi içerisindeki değerleri filtrelemeye yarayacatır.
var array1=[1,2,3,4,5,6,7,8,9,10,11]
var result1 = array1.filter(function(piece1){
  if (piece1%2) {
    return piece1
  }
})
console.log(result1);
//Eğer fonksiyonumuzda dizi içerisindeki değerin 2'ye göre mod u alınıp alınmadığı kontrol edilip, moddan 0 dönecek değer filtrelenecektir. sonuç : [1,3,5,7,9,11] olacaktır.
//-----------------------------
//Find Metodu
//Bu metod Dizi içerisinde arama yapmamızı sağlar
var users = [
  {
    id:1,
    name: 'alpcan'
  },
  {
    id:2,
    name: 'hasan'
  },
  {
    id:3,
    name: 'burak'
  }
]

var user = users.find(function(user){
  if (user.name ==='burak') {
      return user
  }
})
console.log(user);

//Dizi içerisindeki objelerin içerisindeki bulmak istediğimiz 'burak' adlı objeyi arayacaktır.
//sonuç : {id: 3, name: 'burak'}
//-----------------------------
//From metodu
//Bu metod belirli uzunlukta dizi oluşturmayı sağlar.
var array2 = Array.from({length: 10}, function(value, index){
  return index*2
})
console.log(array)
//Boyutu 10 olan ve her bir dizi uzunluk diğerinin 2 katı değerine sahip olacak bir dizi oluşturacaktır.
//sonuc : [0,2,4,6,8,10,12,14,16,18]
//-----------------------------
//Map Metodu
//Bu metod çağrılan dizide elemanların üzerinde işlem yapacaktır
var array3=['cagatay','cali','JavaScript','egitimi']

var result2 = array3.map(function(piece2){
  return piece2.toUpperCase()
})
console.log(result2)
//Dizideki metinleri büyük harfe çevirecektir
//sonuc : ['CAGATAY','CALI','JAVASCRIPT','EĞITIMI']
//-----------------------------
//Reduce Metodu
//Bu metod, dizi elemanları uzerinde işlem yapacak ve işlemin sonucunu değer döndürecektir.
var total=[0,1,2,3].reduce(function(sum, value){
  return sum+value
},1)
console.log(total)
//Dizideki elemanlarını tek bir sonuç olarak döndürecekgtir
//Sonuc: 7
//-----------------------------
//Some Metodu
//Bu metod, dizideki elemanlardan en az birisinin koşul'a uyması durumunda boolean(mantıksal) bir değer döndürecektir
var array4=[1,2,3,4,5]
var result3= array4.some(function(piece3){
  if (piece3>6) {
    return true
  }
})
console.log(result3)
//Dizideki elemanlardan birisi bu koşul a uymadığı için sonucumuz false olacaktır.(En az bir değerin 6'dan büyük olması istenmektedir.)

//Bu metodlar dışındaki şu metodlarda mevcuttur.
var array5 = [1, 2, 3, 4, 5, 6]
array5.push(7) // Dizinin sonuna 7 elemanını ekler.
array5.shift() // Dizinin ilk elemanını çıkartır.
array5.unshift(0) // Diziye bir eleman ekler. (En başa)
delete array5[1] // Dizinin 1. anahtarlı elemanını çıkartır.
array5.splice(2, 5) // Dizinin 2. elemanıyla 5. elemanı arasında kalan kısmını ayırır.
array5.concat([8, 9, 10]) // Diziyi başka bir dizi ile birleştirir.
array5.concat([11, 12, 13], [14, 15, 16]) // 3 diziyi birleştirir.
array5.slice(0) // Dizinin verilen anahtarlı değerini diziden ayırır


//Örnekleri Çağatay Çalı'dan almış olup Doğum gününü kutlarım :)

//Kaynak https://cagatay.me/javascript-i%CC%87le-temel-dizi-i%CC%87%C5%9Flemleri-javascript-array-operations-de040d8ac41e
