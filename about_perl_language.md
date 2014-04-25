# Perlという言語について

## Perlって何?
<img src="image/larry.jpg" align='right'>

- 1987年, Larry Wall(右写真)が開発したプログラミング言語.
    - Ruby, Python, PHPと並ぶLL言語(Lightweight Language)の一種.
    - C言語やsed(せど), awk(おーく)の影響を受けた動的型付け言語.
    - 後のRubyやPHPに影響を与えた.
    - ｢Perl｣は言語そのもの, ｢perl｣はその処理系を示す.

## Perlの特徴
- [Wikipediaの記事](http://ja.wikipedia.org/wiki/Perl)から重要なものだけ引用...
    - 強力な文字列処理. 正規表現をサポート.
    - 日本語をはじめとして世界中の言語を処理可能.
    - 自由度の高い文法. 簡潔にプログラムを記述できる.
    - 高い後方互換性を持つ.
    - 数多くのオペレーティングシステムで利用可能.
    - プログラムの実行には事前コンパイルは不要.
    - 有志によって開発された豊富なモジュール.

## TMTOWTDI
- Perlのスローガン. ｢ティムトゥーディー｣と読む.
    - "There's more than one way to do it."
    - ｢やり方はひとつじゃない｣.
- Larryは｢プログラミング言語は, いろんな対象をシンプルに記述する為にある程度複雑でなければならない｣と信じている.
    - Perlは, 同じ意味を持つ処理をいろいろな書き方で表すことができる.

## 簡潔にプログラムを記述できる
    my $number = 123;
    my $string = 'perl';
    print $string . $numbrer . "\n";

- 動的型付け言語なので変数に型は存在しない.
    - `my`というのはスコープの違いを示す. これは明示的に指示する必要がある.
- C言語やJavaのような, 型のキャストなどは必要ない.
- よって, このように数値を格納した変数`$number`と, 文字列を格納した変数`$string`を直接文字列として結合(`.`演算子によって)できる.

## 高い後方互換性
- Perlのバージョンアップによって昔のスクリプトが動かなくなる, ということはほとんどない.
- もちろん, Perlもバージョンアップによる細かい機能変更はある.
    - しかし, 基本的な処理については後方互換性が相当繊細なまでに維持されている.

## Perl5 のバージョンの歴史
- Perl4以前は前史として, 既に周囲に環境が存在しないと思って良い.
- Perl5.00x(xは数字)というバージョンでPerl5が登場. 1994年.
- Perl5.6が登場. 2000年. この頃からインターネットやウェブというものが徐々に一般に普及していく.
- Perl5.8が登場. 2002年. 国際化対応や今につながる様々な機能が搭載される. 5.8時代が長かったため, 多くの企業等に長きにわたって使われ続けた.
- Perl5.10が登場. 2007年. 後方互換性を損ねない構文拡張等を行う.
- Perl5.12が登場. 2010年.
- Perl5.14が登場. 2011年.
- Perl5.16が登場. 2012年.
- Perl5.18が登場. 2013年. 2014年4月現在の最新の安定版. この講義もPerl5.18を使用.

## Perl5 のバージョンの歴史
- 5.(偶数) が安定版. 5.(奇数) が開発版.
- 基本的に最新版の一つ手前の安定版までがサポート対象.
- Perl5.8時代が長かったので, 今もPerl5.8が生き残っている現場はあるものの, 今ならPerl5.10以降だけを考えれば良い.
- Perl5.10以降から5.18まで, Perl初学者にとって大きな違いはあまりない.

## 様々な環境で使用可能
- Linuxのほとんどのディストリビューションで標準装備となっている.
    - システムを管理する多くのツールがPerlで書かれている為.
- Pythonもほとんどのディストリビューションで標準装備.
    - 但しほとんどがPython2.
- Rubyを標準で装備するディストリビューションはまだ少ない.
    - Macは標準装備, Mountain Lionは1.8, Mavericksは2.0.

## 豊富なモジュール
- CPANと呼ばれるアーカイブに, 全世界のPerl Mongerがモジュールを投稿している.
    - Perl Monger ... Perl使いのこと. RubyにおけるRubyist, PythonにおけるPythonistaと同義.
- 例: Encode ... 文字列のエンコードを処理するモジュール.
- 例: Net::Twitter ... TwitterのAPIを操作するモジュール.
- 例: DBD::SQLite ... Perlから, SQLiteのデータベースを操作するモジュール.

## 余談: Perl6について
- Perl5とは別に, Perl6も開発されている.
    - 当初はPerl5の後継となるはずだったが, 後に｢Perl5とは別に開発を進める｣と公式に発表された.
    - よって, Perl5の開発は継続される.
    - また, 現在ではPerl6はPerl5とは別の言語とみなされている, と解説されることもあるほど互換性は無い. これはPerl5のバージョン間での互換性が最大限に保たれていることの裏返しでもある.
    - 現在の最新版は5.18.2, バージョンを確認する `perl -v` では, Perl5のバージョン18.2と表記される.

## Perlのコミュニティ
- 世界各地にPerl Monger(PM)のコミュニティが存在する.
    - 地域のPerl Mongrerコミュニティは, (地名).pmを名乗ることが多い.
    - 日本でも, 十数個のコミュニティ, 勉強会が開催されている.

## 地域コミュニティ
- pm.orgに登録されている, 公認のコミュニティ.
    - Hokkaido.pm, Kushiro.pm, Sendai.pm, Niigata.pm, Tokyo.pm, Shibuya.pm, Yokohama.pm, Kamakura.pm, Nagoya.pm, Kansai.pm, Kyoto.pm, Fukuoka.pm
- 非公認のコミュニティ
    - Hachioji.pm, Namba.pm, ...
- 勉強会/イベント
    - Hokkaido.pm Casual, Perl Casual, Perl Beginners, Perl入学式, ...

## YAPC::Asia Tokyo
- YAPC ... Yet Another Perl Conference
    - 年に一度行われる, 日本最大規模のPerlの祭典.
- 今年は8月28日から30日の3日間開催. [YAPC::Asia Tokyo 2014](http://yapcasia.org/2014/).
    - ｢There is more than one way to enjoy it!｣.

## Perlを使っている会社
- LINE, DeNA, Seesaa, はてな, カヤック, mixi, Mobile Factory, FreakOut, GaiaXなどもPerlを活用しており, 優秀なPerl Mongerが数多く所属している.
- 過去のYAPC::Asia Tokyoにスポンサーしていた会社はPerlを最大限に活用している, もしくは一部使っているか, Perlに対して興味を持っている.
- Perlを使ったサービスとしては, はてなの｢はてなダイアリー｣やLINEの｢ライブドアブログ｣, オモロキの｢ボケて｣などが有名.

## PerlとCGI
- 一時期, ｢PerlでWebサービスを作るならCGI｣という時代がありましたが, 今はそうではありません.
- 最近は, PSGI(Perl Web Server Gateway Interface)という仕様に対応したWAF(Web Application Framework)を使っての開発が増えています.
    - 2014年現在, Perlの代表的かつ新規採用されやすいWAFとしては, MojoliciousやAmon2などがあります.
- Perl入学式は｢モダンなPerlを教える｣という方針を取っていますので, CGIについては触れません.
