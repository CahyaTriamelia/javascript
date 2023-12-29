//Playing with Colors
const Colors = document.querySelector('input[name=color]');
Colors.addEventListener('input', function(){
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.background = 'rgb('+ red +', '+ green +', '+ blue +')';
});

//Suwit Batu, gunting dan kertas
function getPilihanComputer(){
    const computer = Math.random();

    if( computer < 0.34 ) return 'batu';
    if( computer >= 0.34 && computer < 0.67 ) return 'gunting';
    return 'kertas';
}

function gethasil(computer, player){
    if( player == computer ) return 'Seri!';
    if( player == 'batu' ) return ( computer == 'gunting' ) ? 'Menang!' : 'Kalah!';
    if( player == 'gunting' ) return ( computer == 'batu' ) ? 'Kalah!' : 'Menang!';
    if( player == 'kertas' ) return ( computer == 'gunting' ) ? 'Kalah!' : 'Menang!';
}

const playerBatu = document.querySelector('.batu');
playerBatu.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = playerBatu.className;
    const hasil = gethasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.svg');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const playerGunting = document.querySelector('.gunting');
playerGunting.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = playerGunting.className;
    const hasil = gethasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.svg');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const playerKertas = document.querySelector('.kertas');
playerKertas.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = playerKertas.className;
    const hasil = gethasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'image/' + pilihanComputer + '.svg');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// Suwit Jawa
// var tanya = true;
// while (tanya) {
    // Pilihan player
    // alert('Selamat Datang di Suwit Jawa')
    // var player = prompt('Silahkan Pilih : Gajah, Orang, Semut');

    // // Memunculkan bilangan random
    // var computer = Math.random();

    // if( computer < 0.34 ) { 
    //     computer = 'Gajah';
    // } else if( computer >= 0.34 && computer < 0.67 ) {
    //     computer = 'Orang';
    // } else {
    //     computer = 'Semut';
    // }

    // Menentukan rules
    // var hasil = '';
    // if( player == computer ) {
    //     hasil = 'Seri!';
    // } else if( player == 'Gajah' ) {
    //     hasil = ( computer == 'Orang' ) ? 'Menang!' : 'Kalah!';
    // } else if( player == 'Orang' ) {
    //     hasil = ( computer == 'Gajah' ) ? 'Kalah!' : 'Menang!';
    // } else if( p == 'Semut' ) {
    //     hasil = ( computer == 'Orang' ) ? 'Kalah' : 'Menang!';
    // } else {
    //     hasil = 'Memasukkan pilihan yang salah!';
    // }

    // Menampilkan hasil
//     alert('Kamu memilih : ' + player + '\nKomputer memilih : ' + computer + '\nKamu ' + hasil);
//     tanya = confirm('Bermain lagi?');
// }   alert('Permainan Selesai');