
import { Fetcher } from './fetcher';
import { FetchSObject } from './fetchSObject';
import { FetchQuery } from './fetchQuery';
import { FetchChatter } from './fetchChatter';
import { FetchApexREST } from './fetchApexREST';
import { SalesforceOptions, withDefaults } from './salesforceOptions'

let urlJoin = require('url-join');
let numeral = require('numeral');

export class FetchSalesforce {
    options: SalesforceOptions;
    fetcher: Fetcher;
    fetchSObject: FetchSObject;
    fetchQuery: FetchQuery;
    fetchChatter: FetchChatter;
    fetchApexREST: FetchApexREST;

    constructor(options: SalesforceOptions){
        this.options = withDefaults(options);
        this.fetcher = new Fetcher(this.options);
        this.fetchSObject = new FetchSObject(this.fetcher, this.options);
        this.fetchQuery = new FetchQuery(this.fetcher, this.options);
        this.fetchChatter = new FetchChatter(this.fetcher, this.options);
        this.fetchApexREST = new FetchApexREST(this.fetcher, this.options);
    }
}