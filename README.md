### directories
```
.
├── example_udp_server - multicast-udp receiver
├── node_modules       - added by cordova
├── platforms          - ios, android project
├── plugins            - plugins
└── www                - multicast-udp sender
```

<h1 align="center">
  cordova-plugin-dgram example
</h1>

## Contents

- [Prerequisites](#prerequisites)
- [Building sample app](#building-sample-app)

## <a name="prerequisites"></a> Prerequisites
#### テスト環境<br>
UDP送信デバイス - Android 8.0.0, ios 14.2<br>
UDP受信デバイス - Windows 10[^1], OSX 10.15.7<br>
#### 準備<br>
nodejsのインストール<br>
cordova 10.0.0のインストール<br>
Xcode 12.3のインストール<br>
Android Studio 4.1.1のインストール<br>
[cordovaのiOS開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)<br>
[cordovaのandroid開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)<br>
## <a name="building-sample-app"></a> Building sample app
#### UDP受信側
```
node udp_receiver.js
```
example\_udp\_serverフォルダのudp\_receiver.jsをwindows,mac側で起動しておく<br>
Multicast Address 224.0.0.114で受信する<br>
#### UDP送信側(ios)
```
cordova plugin add https://github.com/digitalcatnip/cordova-plugin-dgram.git
cordova build ios
open platforms/ios/HelloCordova.xcworkspace
```
Xcodeでbuild, runを行うことで、Staging/www/js/index.jsに書かれたUDP送信スクリプトが実行され、Multicast Address 224.0.0.114に送信されます。<br>
Xcode上で編集する場合はStaging-\>www-\>js-\>index.jsを編集してください。(\* cordova build iosでwww以下のフォルダがStagingフォルダにコピーされる)<br>
#### UDP送信側(Android)
```
cordova plugin add https://github.com/digitalcatnip/cordova-plugin-dgram.git
cordova build android
```
Android Studioを起動し、Import Project(Gradle, Eclipse ADT, etc.)からplatforms/androidを開く<br>
Android Studioでbuild, runすることで、app/assets/www/js/index.jsに書かれたUDP送信スクリプトが実行され、Multicast Address 224.0.0.114に送信されます。<br>
Android Studio上で編集する場合はapp-\>assets-\>www-\>js-\>index.jsを編集してください。(\* Android Studio上での編集は元のwwwフォルダ以下に反映されないので、要コピー)<br>

[^1]: windows10にVirtualboxがインストールされている場合、Multicastをブロックしてしまうので、VirtualBox Host-Only NetworkをDisableにする。<br>
https://windowsreport.com/firewall-blocking-multicast/
