import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'live.bookmycar.app',
    appName: 'BookMyCar',
    webDir: 'dist',
    server: {
        androidScheme: 'https'
    }
};

export default config;
