import { paths } from "@/paths";
import {
  mengurangiKemiskinan,
  mengakhiriKelaparan,
  kesehatan,
  pendidikan,
  kesetaraanGender,
  airbersihSanitasi,
  energibersihTerjangkau,
  pekerjaanLayak,
  infrastruktur,
  mengurangiKetimpangan,
  kotaKomunitas,
  konsumsiProduksi,
  penangananIklim,
  ekosistemLaut,
  ekosistemDarat,
  perdamaian,
  kemitraan,
} from "../../../../public/assets/icons/index";

const sdgs = [
  {
    number: "1",
    name: "Mengurangi Kemiskinan",
    route: paths.home.sdgs.kemiskinan,
    image: mengurangiKemiskinan,
    targetNumber: "Target 1.2",
    targetNumber2: "Target 1.3",
    targetNumber3: "Target 1.4",
    targetNumber4: "Target 1.5",

    targetDescription:
      "Pada tahun 2030, mengurangi setidaknya setengah proporsi laki-laki, perempuan, dan anak-anak dari semua usia yang hidup dalam kemiskinan di semua dimensi, sesuai dengan definisi nasional.",
    targetDescription2:
      "Menerapkan secara nasional sistem dan upaya perlindungan sosial yang tepat bagi semua, termasuk kelompok yang paling miskin, dan pada tahun 2030 mencapai cakupan substansial bagi kelompok miskin dan rentan.",
    targetDescription3:
      "Pada tahun 2030, menjamin bahwa semua laki-laki dan perempuan, khususnya masyarakat miskin dan rentan, memiliki hak yang sama terhadap sumber daya ekonomi, serta akses terhadap pelayanan dasar, kepemilikan dan kontrol atas tanah dan bentuk kepemilikan lain, warisan, sumber daya alam, teknologi baru, dan jasa keuangan yang tepat, termasuk keuangan mikro.",
    targetDescription4:
      "Pada tahun 2030, membangun ketahanan masyarakat miskin dan mereka yang berada dalam kondisi rentan, dan mengurangi kerentanan mereka terhadap kejadian ekstrim terkait iklim dan guncangan ekonomi, sosial, lingkungan, dan bencana.",
    subtitle: "Mengakhiri kemiskinan dalam segala bentuk di manapun",
  },
  {
    number: "2",
    name: "Mengakhiri Kelaparan",
    route: paths.home.sdgs.kelaparan,
    image: mengakhiriKelaparan,
    targetNumber: "Target 2.1",
    targetNumber2: "Target 2.2",
    targetNumber3: "Target 2.3",
    targetDescription:
      "Menghilangkan segala bentuk kekurangan gizi, termasuk mencapai target yang disepakati secara internasional untuk anak pendek dan kurus di bawah lima tahun, serta memenuhi kebutuhan gizi remaja perempuan, ibu hamil dan menyusui, serta manula.",
    targetDescription2:
      "Pada tahun 2030, menghilangkan segala bentuk kekurangan gizi, termasuk pada tahun 2025 mencapai target yang disepakati secara internasional untuk anak pendek dan kurus di bawah lima tahun, dan memenuhi kebutuhan gizi remaja perempuan, ibu hamil dan menyusui, serta manula.",
    targetDescription3:
      "Pada tahun 2030, menggandakan produktivitas pertanian dan pendapatan produsen makanan skala kecil, khususnya perempuan, masyarakat penduduk asli, keluarga petani, penggembala dan nelayan, termasuk melalui akses yang aman dan sama terhadap lahan, sumber daya produktif, dan input lainnya, pengetahuan, jasa keuangan, pasar, dan peluang nilai tambah, dan pekerjaan non pertanian.",
    subtitle:
      "Mengakhiri kelaparan, mencapai ketahanan pangan dan nutrisi yang lebih baik, serta mendukung pertanian berkelanjutan.",
  },
  {
    number: "3",
    name: "Kesehatan yang baik dan Kesejahteraan",
    route: paths.home.sdgs.kesehatan,
    image: kesehatan,
    targetNumber: "Target 3.1",
    targetNumber2: "Target 3.2",
    targetNumber3: "Target 3.3",
    targetNumber4: "Target 3.4",
    targetNumber5: "Target 3.7",
    targetNumber6: "Target 3.8",
    targetDescription:
      "Mengurangi rasio angka kematian ibu hingga kurang dari 70 per 100.000 kelahiran hidup.",
    targetDescription2:
      "Mengakhiri kematian bayi baru lahir dan balita yang dapat dicegah, dengan seluruh negara berusaha menurunkan Angka Kematian Neonatal setidaknya hingga 12 per 1000 Kelahiran Hidup (KH) dan Angka Kematian Balita 25 per 1000.",
    targetDescription3:
      "Mengakhiri epidemi AIDS, tuberkulosis, malaria, dan penyakit tropis yang terabaikan, dan memerangi hepatitis, penyakit bersumber air, serta penyakit menular lainnya.",
    targetDescription4:
      "Mengurangi hingga sepertiga angka kematian dini akibat penyakit tidak menular, melalui pencegahan dan pengobatan, serta meningkatkan kesehatan mental dan kesejahteraan.",
    targetDescription5:
      "Pada tahun 2030, menjamin akses universal terhadap layanan kesehatan seksual dan reproduksi, termasuk keluarga berencana, informasi dan pendidikan, dan integrasi kesehatan reproduksi ke dalam strategi dan program nasional.",
    targetDescription6:
      "Mencapai cakupan kesehatan universal, termasuk perlindungan risiko keuangan, akses terhadap pelayanan kesehatan dasar yang baik, dan akses terhadap obat-obatan dan vaksin dasar yang aman, efektif, berkualitas, dan terjangkau bagi semua orang.",
    subtitle:
      "Memastikan kehidupan yang sehat dan mendukung kesejahteraan bagi semua pada semua usia.",
  },

  {
    number: "4",
    name: "Pendidikan Bermutu",
    route: paths.home.sdgs.pendidikan,
    image: pendidikan,
    targetNumber: "Target 4.1",
    targetDescription:
      "Memastikan pendidikan yang inklusif, adil, dan berkualitas, serta mendukung kesempatan belajar sepanjang hayat untuk semua.",
    subtitle:
      "Memastikan pendidikan yang inklusif dan berkualitas setara, serta mendukung kesempatan belajar seumur hidup.",
  },
  {
    number: "5",
    name: "Kesetaraan Gender",
    route: paths.home.sdgs.gender,
    image: kesetaraanGender,
    targetNumber: "Target 5.1",
    targetNumber2: "Target 5.2",
    targetNumber3: "Target 5.3",
    targetNumber4: "Target 5.5",
    targetNumber5: "Target 5.6",
    targetNumber6: "Target 5.7",
    targetDescription:
      "Mengakhiri semua bentuk diskriminasi terhadap semua perempuan dan anak perempuan di mana pun.",
    targetDescription2:
      "Menghilangkan segala bentuk kekerasan terhadap kaum perempuan di ruang publik dan pribadi, termasuk perdagangan manusia dan eksploitasi seksual, serta berbagai jenis eksploitasi lainnya.",
    targetDescription3:
      "Menghapuskan semua praktik berbahaya, seperti perkawinan usia anak, perkawinan dini dan paksa, serta sunat perempuan.",
    targetDescription4:
      "Menjamin partisipasi penuh dan efektif, dan kesempatan yang sama bagi perempuan untuk memimpin di semua tingkat pengambilan keputusan dalam kehidupan politik, ekonomi, dan masyarakat.",
    targetDescription5:
      "Menjamin akses universal terhadap kesehatan seksual dan reproduksi, dan hak reproduksi seperti yang telah disepakati sesuai dengan Programme of Action of the International Conference on Population and Development and the Beijing Platform serta dokumen-dokumen hasil reviu dari konferensi-konferensi tersebut.",
    targetDescription6:
      "Mengambil tindakan cepat dan untuk memberantas kerja paksa, mengakhiri perbudakan dan penjualan manusia, mengamankan larangan dan penghapusan bentuk terburuk tenaga kerja anak, termasuk perekrutan dan penggunaan tentara anak-anak, dan pada tahun 2025 mengakhiri tenaga kerja anak dalam segala bentuknya.",
    subtitle:
      "Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan.",
  },
  {
    number: "6",
    name: "Air Bersih dan Sanitasi",
    route: paths.home.sdgs.airbersih,
    image: airbersihSanitasi,
    targetNumber: "Target 6.1",
    targetNumber2: "Target 6.2",
    targetNumber3: "Target 6.3",
    targetNumber4: "Target 6.4",
    targetNumber5: "Target 6.5",
    targetDescription:
      "Pada tahun 2030, mencapai akses universal dan merata terhadap air minum yang aman dan terjangkau bagi semua.",
    targetDescription2:
      "Pada tahun 2013, mencapai akses terhadap sanitasi dan kebersihan yang memadai dan merata bagi semua, dan menghentikan praktik buang air besar di tempat terbuka, memberikan perhatian khusus pada kebutuhan kaum perempuan, serta kelompok masyarakat rentan.",
    targetDescription3:
      "Pada tahun 2030, meningkatkan kualitas air dengan mengurangi polusi, menghilangkan pembuangan, dan meminimalkan pelepasan material dan bahan kimia berbahaya, mengurangi setengah proporsi air limbah yang tidak diolah, dan secara signifikan meningkatkan daur ulang, serta penggunaan kembali barang daur ulang yang aman secara global.",
    targetDescription4:
      "Pada tahun 2030, secara signifikan meningkatkan efisiensi penggunaan air di semua sektor, dan menjamin penggunaan dan pasokan air tawar yang berkelanjutan untuk mengatasi kelangkaan air, dan secara signifikan mengurangi jumlah orang yang menderita akibat kelangkaan air.",
    targetDescription5:
      "Pada tahun 2030, menerapkan pengelolaan sumber daya air terpadu di semua tingkatan, termasuk melalui kerjasama lintas batas yang tepat.",
    subtitle:
      "Memastikan ketersediaan dan manajemen air bersih yang berkelanjutan serta sanitasi bagi semua.",
  },

  {
    number: "7",
    name: "Energi Bersih dan Terjangkau",
    route: paths.home.sdgs.energi,
    image: energibersihTerjangkau,
    targetNumber: "Target 7.1",
    targetNumber2: "Target 7.3",
    targetDescription:
      "Pada tahun 2030, menjamin akses universal layanan energi yang terjangkau, andal, dan modern.",
    targetDescription2:
      "Pada tahun 2030, melakukan perbaikan efisiensi energi di tingkat global sebanyak dua kali lipat.",
    subtitle:
      "Memastikan akses terhadap energi yang terjangkau, dapat diandalkan, berkelanjutan, dan modern bagi semua.",
  },

  {
    number: "8",
    name: "Pekerjaan Layak dan Pertumbuhan Ekonomi",
    route: paths.home.sdgs.ekonomi,
    image: pekerjaanLayak,
    targetNumber: "Target 8.1",
    targetDescription:
      "Mempertahankan pertumbuhan ekonomi per kapita sesuai dengan kondisi nasional dan, khususnya, setidaknya 7 persen pertumbuhan produk domestik bruto per tahun di negara kurang berkembang.",
    subtitle:
      "Mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan, tenaga kerja penuh dan produktif, serta pekerjaan yang layak bagi semua.",

    targetNumber2: "Target 8.2",
    targetDescription2:
      "Mencapai tingkat produktivitas ekonomi yang lebih tinggi, melalui diversifikasi, peningkatan dan inovasi teknologi, termasuk melalui fokus pada sektor yang memberi nilai tambah tinggi dan padat karya.",

    targetNumber3: "Target 8.3",
    targetDescription3:
      "Menggalakkan kebijakan pembangunan yang mendukung kegiatan produktif, penciptaan lapangan kerja layak, kewirausahaan, kreativitas dan inovasi, dan mendorong formalisasi dan pertumbuhan usaha mikro, kecil, dan menengah, termasuk melalui akses terhadap jasa keuangan.",

    targetNumber4: "Target 8.5",
    targetDescription4:
      "Pada tahun 2030, mencapai pekerjaan tetap dan produktif dan pekerjaan yang layak bagi semua perempuan dan laki-laki, termasuk bagi pemuda dan penyandang difabilitas, dan upah yang sama untuk pekerjaan yang sama nilainya.",

    targetNumber5: "Target 8.6",
    targetDescription5:
      "Pada tahun 2020, secara substansial mengurangi proporsi usia muda yang tidak bekerja, tidak menempuh pendidikan atau pelatihan.",

    targetNumber6: "Target 8.8",
    targetDescription6:
      "Melindungi hak-hak tenaga kerja dan mempromosikan lingkungan kerja yang aman dan terjamin bagi semua pekerja, termasuk pekerja migran, khususnya pekerja migran perempuan, dan mereka yang bekerja dalam pekerjaan berbahaya.",

    targetNumber7: "Target 8.9",
    targetDescription7:
      "Pada tahun 2030, menyusun dan melaksanakan kebijakan untuk mempromosikan pariwisata berkelanjutan yang menciptakan lapangan kerja dan mempromosikan budaya dan produk lokal.",
  },

  {
    number: "9",
    name: "Industri, Inovasi, dan Infrastruktur",
    route: paths.home.sdgs.inovasi,
    image: infrastruktur,
    targetNumber: "Target 9.2",
    targetDescription:
      "Mempromosikan industrialisasi inklusif dan berkelanjutan, dan pada tahun 2030, secara signifikan meningkatkan proporsi industri dalam lapangan kerja dan produk domestik bruto, sejalan dengan kondisi nasional, dan meningkatkan dua kali lipat proporsinya di negara kurang berkembang.",
    subtitle:
      "Mendukung industrialisasi inklusif dan berkelanjutan, meningkatkan proporsi industri dalam lapangan kerja dan PDRB, serta meningkatkan akses ke jasa keuangan bagi industri kecil dan menengah.",

    targetNumber2: "Target 9.3",
    targetDescription2:
      "Meningkatkan akses industri dan perusahaan skala kecil, khususnya di negara berkembang, terhadap jasa keuangan, termasuk kredit terjangkau, dan mengintegrasikan ke dalam rantai nilai dan pasar.",
  },

  {
    number: "10",
    name: "Mengurangi Ketimpangan",
    route: paths.home.sdgs.ketimpangan,
    image: mengurangiKetimpangan,
    targetNumber: "Target 10.1",
    targetDescription:
      "Pada tahun 2030, secara progresif mencapai dan mempertahankan pertumbuhan pendapatan penduduk yang berada di bawah 40% dari populasi pada tingkat yang lebih tinggi dari rata-rata nasional.",
    subtitle:
      "Mengurangi ketimpangan di dalam dan antar negara melalui peningkatan pendapatan dan akses yang lebih baik bagi penduduk kurang mampu.",

    targetNumber2: "Target 10.3",
    targetDescription2:
      "Menjamin kesempatan yang sama dan mengurangi kesenjangan hasil, termasuk dengan menghapus hukum, kebijakan, dan praktik yang diskriminatif, serta mempromosikan legislasi dan tindakan yang tepat terkait.",

    targetNumber3: "Target 10.4",
    targetDescription3:
      "Mengadopsi kebijakan, terutama kebijakan fiskal, upah, dan perlindungan sosial, serta secara progresif mencapai kesetaraan yang lebih besar.",

    targetNumber4: "Target 10.7",
    targetDescription4:
      "Memfasilitasi migrasi dan mobilisasi manusia yang teratur, aman, berkala, dan bertanggung jawab, termasuk melalui penerapan kebijakan imigrasi yang terencana dan terkelola dengan baik.",
  },

  {
    number: "11",
    name: "Kota dan Komunitas Berkelanjutan",
    route: paths.home.sdgs.kota,
    image: kotaKomunitas,
    targetNumber: "Target 11.4",
    targetDescription:
      "Mempromosikan dan menjaga warisan budaya dunia dan warisan alam dunia.",
    subtitle:
      "Melindungi dan mempromosikan warisan budaya serta alam dunia untuk generasi mendatang.",

    targetNumber2: "Target 11.5",
    targetDescription2:
      "Pada tahun 2030, secara signifikan mengurangi jumlah kematian dan orang terdampak oleh bencana, serta mengurangi kerugian ekonomi relatif terhadap PDB global yang disebabkan oleh bencana, dengan fokus pada perlindungan orang miskin dan rentan.",

    targetNumber3: "Target 11.6",
    targetDescription3:
      "Meningkatkan secara substansial jumlah kota dan permukiman yang mengadopsi dan mengimplementasikan kebijakan dan perencanaan yang terintegrasi mengenai penyertaan, efisiensi sumber daya, mitigasi dan adaptasi terhadap perubahan iklim, serta ketahanan terhadap bencana.",
  },
  {
    number: "12",
    name: "Konsumsi dan Produksi yang Bertanggung Jawab",
    route: paths.home.sdgs.konsumsi,
    image: konsumsiProduksi,
    targetNumber: "Target 12.1",
    targetDescription:
      "Memastikan pola konsumsi dan produksi yang berkelanjutan.",
    subtitle: "Memastikan pola konsumsi dan produksi yang berkelanjutan.",
  },
  {
    number: "13",
    name: "Penanganan Perubahan Iklim",
    route: paths.home.sdgs.iklim,
    image: penangananIklim,
    targetNumber: "Target 13.1",
    targetDescription:
      "Mengintegrasikan tindakan antisipasi perubahan iklim ke dalam kebijakan, strategi dan perencanaan nasional",
    subtitle:
      "Mengambil tindakan segera untuk memerangi perubahan iklim dan dampaknya.",
  },
  {
    number: "14",
    name: "Menjaga Ekosistem Laut",
    route: paths.home.sdgs.laut,
    image: ekosistemLaut,
    subtitle:
      "Mengkonservasi dan memanfaatkan secara berkelanjutan sumber daya laut, lautan, dan maritim untuk pembangunan yang berkelanjutan.",

    targetNumber: "Target 14.4",
    targetDescription:
      "Pada tahun 2020, secara efektif mengatur pemanenan dan menghentikan penangkapan ikan yang berlebihan, penangkapan ikan ilegal, dan praktek penangkapan ikan yang merusak, serta melaksanakan rencana pengelolaan berbasis ilmu pengetahuan untuk memulihkan persediaan ikan ke tingkat yang dapat memproduksi hasil maksimum yang berkelanjutan.",

    targetNumber2: "Target 14.5",
    targetDescription2:
      "Pada tahun 2020, melestarikan setidaknya 10 persen dari wilayah pesisir dan laut sesuai dengan hukum nasional dan internasional serta informasi ilmiah terbaik yang tersedia.",

    targetNumber3: "Target 14.6",
    targetDescription3:
      "Pada tahun 2020, melarang bentuk-bentuk subsidi perikanan tertentu yang berkontribusi terhadap kelebihan kapasitas dan penangkapan ikan berlebihan, menghilangkan subsidi yang mendukung penangkapan ikan ilegal, tidak dilaporkan, dan tidak diatur, serta menahan jenis subsidi baru, dengan mempertimbangkan perlakuan khusus untuk negara berkembang dan negara kurang berkembang dalam negosiasi subsidi perikanan di WTO.",
  },

  {
    number: "15",
    name: "Menjaga Ekosistem Darat",
    route: paths.home.sdgs.darat,
    image: ekosistemDarat,
    subtitle:
      "Melindungi, memulihkan, dan mendukung penggunaan yang berkelanjutan terhadap ekosistem daratan, serta mengelola hutan secara berkelanjutan.",

    targetNumber: "Target 15.1",
    targetDescription:
      "Pada tahun 2020, menjamin pelestarian, restorasi, dan pemanfaatan berkelanjutan dari ekosistem daratan dan perairan darat serta jasa lingkungannya, khususnya ekosistem hutan, lahan basah, pegunungan, dan lahan kering, sejalan dengan kewajiban berdasarkan perjanjian.",

    targetNumber2: "Target 15.2",
    targetDescription2:
      "Pada tahun 2020, meningkatkan pelaksanaan pengelolaan semua jenis hutan secara berkelanjutan, menghentikan deforestasi, merestorasi hutan yang terdegradasi, dan meningkatkan secara signifikan forestasi dan reforestasi secara global.",
  },

  {
    number: "16",
    name: "Perdamaian, Keadilan, dan Kelembagaan yang Kuat",
    route: paths.home.sdgs.perdamaian,
    image: perdamaian,
    subtitle:
      "Mendukung masyarakat yang damai dan inklusif untuk pembangunan berkelanjutan.",

    targetNumber: "Target 16.1",
    targetDescription:
      "Secara signifikan mengurangi segala bentuk kekerasan dan terkait angka kematian dimanapun.",

    targetNumber2: "Target 16.6",
    targetDescription2:
      "Mengembangkan lembaga yang efektif, akuntabel, dan transparan di semua tingkat.",

    targetNumber3: "Target 16.7",
    targetDescription3:
      "Menjamin pengambilan keputusan yang responsif, inklusif, partisipatif, dan representatif di setiap tingkatan.",

    targetNumber4: "Target 16.9",
    targetDescription4:
      "Pada tahun 2030, memberikan identitas yang sah bagi semua, termasuk pencatatan kelahiran.",

    targetNumber5: "Target 16.10",
    targetDescription5:
      "Menjamin akses publik terhadap informasi dan melindungi kebebasan mendasar, sesuai dengan peraturan nasional dan kesepakatan internasional.",
  },

  {
    number: "17",
    name: "Kemitraan untuk Mencapai Tujuan",
    route: paths.home.sdgs.kemitraan,
    image: kemitraan,
    targetNumber: "Target 17.1",
    targetDescription:
      "Menguatkan cara implementasi dan merevitalisasi kemitraan global untuk pembangunan yang berkelanjutan.",
    subtitle:
      "Menguatkan cara implementasi dan merevitalisasi kemitraan global untuk pembangunan yang berkelanjutan.",
  },
];

export default sdgs;
