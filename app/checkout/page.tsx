"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, User, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { Product } from "@/data/data";

interface CartItem extends Product {
  quantity: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    setCartCount(
      cart.reduce((total: number, item: CartItem) => total + item.quantity, 0)
    );

    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]") as Product[];
    setFavoritesCount(storedFavorites.length);

    const total = cart.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted");
    localStorage.removeItem("cart");
    router.push("/order-confirmation");
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const goToFavorites = () => {
    router.push("/favorites");
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
            <Button onClick={goToFavorites} variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Favoritos ({favoritesCount})
            </Button>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4" />
              Conta
            </Button>
          </div>
        </header>

        <button onClick={() => router.back()} className="mb-6 inline-flex items-center text-[#39D5FF]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </button>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-lg border-y-2 bg-[#2a5c40] text-[#39D5FF] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.map((item) => (
                <div key={item.id} className="mb-2 flex items-center justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-4 text-xl font-bold">
                Total: R$ {totalPrice.toFixed(2)}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-y-2 bg-[#2a5c40] text-[#39D5FF] shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Informações de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" required className="bg-[#1b402c] text-[#39D5FF]" />
                </div>
                <div>
                  <Label htmlFor="address">Endereço</Label>
                  <Input id="address" required className="bg-[#1b402c] text-[#39D5FF]" />
                </div>
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" required className="bg-[#1b402c] text-[#39D5FF]" />
                </div>
                <div>
                  <Label htmlFor="postalCode">CEP</Label>
                  <Input id="postalCode" required className="bg-[#1b402c] text-[#39D5FF]" />
                </div>
                <Link
                  href="/pagamento"
                  className="m-0 flex w-full items-center justify-center rounded-2xl bg-[#39D5FF] text-[#080F1A] shadow-lg transition duration-300 hover:bg-[#2D9BC7] hover:text-[#FFFFFF]"
                >
                  Finalizar Compra
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
