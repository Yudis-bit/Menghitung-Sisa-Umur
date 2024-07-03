// menghitung sisa umur jika kita hidup sampai usia 90 tahun. hitungannya ke bulan, minggu, dan hari

function sisaUmur(umur){
    var usiaMaksimal = 90;
    var bulanKetahun = 12;
    var mingguKetahun = 52;
    var hariKetahun = 365;

    var sisaUmur = usiaMaksimal - umur;
    sisaBulan = sisaUmur * 12;
    sisaMinggu = sisaUmur * 52;
    sisaHari = sisaUmur * 365;

    console.log ("Sisa umur Anda adalah " + sisaUmur +" tahun, "+ sisaBulan +" Bulan, "+ sisaMinggu + " Minggu, "+ sisaHari +" Hari. ");
}

sisaUmur(64); // input umur