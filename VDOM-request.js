const request = (()=>{
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
        main(myRequest, url, 'get',  funWhenResponse, opt)
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
        main(myRequest, url, 'post',  funWhenResponse, opt)
    }
    function main(myRequest, url, requestType, funWhenResponse, opt){
        let ObjKeys;
        let formData = new FormData();
        console.log(myRequest)
        if(opt !== null){
            if(typeof opt.headers !== "undefined"){
                ObjKeys = Object.keys(opt.headers)
                ObjKeys.map(item => {
                    myRequest.setRequestHeader(item, opt.headers[item])
                })
            }
            if(typeof opt.contentType !== "undefined"){
                myRequest.setRequestHeader('Content-type', opt.contentType)
            }
            if(typeof opt.json !== "undefined" && requestType === 'post'){
                ObjKeys = Object.keys(opt.json)
                ObjKeys.map(item => formData.append(item, opt.json[item]))
            }
            ObjKeys = Object.keys(opt)
            ObjKeys.map(item => {
                if(item !== 'headers' && item !== 'params' && item !== 'contentType' && item !== json){
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
    return { get, post }
})()

//module.exports = request;