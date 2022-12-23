const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

const sumArr = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    })
}

const getInfoPenjualan = (dataPenjualan) => {
    if (typeof dataPenjualan !== 'object') {
        return 'Error: Invalid Data Type';
    } else {
        let arrKeuntungan = [];
        let arrModal = [];
        let totalKeuntungan = 0;
        let persentase = 0;
        let jumlahTerjual = 0;
        let jumlahModal = 0;
        let terjual = 0;
        let produkTerlaris;
        let penulisTerlaris;
        for (let i in dataPenjualan) {
            const modal = dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
            const keuntungan = (dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual);
            if (dataPenjualan[i].totalTerjual > terjual) {
                terjual = dataPenjualan[i].totalTerjual;
                produkTerlaris = dataPenjualan[i].namaProduk;
                penulisTerlaris = dataPenjualan[i].penulis;
            }
            arrKeuntungan.push(keuntungan);
            arrModal.push(modal);
        }

        jumlahTerjual = sumArr(arrKeuntungan);
        jumlahModal = sumArr(arrModal);

        totalKeuntungan = jumlahTerjual - jumlahModal;
        persentase = (totalKeuntungan / jumlahModal) * 100;

        return {
            totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString("id-ID")}`,
            totalModal: `Rp. ${jumlahModal.toLocaleString("id-ID")}`,
            persentaseKeuntungan: `${persentase.toFixed(2)}%`,
            produkBukuTerlaris: produkTerlaris,
            penulisTerlaris: penulisTerlaris,
        }
    }
}

console.log(getInfoPenjualan(dataPenjualanNovel));