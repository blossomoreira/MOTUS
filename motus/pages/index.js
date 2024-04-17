import Link from 'next/link';

export default function Home() {
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

      <div className="textdiv">
        <p>A Motus vai além da simples gravação; estamos focados em capturar e transmitir a emoção do momento. Imagine sua marca sendo o epicentro de uma experiência emocionante, onde cada espectador se sente parte integrante do evento, mesmo à distância. Nossa missão é proporcionar uma conexão profunda, onde as emoções transbordam da tela, criando engajamento e notoriedade para sua marca, como destacado no depoimento inspirador de Deivi, CEO do coletivo Fuego Dancehall e Trevoo, em nosso slide 9. Não deixe escapar nenhum instante! Garanta agora que sua marca se destaque com posts que vão além do comum, transformando-se em verdadeiras obras de arte digital que capturam e conectam. Permita-nos levar sua marca ao próximo nível da experiência visual e emocional.</p>
      </div>

      <div className="center-links">
        <span className="link-wrapper">
          <Link href="/storymaker">Story Maker</Link>
        </span>
        <span className="link-wrapper">
          <Link href="/design">Design</Link>
        </span>
        <span className="link-wrapper">
          <Link href="/styling">Styling</Link>
        </span>
      </div>
    </div>
  );
}
