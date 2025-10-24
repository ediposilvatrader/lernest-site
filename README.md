# Learnast – Landing v1.0

Landing page estática para iniciar presença digital e coletar interessados (via fallback `mailto:`).
Para captação real (sem abrir o e-mail do usuário), troque por um serviço de formulários (Formspree/Getform/Plunk/etc.).

## Estrutura
- `index.html` – Página principal (Tailwind via CDN, tudo pronto pra GitHub Pages)
- `script.js` – Lógica da landing (waitlist `mailto`)
- `favicon.ico` – Placeholder (pode trocar pela marca)
- `styles.css` – (Opcional) Não usado inicialmente (Tailwind CDN cobre o básico)

## Publicar no GitHub Pages
1. Crie um repositório **público** chamado `learnast-site`.
2. Faça upload destes arquivos (ou use `git`).
3. No repositório, vá em **Settings › Pages** e escolha **Deploy from branch**: branch `main`, pasta `/ (root)`.
4. Aguarde a URL do Pages (`https://SEU_USER.github.io/learnast-site`).

## Conectar o domínio (GoDaddy) ao GitHub Pages
> Dica: use `www.learnaste.com.br` como principal e redirecione o raiz (apex) para `www`.

### 1) Subdomínio `www`
- No repositório, crie um arquivo chamado `CNAME` com o conteúdo: `www.learnaste.com.br`
- No GoDaddy, em DNS, crie um **CNAME**:
  - Nome/Host: `www`
  - Aponta para: `SEU_USER.github.io`
  - TTL: padrão

### 2) Domínio raiz (apex) `learnaste.com.br`
No GoDaddy, crie/atualize **A records** (Host `@`) apontando para os IPs do GitHub Pages:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

> Depois, configure um redirecionamento no GoDaddy do domínio raiz para `https://www.learnaste.com.br` (opcional, mas recomendado).

**Obs.:** IPs do Pages raramente mudam, mas confirme na doc oficial do GitHub se necessário.

## Trocar captura de e-mail para um serviço de formulários
- **Formspree** (fácil): crie um projeto, pegue o `action` do formulário e substitua o `onsubmit` por um post normal.
- **Getform/Plunk**: semelhante.
- **Google Forms**: crie um formulário (“Quero a beta”) e linke o botão.

### Exemplo (Formspree)
```html
<form action="https://formspree.io/f/SEU_ID" method="POST" class="...">
  <input type="email" name="email" required />
  <button type="submit">Quero na Beta</button>
</form>
```

## Roadmap sugerido
- v1.1: Protótipo navegável (HTML/JS) com fluxos de aula e quiz (sem backend)
- v2.0: Beta fechada com login, trilhas e IA básica (Flask/Node + Vercel/Render)
- v2.1: Painel web + app (capacitor/expo) com mesma base de backend

---

Feito para publicação rápida. Qualquer dúvida, abra `index.html` e edite os textos. 😉
