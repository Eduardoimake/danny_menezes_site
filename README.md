# Site Danny Menezes

Site institucional estático de Danny Menezes.

O projeto utiliza:

- Vite.
- JavaScript vanilla.
- CSS puro.
- Fontes locais via @fontsource.
- Publicação estática no Cloudflare Pages.

## 1. Fonte principal do projeto

O arquivo principal do site é:

```text
index.html
```

Esse arquivo contém o HTML usado no desenvolvimento e na compilação.

A entrada de JavaScript é:

```text
src/main.js
```

O arquivo home.html é uma referência histórica da versão original.

Não execute ferramentas para reconstruir o index.html a partir do home.html.

O script tools/gerar-index.mjs foi desativado para impedir que alterações
atuais sejam sobrescritas.

## 2. Arquivos ativos

```text
index.html

package.json
package-lock.json
vite.config.js
.gitignore
.nvmrc

src/main.js

src/scripts/interactions.js
src/scripts/guia.js

src/styles/base.css
src/styles/layout.css
src/styles/components.css
src/styles/animations.css
src/styles/responsive.css
src/styles/guia.css

public/_headers
public/robots.txt
public/sitemap.xml
public/site.webmanifest
public/images/

tools/atualizar-seo.mjs
```

## 3. Arquivos históricos e arquivos gerados

### Referências históricas

```text
home.html

_origem/estilo-original.css
_origem/script-original.js
_origem/script-original.backup.js
```

Esses arquivos não são a fonte principal de manutenção do site.

Não apague as referências históricas durante a primeira etapa de organização.

### Gerador desativado

```text
tools/gerar-index.mjs
```

Esse arquivo não reconstrói mais o site.

### Dependências instaladas

```text
node_modules/
```

Não edite os arquivos dessa pasta.

### Resultado da compilação

```text
dist/
```

Não edite os arquivos dessa pasta.

Depois de alterar os arquivos de origem, gere novamente o dist com:

```powershell
npm run build
```

## 4. Requisitos

Utilize uma versão de Node.js compatível com o Vite instalado.

Consulte também a versão indicada no arquivo:

```text
.nvmrc
```

Verifique as ferramentas instaladas:

```powershell
node --version
npm --version
git --version
```

O Git é necessário para versionamento e publicação via repositório.

## 5. Instalação das dependências

Abra o terminal na pasta que contém o package.json.

Para instalar usando o package-lock.json existente:

```powershell
npm ci
```

Se o npm informar que package.json e package-lock.json não estão sincronizados:

```powershell
npm install
```

Não altere o package-lock.json manualmente.

## 6. Desenvolvimento local

Execute:

```powershell
npm run dev
```

Abra o endereço informado pelo Vite.

Com a configuração atual, a porta preferencial é 5173:

```text
http://localhost:5173/
```

Se essa porta estiver ocupada, utilize o endereço efetivamente exibido no terminal.

## 7. Guia de apresentação

O guia é carregado somente quando a URL contém:

```text
?guia=1
```

Exemplo local:

```text
http://localhost:5173/?guia=1
```

Sem esse parâmetro, o módulo do guia não é solicitado pelo main.js.

O guia deve permanecer separado das interações normais do site.

## 8. Organização do CSS

Os estilos principais são importados pelo src/main.js nesta ordem:

```text
base.css
layout.css
components.css
animations.css
responsive.css
```

O guia importa seu próprio arquivo:

```text
guia.css
```

Responsabilidades previstas:

- base.css: variáveis, normalização e estilos globais.
- layout.css: containers, grids e estrutura das seções.
- components.css: botões, cartões, navegação e componentes visuais.
- animations.css: animações e estados relacionados a movimento.
- responsive.css: adaptações para tamanhos de tela.
- guia.css: estilos exclusivos do guia de apresentação.

Antes de mover uma regra entre arquivos, verifique sua posição na cascata.

Não renomeie classes do HTML sem atualizar os seletores correspondentes.

## 9. Organização do JavaScript

### src/main.js

Responsável por:

- Importar as fontes.
- Importar o CSS principal.
- Carregar as interações do site.
- Carregar o guia quando solicitado pela URL.

### src/scripts/interactions.js

Responsável pelas interações normais do site:

- Ano do rodapé.
- Menu mobile.
- Preloader.
- Estado do cabeçalho.
- Progresso de rolagem.
- Reveal.
- Parallax.
- Cursor decorativo.
- Preferências de movimento.

### src/scripts/guia.js

Responsável pelo guia de apresentação.

Não carregue o guia permanentemente no site normal.

## 10. Atualização do domínio e do SEO

O domínio deve ser informado por comando.

Não é necessário editar manualmente o script de SEO.

Exemplo:

```powershell
npm run seo -- [https://DOMINIO-REAL/](https://DOMINIO-REAL/)
```

O atualizador modifica:

```text
index.html
public/robots.txt
public/sitemap.xml
```

No index.html, ele atualiza:

- Canonical.
- og:url.
- og:image.
- twitter:image.
- url e image do objeto HairSalon no JSON-LD.

O corpo do HTML permanece inalterado.

### Imagem social padrão

Se nenhum segundo argumento for informado, o script utiliza:

```text
images/danny-empresaria.jpg
```

### Imagem social personalizada

Exemplo:

```powershell
npm run seo -- [https://DOMINIO-REAL/](https://DOMINIO-REAL/) images/danny-og-1200x630.jpg
```

O arquivo da imagem precisa existir em:

```text
public/images/danny-og-1200x630.jpg
```

O atualizador não gera imagens e não confirma a existência do arquivo.

### Ajuda do comando

```powershell
npm run seo -- --help
```

### Limites do atualizador

O script foi preparado para:

- Site hospedado na raiz do domínio.
- Um canonical.
- Uma meta og:url.
- Uma meta og:image.
- Uma meta twitter:image.
- Um objeto HairSalon.
- Um sitemap com uma URL.

Se essas condições não forem atendidas, ele interrompe a atualização.

## 11. Compilação de produção

Execute:

```powershell
npm run build
```

O resultado é gerado em:

```text
dist/
```

Não publique a pasta src ou a raiz inteira como se fossem a saída compilada.

## 12. Teste da versão compilada

Execute:

```powershell
npm run preview
```

Abra o endereço informado pelo terminal.

Com a configuração atual, a porta preferencial é 4173:

```text
http://localhost:4173/
```

Teste também o guia:

```text
http://localhost:4173/?guia=1
```

## 13. Publicação via Cloudflare Pages e Git

Configure o projeto de publicação com:

```text
Comando de build: npm run build
Diretório de saída: dist
```

A raiz de build deve ser a pasta que contém o package.json.

Se o repositório contém o projeto dentro de uma subpasta, configure essa
subpasta como raiz de build.

Utilize uma versão de Node.js compatível com as dependências instaladas.

Antes de publicar:

```powershell
npm run build
```

Depois de validar a versão compilada, envie as alterações ao repositório:

```powershell
git status
git add .
git commit -m "chore: organizar fluxo do site Danny Menezes"
git push
```

Esses comandos pressupõem que o repositório e o remoto já estão configurados.

Não use git add . sem revisar os arquivos apresentados por git status.

## 14. Publicação direta com Wrangler

O destino configurado nos scripts é:

```text
danny-menezes
```

Confirme que esse é o projeto correto antes de publicar.

### Compilar e publicar em um comando

```powershell
npm run publish:wrangler
```

### Compilar e publicar separadamente

```powershell
npm run build
npm run deploy:wrangler
```

O comando deploy:wrangler publica o dist existente.

Se o código foi alterado depois do último build, compile novamente antes de publicar.

## 15. Checklist de validação

- [ ] As dependências foram instaladas sem erro.
- [ ] O site abre com npm run dev.
- [ ] O menu mobile abre e fecha.
- [ ] O menu fecha com Escape.
- [ ] Os links internos levam às seções corretas.
- [ ] Os botões de WhatsApp abrem o destino esperado.
- [ ] Os links de Instagram abrem o perfil esperado.
- [ ] O link de localização abre o destino esperado.
- [ ] O ano do rodapé é preenchido.
- [ ] O preloader desaparece.
- [ ] O progresso de rolagem funciona.
- [ ] Os elementos reveal aparecem.
- [ ] O site funciona com redução de movimento ativada.
- [ ] O guia aparece com ?guia=1.
- [ ] O guia não aparece sem ?guia=1.
- [ ] Não há erros no console.
- [ ] Não há solicitações de recursos com erro.
- [ ] npm run build termina sem erro.
- [ ] A versão compilada funciona com npm run preview.

## 16. Pendências antes da publicação definitiva

- [ ] Confirmar o domínio de produção.
- [ ] Executar o atualizador de SEO com o domínio real.
- [ ] Confirmar que as imagens referenciadas existem.
- [ ] Resolver a imagem pendente da seção Experiência.
- [ ] Confirmar telefone e perfil do Instagram.
- [ ] Confirmar o endereço comercial.
- [ ] Confirmar os dados usados no JSON-LD.
- [ ] Definir e disponibilizar a imagem social.
- [ ] Validar a versão final em celular.

Não invente horários, endereços adicionais ou informações comerciais
para preencher dados estruturados.

## 17. Segurança e privacidade

Não coloque senhas, tokens, chaves de API ou dados privados em:

```text
index.html
src/
public/
```

Não publique imagens de clientes sem autorização.

Revise os arquivos antes de enviar alterações ao repositório.

## 18. Regra de manutenção

Para alterar conteúdo:

```text
index.html
```

Para alterar estilos:

```text
src/styles/
```

Para alterar interações:

```text
src/scripts/
```

Para atualizar o domínio:

```powershell
npm run seo -- [https://DOMINIO-REAL/](https://DOMINIO-REAL/)
```

Para gerar a versão publicada:

```powershell
npm run build
```

Nunca reconstrua o index.html a partir do home.html no fluxo normal de manutenção.