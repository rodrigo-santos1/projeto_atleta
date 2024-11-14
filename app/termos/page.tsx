import Image from "next/image";
import Link from "next/link";

const Uso = () => {
  return (
    <>
      <div className="min-h-screen bg-black p-10 text-white">
        <div className="container mx-auto">
          <div className="flex h-40 flex-col items-center">
            <Image
              src="/logooficial.png"
              alt="Logo Oficial"
              width={160}
              height={160}
            />
          </div>
          {/* Título */}
          <h1 className="mb-8 py-6 text-center text-4xl font-bold text-[#39d5ff]">
            Termos de Uso
          </h1>

          <div>
            <header>
              <h1>Termos de Uso</h1>
            </header>
            <main>
              <section>
                <h2>
                  TERMOS DE USO DA FISIA PARA ATLETADIGITAL.COM E APP DA ATLETA
                  DIGITAL
                </h2>
                <p>Data da última revisão: [Data]</p>

                <h3>1. Aceitação dos Termos</h3>
                <p>
                  Bem-vindo(a) ao Atleta Digital! Ao acessar e usar nosso site,
                  você concorda com estes Termos de Uso. Se você não concorda
                  com qualquer parte destes termos, por favor, não use nosso
                  site.
                </p>

                <h3>2. Alterações nos Termos</h3>
                <p>
                  Reservamo-nos o direito de modificar estes Termos de Uso a
                  qualquer momento. Quaisquer alterações serão publicadas nesta
                  página e a data da última revisão será atualizada. É sua
                  responsabilidade revisar estes termos periodicamente.
                </p>

                <h3>3. Uso do Site</h3>
                <p>
                  Você concorda em usar o site apenas para fins legais e de
                  acordo com estes Termos de Uso. Você não deve usar o site de
                  qualquer maneira que possa danificar, desativar, sobrecarregar
                  ou prejudicar o site ou interferir no uso de qualquer outra
                  parte do site.
                </p>

                <h3>4. Propriedade Intelectual</h3>
                <p>
                  Todo o conteúdo do site, incluindo textos, gráficos,
                  logotipos, ícones, imagens, clipes de áudio, downloads
                  digitais e software, é de propriedade do Atleta Digital ou de
                  seus fornecedores de conteúdo e é protegido por leis de
                  direitos autorais.
                </p>

                <h3>5. Limitação de Responsabilidade</h3>
                <p>
                  O Atleta Digital não será responsável por quaisquer danos
                  diretos, indiretos, incidentais, consequenciais ou punitivos
                  decorrentes do uso ou da incapacidade de usar o site.
                </p>

                <h3>6. Lei Aplicável</h3>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República
                  Federativa do Brasil. Qualquer disputa decorrente ou
                  relacionada a estes termos será resolvida nos tribunais
                  competentes do Brasil.
                </p>

                <h3>7. Contato</h3>
                <p>
                  Se você tiver alguma dúvida sobre estes Termos de Uso, entre
                  em contato conosco através do e-mail:
                  contato@atletadigital.com.br.
                </p>
              </section>
            </main>
          </div>
          {/* Divisória */}
          <div className="my-8 border-t border-gray-600"></div>
          <div className="mt-10 flex justify-center space-x-4">
            <Link href="/" className="menu-li px-6 py-2">
              Voltar para a loja
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uso;