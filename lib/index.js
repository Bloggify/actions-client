"use strict";

const axios = require("axios")
    , qs = require("querystring")

class BloggifyActionsClient {
    /**
     * BloggifyActionsClient
     * A client for the Bloggify API functions (actions).
     *
     * @param {String} host
     * @param {Object} options An object containing the following fields:
     *
     *  - `url` (String): The http actions base url (default: `@/bloggify/actions`).
     *  - `ws_url` (String): The ws actions base url (default: `!/bloggify/actions`).
     */
    constructor (host, options) {
        this.host = host
        this.options = {
            url: "@/bloggify/actions"
          , ws_url: "!/bloggify/actions"
          , ...options
        }
    }

    /**
     * request
     * Executes an HTTP(s) request.
     *
     * @param opts  {Object}    Contains a set of parameters.
     *
     *   - `headers` (Object)    The request headers.
     *   - `url`     (String)    The access URL.
     *   - `action`  (Object)    The action name.
     *   - `method`  (Function)  The request method.
     *   - `data`    (Object)    The reuqest body (will be JSON-stringified)
     *   - `query`   (Object)    Querystring parameters to be set in the url.
     *
     * @param cb    {Function}  The callback function.
     */
    request (opts, cb) {
        // TODO CSRF?
        //      Cookies?
        opts.headers = opts.headers || {}

        const url = opts.url || this.url(opts.action, opts)

        const axiosOptions = {
            method: opts.method
          , url
          , headers:  {
                "Content-Type": "application/json"
              //, "Accept": "application/json"
              , ...opts.headers
            }
          , ...opts.axios_options
        }

        if (opts.data) {
            if (typeof opts.data === "object") {
                axiosOptions.data = JSON.stringify(opts.data)
            } else {
                axiosOptions.data = opts.data
            }
        }

        return axios(axiosOptions)
        //  let status = xhr.status
        //  if (status >= 500) {
        //      const err = new Error("Server error.")
        //      if (cb) cb(err)
        //      reject(err)
        //  } else {
        //      let data = {}
        //      try {
        //          data = JSON.parse(xhr.responseText)
        //      } catch (e) {
        //          console.warn(e)
        //      }
        //      if (status === 200) {
        //          if (cb) cb(null, data)
        //          resolve(data)
        //      } else {
        //          const err = new Error(data.error || data.message || "Something went wrong.")
        //          if (cb) cb(err, data)
        //          reject(err)
        //      }
        //  }
    }

    /**
     * post
     * Executes a POST request.
     *
     * @param name {String} The action name.
     * @param data {Object} The request body (as an object).
     * @param opts {Object} Additional options (optional).
     */
    post (name, data, opts) {
        return this.request({
            method: "POST"
          , action: name
          , data
          , ...opts
        })
    }

    /**
     * get
     * Executes a GET request.
     *
     * @param name {String}   The action name.
     * @param opts {Object}   Additional options (optional).
     * @param cb   {Function} The callback function.
     */
    get (name, opts) {
        return this.request({
            method: "GET"
          , action: name
          , ...opts
        })
    }

    /**
     * url
     * Get the url of the action.
     *
     * @param name {String}   The action name.
     * @param opts {Object}   Additional options (optional).
     * @returns    {String}   The url string.
     */
    url (name, opts) {
        return `${this.host}/${this.options.url}/${name}${opts && opts.query ? "?" + qs.stringify(opts.query) : ""}`
    }

    /**
     * wsUrl
     * Get the url of the WebSocket action.
     *
     * @param name {String}   The action name.
     * @returns    {String}   The ws url string.
     */
    wsUrl (name) {
        return `${this.host}/${this.options.ws_url}/${name}`
    }
}

module.exports = BloggifyActionsClient
