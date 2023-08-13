import Paragrafo from "components/Paragrafo";

export default function SpaceToday() {
  const titulo = ['Space Today'];
  const paragrafo = ['O Space Today, liderado por Sérgio Sacani, é uma plataforma apaixonante que explora e compartilha informações sobre o universo. Por meio de vídeos, artigos e podcasts, abrange tópicos como exploração espacial, notícias astronômicas e descobertas científicas. Com uma abordagem acessível, busca inspirar o interesse pela astronomia e desvendar os mistérios do cosmos.','Sérgio Sacani é um astrônomo e divulgador científico que fundou o Space Today. Sua paixão pela astronomia se traduz em uma abordagem carismática e educativa. Além de administrar o Space Today, Sacani é palestrante e autor, dedicado a tornar a ciência astronômica compreensível e emocionante para pessoas de todas as idades, desempenhando um papel influente na divulgação científica.'];
  return (
    <>
      <Paragrafo titulos={titulo} paragrafos={paragrafo} />
    </>
  );
}
