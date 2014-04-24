# Perl環境の構築

## システムPerlとユーザPerl
- MacやLinuxなどの多くのシステムには最初からPerlが入っています。このPerlのことを **システムPerl** と呼ぶことがあります.
- システムPerlをそのまま使っても良いのですが、今後モジュールを入れたりする際にシステムPerlの環境に手を入れることになって環境を汚すことを避けるために、自分専用のPerl環境 **ユーザPerl** を構築することが最近の主流です
- 今回はユーザPerl構築環境の一つ **plenv** を導入していきましょう

## システムPerlは使わないの？
- 最近のOSのシステムPerlのバージョンは新しいので、システムPerlで事足りる作業も多いです.
- 実はこのPerl入学式でも第5回目まではシステムPerlで事足ります.
- ただ今後のことを考えてユーザPerlの構築を学んでいきましょう.
- Ubuntuでは`apt`によって、整合性のとれたシステムPerlへのモジュール導入ができるので、`apt`で手に入るモジュールであれば、これでまかなうのもありでしょう.

## plenvの導入準備
- Ubuntuには初期状態では`git`コマンドなどが入っていないので`apt-get`で導入します

    $ sudo apt-get install git curl build-essentials ### Ubuntuのみ

- Macの場合は初期状態で入っている`git`コマンドが使えます
- Perl環境を構築するためのその他のコマンドは、先ほどのXcodeで完了しました

## plenvの導入

- @[ytnobody](https://twitter.com/ytnobody) さんが作成した、[`plenv`簡単導入プログラム](http://yellowstore.blogspot.jp/2013/05/plenvrbenv.html)を使います.
- 以下のコマンドを打って下さい. しばらくかかるので気長に待ちましょう.

    $ curl -L http://is.gd/plenvsetup | sh

- `plenv` と打って、ヘルプが出たら成功です
- コマンド詳細を確認したい方は `curl -L http://is.gd/plenvsetup | less` など打ってみましょう.

## plenvでのperlの導入
- 今回は2014年4月時点での最新の安定版 `perl-5.18.2` を導入します.
- これも時間がかかるので気長に待ちましょう.

    $ plenv install 5.18.2


