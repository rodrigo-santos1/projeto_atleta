export interface Product {
  id: string;
  name: string;
  category: "Musculação" | "Cardio" | "Acessórios" | "Suplementos"; 
  subcategory:
    | "Roupas"
    | "Equipamentos"
    | "Suplementos"
    | "Acessórios de treino"; // Subcategorias
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Musculação
  {
    id: "1",
    name: "Camisa de Treino Masculina",
    category: "Musculação",
    subcategory: "Roupas",
    price: 89.99,
    image: "/assets/camisaacademia.jpg",
    description:
      "Camisa de treino masculina confortável e respirável, ideal para musculação.",
  },
  {
    id: "2",
    name: "Shorts de Treino Masculino",
    category: "Musculação",
    subcategory: "Roupas",
    price: 79.99,
    image: "/assets/shortsacademia.jpg",
    description:
      "Shorts de treino para musculação, com tecido de alta compressão.",
  },
  {
    id: "3",
    name: "Shorts de Treino Feminino",
    category: "Musculação",
    subcategory: "Equipamentos",
    price: 249.99,
    image: "/assets/bunda.jpg",
    description: "Halteres ajustáveis para treinos de força e resistência.",
  },
  {
    id: "4",
    name: "Garrafas",
    category: "Musculação",
    subcategory: "Equipamentos",
    price: 399.99,
    image: "/assets/garrafas.jpg",
    description:
      "Banco de musculação com ajuste de inclinação para diversos exercícios.",
  },
  // Cardio
  {
    id: "5",
    name: "Relôgio Digital",
    category: "Cardio",
    subcategory: "Equipamentos",
    price: 89.99,
    image: "/assets/relogio.jpg",
    description:
      "Caminhômetro digital para monitorar seu ritmo de caminhada e corrida.",
  },
  {
    id: "6",
    name: "Tênis para Corrida",
    category: "Cardio",
    subcategory: "Roupas",
    price: 199.99,
    image: "/assets/teniss.jpg",
    description:
      "Tênis de corrida com sistema de amortecimento para maior conforto.",
  },
  {
    id: "7",
    name: "Bicicleta Ergométrica",
    category: "Cardio",
    subcategory: "Equipamentos",
    price: 799.99,
    image: "/assets/bike.jpg",
    description:
      "Bicicleta ergométrica com ajuste de resistência para treino cardio.",
  },
  // Acessórios
  {
    id: "8",
    name: "Mochila de Academia",
    category: "Acessórios",
    subcategory: "Acessórios de treino",
    price: 159.99,
    image: "/assets/mochila.jpg",
    description:
      "Mochila resistente com compartimentos para seus equipamentos de treino.",
  },
  {
    id: "9",
    name: "Cinto de Levantamento de Peso",
    category: "Acessórios",
    subcategory: "Acessórios de treino",
    price: 99.99,
    image: "/assets/cinto.jpeg",
    description:
      "Cinto de levantamento de peso para maior segurança durante os treinos.",
  },
  // Suplementos
  {
    id: "10",
    name: "Whey Protein",
    category: "Suplementos",
    subcategory: "Suplementos",
    price: 199.99,
    image: "/assets/whey.jpg",
    description:
      "Suplemento proteico para aumento de massa muscular e recuperação.",
  },
  {
    id: "11",
    name: "Creatina Monohidratada",
    category: "Suplementos",
    subcategory: "Suplementos",
    price: 129.99,
    image: "/assets/creatina.webp",
    description:
      "Creatina monohidratada para melhorar o desempenho em treinos de alta intensidade.",
  },
  {
    id: "12",
    name: "BCAA",
    category: "Suplementos",
    subcategory: "Suplementos",
    price: 79.99,
    image: "/assets/bcaa.jpg",
    description: "BCAA para recuperação muscular e prevenção de catabolismo.",
  },
];
