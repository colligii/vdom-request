async function get(url, opt, funWhenResponse){
    const myRequest = new XMLHttpRequest();
    url = new URL(url)
    let ObjKeys;
    if(typeof opt === "function"){
        funWhenResponse = opt;
        opt = null;
    }
    if(opt !== null){
        
        if(opt.params !== undefined){
            ObjKeys = Object.keys(opt.params)
            const params = new URLSearchParams()
            ObjKeys.map(item => {
                params.set(item, opt.params[item])
            })
            url.search = params.toString()
        }
    }
    myRequest.open('get', url.href, true)
    if(opt !== null){
        if(opt.headers !== undefined){
            ObjKeys = Object.keys(opt.headers)
            ObjKeys.map(item => {
                myRequest.setRequestHeader(item, opt.headers[item])
            })
        }
        if(opt.contentType !== undefined){
            myRequest.setRequestHeader('Content-type', opt.contentType)
        }
        ObjKeys = Object.keys(opt)
        ObjKeys.map(item => {
            if(item !== 'headers' && item !== 'params' && item !== 'contentType'){
                myRequest[item] = opt[item]
            }
        })
    }

    myRequest.onload = (e) => {
        let response;
        try{
            response = JSON.parse(myRequest.response)

        } catch(e){
            response = myRequest.response
        }
        if(typeof funWhenResponse === "function"){
            (funWhenResponse)(false, response, {
                statusCode: myRequest.status,
                href: url.href,
                headers: myRequest.getAllResponseHeaders(),
                statusMessage: myRequest.statusText,
                redirect: () => { window.location.href = myRequest.responseURL }
            })
        }
    }
    myRequest.onerror = (error) => {
        let response;
        try{
            response = JSON.parse(myRequest.response)

        } catch(e){
            response = myRequest.response
        }
        if(typeof funWhenResponse === "function"){
            (funWhenResponse)(false, response, {
                statusCode: myRequest.status,
                href: url.href,
                headers: myRequest.getAllResponseHeaders(),
                statusMessage: myRequest.statusText,
                redirect: () => { window.location.href = myRequest.responseURL }
            })
        }else{
            throw new Error(error)
        }
    }

    myRequest.send()
}
function post(url, opt, funWhenResponse){
    const myRequest = new XMLHttpRequest();
    url = new URL(url)
    let ObjKeys;
    const formData = new FormData();
    if(typeof opt === "function"){
        funWhenResponse = opt;
        opt = null;
    }
    if(opt !== null){
        
        if(opt.params !== undefined){
            ObjKeys = Object.keys(opt.params)
            const params = new URLSearchParams()
            ObjKeys.map(item => {
                params.set(item, opt.params[item])
            })
            url.search = params.toString()
        }
    }
    myRequest.open('post', url.href, true)
    if(opt !== null){
        if(opt.headers !== undefined){
            ObjKeys = Object.keys(opt.headers)
            ObjKeys.map(item => {
                myRequest.setRequestHeader(item, opt.headers[item])
            })
        }
        if(opt.contentType !== undefined && opt.json !== undefined){
            myRequest.setRequestHeader('Content-type', opt.contentType)
        }
        if(opt.json !== undefined){
            ObjKeys = Object.keys(opt.json)
            ObjKeys.map(item => formData.append(item, opt.json[item]))
        }
        ObjKeys = Object.keys(opt)
        ObjKeys.map(item => {
            if(item !== 'headers' && item !== "json" && item !== 'params' && item !== 'contentType' && item !== 'Content-type'){
                myRequest[item] = opt[item]
            }
        })
    }

    myRequest.onload = (e) => {
        let response;
        try{
            response = JSON.parse(myRequest.response)

        } catch(e){
            response = myRequest.response
        }
        if(typeof funWhenResponse === "function"){
            (funWhenResponse)(false, response, {
                statusCode: myRequest.status,
                href: url.href,
                headers: myRequest.getAllResponseHeaders(),
                statusMessage: myRequest.statusText,
                redirect: () => { window.location.href = myRequest.responseURL }
            })
        }
    }
    myRequest.onerror = (error) => {
        let response;
        try{
            response = JSON.parse(myRequest.response)

        } catch(e){
            response = myRequest.response
        }
        if(typeof funWhenResponse === "function"){
            (funWhenResponse)(false, response, {
                statusCode: myRequest.status,
                href: url.href,
                headers: myRequest.getAllResponseHeaders(),
                statusMessage: myRequest.statusText,
                redirect: () => { window.location.href = myRequest.responseURL }
            })
        }else{
            throw new Error(error)
        }
    }
    myRequest.send(formData)
}

const request = {
    get, post
}

//module.exports = request;