export const DOWNLOADS = {
  rom: {
    name: "PixelOS ROM",
    version: "16.2 (Android 16)",
    date: "2026-04-23",
    filename: "PixelOS_xaga-16.2-20260423-1335.zip",
    link: "https://pixelos-xaga-worker.angxddeep.workers.dev/PixelOS_xaga-16.2-20260423-1335.zip",
    sha512: "63E3533E1E48F6B05F55B69AE4C41F5CD77370B61CEE88C386800C16ADBBAE48844E310ED793BB98D8E4B19664AC08F122C77458B189DC58FF640FBC1C4CB6E1"
  },
  recovery_images: [
    {
      name: "boot.img",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/boot.img",
      sha512: "1ca705758e5cc87e3b007905b54669e40100895f4a7adde36d4acf5497c940cc6647126302b43d0863c5880d4a076f771f7e8752033942815b8f179d0e928195"
    },
    {
      name: "vendor_boot.img",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/vendor_boot.img",
      sha512: "8fe4fbc8b62625fee54426bef594af3e6fad38072ee5a96b3112b248dd266d3057dcfb2376c340562838e103dca750c7369bdf3dbd514f6d04302f353414c783"
    }
  ],
  preloader: [
    {
      name: "preloader_xaga.bin",
      link: "https://pixelos-xaga-worker.angxddeep.workers.dev/preloader_xaga.bin",
      sha512: "8a61d8039de656893119f01e71f97ca26994dc7ba55861837c85af84680d3d96ab8e75957fb91df761ba5e93411d49129e2ab28417fcf3483e5e694670b7190e"
    }
  ],
  platform_tools: {
    link: "https://developer.android.com/tools/releases/platform-tools",
    installs: [
      {
        os: "Windows",
        command: "winget install -e --id Google.PlatformTools"
      },
      {
        os: "macOS",
        command: "brew install android-platform-tools"
      },
      {
        os: "Linux",
        command: "sudo apt install android-sdk-platform-tools"
      }
    ]
  },
  drivers: {
    filename: "android-bootloader-interface-304243.zip",
    link: "https://pixelos-xaga-worker.angxddeep.workers.dev/android-bootloader-interface-304243.zip",
    sha512: "F5404D9259F72AE428A5E451698201722378E526D58BA097A6B2592EE9CB47673941E20EEBBDA08C2AA684D191D59802EE1D52C61C06F1678BE645BDA17BDCED",
    instructions: [
      "Locate the android_winusb.inf file.",
      "Right click on it.",
      "Click on Install."
    ]
  },
  links: {
    xda: "https://xdaforums.com/t/development-rom-android-16-unofficial-pixelos-16.2-recovery-build-xaga-march-build.4781663/",
    telegram_support: "https://t.me/XAGASupport",
    telegram_channel: "https://t.me/PixelOS_xaga",
    sourceforge: "https://sourceforge.net/projects/xagaproject/files/Pixelos-xaga"
  }
};
