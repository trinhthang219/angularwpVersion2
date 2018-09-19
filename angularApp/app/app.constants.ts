import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:5000/';
    public static API_CUSTOMER_ENDPOINT = 'https://thaisp2016.xspera.net:4433/CustomerAPI/Customer';
    public static CDN_URL = 'https://xsperamso365-585e44f3af21f5.sharepoint.com/sites/thangteamsite/CustomerWeb/page/default.aspx';
}
