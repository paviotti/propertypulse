const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
// fetch all properties

async function fetchProperties() {
  try {
    // Handle the case where apiDomain is not available yet
    if (!apiDomain) {
      return [];
    }

    // pega os dados da api api/properties
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    const res = await fetch(`${apiDomain}/properties`, { cache: "no-store" });
    // const res = await fetch(
    //   `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
    //   { cache: "no-store" }
    // );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single properties
async function fetchProperty(id) {
  try {
    // Handle the case where apiDomain is not available yet
    if (!apiDomain) {
      return null;
    }

    // pega os dados da api api/properties
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/id`);
    const res = await fetch(
      `${apiDomain}/properties/${id}`
      // , {
      //   cache: "no-store",
      // }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties, fetchProperty };
