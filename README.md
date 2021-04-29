# VDOM REQUEST Library

## What's this library?

it's a simple XMLHttpRequest library to make requests (POST, GET).

- GET
```
request.get(SITE_URL, { XMLHTTPPROPS }, callback function)
```
- POST
```
request.post(SITE_URL, { json: {}, another XMLHTTPPROPS }, callback function)
```

*json props just have to been seted lika a JSON Format to backend.*

- ## Props

basically props defines in XMLHttpRequest you have to set in JSON Format.

- ## Callback Functions

### Have 3 properties inside of this functions

```
(err, body, status) => {// my function code}
```

- Error

  - if your request return some error this is will represent then with boolean state ( true, false )

- body

  - Get response body

- Status 

  - Get some request infos.

