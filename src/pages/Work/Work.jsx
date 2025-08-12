// import "./Work.css";
import Carousel from "../../components/Carousel/Carousel";

const Work = () => {
  const paintings = [
    {
      type: "image",
      src: `${
        import.meta.env.BASE_URL
      }images/Judith-and-the-Head-of-Holofernes.png`,
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
      src: `${import.meta.env.BASE_URL}images/Untitled-Image.jpg`,
      title: "Shield Maiden",
      medium: "Colored Pencil/Charcoal",
      description:
        "Shield Maiden is conceived not as a traditional warrior, but as a timeless guardian—her elegance itself a\
         form of armor. The soft, luminous rendering of her face and figure is deliberately juxtaposed against the dense,\
         gilded, mosaic-like patterns that surround her, evoking both protection and reverence. The shield is not simply a weapon,\
          but an emblem of resilience, heritage, and the unseen battles carried through history. In Shield Maiden, beauty becomes a\
          form of defiance and stillness, a quiet assertion of power.",
    },
  ];

  return (
    <div>
      <Carousel items={paintings} />
    </div>
  );
};

export default Work;
