"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  User,
  Home,
  ArrowLeft,
  Plus,
  Minus,
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


interface CartItem extends Product {
  quantity: number;
}

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));

    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    setFavorites(storedFavorites);
    setFavoritesCount(storedFavorites.length);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
  };

  const toggleFavorite = (productId: string) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    setFavoritesCount(newFavorites.length);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const goToFavorites = () => {
    router.push("/favorites");
  };

  const goToCheckout = () => {
    router.push("/checkout");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

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
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho {cartCount > 0 && `(${cartCount})`}
            </Button>
            <Button
              onClick={goToFavorites}
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <Heart className="mr-2 h-4 w-4" />
              Favoritos ({favoritesCount})
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
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center text-[#39D5FF] transition duration-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </button>

        <Card className="rounded-lg border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:shadow-[#39d4ff2f]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Seu Carrinho</CardTitle>
          </CardHeader>
          <CardContent>
            {cartItems.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-[#39D5FF] py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p>R$ {item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => removeItem(item.id)}
                        variant="outline"
                        size="icon"
                        className="ml-2 h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="h-8 w-8 rounded-full border-[#39D5FF] bg-[#2a5c40] p-2 text-[#39D5FF] hover:bg-[#39D5FF] hover:text-[#FFFFFF]"
                        onClick={() => toggleFavorite(item.id)}
                      >
                        <Heart
                          className="h-4 w-4"
                          fill={
                            favorites.includes(item.id) ? "#39D5FF" : "none"
                          }
                        />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="text-xl font-bold">
              Total: R$ {totalPrice.toFixed(2)}
            </div>
            <Button
              onClick={goToCheckout}
              className="m-0 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#39D5FF] pl-3 pr-3 text-[#080F1A] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              Finalizar Compra
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
