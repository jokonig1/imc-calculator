# Integrantes:
- Josefa Konig
- Eduardo Astorga
  
# Calculadora de IMC

Este proyecto es una aplicación web que permite calcular el Índice de Masa Corporal (IMC) del usuario en función de su peso y altura. El IMC es una métrica utilizada para determinar si una persona tiene un peso saludable en relación con su altura. La aplicación está construida utilizando **Next.js** y **Tailwind CSS**, proporcionando una interfaz limpia y moderna.

## Características

- Cálculo automático del IMC basado en los datos ingresados por el usuario (peso y altura).
- Visualización del resultado con una barra de progreso que indica la categoría del IMC
- Interfaz responsiva, adaptada a dispositivos móviles y pantallas más grandes.
- Validación de inputs: manejo de entradas no válidas (valores negativos o no numéricos).

## Componentes Creados

### 1. **CalculadoraIMC**
   Este es el componente principal de la aplicación. Permite al usuario ingresar su peso (en kilogramos) y altura (en metros), y calcula el IMC basado en estos valores. Muestra el resultado numérico en pantalla junto con un mensaje que indica la categoría del IMC.

### 2. **Barra de Progreso (ProgressBar)**
   Este componente muestra visualmente el IMC calculado con una barra que se llena de acuerdo al valor del IMC. Dependiendo de la categoría, la barra cambia de color y se ajusta al valor correcto:

### 3. **Interfaz y Estilos**
   La aplicación está estilizada utilizando **Tailwind CSS** para asegurar un diseño limpio y responsivo. Los estilos de la barra de progreso y los mensajes cambian dinámicamente según el resultado del cálculo.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
