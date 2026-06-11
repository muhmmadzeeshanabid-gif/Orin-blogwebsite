import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Logo from "../components/logo/Logo";
import RecentPosts from "../components/recent-posts/RecentPosts";
import HeroSlider from "../components/slider/HeroSlider";
import ScrollTop from "../components/utils/ScrollTop";
import GalleryLightbox from "../components/utils/GalleryLightbox";
import FooterWidgets from "../components/widgets/FooterWidgets";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="bwp-site-content">
        <div className="container">
          <Logo />
          <HeroSlider />
          <RecentPosts />
          <FooterWidgets />
        </div>
      </div>

      <Footer />

      <ScrollTop />
      <GalleryLightbox />
    </>
  );
}
