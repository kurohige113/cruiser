"use strict";
//入力した飜数と符数から点数計算ができる
// スコアクラス
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
// スコアテーブルクラス
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
    key(faanValue, point) {
        return faanValue + '_' + point;
    }
}
// 役クラス
class MahjongYakuElement {
    constructor(key, name, faanValue, isConcealed, isDownFaan) {
        this.key = key;
        this.name = name;
        this.faanValue = faanValue;
        this.isConcealed = isConcealed;
        this.isDownFaan = isDownFaan;
    }
    hasError(isOpen) {
        if (isOpen && this.isConcealed) {
            return true;
        }
        return false;
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
// 役一覧クラス
class MahjongYakuList {
    constructor() {
        this.list = {};
        //1翻
        this.list['reach'] = new MahjongYakuElement('reach', '立直', 1, true, false);
        this.list['value_tiles_haku'] = new MahjongYakuElement('value_tiles_haku', '白', 1, false, false);
        this.list['value_tiles_hatsu'] = new MahjongYakuElement('value_tiles_hatsu', '撥', 1, false, false);
        this.list['value_tiles_chun'] = new MahjongYakuElement('value_tiles_chun', '中', 1, false, false);
        this.list['value_tiles_own_wind'] = new MahjongYakuElement('value_tiles_own_wind', '場風', 1, false, false);
        this.list['value_tiles_round_wind'] = new MahjongYakuElement('value_tiles_round_wind', '自風', 1, false, false);
        this.list['all_aimples'] = new MahjongYakuElement('all_aimples', '断ヤオ九', 1, false, false);
        this.list['all_runs'] = new MahjongYakuElement('all_runs', '平和', 1, true, false);
        this.list['concealed_self_draw'] = new MahjongYakuElement('concealed_self_draw', '門前自摸', 1, true, false);
        this.list['first_turn_win'] = new MahjongYakuElement('first_turn_win', '一発', 1, false, false);
        this.list['double_run'] = new MahjongYakuElement('double_run', '一盃口', 1, true, false);
        this.list['final_tile_win_own'] = new MahjongYakuElement('final_tile_win_own', '河底撈魚', 1, false, false);
        this.list['final_tile_win_other'] = new MahjongYakuElement('final_tile_win_other', '海底摸月', 1, false, false);
        this.list['kings_tile_draw'] = new MahjongYakuElement('kings_tile_draw', '嶺上開花', 1, false, false);
        this.list['add_a_quad'] = new MahjongYakuElement('add_a_quad', '搶槓', 1, false, false);
        //2翻
        this.list['double_reach'] = new MahjongYakuElement('double_reach', 'ダブル立直', 2, true, false);
        this.list['all_triples'] = new MahjongYakuElement('all_triples', '対々和', 2, false, false);
        this.list['three_color_runs'] = new MahjongYakuElement('three_color_runs', '三色同順', 2, false, true);
        this.list['seven_pairs'] = new MahjongYakuElement('seven_pairs', '七対子', 2, true, false);
        this.list['full_straight'] = new MahjongYakuElement('full_straight', '一気通貫', 2, false, true);
        this.list['mixed_outside_hand'] = new MahjongYakuElement('mixed_outside_hand', '全帯', 2, false, true);
        this.list['three_concealed_triples'] = new MahjongYakuElement('three_concealed_triples', '三暗刻', 2, false, false);
        this.list['all_terminals_and_honors'] = new MahjongYakuElement('all_terminals_and_honors', '混老頭', 2, false, false);
        this.list['three_color_triples'] = new MahjongYakuElement('three_color_triples', '三色同刻', 2, false, false);
        this.list['three_quads'] = new MahjongYakuElement('three_quads', '三槓子', 2, false, false);
        this.list['little_dragons'] = new MahjongYakuElement('little_dragons', '小三元', 2, false, false);
        //3翻
        this.list['half_flush'] = new MahjongYakuElement('half_flush', '混一色', 3, false, true);
        this.list['pure_outside_hand'] = new MahjongYakuElement('pure_outside_hand', '純全帯幺', 3, false, true);
        this.list['2_double_runs'] = new MahjongYakuElement('2_double_runs', 'ニ盃口', 3, true, false);
        //6翻
        this.list['full_flush'] = new MahjongYakuElement('full_flush', '清一色', 6, false, true);
        //13翻
        this.list['four_concealed_triples'] = new MahjongYakuElement('four_concealed_triples', '四暗刻', 13, true, false);
        this.list['thirteen_orphans'] = new MahjongYakuElement('thirteen_orphans', '国士無双', 13, true, false);
        this.list['big_dragons'] = new MahjongYakuElement('big_dragons', '大三元', 13, false, false);
        this.list['four_winds'] = new MahjongYakuElement('four_winds', '四喜和', 13, false, false);
        this.list['all_honors'] = new MahjongYakuElement('all_honors', '字一色', 13, false, false);
        this.list['all_terminals'] = new MahjongYakuElement('all_terminals', '清老頭', 13, false, false);
        this.list['blessing_of_earth'] = new MahjongYakuElement('blessing_of_earth', '地和', 13, true, false);
        this.list['all_green'] = new MahjongYakuElement('all_green', '緑一色', 13, false, false);
        this.list['nine_gates'] = new MahjongYakuElement('nine_gates', '九蓮宝燈', 13, true, false);
        this.list['four_quads'] = new MahjongYakuElement('four_quads', '四槓子', 13, false, false);
        this.list['blessing_of_heaven'] = new MahjongYakuElement('blessing_of_heaven', '天和', 13, true, false);
    }
}
class Hand {
}
// 計算機クラス
class MahjongCalculator {
    constructor() {
        this.mahjongYakuList = new MahjongYakuList();
        this.mahjongScoreTableParent = new MahjongScoreTable(true);
        this.mahjongScoreTableChild = new MahjongScoreTable(false);
    }
    //成立した役の一覧を取得する todo handを受け取る
    //合計飜数を取得する
    getTotalFaanValue(isOpen, keys) {
        let result = 0;
        for (let i = 0; i < keys.length; i++) {
            result += this.mahjongYakuList.list[keys[i]].getFaanValue(isOpen);
        }
        return result;
    }
}
//TODO 画面にチェックボックス作る
// チェックされてる奴から一致する役の飜数を合計して表示する
// 
// 形から符数を自動判定
function test() {
    var e = new MahjongCalculator();
    let options = document.getElementsByName("options");
    let status = document.getElementsByName("status");
    let contents = document.getElementById('contents');
    contents.innerHTML = '';
    console.log("--- 選択したステータスは以下の通りです ---");
    let isOpen = false;
    for (let i = 0; i < status.length; i++) {
        if (status[i].checked) {
            console.log(status[i].id);
            isOpen = true;
        }
    }
    console.log("--- 選択したオプションは以下の通りです ---");
    let keys = [];
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let key = options[i].id;
            keys.push(key);
            let [hasError, name] = e.mahjongYakuList.list[key].getPrintFormat(isOpen);
            if (!hasError) {
                console.log(name);
                contents.innerHTML += '<div>' + name + '</div>';
            }
        }
    }
    console.log("--- 合計飜数は以下の通りです ---");
    const totalFaan = e.getTotalFaanValue(isOpen, keys);
    console.log(totalFaan);
    contents.innerHTML += '<div>' + '合計:' + totalFaan + '飜' + '</div>';
}
// input1:飜数, input2:符数 => 点数
function printScore(input1, input2) {
    const SCORE_TABLE_P = new MahjongScoreTable(true);
    const SCORE_TABLE_C = new MahjongScoreTable(false);
    let contents = document.getElementById('contents');
    contents.innerHTML = '';
    contents.innerHTML += '<div><span>親 </span>' + SCORE_TABLE_P.table[SCORE_TABLE_P.key(input1, input2)].getPrintFormat() + '</div>';
    contents.innerHTML += '<div><span>子 </span>' + SCORE_TABLE_C.table[SCORE_TABLE_C.key(input1, input2)].getPrintFormat() + '</div>';
}
//const input1: HTMLInputElement =<HTMLInputElement>document.getElementById('select1');
//const input2: HTMLInputElement =<HTMLInputElement>document.getElementById('select2');
const calc = document.getElementById('calc');
//calc.addEventListener("click", (e:Event) => printScore(Number(input1.value), Number(input2.value)));
calc.addEventListener("click", (e) => test());
//# sourceMappingURL=mahjong.js.map