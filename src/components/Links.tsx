import Card from "./Card";
import banner1 from "../assets/BANNER12.png";

export default function Links() {
  return (
    <section id="links" className="bg-black pb-20 pt-15">
      <div className="max-w-6xl mx-auto gap-12 flex flex-col pb-4 md:pb-24 pt-0 md:pt-14 px-2">
        <Card
          imageSrc={banner1}
          link="https://www.xingyu.com.br/collections/colecao-nova-era"
        />
      </div>
    </section>
  );
}
