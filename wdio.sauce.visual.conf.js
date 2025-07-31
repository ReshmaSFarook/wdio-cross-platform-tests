const { config } = require('./wdio.shared.conf');

// ✅ Sauce Labs authentication
config.user = 'oauth-reshmashamshad.farook-1ff2e';
config.key = '63fb2b31-26c1-41b2-9edd-101b556f037b';

config.hostname = 'ondemand.eu-central-1.saucelabs.com';
config.port = 443;
config.protocol = 'https';
config.path = '/wd/hub';
config.region = 'eu-central-1';

// ✅ Enable Sauce Labs service with Visual Testing
config.services = (config.services || []).concat([
  ['sauce', {
    sauceConnect: false,
    visual: true // 💡 Enabling Sauce Visual
  }]
]);

// ✅ Android Chrome Capability with visual support
config.capabilities = [
  {
    platformName: 'Android',
    browserName: 'chrome',
    'appium:deviceName': 'Samsung_Galaxy_S23_FE_free',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      deviceName: 'Samsung_Galaxy_S23_FE_free',
      name: 'Chrome Visual Test on Android 15',
      build: `wdio-android15-visual-${Date.now()}`,
      appiumVersion: '2.0.0',
      visual: {
        capture: true // 👁️ Enable screenshot capture for Sauce Visual
      },
      tags: ['@mobile', '@visual']
    }
  }
];

exports.config = config;
