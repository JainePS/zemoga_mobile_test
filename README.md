This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

### Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Installation Steps

1. Clone the repo
2. Install dependencies by running `yarn` inside the project folder

## Running the app

First, run the development server:

```bash
npm start
# or
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

## 🎉 Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## 📂 Project Structure

```
Root
├── __tests__     (react native generated)
├──android
├──ios
├── src/                (project source files)
│  |   ├── hooks       
│  |   ├── assets
│  |   ├── styles
│  |   ├── types
│  ├── components/
|      ├── atoms
|      ├── molecules
|      ├── organisms
|      ├── screens
|      ├── templates
│  ├── routes          (contains all the pages / routes)
│  |   ├── index.tsx   (decides the routes)    
│  └── index.ts

```
## 📋 Coding Standards

### Components

The components are separated into five(5) categories to further organize the project.

**screens** - The final screens that users interact with

**templates** - Templates define the layout and structure of a specific screen or view. They assemble organisms and molecules into a cohesive user interface.

**organisms** - Organisms are groups of molecules and atoms that form a complete functional section of your application. For instance, a login form with input fields, a button, and error messages.

**molecules** - Molecules are composed of one or more atoms and represent more complex UI elements such as password input and search bar.

**atoms** - This folder contains the smallest and most basic building blocks of the application, such as buttons, inputs. Atoms should be highly reusable and not contain any business logic.

### Screens/Components structure

- Use hooks: for state and lifecycle
- Separate the complex/stateful logic into the 'MyComponent.container.tsx' file
- Define template with minimal logic in 'MyComponent.view.tsx' file
- Define the props in your 'MyComponent.props.ts' file
- Put all styling on 'MyComponent.style.ts' file using styled components


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
