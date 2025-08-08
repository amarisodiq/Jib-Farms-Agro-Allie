import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imageSrc}
        alt={title}
        width={500} // adjust based on your needs
        height={300} // adjust based on your needs
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg text-[#000000] font-semibold mb-2">{title}</h3>
        <p className="text-[#0000008f]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
