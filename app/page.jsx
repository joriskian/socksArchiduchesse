import Card from "@components/Card";
import img1 from "../public/assets/images/socks1.jpg";
import img2 from "../public/assets/images/socks2.jpg";
import img3 from "../public/assets/images/socks3.webp";

const Home = () => {
  return (
    <div className="text-center pt-10">
      <h1 className="text-4xl capitalize m-8">
        Les chaussettes de l&apos;Archiduchesse
      </h1>
      <span className="text-xl">
        Un large choix de chaussettes sèches ou archissèches.
        <br />
        <code className="text-align-center">Tout pour vos petons</code>
      </span>
      <section className="grid sm:grid-cols-2 sm:mt-3 md:grid-cols-3 mt-8 ">
        <Card
          className="mx-8"
          title="Des prix legers comme le vents"
          content="Tous nos prix sont garantie sans vices cachés, sans taxe et sans frais"
          link="/politique_de_prix"
          linkDescription="Notre politique de prix"
          imgSrc={img1}
        />
        <Card
          className="mx-8"
          title="Une large gamme de choix"
          content="Ici, vous trouverez toutes les marques de chaussettes, des nouveautés aux old schools"
          link="/by_years"
          linkDescription="choisir votre année"
          imgSrc={img2}
        />
        <Card
          className="mx-8"
          title="Le top des chaussettes depareillées"
          content="Chaussettes dépareillées fabriquées en France par le caméléon Français"
          link="/depareillees"
          linkDescription="Allons les voirent !"
          imgSrc={img3}
        />
      </section>
    </div>
  );
};

export default Home;
