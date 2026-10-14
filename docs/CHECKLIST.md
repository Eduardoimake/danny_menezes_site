# Checklist de validação

## Desenvolvimento local

- [ ] O comando `npm ci` termina sem erro.
- [ ] O comando `npm run dev` inicia sem erro.
- [ ] O site abre no endereço informado pelo Vite.
- [ ] O preloader desaparece.
- [ ] O menu mobile abre e fecha.
- [ ] O menu fecha com a tecla `Escape`.
- [ ] Os links internos levam às seções corretas.
- [ ] O ano do rodapé é preenchido automaticamente.
- [ ] A barra de progresso acompanha a rolagem.
- [ ] Os elementos com a classe `reveal` aparecem ao rolar.
- [ ] O parallax funciona apenas com ponteiro preciso.
- [ ] O site funciona com `prefers-reduced-motion: reduce`.

## Guia de apresentação

- [ ] O guia aparece apenas com `?guia=1`.
- [ ] O guia não aparece sem `?guia=1`.
- [ ] O botão do guia abre e fecha o painel.
- [ ] O painel fecha com `Escape`.
- [ ] Os links do guia rolam até as seções corretas.

## Links e contatos

- [ ] Os botões de WhatsApp abrem o destino correto.
- [ ] O Instagram abre o perfil correto.
- [ ] O link “Como chegar” abre o mapa correto.
- [ ] O botão flutuante de WhatsApp funciona.
- [ ] Nenhum link externo está sem `rel="noopener noreferrer"`.

## Build e preview

- [ ] O comando `npm run build` termina sem erro.
- [ ] O comando `npm run preview` inicia sem erro.
- [ ] A versão compilada abre corretamente.
- [ ] O guia funciona na versão compilada com `?guia=1`.
- [ ] O console do navegador não apresenta erros.
- [ ] Não há requisições de recursos com erro.
- [ ] Não há imagens quebradas, exceto a imagem pendente da seção Experiência.

## SEO e publicação

- [ ] O domínio final foi confirmado.
- [ ] O comando de SEO foi executado com o domínio real.
- [ ] O `index.html` contém a URL correta no canonical.
- [ ] O `index.html` contém a URL correta em `og:url`.
- [ ] O `index.html` contém a URL correta da imagem social.
- [ ] O `robots.txt` contém a URL correta do sitemap.
- [ ] O `sitemap.xml` contém a URL correta do site.
- [ ] O JSON-LD contém a URL correta.
- [ ] A imagem social existe em `public/images/`.
- [ ] A imagem da seção Experiência foi definida.
- [ ] Os dados de endereço, telefone e Instagram foram confirmados.

## Antes do commit

- [ ] `git status` foi revisado.
- [ ] Nenhum arquivo sensível foi incluído.
- [ ] Nenhum arquivo de `node_modules/` foi incluído.
- [ ] Nenhum arquivo de `dist/` foi incluído, se `dist/` estiver ignorado.
- [ ] A mensagem de commit descreve a alteração real.