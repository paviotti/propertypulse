import Image from "next/image";
// recebe a imagem de properties/[id]/page
const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            //   pega a imagem da pasta, ms recebe o nome do banco de dados
            src={`/images/properties/${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;