import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'hackathon',
    webDir: 'dist',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        "CapacitorHttp": {
            "enabled": true
        }
    },
    android: {
        "allowMixedContent": true
    }
};

export default config;
