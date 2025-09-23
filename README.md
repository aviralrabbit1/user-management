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

</details>

</details>
