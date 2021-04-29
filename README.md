# VDOM REQUEST Library

<div style="display: flex; justify-content: center; padding: 15px 0px;">
    <img style="width: 150px" title="VDOM Request" src="https://raw.githubusercontent.com/colligii/vdom-request/main/VDOM-request.png">

</div>

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

>json props have to been seted like a JSON Format, Back-end have to been seted to accept then.

- ## Props

basically props defines in XMLHttpRequest you have to set in JSON Format.

See more at <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest>

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

