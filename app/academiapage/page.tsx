"use client";

import { useState, useEffect } from "react";
import { products, Product } from "@/data/academia.ts/data"; // Certifique-se de que o caminho do seu arquivo está correto
import { Heart, ShoppingCart, User, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";

export default function ProductPage() {
  const router = useRouter();
  const [category, setCategory] = useState<string>("todos");
  const [subcategory, setSubcategory] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<
    "relevantes" | "preço baixo" | "preço alto"
  >("relevantes");
  const [isOrderMenuOpen, setIsOrderMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOrderMenuOpen && !(event.target as Element).closest(".relative")) {
        setIsOrderMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOrderMenuOpen]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as Array<Product & { quantity: number }>;
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    

    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setFavorites(storedFavorites);
  }, []);

  const filteredProducts = products
    .filter((product) => category === "todos" || product.category === category)
    .filter(
      (product) =>
        subcategory === "todos" || product.subcategory === subcategory,
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "preço baixo") return a.price - b.price;
    if (sortBy === "preço alto") return b.price - a.price;
    return 0;
  });

  const categories = ["Masculino", "Feminino", "Infantil"];
  const subcategories = ["Camisas", "Calçados", "Acessórios"];

  const addToCart = (product: Product) => {
    const cart: Array<Product & { quantity: number }> = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: Product & { quantity: number }) => item.id === product.id);
    

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));

  };

  const toggleFavorite = (productId: string) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const goToFavorites = () => {
    router.push("/favorites");
  };

  return (
    <div className="min-h-screen bg-[#080F1A] text-[#39D5FF]">
      <div
        className="mb-6 flex h-[450px] w-full items-center justify-center bg-[#2a5c40]"
        style={{
          backgroundImage: "url('/assets/ac01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-2">
              <Home className="h-8 w-8 text-[#39D5FF]" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Academia</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="h-10 w-64 rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              onClick={goToCart}
              variant="outline"
              className="m-0 mb-2 flex h-10 items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho ({cartCount})
            </Button>
            <Button
              onClick={goToFavorites}
              variant="outline"
              className="m-0 mb-2 flex h-10 items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <Heart className="mr-2 h-4 w-4" />
              Favoritos ({favorites.length})
            </Button>
            <Button
              variant="outline"
              className="m-0 mb-2 flex h-10 items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <User className="mr-2 h-4 w-4" />
              Conta
            </Button>
          </div>
        </header>

        <div className="mb-6 flex">
          <nav className="w-1/4 pr-4">
            <div className="mb-4">
              <h2 className="mb-2 text-2xl font-semibold">Categorias</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      setCategory("todos");
                      setSubcategory("todos");
                    }}
                    className={`w-full rounded px-4 py-2 text-left text-lg ${category === "todos" ? "bg-[#39D5FF] text-[#1b402c]" : "hover:bg-[#2a5c40]"}`}
                  >
                    Todos
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setCategory(cat);
                        setSubcategory("todos");
                      }}
                      className={`w-full rounded px-4 py-2 text-left text-lg ${category === cat ? "bg-[#39D5FF] text-[#1b402c]" : "hover:bg-[#2a5c40]"}`}
                    >
                      {cat}
                    </button>
                    {category === cat && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {subcategories.map((subcat) => (
                          <li key={subcat}>
                            <button
                              onClick={() => setSubcategory(subcat)}
                              className={`w-full rounded px-4 py-2 text-left text-lg ${subcategory === subcat ? "bg-[#39D5FF] text-[#1b402c]" : "hover:bg-[#2a5c40]"}`}
                            >
                              {subcat}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <main className="w-3/4">
            <div className="relative z-50 mb-4 flex justify-end">
              <div className="relative">
                <button
                  onClick={() => setIsOrderMenuOpen(!isOrderMenuOpen)}
                  className="m-0 flex h-10 w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] px-4 py-2 pl-3 pr-3 text-left text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                >
                  {sortBy === "relevantes"
                    ? "Relevantes"
                    : sortBy === "preço baixo"
                      ? "Preço: Baixo para Alto"
                      : "Preço: Alto para Baixo"}
                </button>
                {isOrderMenuOpen && (
                  <ul className="absolute left-0 top-full z-50 mt-1 w-full rounded-2xl border border-[#39D5FF] bg-[#2a5c40] shadow-lg">
                    {["relevantes", "preço baixo", "preço alto"].map(
                      (option) => (
                        <li key={option}>
                          <button
                            onClick={() => {
                              setSortBy(
                                option as
                                  | "relevantes"
                                  | "preço baixo"
                                  | "preço alto",
                              );
                              setIsOrderMenuOpen(false);
                            }}
                            className="w-full rounded-md px-4 py-2 text-left text-[#39D5FF] transition duration-300 hover:bg-[#39D5FF] hover:text-[#080F1A]"
                          >
                            {option === "relevantes"
                              ? "Relevantes"
                              : option === "preço baixo"
                                ? "Preço: Baixo para Alto"
                                : "Preço: Alto para Baixo"}
                          </button>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedProducts.map((product: Product) => (
                <Card
                  key={product.id}
                  className="m-0 mb-2 rounded-md border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                >
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/product/${product.id}`}>
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          objectFit="cover"
                          className="mb-4 rounded-lg"
                          style={{ width: "300px", height: "300px" }}
                        />
                        <Button
                          variant="outline"
                          className="absolute right-2 rounded-full border-[#39D5FF] bg-[#2a5c40] p-2 text-[#39D5FF] hover:bg-[#39D5FF] hover:text-[#FFFFFF]"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(product.id);
                          }}
                        >
                          <Heart
                            className="h-4 w-4"
                            fill={
                              favorites.includes(product.id)
                                ? "#39D5FF"
                                : "none"
                            }
                          />
                        </Button>
                      </div>
                      <p className="mb-2 text-sm">{product.description}</p>
                      <p className="text-2xl font-bold">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </Link>
                  </CardContent>

                  <CardFooter className="flex justify-center">
                    <Button
                      variant="outline"
                      className="h-10 w-full rounded-2xl border-[#39D5FF] bg-[#2a5c40] text-[#39D5FF] hover:bg-[#39D5FF] hover:text-[#FFFFFF]"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Adicionar ao Carrinho
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
