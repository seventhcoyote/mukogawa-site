// English copy (same keys as content/pt.ts). Main texts from Israel's translation document
// (Tradução Campanha, 2026-11-02); menu, buttons, form and store written to match.
// No video, rewards or store yet: see `has`.
import type { Dict } from "./index";

export const en: Dict = {
  lang: "en",
  code: "en",
  // the title over the battle drawing (pages without a video)
  welcome: "/img/welcome.webp",
  has: { video: false, rewards: false, store: false },
  meta: {
    title: "Muko-Gawa: Bleeding Light",
    description: "Bleeding Light is a dark fantasy manga based on biblical literature, where angels and demons wage a war hidden from human eyes.",
    share: "Mukō-Gawa is a dark fantasy manga based on biblical literature, where angels and demons wage a war hidden from human eyes.",
    locale: "en_US",
    campanha: "Project · Muko-Gawa: Bleeding Light",
    autores: "Authors · Muko-Gawa: Bleeding Light",
    loja: "Store · Muko-Gawa: Bleeding Light",
  },
  alt: {
    angel: "The angel Thaevi with open wings and a sword",
    cover: "Cover of Muko-Gawa: Bleeding Light",
    manga: "Open pages of the manga Bleeding Light",
    homeLink: "Muko-Gawa — Home",
    scroll: "Scroll down",
    welcome: "Welcome to Muko-Gawa",
    prev: "Previous",
    next: "Next",
  },
  nav: { home: "Home", campanha: "Project", autores: "Authors", loja: "Store", menu: "Open menu", close: "Close menu", language: "Language", current: "EN", main: "Main" },
  hero: { bleeding: "BLEEDING", light: "LIGHT", shop: "Buy now", presale: "Pre-order", available: "COMING SOON", logoAlt: "向こう側 Muko-Gawa" },
  tagline: ["Bleeding Light is a dark fantasy manga based on biblical literature,", "where angels and demons wage a war hidden from human eyes."],
  video: { title: "Muko-Gawa: one-shot Bleeding Light", id: "", shortId: "", shortTitle: "", unmute: "", mute: "", pause: "", watch: "", close: "" },
  sinopse: {
    title: "synopsis",
    text: "A man abandons the pact his ancestors carried with the heavens. As his hope drains away, the Angels who guard him bleed on an invisible battlefield, resilient despite humanity's ignorance of the conflict consuming them. But even as the heavens are stained with the marks of this war, a new descendant rises, willing to carry the pact forward.",
    cta: "Discover the project",
  },
  projeto: {
    title: "project",
    lead: "Muko-Gawa (which in Japanese means “From the Other Side”)",
    text: " is a fiction inspired by biblical literature, where the ancient conflict between angels and demons intertwines with human faith. The story is told from the perspective of the other side, home of the eternal beings. In an atmosphere that blends dark fantasy and brutal action scenes with reflections on the courage to serve, Bleeding Light is a tale about Thaevi, a soldier who, despite the odds against him, refuses to give up. If you enjoy stories inspired by mythology, biblical literature with a dash of fantasy, and thrilling combat sequences, this manga is perfect for you!",
  },
  campanha: {
    title: "campaign",
    text: "The manga's production is in its final stretch. All development up to this point has been funded by the authors themselves, with the support of backers who purchased concept material offered previously. Now we need to cover the final costs of layout, printing, and shipping the manga.",
    cta: "Pre-order",
    authors: "Meet the authors",
    crowdfunding: "",
    band: "Supporting the project at this stage also works as a pre-order, guaranteeing your copy of the manga (physical or digital) as well as exclusive items from the campaign, depending on the reward tier you choose.",
  },
  recompensas: { title: "", note: ["", ""], alt: "", cta: "" },
  jornada: {
    title: "the journey",
    p1: [
      "Isra began working on the narrative of Muko-Gawa in 2019, and the first years were dedicated to worldbuilding, adapting the universe of biblical literature into fantasy systems, until the foundation was complete. From this process came 7 books covering the biblical narrative from the perspective of the eternal beings.",
      "In 2025, he was in Tokyo and met with an editor from Shueisha (the world's largest manga publisher) to present the vision he had for this great saga he'd developed over the past seven years.",
      "The editor was deeply impressed with the project, praised the narrative and the visuals. He also said he thought the project was ready to be pitched to animation studios, but that if Isra wanted to develop it in manga form, he should start with a yomikiri (a self-contained story told in a single chapter).",
    ],
    quote: "as interesting as all of this is, the best way to prove yourself as a manga writer would be to tell a short story first",
    p2: [
      "That advice became a mission. It didn't take him long to develop the first draft of the story and bring it to an illustrator, with a proposal to create this work together. Match's skill in comics, especially his action sequences and excellent storytelling, as Isra had noticed in Track and KOPHEE, was exactly what this manga needed.",
      "After announcing the partnership came countless messages, meetings, and versions of the story before arriving at the result you're about to discover. The collision of two worlds, that of literature and that of manga. The fruit of a desire to create good stories inspired by the greatest story of all.",
    ],
    photo1: "Isra in Tokyo, with the script of Muko-Gawa",
    photo2: "Isra and Match in front of the audience",
    nasce: ["And so was born", "Muko-Gawa: Bleeding Light!"],   // no ō: Darkcastle has no macron glyph
  },
  autores: {
    title: "the authors",
    escritor: "the writer",
    escritorName: "Israel Subirá",
    escritorText: [" has a background in Biblical Literature, is a writer, a Dungeon Master in his spare time, and is making his debut in comics with Muko-Gawa: Bleeding Light.", "He loves fantasy worlds and is a big admirer of Brandon Sanderson's books, Attack on Titan, Hiromu Arakawa's manga, and Hideo Minaba's art."],
    ilustrador: "the illustrator",
    ilustradorText: ["Guilherme Match is a comic artist and illustrator. Author of KOPHEE and co-author of SOUNDTRACK, both published by Editora JBC and nominated for the HQMix award. He's passionate about dystopian worlds, post-apocalyptic fiction, and characters with cool visual designs. Blade of the Immortal, Monster, and Akira are among his favorite works.", "Bleeding Light marks his debut in fantasy manga."],
    israAlt: "Illustrated portrait of Israel Subirá",
    matchAlt: "Illustrated portrait of Guilherme Match",
    cta: "Discover the project",
  },
  join: {
    title: "stay in the loop",
    text: "If you've made it this far, you're ready to cross into the invisible realm. Leave your email and be the first to hear what's new from Muko-Gawa.",
    available: "COMING SOON",
    email: "youremail@email.com",
    emailLabel: "Email",
    country: "Country",
    defaultCountry: "US",
    countries: [["BR", "Brazil"], ["PT", "Portugal"], ["US", "USA"], ["JP", "Japan"], ["OTHER", "Other"]],
    cta: "Keep me posted",
    invalid: "Please enter a valid email.",
    done: "Done! We'll keep you posted.",
    privacy: ["We only use your email to tell you about Muko-Gawa. To leave the list, write to ", "contact@mukogawa.com", "."],
  },
  loja: {
    eyebrow: "STORE",
    title: "coming soon",
    campanha: { label: "", title: "", text: ["", ""], cta: "", note: "", alt: "" },
    kit: { label: "", title: "", text: "", meta: ["", "", ""], cta: "", note: "", alt: "" },
    disclaimer: "",
    soon: { title: "coming soon", text: "The English edition isn't available yet. Leave your email and we'll let you know as soon as it is." },
  },
  footer: { rights: "© 2026 Muko-Gawa. All rights reserved.", social: "Muko-Gawa on social media" },
};
