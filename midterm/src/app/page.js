import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* 이름 출력 */}
      <h1>조만기</h1>
      
      {/* 학번 출력 */}
      <h1>202030133</h1>

      {/* 경로 출력 */}
      <h1>src/app/page.js</h1>
    </div>
  );
}
