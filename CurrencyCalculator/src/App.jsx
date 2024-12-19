import { useState } from "react";
import useCurrencyRate from "./hooks/useCurrencyRate.js";
import InputBox from "./components/InputBox.jsx";
import HeroSection from "./components/HeroSection.jsx";
// import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyInfo, error] = useCurrencyRate(from);

  const currencyOptions = Object.keys(currencyInfo) || [];

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(1);
    setConvertedAmount(0);
    // calculateAmount();
  };
  const calculateAmount = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div>
      <HeroSection />
      <div
        id="converterSection"
        className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-vector/various-foreign-currencies-signs-seamless-pattern-background-various-currency-symbols_153454-4055.jpg?w=740')`,
          // backgroundImage: `url('https://img.freepik.com/free-vector/dollar-sign-pattern-background_23-2150979310.jpg?semt=ais_hybrid')`,
          // backgroundImage: `url('https://media.istockphoto.com/id/1368169112/vector/money-green-seamless-pattern-vector-background-included-line-icons-as-piggy-bank-wallet.jpg?s=612x612&w=0&k=20&c=qjIUpnUPtiKGBgLnXGLQ_4qQUq36OvP82DIFTAdch70=')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            {error && (
              <div className="text-red-600 text-center mb-4">
                Error: {error.message}
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(a) => {
                    setAmount(a);
                  }}
                  currencyOptions={currencyOptions}
                  selectedCurrency={from}
                  onCurrencyChange={(a) => {
                    setFrom(a);
                  }}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  // onAmountChange={(a) => {
                  //   setAmount(a);
                  // }}
                  currencyOptions={currencyOptions}
                  selectedCurrency={to}
                  onCurrencyChange={(a) => {
                    setTo(a);
                  }}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={calculateAmount}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
