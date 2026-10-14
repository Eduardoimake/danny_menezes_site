# Arquitetura do projeto Danny Menezes

## Fonte principal

O arquivo principal do site é:

```text
index.html
```

Ele contém o HTML usado no desenvolvimento local e na compilação de produção.

A entrada JavaScript é:

```text
src/main.js
```

## Fluxo de arquivos

```text
index.html
  └── src/main.js
        ├── fontes locais
        ├── src/styles/base.css
        ├── src/styles/layout.css
        ├── src/styles/components.css
        ├── src/styles/animations.css
        ├── src/styles/responsive.css
        ├── src/scripts/interactions.js
        └── src/scripts/guia.js
              └── src/styles/guia.css
```

## Responsabilidades

### index.html

- Estrutura das seções.
- Metadados de SEO.
- Open Graph.
- Twitter Card.
- Dados estruturados JSON-LD.
- Links para WhatsApp, Instagram e localização.

### src/main.js

- Importa fontes locais.
- Importa o CSS principal.
- Carrega as interações normais.
- Carrega o guia apenas quando a URL contém `?guia=1`.

### src/scripts/interactions.js

- Ano do rodapé.
- Preloader.
- Menu mobile.
- Cabeçalho fixo.
- Barra de progresso de rolagem.
- Animações reveal.
- Parallax.
- Cursor decorativo.
- Preferências de movimento.

### src/scripts/guia.js

- Painel do modo apresentação.
- Anotações por seção.
- Navegação explicativa.
- Estilos exclusivos em `src/styles/guia.css`.

## Arquivos históricos

Os arquivos abaixo devem ficar em `_legado/`:

```text
_legado/home.html
_legado/_origem/estilo-original.css
_legado/_origem/script-original.js
_legado/_origem/script-original.backup.js
_legado/src-style.css
```

Eles não fazem parte do fluxo de build atual.

Não use o `home.html` para reconstruir o `index.html`.

## Regras de manutenção

- Para alterar conteúdo: edite `index.html`.
- Para alterar estilos: edite os arquivos em `src/styles/`.
- Para alterar interações: edite os arquivos em `src/scripts/`.
- Para atualizar domínio e URLs de SEO: execute `npm run seo -- https://DOMINIO-REAL/`.
- Para gerar a versão publicável: execute `npm run build`.
- Para testar a versão compilada: execute `npm run preview`.

## Regras de segurança

- Não edite `node_modules/`.
- Não edite `dist/` manualmente.
- Não coloque senhas, tokens ou chaves de API no repositório.
- Não publique imagens de clientes sem autorização.
- Não invente dados comerciais para preencher JSON-LD.