# Tailwind
## ¿Qué es TailWind CSS? 🧐
Es un framework que permite la contrucción de diseños altamente personalizados y de bajo nivel.

## ¿Por qué usar TailWind CSS? 🤨
A diferencia de otros frameworks css, como lo es bootstrap, que otorgan componentes prediseñados, Tailwind provee clases a bajo nivel de css que nos permiten construir diseños completamente personalizados por nostros y sin tener que pelear con el framework en sí.

Nos externa una responsividad desde la misma sintaxis.

Trabaja de manera amigable en el crecimiento de nuestro proyecto al proveernos herramientas para extraer clases.

Pero sobre todo, nos abre su código para personalizarlo ya que esta escrito en PostCSS y configurado en JavaScript.

Tailwind is more than a CSS framework, it’s an engine for creating design systems.

[Estadisticas de Tailwind](https://2019.stateofcss.com/technologies/css-frameworks/)
[Documentacion](https://tailwindcss.com/)

## Instalación y ambiente de desarrollo

### Creamos un proyecto de npm

```
npm init -y
```

### Instalamos las dependencias

```
npm install tailwindcss autoprefixer postcss-cli
```

- **Autoprefixer**: Nos permite agregar vendor prefixers

### Inicializamos las librerias
```
npx tailwindcss init
```

### Configuramos postcss
- Crear un archivo llamado postcss.config.js

### Tailwind
Creamos un archivo llamado tailwind.css, para crear el proyecto nos podemos apoyar de la documentacion.

### Construir el proyecto
Agregamos la siguiente instrucción en el **package.json** en la parte de scripts.

```
"build": "postcss css/tailwind.css -o public/css/style.css"
```

Ejecutamos en la terminal el comando:
```
npm run build
```

Ahora se construirá nuestro css

Podemos instalar live-server para ver nuestros cambios

```
npm install -g live-server
```