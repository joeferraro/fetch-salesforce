/// <reference types="bluebird" />
import { Fetcher } from './fetcher';
import Promise = require('bluebird');
import { SalesforceOptions } from './salesforceOptions';
export declare class FetchApexREST {
    fetcher: Fetcher;
    options: SalesforceOptions;
    static Create(fetcher: Fetcher, options: SalesforceOptions): FetchApexREST;
    constructor(fetcher: Fetcher, options: SalesforceOptions);
    private getBaseApexRESTURL();
    get(endpointPath: string): Promise<any>;
    private getEndpointURL(endpointPath);
    post(endpointPath: string, body: any): Promise<any>;
    patch(endpointPath: string, body: any): Promise<any>;
    delete(endpointPath: string): Promise<any>;
}
