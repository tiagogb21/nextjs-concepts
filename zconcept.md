# Conceitos de Next.js:

## Definição:

Next.js é um framework React utilizado para construir aplicações web com recursos avançados de renderização, incluindo Server-Side Rendering (SSR) e Static Site Generation (SSG). Ele facilita a criação de aplicações full stack, combinando o melhor de frontend e backend.

# Como a Renderização Acontece:

* Interatividade via JavaScript:

    - A interatividade é construída utilizando JavaScript (JS) no frontend.

    - A renderização do conteúdo é gerida pelo React, onde o JS é responsável por atualizar a interface conforme o estado da aplicação muda.

## SSR - Server-Side Rendering:

* No SSR, o HTML e o CSS são gerados no servidor antes de serem enviados ao cliente.

    - A ideia é pré-construir a interface no servidor e enviá-la ao navegador já pronta, ou seja, com o HTML e o CSS necessários para exibir a página. Isso melhora o tempo de carregamento inicial da página, especialmente em SEO e UX.

    - Exemplo: Um blog ou uma loja online, onde o conteúdo varia para cada visitante.

## Hidratação:

* Como Acontece:

    - Após o SSR ou Static Site Generation (SSG), o Next.js envia uma página HTML estática para o navegador.

    - Porém, inicialmente, a página não tem interatividade (ou seja, o JavaScript não foi ainda aplicado).

    - O processo de hidratação ocorre quando o navegador carrega e executa o JavaScript necessário para tornar a página interativa. Isso "liga" os componentes React da página, permitindo que o usuário possa interagir com eles.

### Exemplo de Hidratação:

    Imagine uma página de produto de e-commerce. O servidor envia o HTML com os detalhes do produto (nome, preço, imagem), mas o botão de "Adicionar ao Carrinho" só funciona após a hidratação.


## Hidratação Parcial:

* O que é?

    - Em vez de fazer a hidratação completa da página, Next.js permite a hidratação parcial, onde apenas partes específicas da página são hidratadas conforme necessário.

    - Isso pode ser útil para otimizar a performance em páginas que possuem muitas áreas estáticas, onde apenas uma parte precisa ser interativa.

* Exemplo de Hidratação Parcial:

    - Em uma página de notícias, apenas a seção de comentários precisa de interatividade, enquanto o restante da página permanece estático.

## Root Layout:

* Definição:

    - O Root Layout é a estrutura base que se repete em todas as páginas da aplicação.

    - Ele pode incluir elementos como cabeçalho, rodapé, barra lateral, ou qualquer estrutura comum que deve persistir ao navegar entre diferentes rotas.

    - Persistência:

    - Uma vez carregado, o layout raiz não recarrega durante a navegação entre as páginas. Ele permanece persistente para otimizar a navegação do usuário e melhorar a experiência.

* Exemplo:

    - Cabeçalho com menu de navegação e rodapé que aparecem em todas as páginas de um site.

## Criar Mais de Um Layout:

* Concatenando Layouts:

    - O Next.js permite a criação de múltiplos layouts, que podem ser usados em diferentes partes da aplicação.

    - O framework concatena os layouts, permitindo que layouts aninhados compartilhem a estrutura de layout superior.

* Exemplo:

    - Um layout específico para páginas de administração, diferente do layout para páginas públicas.

## Páginas Customizadas:

* Next.js permite criar páginas customizadas para melhorar a experiência do usuário em várias situações específicas:

    1. Template:

    - Este tipo de página recarrega toda vez que o usuário navega para uma nova rota.

    - Útil para manter diferentes contextos ou dados entre as páginas.

    2. Loading:

    - É uma página ou componente que é exibido enquanto os dados estão sendo carregados. Um exemplo comum é o skeleton screen, que dá a sensação de que a página está carregando rapidamente, mesmo quando os dados ainda estão sendo buscados.

    3. Not Found:

    - Página de erro 404 customizada que aparece quando o usuário tenta acessar uma rota inexistente.

    4. Error:

    - Página de erro genérica para capturar e exibir falhas na aplicação, como falhas na renderização ou problemas no backend.

## Extra: Dynamic Routes com Parâmetros

* Rota Dinâmica:

    - Em Next.js, você pode criar páginas dinâmicas utilizando parâmetros na URL. Por exemplo, uma rota que captura um id pode ser configurada da seguinte maneira:

    ```jsx
        // File: pages/product/[id]/page.tsx
        const ProductPage = ({ params }) => {
        const { id } = params;
        // código para buscar e renderizar o produto pelo id
        };
    ```

* Acessando Parâmetros:

    - Para acessar os parâmetros, você utiliza o objeto props.params, que contém o valor dinâmico passado na URL. No exemplo acima, seria props.params.id.
