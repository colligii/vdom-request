function get(url, props, funwhenResponse){
    const VDOMXML = new XMLHttpRequest();
    VDOMXML.open('get', url, true)
    let keysObjs;
    if(props !== null && props !== undefined){
        keysObjs = Object.keys(props)
        keysObjs.map(item => VDOMXML[item] = props[item])
    }
    if(typeof props === "function") funwhenResponse = props;
    VDOMXML.onload = (e)=>{
        const { response } = e.target;
        (funwhenResponse)(null, response, e.target)
    }
    VDOMXML.onerror = funwhenResponse
    VDOMXML.send()
}
function post(url, props, funwhenResponse){
    const VDOMXML = new XMLHttpRequest();
    VDOMXML.open('post', url, true)
    let keysObjs;
    if(props !== null && props !== undefined){
        keysObjs = Object.keys(props)
        keysObjs.map(item => {
            if(item !== "json"){
                VDOMXML[item] = props[item]
            }
        })
    }
    if(typeof props === "function") funwhenResponse = props;
    VDOMXML.onload = (e)=>{
        const { response } = e.target;
        (funwhenResponse)(null, response, e.target)
    }
    VDOMXML.onerror = funwhenResponse
    VDOMXML.setRequestHeader("Content-Type", "application/json")
    VDOMXML.send(JSON.stringify(props.json))
}

const request = {
    get,
    post
}

module.exports = request;