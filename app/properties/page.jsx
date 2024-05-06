import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/request";

// import properties from "@/properties.json"; (era o antigo json local)
// isto é um server component,
// async function fetchProperties() {
//   try {
//     // pega os dados da api api/properties
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
//       { cache: "no-store" }
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

const PropertiesPage = async () => {
  const properties = await fetchProperties();
  // console.log(properties);

  // Sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
