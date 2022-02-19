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
function tl_new_repository(el){
    el.textContent = el.textContent.replace(/new repository/i, "リポジトリを作る");
}
function tl_import_repository(el){
    el.textContent = el.textContent.replace(/import repository/i, "リポジトリを読み込む");
}
function tl_new_organization(el){
    el.textContent = el.textContent.replace(/new organization/i, "組織を作る");
}
function fix_dropdown_menu_width(el){
    el.style.width = "170px";
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
        
        fix_dropdown_menu_width(header.querySelector("details-menu"))
        tl_new_repository(header.querySelector("details-menu a[href='/new']"))
        tl_import_repository(header.querySelector("details-menu a[href='/new/import']"))
        // tl_new_gist(header.querySelector("details-menu a[href='https://gist.github.com/']"))
        tl_new_organization(header.querySelector("details-menu a[href='/organizations/new']"))
        // tl_new_project(header.querySelector("details-menu a[href='/users/']"))
    }

} catch (error) {
    console.log("予期せぬエラーが発生しました")
}