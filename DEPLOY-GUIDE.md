# Guía de Despliegue a GitHub Pages

Este proyecto está preconfigurado para compilarse y desplegarse de manera automática a GitHub Pages cada vez que subas cambios a la rama principal (`main` o `master`) de tu repositorio en GitHub.

---

## 🛠️ Configuración Inicial en GitHub

Sigue estos sencillos pasos para activar el despliegue automático:

### Paso 1: Configurar los permisos de GitHub Actions
1. Entra a tu repositorio en GitHub: `https://github.com/ingjcotaizac-hub/ingjcotaizac-hub.github.io`
2. Ve a la pestaña **Settings** (Configuración) arriba a la derecha.
3. En el menú lateral izquierdo, haz clic en **Actions** -> **General**.
4. Baja hasta la sección **Workflow permissions** (Permisos de workflow).
5. Selecciona **Read and write permissions** (Permisos de lectura y escritura).
6. Haz clic en **Save** (Guardar).

### Paso 2: Configurar la fuente de GitHub Pages
1. Dentro de **Settings**, busca en el menú lateral izquierdo la sección **Pages**.
2. En la sección **Build and deployment** -> **Source**, asegúrate de que esté seleccionado **Deploy from a branch** o bien **GitHub Actions** (recomendado para Astro, ya que compila el código en la nube).
3. Si eliges **GitHub Actions**, el workflow de despliegue se encargará de todo sin crear ramas temporales como `gh-pages`.

---

## 🚀 Cómo subir cambios (Tu flujo de trabajo)

Cada vez que quieras añadir una nueva pieza o cambiar textos del portafolio, haz lo siguiente en tu consola o cliente Git:

1. Agrega el nuevo archivo MDX y su imagen de portada.
2. Añade los cambios:
   ```bash
   git add .
   ```
3. Crea un commit descriptivo:
   ```bash
   git commit -m "Añadida nueva pieza: Simulador de Recepción de Hotel"
   ```
4. Sube los cambios a GitHub:
   ```bash
   git push origin main
   ```

Una vez subido, GitHub Actions detectará los cambios, compilará el sitio estático de Astro y publicará el nuevo portafolio de manera automatizada en tu dirección web: `https://ingjcotaizac-hub.github.io/`.
