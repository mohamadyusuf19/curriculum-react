import React, { Component } from "react";
import "./styles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-modern">
          <Card>
            <i className="title">Selamat Datang</i>
            <i className="content">Assalamualikum warahmatullahi wabarakatu.</i>
            <i className="content">
              Tujuan di buatnya website ini adalah sebagai media pembelajaran
              untuk mengenalkan kepada santri-santri pondok programmer dengan
              ilmu IT, khususnya yang berkaitan dengan bahasa pemrograman
              JavaScript. di Pondok Programmer sendiri untuk bahasa pemrograman
              JavaSrcipt lebih mengarah ke teknologi FrontEnd dengan framework
              React. Nantinya dengan React kita akan belajar bagaimana membuat
              aplikasi berbasis website dengan React JS dan bagaimana cara
              membuat aplikasi mobile android dan IOS dengan React Native.
            </i>
            <i className="content">
              Pembahasan Reactnya sendiri akan kita awali dari yang paling basic
              dan mendasar agar kedepannya kita mengerti apa maksud dari setiap
              kode-kode yang kita buat. Diwebsite ini terdapat setiap session
              yang akan kita bagi lagi kedalam sub-bab sub-bab tertentu sehingga
              dapat memudahkan kita untuk belajar React secara keseluruhan.
            </i>
            <i className="content">
              Pembagian per sub-babnya, teman-teman akan menemui beberapa
              sub-bab yang didalamnya terdapat catatan, keywords, tugas, source
              belajar, dan kesimpulan. Untuk cara belajarnya sendiri pastikan
              kita pahami setiap bab-bab yang ada sampai benar-benar paham
              setelah benar-benar paham lalu kita lanjutkan lagi ke sub-bab
              sub-bab berikutnya.
            </i>
            <i className="content">
              Semoga teman-teman disini betah dalam mencari ilmu di Pondok ini.
              Saran kami jadilah orang yang bermanfaat untuk orang lain terutama
              untuk umat Islam. Semoga kita bisa menjadi orang yang selalu
              menyebarkan kebaikan baik dari segi kontribusi dalam membuat
              aplikasi maupun membantu orang dengan kemampuan yang kita miliki.
              Mohon maaf apabila ada kesalahan pada diri kami. Terima kasih atas
              perhatiannya.
            </i>
            <i className="content">Wasalamualikum warahmatullahi wabarakatu.</i>
            <br />
            <div className="finish">
              <i className="content">Penulis ,</i>
              <br />
              <br />
              <i className="author">Tim Javascript Pondok Programmer</i>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Index;
