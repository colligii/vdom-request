# VDOM REQUEST Library
<img style="max-width: 150px;display: block; margin: 0 auto;" title="VDOM Request" src="https://raw.githubusercontent.com/colligii/vdom-request/main/VDOM-request.png">

## This library runs just in browsers

## Get Started

You have 2 ways to use this library.

## You can use this on React, using the follow commands.

> ### React or others similiar frameworks.

```
npm i --save vdom-request 
```
or
```
yarn add vdom-request
```

in React you just have to use the follow line:
```
import request from 'vdom-request'
```

> ### Using browserify or others similiar framework 

```
Install equals react framework.
```

And import in this method

```
const request = require('vdom-request')
```
## Or in normal HTML script tag

```
<script src="https://raw.githubusercontent.com/colligii/vdom-request/main/VDOM-request.js"></script>
```
or you can use the minify file to make your page renders more faster.

```
<script src="https://raw.githubusercontent.com/colligii/vdom-request/main/VDOM-request-browser.min.js"></script>
```
# Methods

### This framework is based on XMLHTTPRequest browser functionality.

> To see more, join in this link [XMLHTTPRequest post - Mozilla content](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest) 

## Get method

To use get method you have to use the follow command
```
request.get('link', { props }, //callback functions)
```
## Post method

To use post method you have to use the follow command
```
request.post('link', { props }, //callback functions)
```
# Props


## Post

> ### JSON in body
for example to send { teste: 'lorem ipsum' } in request body you just have to use.

you have to put this in props json.
```
json: {
    teste: 'lorem ipsum'
}
```
You can add 2 or more.

## Get & Post

> ### Params

for example to set this in link ?teste=ola

you have to set this in props
```
params: {
    link: 'ola'
}
```
You can add 2 or more.
> ### Headers

for example to set this value in header:
> token: 'some_token'

you have to set this in props
```
headers: {
    token: 'some_token'
}
```
You can add 2 or more.

> ### contentType

to set the type of response you have to put in props json.

```
{ contentType: 'string_of_type_in_XMLHTTPRequest'}
```
You can't set 2 or more response content type

# Version 1.0.5

> it's just a performatic updated, nothing changes.