// Auditor do projeto. Incluído pelo Base.astro atrás de import.meta.env.DEV.
// APAGAR o arquivo e o gancho antes do build final (protocolo do HANDOFF).
//
// Mede corte de imagem, contraste contra o piso de AA, vazamento horizontal,
// alvo de toque e mix-blend-mode morto. Escreve o resultado no DOM porque o
// --dump-dom do Chrome headless é o único caminho de leitura que se provou
// confiável neste projeto.
//
// ?so=<seletor> isola um elemento no topo do documento para captura: rolar e
// capturar não funciona, o headless deste Mac não repinta a área que estava
// fora da tela.
(() => {
  const achados = [];
  const nota = (tipo, alvo, msg) => achados.push({ tipo, alvo, msg });

  const nome = (el) => {
    if (!el) return "?";
    const id = el.id ? `#${el.id}` : "";
    const cls = typeof el.className === "string" && el.className
      ? "." + el.className.trim().split(/\s+/).filter((c) => !c.startsWith("astro-")).slice(0, 2).join(".")
      : "";
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };

  /* ---------- corte de imagem ---------- */
  // Regra do projeto: nenhuma arte pode perder cabeça, asa, arma ou chifre.
  // Se cortar, o corte sai da base.
  for (const img of document.querySelectorAll("img")) {
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h) continue;
    const r = img.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const fit = getComputedStyle(img).objectFit;
    if (fit !== "cover") continue;
    const escala = Math.max(r.width / w, r.height / h);
    const cortadoX = Math.max(0, (w * escala - r.width) / (w * escala)) * 100;
    const cortadoY = Math.max(0, (h * escala - r.height) / (h * escala)) * 100;
    const pior = Math.max(cortadoX, cortadoY);
    if (pior > 0.5) {
      nota("corte", nome(img), `${pior.toFixed(1)}% (x ${cortadoX.toFixed(1)} / y ${cortadoY.toFixed(1)}) pos=${getComputedStyle(img).objectPosition} src=${(img.currentSrc || img.src).split("/").pop()}`);
    }
  }

  /* ---------- contraste ---------- */
  const canal = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const lum = ([r, g, b]) => 0.2126 * canal(r / 255) + 0.7152 * canal(g / 255) + 0.0722 * canal(b / 255);
  const rgb = (s) => {
    const m = s.match(/[\d.]+/g);
    return m ? m.slice(0, 4).map(Number) : null;
  };
  const sobrepor = (frente, fundo) => {
    const a = frente[3] === undefined ? 1 : frente[3];
    return [0, 1, 2].map((i) => frente[i] * a + fundo[i] * (1 - a));
  };
  const fundoEfetivo = (el) => {
    let cor = [13, 13, 15];
    const pilha = [];
    for (let n = el; n; n = n.parentElement) pilha.push(n);
    for (const n of pilha.reverse()) {
      const bg = rgb(getComputedStyle(n).backgroundColor);
      if (bg && (bg[3] === undefined || bg[3] > 0)) cor = sobrepor(bg, cor);
    }
    return cor;
  };

  for (const el of document.querySelectorAll("p,a,span,li,h1,h2,h3,h4,button,strong,em,td,th,label,figcaption,time,small")) {
    if (el.querySelector("p,a,span,li,h1,h2,h3,h4,button,strong,em,td,th,label,figcaption,time,small")) continue;
    const txt = el.textContent.trim();
    if (!txt) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) < 0.9) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    // texto sobre imagem/gradiente não tem cor de fundo apurável: fora da conta
    let sobreArte = false;
    for (let n = el; n; n = n.parentElement) {
      const bg = getComputedStyle(n).backgroundImage;
      if (bg && bg !== "none") { sobreArte = true; break; }
    }
    if (sobreArte) continue;

    const fg = rgb(cs.color);
    if (!fg) continue;
    const bg = fundoEfetivo(el);
    const L1 = lum(sobrepor(fg, bg)), L2 = lum(bg);
    const razao = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const px = parseFloat(cs.fontSize);
    const grande = px >= 24 || (px >= 18.66 && parseInt(cs.fontWeight, 10) >= 700);
    const piso = grande ? 3 : 4.5;
    if (razao < piso) {
      nota("contraste", nome(el), `${razao.toFixed(2)}:1 (piso ${piso}) ${px}px cor=${cs.color} "${txt.slice(0, 40)}"`);
    }
  }

  /* ---------- vazamento horizontal ---------- */
  const de = document.documentElement;
  const vazamento = Math.round(de.scrollWidth - de.clientWidth);
  if (vazamento > 0) {
    nota("vazamento", "documento", `${vazamento}px`);
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && Math.round(r.right) > de.clientWidth + 1) {
        nota("vazamento", nome(el), `passa ${Math.round(r.right - de.clientWidth)}px da direita`);
      }
    }
  }

  /* ---------- alvo de toque ---------- */
  // Fora da conta, por regra e não por conveniência:
  //  - o que está fora da tela (a armadilha anti-robô mora em -9999px);
  //  - link dentro de texto corrido, que a própria WCAG 2.5.5 excepciona.
  const dentroDeTexto = (a) => {
    const p = a.parentElement;
    if (!p) return false;
    if (!/^(P|LI|TD|SPAN|EM|STRONG|DD|FIGCAPTION|BLOCKQUOTE)$/.test(p.tagName)) return false;
    // a exceção da WCAG é "o alvo está numa frase ou num bloco de texto": vale
    // tanto para o link no meio do parágrafo quanto para o parágrafo que é só
    // o link, desde que haja texto em volta dentro do mesmo bloco.
    if (p.textContent.trim().length > a.textContent.trim().length + 4) return true;
    const avo = p.parentElement;
    return !!avo && avo.textContent.trim().length > p.textContent.trim().length + 20;
  };
  for (const el of document.querySelectorAll("a[href],button,input,select,summary,[role=button]")) {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    if (r.right + scrollX < 0 || r.left + scrollX > de.scrollWidth) continue;
    if (el.tagName === "A" && dentroDeTexto(el)) continue;
    if (r.height < 44 || r.width < 24) {
      nota("toque", nome(el), `${Math.round(r.width)}x${Math.round(r.height)} "${el.textContent.trim().slice(0, 28)}"`);
    }
  }

  /* ---------- mix-blend-mode morto ---------- */
  // Já quebrou quatro vezes. Qualquer transform, filter, opacity < 1, z-index
  // ou isolation num ancestral cria contexto de empilhamento, mas as duas
  // situações não são a mesma coisa e misturá-las gera ruído:
  //
  //   isolation: isolate é escrito de propósito neste projeto, para CONTER o
  //   blend dentro de um palco cujo fundo é justamente o que se quer blendar.
  //   Sai como "blend-contido", informativo.
  //
  //   z-index, transform, filter e opacity num ancestral são acidentais. Foram
  //   eles que mataram o blend nas quatro vezes. Saem como defeito.
  for (const el of document.querySelectorAll("body *")) {
    const modo = getComputedStyle(el).mixBlendMode;
    if (modo === "normal") continue;
    let culpado = null, deliberado = null;
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const c = getComputedStyle(n);
      const motivos = [];
      if (c.transform !== "none") motivos.push(`transform:${c.transform.slice(0, 20)}`);
      if (c.filter !== "none") motivos.push(`filter:${c.filter}`);
      if (parseFloat(c.opacity) < 1) motivos.push(`opacity:${c.opacity}`);
      if (c.zIndex !== "auto" && c.position !== "static") motivos.push(`z-index:${c.zIndex}`);
      if (c.willChange !== "auto") motivos.push(`will-change:${c.willChange}`);
      if (motivos.length) { culpado = `${nome(n)} → ${motivos.join(", ")}`; break; }
      if (c.isolation === "isolate") { deliberado = `${nome(n)} → isolation:isolate`; break; }
    }
    if (culpado) nota("blend-morto", `${nome(el)} (${modo})`, culpado);
    else if (deliberado) nota("blend-contido", `${nome(el)} (${modo})`, deliberado);
  }

  /* ---------- isolamento para captura ---------- */
  const so = new URLSearchParams(location.search).get("so");
  if (so) {
    const alvo = document.querySelector(so);
    if (alvo) {
      for (let n = alvo; n && n !== document.body; n = n.parentElement) {
        for (const irmao of n.parentElement.children) if (irmao !== n) irmao.style.display = "none";
      }
      const m = document.querySelector("main");
      if (m) m.style.paddingTop = "0";
    }
  }

  /* ---------- saída ---------- */
  const linhas = [
    `ROTA ${location.pathname}  viewport=${innerWidth}x${innerHeight}`,
    `documento_altura=${de.scrollHeight}`,
    ...["corte", "contraste", "vazamento", "toque", "blend-morto", "blend-contido"].map((t) => {
      const l = achados.filter((a) => a.tipo === t);
      return `${t}=${l.length}` + l.map((a) => `\n    ${a.alvo} :: ${a.msg}`).join("");
    }),
  ];
  const pre = document.createElement("pre");
  pre.id = "AUDITORIA";
  pre.textContent = linhas.join("\n");
  if (!so) document.body.appendChild(pre);
})();
