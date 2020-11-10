//入力した飜数と符数から点数計算ができる

class MahjongScoreElement {
    name: string;
    score: number;
    payment_child: number;
    payment_parent: number;
    
    constructor(name: string, score: number, payment_child: number, payment_parent: number) {
        this.name = name;
        this.score = score;
        this.payment_child = payment_child;
        this.payment_parent = payment_parent;
    }

    getPrintFormat(): string {
        const payment: string = this.payment_parent == 0 ? String(this.payment_child) + "オール" : String(this.payment_child) + "/" + String(this.payment_parent);
        return this.name + this.score + "点" + "(" + payment + ")";
    }
}

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
            this.table[this.key(2, 25)]  = new MahjongScoreElement('', 1600,  800,  400);
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

    key(faanValue: number, point: number): string {
        return faanValue + '_' + point;
    }
}

// input1:飜数, input2:符数 => 点数
function printScore(input1: number, input2: number) {
    const SCORE_TABLE_P = new MahjongScoreTable(true);
    const SCORE_TABLE_C = new MahjongScoreTable(false);

    let contents: HTMLInputElement =<HTMLInputElement>document.getElementById('contents');
    contents.innerHTML = '';
    contents.innerHTML += '<div><span>親 </span>' + SCORE_TABLE_P.table[SCORE_TABLE_P.key(input1, input2)].getPrintFormat() + '</div>';
    contents.innerHTML += '<div><span>子 </span>' + SCORE_TABLE_C.table[SCORE_TABLE_C.key(input1, input2)].getPrintFormat() + '</div>';
}

const input1: HTMLInputElement =<HTMLInputElement>document.getElementById('select1');
const input2: HTMLInputElement =<HTMLInputElement>document.getElementById('select2');
const calc: HTMLInputElement =<HTMLInputElement>document.getElementById('calc');
calc.addEventListener("click", (e:Event) => printScore(Number(input1.value), Number(input2.value)));
