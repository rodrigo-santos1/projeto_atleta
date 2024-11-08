import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="w-96 rounded-3xl bg-gray-900 p-8">
          <div className="flex flex-col items-center">
            <Image src="/logooficial.png" alt="" width={150} height={150} />
            <h2 className="mb-3 mt-4 text-center text-3xl text-[#39d5ff]">
              Faça seu login
            </h2>
          </div>
          <form className="bg-gray-900">
            <div className="mb-4">
              <input
                className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder=" Usuário"
                type="text"
                id="username"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full rounded-3xl bg-gray-500 p-2 font-sans text-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Senha"
                type="password"
                id="password"
                required
              />
              <Link className="block text-[#39d5ff]" href={"/redefinir"}>
                Esqueceu sua senha?
              </Link>
            </div>
            <div>
              <Link className="menu-li w-full py-2" type="submit" href={"/"}>
                Entrar
              </Link>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-400">
            Não tem uma conta?{" "}
            <Link href={"/cadastro"} className="text-[#39D5FF] hover:underline">
              Registrar-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
