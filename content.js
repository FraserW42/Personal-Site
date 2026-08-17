/* ============================================================
   CONTENT.JS  —  THE ONLY FILE YOU NEED TO EDIT

   Change the text between the quote marks, save, refresh.
   Don't delete the commas at the end of lines.

   TWO FORMATTING TRICKS, usable in any text below:
     *italic text*                    ->  italic text
     [check out my work](index.html)  ->  a link
   ============================================================ */


/* ------------------------------------------------------------
   1. SITE INFO
   ------------------------------------------------------------ */
const SITE = {

  // This gets typed out letter by letter at the top of each page.
  name: "FRASER WOLFE",

  role: "Writer / Director / Producer",

  email: "hello@fraserwolfe.com",
  instagram: "@fraser.wolfe",

  headshot: "images/Fraser_Headshot.jpg",

  bio: `Fraser Wolfe is Toronto/Vancouver based filmmaker.
He graduated from TMU's Image Arts Film
program. He is still figuring out how to conclude this bio.

[Check out his work here](index.html).`,

};


/* ------------------------------------------------------------
   2. THE WORK

   Collapsed, only the still shows. Click the still and it turns
   into a playable video, with the details underneath.

   TO ADD A PIECE: copy a block from "{" to "}," and paste it
   above the closing "];", then change the text.
   ------------------------------------------------------------ */
const WORKS = [

  {
    title: "Buddies",
    still: "images/Buddies_Thumbnail.png",
    video: "https://vimeo.com/1214645742/c6a951b4b2?share=copy&fl=sv&fe=ci",
    meta: "Short Film · 2026 · 11 min · Writer/Director",
    description: `Over a weekend of skiing, two 14-year-old boys navigate the
boundaries of their friendship.`,

    // Optional
    awards: [
      "Toronto International Film Festival 2026– Official Selection",
    ],

    // Optional
    credits: [
      { role: "Writer/Director",     name: "Fraser Wolfe" },
      { role: "Producer",            name: "Declan McKenna" },
      { role: "Associate Producer",  name: "Genevieve Carrier" },
      { role: "Executive Producers", name: "Harland Weiss, Donovan M Boden, Isil Gilderdale, Emily Harris" },
      { role: "Cinematographer",     name: "John Takacs" },
      { role: "Production Designer", name: "Jordan Wong" },
      { role: "Editors",             name: "Emily MacDonald, Fraser Wolfe" },
      { role: "Wardrobe",            name: "Tallulah Macleod" },
      { role: "Sound Designer",      name: "Alex Gluch" },
      { role: "Composer",            name: "Kai Creedman-Ho" },
    ],
  },

  {
    title: "Between Late April and Early May",
    still: "images/BLAAEM_Thumbnail.png",
    video: "https://vimeo.com/1216175552/2c5e1a7c95?share=copy&fl=sv&fe=ci",
    meta: "Short Film · 2026 · 8 min · Producer",
    description: `A short docu-fiction film that captures the oddities and
absurdities of human behaviour during the annual cherry blossom bloom in
High Park, Toronto.`,
    awards: [
      "Toronto International Film Festival 2026– Official Selection",
      "Atlantic International Film Festival 2026– Official Selection",
      "Young Director Award 2026 – Gold Winner",
    ],
    credits: [
      { role: "Writer/Director",         name: "Sophia Smith" },
      { role: "Producer",                name: "Fraser Wolfe" },
      { role: "Executive Producers",     name: "Harland Weiss, Donovan M. Boden, Isil Gilderdale, Emily Harris" },
      { role: "Director of Photography", name: "John Ker" },
      { role: "Casting",                 name: "Sophia Smith" },
      { role: "Wardrobe",                name: "Sophia Smith" },
      { role: "Editor",                  name: "Cam Anderson" },
      { role: "Composer",                name: "Eliza Niemi" },
      { role: "Sound Designer",          name: "Joaquin Clunie" },
    ],
  },

  {
    title: "Past Won't Leave My Bed",
    still: "images/PWLMB_Thumbnail.png",
    video: "https://www.youtube.com/watch?v=acA8Rr3gEco",
    meta: "Music Video · 2025 · 3 min · Producer",
    description: `A music video for artist Joji.`,
    awards: [
      "Vimeo Staff Pick",
      "Featured by Shots",
    ],
    credits: [
      { role: "Director",       name: "Ethan Eng" },
      { role: "Producers",      name: "Andrew Michalko, Fraser Wolfe, Austin Birtch" },
      { role: "Shot by",        name: "Ethan Eng, Andrew Michalko, Justin Morrice, Kevin Tseng" },
      { role: "Editors",        name: "Justin Im, Ethan Eng" },
      { role: "Sound Designer", name: "Nick Phokeev" },
    ],
  },

  {
    title: "Mud Coloured Face",
    still: "images/MCF_thumbnail.png",
    video: "https://www.youtube.com/watch?v=x2DGjtzCG5A",
    meta: "Music Video · 2025 · 4 min · Producer",
    description: `A music video for artist Deap.`,
    awards: [
      "Featured by Acidbite Picks",
    ],
    credits: [
      { role: "Writer/Director",     name: "Johnny Tsatsos" },
      { role: "Producers",           name: "Khushil Doshi, Fraser Wolfe" },
      { role: "Cinematographer",     name: "Hayden Salter" },
      { role: "Production Designer", name: "Barbara Sanchez" },
      { role: "Editor",              name: "Johnny Tsatsos" },
      { role: "Casting",             name: "Fraser Wolfe" },
      { role: "Wardrobe",            name: "Zoe Papak" },
    ],
  },

];
