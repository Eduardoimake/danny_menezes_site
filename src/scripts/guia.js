import "../styles/guia.css";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const anotacoes = [
  {
    alvo: "#inicio",
    titulo: "Apresentação",
    texto:
      "A primeira seção apresenta a Danny, reforça a especialidade profissional e oferece um acesso rápido ao agendamento pelo WhatsApp."
  },
  {
    alvo: "#especialista",
    titulo: "Sobre a Danny",
    texto:
      "Esta área apresenta a profissional, a experiência e o cuidado personalizado dedicado a cada atendimento."
  },
  {
    alvo: "#especialidades",
    titulo: "Especialidades",
    texto:
      "Aqui as clientes entendem os principais serviços: alisamentos, cortes com visagismo e colorometria."
  },
  {
    alvo: "#experiencia",
    titulo: "Experiência no salão",
    texto:
      "Esta seção mostra o ambiente e ajuda a cliente a imaginar a experiência de atendimento antes de entrar em contato."
  },
  {
    alvo: "#contato",
    titulo: "Contato e localização",
    texto:
      "A parte final concentra os caminhos para agendar pelo WhatsApp, visitar o Instagram e localizar o atendimento em Xerém e Mauá."
  }
];

const guia = document.createElement("aside");
guia.className = "guia-projeto";
guia.setAttribute("aria-label", "Guia de apresentação do site");
guia.innerHTML = `
  <button
    class="guia-projeto__toggle"
    type="button"
    aria-expanded="false"
    aria-controls="guiaPainel"
  >
    <span aria-hidden="true">✦</span>
    Guia
  </button>

  <div
    class="guia-projeto__painel"
    id="guiaPainel"
    hidden
  >
    <div class="guia-projeto__topo">
      <div>
        <span class="guia-projeto__eyebrow">Modo apresentação</span>
        <h2>Guia do projeto</h2>
      </div>

      <button
        class="guia-projeto__fechar"
        type="button"
        aria-label="Fechar guia de apresentação"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>

    <p class="guia-projeto__texto">
      Use este painel ao apresentar o site. Ele explica cada seção e ajuda
      a mostrar como a presença digital facilita o contato com novas clientes.
    </p>

    <nav aria-label="Seções explicadas no guia">
      <ul class="guia-projeto__anotacoes"></ul>
    </nav>

    <div class="guia-projeto__detalhes">
      <details>
        <summary>Por que o site carrega rápido?</summary>
        <p>
          O projeto utiliza Vite, JavaScript puro, CSS puro, fontes locais e
          uma estrutura estática leve. Isso reduz dependências desnecessárias
          e favorece uma navegação mais direta.
        </p>
      </details>

      <details>
        <summary>Como funciona no celular?</summary>
        <p>
          O layout se adapta a telas menores, o menu fica acessível por toque e
          os botões de contato continuam destacados para facilitar o agendamento.
        </p>
      </details>

      <details>
        <summary>Como o Google entende o site?</summary>
        <p>
          O site informa o nome do negócio, serviços, endereço, regiões atendidas
          e Instagram por meio de SEO local e dados estruturados do tipo HairSalon.
        </p>
      </details>

      <details>
        <summary>Como o link aparece ao compartilhar?</summary>
        <p>
          Com domínio e imagem social configurados, o compartilhamento pode exibir
          título, descrição e imagem no WhatsApp, Instagram, Facebook e outras redes.
        </p>
      </details>

      <details>
        <summary>O que falta antes de publicar?</summary>
        <p>
          Definir o nome do projeto no Cloudflare Pages, trocar o domínio provisório,
          criar a imagem social 1200 × 630 e confirmar os horários de atendimento.
        </p>
      </details>
    </div>

    <p class="guia-projeto__rodape">
      Guia ativo somente porque a URL contém <code>?guia=1</code>.
    </p>
  </div>
`;

document.body.append(guia);

const toggle = guia.querySelector(".guia-projeto__toggle");
const fechar = guia.querySelector(".guia-projeto__fechar");
const painel = guia.querySelector(".guia-projeto__painel");
const lista = guia.querySelector(".guia-projeto__anotacoes");
const notasCriadas = [];

function fecharGuia({ devolverFoco = false } = {}) {
  if (!painel || !toggle) {
    return;
  }

  painel.hidden = true;
  toggle.setAttribute("aria-expanded", "false");

  if (devolverFoco) {
    toggle.focus();
  }
}

function abrirGuia() {
  if (!painel || !toggle) {
    return;
  }

  painel.hidden = false;
  toggle.setAttribute("aria-expanded", "true");
}

function alternarGuia() {
  const aberto = toggle?.getAttribute("aria-expanded") === "true";

  if (aberto) {
    fecharGuia();
    return;
  }

  abrirGuia();
}

function esconderNotasExceto(notaAtual) {
  notasCriadas.forEach((nota) => {
    if (nota !== notaAtual) {
      nota.hidden = true;
    }
  });
}

function rolarParaSecao(secao, nota) {
  if (!secao) {
    return;
  }

  esconderNotasExceto(nota);

  if (nota) {
    nota.hidden = false;
  }

  secao.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });

  fecharGuia();

  window.setTimeout(
    () => {
      if (!nota) {
        return;
      }

      nota.setAttribute("tabindex", "-1");
      nota.focus({
        preventScroll: true
      });
    },
    prefersReducedMotion ? 0 : 550
  );
}

function criarAnotacoes() {
  if (!lista) {
    return;
  }

  anotacoes.forEach((anotacao) => {
    const secao = document.querySelector(anotacao.alvo);

    if (!secao) {
      return;
    }

    const item = document.createElement("li");
    const botao = document.createElement("button");
    const nota = document.createElement("p");

    botao.type = "button";
    botao.className = "guia-projeto__link";
    botao.textContent = anotacao.titulo;
    botao.setAttribute(
      "aria-label",
      `Mostrar explicação da seção: ${anotacao.titulo}`
    );

    nota.className = "guia-projeto__nota";
    nota.textContent = anotacao.texto;
    nota.hidden = true;

    botao.addEventListener("click", () => {
      rolarParaSecao(secao, nota);
    });

    item.append(botao);
    lista.append(item);
    secao.append(nota);
    notasCriadas.push(nota);
  });
}

function configurarEventos() {
  toggle?.addEventListener("click", alternarGuia);

  fechar?.addEventListener("click", () => {
    fecharGuia({
      devolverFoco: true
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      fecharGuia({
        devolverFoco: true
      });
    }
  });
}

criarAnotacoes();
configurarEventos();