import { getDictionary } from "../dictionaries";


type Props = {
  params: { lang: string };
};

export default async function PlacesPage({ params }: Props) {
  const { lang } = params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-lg mx-auto">
        <div className="relative w-full h-64 mb-4">
          <img
            src="https://i.pinimg.com/736x/41/b1/b0/41b1b000f26e1452f97546b2003aa500.jpg"
            alt="Descripción de la imagen"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <p className="text-white text-base mt-4">
        My positive points are the speed, very comfortable for traveling on the road.
        Its good fuel economy allows about 400km with a 12 liter tank.
        My negative points are the quality of the seat, very hard for a long trip.
        Their factory covers are of poor quality.
        In short, it is a good motorcycle according to its quality-price ratio, perfect for those starting out in the world of motorcycles.
        </p>
      </div>
    </div>
  );
}