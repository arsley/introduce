/* eslint react/prop-types: 0 */

import Head from 'next/head';
import Heading from './components/Heading';
import BaseContent from './components/BaseContent';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

export default function Index({ timelineItems, links }) {
  return (
    <div>
      <Head>
        <title>Introduce | Aoshi Fujioka</title>
      </Head>

      <Heading
        caption="Introduce Aoshi Fujioka"
        comment="連弾 Cross第3版"
        imageName="top.jpg" isFullSize />
      <BaseContent heading="Intro">
        田舎から上京して高専生になり、田舎へ帰ってきて大学生になった。
        小さい頃からピアノをやっていて音楽が好き、小中学校の音楽の授業は嫌いじゃなかった、歌うのとか。
        学童に居た頃はほぼ毎日工作をしていた、小4の自由研究でスチールウールを溶かして賞をとった。
        ブラスバンド部で県大会まで出場した。
        中学校では合唱の伴奏も指揮者もやった、他は黒歴史になる。
        高専には「パソコンを使いこなして何かしたい」程度の意気込みで入った、山も谷もあったけど濃厚な人ばかりで楽しかった。
        4年次の文化祭と5年次のクリスマスに連弾を披露した、一生物の思い出になった。
      </BaseContent>

      <Heading caption="Biography" comment="Facebookより" imageName="me.jpg" />
      <Timeline timelineItems={timelineItems} />

      <Heading caption="Skills" comment="増える草(Contribution)" imageName="skillsample.png" needGrayBg />
      <BaseContent heading="Ruby">
        一番まともに利用できるであろう言語。
        後述のRuby on Railsを勉強する上で使うようになって、その過程で好きになった。
        この言語を通じてオブジェクト指向(クラスとかモジュールとか)について勉強できてとても良かった。
        今後は「とりあえず動くコード」から「綺麗なコード」を書けるように目指していきたい。
      </BaseContent>
      <BaseContent heading="Ruby on Rails">
        Rubyと並んでまともに利用できるであろうフレームワーク。
        主な開発はこれでするし、これを使うことがほぼほぼライフワークになりつつある。
        というかそうなると思う。
        今後はより実務での扱い方を学んでいければと思っている。
      </BaseContent>
      <BaseContent heading="GA (Genetic Algorithm)">
        高専での卒業研究で扱った技術、遺伝的アルゴリズム。
        問題に対してどうアプローチすれば解けるか、っていうことを考えさせてくれるような内容のことをやりたくて使った。
        卒業研究自体は、先行研究とした論文の手法を再現するだけで終わってしまったけれど、汎用性の高いアルゴリズムとして知識にできたので満足している。
        ぶっちゃけ研究は論文読んでプログラム書いてる時間が一番楽しかった。
      </BaseContent>
      <BaseContent heading="Crystal">
        研究で使ったプログラミング言語。
        画像を扱う内容だったので、Rubyだと時間が足りなくて乗り換え先として選んだ。
        C系を勉強し直すほど余裕はなかったので、Rubyとほぼ同等のパラダイムでかつコンパイルができるというメリットしかないものをとった。
        今思えば運命の巡り合わせのような奇跡だったと思う、普通ありえない。
        実行時間を考えないといけない場合には使うだろうけど、研究以来日の目を浴びてない。
      </BaseContent>
      <BaseContent heading="JavaScript (React)">
        Ruby, Railsでの開発をへてフロントの知識を学ぶ機会はあったし、その過程で色々なフレームワークに手を出した。
        結果として(市場的にも)Reactに落ち着いて、一応一通りのコードは書けるようになった。
        状態管理のReduxまで問題なく見れるけど、開発環境を立ち上げるまでが一番難しい言語だと思っている。
      </BaseContent>
      <BaseContent heading="Go">
        Web開発者として流行りものに乗っかって勉強したもの。
        実際にプロダクトを作れるレベルのコードは書けない(と思っている)けど、競プロとか型のある言語に触れたくなった時には使っている。
        そんな程度。
      </BaseContent>

      <Heading caption="Hobbies" comment="pizza mac" imageName="hobbies.png" needGrayBg />
      <BaseContent heading="Piano">
        気がついたら習っていた。
        クラシックとかを弾きこなして発表会にバンバン出る...ということはなかった。
        気に入った曲をやりこむタイプだからレパートリーは少ない。
        最近は練習できていない...
        連弾で弾いた曲はレ・フレールの「Cross 第3番」、同じ学科の友人と。
        <a href="https://www.youtube.com/watch?v=CsaKpgpheF4" target="_blank" rel="noreferrer">よろしければご閲覧ください。</a>
      </BaseContent>
      <BaseContent heading="Reading books">
        ときたま活字が読みたくなったりする、文学もある程度教養として知っておきたい。
        「去年の冬、きみと別れ」「物語シリーズ」
      </BaseContent>

      <Footer links={links} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      timelineItems: [
        { heading: 'Polytechnic', comment: '私立サレジオ高専情報工学科卒業', date: '2018-03-31' },
        { heading: 'College', comment: '信州大学工学部3年に編入学', date: '2018-04-01' },
        {
          heading: 'Intern on Donuts',
          comment: '株式会社Donutsサマーインターンシップ',
          date: '2018-09-03 2018-09-14',
        },
        {
          heading: 'Bug Shooting Challenge #1',
          comment: 'Bug Shooting Challenge #1に参加',
          date: '2018-11-18',
        },
        {
          heading: 'Shinshu Future App Contest',
          comment: '信州未来アプリコンテスト本戦 (KINC)',
          date: '2018-12-08',
        },
        {
          heading: 'Learning Kubernetes',
          comment: '株式会社CyberAgent にて2日間の勉強会に参加',
          date: '2018-12-xx',
        },
        {
          heading: 'LaravelJPCon Staff',
          comment: 'Laravel JP Conference にスタッフとして参加',
          date: '2019-02-16',
        },
        {
          heading: 'ICTSC2019',
          comment: 'ICTSCトラブルシューティングコンテスト2019本戦参加(kstm)',
          date: '2019-03-01 2019-03-02',
        },
        {
          heading: 'Intern on Nintendo',
          comment: '任天堂インターンシップ2020に参加 (5days)',
          date: '2019-09-xx',
        },
        {
          heading: 'Intern on Zeals',
          comment: '株式会社Zealsにて長期インターンシップに参加中',
          date: '2020-02-17',
        },
        {
          heading: 'Intern on Wantedly',
          comment: '株式会社WantedlyにてSummer Internに参加',
          date: '2020-09-14 2020-10-02',
        },
      ],
      links: [
        { name: 'GitHub', href: 'https://github.com/arsley' },
        { name: 'Qiita', href: 'https://qiita.com/arsley' },
        { name: 'Twitter', href: 'https://twitter.com/arsley_' },
        { name: 'Facebook', href: 'https://www.facebook.com/aoshi.fujioka' },
      ],
    },
  };
}
