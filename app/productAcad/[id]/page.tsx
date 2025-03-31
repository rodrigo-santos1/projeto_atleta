"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  User,
  Home,
  ArrowLeft,
  Plus,
  Minus,
  Star,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Product, products } from "@/data/data";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState<number>(0);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === params.id);
      setProduct(foundProduct);
      setIsLoading(false);
    };

    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    const cart: { id: string; quantity: number }[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    if (product) {
      const cart: { id: string; quantity: number }[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.push({ ...product, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    }
  };

  const toggleFavorite = () => {
    setFavoritesCount((prev) => prev + 1);
  };

  const goToCart = () => {
    router.push("/cart");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080F1A] text-[#39D5FF]">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080F1A] text-[#39D5FF]">
        <Card className="p-6">
          <CardContent>
            <p className="text-xl">Produto não encontrado</p>
            <Link href="/" className="mt-4 inline-flex items-center text-[#39D5FF] transition duration-300 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080F1A] text-[#39D5FF]">
      <div className="container mx-auto p-4">
        <header className="mb-6 flex items-center justify-between">
          <Link href="/" className="flex items-center text-3xl font-bold">
            <Home className="mr-2 h-6 w-6 text-[#39D5FF]" />
            <span className="text-white">Academia</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button onClick={goToCart} variant="outline" className="m-0 mb-2 flex items-center justify-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho {cartCount > 0 && `(${cartCount})`}
            </Button>
            <Button onClick={toggleFavorite} variant="outline" className="m-0 mb-2 flex items-center justify-center">
              <Heart className="mr-2 h-4 w-4" />
              Favoritos {favoritesCount > 0 && `(${favoritesCount})`}
            </Button>
            <Button variant="outline" className="m-0 mb-2 flex items-center justify-center">
              <User className="mr-2 h-4 w-4" />
              Conta
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
}
