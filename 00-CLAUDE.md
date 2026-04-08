# CLAUDE.md — Orquestrador · MVP Phytonatus · Antigravity

> Leia este arquivo integralmente antes de qualquer ação.
> Toda decisão de design e estrutura deve seguir este documento.

---

## 1. QUEM É O CLIENTE

**Phytonatus** — empresa B2B do setor de produtos naturais.
Site atual (desatualizado): https://phytonatus.com.br/
Loja online separada: https://loja.phytonatus.com.br/

**Público-alvo:** gerentes de compras, fornecedores, apicultores — perfil B2B.
Este site é INSTITUCIONAL. Não é e-commerce. Não tem carrinho.

---

## 2. ARQUITETURA DE MARCAS

```
Phytonatus (marca mãe)
├── Phytonatus Mel       → bisnaga de mel, produto mais vendido
├── Empório do Mel       → méis premium por florada + derivados
├── Empório Nuts         → sal rosa, cacau, coco, temperos, cookie
└── Vida Gourmet         → linha premium gourmet
```

---

## 3. IDENTIDADE VISUAL

**Paleta:** bege, off-white, tons naturais quentes
**Títulos:** Cormorant Garamond (elegante, fino)
**Corpo:** DM Sans (clean, moderno)
**Estética:** natural, premium, institucional — SEM apelo de varejo

**Acentos por submarca:**
- Empório do Mel → âmbar/dourado
- Empório Nuts → vermelho
- Vida Gourmet → vermelho
- Phytonatus → verde musgo

---

## 4. ESTRUTURA DO SITE

```
[HERO]            → vídeo mel scroll-controlled (placeholder até vídeo chegar)
[INGREDIENTES]    → 4 cards animação: mel · cacau · coco · sal rosa
[MARCAS]          → 4 fatias: Phytonatus · Empório do Mel · Empório Nuts · Vida Gourmet
[PRIVATE LABEL]   → estrutura fabril + selos + clientes + CTA comercial
[ONDE ENCONTRAR]  → logos supermercados + canais digitais
[CONTATO]         → formulário Comercial / Compras / RH
[FOOTER]          → nav + loja online + copyright
```

---

## 5. REGRAS INVIOLÁVEIS

```
❌ NÃO criar e-commerce ou carrinho
❌ NÃO integrar com Nuvem Shop
❌ NÃO mostrar todos os produtos individualmente
❌ NÃO usar fruta/árvore para cacau — usar PÓ em dispersão
❌ NÃO publicar vídeos sem re-encode FFMPEG

✅ SEMPRE link da loja em: header · hero · marcas · contato · footer
✅ SEMPRE abrir loja em nova aba
✅ SEMPRE textos em português brasileiro
✅ SEMPRE responsivo mobile-first
✅ SEMPRE placeholders onde assets reais ainda não chegaram
```

---

## 6. ASSETS PENDENTES (chegam em breve)

- [ ] Manual de marca com paleta e tipografia exatas
- [ ] Logos oficiais das submarcas
- [ ] Vídeos de ingredientes re-encodados (mel, cacau, coco, sal rosa)
- [ ] Tabela nutricional PDF por marca
- [ ] Catálogo completo PDF
- [ ] Fotos de fábrica e estrutura
- [ ] E-mails reais de destino do formulário

---

## 7. ORDEM DE EXECUÇÃO

```
FASE 1  Ler este CLAUDE.md completo
FASE 2  Ler o arquivo 01-SKILL-scroll-animation.md
FASE 3  Extrair branding via Firecrawl: https://phytonatus.com.br/
FASE 4  Executar o prompt do arquivo 02-PROMPT-principal.md
FASE 5  Ajustes visuais iterativos
FASE 6  Quando vídeos chegarem → integrar animações scroll
```
