This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## ¿Cuál es el objetivo de una arquitectura?

1. **Mantenibilidad:** Una arquitectura bien estructurada facilita la mantenibilidad del software a lo largo del tiempo.
   Permite a los desarrolladores realizar cambios y mejoras en el sistema de manera más sencilla y con menos riesgo de
   introducir errores.

2. **Separación de preocupaciones:** Una buena arquitectura divide el sistema en capas y componentes con
   responsabilidades específicas. Esto facilita la comprensión del código y permite a los desarrolladores enfocarse en
   aspectos particulares del sistema sin tener que preocuparse por todo al mismo tiempo.

3. **Flexibilidad:** Al desacoplar las diferentes partes del sistema, una arquitectura sólida permite reemplazar o
   actualizar componentes de manera más fácil. Por ejemplo, si un componente de la infraestructura necesita ser
   reemplazado por una tecnología diferente, el impacto en el resto del sistema será mínimo.

4. **Escalabilidad:** Una arquitectura bien definida facilita la escalabilidad del sistema, permitiendo agregar nuevas
   funcionalidades o mejorar el rendimiento sin tener que rediseñar

## Metas de la arquitectura de software

1. **Mantener el costo de desarrollo constante:** Una arquitectura efectiva permite que el costo de desarrollo se
   mantenga constante a lo largo del tiempo, evitando que aumente exponencialmente a medida que el proyecto crece y
   evoluciona.

2. **Facilitar la incorporación de nuevos miembros al equipo:** Una buena arquitectura hace que sea más fácil para los
   nuevos miembros del equipo comprender y contribuir al proyecto, ya que proporciona una estructura clara y bien
   organizada.

3. **Desacoplar componentes:** Desacoplar componentes es clave para lograr una arquitectura flexible y mantenible. Esto
   permite reemplazar o modificar partes del sistema sin afectar al resto, lo que facilita la adaptación a cambios en
   los requisitos o las tecnologías.

4. **Separación de preocupaciones:** La arquitectura debe dividir el sistema en capas y componentes con
   responsabilidades específicas. Esto facilita la comprensión del código y permite a los desarrolladores enfocarse en
   aspectos particulares del sistema sin tener que preocuparse por todo al mismo tiempo.

5. **Permitir la evolución del sistema:** Una buena arquitectura de software permite que el sistema evolucione y se
   adapte a nuevos requisitos, cambios en la tecnología o en el entorno

## Clean architecture

La Clean Architecture es un enfoque de diseño de software propuesto por Robert C. Martin (también conocido como Uncle
Bob) que tiene como objetivo crear sistemas de software más mantenibles, flexibles y escalables. La idea principal
detrás de la Clean Architecture es separar las preocupaciones del software en capas y componentes independientes,
permitiendo un mayor desacoplamiento y modularidad.

La Clean Architecture se basa en varios principios de diseño, como la inversión de dependencias, el principio de
responsabilidad única y el principio de segregación de interfaces. Estos principios ayudan a guiar la organización del
código y las relaciones entre los diferentes componentes del sistema.

### Principios fundamentales (SOLID)

1. **Principio de responsabilidad única (SRP):** Cada módulo, clase o función debe tener una única responsabilidad.
2. **Principio Abierto/Cerrado (OCP):** Los módulos, clases o funciones deben ser abiertos para la extensión, pero
   cerrados para la modificación.
3. **Principio de sustitución de Liskov (LSP):** Los objetos de una clase derivada deben poder sustituir a los objetos
   de la clase base sin afectar la corrección del programa.
4. **Principio de segregación de interfaces (ISP):** Los clientes no deben verse obligados a depender de interfaces que
   no utilizan.
5. **Principio de inversión de dependencias (DIP):** Los módulos de alto nivel no deben depender de los módulos de bajo
   nivel. Ambos deben depender de abstracciones.

### Capas de la Clean Architecture

La Clean Architecture se compone de varias capas concéntricas, cada una con responsabilidades específicas:

- **Capa de dominio (Domain):** Esta capa contiene la lógica de negocio principal y las reglas del dominio. Incluye
  entidades,
  objetos de valor y lógica de dominio. Las entidades son objetos que tienen una identidad única y representan conceptos
  clave del dominio del problema. Los objetos de valor son inmutables y se definen por sus atributos en lugar de una
  identidad única.

- **Capa de aplicación (Application):** Esta capa se encarga de coordinar y orquestar la lógica de negocio en casos de
  uso
  específicos. Los casos de uso representan acciones o flujos de trabajo que los usuarios pueden realizar en la
  aplicación. La capa de aplicación interactúa con la capa de dominio y la capa de infraestructura, pero no contiene
  lógica de negocio específica.

- **Capa de infraestructura (Infrastructure):** Esta capa proporciona implementaciones concretas de interfaces definidas
  en las capas de dominio y aplicación. Incluye la comunicación con sistemas externos, como APIs, Storage, Cámara, etc.
  La capa de infraestructura es responsable de la persistencia de datos, la gestión de conexiones y la
  implementación de detalles técnicos.

- **Capa de presentación (Presentation):** Esta capa es responsable de la interacción con el usuario y la representación
  visual de la aplicación. Incluye componentes de interfaz de usuario, como pantallas y componentes, así como
  la lógica de presentación, como la validación de formularios y la manipulación del estado de la interfaz de usuario.

<div style="text-align: center; margin-block: 3rem">
  <img src="./docs/template/ca_1.svg" width="50%" alt="Clean architecture" />
</div>

## Estructura del proyecto

Para los proyectos del BHD, vamos a tomar el enfoque de una `arquitectura hexagonal` (que está dentro de las Clean
Architectures) acompañada de `vertical slicing`.

### Vertical Slicing

Es un enfoque para organizar y estructurar el código de una aplicación en función de características o módulos, en lugar
de agruparlos por capas técnicas. Este enfoque tiene como objetivo facilitar la colaboración entre equipos y hacer que
el código sea más fácil de mantener y navegar.

Al aplicar el Vertical Slicing, cada característica o módulo tiene todos los archivos relacionados agrupados en una
carpeta. Esto incluye componentes, servicios, modelos y archivos de infraestructura relacionados con esa característica
específica. Como resultado, los equipos pueden trabajar en características individuales sin interferir con el trabajo de
otros equipos y mantener una estructura de proyecto más clara y coherente.

└── app
    ├── App.tsx
    ├── assets
    ├── core
    │   ├── Infrastructure
    │   │   ├── Contracts
    │   │   │   ├── Http.interface.ts
    │   │   │   ├── Methods.ts
    │   │   │   └── Storage.interface.ts
    │   │   ├── Http
    │   │   │   ├── Http.implementation.ts
    │   │   │   └── index.tsx
    │   │   └── Storage
    │   │       └── async
    │   │           ├── AsyncStorage.implementation.ts
    │   │           └── index.tsx
    │   └── Modules
    │       └── CreditCards
    │           ├── Applications
    │           │   └── UseCases
    │           │       ├── CreditCardUseCase.ts
    │           │       └── index.tsx
    │           └── Domain
    │               ├── Dtos
    │               │   └── CreditCard.dto.ts
    │               ├── Entities
    │               │   └── CreditCard.ts
    │               ├── Mappers
    │               │   └── DtoToCreditCard.ts
    │               └── Repository
    │                   └── CreditCard.repository.ts
    ├── screens
    │   ├── Auth
    │   │   ├── Login
    │   │   │   ├── Login.hook.ts
    │   │   │   ├── Login.presenter.tsx
    │   │   │   └── Login.style.ts
    │   │   ├── RecoverPassword
    │   │   │   ├── RecoverPassword.hook.ts
    │   │   │   ├── RecoverPassword.presenter.tsx
    │   │   │   └── RecoverPassword.style.ts
    │   │   ├── components
    │   │   │   ├── FormLogin
    │   │   │   │   ├── FormLogin.styles.ts
    │   │   │   │   └── index.tsx
    │   │   │   └── FormRecoverPassword
    │   │   │       ├── FormRecoverPassword.styles.ts
    │   │   │       └── index.tsx
    │   │   ├── hooks
    │   │   └── index.tsx
    │   └── Dashboard
    ├── shared
    │   ├── Components
    │   │   └── Button
    │   │       ├── Button.styles.ts
    │   │       └── index.tsx
    │   ├── Enums
    │   │   ├── Storage.enum.ts
    │   │   └── index.ts
    │   └── Helpers
    │       └── ZodValidator.ts
    └── tests-mocks