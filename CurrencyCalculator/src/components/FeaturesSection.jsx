import {
  FaGlobe,
  FaChartLine,
  FaCreditCard,
  FaFileInvoice,
} from "react-icons/fa"; // Import icons

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="text-white w-full flex flex-col items-start gap-6">
      {/* Feature 1 */}
      <div className="flex items-start gap-3">
        <FaGlobe className="text-3xl" />
        <div>
          <h3 className="font-semibold text-xl"> Real-Time Exchange Rates</h3>
          <p className="text-lg">
            Access accurate rates from over 100+ currencies in real time.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      {/* <div className="flex items-start gap-3">
        <FaChartLine className="text-3xl" />
        <div>
          <h3 className="font-semibold text-xl"> Historical Data & Trends</h3>
          <p className="text-lg">
            Track currency trends with interactive charts and graphs.
          </p>
        </div>
      </div> */}

      {/* Feature 3 */}
      <div className="flex items-start gap-3">
        <FaCreditCard className="text-3xl" />
        <div>
          <h3 className="font-semibold text-xl">Multi-Currency Conversion</h3>
          <p className="text-lg">
            Convert multiple currencies at once with one tap.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start gap-3">
        <FaFileInvoice className="text-3xl" />
        <div>
          <h3 className="font-semibold text-xl">Expense Tracking</h3>
          <p className="text-lg">
            Convert your travel expenses effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
