// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;//再描写のためのおまじない
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP; //100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

//効果音を取得
const seHit = document.querySelector('#se-hit');
const seDefeat = document.querySelector('#se-defeat');


// ①ランダムダメージの実装
attackButton.addEventListener('click', function () {
  console.log('atack');
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage; // 最初は100-10

  // ②HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // ③撃破時のエフェクト適用（enemy -- fly または enemy -- squash）
    enemy.classList.add('enemy--fly');
    // ⑦効果音の追加（オプション）
    //断末魔
    seDefeat.currentTime = 0;//current = 意味は現在
    seDefeat.play();
    // ④撃破後のボタン無効化処理
    attackButton.disabled = true;
    // ⑤撃破メッセージの表示
    //変数に入れずに、そのまま.でつなぎ書き方でもok
    document.querySelector('.log').textContent = 'モンスターを倒した！';
  } else {
    hpText.textContent = hp; //テキストを書き換える
    hpBar.value = hp;
    // ⑥攻撃時の効果を追加
    shakeEnemy();
    // ⑦効果音の追加（オプション）
    seHit.currentTime = 0;//current = 意味は現在
    seHit.play();
  }
})
// ⑧リスタート機能の実装（オプション）
// リスタート処理
const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', function () {
  // HPを初期値に戻す
  hp = MAX_HP;
  hpText.textContent = hp;
  hpBar.value = hp;

  enemy.classList.remove('enemy--fly'); // 撃破演出のクラスを削除

  attackButton.disabled = false; // 攻撃ボタンを有効化

  document.querySelector('.log').textContent = ''; // ログをクリア
});
