function tl_search(el){
    el.placeholder = el.placeholder.replace(/search or jump to…/i, "検索またはリポジトリへ移動");
}
function tl_pr(el){
    el.textContent = el.textContent.replace(/pull requests/i, "プルリクエスト");
}
function tl_issue(el){
    el.textContent = el.textContent.replace(/issues/i, "イシュー");
}
function tl_marketplace(el){
    el.textContent = el.textContent.replace(/marketplace/i, "マーケットプレイス");
}
function tl_explore(el){
    el.textContent = el.textContent.replace(/explore/i, "エクスプローラー");
}

try {
    let body = document.body
    if (!body.getElementsByClassName('logged-in')) {
        ;
    }else{
        let header = document.querySelector("header")
        tl_search(header.querySelector(".header-search-input"))

        let header_nav = header.querySelector("nav")
        tl_pr(header_nav.querySelector("a[href='/pulls']"))
        tl_issue(header_nav.querySelector("a[href='/issues']"))
        tl_marketplace(header_nav.querySelector("a[href='/marketplace']"))
        tl_explore(header_nav.querySelector("a[href='/explore']"))
    }

} catch (error) {
    console.log("予期せぬエラーが発生しました")
}