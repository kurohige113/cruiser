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
    name: string;
    score: number;
    paymentChild: number;
    paymentParent: number;
    
    constructor(name: string, score: number, paymentChild: number, paymentParent: number) {
        this.name = name;
        this.score = score;
        this.paymentChild = paymentChild;
        this.paymentParent = paymentParent;
    }

    getPrintFormat(): string {
        const payment: string = this.paymentParent == 0 ? String(this.paymentChild) + "オール" : String(this.paymentChild) + "/" + String(this.paymentParent);
        return this.name + this.score + "点" + "(" + payment + ")";
    }
}

/**
 * スコアテーブルクラス
 */
class MahjongScoreTable {
    isParent: boolean;
    table: { [key: string]: MahjongScoreElement; } = {};

    constructor(isParent: boolean) {
        this.isParent = isParent;
        if (isParent) {
            this.table[this.key(1, 30)]  = new MahjongScoreElement('', 1500,  500, 0);
            this.table[this.key(1, 40)]  = new MahjongScoreElement('', 2000,  700, 0);
            this.table[this.key(1, 50)]  = new MahjongScoreElement('', 2400,  800, 0);
            this.table[this.key(1, 60)]  = new MahjongScoreElement('', 2900, 1000, 0);
            this.table[this.key(1, 70)]  = new MahjongScoreElement('', 3400, 1200, 0);
            this.table[this.key(1, 80)]  = new MahjongScoreElement('', 3900, 1300, 0);
            this.table[this.key(1, 90)]  = new MahjongScoreElement('', 4400, 1500, 0);
            this.table[this.key(1, 100)] = new MahjongScoreElement('', 4800, 1600, 0);
            this.table[this.key(1, 110)] = new MahjongScoreElement('', 5300, 1800, 0);
            
            this.table[this.key(2, 20)]  = new MahjongScoreElement('',  2000,  700, 0);
            this.table[this.key(2, 25)]  = new MahjongScoreElement('',  2400,  800, 0);
            this.table[this.key(2, 30)]  = new MahjongScoreElement('',  2900, 1000, 0);
            this.table[this.key(2, 40)]  = new MahjongScoreElement('',  3900, 1300, 0);
            this.table[this.key(2, 50)]  = new MahjongScoreElement('',  4800, 1600, 0);
            this.table[this.key(2, 60)]  = new MahjongScoreElement('',  5800, 2000, 0);
            this.table[this.key(2, 70)]  = new MahjongScoreElement('',  6800, 2300, 0);
            this.table[this.key(2, 80)]  = new MahjongScoreElement('',  7700, 2600, 0);
            this.table[this.key(2, 90)]  = new MahjongScoreElement('',  8700, 2900, 0);
            this.table[this.key(2, 100)] = new MahjongScoreElement('',  9600, 3200, 0);
            this.table[this.key(2, 110)] = new MahjongScoreElement('', 10600, 3600, 0);

            this.table[this.key(3, 20)]  = new MahjongScoreElement('',     3900, 1300, 0);
            this.table[this.key(3, 25)]  = new MahjongScoreElement('',     4800, 1600, 0);
            this.table[this.key(3, 30)]  = new MahjongScoreElement('',     5800, 2000, 0);
            this.table[this.key(3, 40)]  = new MahjongScoreElement('',     7700, 2600, 0);
            this.table[this.key(3, 50)]  = new MahjongScoreElement('',     9600, 3200, 0);
            this.table[this.key(3, 60)]  = new MahjongScoreElement('',    11600, 3900, 0);
            this.table[this.key(3, 70)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 80)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 90)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(3, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);

            this.table[this.key(4, 20)]  = new MahjongScoreElement('',     7700, 2600, 0);
            this.table[this.key(4, 25)]  = new MahjongScoreElement('',     9600, 3200, 0);
            this.table[this.key(4, 30)]  = new MahjongScoreElement('',    11600, 3900, 0);
            this.table[this.key(4, 40)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 50)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 60)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 70)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 80)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 90)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(4, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);

            this.table[this.key(5, 20)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 25)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 30)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 40)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 50)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 60)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 70)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 80)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 90)]  = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 100)] = new MahjongScoreElement('満貫', 12000, 4000, 0);
            this.table[this.key(5, 110)] = new MahjongScoreElement('満貫', 12000, 4000, 0);

            this.table[this.key(6, 20)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 25)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 30)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 40)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 50)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 60)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 70)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 80)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 90)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 100)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(6, 110)] = new MahjongScoreElement('跳満', 18000, 6000, 0);

            this.table[this.key(7, 20)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 25)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 30)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 40)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 50)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 60)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 70)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 80)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 90)]  = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 100)] = new MahjongScoreElement('跳満', 18000, 6000, 0);
            this.table[this.key(7, 110)] = new MahjongScoreElement('跳満', 18000, 6000, 0);

            this.table[this.key(8, 20)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 25)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 30)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 40)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 50)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 60)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 70)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 80)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 90)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(8, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);

            this.table[this.key(9, 20)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 25)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 30)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 40)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 50)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 60)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 70)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 80)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 90)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(9, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            
            this.table[this.key(10, 20)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 25)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 30)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 40)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 50)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 60)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 70)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 80)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 90)]  = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 100)] = new MahjongScoreElement('倍満', 24000, 8000, 0);
            this.table[this.key(10, 110)] = new MahjongScoreElement('倍満', 24000, 8000, 0);

            this.table[this.key(11, 20)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 25)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 30)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 40)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 50)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 60)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 70)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 80)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 90)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 100)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(11, 110)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);

            this.table[this.key(12, 20)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 25)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 30)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 40)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 50)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 60)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 70)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 80)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 90)]  = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 100)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);
            this.table[this.key(12, 110)] = new MahjongScoreElement('三倍満', 36000, 12000, 0);

            this.table[this.key(13, 20)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 25)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 30)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 40)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 50)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 60)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 70)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 80)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 90)]  = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 100)] = new MahjongScoreElement('役満', 48000, 16000, 0);
            this.table[this.key(13, 110)] = new MahjongScoreElement('役満', 48000, 16000, 0);

        } else {
            this.table[this.key(1, 30)]  = new MahjongScoreElement('', 1000, 300,  500);
            this.table[this.key(1, 40)]  = new MahjongScoreElement('', 1300, 400,  700);
            this.table[this.key(1, 50)]  = new MahjongScoreElement('', 1600, 400,  800);
            this.table[this.key(1, 60)]  = new MahjongScoreElement('', 2000, 500, 1000);
            this.table[this.key(1, 70)]  = new MahjongScoreElement('', 2300, 600, 1200);
            this.table[this.key(1, 80)]  = new MahjongScoreElement('', 2600, 700, 1300);
            this.table[this.key(1, 90)]  = new MahjongScoreElement('', 2900, 800, 1500);
            this.table[this.key(1, 100)] = new MahjongScoreElement('', 3200, 800, 1600);
            this.table[this.key(1, 110)] = new MahjongScoreElement('', 3600, 900, 1800);
            
            this.table[this.key(2, 20)]  = new MahjongScoreElement('', 1300,  400,  700);
            this.table[this.key(2, 25)]  = new MahjongScoreElement('', 1600,  400,  800);
            this.table[this.key(2, 30)]  = new MahjongScoreElement('', 2000,  500, 1000);
            this.table[this.key(2, 40)]  = new MahjongScoreElement('', 2600,  700, 1300);
            this.table[this.key(2, 50)]  = new MahjongScoreElement('', 3200,  800, 1600);
            this.table[this.key(2, 60)]  = new MahjongScoreElement('', 3900, 1000, 2000);
            this.table[this.key(2, 70)]  = new MahjongScoreElement('', 4500, 1200, 2300);
            this.table[this.key(2, 80)]  = new MahjongScoreElement('', 5200, 1300, 2600);
            this.table[this.key(2, 90)]  = new MahjongScoreElement('', 5800, 1500, 2900);
            this.table[this.key(2, 100)] = new MahjongScoreElement('', 6400, 1600, 3200);
            this.table[this.key(2, 110)] = new MahjongScoreElement('', 7100, 1800, 3600);

            this.table[this.key(3, 20)]  = new MahjongScoreElement('',    2600,  700, 1300);
            this.table[this.key(3, 25)]  = new MahjongScoreElement('',    3200,  800, 1600);
            this.table[this.key(3, 30)]  = new MahjongScoreElement('',    3900, 1000, 2000);
            this.table[this.key(3, 40)]  = new MahjongScoreElement('',    5200, 1300, 2600);
            this.table[this.key(3, 50)]  = new MahjongScoreElement('',    6400, 1600, 3200);
            this.table[this.key(3, 60)]  = new MahjongScoreElement('',    7700, 2000, 3900);
            this.table[this.key(3, 70)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 80)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 90)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(3, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);

            this.table[this.key(4, 20)]  = new MahjongScoreElement('',    5200, 1300, 2600);
            this.table[this.key(4, 25)]  = new MahjongScoreElement('',    6400, 1600, 3200);
            this.table[this.key(4, 30)]  = new MahjongScoreElement('',    7700, 2000, 3900);
            this.table[this.key(4, 40)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 50)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 60)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 70)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 80)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 90)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(4, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);

            this.table[this.key(5, 20)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 25)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 30)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 40)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 50)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 60)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 70)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 80)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 90)]  = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 100)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);
            this.table[this.key(5, 110)] = new MahjongScoreElement('満貫', 8000, 2000, 4000);

            this.table[this.key(6, 20)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 25)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 30)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 40)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 50)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 60)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 70)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 80)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 90)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 100)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(6, 110)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);

            this.table[this.key(7, 20)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 25)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 30)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 40)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 50)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 60)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 70)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 80)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 90)]  = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 100)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);
            this.table[this.key(7, 110)] = new MahjongScoreElement('跳満', 12000, 3000, 6000);

            this.table[this.key(8, 20)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 25)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 30)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 40)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 50)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 60)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 70)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 80)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 90)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(8, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);

            this.table[this.key(9, 20)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 25)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 30)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 40)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 50)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 60)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 70)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 80)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 90)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(9, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            
            this.table[this.key(10, 20)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 25)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 30)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 40)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 50)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 60)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 70)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 80)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 90)]  = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 100)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);
            this.table[this.key(10, 110)] = new MahjongScoreElement('倍満', 16000, 4000, 8000);

            this.table[this.key(11, 20)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 25)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 30)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 40)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 50)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 60)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 70)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 80)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 90)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 100)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(11, 110)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);

            this.table[this.key(12, 20)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 25)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 30)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 40)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 50)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 60)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 70)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 80)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 90)]  = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 100)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);
            this.table[this.key(12, 110)] = new MahjongScoreElement('三倍満', 24000, 6000, 12000);

            this.table[this.key(13, 20)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 25)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 30)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 40)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 50)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 60)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 70)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 80)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 90)]  = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 100)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
            this.table[this.key(13, 110)] = new MahjongScoreElement('役満', 32000, 8000, 16000);
        }
    }

    /**
     * テーブルのキーを生成します。
     * @param faanValue 飜数
     * @param point 符数
     */
    key(faanValue: number, point: number): string {
        return faanValue + '_' + point;
    }

    /**
     * テーブルから点数を取得します。
     * @param faanValue 飜数
     * @param point 符数
     */
    fetchScore(faanValue: number, point: number): MahjongScoreElement|null {
        const key = this.key(faanValue, point);
        const score = this.table[key];
        if (score) {
            return score;
        }
        return null;
    }
}

class MahjongYakuNotConbinedPairType {
    static readonly NONE = 0;
    static readonly OWN = 1;
    static readonly OTHER = 2;
}
/**
 * 役クラスの複合設定インターフェース
 */
interface MahjongYakuNotConbinedElement {
    element: MahjongYakuElement;
    type: MahjongYakuNotConbinedPairType;
}

/**
 * 役クラス
 */
class MahjongYakuElement {
    key: string;//キー
    name: string;//役
    faanValue: number;//飜数
    isConcealed: boolean;//門前で成立する役か
    isDownFaan: boolean;//食い下がりする役か
    notCombinedElements: MahjongYakuNotConbinedElement[];//複合しない役

    constructor(key: string, name: string, faanValue: number, isConcealed: boolean, isDownFaan: boolean) {
        this.key = key;
        this.name = name;
        this.faanValue = faanValue;
        this.isConcealed = isConcealed;
        this.isDownFaan = isDownFaan;
        this.notCombinedElements = [];
    }

    //複合するかどうか
    isCombined(keys: string[]) {
        const combineds = this.notCombinedElements.filter(x => keys.includes(x.element.getKey()));
        const isNone = combineds.findIndex(x => x.type == MahjongYakuNotConbinedPairType.NONE) !== -1;
        const isOther = combineds.findIndex(x => x.type == MahjongYakuNotConbinedPairType.OTHER) !== -1;

        if (isNone || isOther) {
            return false;
        }

        return true;
    }

    getNotCombinedElements() {
        return this.notCombinedElements;
    }

    addNotCombinedElement(element: MahjongYakuElement, type: MahjongYakuNotConbinedPairType) {
        this.notCombinedElements.push({'element':element, 'type':type});
    }

    hasError(isOpen: boolean): boolean {
        if (isOpen && this.isConcealed) {
            return true;
        }
        return false;
    }

    getKey(): string {
        return this.key;
    }

    getName(): string {
        return this.name;
    }

    getFaanValue(isOpen: boolean): number {
        if (this.hasError(isOpen)) {
            return 0;
        }
        if (isOpen && this.isDownFaan) {
            return this.faanValue - 1;
        }
        return this.faanValue;
    }

    getPrintFormat(isOpen: boolean): [boolean, string] {
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
    list: { [key: string]: MahjongYakuElement; } = {};

    constructor() {
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

        reach.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        reach.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);


        value_tiles_haku.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_haku.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_haku.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        value_tiles_hatsu.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_hatsu.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_hatsu.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        value_tiles_chun.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_chun.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_chun.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        value_tiles_own_wind.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_own_wind.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_own_wind.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        value_tiles_round_wind.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        value_tiles_round_wind.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        value_tiles_round_wind.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        all_simples.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        all_simples.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        all_simples.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        all_runs.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        all_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        all_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        concealed_self_draw.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.NONE);
        concealed_self_draw.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        concealed_self_draw.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        concealed_self_draw.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        concealed_self_draw.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        first_turn_win.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.NONE);
        first_turn_win.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        first_turn_win.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        first_turn_win.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        double_run.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        double_run.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        double_run.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        double_run.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        double_run.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        double_run.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        final_tile_win_own.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_own.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_own.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_own.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        final_tile_win_other.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_other.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_other.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_other.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_other.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        final_tile_win_other.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        final_tile_win_other.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        kings_tile_draw.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        kings_tile_draw.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        kings_tile_draw.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        add_a_quad.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        add_a_quad.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        add_a_quad.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        double_reach.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        double_reach.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        double_reach.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        double_reach.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        all_triples.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        all_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        all_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        three_color_runs.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        three_color_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        three_color_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        seven_pairs.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        seven_pairs.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        seven_pairs.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        seven_pairs.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);
        
        full_straight.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        full_straight.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        full_straight.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        mixed_outside_hand.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        mixed_outside_hand.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        mixed_outside_hand.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        three_concealed_triples.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        three_concealed_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        three_concealed_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        all_terminals_and_honors.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_terminals_and_honors.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        all_terminals_and_honors.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        all_terminals_and_honors.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        three_color_triples.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        three_color_triples.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        three_color_triples.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);
        
        three_quads.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        three_quads.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        three_quads.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);
        
        little_dragons.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        little_dragons.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        little_dragons.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        half_flush.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        half_flush.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        half_flush.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        half_flush.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        half_flush.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.NONE);
        half_flush.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        half_flush.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        pure_outside_hand.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        pure_outside_hand.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.NONE);
        pure_outside_hand.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        pure_outside_hand.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        twin_double_runs.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        twin_double_runs.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(seven_pairs, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.NONE);
        twin_double_runs.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        twin_double_runs.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        full_flush.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.NONE);
        full_flush.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.OTHER);
        full_flush.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.OTHER);

        four_concealed_triples.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        four_concealed_triples.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        four_concealed_triples.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        four_concealed_triples.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        thirteen_orphans.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.NONE);
        thirteen_orphans.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        thirteen_orphans.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        big_dragons.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        big_dragons.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.NONE);
        big_dragons.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        big_dragons.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        big_dragons.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        big_dragons.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        big_dragons.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        four_winds.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        four_winds.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.NONE);
        four_winds.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        four_winds.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        four_winds.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        four_winds.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        four_winds.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        all_honors.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        all_honors.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        all_honors.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        all_honors.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        all_honors.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        all_honors.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        all_terminals.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        all_terminals.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        all_terminals.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        blessing_of_earth.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.NONE);
        blessing_of_earth.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.NONE);
        blessing_of_earth.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_earth.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        all_green.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        all_green.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        all_green.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        nine_gates.addNotCombinedElement(four_concealed_triples, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(big_dragons, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(four_winds, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(all_honors, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(all_terminals, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(all_green, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.NONE);
        nine_gates.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        nine_gates.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        four_quads.addNotCombinedElement(thirteen_orphans, MahjongYakuNotConbinedPairType.NONE);
        four_quads.addNotCombinedElement(nine_gates, MahjongYakuNotConbinedPairType.NONE);
        four_quads.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.NONE);
        four_quads.addNotCombinedElement(blessing_of_heaven, MahjongYakuNotConbinedPairType.NONE);
        four_quads.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        four_quads.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

        blessing_of_heaven.addNotCombinedElement(four_quads, MahjongYakuNotConbinedPairType.NONE);
        blessing_of_heaven.addNotCombinedElement(blessing_of_earth, MahjongYakuNotConbinedPairType.NONE);
        blessing_of_heaven.addNotCombinedElement(reach, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(value_tiles_haku, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(value_tiles_hatsu, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(value_tiles_chun, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(value_tiles_own_wind, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(value_tiles_round_wind, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(all_simples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(all_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(concealed_self_draw, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(first_turn_win, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(double_run, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(final_tile_win_own, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(final_tile_win_other, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(kings_tile_draw, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(add_a_quad, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(double_reach, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(all_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(three_color_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(full_straight, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(mixed_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(three_concealed_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(all_terminals_and_honors, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(three_color_triples, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(three_quads, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(little_dragons, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(half_flush, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(pure_outside_hand, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(twin_double_runs, MahjongYakuNotConbinedPairType.OWN);
        blessing_of_heaven.addNotCombinedElement(full_flush, MahjongYakuNotConbinedPairType.OWN);

    
        //1翻
        this.list['reach'] = reach;
        this.list['value_tiles_haku'] = value_tiles_haku;
        this.list['value_tiles_hatsu'] = value_tiles_hatsu;
        this.list['value_tiles_chun'] = value_tiles_chun;
        this.list['value_tiles_own_wind'] = value_tiles_own_wind;
        this.list['value_tiles_round_wind'] = value_tiles_round_wind;
        this.list['all_simples'] = all_simples;
        this.list['all_runs'] = all_runs;
        this.list['concealed_self_draw'] = concealed_self_draw;
        this.list['first_turn_win'] = first_turn_win;
        this.list['double_run'] = double_run;
        this.list['final_tile_win_own'] = final_tile_win_own;
        this.list['final_tile_win_other'] = final_tile_win_other;
        this.list['kings_tile_draw'] = kings_tile_draw;
        this.list['add_a_quad'] = add_a_quad;
        //2翻
        this.list['double_reach'] = double_reach;
        this.list['all_triples'] = all_triples;
        this.list['three_color_runs'] = three_color_runs;
        this.list['seven_pairs'] = seven_pairs;
        this.list['full_straight'] = full_straight;
        this.list['mixed_outside_hand'] = mixed_outside_hand;
        this.list['three_concealed_triples'] = three_concealed_triples;
        this.list['all_terminals_and_honors'] = all_terminals_and_honors;
        this.list['three_color_triples'] = three_color_triples;
        this.list['three_quads'] = three_quads;
        this.list['little_dragons'] = little_dragons;
        //3翻
        this.list['half_flush'] = half_flush;
        this.list['pure_outside_hand'] = pure_outside_hand;
        this.list['twin_double_runs'] = twin_double_runs;
        //6翻
        this.list['full_flush'] = full_flush;
        //13翻
        this.list['four_concealed_triples'] = four_concealed_triples;
        this.list['thirteen_orphans'] = thirteen_orphans;
        this.list['big_dragons'] = big_dragons;
        this.list['four_winds'] = four_winds;
        this.list['all_honors'] = all_honors;
        this.list['all_terminals'] = all_terminals;
        this.list['blessing_of_earth'] = blessing_of_earth;
        this.list['all_green'] = all_green;
        this.list['nine_gates'] = nine_gates;
        this.list['four_quads'] = four_quads;
        this.list['blessing_of_heaven'] = blessing_of_heaven;
    }

    getMahjongYakuElement(key: string): MahjongYakuElement {
        return this.list[key];
    }
}

class Hand {
    //todo
}

/**
 * 計算機クラス
 */
class MahjongCalculator {
    mahjongYakuList: MahjongYakuList;
    mahjongScoreTableParent: MahjongScoreTable;
    mahjongScoreTableChild: MahjongScoreTable;

    constructor() {
        this.mahjongYakuList = new MahjongYakuList();
        this.mahjongScoreTableParent = new MahjongScoreTable(true);
        this.mahjongScoreTableChild = new MahjongScoreTable(false);
    }

    //成立した役の一覧を取得する todo handを受け取る


    //成立チェックして成立した役を取得する
    getYakuResult(keys: string[]):string[] {
        return keys.filter(key => this.mahjongYakuList.getMahjongYakuElement(key).isCombined(keys));     
    }

    /**
     * 合計飜数を取得する
     * @param isOpen 副露しているかどうか
     * @param keys 役のキーの配列
     * @param bonus ドラ数
     */
    getTotalFaanValue(isOpen: boolean, keys: string[], bonus: number): number {
        let result = 0;
        for (let i=0; i<keys.length; i++) {
            result += this.mahjongYakuList.list[keys[i]].getFaanValue(isOpen);
        }
        result += bonus;
        return result;
    }

    /**
     * 合計点数を取得する
     * @param isParent 親かどうか
     * @param faanValue 飜数
     * @param point 符数
     */
    getScore(isParent: boolean, faanValue: number, point: number) {
        let scoreTable: MahjongScoreTable;
        if (isParent) {
            scoreTable = this.mahjongScoreTableParent;
        } else {
            scoreTable = this.mahjongScoreTableChild;
        }
        if (faanValue >= 13) {
            faanValue = 13;
        }
        const scoreElement: MahjongScoreElement|null = scoreTable.fetchScore(faanValue, point);
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

    let options: NodeListOf<HTMLInputElement> = <NodeListOf<HTMLInputElement>>document.getElementsByName("options");
    let status: NodeListOf<HTMLInputElement> = <NodeListOf<HTMLInputElement>>document.getElementsByName("status");
    let bonus: HTMLInputElement = <HTMLInputElement>document.getElementById("bonus");
    let point: HTMLInputElement = <HTMLInputElement>document.getElementById("point");
    let results: HTMLInputElement = <HTMLInputElement>document.getElementById('results');
    results.innerHTML = '';

    // flags
    let isOpen = false;
    let isParent = false;
    let bonusValue = 0;
    let pointValue = 0;
    console.log("--- 選択したステータスは以下の通りです ---");
    for (let i=0; i<status.length; i++) {
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

    console.log("--- 選択したドラは以下の通りです ---")
    console.log(bonus.value);
    bonusValue = Number(bonus.value);

    console.log("--- 選択した符数は以下の通りです ---")
    console.log(point.value);
    pointValue = Number(point.value);
    
    console.log("--- 選択したオプションは以下の通りです ---");
    let keys = [];
    for (let i=0; i<options.length; i++) {
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
        let [hasError, name] = e.mahjongYakuList.list[key].getPrintFormat(isOpen);
        results.innerHTML += '<div>' + name + '</div>';
    });
    
    if (bonusValue != 0) {
        results.innerHTML += '<div>ドラ' + bonusValue +　'(' + bonusValue + '飜)</div>';
    }
    
    results.innerHTML += '<p>' + '合計:' + totalFaan + '飜' + '</p>';
    results.innerHTML += '<p>' + score + '</p>';

    let pop11: HTMLInputElement = <HTMLInputElement>document.getElementById('pop11');
    pop11.checked = true;
}

const calc: HTMLInputElement =<HTMLInputElement>document.getElementById('calc');

calc.addEventListener("click", (e:Event) => test());

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
