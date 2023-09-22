import "@styles/globals.css";

export const metadata = {
  title: "Archiduchesse",
  description:
    " Le plus grand magasin de chaussettes en ligne de toute la planète. ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
