## User Management Dashboard
A simple user management app

### Scaffolding
<details>
<summary>
Setup
</summary>

<details>
<Summary>
1. Initiating project
</Summary>

- Create a project with
  ```sh
  bun create vite@latest user-management
  ```
- Selected `react` and `javascript`
</Details>

<details>
<summary>
2. Styling
</summary>

- Install `tailwind` with
  ```sh
  bun add tailwindcss @tailwindcss/vite
  ```

- Configure the Vite plugin in `vite.config.js`
  ```js
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```

- Import Tailwind CSS to the CSS file
  ```css
  @import "tailwindcss";
  ```

- Start using Tailwind in the HTML included in the <head>.
  ```html
  <link href="/src/style.css" rel="stylesheet">
  ```

- Install Material UI
  ```sh
  bun add @mui/material @emotion/react @emotion/styled
  ```

- Install google fonts inside project's `<head />` tag:
  ```js
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  />
  ```

  or
  ```sh
  bun add @fontsource/roboto
  ```

</details>


<details>
<summary>
3. Mock Data
</summary>

- Create a service in `lib/api.ts` to fetch data from `/users` endpoint from [Jsonplaceholder](https://jsonplaceholder.typicode.com/users). Export it and call it in  `UserList.jsx`.

</Details>
</details>
