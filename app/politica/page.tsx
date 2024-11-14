import Image from "next/image";
import Link from "next/link";

const Privacidade = () => {
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
            Política de Privacidade
          </h1>

          <div className="border-t border-gray-600 px-2">
            <div className="flex flex-col items-center py-4">
              <div className="my-4 h-6 w-32"></div>
              <p className="text-lg leading-relaxed">
                <strong>Política de Privacidade da Atleta Digital:</strong> Na
                Atleta Digital, sua privacidade e a segurança de seus dados
                pessoais são muito importantes para nós. Esta Política de
                Privacidade tem como objetivo esclarecer como coletamos, usamos,
                protegemos e compartilhamos suas informações pessoais quando
                você utiliza nosso site e serviços. Ao acessar e utilizar nossa
                loja online, você concorda com os termos descritos nesta
                Política de Privacidade. Se você tiver alguma dúvida sobre
                nossas práticas de privacidade ou como tratamos seus dados,
                entre em contato conosco através de nosso canal de atendimento.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong>Quais Informações Coletamos:</strong> Informações que
                Coletamos Coletamos informações pessoais que você nos fornece
                diretamente, como quando você realiza uma compra, cria uma conta
                ou interage com nosso atendimento ao cliente. As informações que
                coletamos incluem, mas não se limitam a: Dados Pessoais: Nome,
                e-mail, endereço de entrega, CPF, telefone; Informações de
                Pagamento: Dados de cartão de crédito ou informações bancárias,
                quando aplicável; Informações de Navegação: Dados sobre sua
                interação com nosso site, como páginas visitadas, tempo de
                navegação e cliques (coletados através de cookies e tecnologias
                semelhantes); Dados de Localização: Quando você acessa nosso
                site via dispositivos móveis, podemos coletar dados sobre sua
                localização para facilitar a entrega de produtos.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong> Como Usamos Suas Informações:</strong> As informações
                que coletamos de você são usadas para proporcionar uma
                experiência de compra personalizada e eficiente, bem como para
                os seguintes fins: Processamento de Pedidos: Utilizamos seus
                dados para processar suas compras, enviar produtos, emitir notas
                fiscais e prestar o suporte necessário; Melhoria da Experiência
                de Compra: Para personalizar seu site e enviar promoções ou
                produtos recomendados com base em suas preferências;
                Comunicação: Para enviar atualizações sobre seu pedido, ofertas
                exclusivas ou informações relacionadas à sua conta; Cumprimento
                de Obrigações Legais: Para atender a requisitos legais,
                regulatórios e fiscais.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong> Como Protegemos Seus Dados:</strong> A segurança de
                seus dados pessoais é nossa prioridade. Implementamos medidas de
                segurança técnicas e administrativas para proteger suas
                informações contra acessos não autorizados, alteração,
                divulgação ou destruição. Entre as práticas que utilizamos para
                proteger seus dados, estão: Criptografia de dados de pagamento
                durante as transações; Uso de firewalls e sistemas de
                monitoramento para proteger nosso site; Restrição de acesso aos
                dados pessoais apenas a funcionários autorizados; Contudo, é
                importante destacar que nenhum método de transmissão de dados
                pela internet ou de armazenamento eletrônico é 100% seguro.
                Embora nos esforcemos para proteger suas informações, não
                podemos garantir segurança absoluta.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong>Compartilhamento de Informações:</strong> Em alguns
                casos, podemos compartilhar suas informações pessoais com
                terceiros, sempre respeitando a legislação vigente e suas
                preferências de privacidade. Compartilhamos seus dados com:
                Parceiros de Logística: Para realizar a entrega de produtos
                adquiridos; Provedores de Pagamento: Para processar transações
                financeiras e verificar pagamentos; Prestadores de Serviços:
                Como empresas de marketing ou ferramentas analíticas, para
                melhorar a experiência do usuário e oferecer promoções
                personalizadas. Não vendemos, trocamos ou compartilhamos suas
                informações pessoais com terceiros para fins comerciais sem o
                seu consentimento expresso, exceto quando necessário para o
                cumprimento de nossas obrigações legais ou contratuais.
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong>Cookies e Tecnologias Semelhantes:</strong> Nosso site
                utiliza cookies e tecnologias semelhantes para melhorar a
                experiência de navegação e para personalizar o conteúdo e os
                anúncios. Cookies são pequenos arquivos de texto que armazenamos
                no seu navegador para lembrarmos de suas preferências e melhorar
                a funcionalidade do site. Você pode desativar os cookies em seu
                navegador a qualquer momento, mas, se fizer isso, algumas
                funcionalidades do site podem não funcionar corretamente. Para
                mais informações sobre como usamos cookies, consulte nossa
                [Política de Cookies].
              </p>
              <p className="py-4 text-lg leading-relaxed">
                <strong>Direitos do Usuário:</strong>De acordo com a Lei Geral
                de Proteção de Dados (LGPD), você tem os seguintes direitos em
                relação às suas informações pessoais: Acesso: Você pode
                solicitar acesso às informações pessoais que temos sobre você;
                Correção: Caso seus dados estejam incorretos ou desatualizados,
                você pode solicitar a correção; Exclusão: Você pode solicitar a
                exclusão de seus dados pessoais, salvo em casos de obrigações
                legais; Portabilidade: Você pode solicitar que seus dados sejam
                transferidos para outro fornecedor de serviços; Revogação do
                Consentimento: Você pode retirar seu consentimento para o
                processamento de seus dados a qualquer momento. Para exercer
                seus direitos, entre em contato conosco através de nosso [canal
                de atendimento].
              </p>
            </div>
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

export default Privacidade;
