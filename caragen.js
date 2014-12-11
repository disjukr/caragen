if (typeof module !== 'undefined')
    module.exports = caragen;

function caragen() {
    var chooseOne = caragen.chooseOne;
    var character = chooseOne(caragen.character);
    return character.replace(/\{(.+?)\}/g, function (match, type) {
        return chooseOne(caragen[type]);
    });
}
caragen.chooseOne = function chooseOne(array) {
    return array[Math.floor(Math.random() * array.length)];
};
caragen.character = [
    '{color}머리 {fashion}',
    '{hairStyle} {mankind}',
    '{color}{hairStyle} {job}',
    '{color}{hairStyle} {mankind}',
    '{fashion} {job}',
    '{fashion} {job} {mankind}',
    '{dere} {mankind}',
    '{dere} {fashion}'
];
caragen.color = [
    '하얀 ',
    '검정',
    '빨간',
    '주황',
    '노란',
    '갈색',
    '금색',
    '초록',
    '파란',
    '남색',
    '보라'
];
caragen.hairStyle = [
    '단발',
    '장발',
    '곱슬',
    '대머리',
    '댕기머리',
    '레게머리',
    '아프로',
    '모히칸',
    '아호게',
    '보브',
    '상투',
    '샤기컷',
    '히메컷',
    '포니테일',
    '트윈테일'
];
caragen.job = [
    '백수',
    '유치원생',
    '초등학생',
    '중학생',
    '고등학생',
    '대학생',
    '대학원생'
];
caragen.fashion = [
    '피어스',
    '후드집업',
    '청바지'
];
caragen.dere = [
    '얀데레',
    '츤데레'
];
caragen.mankind = [
    '미래인',
    '아기',
    '소년',
    '아빠',
    '아저씨',
    '할아버지',
    '소녀',
    '아가씨',
    '엄마',
    '할머니',
    '조상님',
    '원시인',
    '유령',
    '요괴',
    '외계인'
];
