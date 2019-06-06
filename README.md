# PhotoFrame

## Overview
好きな画像とそれに合う文章を設定すると、それらをデジタルフォトフレームのように見ることができます。

## Usage

### アプリのインストール方法
パッケージ化に必要なファイル・ディレクトリをXXXディレクトリに入れた時に、パッケージ化をするためのコマンドを以下に示します。
`npm i electron-packager --save-dev`  
`electron-packager XXXへのパス PhotoFrame --platform=darwin --arch=x64 --electronVersion=1.4.13`

上記のコマンドを実行すると`PhotoFrame-darwin-x64`というディレクトリが作られるので  
そのディレクトリを`Downloads`ディレクトリに移動していただきます。  
そして、そのディレクトリの中の`PhotoFrame.app`を実行していただくとアプリが起動できます。

### アプリの画像ディレクトリをに画像を追加する方法
`getFile.command`を実行していただくと  
`Downloads`ディレクトリ内に含まれるすべての`.jpg`ファイルと`.png`ファイルがアプリの画像ディレクトリに追加されます。
