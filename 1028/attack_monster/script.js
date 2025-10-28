// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
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

// ①ランダムダメージの実装
attackButton.addEventListener('click', function () {
  hp = hp - 10; // 最初は100-10
  hpText.textContent = hp; //テキストを書き換える
})
// HP表示の更新ロジック修正（マイナス値の防止）
// 撃破時のエフェクト適用（effect - fly または effect - squash）
// 撃破後のボタン無効化処理
// 撃破メッセージの表示
// 攻撃時の効果を追加
// 効果音の追加（オプション）
// リスタート機能の実装（オプション）
