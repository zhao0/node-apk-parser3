# Note

this is the the fixed/improved version of [node-apk-parser](https://github.com/rubenv/node-apk-parser)

# apk-parser - Android apk-file parser

> Extract Android Manifest info from an APK file.


While there are some implementations for this out in the wild, none of them handle all of the intricacies of the APK file-format. This module uses the `aapt` tool from the Android SDK to solve that problem. The tool will be downloaded and installed during `npm install`. Tested on Linux and OS X.

## Getting started

Add apk-parser to your project: `npm install --save apk-parser3`.

Sample usage:

```js
var parseApk = require('apk-parser3');
parseApk('myApkFile.apk', function (err, data) {
    // Handle error or do something with data.
});
```

The returned data object is an object-representation of the `AndroidManifest.xml` file. Here's a sample file:

```js
{ package: ' name=com.tencent.mm versionCode=861 versionName=6.3.25',
  sdkVersion: '15',
  targetSdkVersion: '23',
  'uses-permission': 'android.permission.READ_PROFILE',
  'uses-feature-not-required': 'android.hardware.bluetooth_le',
  'application-label': 'WeChat',
  'application-label-en': 'WeChat',
  'application-label-zh_CN': '微信',
  'application-label-zh_TW': 'WeChat',
  'application-label-fa': 'WeChat',
  'application-label-uk': 'WeChat',
  'application-label-tl': 'WeChat',
  'application-label-sr': 'WeChat',
  'application-label-zu': 'WeChat',
  'application-label-sv': 'WeChat',
  'application-label-sw': 'WeChat',
  'application-label-fr_CA': 'WeChat',
  'application-label-lo_LA': 'WeChat',
  'application-label-en_GB': 'WeChat',
  'application-label-bn_BD': 'WeChat',
  'application-label-et_EE': 'WeChat',
  'application-label-ka_GE': 'WeChat',
  'application-label-ky_KG': 'WeChat',
  'application-label-km_KH': 'WeChat',
  'application-label-si_LK': 'WeChat',
  'application-label-mk_MK': 'WeChat',
  'application-label-ur_PK': 'WeChat',
  'application-label-sq_AL': 'WeChat',
  'application-label-hy_AM': 'WeChat',
  'application-label-my_MM': 'WeChat',
  'application-label-pa_IN': 'WeChat',
  'application-label-ta_IN': 'WeChat',
  'application-label-te_IN': 'WeChat',
  'application-label-ml_IN': 'WeChat',
  'application-label-en_IN': 'WeChat',
  'application-label-kn_IN': 'WeChat',
  'application-label-mr_IN': 'WeChat',
  'application-label-gu_IN': 'WeChat',
  'application-label-mn_MN': 'WeChat',
  'application-label-ne_NP': 'WeChat',
  'application-label-pt_BR': 'WeChat',
  'application-label-gl_ES': 'WeChat',
  'application-label-eu_ES': 'WeChat',
  'application-label-is_IS': 'WeChat',
  'application-label-es_US': 'WeChat',
  'application-label-pt_PT': 'WeChat',
  'application-label-en_AU': 'WeChat',
  'application-label-ms_MY': 'WeChat',
  'application-label-az_AZ': 'WeChat',
  'application-label-kk_KZ': 'WeChat',
  'application-label-uz_UZ': 'WeChat',
  'application-icon-120': 'r/j/icon.png',
  'application-icon-160': 'r/j/icon.png',
  'application-icon-213': 'r/y/icon.png',
  'application-icon-240': 'r/y/icon.png',
  'application-icon-320': 'r/a0/icon.png',
  'application-icon-480': 'r/a2/icon.png',
  'application-icon-640': 'r/a2/icon.png',
  application: ' label=WeChat icon=r/j/icon.png',
  'uses-library-not-required': 'com.here.android',
  'launchable-activity': ' name=com.tencent.mm.ui.LauncherUI  label=WeChat icon=',
  'uses-feature': 'android.hardware.screen.portrait',
  'uses-implied-feature': 'android.hardware.screen.portrait,one or more activities have specified a portrait orientation',
  'supports-screens': ' small normal large xlarge',
  'supports-any-density': ' true',
  locales: ' --_-- en zh_CN zh_TW fa uk tl sr zu sv sw fr_CA lo_LA en_GB bn_BD et_EE ka_GE ky_KG km_KH si_LK mk_MK ur_PK sq_AL hy_AM my_MM pa_IN ta_IN te_IN ml_IN en_IN kn_IN mr_IN gu_IN mn_MN ne_NP pt_BR gl_ES eu_ES is_IS es_US pt_PT en_AU ms_MY az_AZ kk_KZ uz_UZ',
  densities: ' 120 160 213 240 320 480 640',
  'native-code': '  armeabi' }
```

Things to note:

* The top-level element is a key named `manifest`.
* Attributes are encoded by prepending their name with `@`.
* Child nodes can be accessed by name. The value is always an array, as there might be more than one array.
* This representation is unaware of the meaning of this file (you might know that there will always only be one `application` tag, the module does not). This make sure that it never breaks with future Android releases.

## Contributing
All code lives in the `src` folder and is written in CoffeeScript. Try to stick to the style conventions used in existing code.

Tests can be run using `grunt test`. A convenience command to automatically run the tests is also available: `grunt watch`. Please add test cases when adding new functionality: this will prove that it works and ensure that it will keep working in the future.
    
## License 

    (The MIT License)

    Copyright (C) 2013 by Ruben Vermeersch <ruben@savanne.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
