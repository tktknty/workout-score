## Project setup

### yarn + expo-cli install

```
sudo npm i -g yarn
sudo npm i -g expo-cli
```

### expo init

```
expo init app-name
```

### Redux Toolkit

```
cd app-name
yarn add @reduxjs/toolkit
yarn add react-redux
```

### prettier の設定 : settings で Require Config + Format On Save にチェック

```
touch .prettierrc
```

```
{
 "singleQuote": true,
 "trailingComma": "all"
}
```

### React native navigation

```
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
yarn add react-native-gesture-handler
yarn add react-native-elements
```
