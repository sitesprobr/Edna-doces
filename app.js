/* =======================================================================
   Edna Doces — catálogo de doces e salgados com pedido via WhatsApp + Pix.

   👉 COMO TROCAR OS PRODUTOS:
   Na lista "produtos" abaixo, cada item tem:
     - categoria:  grupo do produto (vira uma seção no site)
     - nome:       nome do produto
     - descricao:  uma frase curta
     - preco:      valor (use ponto, ex: 25.90)
     - imagem:     caminho da foto. Salve a foto na pasta "imagens" e
                   use "imagens/nome-do-arquivo.jpg"
   ======================================================================= */

// ======================= CONFIG DA LOJA =======================
const CONFIG = {
    nomeLoja: "Edna Doces",
    whatsapp: "5511958259204",              // WhatsApp da Edna
    chavePix: "57.185.773/0001-57",          // Pix da Edna (CNPJ)
    // Link de avaliação do Google (quando tiver).
    linkAvaliacao: "",
    produtos: [
        {
            categoria: "Docinhos",
            nome: "Brigadeiro e Beijinho Tradicional",
            descricao: "Cento de docinhos tradicionais (brigadeiro e beijinho). 100 unidades. Somente sob encomenda.",
            preco: 70.00,
            imagem: "Captura de tela 2026-10-15 191344.png"
        },
        {
            categoria: "Docinhos",
            nome: "Pão de Mel",
            descricao: "Pão de mel artesanal. Sabores: brigadeiro, coco ou doce de leite.",
            preco: 6.00,
            imagem: "Captura de tela 2026-10-15 191540.png"
        },
        {
            categoria: "Docinhos",
            nome: "Brownie Recheado",
            descricao: "Brownie recheado, macio e irresistível.",
            preco: 7.00,
            imagem: "Captura de tela 2026-10-15 191710.png"
        },
        {
            categoria: "Salgados",
            nome: "Salgadinhos Sortidos",
            descricao: "Cento de salgadinhos sortidos (fritos ou assados). 100 unidades. Somente sob encomenda.",
            preco: 60.00,
            imagem: "Captura de tela 2026-10-15 191406.png"
        },
        {
            categoria: "Salgados",
            nome: "Coxinha de Frango",
            descricao: "Coxinha de frango crocante e saborosa.",
            preco: 10.00,
            imagem: "Captura de tela 2026-10-15 191531.png"
        },
        {
            categoria: "Salgados",
            nome: "Frango com Catupiry",
            descricao: "Salgado de frango com catupiry, cremoso e crocante.",
            preco: 10.00,
            imagem: "Captura de tela 2026-10-15 191514.png"
        },
        {
            categoria: "Bolos",
            nome: "Bolo de Pote",
            descricao: "Delicioso bolo de pote cremoso.",
            preco: 15.00,
            imagem: "Captura de tela 2026-10-15 191327.png"
        },
        {
            categoria: "Bolos",
            nome: "Bolo de Aniversário",
            descricao: "Bolo de aniversário sob encomenda. Valor por quilo.",
            preco: 75.00,
            imagem: "Captura de tela 2026-10-15 191424.png"
        },
        {
            categoria: "Bolos",
            nome: "Caseirinho",
            descricao: "Bolo caseiro feito com carinho.",
            preco: 15.00,
            imagem: "Captura de tela 2026-10-15 191452.png"
        },
        {
            categoria: "Bolos",
            nome: "Fatias",
            descricao: "Fatia generosa de bolo com pudim.",
            preco: 20.00,
            imagem: "Captura de tela 2026-10-15 200811.png"
        },
        {
            categoria: "Bolos",
            nome: "Bolo de Chocolate",
            descricao: "Bolo de chocolate com cobertura cremosa e pedaços de chocolate.",
            preco: 20.00,
            imagem: "Captura de tela 2026-10-15 200823.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Brownie Supremo",
            descricao: "Brownie supremo, intenso e chocolatudo.",
            preco: 20.00,
            imagem: "Captura de tela 2026-10-15 191551.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Copo da Felicidade P",
            descricao: "Copo da felicidade — tamanho P. Camadas de bolo, creme e chocolate.",
            preco: 12.00,
            imagem: "Captura de tela 2026-10-15 191612.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Copo da Felicidade M",
            descricao: "Copo da felicidade — tamanho M. Camadas de bolo, creme, morango e muito mais.",
            preco: 15.00,
            imagem: "Captura de tela 2026-10-15 191621.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Copo da Felicidade G",
            descricao: "Copo da felicidade — tamanho G. Camadas de bolo, creme, morango e muito mais.",
            preco: 20.00,
            imagem: "Captura de tela 2026-10-15 191601.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Fondue Brownie P",
            descricao: "Fondue de brownie com molhos de chocolate e creme — tamanho P.",
            preco: 19.99,
            imagem: "Captura de tela 2026-10-15 200959.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Fondue Brownie M",
            descricao: "Fondue de brownie com molhos de chocolate e creme — tamanho M.",
            preco: 25.99,
            imagem: "Captura de tela 2026-10-15 200959.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Fondue Brownie G",
            descricao: "Fondue de brownie com molhos de chocolate e creme — tamanho G.",
            preco: 35.99,
            imagem: "Captura de tela 2026-10-15 200959.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Pudim P",
            descricao: "Pudim cremoso — tamanho P.",
            preco: 10.00,
            imagem: "Captura de tela 2026-10-15 191749.png"
        },
        {
            categoria: "Sobremesas",
            nome: "Pudim M",
            descricao: "Pudim cremoso — tamanho M.",
            preco: 15.00,
            imagem: "Captura de tela 2026-10-15 191749.png"
        }
    ]
};
// ================================================================

// Avisos exibidos abaixo do título de cada categoria (opcional).
const AVISOS_CATEGORIA = {};

const $ = (id) => document.getElementById(id);

// Pedido: mapa de "índice do produto" → quantidade.
const carrinho = {};

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Monta o catálogo, agrupando os produtos por categoria.
function montarCatalogo() {
    const catalogo = $("catalogo");
    catalogo.innerHTML = "";

    const grupos = {};
    const ordemCategorias = [];
    CONFIG.produtos.forEach((p, i) => {
        const cat = p.categoria || "Outros";
        if (!grupos[cat]) {
            grupos[cat] = [];
            ordemCategorias.push(cat);
        }
        grupos[cat].push(i);
    });

    ordemCategorias.forEach((cat) => {
        const titulo = document.createElement("h2");
        titulo.className = "categoria-titulo";
        titulo.id = "cat-" + cat.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
        titulo.textContent = cat;
        catalogo.appendChild(titulo);

        const aviso = AVISOS_CATEGORIA[cat];
        if (aviso) {
            const box = document.createElement("div");
            box.className = "categoria-aviso";
            const itensHtml = aviso.itens.map((it) =>
                `<li><span class="aviso-icone">${it.icone}</span><span>${it.texto}</span></li>`
            ).join("");
            box.innerHTML = `
                <p class="aviso-titulo">${aviso.titulo}</p>
                <ul class="aviso-lista">${itensHtml}</ul>
            `;
            catalogo.appendChild(box);
        }

        const grade = document.createElement("div");
        grade.className = "categoria-grade";

        grupos[cat].forEach((i) => {
            const p = CONFIG.produtos[i];
            const card = document.createElement("div");
            card.className = "produto";
            card.innerHTML = `
                <div class="produto-imagem">
                    <img src="${p.imagem}" alt="${p.nome}" loading="lazy"
                         onerror="this.src='https://placehold.co/500x400/fce7d6/c2410c?text=Foto+do+produto'">
                </div>
                <div class="produto-info">
                    <span class="produto-nome">${p.nome}</span>
                    <span class="produto-desc">${p.descricao}</span>
                    <span class="produto-preco">${formatarPreco(p.preco)}</span>
                    <button class="btn-add" data-i="${i}">Adicionar ao pedido</button>
                </div>
            `;
            card.querySelector(".btn-add").addEventListener("click", () => adicionar(i));
            card.querySelector(".produto-imagem").addEventListener("click", () => abrirLightbox(p));
            grade.appendChild(card);
        });

        catalogo.appendChild(grade);
    });
}

function adicionar(i) {
    carrinho[i] = (carrinho[i] || 0) + 1;
    atualizarCarrinho();
    abrirCarrinho();
}

function alterarQtd(i, delta) {
    carrinho[i] = (carrinho[i] || 0) + delta;
    if (carrinho[i] <= 0) delete carrinho[i];
    atualizarCarrinho();
}

function totalItens() {
    return Object.values(carrinho).reduce((s, q) => s + q, 0);
}

function totalValor() {
    return Object.entries(carrinho).reduce(
        (s, [i, q]) => s + CONFIG.produtos[i].preco * q, 0);
}

function atualizarCarrinho() {
    const qtd = totalItens();
    $("contador").textContent = qtd;
    $("contador-flutuante").textContent = qtd;

    const lista = $("itens-carrinho");
    lista.innerHTML = "";

    if (qtd === 0) {
        lista.innerHTML = "<p class='carrinho-vazio'>Seu pedido está vazio.<br>Escolha suas delícias. 🍰</p>";
        $("finalizar").disabled = true;
    } else {
        $("finalizar").disabled = false;
        Object.entries(carrinho).forEach(([i, q]) => {
            const p = CONFIG.produtos[i];
            const item = document.createElement("div");
            item.className = "item-carrinho";
            item.innerHTML = `
                <img src="${p.imagem}" alt="${p.nome}"
                     onerror="this.src='https://placehold.co/100x100/fce7d6/c2410c?text=Foto'">
                <div class="item-dados">
                    <span class="item-nome">${p.nome}</span>
                    <span class="item-preco">${formatarPreco(p.preco)}</span>
                </div>
                <div class="item-qtd">
                    <button class="qtd-btn" data-i="${i}" data-d="-1">−</button>
                    <span>${q}</span>
                    <button class="qtd-btn" data-i="${i}" data-d="1">+</button>
                </div>
            `;
            item.querySelectorAll(".qtd-btn").forEach((b) => {
                b.addEventListener("click", () => alterarQtd(b.dataset.i, Number(b.dataset.d)));
            });
            lista.appendChild(item);
        });
    }

    $("total-carrinho").textContent = formatarPreco(totalValor());
}

function abrirCarrinho() {
    $("painel-carrinho").classList.add("aberto");
    $("overlay-carrinho").classList.remove("oculto");
}
function fecharCarrinho() {
    $("painel-carrinho").classList.remove("aberto");
    $("overlay-carrinho").classList.add("oculto");
}

// Finaliza: monta a mensagem do pedido e abre o WhatsApp.
function finalizar() {
    if (totalItens() === 0) return;

    const nome = $("cliente-nome").value.trim();
    const tel = $("cliente-tel").value.trim();
    const endereco = $("cliente-endereco").value.trim();

    if (!nome || !endereco) {
        alert("Por favor, preencha seu nome e o endereço de entrega. 😊");
        return;
    }

    let msg = `Olá, ${CONFIG.nomeLoja}! Quero fazer um pedido:\n\n`;
    Object.entries(carrinho).forEach(([i, q]) => {
        const p = CONFIG.produtos[i];
        msg += `• ${q}x ${p.nome} — ${formatarPreco(p.preco * q)}\n`;
    });
    msg += `\n*Total: ${formatarPreco(totalValor())}*`;

    msg += `\n\n*Dados para entrega:*`;
    msg += `\nNome: ${nome}`;
    if (tel) msg += `\nTelefone: ${tel}`;
    msg += `\nEndereço: ${endereco}`;

    const obs = $("observacoes").value.trim();
    if (obs) msg += `\n\nObservações: ${obs}`;

    if (CONFIG.chavePix) {
        msg += `\n\nChave Pix para pagamento: ${CONFIG.chavePix}`;
        msg += `\n(Envio o comprovante em seguida.)`;
    }

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    mostrarObrigado();
}

// ===================== Tela de agradecimento =====================
function mostrarObrigado() {
    $("modal-obrigado").classList.remove("oculto");
    $("overlay-obrigado").classList.remove("oculto");
}
function fecharObrigado() {
    $("modal-obrigado").classList.add("oculto");
    $("overlay-obrigado").classList.add("oculto");
}

// ===================== Lightbox (foto ampliada) =====================
function abrirLightbox(produto) {
    const lb = $("lightbox");
    $("lightbox-img").src = produto.imagem;
    $("lightbox-img").alt = produto.nome;
    $("lightbox-legenda").textContent = produto.nome;
    lb.classList.remove("oculto");
}
function fecharLightbox() {
    $("lightbox").classList.add("oculto");
    $("lightbox-img").src = "";
}

// Inicialização
$("nome-loja").textContent = CONFIG.nomeLoja;
montarCatalogo();
atualizarCarrinho();

$("abrir-carrinho").addEventListener("click", abrirCarrinho);
$("carrinho-flutuante").addEventListener("click", abrirCarrinho);
$("fechar-carrinho").addEventListener("click", fecharCarrinho);
$("overlay-carrinho").addEventListener("click", fecharCarrinho);
$("finalizar").addEventListener("click", finalizar);

$("link-pedido").addEventListener("click", (e) => {
    e.preventDefault();
    abrirCarrinho();
});

$("fechar-obrigado").addEventListener("click", fecharObrigado);
$("overlay-obrigado").addEventListener("click", fecharObrigado);

$("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox" || e.target.id === "lightbox-fechar") fecharLightbox();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharLightbox();
});
