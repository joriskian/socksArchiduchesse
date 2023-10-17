import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Archiduchesse",
  description:
    " Le plus grand magasin de chaussettes en ligne de toute la planète ( et de la galaxie entiere...). ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <Navbar />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
