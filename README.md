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
- [Building sample app] (#building-sample-app)
- [pitfalls] (#-pitfalls)

## <a name="prerequisites"></a> Prerequisites
#### テスト環境<br>
UDP送信デバイス - Android 8.0.0, iOS 14.2<br>
UDP受信デバイス - Windows 10, OSX 10.15.7<br>
#### 準備<br>
nodejsのインストール<br>
cordova 10.0.0のインストール<br>
[cordovaのiOS開発環境の設定(xcode)](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)<br>
[cordovaのandroid開発環境の設定(android studio)](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)<br>
## <a name="building-sample-app"></a> Building sample app
#### UDP受信側
```
node udp\_receiver.js
```
example\_udp\_serverフォルダのudp\_receiver.jsをwindows,mac側で起動しておく<br>
Multicast Address 224.0.0.114で受信する<br>
