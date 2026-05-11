import Container from "@/components/container";
import ProductCard from "@/components/productcard";
import SideBar from "@/components/sidebar";

export default function Category() {
  return (
    <div className="category-sectionp-6 bg-gray-50">
      {/* Added gap-4 for better spacing */}
      <Container> 
        <div  className="grid grid-cols-12 ">
         <aside className="col-span-3">
        <SideBar />
        </aside>
        <main className="col-span-9">
          <ProductCard/>
        </main>
        </div>
       
      </Container>
    </div>
  );
}