# Ubuntu環境の構築
<center>
〜Windowsユーザ向け〜
</center>

## Ubuntuとは?
- Canonicalの支援で開発されている, Linuxディストリビューションの1つです.
    - Linux Mintなど, Ubuntuをベースとしたディストリビューションも数多く存在します.
- 比較的, 初心者向けのディストリビューションと呼ばれています.
    - 国内外を問わず, 多くのユーザがUbuntuを利用しています.

## 2種類の方法
- 今回, Perl入学式では｢VMwareを利用する方法｣と｢Bootable USBを利用する方法｣の2種類を紹介します.
    - ｢VMware｣は初心者向け, ｢Bootable USB｣は中級者〜向けの方法と考えています.    
- 今回は, 両方の方法について説明を行いますので, これから説明する各方法のメリット/デメリットを考慮して, どちらの方法を採用するか決定してください.
    - 悩んだ場合, よくわからない場合は, 安全側に倒して｢VMwareを利用する方法｣を選ぶことをおすすめします.

## ｢VMware｣のメリット / デメリット
- メリット
    - Ubuntu環境を構築する為にメモリを用意する必要がありません.
    - これから説明する手順どおりに作業を行えば, 時間は多少かかるもののUbuntu環境を構築することができます.
    - VMwareで構築する仮想マシン(VM)上にUbuntuをインストールするので, 仮想マシンからWindowsに致命的な影響を与えにくいです.
## ｢VMware｣のメリット / デメリット
- デメリット
    - Windowsの上でUbuntuを動かしますので, Ubuntuが動く仮想マシンが利用できる演算資源(メモリ等)については, そのPCが搭載しているものよりも低いスペックになります.

## ｢Bootable USB｣のメリット
- 非常に簡単にUbuntu環境を作ることができます.
    - USBなので, どんなPCでもUbuntu環境を利用することができます.
- VMwareと違い, Windowsを介さず直接Ubuntuを動かすので, CPUやメモリをフル活用出来ます.

## ｢Bootable USB｣のデメリット
- USBを用意する必要があります.
- 誤った操作によって, 既存のWindows環境を破損する可能性はVMwareに比べると高いです.
- データは全てUSBメモリから読み書きされる為, ファイルの読み書きの速度等がUSBメモリの速度に依存します.

## ｢Bootable USB｣のデメリット
- Bootable USBからUbuntuを利用する場合, PCのブートメニュー起動や, そこからのUSBブートなど, 機種固有の動作を行う必要があります.
    - 自習などでPerl入学式サポーターからのサポートを受けられない場合, これらの方法について全て自分で調べる必要があります.
    - 自習の方は, VMwareを利用して環境を構築することをおすすめします.

## ISOの入手

- まず, いずれの場合でも必要になるUbuntuのISOデータを用意しましょう.
    - [http://www.ubuntulinux.jp/download/ja-remix](http://www.ubuntulinux.jp/download/ja-remix)
    - なお今回は, ｢Ubuntu 13.10｣を利用します.
    - 32bit/64bitはお使いのPCのCPUにあわせて選択して下さい.

## Ubuntuのインストール
- USBメモリを利用する方法は[こちら](https://github.com/perl-entrance-org/workshop-2014-01/blob/master/ubuntu_install_usb.md)を参照して下さい.
- VMwareを利用する方法は[こちら](https://github.com/perl-entrance-org/workshop-2014-01/blob/master/ubuntu_install_vmware.md)を参照して下さい.
