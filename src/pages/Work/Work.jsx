import { useNavigate } from "react-router-dom";
import "./Work.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";

const Work = () => {
  const navigate = useNavigate();

  const paintings = [
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-web.jpg`,
      title: "Aphrodite",
      medium: "Colored pencil/Pastel/Gold Leaf on Bristol Vellum",
      description:
        "In 'Aphrodite', the first piece in the self-titled series, I wanted to portray the\
goddess not as a passive muse, but as a vibrant, self-assured, and undeniably\
contemporary figure. The gold leaf symbolizes opulence and reverence, while\
her gaze exudes confidence, unapologetic and entirely her own.",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Empress-of-the-Unseen-War-web.jpg`,
      title: "Empress of the Unseen War",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      description:
        "Empress of the Unseen War portrays a young aristocrat whose brocade jacket is not mere ornamentation, but ceremonial armor woven from ancestral memory and personal defiance. Her gaze is composed, not cold; her silence is not submission, but strategy. She is the sovereign of battles fought in shadow—internal, inherited, and invisible to those who measure strength only in spectacle.\
      This work explores the tension between inherited identity and self-forged power. The intricate hairstyle and gold adornments evoke a lineage steeped in tradition, while her posture and presence suggest a warrior who has chosen her own myth. She is not waiting to be crowned—she is already reigning, quietly reshaping the legacy she carries.\
      Inspired by Klimt’s symbolic richness and the visual language of regal myth, this piece invites viewers to consider the wars we wage without witness, and the nobility found in resilience rather than recognition.",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sheild-Maiden-web.jpg`,
      title: "Shield Maiden: The Awakening",
      medium: "Colored and Pastel Pencil/Charcoal/Copper Leaf",
      description:
        "In Shield Maiden: The Awakening, I explore the duality of vulnerability and strength.\
         Her gaze may be soft, but her stance is firm. She is not yet a warrior, but the world is already shaping her into one.\
          The shield she holds is both protection and promise—a symbol of the burdens she will carry and the battles she will face.\
           This piece is a tribute to the quiet courage that precedes action, and to every soul who prepares to meet the world not with fear, but with fierce grace.",
    },

    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Shield-Maiden.jpg`,
      title: "Shield Maiden",
      medium: "Colored and Pastel Pencil/Charcoal",
      description:
        "Shield Maiden is conceived not as a traditional warrior, but as a timeless guardian—her elegance itself a\
         form of armor. The soft, luminous rendering of her face and figure is deliberately juxtaposed against the dense,\
         gilded, mosaic-like patterns that surround her, evoking both protection and reverence. The shield is not simply a weapon,\
          but an emblem of resilience, heritage, and the unseen battles carried through history. In Shield Maiden, beauty becomes a\
          form of defiance and stillness, a quiet assertion of power.",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Future-Aspirations.png`,
      title: "Future Aspirations",
      medium: "Oil and Gold Leaf on Canvas",
      description:
        "Future Aspirations presents a powerful meditation on identity, transformation, and the path\
      forward. The central figure — part human, part machine — is encircled by a luminous gold halo,\
      evoking sacred iconography while embodying a futuristic ideal. Her expression is calm and\
      commanding, a portrait of poised strength shaped by both history and imagination.\
      To her right stands a more naturalistic form, echoing the classical and the vulnerable. Between\
      them, a vertical panel of symbols charts a journey — perhaps personal, perhaps collective —\
      marked by growth, memory, and transcendence.\
      Balancing the ancient with the futuristic, the painting suggests that our aspirations are not simply\
      forward-facing, but rooted in who we have been. It is a vision of what we might become when we\
      honor the past while shaping the\u00A0future.",
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Judith-and-the-Head-of-Holofernes.png`,
      title: "Judith and the Head of Holofernes",
      medium: "Oil and Gold Leaf on Canvas",
      description:
        "In this richly detailed interpretation of the biblical tale, Judith and the Head of Holofernes is \
      reimagined with a visual language reminiscent of Gustav Klimt’s golden period. Judith stands as\
      both executioner and icon, her expression cool and enigmatic, embodying a complex blend of\
      grace, resolve, and silent defiance.\
      Her elaborate robe—ornamented with geometric patterns and shimmering gold leaf—evokes\
      sacred relics and royal vestments, while her jeweled headdress and halo-like backdrop suggest\
      divine authority. The severed head of Holofernes rests heavily beneath her, rendered with raw\
      emotional intensity, a stark contrast to Judith’s poised composure.\
      This piece explores themes of feminine strength, sacrifice, and justice, using the opulence of gold\
      and the intimacy of oil paint to heighten the drama between beauty and brutality.",
    },
  ];

  return (
    <div className="work-page">
      {paintings.map((painting, index) => (
        <GalleryItem
          key={index}
          image={painting.src}
          title={painting.title}
          onClick={() => {
            navigate(`/work/${index}`);
          }}
        />
      ))}
    </div>
  );
};

export default Work;
