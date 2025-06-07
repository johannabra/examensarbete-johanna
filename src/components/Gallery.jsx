import johanna from "../assets/johanna.png";
import emelie from "../assets/emelie.png";

const Gallery = () => {
  const team = [
    {
      name: "Johanna Branting",
      role: "UX-designer & Workshop facilitator",
      src: johanna,
      alt: "Porträtt av Johanna Branting",
    },
    {
      name: "Emelie Svensson",
      role: "UX-designer & Workshop facilitator",
      src: emelie,
      alt: "Porträtt av Emelie Svensson",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Det är vi som genomfört examensarbetet</h2>
      <div className="image-grid">
        {team.map((person, i) => (
          <div className="profile" key={i}>
            <img src={person.src} alt={person.alt} className="gallery-img" />
            <p className="name">{person.name}</p>
            <p className="role">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
