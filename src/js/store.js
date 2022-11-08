
import { createStore } from 'framework7/lite'

const store = createStore({
  state: {
    word_catalog: [
      {
        number: 0,
        word: 'Oase',
        image: '/icons/oase.png',
        mnemonic: 'grüne Oase mitten in der heißen Wüste, Kamele, Palmen'
      },
      {
        number: 1,
        word: 'Tee',
        image: '/icons/tee.png',
        mnemonic: 'heißen, dampfenden Pfefferminztee schlürfen'
      },
      {
        number: 2,
        word: 'Noah',
        image: '/icons/noah.png',
        mnemonic: 'Tiere gehen paarweise über einen Steg in die große Arche Noah vor der Sintflut'
      },
      {
        number: 3,
        word: 'Oma',
        image: '/icons/oma.png',
        mnemonic: 'eigene Oma'
      },
      {
        number: 4,
        word: 'Reh',
        image: '/icons/reh.png',
        mnemonic: 'kleines, großäugiges Rehkitz mit weißen Flecken am Fell; Bambi'
      },
      {
        number: 5,
        word: 'Allee',
        image: '/icons/fahrbahn.png',
        mnemonic: 'von großen grünen Laubbäumen gesäumte Straße im Sommer'
      },
      {
        number: 6,
        word: 'Ski',
        image: '/icons/ski.png',
        mnemonic: 'Lift oder Schlepplift fahren im Winter; Skirennen im Fernsehen'
      },
      {
        number: 7,
        word: 'Kuh',
        image: '/icons/kuh.png',
        mnemonic: 'lila Milkakuh mit Glocke auf Alm'
      },
      {
        number: 8,
        word: 'Ufo',
        image: '/icons/ufo.png',
        mnemonic: 'runder fliegender Teller mit grünen Männchen'
      },
      {
        number: 9,
        word: 'Boa',
        image: '/icons/schlange.png',
        mnemonic: 'Würgeschlange, die gerade einen Elefanten verspeist hat, wie in „Der kleine Prinz“'
      },
      {
        number: '00',
        word: 'Zeus',
        image: '/icons/zeus.png',
        mnemonic: 'griechischer Göttervater, der Blitze vom Olymp schleudert'
      },
      {
        number: '01',
        word: 'CD',
        image: '/icons/cd.png',
        mnemonic: 'Audio-CD, die man in eine HiFi-Anlage einlegt und aufdreht'
      },
      {
        number: '02',
        word: 'Zahn',
        image: '/icons/zahn.png',
        mnemonic: 'Besuch beim Zahnarzt, der einem den Weisheitszahn zieht'
      },
      {
        number: '03',
        word: 'Osama',
        image: '',
        mnemonic: 'einer der ehemals meistgesuchten Leute; weißer Turban'
      },
      {
        number: '04',
        word: 'Zorro',
        image: '/icons/zorro.png', // TODO swap with a better icon
        mnemonic: 'Held, der mit Maske, schwarzem Umhang und Degen für Gerechtigkeit kämpft'
      },
      {
        number: '05',
        word: 'Saal',
        image: '', // TODO did not found a proper icon
        mnemonic: 'großer Turnsaal; Zirkeltraining, Fußball, Volleyball'
      },
      {
        number: '06',
        word: 'Seuche',
        image: '/icons/plague.png',
        mnemonic: 'Tiere müssen getötet werden; Seuchengrube'
      },
      {
        number: '07',
        word: 'Socke',
        image: '/icons/sock.png',
        mnemonic: 'weiße Tennissocken oder gefüllter Sparstrumpf'
      },
      {
        number: '08',
        word: 'Sofa',
        image: '/icons/seater-sofa.png',
        mnemonic: 'weiche, gemütliche Ledercouch vor dem Fernseher'
      },
      {
        number: '09',
        word: 'Zippo',
        image: '/icons/zippo.png',
        mnemonic: 'klassisch-elegantes Benzinfeuerzeug, das mit Aufschnippen geöffnet werden kann'
      },
      {
        number: 10,
        word: 'Tasse',
        image: '/icons/tasse.png',
        mnemonic: 'rote Porzellantasse mit schwarzen Punkten'
      },
      {
        number: 11,
        word: 'Tod',
        image: '/icons/gevatter-tod.png',
        mnemonic: 'Sensenmann mit schwarzem Umhang; Skelett.'
      },
      {
        number: 12,
        word: 'Tanne',
        image: '/icons/weihnachtsbaum.png',
        mnemonic: 'mit Lichtern, Sternen und Kerzen geschmückter Weihnachtsbaum; Geschenke'
      },
      {
        number: 13,
        word: 'Damm',
        image: '/icons/damm.png',
        mnemonic: 'großer, mit Wasser gefüllter Staudamm zur Stromerzeugung'
      },
      {
        number: 14,
        word: 'Tor',
        image: '/icons/tor.png',
        mnemonic: 'ein Tor fällt im Fußballspiel und die Hälfte jubelt; Welle im Stadion'
      },
      {
        number: 15,
        word: 'Duell',
        image: '/icons/duell.png',
        mnemonic: 'zwei Ehrenmänner stehen mit dem Colt in der Hand Rücken an Rücken'
      },
      {
        number: 16,
        word: 'Tasche',
        image: '/icons/aktentasche.png',
        mnemonic: 'Braune Aktentasche mit Lehrbüchern und lecker gefüllter Pausenbox'
      },
      {
        number: 17,
        word: 'Theke',
        image: '/icons/bar.png',
        mnemonic: 'hoher Thekenhocker mit Blick auf Barkeeper und Alkoholflaschen'
      },
      {
        number: 18,
        word: 'Taufe',
        image: '/icons/taufe.png',
        mnemonic: 'kleines schreiendes Kind im Arm der Mutter, das mit Weihwasser bespritzt wird'
      },
      {
        number: 19,
        word: 'Taube',
        image: '/icons/taube.png',
        mnemonic: 'Brieftaube'
      },
      {
        number: 20,
        word: 'Nase',
        image: '/icons/nase.png',
        mnemonic: 'Nasenpiercing'
      },
      {
        number: 21,
        word: 'Hund',
        image: '/icons/hund.png',
        mnemonic: 'bellen und beißen; vergräbt Knochen im Garten; struppiges Fell'
      },
      {
        number: 22,
        word: 'Nonne',
        image: '/icons/nonne.png',
        mnemonic: 'Nonne mit schwarzer Kutte und Rosenkranz in der Hand'
      },
      {
        number: 23,
        word: 'Nemo',
        image: '/icons/kapitan.png',
        mnemonic: 'Kapitän Nemo mit Kapitänsmütze, der ehrenhaft mit dem Schiff untergeht'
      },
      {
        number: 24,
        word: 'Nero',
        image: '',
        mnemonic: 'Kaiser in Rom, der gerne Leute in der Arena den wilden Tieren vorwirft'
      },
      {
        number: 25,
        word: 'Nil',
        image: '/icons/fluss.png',
        mnemonic: 'Nil; Fluss in Ägypten mit Pyramiden im Hintergrund'
      },
      {
        number: 26,
        word: 'Nische',
        image: '',
        mnemonic: 'in Wandnische stehende Heiligenfigur'
      },
      {
        number: 27,
        word: 'Unke',
        image: '/icons/frosch.png',
        mnemonic: 'ein warziger, bunter Frosch'
      },
      {
        number: 28,
        word: 'Nivea',
        image: '',
        mnemonic: 'blaue Cremedose mit weißer Hautcreme'
      },
      {
        number: 29,
        word: 'Neubau',
        image: '',
        mnemonic: 'schöner Neubau mit spannender Architektur'
      },
      {
        number: 30,
        word: 'Moos',
        image: '/icons/moos.png',
        mnemonic: 'grünes feuchtes Moos auf einem Stein'
      },
      {
        number: 31,
        word: 'Matte',
        image: '/icons/matte.png',
        mnemonic: 'neben Trampolin beim Turnen; dicke und weiche Yoga-Matte'
      },
      {
        number: 32,
        word: 'Mohn',
        image: '/icons/mohn.png',
        mnemonic: 'rotleuchtendes Mohnfeld im Sonnenschein'
      },
      {
        number: 33,
        word: 'Mumie',
        image: '/icons/mumie.png',
        mnemonic: 'eingewickelter, konservierter König im Sarkophag'
      },
      {
        number: 34,
        word: 'Meer',
        image: '/icons/meer.png',
        mnemonic: 'smaragdgrünes Wasser und menschenleerer Strand; salziges Wasser; heißes Wetter'
      },
      {
        number: 35,
        word: 'Mühle',
        image: '/icons/muhle.png',
        mnemonic: 'in Holland, mit drehenden Windrädern'
      },
      {
        number: 36,
        word: 'Masche',
        image: '/icons/knoten.png',
        mnemonic: 'statt Krawatte, mit bunten Punkten'
      },
      {
        number: 37,
        word: 'Mac',
        image: '/icons/mac.png',
        mnemonic: 'Apple Macintosh; leuchtender Apfel als Logo'
      },
      {
        number: 38,
        word: 'Mafia',
        image: '/icons/mafia.png',
        mnemonic: 'böse, grimmige Männer in Sizilien mit Pistolen, schwarzen Anzügen und Sonnenbrillen'
      },
      {
        number: 39,
        word: 'Mopp',
        image: '/icons/mopp.png',
        mnemonic: 'Staubbesen mit ölgetränkten Fransen'
      },
      {
        number: 40,
        word: 'Rose',
        image: '/icons/rose.png',
        mnemonic: 'einzelne rote, dornige Rose mit süßem Duft'
      },
      {
        number: 41,
        word: 'Radio',
        image: '/icons/radio.png',
        mnemonic: 'kleines tragbares Transistorradio'
      },
      {
        number: 42,
        word: 'Ruine',
        image: '/icons/tempel.png',
        mnemonic: 'alter, verkommener ägyptischer Tempelruine'
      },
      {
        number: 43,
        word: 'Armee',
        image: '/icons/terracotta-armee.png',
        mnemonic: 'grün gekleidete Soldaten marschieren im Gleichschritt'
      },
      {
        number: 44,
        word: 'Rohr',
        image: '/icons/rohre.png',
        mnemonic: 'Rohrpost wird verschickt'
      },
      {
        number: 45,
        word: 'Rolle',
        image: '/icons/geweberolle.png',
        mnemonic: 'Klopapierrolle'
      },
      {
        number: 46,
        word: 'Rauch',
        image: '/icons/rauch.png',
        mnemonic: 'beim Grillen aufsteigender gräulicher Rauch; Rauchzeichen'
      },
      {
        number: 47,
        word: 'Rock',
        image: '/icons/rocker.png',
        mnemonic: 'laute, wilde Musik; E-Gitarren werden zertrümmert'
      },
      {
        number: 48,
        word: 'Reif',
        image: '/icons/hula-hoop.png',
        mnemonic: 'Hula-Hoop-Reifen, den man um den Bauch kreisen läss'
      },
      {
        number: 49,
        word: 'Rabe',
        image: '/icons/rabe.png',
        mnemonic: 'schwarzes Stofftier mit orangem Schnabel und Krallen'
      },
      {
        number: 50,
        word: 'Lasso',
        image: '/icons/lasso.png',
        mnemonic: 'Cowboy schwingt lässig das Lasso und fängt Kalb ein'
      },
      {
        number: 51,
        word: 'Lotto',
        image: '/icons/lotto.png',
        mnemonic: 'Lottokugeln schwirren in Kugel herum und Lottofee zieht die Gewinnnummern'
      },
      {
        number: 52,
        word: 'Leine',
        image: '/icons/leine.png',
        mnemonic: 'Hundeleine'
      },
      {
        number: 53,
        word: 'Lama',
        image: '/icons/lama.png',
        mnemonic: 'Tier mit langem Fell; kann weit spucken'
      },
      {
        number: 54,
        word: 'Leier',
        image: '/icons/leierkasten.png',
        mnemonic: 'Leierkastenmann kurbelt und einfache Melodien ertönen; mit Affe auf Schulter'
      },
      {
        number: 55,
        word: 'Lolli',
        image: '/icons/lollies.png',
        mnemonic: 'süßer oranger Lolli mit Pfirsichgeschmack'
      },
      {
        number: 56,
        word: 'Leiche',
        image: '/icons/gerichtsmediziner.png',
        mnemonic: 'im Seziersaal; stechender Formalingeruch'
      },
      {
        number: 57,
        word: 'Lego',
        image: '/icons/blocke.png',
        mnemonic: 'bunte Legosteine zum Bauen von Autos, Häusern und Raumschiffen'
      },
      {
        number: 58,
        word: 'Lava',
        image: '/icons/vulkan.png',
        mnemonic: 'Vulkan spuckt rote, flüssige Lava aus; rinnt den Vulkan herunter und erstarrt dampfend'
      },
      {
        number: 59,
        word: 'Laub',
        image: '/icons/trockenes-blatt.png',
        mnemonic: 'vergilbte Blätter im Herbstwind; werden zu Haufen zusammengekehrt'
      },
      {
        number: 60,
        word: 'Schuss',
        image: '',
        mnemonic: 'der Schuss, der sich aus einer Waffe löst'
      },
      {
        number: 61,
        word: 'Yeti',
        image: '/icons/yeti.png',
        mnemonic: 'der nie gesehene Bergmensch mit zotteligen Haaren am ganzen Körper'
      },
      {
        number: 62,
        word: 'Scheune',
        image: '/icons/scheune.png',
        mnemonic: 'aufgestapelte Strohballen; in Scheune ins Stroh springen'
      },
      {
        number: 63,
        word: 'Schaum',
        image: '/icons/schaumbad.png',
        mnemonic: 'gut duftendes Schaumbad'
      },
      {
        number: 64,
        word: 'Schere',
        image: '/icons/schere.png',
        mnemonic: 'große Gartenschere, um verblühte Blüten abzuschneiden'
      },
      {
        number: 65,
        word: 'Schal',
        image: '/icons/schal.png',
        mnemonic: 'selbst gestrickter, warmer Schal'
      },
      {
        number: 66,
        word: 'Scheich',
        image: '/icons/arabisch.png',
        mnemonic: 'Ölscheich mit weißem Umhang auf Kamel'
      },
      {
        number: 67,
        word: 'Jacke',
        image: '/icons/jacke.png',
        mnemonic: 'superwarme rote Snowboardjacke'
      },
      {
        number: 68,
        word: 'Schaf',
        image: '/icons/schaf.png',
        mnemonic: 'weiße, gekräuselte Wolle; «mähhh»'
      },
      {
        number: 69,
        word: 'Schippe',
        image: '/icons/shovel.png',
        mnemonic: 'breite Schaufel zum Schneeräumen'
      },
      {
        number: 70,
        word: 'Kasse',
        image: '/icons/kasse.png',
        mnemonic: 'alte mechanische Kasse; klingelt beim Aufmachen'
      },
      {
        number: 71,
        word: 'Kitt',
        image: '',
        mnemonic: 'Fensterkitt; schwarzes, redendes Auto von Michael Knight'
      },
      {
        number: 72,
        word: 'Kino',
        image: '/icons/kino.png',
        mnemonic: 'großer Kinosaal mit weichen Sesseln'
      },
      {
        number: 73,
        word: 'Kamm',
        image: '/icons/kamm.png',
        mnemonic: 'Haarkamm'
      },
      {
        number: 74,
        word: 'Chor',
        image: '/icons/chor.png',
        mnemonic: 'Kirchenchor; Sänger vor Notenständern'
      },
      {
        number: 75,
        word: 'Keule',
        image: '/icons/keule.png',
        mnemonic: 'Fred Feuerstein mit Keule und seinem tollen Steinzeit-Auto'
      },
      {
        number: 76,
        word: 'Koch',
        image: '/icons/koch.png',
        mnemonic: '3-Hauben-Koch in Restaurant'
      },
      {
        number: 77,
        word: 'Geige',
        image: '/icons/geige.png',
        mnemonic: 'klassisches Instrument, das mit Bogen gespielt wird'
      },
      {
        number: 78,
        word: 'Kaffee',
        image: '/icons/kaffee.png',
        mnemonic: 'Kaffeebohnen in groben 25-Kilo-Säcken'
      },
      {
        number: 79,
        word: 'Kappe',
        image: '/icons/baseball-kappe.png',
        mnemonic: 'blaube Baseball-Kappe'
      },
      {
        number: 80,
        word: 'Fass',
        image: '/icons/fass.png',
        mnemonic: 'Fass Bier; Anzapfen beim Oktoberfest'
      },
      {
        number: 81,
        word: 'Fit',
        image: '/icons/fit.png',
        mnemonic: 'Liegestütze und Sit-ups in Fitnessstudio'
      },
      {
        number: 82,
        word: 'Föhn',
        image: '/icons/fohn.png',
        mnemonic: 'nach dem Haarewaschen'
      },
      {
        number: 83,
        word: 'WM',
        image: '',
        mnemonic: 'Sprinter laufen um Goldmedaillen'
      },
      {
        number: 84,
        word: 'Feuer',
        image: '/icons/feuer.png',
        mnemonic: 'wärmendes, knisterndes Lagerfeuer'
      },
      {
        number: 85,
        word: 'Falle',
        image: '/icons/falle.png',
        mnemonic: 'Mäusefalle mit Käse und Speck als Köder'
      },
      {
        number: 86,
        word: 'Wäsche',
        image: '/icons/wasche.png',
        mnemonic: 'ein Berg voller Wäsche; Waschmaschine'
      },
      {
        number: 87,
        word: 'Waage',
        image: '/icons/waage.png',
        mnemonic: 'Personenwaage im Bad'
      },
      {
        number: 88,
        word: 'Waffe',
        image: '/icons/waffe.png',
        mnemonic: 'Sturmgewehr'
      },
      {
        number: 89,
        word: 'Wabe',
        image: '/icons/bienenwabe.png',
        mnemonic: 'Sechseck, aus Wachs, voll mit Honig'
      },
      {
        number: 90,
        word: 'Bus',
        image: '/icons/schulbus.png',
        mnemonic: 'Linienbus'
      },
      {
        number: 91,
        word: 'Bett',
        image: '/icons/bett.png',
        mnemonic: 'weiches, kuscheliges Bett'
      },
      {
        number: 92,
        word: 'Biene',
        image: '/icons/biene.png',
        mnemonic: 'gelb-schwarz gestreift; Bienenstich schwillt rot an'
      },
      {
        number: 93,
        word: 'Baum',
        image: '/icons/baum.png',
        mnemonic: 'einzelner Laubbaum mit großer Baumkrone'
      },
      {
        number: 94,
        word: 'Bär',
        image: '/icons/baer.png',
        mnemonic: 'brauner großer Bär mit Tatzen und Krallen'
      },
      {
        number: 95,
        word: 'Pool',
        image: '/icons/pool-party.png',
        mnemonic: 'Urlaub; am Pool liegen und Piña Colada schlürfen'
      },
      {
        number: 96,
        word: 'Bach',
        image: '/icons/bach.png',
        mnemonic: 'leise plätschernder Gebirgsbach in schöner Umgebung'
      },
      {
        number: 97,
        word: 'Puck',
        image: '/icons/puck.png',
        mnemonic: 'schwarzer Eishockeypuck; dick eingemummte Eishockeymannschaft'
      },
      {
        number: 98,
        word: 'Puff',
        image: '',
        mnemonic: 'Schöne/r/s Frau/Mann/drittes Geschlecht im Bordell'
      },
      {
        number: 99,
        word: 'Baby',
        image: '/icons/saugling.png',
        mnemonic: 'Baby im Kinderwagen mit bunter Rassel in der Hand'
      }
    ]
  },
  getters: {
    getWordCatalog ({ state }) {
      return state.word_catalog
    }
  }
})
export default store
