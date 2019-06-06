# PhotoFrame

# Overview
好きな画像とそれに合う文章を設定すると、それらをデジタルフォトフレームのように見ることができます。

# Usage
```
<!-- パッケージ化に必要なファイル・ディレクトリをXXXディレクトリに入れた時に、パッケージ化をするためのコマンド  -->
`npm i electron-packager --save-dev`
`electron-packager XXXへのパス PhotoFrame --platform=darwin --arch=x64 --electronVersion=1.4.13`

```

上記のコマンドを実行すると`PhotoFrame-darwin-x64`というディレクトリができるので作られるので
そのディレクトリをDownloadsディレクトリに移動していただきます。
そして、そのディレクトリの中のPhotoFrame.appを実行していただくとアプリが起動できます。


