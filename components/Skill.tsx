export const Skill = () => {
  return (
    <section>
      <h2 className="text-6xl font-bold text-dark mb-8">Skill</h2>
      <p className="text-darkgray mb-8">
        細かい職務経歴は
        <a
          href="https://github.com/flyhighair/Curriculum-Vitae"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          こちら
        </a>
        をご覧ください。
      </p>
      <h3 className="text-dark text-2xl font-bold mb-4">強み</h3>
      <ul className="text-darkgray leading-8 list-disc pl-5 mb-8">
        <li>
          クラウド環境の運用からフロントエンド・サーバーサイドまで一通りの開発経験があります。
        </li>
        <li>
          複数プロジェクトを1人で並行開発した経験や、プロジェクト開発と情シスの兼任など並行タスクの処理能力があります。
        </li>
        <li>興味を持った技術は躊躇せず、実際に触るようにしています。</li>
      </ul>
      <h3 className="text-dark text-2xl font-bold mb-4">
        1年以上の実務経験がある技術
      </h3>
      <ul className="text-darkgray list-disc pl-5 mb-8 leading-8 grid grid-cols-2">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>Git</li>
        <li>Docker</li>
        <li>TypeScript</li>
        <li>Ruby</li>
        <li>Ruby on Rails</li>
        <li>MySQL</li>
        <li>AWS</li>
        <li>CircleCI</li>
      </ul>
      <h3 className="text-dark text-2xl font-bold mb-4">
        半年以上の実務経験がある技術
      </h3>
      <ul className="text-darkgray list-disc pl-5 mb-8 leading-8 grid grid-cols-2">
        <li>Angular</li>
        <li>Java</li>
        <li>Microsoft Azure</li>
        <li>React</li>
        <li>Node.js</li>
        <li>jQuery</li>
        <li>Redis</li>
      </ul>
      <h3 className="text-dark text-2xl font-bold mb-4">
        趣味で学習・使用中の技術
      </h3>
      <ul className="text-darkgray list-disc pl-5 mb-8 leading-8 grid grid-cols-2">
        <li>Vue.js</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>Go</li>
        <li>Rust</li>
        <li>GCP</li>
        <li>GraphQL</li>
        <li>Tailwind CSS</li>
        <li>NestJS</li>
        <li>Vite</li>
        <li>Kotlin</li>
        <li>Firebase</li>
        <li>GitHub Actions</li>
      </ul>
    </section>
  );
};
