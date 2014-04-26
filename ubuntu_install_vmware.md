# Ubuntu環境の<br>構築

<center>
〜VMware〜
</center>

## VMware
- 各ハードウェアで動作するOS上に仮想マシンを作成, 実行するソフトウェアです.
- x86プロセッサをエミュレートするので, このアーキテクチャに対応するOSなら, どんなOSでも動かすことができます.

## VMware Player
- 今回は, Windows/Linux環境で無料で利用可能な "VMware Player 5.0.2"を導入します.
- [https://my.vmware.com/web/vmware/downloads](https://my.vmware.com/web/vmware/downloads)
    - こちらのページからダウンロードできます(`VMware Player`を選択し, `VMware Player for Windows 32-bit and 64-bit`をダウンロードして下さい.)

## その1
- ダウンロードしたexeファイルをダブルクリックします.

![その1](public/image/image1.png)

## その2
- '次へ(N) >'をクリックします.

![その2](public/image/image2.png)

## その3
- "変更(C) ..."で, VMwareのインストール先を変更できます.
- 問題なければ, "次へ(N) >"をクリックします.

![その3](public/image/image3.png)

## その4
- VMwareの起動時に最新版の存在を確認しない場合, チェックボックスを外します.
- 問題なければ, "次へ(N) >"をクリックします.

![その4](public/image/image4.png)

## その5
- 問題なければ, "次へ(N) >"をクリックします.
- チェックボックスは外しても構いません.

![その5](public/image/image5.png)

## その6
- 初期状態では, VMwareのショートカットがデスクトップとスタートメニューのプログラムフォルダに生成されます.
- 問題なければ, "次へ(N) >"をクリックします.

![その6](public/image/image6.png)

## その7
- "続行(C)"をクリックします.
    - VMwareのインストールが開始します.

![その7](public/image/image7.png)

## その8
- インストールが終わるまで, しばらく待ちます.

![その8](public/image/image8.png)

## その9
- "完了 (F)"をクリックします.

![その9](public/image/image9.png)

## その10
- ｢その6｣でデスクトップにショートカットを生成する設定にした場合, デスクトップに次のようなアイコンが生成されているはずです.<br>
- VMwareのインストールはこれで完了です.
    - お疲れ様でした!

![その10](public/image/image10.png)

## 確認
- UbuntuのISOがダウンロードできているか確認します.

![確認](public/image/image1.png)

## 仮想マシンの作成 その1
- まず, VMwareで仮想マシンを作成します.
- 先ほどインストールしたVMwareを起動します.

![アイコン](public/image/image10.png)

## 仮想マシンの作成 その2
- このようなウインドウが表示した場合, 使用許諾契約書を確認した上で, "使用許諾契約の条項に同意します (A)"を選択した上で"OK"をクリックします.

![仮想マシンの作成その2](public/image/image11.png)

## 仮想マシンの作成 その3
- このようなウインドウが表示した場合, "後で通知する (R)"をクリックします.<br>

![仮想マシンの作成その3](public/image/image12.png)

## 仮想マシンの作成 その4
- 画面右側メニューの"新規仮想マシンの作成 (N)"をクリックします.<br>

![仮想マシンの作成その4](public/image/image13.png)

## 仮想マシンの作成 その5
- "後でOSをインストール (S)"を選択し, "次へ(N) >"をクリックします.<br>

![仮想マシンの作成その5](public/image/image14.png)

## 仮想マシンの作成 その6
- ゲストOSを"Linux", バージョンを"Ubuntu"にして, "次へ(N) >"をクリックします.<br>

![仮想マシンの作成その6](public/image/image15.png)

## 仮想マシンの作成 その7
- 仮想マシンの名前と場所を設定します.
- 問題なければ, "次へ(N) >"をクリックします.<br>

![仮想マシンの作成その7](public/image/image16.png)

## 仮想マシンの作成 その8
- 仮想マシンのディスク容量を設定します.
- 問題なければ, "次へ(N) >"をクリックします.<br>

![仮想マシンの作成その8](public/image/image17.png)

## 仮想マシンの作成 その9
- "ハードウェアをカスタマイズ(C) ..."をクリックします.<br>

![仮想マシンの作成その9](public/image/image18.png)

## 仮想マシンの作成 その10
- 左側の"ディスプレイ"を選択し, 右側の"3Dグラフィックスのアクセラレーション(3)"のチェックを外し, "閉じる"をクリックします.<br>

![仮想マシンの作成その10](public/image/image19.png)

## 仮想マシンの作成 その11
- "完了"をクリックします.<br>

![仮想マシンの作成その11](public/image/image18.png)

## 仮想マシンの作成 その12
- 左側"ホーム"の下に"Ubuntu"ができていれば, 仮想マシンの生成は完了です.

![仮想マシンの作成その12](public/image/image20.png)

## Ubuntuの導入 その1
- 用意した仮想マシンにUbuntuをインストールします.
- "Ubuntu"を選択し, "仮想マシンの再生(L)"をクリックします.<br>

![Ubuntuの導入その1](public/image/image20.png)

## Ubuntuの導入 その2
- 次のようなウインドウが表示した場合, "ダウンロードしてインストール(D)"をクリックします.<br>

![Ubuntuの導入その2](public/image/image21.png)

## Ubuntuの導入 その3
- 下側の"CD/DVDの設定を変更"をクリックします.

![Ubuntuの導入その3](public/image/image22.png)

## Ubuntuの導入 その4
- "ISOイメージファイルを使用する(M)"をチェックし, "参照(B) ..."をクリックします.<br>

![Ubuntuの導入その4](public/image/image23.png)

## Ubuntuの導入 その5
- ダウンロードした, UbuntuのISOファイルを選択し, "開く(O)"をクリックします.<br>

![Ubuntuの導入その5](public/image/image24.png)

## Ubuntuの導入 その6
- "OK"をクリックします.<br>

![Ubuntuの導入その6](public/image/image25.png)

## Ubuntuの導入 その7
- 下側の"仮想マシンを再起動"をクリックします.

![Ubuntuの導入その7](public/image/image26.png)

## Ubuntuの導入 その8
- Ubuntuが起動します.<br>

![Ubuntuの導入その8](public/image/image27.png)

## Ubuntuの導入 その9
- "Ubuntuをインストール"をクリックします.

![Ubuntuの導入その9](public/image/image28.png)

## Ubuntuの導入 その10
- "続ける"をクリックします.

![Ubuntuの導入その10](public/image/image29.png)

## Ubuntuの導入 その11
- "ディスクを削除してUbuntuをインストール"をチェックした状態で"続ける"をクリックします.
    - ここでの"ディスク"は仮想マシンのディスクです.

![Ubuntuの導入その11](public/image/image30.png)

## Ubuntuの導入 その12
- ディスクの削除が行われ, 終了し次第Ubuntuのインストールが始まります.<br>

![Ubuntuの導入その12](public/image/image31.png)

## Ubuntuの導入 その13
- "続ける"をクリックします.

![Ubuntuの導入その13](public/image/image32.png)

## Ubuntuの導入 その14
- キーボードレイアウトを設定します.
- 問題なければ, "続ける"をクリックします.<br>

![Ubuntuの導入その14](public/image/image33.png)

## Ubuntuの導入 その15
- ユーザ名とPCの名前, パスワードを設定します.

![Ubuntuの導入その15](public/image/image34.png)

## Ubuntuの導入 その16
- 設定に問題なければ, "続ける"をクリックします.<br>

![Ubuntuの導入その16](public/image/image35.png)

## Ubuntuの導入 その17
- インストールの完了を待ちます.<br>

![Ubuntuの導入その17](public/image/image36.png)

## Ubuntuの導入 その18
- "今すぐ再起動する"をクリックします.

![Ubuntuの導入その18](public/image/image37.png)

## Ubuntuの導入 その19
- 再起動をすると, ログイン画面が表示されます.

![Ubuntuの導入その19](public/image/image38.png)

## Ubuntuの導入 その20
- パスワードを入力し, パスワード入力欄右側の">"をクリックします.<br>

![Ubuntuの導入その20](public/image/image39.png)

## Ubuntuの導入 その21
- 問題なくログインできれば, Ubuntuのインストールは完了です.<br>
    - お疲れ様でした!

![Ubuntuの導入その21](public/image/image40.png)

