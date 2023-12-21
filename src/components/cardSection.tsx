import Card from "./Card";

//have all the stuff
export interface CardProps {
  title: string;
  image: string;
  description: string;
  onClick: boolean;
  github?: string;
  website?: string
};

interface CardSectionProps {
  data: Array<CardProps>;
};

const CardSection: React.FC<CardSectionProps> = ({ data })=>{
  return <div className=" p-4 justify-center">
    {data.map( (item:any, index:any)=> (
      <Card
      key={index}
      title={item.title}
      image={item.image}
      description={item.description}
      onClick={item.onClick}
      github={item.github}
      website={item.website}
      />
    ))}

  </div>
}
export default CardSection;