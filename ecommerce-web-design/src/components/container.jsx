import react from "react";
export default function Container({children}) {
  return ( 
    <>
    <div className="container mx-auto my-6">
      {children}
    </div>
    </>
  );
}