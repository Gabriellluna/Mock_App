#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Correto
Nota: 1,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 10,00

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Conquistado
Nota extra: +1,00

#Extra3 — Busca/filtro por texto
Conquistado
Nota extra: +1,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 3,00
Extras conquistados: E1, E2, E3

Subtotal com extras (teto 10,00): 10,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 10,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** MockAPI (`app/services/api.js` → `https://6acec205f338359cf1c3a973.mockapi.io`, `/users`).  
**Caminho base:** raiz (`app/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next`; App Router.

**Critério 2 — Lista com axios:** `api.get('/users')` em `app/page.js` + `UsersList`.

**Critério 3 — useState e useEffect:** home, `UserDetails`, `Header`, `UserNavigation`.

**Critério 4 — 6 componentes:** Header, UsersList, UserInfo, UserDetails, UserNavigation, Loading, Error (≥6).

**Critério 5 — Props:** Header, UsersList, UserInfo, Loading, Error, UserNavigation.

**Critério 6 — Detalhes + axios + navegação:** rota `/details/[id]`; `UserDetails` faz `api.get(`users/${params.id}`)`.

**Critério 7 — Comentários:** comentários densos e úteis nos fluxos principais.

**Critério 8 — Commits:** 14 commits na `main`.

**Critério 9 — README / deploy link:** `npm install` / `npm run dev` + `https://mock-app-five.vercel.app/`.

**Critério 10 — Deploy Vercel:** LIVE `https://mock-app-five.vercel.app` (HTTP 200).

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). Componentes `loading` e `error` na lista; detalhe também trata erro/carregando.
**Extra 2 — Hooks avançados:** Conquistado (+1,00). `useMemo` + `useCallback` na home; `useRef` no `Header`.
**Extra 3 — Busca/filtro:** Conquistado (+1,00). Filtro por nome via input do `Header` + `useMemo`.
**Extra 4 — localStorage:** Não conquistado (+0,00). Ausente.
**Resumo extras:** E1, E2, E3 (+3,00); teto 10,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/Gabriellluna/Mock_App`
- **branch:** `main`
- **trecho log:** `04b3053` feat: alguns outros comentários … `aa4f296` Initial commit from Create Next App
- **autores:** Gabriel Luna (12), Enrico Bertolacini (2)
- **commits (C8):** 14
