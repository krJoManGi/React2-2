import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar'


export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
              
              {/* 메인 */}
              <main>{children}</main>

              {/* 클릭시 이동되는 버튼 */}
              <Navbar />

            </body>
        </html>
    );
}
