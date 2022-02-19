var user_id = ""

function get_user_id(){
    return document.querySelector("header .user-profile-link strong").textContent
}
function tl_search(el){
    el.placeholder = el.placeholder.replace(/search or jump to…/i, "検索またはリポジトリへ移動")
}
function tl_pr(el){
    el.textContent = el.textContent.replace(/pull requests/i, "プルリクエスト")
}
function tl_issue(el){
    el.textContent = el.textContent.replace(/issues/i, "イシュー")
}
function tl_marketplace(el){
    el.textContent = el.textContent.replace(/marketplace/i, "マーケットプレイス")
}
function tl_explore(el){
    el.textContent = el.textContent.replace(/explore/i, "エクスプローラー")
}
function tl_new_repository(el){
    el.textContent = el.textContent.replace(/new repository/i, "リポジトリを作る")
}
function tl_import_repository(el){
    el.textContent = el.textContent.replace(/import repository/i, "リポジトリを読み込む")
}
function tl_new_organization(el){
    el.textContent = el.textContent.replace(/new organization/i, "組織を作る")
}
function tl_user_profile(el){
    el.innerHTML = 'サインイン中 <strong class="css-truncate-target">' + user_id + '</strong>'
}
function tl_user_status(el){
    el.textContent = el.textContent.replace(/set status/i, "ステータスの設定")
}
function tl_user_status_edit_area(el){
    let title = el.querySelector("h3")
    let placeholder = el.querySelector(".js-user-status-message-field")
    let suggestion = el.querySelector(".user-status-suggestions h4")
    let busy_note = el.querySelector(".user-status-limited-availability-container .note")
    let message_en = /(When others mention you, assign you, or request your review,)\s+(GitHub will let them know that you have limited availability.)/i
    let message_jp = '誰かがあなたにメッセージを送ったり、割り振ったり、レビューをリクエストしたりすると、GitHubはあなたの都合が付きにくいことを相手に通知します。'
    
    let label = el.querySelector(".pt-3 .mr-1")
    let period_list = el.querySelectorAll(".pt-3 .js-user-status-expire-drop-down li button")

    title.textContent = title.textContent.replace(/edit status/i, "ステータスの編集")
    placeholder.placeholder = placeholder.placeholder.replace(/what's happening\?/i, "どんな状態ですか？")
    suggestion.textContent = suggestion.textContent.replace(/suggestions/i, "候補")
    busy_note.textContent = busy_note.textContent.replace(message_en, message_jp)
    
    label.textContent = label.textContent.replace(/clear status/i, "設定期間")
    period_list.forEach( period => tl_period_of_status(period) )
    
}
function tl_period_of_status(el){
    switch (el.title){
        case 'Never':
            el.innerHTML = (
                '<span class="d-inline-block text-bold mb-1">無期限 : ' + el.title + '</span>' + 
                '<div class="f6 lh-condensed">あなたが消去または編集するまで、ステータスは変わりません</div>'
            )
            break
        case 'in 30 minutes':
            el.textContent = '30分間 : ' + el.title
            break
        case 'in 1 hour':
            el.textContent = '1時間 : ' + el.title
            break
        case 'in 4 hours':
            el.textContent = '4時間 : ' + el.title
            break
        case 'today':
            el.textContent = '今日まで : ' + el.title
            break
        case 'this week':
            el.textContent = '今週(日曜)まで : ' + el.title
            break
        default:
    }
}

function tl_your_profile(el){
    el.textContent = el.textContent.replace(/your profile/i, "プロフィール")
}
function tl_your_repository(el){
    console.log(el)
    el.textContent = el.textContent.replace(/your repositories/i, "リポジトリ")
}
// function tl_your_codespace(el){
//     console.log(el)
//     el.textContent = el.textContent.replace(/ /i, "")
// }
function tl_your_project(el){
    console.log(el)
    el.textContent = el.textContent.replace(/your projects/i, "プロジェクト")
}
function tl_your_star(el){
    console.log(el)
    el.textContent = el.textContent.replace(/your stars/i, "スター")
}
// function tl_your_gist(el){
//     console.log(el)
//     el.textContent = el.textContent.replace(/ /i, "")
// }


function tl_upgrade(el){
    el.textContent = el.textContent.replace(/upgrade/i, "アップグレード")
}
function tl_feature_preview(el){
    el.textContent = el.textContent.replace(/feature preview/i, "")
}
function tl_help(el){
    el.textContent = el.textContent.replace(/help/i, "ヘルプ")
}
function tl_setting(el){
    el.textContent = el.textContent.replace(/settings/i, "設定")
}

function tl_sign_out(el){
    el.textContent = el.textContent.replace(/sign out/i, "サインアウト")
}


function fix_dropdown_menu_width(el){
    el.style.width = "170px"
}
function lazy_loading_cancel(el) {
    el.setAttribute("loading", "eager")
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

        lazy_loading_cancel(header.querySelector("include-fragment"))
        setTimeout(() => {
            user_id = get_user_id()
            
            tl_user_profile(header.querySelector(".user-profile-link"))
            tl_user_status(header.querySelector(".user-status-message-wrapper span"))
            tl_user_status_edit_area(header.querySelector("details-dialog"))

            tl_your_profile(header.querySelector("a[href='/" + user_id + "'].dropdown-item"))
            tl_your_repository(header.querySelector("a[href='/" + user_id + "?tab=repositories'].dropdown-item"))
            // tl_your_codespace(header.querySelector("a[href='/codespaces'].dropdown-item"))
            tl_your_project(header.querySelector("a[href='/" + user_id + "?tab=projects'].dropdown-item"))
            tl_your_star(header.querySelector("a[href='/" + user_id + "?tab=stars'].dropdown-item"))
            // tl_your_gist(header.querySelector("a[href='/https://gist.github.com/mine'].dropdown-item"))

            
            tl_upgrade(header.querySelector("a[href='/account/choose?action=upgrade'].dropdown-item"))
            // tl_feature_preview(header.querySelector("a[href='/users/" + user_id + "/feature_previews'].dropdown-item"))
            tl_help(header.querySelector("a[href='https://docs.github.com'].dropdown-item"))
            tl_setting(header.querySelector("a[href='/settings/profile'].dropdown-item"))
            
            tl_sign_out(header.querySelector(".dropdown-signout"))
        }, 1000)
    }

} catch (error) {
    console.log("予期せぬエラーが発生しました")
}