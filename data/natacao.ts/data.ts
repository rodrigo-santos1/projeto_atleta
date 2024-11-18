export interface Product {
  id: string;
  name: string;
  category: "Masculino" | "Feminino" | "Infantil";
  subcategory: "Camisas" | "Calçados" | "Acessórios";
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Masculino
  {
    id: "1",
    name: "Sunga",
    category: "Masculino",
    subcategory: "Camisas",
    price: 89.99,
    image: "/assets/sunga.jpg",
    description: "Camisa de treino masculina confortável e respirável.",
  },
  {
    id: "2",
    name: "Touca",
    category: "Masculino",
    subcategory: "Calçados",
    price: 199.99,
    image: "/assets/touca.jpg",
    description: "Chuteira de campo masculina com ótima aderência e conforto.",
  },
  {
    id: "3",
    name: "Óculos",
    category: "Masculino",
    subcategory: "Acessórios",
    price: 29.99,
    image: "/assets/oculosss.jpg",
    description:
      "Meias de futebol masculinas com proteção extra para os tornozelos.",
  },
  // Feminino
  {
    id: "4",
    name: "Maiô",
    category: "Feminino",
    subcategory: "Camisas",
    price: 99.99,
    image: "/assets/maio.jpg",
    description:
      "Camisa oficial de jogo feminina com tecnologia de absorção de suor.",
  },
  {
    id: "5",
    name: "Flutuador",
    category: "Feminino",
    subcategory: "Calçados",
    price: 179.99,
    image: "/assets/flutuador.jpg",
    description:
      "Chuteira feminina para gramado com travas de alta performance.",
  },
  {
    id: "6",
    name: "Prancha",
    category: "Feminino",
    subcategory: "Acessórios",
    price: 89.99,
    image: "/assets/prancha.jpg",
    description: "Luvas de goleiro femininas com aderência superior.",
  },
  // Infantil
  {
    id: "7",
    name: "Snorkel",
    category: "Infantil",
    subcategory: "Camisas",
    price: 69.99,
    image: "/assets/snorkel.jpg",
    description:
      "Camisa oficial de jogo infantil, réplica do uniforme profissional.",
  },
  {
    id: "8",
    name: "Pé de pato",
    category: "Infantil",
    subcategory: "Calçados",
    price: 129.99,
    image: "/assets/pedepato.jpg",
    description:
      "Tênis de futsal infantil com sola aderente para quadras indoor.",
  },
  {
    id: "9",
    name: "Shorts competição",
    category: "Infantil",
    subcategory: "Acessórios",
    price: 39.99,
    image: "/assets/shorts.jpg",
    description:
      "Caneleira infantil leve e resistente para proteção durante o jogo.",
  },
];
