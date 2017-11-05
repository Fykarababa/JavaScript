//Java Script kodları html belgesi içinde kullanılır.
//Aşşağıdaki örnekteki gibi kullanım gerekmektedir.
<script>
  alert('Hello world!!')
</script>

//Js kodlarını oluşturduğumuz script nesnesinin <head> veya <body> bölümünde kullanıbilir.
<!DOCTYPE html>
<Html>
<head>
<script>
function ilkFonksiyonum(){
  document.getElementById("demo").innerHTML = "Paragraf değişti!";
}
</script>
</head>
<body>
<h1>web sayfam</h1>
<p id = "demo">Paragraf</p>
<button type="button" onclick="ilkFonksiyonum()">Butuna Bas!</button>
</body>
</html>//bu örnekte head de kullanmış olduk .

//Js kodlarını Dosyadan Kullanma
<script src="script.js"></script>
