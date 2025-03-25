# React + TypeScript + Vite

Este projeto é uma aplicação React utilizando TypeScript e Vite para desenvolvimento rápido e com Hot Module Replacement (HMR). O projeto foi estruturado seguindo conceitos de TDD (Desenvolvimento Orientado a Testes), DDD (Design Orientado a Domínio) e os princípios SOLID para garantir um código bem organizado, modular e de fácil manutenção.

## Estrutura do Projeto

- **public/**  
  Arquivos estáticos, como imagens e ícones (ex.: `vite.svg`).

- **src/**  
  Código-fonte da aplicação.
  - **assets/**  
    Recursos como imagens (ex.: `react.svg`).
  - **data/**  
    Camada de implementação de casos de uso e protocolos de comunicação:
    - **protocols/**  
      Interfaces e contratos, por exemplo, [`HttpPostClient`](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\src\data\protocols\http\HttpPostClient.ts) define o contrato para clientes HTTP.
    - **usecases/**  
      Implementações de casos de uso, por exemplo, [`RemoteAuthentication`](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\src\data\usecases\authentication\RemoteAuthentication.ts) implementa a autenticação via protocolo HTTP.
    
  - **domain/**  
    Representa o núcleo da aplicação (domínio):
    - **models/**  
      Modelos de dados, como [`AccountModel`](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\src\domain\models\AccountModel.ts).
    - **usecases/**  
      Interfaces que definem os contratos de negócio, como em [`Authentication`](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\src\domain\usecases\Authentication.ts).

  - Componentes React e estilos (ex.: `App.tsx`, `index.css`, `App.css`).

- **test/**  
  Arquivos de teste, garantindo o TDD. Exemplo: [test.spec.ts](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\src\test\test.spec.ts) contém testes básicos.
  
- **Configurações e scripts**  
  Arquivos como:
  - `package.json`: scripts para desenvolvimento, build, lint e testes.
  - `tsconfig*.json`: configurações do compilador TypeScript.
  - `vite.config.ts`: configuração do Vite.
  - `eslint.config.js`: regras de lint com integração aos plugins do ESLint para React e TypeScript.
  - Arquivos de configuração do Jest, garantindo testes com [`ts-jest`](c:\Users\dev_r\Documents\reactjs_apps\react_tdd_clean_code\jest.config.ts).

## Boas Práticas Utilizadas

- **TDD (Desenvolvimento Orientado a Testes):**  
  Os testes são escritos para garantir que o comportamento da aplicação esteja sempre conforme o esperado.

- **DDD (Design Orientado a Domínio):**  
  A separação entre a camada de domínio (regras de negócio e modelos) e a camada de dados (implementações de casos de uso e protocolos) garante uma aplicação bem organizada e com responsabilidade única.

- **SOLID Principles:**  
  Cada parte do código segue os princípios SOLID, garantindo:
  - **Single Responsibility:** Cada classe ou módulo tem uma única responsabilidade.
  - **Open/Closed:** Componentes estão abertos à extensão, fechados à modificação.
  - **Liskov Substitution:** Interfaces claras para substituição.
  - **Interface Segregation:** Interfaces são específicas e coesas.
  - **Dependency Inversion:** Dependências abstraídas via interfaces, facilitando testes e manutenção.

- **Ferramentas de Qualidade:**  
  Utilização de ESLint, Prettier e Husky para manter o padrão do código e impedir problemas durante os commits.

## Como Rodar o Projeto Localmente

1. **Instalar Dependências:**  
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências:
   
```bash
yarn install 
```

2. **Rodar em dev:**

```bash
yarn dev
```

3. **Testes:**
```bash
yarn test
```

4. **Build:**
```bash 
yarn build 
```
