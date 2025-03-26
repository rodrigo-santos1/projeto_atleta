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

interface CartItem extends Product {
  quantity: number;
}

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedFavorites: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const favoriteProducts = products.filter((product) =>
      storedFavorites.includes(product.id)
    );
    setFavorites(favoriteProducts);

    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(
      cart.reduce((total, item) => total + item.quantity, 0)
    );
  }, []);

  const removeFavorite = (productId: string) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites.map((product) => product.id))
    );
  };

  const addToCart = (product: Product) => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
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
            <Button onClick={goToCart} variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho ({cartCount})
            </Button>
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" fill="#39D5FF" />
              Favoritos ({favorites.length})
            </Button>
            <Button variant="outline">
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

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Seus Favoritos</CardTitle>
          </CardHeader>
          <CardContent>
            {favorites.length === 0 ? (
              <p>Você ainda não tem itens favoritos.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favorites.map((product) => (
                  <Card key={product.id} className="m-0 mb-2">
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
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Adicionar ao Carrinho
                      </Button>
                      <Button
                        variant="outline"
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
                <Button onClick={goToCheckout}>Finalizar Compra</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
