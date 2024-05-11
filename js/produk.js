var data_mentah = {
    "Arabica": [
        {
            "foto": "images/produk/product_capuchino.jpg",
            "nama": "Cappuccino",
            "size": "250 Ml",
            "harga": "25.000",
            "link": "https://tokopedia.com/produk/cappucciono1"
        },
        {
            "foto": "images/produk/product_espresso.jpg",
            "nama": "Espresso",
            "size": "100 Ml",
            "harga": "15.000",
            "link": "https://tokopedia.com/produk/espresso"
        },
        {
            "foto": "images/produk/product_kopi_susu.jpg",
            "nama": "Kopi Susu",
            "size": "200 Ml",
            "harga": "20.000",
            "link": "https://tokopedia.com/produk/kopisusu"
        }
    ],
    "Robusta": [
        {
            foto: "https://ekonomikasyariah.com/wp-content/uploads/2022/02/kopi-robusta.jpg",
            nama: "Biji Kopi Robusta",
            size: "250 gr",
            harga: "45.000",
            link: "https://tokopedia.com/produk/cappucciono1"
        },
        {
            "foto": "https://grosirmesin.com/wp-content/uploads/2022/06/Ilustrasi-Kopi-Bubuk.jpeg",
            "nama": "Kopi Bubuk Robusta",
            "size": "200 gr",
            "harga": "60.000",
            "link": "https://tokopedia.com/produk/espresso"
        },
        {
            "foto": "https://paxelmarket.co/wp-content/uploads/2022/08/kopi.jpg",
            "nama": "Kopi Seduh Robusta",
            "size": "50 ml",
            "harga": "10.000",
            "link": "https://tokopedia.com/produk/kopisusu"
        }
    ],
    "Cappuccino": [
        {
            "foto": "images/produk/product_capuchino.jpg",
            "nama": "Cappuccino Milk",
            "size": "150 Ml",
            "harga": "25.000",
            "link": "https://tokopedia.com/produk/cappucciono1"
        },
        {
            "foto": "https://simply-delicious-food.com/wp-content/uploads/2019/02/irish-coffee-milkshake-4.jpg",
            "nama": "Cappucino Milk Shake",
            "size": "100 Ml",
            "harga": "15.000",
            "link": "https://tokopedia.com/produk/espresso"
        },
        {
            "foto": "https://sweetrip.id/wp-content/uploads/2022/05/resep-cappuccino-cincau.jpeg",
            "nama": "Cappuccino Cincau",
            "size": "100 Ml",
            "harga": "15.000",
            "link": "https://tokopedia.com/produk/kopisusu"
        }
    ],"Kopi Luwak": [
        {
            "foto": "https://www.1stincoffee.com/media/catalog/product/k/o/kopi-luwak-3oz.jpg",
            "nama": "Biji Kopi Luak",
            "size": "500 gr",
            "harga": "50.000",
            "link": "https://tokopedia.com/produk/cappucciono1"
        },
        {
            "foto": "https://cdn.drinksfeed.com/2020/07/kopi-luwak-what-makes-the-coffee-the-most-expensive-in-the-world.jpg",
            "nama": "Kopi Luwak Hitam",
            "size": "50 Ml",
            "harga": "10.000",
            "link": "https://tokopedia.com/produk/espresso"
        },
        {
            "foto": "https://canopybotanicals2.com/wp-content/uploads/2020/12/Dark-Ground-Kopi-Luwak-1584x2048.jpg",
            "nama": "Bubuk Kopi Luwak",
            "size": "2550 gr",
            "harga": "40.000",
            "link": "https://tokopedia.com/produk/kopisusu"
        }
    ],
}

console.log("Isi Data mentah:", data_mentah)
function updateSelect() {
    select_kopi.innerHTML = `<option selected disabled>-</option>`
    Object.keys(data_mentah).forEach(kategori => {
        select_kopi.innerHTML += `<option value="${kategori}">${kategori}</option>`
    })
    console.log("Select berhasil Diganti")
}
updateSelect()
var data_kopi = []

        select_kopi.onchange = function () {
            var pilihan = select_kopi.value
            console.log("Isi Pilihannya :", pilihan)

            data_kopi = data_mentah[pilihan]
            console.log("Isi Data yang dipilih :", data_kopi)
            updateTampilan()
        }
        baris_produk.innerHTML = ''
function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<!--awal copy kolom produk-->
        <div class="col mb-4">
            <div class="card">
                <img src="${kopi.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kopi.nama}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            <i class="bi bi-cup-hot"></i> ${kopi.size}
                        </div>

                        <div class="col fw-bold text-primary">
                            ${kopi.harga}
                        </div>
                    </div>
                    <a target="_blank" href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart2"></i> Beli</a>
                </div>
            </div>
        </div>
        <!-- akhir copy kolom produk -->`
    })

}
baris_produk.innerHTML = ''
function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<!--awal copy kolom produk-->
        <div class="col mb-4">
            <div class="card">
                <img src="${kopi.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${kopi.nama}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            <i class="bi bi-cup-hot"></i> ${kopi.size}
                        </div>

                        <div class="col fw-bold text-primary">
                            ${kopi.harga}
                        </div>
                    </div>
                    <a target="_blank" href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart2"></i> Beli</a>
                </div>
            </div>
        </div>
        <!-- akhir copy kolom produk -->`
    })

}
var sumber = "https://rikikurnia.com/prakerja/api/kopi"
var sumber2 = "data.json"

$.getJSON(sumber2).then(data => {
    data_mentah = data
    updateSelect()
})
