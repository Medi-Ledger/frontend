import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mediledger",
  description: "Blockchain Based Medical Record Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
