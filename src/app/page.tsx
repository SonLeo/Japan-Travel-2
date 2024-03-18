import Header from "~/layouts/header/Header";
import HomeBanner from "~/layouts/home-banner/HomeBanner";
import HomeServices from "~/layouts/home-services/HomeServices";
import HomeAbout from "~/layouts/home-about/HomeAbout";
import HomeContact from "~/layouts/home-contact/HomeContact";
import Footer from "~/layouts/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeBanner />
      <HomeServices />
      <HomeAbout />
      <HomeContact />
      <Footer />
    </main>
  );
}