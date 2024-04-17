import Link from 'next/link';

export default function Storymaker() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo-container">
          <img src="/midia/vmv.png" alt="Logo MOTUS" width="100" height="100" />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link href="/sobre-nos">Sobre Nós</Link>
          </li>
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/clientes">Clientes</Link>
          </li>
          <li className="nav-item">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <h1>storymaker</h1>


      <div className="textdiv">
        <p>Oferecemos serviços de Story Maker para eventos, proporcionando uma experiência única e envolvente. Capturamos momentos especiais em tempo real e os transformamos em conteúdos irresistíveis. Garantimos que cada história seja uma obra-prima, editada e publicada com qualidade excepcional. Fornecemos vídeos curtos de DJs, performances e interações do público, selecionados para destacar a energia e a emoção da ocasião. Destacamos a atração principal do evento, criando expectativa e interesse. Compartilhamos histórias autênticas do público, conectando sua marca de forma significativa, refletindo positivamente na percepção da sua marca.</p>
      </div>

      <div className="videos-container">

        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


      </div>

      <h1>REELS EM TEMPO REAL</h1>
      <div className="textdiv">
        <p>Oferecemos serviços de Story Maker para eventos, proporcionando uma experiência única e envolvente. Capturamos momentos especiais em tempo real e os transformamos em conteúdos irresistíveis. Garantimos que cada história seja uma obra-prima, editada e publicada com qualidade excepcional. Fornecemos vídeos curtos de DJs, performances e interações do público, selecionados para destacar a energia e a emoção da ocasião. Destacamos a atração principal do evento, criando expectativa e interesse. Compartilhamos histórias autênticas do público, conectando sua marca de forma significativa, refletindo positivamente na percepção da sua marca.</p>
      </div>

      <div className="videos-container">

        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


      </div>


      <h1>AFTER MOVIE</h1>
      <div className="textdiv">
        <p>Oferecemos serviços de Story Maker para eventos, proporcionando uma experiência única e envolvente. Capturamos momentos especiais em tempo real e os transformamos em conteúdos irresistíveis. Garantimos que cada história seja uma obra-prima, editada e publicada com qualidade excepcional. Fornecemos vídeos curtos de DJs, performances e interações do público, selecionados para destacar a energia e a emoção da ocasião. Destacamos a atração principal do evento, criando expectativa e interesse. Compartilhamos histórias autênticas do público, conectando sua marca de forma significativa, refletindo positivamente na percepção da sua marca.</p>
      </div>

      <div className="videos-container">

        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


        <div className="video-wrapper">
          <video className="video" controls>
            <source src="/midia/Bloblosom/Depoimento-Matheus.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-caption">
            Texto de legenda ou descrição do vídeo aqui.
          </div>
        </div>


      </div>



    </div>
  );
}
