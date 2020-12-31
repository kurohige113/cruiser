"use strict";
/**
 * キーワード
 * faan: 翻
 * parent: 親
 * child: 子
 * open: 副露(フーロ)
 * score: 点数
 * point: 符数
 * bonus: ドラ
 * hand: 手牌
 * ~Value: Number型
 */
/**
 * スコアクラス
 */
class MahjongScoreElement {
    constructor(name, score, paymentChild, paymentParent) {
        this.name = name;
        this.score = score;
        this.paymentChild = paymentChild;
        this.paymentParent = paymentParent;
    }
    getPrintFormat() {
        const payment = this.paymentParent == 0 ? String(this.paymentChild) + "オール" : String(this.paymentChild) + "/" + String(this.paymentParent);
        return this.name + this.score + "点" + "(" + payment + ")";
    }
}
/**
 * スコアテーブルクラス
 */
class MahjongScoreTable {
    constructor(isParent) {
        this.table = {};
        this.isParent = isParent;
        if (isParent) {
            this.table[this.key(1, 30)] = new MahjongScoreElement('', 1500, 500, 0);
            this.table[this.key(1, 40)] = new MahjongScoreElement('', 2000, 700, 0);
            this.table[this.key(1, 50)] = new MahjongScoreElement('', 2400, 800, 0);
            this.table[this.key(1, 60)] = new MahjongScoreElement('', 2900, 1000, 0);
            this.table[this.key(1, 70)] = new MahjongScoreElement('', 3400, 1200, 0);
            this.table[this.key(1, 80)] = new MahjongScoreElement('', 3900, 1300, 0);
            this.table[this.key(1, 90)] = new MahjongScoreElement('', 4400, 1500, 0);
            this.table[this.key(1, 100)] = new MahjongScoreElement('', 4800, 1600, 0);
            this.table[this.key(1, 110)] = new MahjongScoreElement('', 5300, 1800, 0);
            this.table[this.key(2, 20)] = new MahjongScoreElement('', 2000, 700, 0);
            this.table[this.key(2, 25)] = new MahjongScoreElement('', 2400, 800, 0);
            this.table[this.key(2, 30)] = new MahjongScoreElement('', 2900, 1000, 0);
            this.table[this.key(2, 40)] = new MahjongScoreElement('', 3900, 1300, 0);
            this.table[this.key(2, 50)] = new MahjongScoreElement('', 4800, 1600, 0);
            this.table[this.key(2, 60)] = new MahjongScoreElement('', 5800, 2000, 0);
            this.table[this.key(2, 70)] = new MahjongScoreElement('', 6800, 2300, 0);
            this.table[this.key(2, 80)] = new MahjongScoreElement('', 7700, 2600, 0);
            this.table[this.key(2, 90)] = new MahjongScoreElement('', 8700, 2900, 0);
            this.table[this.key(2, 100)] = new MahjongScoreElement('', 9600, 3200, 0);
            this.table[this.key(2, 110)] = new MahjongScoreElement('', 10600, 3600, 0);
            this.table[this.key(3, 20)] = new MahjongScoreElement('', 3900, 1300, 0);
            this.table[this.key(3, 25)] = new MahjongScoreElement('', 4800, 1600, 0);
            this.table[this.key(3, 30)] = new MahjongScoreElement('', 5800, 2000, 0);
            this.table[this.key(3, 40)] = new MahjongScoreElement('', 7700, 2600, 0);
            this.table[this.key(3, 50)] = new MahjongScoreElement('', 9600, 3200, 0);
            this.table[this.key(3, 60)] = new MahjongScoreElement('', 11600, 3900, 0);
            this.table[this.key(3, 70)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 80)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 90)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 20)] = new MahjongScoreElement('', 7700, 2600, 0);
            this.table[this.key(4, 25)] = new MahjongScoreElement('', 9600, 3200, 0);
            this.table[this.key(4, 30)] = new MahjongScoreElement('', 11600, 3900, 0);
            this.table[this.key(4, 40)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 50)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 60)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 70)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 80)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 90)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 20)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 25)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 30)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 40)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 50)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 60)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 70)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 80)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 90)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(6, 20)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 25)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 30)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 40)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 50)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 60)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 70)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 80)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 90)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 100)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 110)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 20)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 25)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 30)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 40)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 50)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 60)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 70)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 80)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 90)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 100)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 110)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(8, 20)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 25)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 30)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 40)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 50)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 60)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 70)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 80)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 90)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 20)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 25)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 30)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 40)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 50)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 60)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 70)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 80)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 90)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 20)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 25)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 30)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 40)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 50)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 60)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 70)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 80)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 90)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(11, 20)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 25)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 30)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 40)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 50)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 60)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 70)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 80)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 90)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 100)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 110)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 20)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 25)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 30)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 40)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 50)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 60)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 70)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 80)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 90)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 100)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 110)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(13, 20)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 25)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 30)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 40)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 50)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 60)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 70)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 80)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 90)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 100)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 110)] = new MahjongScoreElement('役満', 48000, 16000, 0);
        }
        else {
            this.table[this.key(1, 30)] = new MahjongScoreElement('', 1000, 300, 500);
            this.table[this.key(1, 40)] = new MahjongScoreElement('', 1300, 400, 700);
            this.table[this.key(1, 50)] = new MahjongScoreElement('', 1600, 400, 800);
            this.table[this.key(1, 60)] = new MahjongScoreElement('', 2000, 500, 1000);
            this.table[this.key(1, 70)] = new MahjongScoreElement('', 2300, 600, 1200);
            this.table[this.key(1, 80)] = new MahjongScoreElement('', 2600, 700, 1300);
            this.table[this.key(1, 90)] = new MahjongScoreElement('', 2900, 800, 1500);
            this.table[this.key(1, 100)] = new MahjongScoreElement('', 3200, 800, 1600);
            this.table[this.key(1, 110)] = new MahjongScoreElement('', 3600, 900, 1800);
            this.table[this.key(2, 20)] = new MahjongScoreElement('', 1300, 400, 700);
            this.table[this.key(2, 25)] = new MahjongScoreElement('', 1600, 400, 800);
            this.table[this.key(2, 30)] = new MahjongScoreElement('', 2000, 500, 1000);
            this.table[this.key(2, 40)] = new MahjongScoreElement('', 2600, 700, 1300);
            this.table[this.key(2, 50)] = new MahjongScoreElement('', 3200, 800, 1600);
            this.table[this.key(2, 60)] = new MahjongScoreElement('', 3900, 1000, 2000);
            this.table[this.key(2, 70)] = new MahjongScoreElement('', 4500, 1200, 2300);
            this.table[this.key(2, 80)] = new MahjongScoreElement('', 5200, 1300, 2600);
            this.table[this.key(2, 90)] = new MahjongScoreElement('', 5800, 1500, 2900);
            this.table[this.key(2, 100)] = new MahjongScoreElement('', 6400, 1600, 3200);
            this.table[this.key(2, 110)] = new MahjongScoreElement('', 7100, 1800, 3600);
            this.table[this.key(3, 20)] = new MahjongScoreElement('', 2600, 700, 1300);
            this.table[this.key(3, 25)] = new MahjongScoreElement('', 3200, 800, 1600);
            this.table[this.key(3, 30)] = new MahjongScoreElement('', 3900, 1000, 2000);
            this.table[this.key(3, 40)] = new MahjongScoreElement('', 5200, 1300, 2600);
            this.table[this.key(3, 50)] = new MahjongScoreElement('', 6400, 1600, 3200);
            this.table[this.key(3, 60)] = new MahjongScoreElement('', 7700, 2000, 3900);
            this.table[this.key(3, 70)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 80)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 90)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 20)] = new MahjongScoreElement('', 5200, 1300, 2600);
            this.table[this.key(4, 25)] = new MahjongScoreElement('', 6400, 1600, 3200);
            this.table[this.key(4, 30)] = new MahjongScoreElement('', 7700, 2000, 3900);
            this.table[this.key(4, 40)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 50)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 60)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 70)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 80)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 90)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 20)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 25)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 30)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 40)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 50)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 60)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 70)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 80)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 90)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(6, 20)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 25)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 30)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 40)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 50)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 60)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 70)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 80)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 90)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 100)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 110)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 20)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 25)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 30)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 40)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 50)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 60)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 70)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 80)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 90)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 100)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 110)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(8, 20)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 25)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 30)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 40)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 50)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 60)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 70)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 80)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 90)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 20)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 25)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 30)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 40)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 50)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 60)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 70)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 80)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 90)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 20)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 25)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 30)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 40)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 50)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 60)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 70)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 80)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 90)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(11, 20)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 25)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 30)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 40)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 50)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 60)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 70)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 80)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 90)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 100)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 110)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 20)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 25)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 30)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 40)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 50)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 60)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 70)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 80)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 90)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 100)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 110)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(13, 20)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 25)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 30)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 40)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 50)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 60)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 70)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 80)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 90)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 100)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 110)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
        }
    }
    /**
     * テーブルのキーを生成します。
     * @param faanValue 飜数
     * @param point 符数
     */
    key(faanValue, point) {
        return faanValue + '_' + point;
    }
    /**
     * テーブルから点数を取得します。
     * @param faanValue 飜数
     * @param point 符数
     */
    fetchScore(faanValue, point) {
        const key = this.key(faanValue, point);
        const score = this.table[key];
        if (score) {
            return score;
        }
        return null;
    }
}
/**
 * 役クラスの互換性定義
 */
class MahjongYakuCompatible {
}
/** 競合しない */
MahjongYakuCompatible.NONE = 0;
/** 下位互換 */
MahjongYakuCompatible.LOWER = 1;
/** 上位互換 */
MahjongYakuCompatible.UPPER = 2;
/**
 * 役クラス
 */
class MahjongYakuElement {
    constructor(key, name, faanValue, isConcealed, isDownFaan) {
        this.key = key;
        this.name = name;
        this.faanValue = faanValue;
        this.isConcealed = isConcealed;
        this.isDownFaan = isDownFaan;
        this.notCombinedElements = [];
    }
    /**
     * 受け取った役のキー配列と複合するかどうか
     * @param keys 役のキー配列
     */
    isCombined(keys) {
        const combineds = this.notCombinedElements.filter(x => keys.includes(x.element.getKey()));
        const isNone = combineds.findIndex(x => x.type == MahjongYakuCompatible.NONE) !== -1;
        const isOther = combineds.findIndex(x => x.type == MahjongYakuCompatible.UPPER) !== -1;
        if (isNone || isOther) {
            return false;
        }
        return true;
    }
    getNotCombinedElements() {
        return this.notCombinedElements;
    }
    addNotCombinedElement(element, type) {
        this.notCombinedElements.push({ 'element': element, 'type': type });
    }
    hasError(isOpen) {
        if (isOpen && this.isConcealed) {
            return true;
        }
        return false;
    }
    getKey() {
        return this.key;
    }
    getName() {
        return this.name;
    }
    getFaanValue(isOpen) {
        if (this.hasError(isOpen)) {
            return 0;
        }
        if (isOpen && this.isDownFaan) {
            return this.faanValue - 1;
        }
        return this.faanValue;
    }
    getPrintFormat(isOpen) {
        const hasError = this.hasError(isOpen);
        const name = this.getName();
        const faan = this.getFaanValue(isOpen);
        return [hasError, name + "(" + faan + "飜)"];
    }
}
/**
 * 役一覧クラス
 */
class MahjongYakuList {
    constructor() {
        this.list = {};
        //1翻
        let reach = new MahjongYakuElement('reach', '立直', 1, true, false);
        let value_tiles_haku = new MahjongYakuElement('value_tiles_haku', '白', 1, false, false);
        let value_tiles_hatsu = new MahjongYakuElement('value_tiles_hatsu', '撥', 1, false, false);
        let value_tiles_chun = new MahjongYakuElement('value_tiles_chun', '中', 1, false, false);
        let value_tiles_own_wind = new MahjongYakuElement('value_tiles_own_wind', '場風', 1, false, false);
        let value_tiles_round_wind = new MahjongYakuElement('value_tiles_round_wind', '自風', 1, false, false);
        let all_simples = new MahjongYakuElement('all_simples', '断ヤオ九', 1, false, false);
        let all_runs = new MahjongYakuElement('all_runs', '平和', 1, true, false);
        let concealed_self_draw = new MahjongYakuElement('concealed_self_draw', '門前自摸', 1, true, false);
        let first_turn_win = new MahjongYakuElement('first_turn_win', '一発', 1, false, false);
        let double_run = new MahjongYakuElement('double_run', '一盃口', 1, true, false);
        let final_tile_win_own = new MahjongYakuElement('final_tile_win_own', '海底摸月', 1, false, false);
        let final_tile_win_other = new MahjongYakuElement('final_tile_win_other', '河底撈魚', 1, false, false);
        let kings_tile_draw = new MahjongYakuElement('kings_tile_draw', '嶺上開花', 1, false, false);
        let add_a_quad = new MahjongYakuElement('add_a_quad', '搶槓', 1, false, false);
        //2翻
        let double_reach = new MahjongYakuElement('double_reach', 'ダブル立直', 2, true, false);
        let all_triples = new MahjongYakuElement('all_triples', '対々和', 2, false, false);
        let three_color_runs = new MahjongYakuElement('three_color_runs', '三色同順', 2, false, true);
        let seven_pairs = new MahjongYakuElement('seven_pairs', '七対子', 2, true, false);
        let full_straight = new MahjongYakuElement('full_straight', '一気通貫', 2, false, true);
        let mixed_outside_hand = new MahjongYakuElement('mixed_outside_hand', '全帯', 2, false, true);
        let three_concealed_triples = new MahjongYakuElement('three_concealed_triples', '三暗刻', 2, false, false);
        let all_terminals_and_honors = new MahjongYakuElement('all_terminals_and_honors', '混老頭', 2, false, false);
        let three_color_triples = new MahjongYakuElement('three_color_triples', '三色同刻', 2, false, false);
        let three_quads = new MahjongYakuElement('three_quads', '三槓子', 2, false, false);
        let little_dragons = new MahjongYakuElement('little_dragons', '小三元', 2, false, false);
        //3翻
        let half_flush = new MahjongYakuElement('half_flush', '混一色', 3, false, true);
        let pure_outside_hand = new MahjongYakuElement('pure_outside_hand', '純全帯幺', 3, false, true);
        let twin_double_runs = new MahjongYakuElement('twin_double_runs', 'ニ盃口', 3, true, false);
        //6翻
        let full_flush = new MahjongYakuElement('full_flush', '清一色', 6, false, true);
        //13翻
        let four_concealed_triples = new MahjongYakuElement('four_concealed_triples', '四暗刻', 13, true, false);
        let thirteen_orphans = new MahjongYakuElement('thirteen_orphans', '国士無双', 13, true, false);
        let big_dragons = new MahjongYakuElement('big_dragons', '大三元', 13, false, false);
        let four_winds = new MahjongYakuElement('four_winds', '四喜和', 13, false, false);
        let all_honors = new MahjongYakuElement('all_honors', '字一色', 13, false, false);
        let all_terminals = new MahjongYakuElement('all_terminals', '清老頭', 13, false, false);
        let blessing_of_earth = new MahjongYakuElement('blessing_of_earth', '地和', 13, true, false);
        let all_green = new MahjongYakuElement('all_green', '緑一色', 13, false, false);
        let nine_gates = new MahjongYakuElement('nine_gates', '九蓮宝燈', 13, true, false);
        let four_quads = new MahjongYakuElement('four_quads', '四槓子', 13, false, false);
        let blessing_of_heaven = new MahjongYakuElement('blessing_of_heaven', '天和', 13, true, false);
        reach.addNotCombinedElement(double_reach, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        reach.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        value_tiles_haku.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        value_tiles_haku.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        value_tiles_hatsu.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        value_tiles_hatsu.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        value_tiles_chun.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        value_tiles_chun.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        value_tiles_own_wind.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        value_tiles_own_wind.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        value_tiles_round_wind.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        value_tiles_round_wind.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(half_flush, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        all_simples.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        all_simples.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        all_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        all_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.NONE);
        concealed_self_draw.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        concealed_self_draw.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        concealed_self_draw.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        concealed_self_draw.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.NONE);
        first_turn_win.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        first_turn_win.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        first_turn_win.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        double_run.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        double_run.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        double_run.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        double_run.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        double_run.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.NONE);
        final_tile_win_own.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        final_tile_win_own.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        final_tile_win_own.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.NONE);
        final_tile_win_other.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.NONE);
        final_tile_win_other.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.NONE);
        final_tile_win_other.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        final_tile_win_other.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        final_tile_win_other.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        final_tile_win_other.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        kings_tile_draw.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        kings_tile_draw.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(double_reach, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        add_a_quad.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        add_a_quad.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        double_reach.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        double_reach.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        double_reach.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(double_run, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        all_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        all_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(half_flush, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        three_color_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        three_color_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        seven_pairs.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        seven_pairs.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        seven_pairs.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        full_straight.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        full_straight.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        mixed_outside_hand.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        mixed_outside_hand.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(double_run, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        three_concealed_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        three_concealed_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(double_run, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        all_terminals_and_honors.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        all_terminals_and_honors.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        all_terminals_and_honors.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(double_run, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(half_flush, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        three_color_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        three_color_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(double_run, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        three_quads.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        three_quads.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(all_runs, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        little_dragons.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        little_dragons.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        half_flush.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        half_flush.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        half_flush.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.NONE);
        half_flush.addNotCombinedElement(full_flush, MahjongYakuCompatible.NONE);
        half_flush.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        half_flush.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(all_simples, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        pure_outside_hand.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(half_flush, MahjongYakuCompatible.NONE);
        pure_outside_hand.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        pure_outside_hand.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        twin_double_runs.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(full_straight, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(seven_pairs, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(all_triples, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(three_quads, MahjongYakuCompatible.NONE);
        twin_double_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        twin_double_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(little_dragons, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(half_flush, MahjongYakuCompatible.NONE);
        full_flush.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(big_dragons, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(four_winds, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(all_honors, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(all_terminals, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(all_green, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(nine_gates, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(four_quads, MahjongYakuCompatible.UPPER);
        full_flush.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.UPPER);
        four_concealed_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        four_concealed_triples.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        four_concealed_triples.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        four_concealed_triples.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(big_dragons, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(four_winds, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(all_honors, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(four_quads, MahjongYakuCompatible.NONE);
        thirteen_orphans.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        thirteen_orphans.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        big_dragons.addNotCombinedElement(four_winds, MahjongYakuCompatible.NONE);
        big_dragons.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        big_dragons.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        big_dragons.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        big_dragons.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        big_dragons.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        four_winds.addNotCombinedElement(big_dragons, MahjongYakuCompatible.NONE);
        four_winds.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        four_winds.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        four_winds.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        four_winds.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        four_winds.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        all_honors.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        all_honors.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        all_honors.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        all_honors.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        all_honors.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(big_dragons, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(four_winds, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(all_honors, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        all_terminals.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        all_terminals.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(four_quads, MahjongYakuCompatible.NONE);
        blessing_of_earth.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.NONE);
        blessing_of_earth.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        blessing_of_earth.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(big_dragons, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(four_winds, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(all_honors, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        all_green.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        all_green.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(four_concealed_triples, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(big_dragons, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(four_winds, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(all_honors, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(all_terminals, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(all_green, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(four_quads, MahjongYakuCompatible.NONE);
        nine_gates.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        nine_gates.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(thirteen_orphans, MahjongYakuCompatible.NONE);
        four_quads.addNotCombinedElement(nine_gates, MahjongYakuCompatible.NONE);
        four_quads.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.NONE);
        four_quads.addNotCombinedElement(blessing_of_heaven, MahjongYakuCompatible.NONE);
        four_quads.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        four_quads.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(four_quads, MahjongYakuCompatible.NONE);
        blessing_of_heaven.addNotCombinedElement(blessing_of_earth, MahjongYakuCompatible.NONE);
        blessing_of_heaven.addNotCombinedElement(reach, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(value_tiles_haku, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(value_tiles_hatsu, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(value_tiles_chun, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(value_tiles_own_wind, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(value_tiles_round_wind, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(all_simples, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(all_runs, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(concealed_self_draw, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(first_turn_win, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(double_run, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(final_tile_win_own, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(final_tile_win_other, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(kings_tile_draw, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(add_a_quad, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(double_reach, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(all_triples, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(three_color_runs, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(full_straight, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(mixed_outside_hand, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(three_concealed_triples, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(all_terminals_and_honors, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(three_color_triples, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(three_quads, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(little_dragons, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(half_flush, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(pure_outside_hand, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(twin_double_runs, MahjongYakuCompatible.LOWER);
        blessing_of_heaven.addNotCombinedElement(full_flush, MahjongYakuCompatible.LOWER);
        //1翻
        this.list[reach.getKey()] = reach;
        this.list[value_tiles_haku.getKey()] = value_tiles_haku;
        this.list[value_tiles_hatsu.getKey()] = value_tiles_hatsu;
        this.list[value_tiles_chun.getKey()] = value_tiles_chun;
        this.list[value_tiles_own_wind.getKey()] = value_tiles_own_wind;
        this.list[value_tiles_round_wind.getKey()] = value_tiles_round_wind;
        this.list[all_simples.getKey()] = all_simples;
        this.list[all_runs.getKey()] = all_runs;
        this.list[concealed_self_draw.getKey()] = concealed_self_draw;
        this.list[first_turn_win.getKey()] = first_turn_win;
        this.list[double_run.getKey()] = double_run;
        this.list[final_tile_win_own.getKey()] = final_tile_win_own;
        this.list[final_tile_win_other.getKey()] = final_tile_win_other;
        this.list[kings_tile_draw.getKey()] = kings_tile_draw;
        this.list[add_a_quad.getKey()] = add_a_quad;
        //2翻
        this.list[double_reach.getKey()] = double_reach;
        this.list[all_triples.getKey()] = all_triples;
        this.list[three_color_runs.getKey()] = three_color_runs;
        this.list[seven_pairs.getKey()] = seven_pairs;
        this.list[full_straight.getKey()] = full_straight;
        this.list[mixed_outside_hand.getKey()] = mixed_outside_hand;
        this.list[three_concealed_triples.getKey()] = three_concealed_triples;
        this.list[all_terminals_and_honors.getKey()] = all_terminals_and_honors;
        this.list[three_color_triples.getKey()] = three_color_triples;
        this.list[three_quads.getKey()] = three_quads;
        this.list[little_dragons.getKey()] = little_dragons;
        //3翻
        this.list[half_flush.getKey()] = half_flush;
        this.list[pure_outside_hand.getKey()] = pure_outside_hand;
        this.list[twin_double_runs.getKey()] = twin_double_runs;
        //6翻
        this.list[full_flush.getKey()] = full_flush;
        //13翻
        this.list[four_concealed_triples.getKey()] = four_concealed_triples;
        this.list[thirteen_orphans.getKey()] = thirteen_orphans;
        this.list[big_dragons.getKey()] = big_dragons;
        this.list[four_winds.getKey()] = four_winds;
        this.list[all_honors.getKey()] = all_honors;
        this.list[all_terminals.getKey()] = all_terminals;
        this.list[blessing_of_earth.getKey()] = blessing_of_earth;
        this.list[all_green.getKey()] = all_green;
        this.list[nine_gates.getKey()] = nine_gates;
        this.list[four_quads.getKey()] = four_quads;
        this.list[blessing_of_heaven.getKey()] = blessing_of_heaven;
    }
    getMahjongYakuElement(key) {
        return this.list[key];
    }
}
class Hand {
}
/**
 * 計算機クラス
 */
class MahjongCalculator {
    constructor() {
        this.mahjongYakuList = new MahjongYakuList();
        this.mahjongScoreTableParent = new MahjongScoreTable(true);
        this.mahjongScoreTableChild = new MahjongScoreTable(false);
    }
    //成立した役の一覧を取得する todo handを受け取る
    //成立チェックして成立した役を取得する
    getYakuResult(keys) {
        return keys.filter(key => this.mahjongYakuList.getMahjongYakuElement(key).isCombined(keys));
    }
    /**
     * 合計飜数を取得する
     * @param isOpen 副露しているかどうか
     * @param keys 役のキーの配列
     * @param bonus ドラ数
     */
    getTotalFaanValue(isOpen, keys, bonus) {
        let result = 0;
        keys.forEach(key => {
            result += this.mahjongYakuList.getMahjongYakuElement(key).getFaanValue(isOpen);
        });
        result += bonus;
        return result;
    }
    /**
     * 合計点数を取得する
     * @param isParent 親かどうか
     * @param faanValue 飜数
     * @param point 符数
     */
    getScore(isParent, faanValue, point) {
        let scoreTable;
        if (isParent) {
            scoreTable = this.mahjongScoreTableParent;
        }
        else {
            scoreTable = this.mahjongScoreTableChild;
        }
        if (faanValue >= 13) {
            faanValue = 13;
        }
        const scoreElement = scoreTable.fetchScore(faanValue, point);
        if (scoreElement) {
            return scoreElement.getPrintFormat();
        }
        return '得点が有りません。飜数または符数が不正です。';
    }
}
// チェックされてる奴から一致する役の飜数を合計して表示する
// 
// 形から符数を自動判定
function test() {
    var e = new MahjongCalculator();
    let options = document.getElementsByName("options");
    let status = document.getElementsByName("status");
    let bonus = document.getElementById("bonus");
    let point = document.getElementById("point");
    let results = document.getElementById('results');
    results.innerHTML = '';
    // flags
    let isOpen = false;
    let isParent = false;
    let bonusValue = 0;
    let pointValue = 0;
    console.log("--- 選択したステータスは以下の通りです ---");
    for (let i = 0; i < status.length; i++) {
        if (status[i].checked) {
            console.log(status[i].id);
            if (status[i].id == 'is_parent') {
                isParent = true;
            }
            if (status[i].id == 'is_open') {
                isOpen = true;
            }
        }
    }
    console.log("--- 選択したドラは以下の通りです ---");
    console.log(bonus.value);
    bonusValue = Number(bonus.value);
    console.log("--- 選択した符数は以下の通りです ---");
    console.log(point.value);
    pointValue = Number(point.value);
    console.log("--- 選択したオプションは以下の通りです ---");
    let keys = [];
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let key = options[i].id;
            keys.push(key);
        }
    }
    console.log("--- 成立した役は以下の通りです! ---");
    let yakuResult = e.getYakuResult(keys);
    console.log(yakuResult);
    console.log("--- 合計飜数は以下の通りです! ---");
    const totalFaan = e.getTotalFaanValue(isOpen, yakuResult, bonusValue);
    console.log(totalFaan);
    console.log("--- 合計点数は以下の通りです! ---");
    const score = e.getScore(isParent, totalFaan, pointValue);
    console.log(score);
    console.log("--- POPUPのHTMLを整形します! ---");
    yakuResult.forEach(key => {
        let [hasError, name] = e.mahjongYakuList.getMahjongYakuElement(key).getPrintFormat(isOpen);
        results.innerHTML += '<div>' + name + '</div>';
    });
    if (bonusValue != 0) {
        results.innerHTML += '<div>ドラ' + bonusValue + '(' + bonusValue + '飜)</div>';
    }
    results.innerHTML += '<p>' + '合計:' + totalFaan + '飜' + '</p>';
    results.innerHTML += '<p>' + score + '</p>';
    let pop11 = document.getElementById('pop11');
    pop11.checked = true;
}
const calc = document.getElementById('calc');
calc.addEventListener("click", (e) => test());
// フッター
// ヘッダーのしたは少し開ける
// クリアボタンのjs
// 競合不可能役の選択不可
// モーダルの表示内容
// モーダルの閉じるボタンは右上か右下がいい
// 役のボタンちょっとでかいかな
// 計算ボタンのCSS
// スマホはハンごとにタブ表示にする
// ドラも別タブにする
//# sourceMappingURL=mahjong.js.map