
import { createStore } from 'framework7/lite'

const store = createStore({
  state: {
    word_catalog: [
      {
        number: 0,
        word: 'Oase',
        image: ''
      },
      {
        number: 1,
        word: 'Tee',
        image: ''
      },
      {
        number: 2,
        word: 'Noah',
        image: ''
      },
      {
        number: 3,
        word: 'Oma',
        image: ''
      },
      {
        number: 4,
        word: 'Reh',
        image: ''
      },
      {
        number: 5,
        word: 'Allee',
        image: ''
      },
      {
        number: 6,
        word: 'Ski',
        image: ''
      },
      {
        number: 7,
        word: 'Kuh',
        image: ''
      },
      {
        number: 8,
        word: 'Ufo',
        image: ''
      },
      {
        number: 9,
        word: 'Boa',
        image: ''
      },
      {
        number: '00',
        word: 'Zeus',
        image: ''
      },
      {
        number: '01',
        word: 'CD',
        image: ''
      },
      {
        number: '02',
        word: 'Zahn',
        image: ''
      },
      {
        number: '03',
        word: 'Osama',
        image: ''
      },
      {
        number: '04',
        word: 'Zorro',
        image: ''
      },
      {
        number: '05',
        word: 'Saal',
        image: ''
      },
      {
        number: '06',
        word: 'Seuche',
        image: ''
      },
      {
        number: '07',
        word: 'Socke',
        image: ''
      },
      {
        number: '08',
        word: 'Sofa',
        image: ''
      },
      {
        number: '09',
        word: 'Zippo',
        image: ''
      },
      {
        number: '10',
        word: 'Tasse',
        image: ''
      },
      {
        number: 11,
        word: 'Tod',
        image: ''
      },
      {
        number: 12,
        word: 'Tanne',
        image: ''
      },
      {
        number: 13,
        word: 'Damm',
        image: ''
      },
      {
        number: 14,
        word: 'Tor',
        image: ''
      },
      {
        number: 15,
        word: 'Duell',
        image: ''
      },
      {
        number: 16,
        word: 'Tasche',
        image: ''
      },
      {
        number: 17,
        word: 'Theke',
        image: ''
      },
      {
        number: 18,
        word: 'Taufe',
        image: ''
      },
      {
        number: 19,
        word: 'Taube',
        image: ''
      },
      {
        number: 20,
        word: 'Nase',
        image: ''
      },
      {
        number: 21,
        word: 'Hund',
        image: ''
      },
      {
        number: 22,
        word: 'Nonne',
        image: ''
      },
      {
        number: 23,
        word: 'Nemo',
        image: ''
      },
      {
        number: 24,
        word: 'Nero',
        image: ''
      },
      {
        number: 25,
        word: 'Nil',
        image: ''
      },
      {
        number: 26,
        word: 'Nische',
        image: ''
      },
      {
        number: 27,
        word: 'Unke',
        image: ''
      },
      {
        number: 28,
        word: 'Nivea',
        image: ''
      },
      {
        number: 29,
        word: 'Neubau',
        image: ''
      },
      {
        number: 30,
        word: 'Moos',
        image: ''
      },
      {
        number: 31,
        word: 'Matte',
        image: ''
      },

    ]
  },
  getters: {
    getWordCatalog ({ state }) {
      return state.word_catalog
    }
  }
})
export default store
