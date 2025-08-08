interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg text-[#000000] font-semibold mb-2">{title}</h3>
        <p className="text-[#0000008f]">{description}</p>
        {buttonText && (
          <button
            onClick={onClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
