# Pendências antes da publicação definitiva

## Domínio

- [ ] Confirmar o domínio final do site.
- [ ] Executar:

```powershell
npm run seo -- [https://DOMINIO-REAL/](https://DOMINIO-REAL/)
```

- [ ] Confirmar que `index.html`, `robots.txt` e `sitemap.xml` foram atualizados.

## Imagens

- [ ] Definir a imagem da seção Experiência.
- [ ] Substituir o `src=""` da imagem pendente em `index.html`.
- [ ] Confirmar que todas as imagens usadas existem em `public/images/`.
- [ ] Criar a imagem social no tamanho recomendado de 1200 × 630 pixels.
- [ ] Executar o comando de SEO com a imagem social, se ela for diferente da padrão.

## Conteúdo comercial

- [ ] Confirmar o número de WhatsApp.
- [ ] Confirmar o perfil do Instagram.
- [ ] Confirmar o endereço comercial.
- [ ] Confirmar as regiões atendidas.
- [ ] Confirmar horários de atendimento, se forem incluídos no JSON-LD.
- [ ] Não incluir informações não confirmadas nos dados estruturados.

## Qualidade

- [ ] Testar o site em celular.
- [ ] Testar o site em conexão móvel.
- [ ] Testar o menu mobile.
- [ ] Testar o guia com `?guia=1`.
- [ ] Verificar o console do navegador.
- [ ] Executar `npm run build`.
- [ ] Testar `npm run preview`.

## Publicação

- [ ] Revisar `git status`.
- [ ] Criar commit descritivo.
- [ ] Enviar as alterações ao repositório.
- [ ] Confirmar que o Cloudflare Pages usa `npm run build`.
- [ ] Confirmar que o diretório de saída é `dist`.
- [ ] Confirmar a versão de Node.js compatível com o projeto.