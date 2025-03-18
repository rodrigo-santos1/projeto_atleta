import { ReactNode } from "react";

export interface Product {
  idealFor: ReactNode;
  material: ReactNode;
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
    image: "/assets/camisafut.jpg",
    description: "Camisa oficial de treino prolongada",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "2",
    name: "Chuteira de Campo Masculina",
    category: "Masculino",
    subcategory: "Calçados",
    price: 199.99,
    image: "/assets/chuteira.jpg",
    description: "Chuteira de campo masculina com ótima aderência e conforto.",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "3",
    name: "Meias de Futebol Masculinas",
    category: "Masculino",
    subcategory: "Acessórios",
    price: 29.99,
    image: "/assets/meias.jpg",
    description: "Meias de futebol masculinas com proteção extra para os tornozelos.",
    idealFor: undefined,
    material: undefined
  },
  // Feminino
  {
    id: "4",
    name: "Camisa de Jogo Feminina",
    category: "Feminino",
    subcategory: "Camisas",
    price: 99.99,
    image: "/assets/vasco.webp",
    description: "Camisa oficial de jogo feminina com tecnologia de absorção de suor.",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "5",
    name: "Chuteira Feminina",
    category: "Feminino",
    subcategory: "Calçados",
    price: 179.99,
    image: "/assets/feminino.webp",
    description: "Chuteira feminina para gramado com travas de alta performance.",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "6",
    name: "Luvas de Goleiro Masculino",
    category: "Feminino",
    subcategory: "Acessórios",
    price: 89.99,
    image: "/assets/luvas.webp",
    description: "Luvas de goleiro femininas com aderência superior.",
    idealFor: undefined,
    material: undefined
  },
  // Infantil
  {
    id: "7",
    name: "Camisa Infantil",
    category: "Infantil",
    subcategory: "Camisas",
    price: 69.99,
    image: "/assets/infantill.jpg",
    description: "Camisa oficial de jogo infantil, réplica do uniforme profissional.",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "8",
    name: "Tênis de Futsal Infantil",
    category: "Infantil",
    subcategory: "Calçados",
    price: 129.99,
    image: "/assets/futsal.webp",
    description: "Tênis de futsal infantil com sola aderente para quadras indoor.",
    idealFor: undefined,
    material: undefined
  },
  {
    id: "9",
    name: "Caneleira Infantil",
    category: "Infantil",
    subcategory: "Acessórios",
    price: 39.99,
    image: "/assets/canela.webp",
    description: "Caneleira infantil leve e resistente para proteção durante o jogo.",
    idealFor: undefined,
    material: undefined
  },
];
