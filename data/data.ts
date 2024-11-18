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
    name: "Camisa de Treino Masculina",
    category: "Masculino",
    subcategory: "Camisas",
    price: 89.99,
    image: "/nike1.jpeg",
    description: "Camisa de treino masculina confortável e respirável.",
  },
  {
    id: "2",
    name: "Chuteira de Campo Masculina",
    category: "Masculino",
    subcategory: "Calçados",
    price: 199.99,
    image: "/nike2.jpeg",
    description: "Chuteira de campo masculina com ótima aderência e conforto.",
  },
  {
    id: "3",
    name: "Meias de Futebol Masculinas",
    category: "Masculino",
    subcategory: "Acessórios",
    price: 29.99,
    image: "/nike3.jpeg",
    description:
      "Meias de futebol masculinas com proteção extra para os tornozelos.",
  },
  // Feminino
  {
    id: "4",
    name: "Camisa de Jogo Feminina",
    category: "Feminino",
    subcategory: "Camisas",
    price: 99.99,
    image: "/nike4.jpeg",
    description:
      "Camisa oficial de jogo feminina com tecnologia de absorção de suor.",
  },
  {
    id: "5",
    name: "Chuteira Feminina",
    category: "Feminino",
    subcategory: "Calçados",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Chuteira feminina para gramado com travas de alta performance.",
  },
  {
    id: "6",
    name: "Luvas de Goleiro Femininas",
    category: "Feminino",
    subcategory: "Acessórios",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Luvas de goleiro femininas com aderência superior.",
  },
  // Infantil
  {
    id: "7",
    name: "Camisa de Jogo Infantil",
    category: "Infantil",
    subcategory: "Camisas",
    price: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Camisa oficial de jogo infantil, réplica do uniforme profissional.",
  },
  {
    id: "8",
    name: "Tênis de Futsal Infantil",
    category: "Infantil",
    subcategory: "Calçados",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Tênis de futsal infantil com sola aderente para quadras indoor.",
  },
  {
    id: "9",
    name: "Caneleira Infantil",
    category: "Infantil",
    subcategory: "Acessórios",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Caneleira infantil leve e resistente para proteção durante o jogo.",
  },
];
