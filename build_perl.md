# Perl環境の構築

## システムPerlとユーザPerl
- MacやLinuxなどの多くのシステムには最初からPerlが入っています。このPerlのことを **システムPerl** と呼ぶことがあります.
- もちろんシステムPerlをそのまま使っても良いのですが、今後モジュールを入れたりする際にシステムPerlの環境を汚すことを避けるために、自分専用のPerl環境 **ユーザPerl** を構築することが最近の主流です
- 今回はユーザPerl構築環境の一つ **plenv** を導入していきましょう

## システムPerlは使わないの？
- 最近のOSのシステムPerlのバージョンは新しいので、システムPerlで事足りる作業も多いです.
- 実はこのPerl入学式でも第5回目くらいまではシステムPerlで事足ります.
- ただ今後のことを考えてユーザPerlの構築を学んでいきましょう.
- Ubuntuでは`apt`によって、整合性のとれたシステムPerlへのPerlモジュール導入ができるので、`apt`で手に入るモジュールであれば、これでまかなうのもありでしょう.

## plenvの導入準備
    $ sudo apt-get install git curl build-essential ### Ubuntuのみ

- Ubuntuでは初期状態に`git`コマンドなどが入っていないので`apt-get`で導入します
- Macの場合は初期状態で入っている`git`コマンドが使えます
    - MacでPerl環境を構築するためのその他のコマンドは、先ほどのXcodeで完了しています

## plenvの導入
    $ curl -L http://is.gd/plenvsetup | sh

- ここでは, [@ytnobody](https://twitter.com/ytnobody) さんが作成した、[`plenv`簡単導入プログラム](http://yellowstore.blogspot.jp/2013/05/plenvrbenv.html)を使います.
- 上記のコマンドを打って下さい. しばらくかかるので気長に待ちましょう.
- 終わったら、`exit` して端末を開き直すか、`source ~/.bashrc`を実行してシェルの設定を読み直してください。

- `plenv` と打って、ヘルプが出たら成功です. `which plenv` などとして、`plenv` コマンドの場所を確認してみましょう.
- 簡単インストールコマンド詳細を確認したい方は `curl -L http://is.gd/plenvsetup | less` など打ってみましょう.

## plenvでのperlの導入
    $ plenv install 5.18.2

- 今回は2014年4月時点での最新の安定版 `perl-5.18.2` を導入します.
- これも時間がかかるので気長に待ちましょう.

## plenvでのperlの導入
    $ plenv versions 
    * system (set by /home/username/.plenv/version)
      5.18.2

- `plenv versions` で, 導入したPerl の一覧が見られます. `*` が付いているのが現在選択されているperlで, `plenv` 導入直前はシステムPerlが選択されているはずです.

## plenvでのperlの導入
    $ plenv global 5.18.2
    $ plenv versions
      system
    * 5.18.2 (set by /home/username/.plenv/version)

- `plenv global` コマンドで, 使うperlを切り替えることができます.

## 現在有効なperlの確認
    $ plenv version
    $ 5.18.2 (set by /home/ogata/.plenv/version)

- `plenv version` コマンドの他に、`perl -v` として実際にパスが通っている `perl` コマンドのバージョン情報を見るのが確実でしょう.

## 現在有効なperlの確認
    $ perl -v
    his is perl 5, version 18, subversion 2 (v5.18.2) built for darwin-2level
    (以下略)

- 今後は原則的に, `plenv`で作成したユーザPerlを使っていきます.

## plenv その他
- `plenv global system` と打つと, 現在のPerlをシステムPerlに戻すことができます.
- `plenv` とだけ打つと, 使えるコマンドの一部の説明が出力されます.
- 局所的な場所だけ違うバージョンのPerlを使う `plenv local` というものもありますが, 今回は `plenv global` だけ使います.

## モジュールとCPAN
    $ plenv install-cpanm

- 複雑な処理などを肩代わりしてくれる外部プログラムである**モジュール**がPerlには豊富に用意されています
- Perlのモジュールは**CPAN**(シーパン)という場所に集められていて, 誰もが自由に使うことができます.
- インストールはネットワーク経由で行うことができ, そのためのコマンド`cpanm`が用意されています.
- 上記コマンドで`plenv`から`cpanm`を導入することが出来るので, やってみましょう.

## モジュールを活用していこう
- Perlには最初から搭載されて使用できるモジュールも存在して, コアモジュールと呼ばれます
- `cpanm`コマンドを使って, CPANから外部モジュールを入れることも簡単にできます
- 多くのモジュールを組み合わせて活用すれば, 様々な複雑な処理や自分一人では書ききれない処理を簡単に書くことができます.

## ワンライナー

    $ perl -E 'say "Hello World!";'
    Hello World!
    $ perl -E 'say 12+23;'
    35

- `perl` コマンドでは `-e` もしくは `-E` の後に直接プログラムを書いて実行することができます.
    - この他に `-M` オプションを使うことでモジュールを使う(`use` する)ことができます

## ワンライナーとモジュール

    $ perl -MTerm::ANSIColor -E 'say colored("Hello World!", "bold blue");'

- `Term::ANSIColor` モジュールを使って文字を色付きで表示させてみましょう.
    - `Term::ANSIColor` はコアモジュールなので, どこでも使うことができます.

## perldocとドキュメント    
    $ perldoc Term::ANSIColor

- 使い方は `perldoc Term::ANSIColor` と打つと読めます (英語ですが). `colored` というサブルーチンが使えることがここでわかります.
- モジュールには使い方のドキュメントがついていて、`perldoc` コマンドで読むことができます.
- 実際にエディタを使ってPerlプログラムを書いていく際は, これらのモジュールを `use` を使って読み出します.

## FizzBuzz問題とAcme
- `Acme::FizzBuzz` というモジュールを使って, FizzBuzz問題を自動で解いてみましょう.
- FizzBuzz問題とは, 数字が3で割り切れたらFizzを, 数字が5で割り切れたらBuzzを, 数字が3でも5でも割り切れたらFizzBuzzを, そうでなければ数字を出力するプログラムのことです.
- `Acme` というのは, CPANにおいてジョークなモジュールの為に用意された名前空間です.
- ルーニー･テューンズのロードランナーの中に出てくる, コヨーテに怪しい商品を売るAcme社から来ている... らしい.

## モジュールをインストールしてみよう

    $ cpanm Acme::FizzBuzz
    $ perl -MAcme::FizzBuzz -E ''

- インストールが完了したら、あとはこのモジュールを読み込むだけでFizzBuzz問題を解決してくれます.

## PerlとモジュールとCPANの世界
- CPANには, ジョークのようなモジュールから, ウェブプログラミングを支援するためのモジュール, TwitterやFacebookなどにアクセスして情報を取得するためのモジュールなど, ありとあらゆるものがあります.
- あなたの趣味や仕事を助けてくれるモジュールがきっとあるはずです. CPANを検索して自分が必要な処理を肩代わりするモジュールを使うことができるレベルまで, まずは少しずつPerlを勉強していきましょう.
