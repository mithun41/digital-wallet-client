// App.jsx
import { Link } from "react-router";
import {
  FaBolt,
  FaWifi,
  FaTicketAlt,
  FaShieldAlt,
  FaStore,
  FaMobileAlt,
  FaFileInvoice,
  FaEllipsisH,
} from "react-icons/fa";

const PaymentCard = () => {
  const payments = [
    {
      name: "Electricity",
      icon: <FaBolt className="text-yellow-500 text-2xl" />,
      path: "/electricity",
    },
    {
      name: "Internet",
      icon: <FaWifi className="text-red-500 text-2xl" />,
      path: "/internet",
    },
    {
      name: "Voucher",
      icon: <FaTicketAlt className="text-green-500 text-2xl" />,
      path: "/voucher",
    },
    {
      name: "Assurance",
      icon: <FaShieldAlt className="text-red-400 text-2xl" />,
      path: "/assurance",
    },
    {
      name: "Merchant",
      icon: <FaStore className="text-green-600 text-2xl" />,
      path: "/merchant",
    },
    {
      name: "Mobile Credit",
      icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
      path: "/mobile-credit",
    },
    {
      name: "Bill",
      icon: <FaFileInvoice className="text-orange-400 text-2xl" />,
      path: "/bill",
    },
    {
      name: "More",
      icon: <FaEllipsisH className="text-green-500 text-2xl" />,
      path: "/more",
    },
  ];

  return (
    <div className="w-10/12  mx-auto  p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Payment List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {payments.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex flex-col items-center justify-center bg-base-100 rounded-lg p-3 hover:scale-105 text-primary shadow-2xl transition"
          >
            {item.icon}
            <span className="text-sm mt-2 text-center">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PaymentList />} />
//         <Route path="/electricity" element={<h1>Electricity Page</h1>} />
//         <Route path="/internet" element={<h1>Internet Page</h1>} />
//         <Route path="/voucher" element={<h1>Voucher Page</h1>} />
//         <Route path="/assurance" element={<h1>Assurance Page</h1>} />
//         <Route path="/merchant" element={<h1>Merchant Page</h1>} />
//         <Route path="/mobile-credit" element={<h1>Mobile Credit Page</h1>} />
//         <Route path="/bill" element={<h1>Bill Page</h1>} />
//         <Route path="/more" element={<h1>More Services</h1>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
