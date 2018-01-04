# Theme

## Installation

- ```yarn add @react.material/theme```

- ```npm install --save @react.material/theme```



### set your theme color (note: sass is not supported for now)

```
//index.js
import '@react.material/theme';
```

```
/*index.css*/

:root {
    --mdc-theme-primary: #9c27b0;
    --mdc-theme-primary-light: #000;
    --mdc-theme-primary-dark: #000;
    --mdc-theme-secondary: #000;
    --mdc-theme-secondary-light: #000;
    --mdc-theme-secondary-dark: #000;
    --mdc-theme-background: #000;
}

/*Checkbox ripple*/
.mdc-checkbox.theme::before, .mdc-checkbox.theme::after {
    background-color: rgba(158, 158, 158, 0.14);
}
```


you may refer [**here**](https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme#css-custom-properties) for more info
