"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  User,
  Home,
  ArrowLeft,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/data/data";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    const favoriteProducts = products.filter((product) =>
      storedFavorites.includes(product.id),
    );
    setFavorites(favoriteProducts);

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(
      cart.reduce((total: number, item: any) => total + item.quantity, 0),
    );
  }, []);

  const removeFavorite = (productId: string) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId,
    );
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites.map((product) => product.id)),
    );
  };

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(
      cart.reduce((total: number, item: any) => total + item.quantity, 0),
    );
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const goToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#080F1A] text-[#39D5FF]">
      <div className="container mx-auto p-4">
        <header className="mb-6 flex items-center justify-between">
          <Link href="/" className="flex items-center text-3xl font-bold">
            <Home className="mr-2 h-6 w-6 text-[#39D5FF]" />
            <span className="text-white">Futebol</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button
              onClick={goToCart}
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho ({cartCount})
            </Button>
            <Button
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <Heart className="mr-2 h-4 w-4" fill="#39D5FF" />
              Favoritos ({favorites.length})
            </Button>
            <Button
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <User className="mr-2 h-4 w-4" />
              Conta
            </Button>
          </div>
        </header>

        <button
          onClick={() => router.push("/")}
          className="mb-6 inline-flex items-center text-[#39D5FF] transition duration-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </button>

        <Card className="rounded-lg border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:shadow-[#39d4ff2f]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Seus Favoritos</CardTitle>
          </CardHeader>
          <CardContent>
            {favorites.length === 0 ? (
              <p>Você ainda não tem itens favoritos.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favorites.map((product) => (
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
                        </div>
                        <p className="mb-2 text-sm">{product.description}</p>
                        <p className="text-2xl font-bold">
                          R$ {product.price.toFixed(2)}
                        </p>
                      </Link>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        className="rounded-2xl border-[#39D5FF] bg-[#2a5c40] text-[#39D5FF] hover:bg-[#39D5FF] hover:text-[#FFFFFF]"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Adicionar ao Carrinho
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full border-[#39D5FF] bg-[#2a5c40] p-2 text-[#39D5FF] hover:bg-[#39D5FF] hover:text-[#FFFFFF]"
                        onClick={() => removeFavorite(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
            {favorites.length > 0 && (
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={goToCheckout}
                  className="m-0 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#39D5FF] pl-3 pr-3 text-[#080F1A] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                >
                  Finalizar Compra
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
