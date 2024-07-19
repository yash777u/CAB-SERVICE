"user client";

import Banner from "@/app/components/user/HomePage/Banner";
import CardVideoSection from "@/app/components/user/HomePage/CardVideoSection";
import Footer from "@/app/components/user/HomePage/Footer";
import HomeNavbar from "@/app/components/user/HomePage/HomeNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
