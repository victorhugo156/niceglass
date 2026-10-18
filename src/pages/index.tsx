import HangingLeaf from "@/components/HangingLeaf";
import LeafProjection from "@/components/LeafProjection";

const ETSY_SHOP_URL = "https://www.etsy.com/au/shop/NiceGlassSuncatchers";

type Piece = {
  id: string;
  name: string;
  category: string;
  alt: string;
  image: string;
  flip?: boolean;
  wide?: boolean;
  narrow?: boolean;
};

const pieces: Piece[] = [
  {
    id: "frog",
    name: "Frog",
    category: "Cute",
    alt: "Frog stained-glass suncatcher, studio photograph",
    image: "/images/pieces/frog-studio.png",
  },
  {
    id: "sushi",
    name: "Sushi",
    category: "Foodie",
    alt: "Shrimp sushi stained-glass suncatcher, studio photograph",
    image: "/images/pieces/sushi-studio.png",
    flip: true,
  },
  {
    id: "moon",
    name: "Moon",
    category: "Celestial",
    alt: "Crescent moon stained-glass suncatcher, studio photograph",
    image: "/images/pieces/moon-studio.png",
    wide: true,
  },
  {
    id: "meltem",
    name: "Meltem",
    category: "Nature",
    alt: "Meltem stained-glass suncatcher",
    image: "/images/pieces/meltem.svg",
    narrow: true,
  },
];

const processSteps = [
  {
    n: "01",
    title: "Sketch",
    text: "Drawn at full size, then cut into a paper pattern.",
  },
  {
    n: "02",
    title: "Cut",
    text: "Each shape scored, broken from the sheet, ground back to the line.",
  },
  {
    n: "03",
    title: "Foil",
    text: "Copper tape wrapped and burnished around every edge.",
  },
  {
    n: "04",
    title: "Solder",
    text: "The seams are joined; the lead line becomes the drawing.",
  },
  {
    n: "05",
    title: "Finish",
    text: "Patina, wash, wax, and a wire loop for the window.",
  },
];

export default function Home() {
  return (
    <>
      {/* Background plane — soft moving light */}
      <LeafProjection />

      <div className="page">
        <header className="site-header">
          <a className="brand" href="#top">
            Nice Glass
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            {/* Cord hangs from here — between About and Pieces */}
            <span className="nav__leaf-anchor">
              <HangingLeaf />
            </span>
            <a href="#pieces">Pieces</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          {/* Hero */}
          <section className="section hero">
            <p className="eyebrow">Handmade stained glass — suncatchers</p>
            <h1 className="hero__title">
              Catching light,
              <br />
              one piece at a time.
            </h1>
            <p className="hero__copy">
              Every suncatcher here is drawn, cut, foiled and soldered by hand
              in small batches. No two sheets of glass behave the same way, so
              no two pieces do either. Hang one in a window and the room keeps
              the colour for the rest of the day.
            </p>
            <p className="hero__meta">
              The hanging leaf
              <br />
              sage, lime, amber, gold
            </p>
            <p className="hero__scroll">Scroll for the pieces</p>
          </section>

          {/* Product pieces — image slots ready for Phase 5 */}
          <section className="section" id="pieces">
            {pieces.map((piece) => (
              <article
                key={piece.id}
                className={[
                  "piece",
                  piece.flip ? "piece--flip" : "",
                  piece.wide ? "piece--wide" : "",
                  piece.narrow ? "piece--narrow" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {!piece.flip && (
                  <div className="image-slot" data-slot={piece.id}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={piece.image} alt={piece.alt} />
                  </div>
                )}
                <div>
                  <h2 className="piece__title">{piece.name}</h2>
                  <p className="piece__meta">{piece.category}</p>
                  <a className="piece__link" href="#contact">
                    How to buy {piece.name}
                  </a>
                </div>
                {piece.flip && (
                  <div className="image-slot" data-slot={piece.id}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={piece.image} alt={piece.alt} />
                  </div>
                )}
              </article>
            ))}
          </section>

          <section className="section" id="about">
            <div className="studio">
              <div>
                <p className="eyebrow">The studio</p>
                <p className="studio__quote">
                  Glass is cut by hand, wrapped in copper, and joined with a
                  line of solder that stays visible. The drawing is the seam.
                  The colour is borrowed from whatever the sky is doing.
                </p>
              </div>
              <p className="studio__aside">
                I work in small runs and single pieces. Sheet glass arrives with
                its own streaks and bubbles; I cut around them rather than
                against them, so each suncatcher keeps a bit of the sheet it
                came from.
              </p>
            </div>
          </section>

          <section className="section">
            <p className="eyebrow">How a piece is made</p>
            <div className="process__grid">
              {processSteps.map((step) => (
                <div className="process__step" key={step.n}>
                  <p className="eyebrow eyebrow--accent">{step.n}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="contact">
            <div className="cta">
              <h2 className="cta__title">
                Found something
                <br />
                you love?
              </h2>
              <div>
                <p className="cta__copy">
                  Each piece is sold once. The price is in Australian dollars
                  on the Etsy listing. Message me there and I&apos;ll send
                  daylight photographs, the exact size, and how it hangs.
                </p>
                <div className="cta__actions">
                  <a
                    className="btn"
                    href={ETSY_SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the Etsy shop
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-footer__top">
            <p className="site-footer__brand">Nice Glass</p>
            <div className="site-footer__links">
              <a
                href={ETSY_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Etsy shop
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <p className="site-footer__copy">
            © 2026 Nice Glass — handmade stained glass
          </p>
        </footer>
      </div>
    </>
  );
}
