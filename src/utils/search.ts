// 한글 초성 검색을 가능하게 하는 기능, 그냥 귀찮아서 구글링해서 찾음

const CHO_HANGUL = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

const HANGUL_START_CHARCODE = '가'.charCodeAt(0);

const CHO_PERIOD = Math.floor('까'.charCodeAt(0) - '가'.charCodeAt(0));
const JUNG_PERIOD = Math.floor('개'.charCodeAt(0) - '가'.charCodeAt(0));

function combine(cho: number, jung: number, jong: number) {
  return String.fromCharCode(
    HANGUL_START_CHARCODE + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong
  );
}

function makeRegexByCho(search = '') {
  const regex = CHO_HANGUL.reduce(
    (acc, cho, index) =>
      acc.replace(
        new RegExp(cho, 'g'),
        `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]`
      ),
    search
  );

  return new RegExp(`(${regex})`, 'g');
}

export function include(target: string, query: string) {
  if (!query) return target;
  if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(query))
    return makeRegexByCho(query).test(target);
  else return target.toLowerCase().includes(query.toLowerCase());
}
