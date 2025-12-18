//htmlから表示する要素を取得
const result = document.querySelector('.resultFetch');

//関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            //json()メソッドでJSONデータをオブジェクトに変換して返す
            //1つめの.then()の返り値が次の.then()の引数になる
            return response.json();
        })
        .then(function (json) {
            // console.log(json);
            //バックティックでテンプレートリテラル
            result.innerHTML = `<p>${json.news}</p>`;
        })
        .catch(function (error) {
            //エラーが発生した場合の処理
            console.log(error);
        });
};

//loadNews関数を実行
loadNews();

//ボタンをクリックした時のイベント
const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直し
    loadNews();
});