
import Container from "@/components/container";
import Header from "@/components/header";
import CategoryBlock from "@/components/Home/CategoryBlock";
import DealsSection from "@/components/Home/DealsSection";
import HeroSection from "@/components/Home/HeroSection";
import InquiryForm from "@/components/Home/InquiryForm";
import Newsletter from "@/components/Home/Newsletter";
import RecommendGrid from "@/components/Home/RecommendedGrid";
import Services from "@/components/Home/Services";
import Suplier from "@/components/Home/suplier";
export default function Home() {
  
  return (
    <>
    
    <HeroSection />
    <DealsSection /> 
   <CategoryBlock />
    <InquiryForm />
    <RecommendGrid />
    <Services />
    <Suplier />
    <Newsletter />
    </>
  );
}
