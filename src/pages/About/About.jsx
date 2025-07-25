import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About the Artist</h1>
      <div className="about-content">
        <div className="about-left-column">
          <img
            src={`${import.meta.env.BASE_URL}images/Image1.png`}
            alt="Painting of Lisa's work"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p>
            Art has always been my compass, guiding me through the complexities
            of life and allowing me to explore the uncharted territories of
            human emotion, identity, and connection. Through each piece I
            create, I strive to translate the intangible—memories, feelings, and
            fleeting moments—into tactile expressions that invite the viewer
            into a shared narrative.
          </p>

          <p>
            My journey as an artist began during my formative years, but it was
            refined and nurtured through academic exploration. I obtained a
            Bachelor of Fine Arts from Kansas State University, with a
            concentration in graphic design. During this period, I delved deeply
            into color theory, compositional techniques, and art history, all of
            which continue to influence my artistic practice today.
            Subsequently, I earned a Master of Arts in Organization Learning and
            Instructional Technologies, at the University of New Mexico,
            broadening my scope to include adult learning within both
            governmental and private sectors.
          </p>

          <p>
            My career has encompassed a diverse array of creative projects and
            significant achievements. I began as a graphic designer at various
            advertising agencies, where I explored and utilized cutting-edge
            technologies. Additionally, I invested numerous years developing
            online instructional training for both government and private
            entities. Throughout various stages of my life—raising children,
            building a career, and pursuing advanced education—I have always
            aspired to dedicate myself to my artistic endeavors in later years.
            Having now reached this point in my life, I am fully committed to
            advancing this artistic venture.
          </p>

          <p>
            At the heart of my practice lies an enduring curiosity about the
            human spirit and its relationship with the surrounding world. My
            work explores the tension between antiquity and futurism, sacredness
            and violence, femininity and power. I draw inspiration from the
            opulence of Byzantine iconography and the ornamental decadence of
            Gustav Klimt, reinterpreting classical narratives through a
            contemporary, often speculative lens. Together, these paintings
            reflect my fascination with how women are mythologized—as
            destroyers, protectors, or vessels of meaning—and how visual
            storytelling can reclaim that gaze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
