## Documentation

You can see below the API reference of this module.

### constructor

BloggifyActionsClient
A client for the Bloggify API functions (actions).

#### Params

- **String** `host`:
- **Object** `options`: An object containing the following fields:
 - `url` (String): The http actions base url (default: `@/bloggify/actions`).
 - `ws_url` (String): The ws actions base url (default: `!/bloggify/actions`).

### `request(opts, cb)`
Executes an HTTP(s) request.

#### Params

- **Object** `opts`: Contains a set of parameters.
  - `headers` (Object)    The request headers.
  - `url`     (String)    The access URL.
  - `action`  (Object)    The action name.
  - `method`  (Function)  The request method.
  - `data`    (Object)    The reuqest body (will be JSON-stringified)
  - `query`   (Object)    Querystring parameters to be set in the url.
- **Function** `cb`: The callback function.

### `post(name, data, opts)`
Executes a POST request.

#### Params

- **String** `name`: The action name.
- **Object** `data`: The request body (as an object).
- **Object** `opts`: Additional options (optional).

### `get(name, opts, cb)`
Executes a GET request.

#### Params

- **String** `name`: The action name.
- **Object** `opts`: Additional options (optional).
- **Function** `cb`: The callback function.

### `url(name, opts)`
Get the url of the action.

#### Params

- **String** `name`: The action name.
- **Object** `opts`: Additional options (optional).

#### Return
- **String** The url string.

### `wsUrl(name)`
Get the url of the WebSocket action.

#### Params

- **String** `name`: The action name.

#### Return
- **String** The ws url string.

