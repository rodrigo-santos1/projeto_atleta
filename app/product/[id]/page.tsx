"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product, products } from "@/data/data";
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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === params.id);
      setProduct(foundProduct);
      setIsLoading(false);
    };

    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
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
            <Link
              href="/"
              className="mt-4 inline-flex items-center text-[#39D5FF] transition duration-300 hover:text-white"
            >
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
            <span className="text-white">Futebol</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button
              onClick={goToCart}
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrinho {cartCount > 0 && `(${cartCount})`}
            </Button>
            <Button
              variant="outline"
              className="m-0 mb-2 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#2a5c40] pl-3 pr-3 text-[#39D5FF] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
            >
              <Heart className="mr-2 h-4 w-4" />
              Favoritos {favoritesCount > 0 && `(${favoritesCount})`}
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
          onClick={() => window.history.back()}
          className="mb-6 inline-flex items-center text-[#39D5FF] transition duration-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para produtos
        </button>

        <Card className="rounded-lg border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:shadow-[#39d4ff2f]">
          <CardContent className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    objectFit="cover"
                    className="mb-4 h-auto w-full rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
                <div className="mb-4 flex items-center">
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 text-[#39D5FF]" />
                  <span className="ml-2 text-sm">(4.0) 120 avaliações</span>
                </div>
                <p className="mb-4 text-2xl font-bold">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="mb-6">{product.description}</p>
                <div className="mb-4">
                  <label className="mb-2 block">Categoria</label>
                  <p className="text-lg">{product.category}</p>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block">Subcategoria</label>
                  <p className="text-lg">{product.subcategory}</p>
                </div>
                <div className="mb-6 flex items-center">
                  <Button
                    onClick={decreaseQuantity}
                    variant="outline"
                    className="rounded-full border-[#39D5FF] bg-[#2a5c40] p-2 text-[#39D5FF] transition duration-300 hover:bg-[#2D9BC7] hover:text-[#FFFFFF]"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 text-xl">{quantity}</span>
                  <Button
                    onClick={increaseQuantity}
                    variant="outline"
                    className="rounded-full border-[#39D5FF] bg-[#2a5c40] p-2 text-[#39D5FF] transition duration-300 hover:bg-[#2D9BC7] hover:text-[#FFFFFF]"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mb-4">
                  <label className="mb-2 block">Calcular Frete:</label>
                  <div className="mb-4 flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Digite seu CEP"
                      className="flex-grow rounded-2xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <Button className="m-0 flex items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#39D5FF] pl-3 pr-3 text-[#080F1A] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]">
                      Calcular
                    </Button>
                  </div>
                  <Button
                    onClick={addToCart}
                    className="m-0 flex h-10 w-full items-center justify-center rounded-2xl border-y-2 border-transparent bg-[#39D5FF] pl-3 pr-3 text-[#080F1A] shadow-lg transition duration-300 hover:border-[#39D5FF] hover:bg-[#2D9BC7] hover:text-[#FFFFFF] hover:shadow-[#39d4ff2f]"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-8">
          <Card className="rounded-lg border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:shadow-[#39d4ff2f]">
            <CardHeader>
              <CardTitle>Detalhes do Produto</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-inside list-disc space-y-2">
                <li>Categoria: {product.category}</li>
                <li>Subcategoria: {product.subcategory}</li>
                <li>Material: 100% Poliéster</li>
                <li>Tecnologia de respirabilidade</li>
                <li>Ideal para prática esportiva</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-y-2 border-transparent bg-[#2a5c40] text-[#39D5FF] shadow-lg transition duration-300 hover:shadow-[#39d4ff2f]">
            <CardHeader>
              <CardTitle>Avaliações dos Clientes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 fill-[#39D5FF] text-[#39D5FF]" />
                  <Star className="h-5 w-5 text-[#39D5FF]" />
                  <span className="ml-2">João S. - 10/05/2023</span>
                </div>
                <p>
                  Ótimo produto! Material de qualidade e design incrível.
                  Recomendo!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
