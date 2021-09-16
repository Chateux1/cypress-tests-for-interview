const androidCaps = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: 'Pixel 5 API 26',
    platformVersion: '8',
    appPackage: "com.example.newsapp",
    appActivity: ".splash.SplashActivity",
    appWaitActivity: ".tutorial.TutorialActivity",
    app: undefined
};

const serverConfig = {
    path: '/wd/hub',
    port: 4723,
};

const androidOptions = Object.assign(
    {
        capabilities: androidCaps
    },
    serverConfig
);

module.exports = {
    androidOptions
}