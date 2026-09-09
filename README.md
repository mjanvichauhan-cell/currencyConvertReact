# 💱 Currency Converter

A simple and responsive Currency Converter built using React.js and Tailwind CSS.

This application allows users to enter an amount, select a source currency and a target currency, and convert the amount using exchange rates fetched from an API.

## 🚀 Features

- 💰 Convert between different currencies
- 🔄 Swap From and To currencies
- 🔽 Dynamic currency dropdowns
- 📊 Fetch currency exchange rates from an API
- ⚡ Built with React Hooks
- 🎨 Responsive UI using Tailwind CSS
- 📱 Mobile-friendly design
- 🧩 Reusable InputBox component
- 🔌 Custom useCurrencyInfo hook

## 🛠️ Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- Vite
- HTML5
- CSS3
- Currency API

## 📂 Project Structure

```text
currencyConverter/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Index.js
│   │   └── InputBox.jsx
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Components
InputBox

InputBox is a reusable component used for both currency input sections.

It handles:

- Amount input
- Currency selection
- Currency options
- Input disabling
- Currency dropdown
- User input changes

The component receives data through props such as:

- label
- amount
- onAmountChange
- onCurrencyChange
- currencyOptions
- selectCurrency
- amountDisable
- currencyDisable

## App

App.jsx is the main component of the application.

It manages:

- Amount
- From currency
- To currency
- Converted amount
- Currency swapping
- Currency conversion
- 🔌 Custom Hook
- useCurrencyInfo

**useCurrencyInfo.js is a custom React Hook created to fetch currency exchange-rate data from the API.**

It uses:

- useState
- useEffect
- Fetch API

The currency data is then used to create the currency dropdown options and perform the conversion.

## 📡 API

The project uses the Currency API to fetch exchange rates.

Example API endpoint:

https://latest.currency-api.pages.dev/v1/currencies/usd.json

The API returns exchange-rate information for the selected currency.

## 🎨 Styling

The application uses Tailwind CSS for styling.

- Responsive layouts
- Buttons
- Input boxes
- Currency dropdowns
- Background image
- Spacing and alignment

## ⚛️ React Concepts Used
- useState:Used to store and update application data.
- useEffect:Used to fetch currency data whenever the selected currency changes.
- useId:Used in InputBox to create a unique ID for the input and label.
- Props:Props are used to pass data and functions from App.jsx to InputBox.jsx.
- Custom Hooks:The useCurrencyInfo custom Hook separates API-related logic from the main application component.

## 👨‍💻 Author

Janvi chauhan

⭐ Support

If you like this project, please give it a ⭐ on GitHub.

Made with ❤️ using React.js and Tailwind CSS.
