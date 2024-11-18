export interface ARProduct {
  id: string;
  name: string;
  category: "Eletrônicos" | "Jogos" | "Acessórios";
  subcategory: "Óculos VR" | "Consoles" | "Controladores" | "Outros";
  price: number;
  image: string;
  description: string;
}

export const arProducts: ARProduct[] = [
  // Eletrônicos
  {
    id: "1",
    name: "Óculos VR Avançado",
    category: "Eletrônicos",
    subcategory: "Óculos VR",
    price: 2999.99,
    image: "/assets/oculos.webp",
    description:
      "Óculos de realidade virtual com resolução 4K e áudio imersivo.",
  },
  {
    id: "2",
    name: "Console de Realidade Aumentada",
    category: "Eletrônicos",
    subcategory: "Consoles",
    price: 499.99,
    image: "/assets/id15.webp",
    description:
      "Console de realidade aumentada com suporte para múltiplos jogadores.",
  },
  // Jogos
  {
    id: "3",
    name: "Jogo de Aventura AR",
    category: "Jogos",
    subcategory: "Outros",
    price: 5988.99,
    image: "/assets/id16.webp",
    description:
      "Jogo de aventura em realidade aumentada com gráficos realistas.",
  },
  {
    id: "4",
    name: "Oculos VR",
    category: "Eletrônicos",
    subcategory: "Consoles",
    price: 4996.99,
    image: "/assets/id4.webp",
    description:
      "Óculos de realidade virtual com resolução 4K e áudio imersivo.",
  },
  // Acessórios
  {
    id: "5",
    name: "Relogio Com Controlador de movimento",
    category: "Acessórios",
    subcategory: "Controladores",
    price: 2279.99,
    image: "/assets/id5.webp",
    description:
      "Tenha o controle de todos os seus movimentos e aplicativos.",
  },
  {
    id: "6",
    name: "Fone de Ouvido AR",
    category: "Acessórios",
    subcategory: "Outros",
    price: 39.99,
    image: "/assets/id10.jpg",
    description: "Fone de ouvido com áudio espacial para realidade aumentada.",
  },
];
