
// Bai 1

function hamKiemTraChuoiTrongChuoi(a, b) {
    var a = "Hom nay la ngay thu 3";
    var b = "nay"
    var n = a.includes(b)
    return n;
}
console.log(hamKiemTraChuoiTrongChuoi())


function hamChuoiTrongChuoi2(c, d) {
    var c = "hom nay la ngay thu 3";
    var d = "la";
    return console.log(c.indexOf(d));
}
console.log(hamChuoiTrongChuoi2());



let e = "hom nay thu 7, em sexy em len tang 3";
console.log(/thu/.test(e));

// Bai 2

function myFunction() {
    var str = "Hom nay2 la ngay thu 3";
    var name = str.slice(0, 8);
    name = name + "..."
    return name;
}

console.log(myFunction())

// Bai 3

function vietHoaMoiChuCaiDau(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
console.log(vietHoaMoiChuCaiDau("hom nay la ngay thu bay"));

// Bai 4

function saoChepChuoiNLan(chuoi1, n) {
    var chuoi1;
    for (i = 0; i < n; i++) {
        console.log(chuoi1);
    }
    return;

}
console.log(saoChepChuoiNLan("hom nay la ngay thu bay", 10));

// Bai 5 // Bai 6


function lapChuoi(chuoi3, n) {
    var chuoi4 = chuoi3 + "-";
    ketqua = chuoi4.repeat(n - 1) + chuoi3;
    return ketqua;
}
console.log(lapChuoi("haha", 10));


// Bai 7

//  Cach 1
function daoChuoi(chuoi7) {
    let chuoiMoi = "";
    for (var i = chuoi7.length - 1; i >= 0; i--) {
        chuoiMoi += chuoi7[i];
    }
    return chuoiMoi;
}

console.log(daoChuoi("hom nay la thu ba"));

// Bai 8

function kiemTraChuoiDoiXung(chuoi8) {
    chuoiTrungGian1 = chuoi8.toLowerCase();
    chuoiTrungGian2 = chuoiTrungGian1.replace(/ /g, "");
    for (let i = 0; i < chuoiTrungGian2.length / 2; i++) {
        if (chuoiTrungGian2[i] != chuoiTrungGian2[chuoiTrungGian2.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(kiemTraChuoiDoiXung("Race car"));

//Bai 9

let mang = [92, 158, 28, 57, 33, 22, 42, 679, 42, 678]
let soNhoNhat = Math.min(...mang)
console.log(soNhoNhat)

//Bai 10

function soNhoThuHai(mang1){
    mangb = mang1.sort(function (a, b) {
        return a - b;
    });
    return "So Nho Thu Hai la " + mangb[1];
}
console.log(soNhoThuHai([92, 158, 28, 57, 33, 22, 42, 679, 42, 678]));


// Bai 11

var sinhVien = ['Dong', 'Nam', 'Hoa', 'Tuan'];
var sinhVietNguoc = sinhVien.reverse();
console.log(sinhVietNguoc);

// bai 12

function tongChiaHetChoNam(m) {
    let tong = 0;
    for(let i=1; i<m; i++) {
        if(i % 5 === 0){
            tong += i;
        }
    }
    return tong;
}
console.log(tongChiaHetChoNam(100));

// bai 13

console.log(Array.from([1, 2, 3], x => x % 2))

// bai 14

var origin = ['aba', 'aa', 'ad', 'c', 'vcd'];
function sortArr(_originArr) {
	var max_char = 0;
	var arrtopush = [];
	for (var i = 0; i < _originArr.length; i++) {
		if (max_char < _originArr[i].length) {
			max_char = _originArr[i].length;
		}
	}
	console.log(max_char);
	for (var j = 0; j < _originArr.length; j++) {
		if (_originArr[j].length === max_char) {
			arrtopush.push(_originArr[j]);
		}
    }
    return arrtopush;
} 
console.log(sortArr(origin)); 



















