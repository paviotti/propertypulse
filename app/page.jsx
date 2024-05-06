import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};
export default function HomePage() {
  // await connectDB();
  // console.log(process.env.MONGODB_URI);

  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
