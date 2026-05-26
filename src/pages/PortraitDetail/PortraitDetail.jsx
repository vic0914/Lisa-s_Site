import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PortraitDetail.css";

const PortraitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Same paintings data as Work page
  const paintings = [
    // --- Aphrodite Series (indices 0–5) ---
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite's-Golden-Reign.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite's Golden-Reign.MOV`,
      title: "Aphrodite's Golden Reign",
      medium: 'Original - Acrylic on Cradled Panel 16 x 16"',
      description: (<><em>Aphrodite's Golden Reign</em> began as a mortal figure who earned her celestial crown through acts of courage and compassion. She now stands as a radiant symbol of gilded royalty, a guardian of grace and power.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite's-Golden-Reign.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite's Golden-Reign.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Golden-Reign-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Golden-Reign-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Golden-Reign-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Golden-Reign-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned-2.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned-2.MOV`,
      title: "Aphrodite's Gilded Gaze",
      medium: 'Original - Acrylic and Gold Leaf on Canvas 36 x 36"',
      size: "SOLD",
      description: (<><em>Aphrodite's Gilded Gaze</em> unveils a regal Aphrodite, her eyes bold and knowing, capturing both the viewer's reverence and her own timeless strength. It's an ode to elegance and power.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned-2.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned-2.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Gilded-Gaze-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Gilded-Gaze-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Gilded-Gaze-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Gilded-Gaze-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Ascendant.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Ascendant.MOV`,
      title: "Aphrodite Ascendant",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel, 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          The opening panel of the <em>Aphrodite Triptych: Journey of a Goddess</em> presents a
          youthful Aphrodite emerging in serene radiance. Her upward gaze, gilded halo, and
          ocean-evoking ornaments frame her as beauty's origin—calm, elevated, and
          luminous—introducing Aphrodite as a divine force rising into presence.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Ascendant.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Ascendant.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Ascendant-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Ascendant-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Ascendant-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-All-Triptych-1.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned.MOV`,
      title: "Aphrodite Enthroned",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          In this central work of the <em>Aphrodite Triptych: Journey of a Goddess</em>, the goddess
          appears fully empowered. Her poised expression, golden latticework, and jeweled adornments
          portray love's commanding duality—tender yet formidable. This panel emphasizes Aphrodite's
          sovereign beauty and confident influence at the height of her mythic authority.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Enthroned.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Enthroned.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Enthroned-1.JPG` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Enthroned-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Enthroned-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-All-Triptych-2.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Eternal.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Eternal.MOV`,
      title: "Aphrodite Eternal",
      medium: 'Original - Acrylic/Gold Leaf on Cradled Panel 16 x 16"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          Completing the <em>Aphrodite Triptych: Journey of a Goddess</em>, this panel reveals
          Aphrodite as a timeless cosmic presence. Against deep blue, her golden ornaments glow like
          constellations. Her serene, powerful gaze conveys enduring beauty and desire, presenting
          the goddess as an eternal force beyond the boundaries of mortal experience.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite-Eternal.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite-Eternal.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Eternal-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Eternal-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Eternal-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-All-Triptych-3.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Aphrodite.MOV`,
      title: "Aphrodite",
      medium: 'Original - Colored Pencil/Pastel/Gold Leaf on Bristol Vellum, 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: (
        <>
          In <em>Aphrodite</em>, the first piece in the self-titled series, I wanted to portray the
          goddess not as a passive muse, but as a vibrant, self-assured, and undeniably contemporary
          figure. The gold leaf symbolizes opulence and reverence, while her gaze exudes confidence,
          unapologetic and entirely her own.
        </>
      ),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Aphrodite-Series/Aphrodite.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Aphrodite.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Aphrodite-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Aphrodite-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Aphrodite-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/aphrodite-series/TN-Aphrodite-4.jpg` },
      ],
    },
    // --- Sentinel Series (indices 6–11) ---
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Young-Sentinel-1.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Young-Sentinel.MOV`,
      title: "Young Sentinel",
      medium: 'Original - Acrylic on Cradled Panel 12 x 12"',
      description: (<>The <em>Young Sentinel</em> is the newly anointed protector of her realm, just stepping into a world where her courage is still budding. She's full of curiosity, learning her lineage's ancient secrets, and eager to prove that she's ready for whatever comes next.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Young-Sentinel-1.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Young-Sentinel.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Young-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Young-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Young-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Young-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Emerging-Sentinel-2.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Emerging-Sentinel.MOV`,
      title: "Emerging Sentinel",
      medium: 'Original - Acrylic on Cradled Panel 12 x 12"',
      description: (<>The <em>Emerging Sentinel</em> is stepping into her own strength, facing her first real challenge. She stands at the threshold of growth, learning to trust her instincts as she evolves from novice to courageous guardian.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Emerging-Sentinel-2.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Emerging-Sentinel.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Emerging-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Emerging-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Emerging-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Emerging-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Seasoned-Sentinel-3.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Seasoned-Sentinel.MOV`,
      title: "Seasoned Sentinel",
      medium: 'Original - Acrylic on Cradled Panel 12 x 12"',
      description: (<>The <em>Seasoned Sentinel</em> is a veteran protector, rich with experience. She's weathered many challenges, her instincts sharpened by time, and she now stands as a mentor figure. She balances wisdom with calm authority, guiding others with a steady hand.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Seasoned-Sentinel-3.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Seasoned-Sentinel.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Seasoned-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Seasoned-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Seasoned-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Seasoned-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Noble-Sentinel-4.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Noble-Sentinel.MOV`,
      title: "Noble Sentinel",
      medium: 'Original - Acrylic on Cradled Panel 12 x 12"',
      description: (<>The <em>Noble Sentinel</em> carries herself with a timeless regal grace, a true guardian of tradition. She embodies dignity and honor, blending old wisdom with modern leadership. She's the anchor of the sentinel line, embodying the legacy they all stand for.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Noble-Sentinel-4.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Noble-Sentinel.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Noble-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Noble-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Noble-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Noble-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Eternal-Sentinel-5.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Eternal-Sentinel.MOV`,
      title: "Eternal Sentinel",
      medium: 'Original - Acrylic on Cradled Panel 12 x 12"',
      description: (<>The <em>Eternal Sentinel</em> is a timeless guardian, embodying wisdom that transcends eras. Rooted in ancient knowledge yet always looking forward, she's a beacon of continuity and enduring strength.</>),
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Sentinel-Series/Eternal-Sentinel-5.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Eternal-Sentinel.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Eternal-Sentinel-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Eternal-Sentinel-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Eternal-Sentinel-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Eternal-Sentinel-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Other-Series/Empress-of-the-Unseen-War.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Empress-of-the-Unseen-War.MOV`,
      title: "Empress of the Unseen War",
      medium: 'Original - Colored and Pastel Pencil/Charcoal/Copper Leaf on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A young aristocrat stands sovereign over battles fought in silence—internal,
        inherited, and unseen. Her ceremonial armor, woven from memory and defiance, evokes
        tradition while asserting self-forged power. Inspired by Klimt and mythic symbolism,
        this portrait honors quiet resilience and the nobility of strength unrecognized.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Other-Series/Empress-of-the-Unseen-War.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Empress-of-the-Unseen-War.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Empress-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Empress-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Empress-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/sentinel-series/TN-Empress-4.jpg` },
      ],
    },
    // --- Additional Works (indices 12–15) ---
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden-Awakening.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden-The-Awakening.MOV`,
      title: "Shield Maiden: The Awakening",
      medium: 'Original - Colored and Pastel Pencil/Charcoal/Copper Leaf on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A tribute to the quiet courage that precedes action. Her soft gaze and firm
        stance reflect the tension between vulnerability and emerging strength. The shield she
        holds is both protection and promise—marking the moment before she becomes a warrior
        shaped by the world.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden-Awakening.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden-The-Awakening.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Awakening-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Awakening-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Awakening-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Awakening-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden.MOV`,
      title: "Shield Maiden",
      medium: 'Original - Colored and Pastel Pencil/Charcoal on Bristol Vellum 22 x 30"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `Not a warrior, but a guardian—her elegance is armor. Softly rendered against
        gilded, mosaic-like patterns, she embodies both protection and reverence. The shield
        symbolizes resilience and inherited struggle, while her stillness asserts beauty as
        quiet defiance.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Other-Series/Shield-Maiden.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Shield-Maiden.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Shield-Maiden-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Shield-Maiden-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Shield-Maiden-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Shield-Maiden-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Other-Series/Future-Aspirations.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Future-Aspirations.MOV`,
      title: "Future Aspirations",
      medium: 'Original - Oil and Gold Leaf on Canvas 30 x 40"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `A meditation on identity and transformation, this work balances the ancient with
        the futuristic. The central figure—part human, part machine—radiates poised strength
        within a golden halo, while a naturalistic counterpart evokes vulnerability. Between
        them, symbols trace a journey of growth and memory, suggesting that our aspirations
        honor the past even as they shape the future.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Other-Series/Future-Aspirations.png` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Future-Aspirations.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Future-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Future-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Future-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Future-4.jpg` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Other-Series/Judith-and-the-Head-of-Holofernes.png`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Judith.MOV`,
      title: "Judith and the Head of Holofernes",
      medium: 'Original - Oil and Gold Leaf on Canvas 24 x 36"',
      size: "Custom sizes are available for both canvas and giclee prints.",
      description: `Reimagined in the opulent style of Klimt's golden period, Judith appears as both
        executioner and icon. Her cool composure contrasts with the raw intensity of
        Holofernes' severed head, while gilded patterns and sacred adornments evoke divine
        authority. This work explores feminine strength, sacrifice, and justice, balancing
        beauty with brutality.`,
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Other-Series/Judith-and-the-Head-of-Holofernes.png` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Judith.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Judith-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Judith-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Judith-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/additional-works/TN-Judith-4.jpg` },
      ],
    },
    // --- Silver Belles Series (indices 16–20) ---
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Belle-of-the-Silver-Garden.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Belle-of-the-Silver-Garden.MOV`,
      title: "Belle of the Silver Garden",
      medium: 'Original - Acrylic and Silver Leaf on Cradled Panel 16 x 16"',
      description: "She simply stands in quiet elegance, a presence of calm and thoughtful grace. This piece invites viewers to pause and appreciate a moment of simple, useful elegance.",
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Belle-of-the-Silver-Garden.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Belle-of-the-Silver-Garden.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Belle-of-the-Silver-Garden-Interior-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Belle-of-the-Silver-Garden-Interior-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Belle-of-the-Silver-Garden-Interior-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Belle-of-the-Silver-Garden-Interior-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Silver-Spark-of-Innocence.jpg`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Silver-Spark-of-Innocence.MOV`,
      title: "Silver Spark of Innocence",
      medium: 'Original - Acrylic and Silver Leaf on Cradled Panel 16 x 16"',
      description: "She stands, a silver-tinged portrait of youthful elegance, caught in that delicate pause before a decision. This piece invites viewers into her reflective moment, capturing innocence and anticipation in a single breath.",
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Silver-Spark-of-Innocence.jpg` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Silver-Spark-of-Innocence.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Silver-Spark-Interior-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Silver-Spark-Interior-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Silver-Spark-Interior-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Silver-Spark-Interior-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Anticipating-Her-Next-Move.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Anticipating-Her-Next-Move.MOV`,
      title: "Anticipating Her Next Move",
      medium: 'Original - Acrylic and Silver Leaf on Cradled Panel 16 x 16"',
      description: "Here, she stands poised, a portrait of elegance on the verge of decision. The piece captures that delicate, suspended moment of anticipation, encouraging reflection before moving forward.",
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Anticipating-Her-Next-Move.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Anticipating-Her-Next-Move.MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Anticipating-Her-Next-Move-Interior-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Anticipating-Her-Next-Move-Interior-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Anticipating-Her-Next-Move-Interior-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Anticipating-Her-Next-Move-Interior-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Modern-Belle.jfif`,
      videoSrc: `${import.meta.env.BASE_URL}videos/AI-Modern-Belle .MOV`,
      title: "Modern Belle",
      medium: 'Original - Acrylic and Silver Leaf on Cradled Panel 16 x 16"',
      description: "She is a modern-day icon, combining classic sophistication with a contemporary edge. Her presence bridges the elegant grace of the past and the bold allure of the present, inviting onlookers to see tradition reimagined.",
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Modern-Belle.jfif` },
        { type: "video", src: `${import.meta.env.BASE_URL}videos/AI-Modern-Belle .MOV` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Modern-Belle-Interior-1.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Modern-Belle-Interior-2.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Modern-Belle-Interior-3.jfif` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Modern-Belle-Interior-4.jfif` },
      ],
    },
    {
      type: "image",
      src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Reflecting-in-Living-Marble.jpg`,
      title: "Reflecting in Living Marble",
      medium: 'Original - Acrylic and Silver Leaf on Cradled Panel 16 x 16"',
      description: "In this piece, she is a figure merging gracefully with a marble-like surface, almost as if she's contemplating her own transformation. It's about blending identity and art—a living statue in that reflective moment.",
      thumbnails: [
        { type: "image", src: `${import.meta.env.BASE_URL}images/Silver-Belle-Series/Reflecting-in-Living-Marble.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Reflecting-in-Living-Marble-Interior-1.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Reflecting-in-Living-Marble-Interior-2.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Reflecting-in-Living-Marble-Interior-3.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Reflecting-in-Living-Marble-Interior-4.jpg` },
        { type: "image", src: `${import.meta.env.BASE_URL}thumb-nails/silver-belle-series/TN-Reflecting-in-Living-Marble-Interior-5.jpg` },
      ],
    },
  ];

  const portraitIndex = parseInt(id);
  const portrait = paintings[portraitIndex];

  // Redirect if invalid ID
  if (!portrait || isNaN(portraitIndex)) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="portrait-detail-page">
      <button className="back-button" onClick={() => navigate("/work")}>
        ← Back to Gallery
      </button>
      <div className="portrait-detail-container">
        <div className="portrait-image-section">
          <div className="main-display" onClick={() => setLightboxOpen(true)} style={{ cursor: "pointer" }}>
            {portrait.thumbnails && portrait.thumbnails[selectedMediaIndex] ? (
              portrait.thumbnails[selectedMediaIndex].type === "video" ? (
                <video
                  className="portrait-video"
                  src={portrait.thumbnails[selectedMediaIndex].src}
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img src={portrait.thumbnails[selectedMediaIndex].src} alt={portrait.title} />
              )
            ) : (
              <img src={portrait.src} alt={portrait.title} />
            )}
          </div>

          {portrait.thumbnails && portrait.thumbnails.length > 0 && (
            <div className="thumbnail-container">
              {portrait.thumbnails.map((media, index) => (
                <div
                  key={index}
                  className={`thumbnail ${media.type === "video" ? "video-thumbnail" : ""} ${selectedMediaIndex === index ? "active" : ""}`}
                  onClick={() => { setSelectedMediaIndex(index); setLightboxOpen(true); }}
                >
                  {media.type === "video" ? (
                    <>
                      <video src={media.src} />
                      <div className="play-overlay">
                        <FaPlay />
                      </div>
                    </>
                  ) : (
                    <img src={media.src} alt={`${portrait.title} thumbnail ${index + 1}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="portrait-info-section">
          {portrait.title === "Aphrodite Ascendant" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel I — Aphrodite Ascendant
            </h1>
          ) : portrait.title === "Aphrodite Enthroned" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel II — Aphrodite Enthroned
            </h1>
          ) : portrait.title === "Aphrodite Eternal" ? (
            <h1 className="portrait-title-triptych">
              Aphrodite Triptych: Journey of a Goddess
              <br />
              Panel III — Aphrodite Eternal
            </h1>
          ) : (
            <h1 className="portrait-title">{portrait.title}</h1>
          )}
          {portrait.medium && <p className="portrait-medium">{portrait.medium}</p>}
          {portrait.size && <p className="portrait-size">{portrait.size}</p>}
          {portrait.description && <p className="portrait-description">{portrait.description}</p>}
          <button className="inquire-button" onClick={() => navigate("/contact")}>
            Inquire About Purchase
          </button>
          {portrait.thumbnails.some((t) => t.type === "video") && (
            <p className="video-disclaimer">AI video shown for display purposes only</p>
          )}
        </div>
      </div>
      {lightboxOpen && (
        <div className="portrait-lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="portrait-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>✕</button>
            <button
              className="lightbox-prev"
              onClick={() => setSelectedMediaIndex((prev) => (prev - 1 + portrait.thumbnails.length) % portrait.thumbnails.length)}
            >
              <FaChevronLeft />
            </button>
            <div className="lightbox-media">
              {portrait.thumbnails[selectedMediaIndex].type === "video" ? (
                <video
                  src={portrait.thumbnails[selectedMediaIndex].src}
                  controls
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img src={portrait.thumbnails[selectedMediaIndex].src} alt={portrait.title} />
              )}
            </div>
            <button
              className="lightbox-next"
              onClick={() => setSelectedMediaIndex((prev) => (prev + 1) % portrait.thumbnails.length)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortraitDetail;
