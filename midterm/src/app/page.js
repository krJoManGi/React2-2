import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* 이름 출력 */}
      <div>조만기</div>
      
      {/* 학번 출력 */}
      <div>202030133</div>

      {/* 경로 출력 */}
      <div>src/app/page.js</div>
    </div>
  );
}
