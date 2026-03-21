// === Constants & Configuration ===
const CONFIG = {
    OPTIONS_COUNT: 3,
    ANIMATION_DELAY: 100,
    FONTS: {
        ARABIC: '40px',
        LATIN: '25px'
    }
};

const SELECTORS = {
    CARD: '#card',
    FRONT_CARD: '#front-card',
    FRONT_TEXT: '#front-text',
    OPTIONS: '#options',
    BTN: '#btn',
    COUNTER: '#counter',
    FINAL_RESULT: '#final-result',
    LANGUAGE_SELECTION: '#language-selection',
    LANGUAGE_INPUT: 'input[name="language"]:checked'
};

const CLASSES = {
    OPTION: 'option',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    DISABLED: 'disabled',
    FLIPPED: 'flipped'
};

const STRINGS = {
    eng: {
        welcome: 'Welcome!',
        title: '99 Names',
        start: 'Start',
        next: 'Next',
        end: 'The End',
        question: 'Question',
        correct: 'correct!',
        loading: 'Loading...',
        error: 'Failed to load data. Please refresh.'
    },
    aze: {
        welcome: 'Xoş Gəldiniz!',
        title: '99 Ad',
        start: 'Başla',
        next: 'Növbəti',
        end: 'Son',
        question: 'Sual',
        correct: 'düzgün!',
        loading: 'Yüklənir...',
        error: 'Məlumat yüklənmədi. Yeniləyin.'
    }
};

// === Data (inlined for file:// compatibility) ===
const DATA = [
    { "en": "AR-RAHMAAN", "aze": "Ər-Rəhman", "ar": "ٱلْرَّحْمَـانُ", "meaning": "The All-Compassionate", "meaning_aze": "Çox Mərhəmətli" },
    { "en": "AR-RAHEEM", "aze": "Ər-Rəhim", "ar": "ٱلْرَّحِيْمُ", "meaning": "The All-Merciful", "meaning_aze": "Həmişə Mərhəmətli. Rəhimli" },
    { "en": "AL-MALIK", "aze": "Əl-Məlik", "ar": "ٱلْمَلِكُ", "meaning": "The King and Owner of Dominion", "meaning_aze": "Mülk Sahibi. Ali Hökmdar" },
    { "en": "AL-QUDDUS", "aze": "Əl-Qüddus", "ar": "ٱلْقُدُّوسُ", "meaning": "The Absolutely Pure", "meaning_aze": "Müqəddəs. Nöqsanlardan Uzaq" },
    { "en": "AS-SALAM", "aze": "Əs-Salam", "ar": "ٱلْسَّلَامُ", "meaning": "The Source of Peace", "meaning_aze": "Pak. Əmin-Amanlıq Verən" },
    { "en": "AL-MU'MIN", "aze": "Əl-Mömin", "ar": "لْمُؤْمِنُ", "meaning": "The Inspirer of Faith", "meaning_aze": "İman Bəxş Edən. Güvən Verən" },
    { "en": "AL-MUHAYMIN", "aze": "Əl-Mühəymin", "ar": "ٱلْمُهَيْمِنُ", "meaning": "The Guardian, The Witness", "meaning_aze": "Hər Şeyi Görən və Nəzarət Edən" },
    { "en": "AL-AZEEZ", "aze": "Əl-Əziz", "ar": "ٱلْعَزِيزُ", "meaning": "The All Mighty", "meaning_aze": "Əzəmətli. Çox İzzətli" },
    { "en": "AL-JABBAR", "aze": "Əl-Cabbar", "ar": "ٱلْجَبَّارُ", "meaning": "The Compeller, The Restorer", "meaning_aze": "Qüdrətli. Zalımlara Əziyyət Verən" },
    { "en": "AL-MUTAKABBIR", "aze": "Əl-Mütəkəbbir", "ar": "ٱلْمُتَكَبِّرُ", "meaning": "The Supreme, The Majestic", "meaning_aze": "Məqamı Uca Tutulan, Böyüdülən" },
    { "en": "AL-KHAALIQ", "aze": "Əl-Xaliq", "ar": "ٱلْخَالِقُ", "meaning": "The Creator, The Maker", "meaning_aze": "Yaradan, Yoxdan Var Edən" },
    { "en": "AL-BAARI'", "aze": "Əl-Bari", "ar": "ٱلْبَارِئُ", "meaning": "The Originator", "meaning_aze": "Heçdən Yaradan" },
    { "en": "AL-MUSAWWIR", "aze": "Əl-Müsavvir", "ar": "ٱلْمُصَوِّرُ", "meaning": "The Fashioner", "meaning_aze": "Surət Verən" },
    { "en": "AL-GHAFFAR", "aze": "Əl-Ğaffar", "ar": "ٱلْغَفَّارُ", "meaning": "The All- and Oft-Forgiving", "meaning_aze": "Hər Şeyi Bağışlayan" },
    { "en": "AL-QAHHAR", "aze": "Əl-Qəhhar", "ar": "ٱلْقَهَّارُ", "meaning": "The Subduer, The Ever-Dominating", "meaning_aze": "Qalib və Hakim Olan" },
    { "en": "AL-WAHHAAB", "aze": "Əl-Vəhhab", "ar": "ٱلْوَهَّابُ", "meaning": "The Giver of Gifts", "meaning_aze": "Səxavətli. Qarşılıqsız Nemət Verən" },
    { "en": "AR-RAZZAAQ", "aze": "Ər-Razzaq", "ar": "ٱلْرَّزَّاقُ", "meaning": "The Provider", "meaning_aze": "Ruzi Verən və Ehtiyac Ödəyən" },
    { "en": "AL-FATTAAH", "aze": "Əl-Fəttah", "ar": "ٱلْفَتَّاحُ", "meaning": "The Opener, The Judge", "meaning_aze": "Açıcı. Çətinlikləri Həll Edən" },
    { "en": "AL-'ALEEM", "aze": "Əl-Aliim", "ar": "ٱلْعَلِيمُ", "meaning": "The All-Knowing, The Omniscient", "meaning_aze": "Hər Şeyi Bilən. Çox Elmli" },
    { "en": "AL-QAABID", "aze": "Əl-Qabid", "ar": "ٱلْقَابِضُ", "meaning": "The Withholder. The Constructor", "meaning_aze": "Daraldan. Azaldan" },
    { "en": "AL-BAASIT", "aze": "Əl-Basit", "ar": "ٱلْبَاسِطُ", "meaning": "The Extender. The Reliever", "meaning_aze": "İstədiyinin Ruzisini Genişləndirən" },
    { "en": "AL-KHAAFIDH", "aze": "Əl-Hafid", "ar": "ٱلْخَافِضُ", "meaning": "The Reducer, The Abaser", "meaning_aze": "Kafirləri və Fasiqləri Zəlil Edən" },
    { "en": "AR-RAAFI'", "aze": "Ər-Rafi", "ar": "ٱلْرَّافِعُ", "meaning": "The Exalter, The Elevator", "meaning_aze": "Şərəf Verib Yüksəldən" },
    { "en": "AL-MU'IZZ", "aze": "Əl-Muiz", "ar": "ٱلْمُعِزُّ", "meaning": "The Honourer, The Bestower", "meaning_aze": "İstədiyini Əzizləyən" },
    { "en": "AL-MUZIL", "aze": "Əl-Muzil", "ar": "ٱلْمُذِلُّ", "meaning": "The Dishonourer, The Humiliator", "meaning_aze": "İstıdiyini Zəlil Edən" },
    { "en": "AS-SAMEE'", "aze": "Əs-Səmi", "ar": "ٱلْسَّمِيعُ", "meaning": "The All-Hearing", "meaning_aze": "Hər Şeyi Eşidən" },
    { "en": "AL-BASEER", "aze": "Əl-Bəsir", "ar": "ٱلْبَصِيرُ", "meaning": "The All-Seeing", "meaning_aze": "Hər Şeyi Görən (Haqq-Nahaqq)" },
    { "en": "AL-HAKAM", "aze": "Əl-Həkəm", "ar": "ٱلْحَكَمُ", "meaning": "The Judge, The Giver of Justice", "meaning_aze": "Hakim. Hikmət Sahibi" },
    { "en": "AL-'ADL", "aze": "Əl-Ədl", "ar": "ٱلْعَدْلُ", "meaning": "The Utterly Just", "meaning_aze": "Mütləq Ədalətli" },
    { "en": "AL-LATEEF", "aze": "Əl-Lətif", "ar": "ٱلْلَّطِيفُ", "meaning": "The Subtle One, The Most Gentle", "meaning_aze": "Hər Şeyi Bilən. Mərhəmətli və Xeyirxah" },
    { "en": "AL-KHABEER", "aze": "Əl-Xəbir", "ar": "ٱلْخَبِيرُ", "meaning": "The Acquainted, The All-Aware", "meaning_aze": "Hər Şeydən Xəbərdar Olan" },
    { "en": "AL-HALEEM", "aze": "Əl-Həlim", "ar": "ٱلْحَلِيمُ", "meaning": "The Most Forbearing", "meaning_aze": "Çox Mülayim. Hilm Sahibi" },
    { "en": "AL-'ATHEEM", "aze": "Əl-Əzim", "ar": "ٱلْعَظِيمُ", "meaning": "The Magnificent, The Supreme", "meaning_aze": "Böyüklükdə Bənzəri Olmayan. Çox Uca" },
    { "en": "AL-GHAFOOR", "aze": "Əl-Ğafur", "ar": "ٱلْغَفُورُ", "meaning": "The Exceedingly Forgiving", "meaning_aze": "Günahları Bağışlayan. Gizlədən" },
    { "en": "ASH-SHAKOOR", "aze": "Əş-Şəkur", "ar": "ٱلْشَّكُورُ", "meaning": "The Most Appreciative", "meaning_aze": "Mükafatlandıran" },
    { "en": "AL-'ALEE", "aze": "Əl-Aliy", "ar": "ٱلْعَلِيُّ", "meaning": "The Most High, The Exalted", "meaning_aze": "Uca. Çox Yüksək" },
    { "en": "AL-KABEER", "aze": "Əl-Kəbir", "ar": "ٱلْكَبِيرُ", "meaning": "The Greatest, The Most Grand", "meaning_aze": "Ən Böyük. Böyüklükdə Bənzəri Olmayan" },
    { "en": "AL-HAFEEDH", "aze": "Əl-Hafiz", "ar": "ٱلْحَفِيظُ", "meaning": "The Preserver, The All-Protecting", "meaning_aze": "Qoruyan. Mühafizəçi" },
    { "en": "AL-MUQEET", "aze": "Əl-Muqit", "ar": "ٱلْمُقِيتُ", "meaning": "The Sustainer", "meaning_aze": "Ruzi Verən. Təmin Edən" },
    { "en": "AL-HASEEB", "aze": "Əl-Həsib", "ar": "ٱلْحَسِيبُ", "meaning": "The Accounter, The Sufficient", "meaning_aze": "Hər Şeyi Hesaba Alan" },
    { "en": "AL-JALEEL", "aze": "Əl-Cəlil", "ar": "ٱلْجَلِيلُ", "meaning": "The Majestic, The Mighty", "meaning_aze": "Cəlal və Əzəmət Sahibi" },
    { "en": "AL-KAREEM", "aze": "Əl-Kərim", "ar": "ٱلْكَرِيمُ", "meaning": "The Most Generous", "meaning_aze": "Ən Səxavətli" },
    { "en": "AR-RAQEEB", "aze": "Ər-Raqib", "ar": "ٱلْرَّقِيبُ", "meaning": "The Watchful One", "meaning_aze": "Nəzarətçi. Keşikçi" },
    { "en": "AL-MUJEEB", "aze": "Əl-Mucib", "ar": "ٱلْمُجِيبُ", "meaning": "The Responsive One", "meaning_aze": "Duaları Qəbul Edən. Cavab Verən" },
    { "en": "AL-WAASI'", "aze": "Əl-Vasi", "ar": "ٱلْوَاسِعُ", "meaning": "The All-Comprehending", "meaning_aze": "Hərtərəfli. Mərhəmət və Qüdrət Sahibi" },
    { "en": "AL-HAKEEM", "aze": "Əl-Hakim", "ar": "ٱلْحَكِيمُ", "meaning": "The All-Wise", "meaning_aze": "Müdrik. Çox Hikmətli" },
    { "en": "AL-WADOOD", "aze": "Əl-Vədud", "ar": "ٱلْوَدُودُ", "meaning": "The Most Loving", "meaning_aze": "Ən Çox Sevən" },
    { "en": "AL-MAJEED", "aze": "Əl-Məcid", "ar": "ٱلْمَجِيدُ", "meaning": "The Glorious, The Most Honorable", "meaning_aze": "Şanlı. Hər Cürə Tərifə Layiq Olan" },
    { "en": "AL-BA'ITH", "aze": "Əl-Bais", "ar": "ٱلْبَاعِثُ", "meaning": "The Raiser of the Dead", "meaning_aze": "Axirətdə Ölüləri Dirildən" },
    { "en": "ASH-SHAHEED", "aze": "Əş-Şəhid", "ar": "ٱلْشَّهِيدُ", "meaning": "The All- and Ever Witnessing", "meaning_aze": "Hər Şeyə Şahid və Nəzarətçi Olan" },
    { "en": "AL-HAQQ", "aze": "Əl-Haqq", "ar": "ٱلْحَقُّ", "meaning": "The Absolute Truth", "meaning_aze": "Həqiqi. Haqqı Ortaya Çıxaran" },
    { "en": "AL-WAKEEL", "aze": "Əl-Vəkil", "ar": "ٱلْوَكِيلُ", "meaning": "The Trustee, The Disposer of Affairs", "meaning_aze": "Himayəçi. Qullarının İşini Bilən" },
    { "en": "AL-QAWIYY", "aze": "Əl-Qavi", "ar": "ٱلْقَوِيُّ", "meaning": "The All-Strong", "meaning_aze": "Güc sahibi" },
    { "en": "AL-MATEEN", "aze": "Əl-Mətin", "ar": "ٱلْمَتِينُ", "meaning": "The Forceful One, The Steadfast", "meaning_aze": "Sarsılmaz. Güc və Qüvvət Mənbəyi" },
    { "en": "AL-WALIYY", "aze": "Əl-Vəliy", "ar": "ٱلْوَلِيُّ", "meaning": "The Protecting Associate", "meaning_aze": "Himayəçi. Müsəlmanların Dostu" },
    { "en": "AL-HAMEED", "aze": "Əl-Həmid", "ar": "ٱلْحَمِيدُ", "meaning": "The Praiseworthy", "meaning_aze": "Təqdirəlayiq. Həmd Edilən" },
    { "en": "AL-MUHSEE", "aze": "Əl-Muhsi", "ar": "ٱلْمُحْصِيُ", "meaning": "The Appraiser, The Counter", "meaning_aze": "Bütün Varlıqların Sayını Bilən" },
    { "en": "AL-MUBDI", "aze": "Əl-Mübdi", "ar": "ٱلْمُبْدِئُ", "meaning": "The Originator, The Initiator", "meaning_aze": "Maddəsiz, Nümunəsiz Yaradan" },
    { "en": "AL-MU'ID", "aze": "Əl-Muid", "ar": "ٱلْمُعِيدُ", "meaning": "The Restorer, The Reinstater", "meaning_aze": "Məxluqatları Məhv Edib Sonra Dirildən" },
    { "en": "AL-MUHYEE", "aze": "Əl-Muhyi", "ar": "ٱلْمُحْيِى", "meaning": "The Giver of Life", "meaning_aze": "Dirildən. Həyat Verən" },
    { "en": "AL-MUMEET", "aze": "Əl-Mümit", "ar": "ٱلْمُمِيتُ", "meaning": "The Bringer of Death, the Destroyer", "meaning_aze": "Hər Canlıya Ölümü Daddıran" },
    { "en": "AL-HAYY", "aze": "Əl-Hayy", "ar": "ٱلْحَىُّ", "meaning": "The Ever-Living One", "meaning_aze": "Daima Diri Olan" },
    { "en": "AL-QAYYOOM", "aze": "Əl-Qəyyum", "ar": "ٱلْقَيُّومُ", "meaning": "The Self-Existing One", "meaning_aze": "Müstəqil. Zatı ilə Möhkəm Olan" },
    { "en": "AL-WAAJID", "aze": "Əl-Vacid", "ar": "ٱلْوَاجِدُ", "meaning": "The Perceiver. The Finder", "meaning_aze": "Ondan Heç Bir Şey Gizli Qalmayan" },
    { "en": "AL-MAAJID", "aze": "Əl-Macid", "ar": "ٱلْمَاجِدُ", "meaning": "The Illustrious, the Magnificent", "meaning_aze": "Səxavəti Çox Olan" },
    { "en": "AL-WAAHID", "aze": "Əl-Vahid", "ar": "ٱلْوَاحِدُ", "meaning": "The One, The All Inclusive", "meaning_aze": "Tək Olan. Yeganə" },
    { "en": "AL-AHAD", "aze": "Əl-Əhəd", "ar": "ٱلْأَحَد", "meaning": "The Unique, The Only One", "meaning_aze": "Bənzəri Olmayan" },
    { "en": "AS-SAMAD", "aze": "Əs-Səməd", "ar": "ٱلْصَّمَدُ", "meaning": "The Eternal, Satisfier of Needs", "meaning_aze": "Heç Kəsə və Heç Nəyə Ehtiyacı Olmayan" },
    { "en": "AL-QADIR", "aze": "Əl-Qədiir", "ar": "ٱلْقَادِرُ", "meaning": "The Capable, The Powerful", "meaning_aze": "İstədiyini İtədiyi kimi Yaratmağa Qadir" },
    { "en": "AL-MUQTADIR", "aze": "Əl-Müqtədir", "ar": "ٱلْمُقْتَدِرُ", "meaning": "The Creator of All Power", "meaning_aze": "İqtidarlı. Qüdrət Sahibi" },
    { "en": "AL-MUQADDIM", "aze": "Əl-Müqəddim", "ar": "ٱلْمُقَدِّمُ", "meaning": "The Expediter, The Promoter", "meaning_aze": "Əvvələ Çəkən. İrəli Aparan" },
    { "en": "AL-MU'AKHKHIR", "aze": "Əl-Muəxxir", "ar": "ٱلْمُؤَخِّرُ", "meaning": "The Delayer, the Retarder", "meaning_aze": "Təxirə Salan. Geriyə, Sona Qoyan" },
    { "en": "AL-AWWAL", "aze": "Əl-Əvvəl", "ar": "ٱلأَوَّلُ", "meaning": "The First", "meaning_aze": "Hər Şeydən Əvvəl Mövcud Olmuş" },
    { "en": "AL-AAKHIR", "aze": "Əl-Axir", "ar": "ٱلْآخِرُ", "meaning": "The Last", "meaning_aze": "Hər Şeydən Sonda Mövcud Olan" },
    { "en": "AZ-DHAAHIR", "aze": "Əz-Zahir", "ar": "ٱلْظَّاهِرُ", "meaning": "The Manifest One", "meaning_aze": "Aşkarda Olan (Aşkardakıları Bilən)" },
    { "en": "AL-BAATIN", "aze": "Əl-Batin", "ar": "ٱلْبَاطِنُ", "meaning": "The Hidden One, Knower of the Hidden", "meaning_aze": "Gizlində Olan (Gizlindəkiləri Bilən)" },
    { "en": "AL-WAALI", "aze": "Əl-Vali", "ar": "ٱلْوَالِي", "meaning": "The Protecting Friend", "meaning_aze": "Bütün Kainatı İdarə Edən" },
    { "en": "AL-MUTA'ALI", "aze": "Əl-Mütəali", "ar": "ٱلْمُتَعَالِي", "meaning": "The Self Exalted", "meaning_aze": "Ucaldılmış. Son Dərəcə Əzəmətli" },
    { "en": "AL-BARR", "aze": "Əl-Bərr", "ar": "ٱلْبَرُّ", "meaning": "The Source of Goodness", "meaning_aze": "Yaxşılığı və Ehsanı Bol Olan" },
    { "en": "AT-TAWWAB", "aze": "Ət-Təvvab", "ar": "ٱلْتَّوَّابُ", "meaning": "The Ever-Pardoning, The Relenting", "meaning_aze": "Tövbələri Qəbul Edən. Bağışlayan" },
    { "en": "AL-MUNTAQIM", "aze": "Əl-Müntəkim", "ar": "ٱلْمُنْتَقِمُ", "meaning": "The Avenger", "meaning_aze": "Üsyançıları və Zalımları Cəzalandıran" },
    { "en": "AL-'AFUWW", "aze": "Əl-Əfüvv", "ar": "ٱلْعَفُوُّ", "meaning": "The Pardoner. The Forgiver", "meaning_aze": "Əfv Edən. Bağışlayan" },
    { "en": "AR-RA'OOF", "aze": "Ər-Rauf", "ar": "ٱلْرَّؤُفُ", "meaning": "The Most Kind. The Clement", "meaning_aze": "Mehriban. Çox Şəfqətli" },
    { "en": "MAALIK-UL-MULK", "aze": "Məlik-ül Mülk", "ar": "مَالِكُ ٱلْمُلْكُ", "meaning": "The Owner of All", "meaning_aze": "Bütün Əmlakın Sahibi" },
    { "en": "DHUL-JALAALI WAL-IKRAAM", "aze": "Zül-Cəlali vəl-İkram", "ar": "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ", "meaning": "The Lord of Majesty and Bounty", "meaning_aze": "Əzəmət, Ucalıq və Səxavət Sahibi" },
    { "en": "AL-MUQSIT", "aze": "Əl-Muksit", "ar": "ٱلْمُقْسِطُ", "meaning": "The Equitable, the Requiter", "meaning_aze": "Ədalətlə Hökm Edən" },
    { "en": "AL-JAAMI'", "aze": "Əl-Cami", "ar": "ٱلْجَامِعُ", "meaning": "The Gatherer, the Uniter", "meaning_aze": "İki Əksin Birləşməsi" },
    { "en": "AL-GHANIYY", "aze": "Əl-Qəniyy", "ar": "ٱلْغَنيُّ", "meaning": "The Self-Sufficient, The Wealthy", "meaning_aze": "Ehtiyacsız. Möhtac Olmayan" },
    { "en": "AL-MUGHNI", "aze": "Əl-Muğni", "ar": "ٱلْمُغْنِيُّ", "meaning": "The Enricher", "meaning_aze": "Müstəqil Edən. Ehtiyacları Bitirən" },
    { "en": "AL-MANI'", "aze": "Əl-Mani", "ar": "ٱلْمَانِعُ", "meaning": "The Preventer of Harm", "meaning_aze": "İstəmədiyi Şeyin Qarşısını Alan" },
    { "en": "AD-DHARR", "aze": "Əd-Darr", "ar": "ٱلْضَّارُ", "meaning": "The Balancer, The Punisher", "meaning_aze": "Zərər Verənlərin Yaradıcısı" },
    { "en": "AN-NAFI'", "aze": "Ən-Nafi", "ar": "ٱلْنَّافِعُ", "meaning": "The Creator of Good", "meaning_aze": "Faydalı Şeylərin Yaradıcısı" },
    { "en": "AN-NUR", "aze": "Ən-Nur", "ar": "ٱلْنُّورُ", "meaning": "The Light, The Illuminator", "meaning_aze": "Aləmləri Nurlandıran" },
    { "en": "AL-HAADI", "aze": "Əl-Hadi", "ar": "ٱلْهَادِي", "meaning": "The Guide", "meaning_aze": "Hidayət Verən" },
    { "en": "AL-BADEE'", "aze": "Əl-Bədi", "ar": "ٱلْبَدِيعُ", "meaning": "The Incomparable Originator", "meaning_aze": "Həmişə İxtira Edən. Möcüzələr Yaradan" },
    { "en": "AL-BAAQI", "aze": "Əl-Baqi", "ar": "ٱلْبَاقِي", "meaning": "The Ever-Surviving, The Everlasting", "meaning_aze": "Əbədi. Daimi. Qaları" },
    { "en": "AL-WAARITH", "aze": "Əl-Varis", "ar": "ٱلْوَارِثُ", "meaning": "The Inheritor of All", "meaning_aze": "Hər Şeyin Əsl Sahibi" },
    { "en": "AR-RASHEED", "aze": "Ər-Rəşid", "ar": "ٱلْرَّشِيدُ", "meaning": "The Guide, Infallible Teacher", "meaning_aze": "Doğru Yolu Göstərən" },
    { "en": "AS-SABOOR", "aze": "Əs-Sabur", "ar": "ٱلْصَّبُورُ", "meaning": "The Forbearing, The Patient", "meaning_aze": "Cəza Verməyə Tələsməyən" }
];

function getItemText(item, lang) {
    return lang === 'eng' ? item.en : item.aze;
}

function getItemMeaning(item, lang) {
    return lang === 'eng' ? item.meaning : item.meaning_aze;
}

// === Game State ===
class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.isOptionDisabled = false;
        this.shuffledIndices = [];
        this.activeItemIndex = null;
        this.activeItem = null;
    }

    initDeck(dataLength) {
        this.shuffledIndices = this.shuffleArray([...Array(dataLength).keys()]);
    }

    getNextIndex() {
        if (this.shuffledIndices.length === 0) return null;
        this.activeItemIndex = this.shuffledIndices.pop();
        this.currentIndex++;
        return this.activeItemIndex;
    }

    recordCorrect() {
        this.correctCount++;
    }

    disableOptions() {
        this.isOptionDisabled = true;
    }

    resetCardState() {
        this.isOptionDisabled = false;
    }

    get isComplete() {
        return this.shuffledIndices.length === 0 && this.currentIndex > 0;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    generateOptions(data, correctIndex) {
        const incorrectPool = data.filter((_, i) => i !== correctIndex);
        const incorrect = this.shuffleArray([...incorrectPool]).slice(0, CONFIG.OPTIONS_COUNT);
        return this.shuffleArray([data[correctIndex], ...incorrect]);
    }
}

const gameState = new GameState();

// === UI Manager ===
class UI {
    constructor() {
        this.cache = {};
        this.data = [];
        this.currentLang = 'eng';
        this.handlers = {};
    }

    cacheElements() {
        this.cache = {
            card: document.querySelector(SELECTORS.CARD),
            frontCard: document.querySelector(SELECTORS.FRONT_CARD),
            frontText: document.querySelector(SELECTORS.FRONT_TEXT),
            options: document.querySelector(SELECTORS.OPTIONS),
            btn: document.querySelector(SELECTORS.BTN),
            counter: document.querySelector(SELECTORS.COUNTER),
            finalResult: document.querySelector(SELECTORS.FINAL_RESULT),
            languageSelection: document.querySelector(SELECTORS.LANGUAGE_SELECTION)
        };
    }

    bindEvents(handlers) {
        this.handlers = handlers;
        this.cache.frontCard.addEventListener('click', () => this.flipCard());
        this.cache.btn.addEventListener('click', () => this.handlers.onNext());
        
        this.cache.options.addEventListener('click', (e) => {
            const option = e.target.closest(`.${CLASSES.OPTION}`);
            if (option) this.handlers.onOptionClick(option);
        });
    }

    getLanguage() {
        return document.querySelector(SELECTORS.LANGUAGE_INPUT)?.value || 'eng';
    }

    setLoading(isLoading, lang = 'eng') {
        this.cache.btn.disabled = isLoading;
        this.cache.btn.textContent = isLoading 
            ? STRINGS[lang].loading 
            : STRINGS[lang].start;
    }

    showError(message) {
        this.cache.finalResult.textContent = message;
        this.cache.btn.disabled = true;
    }

    hideLanguageSelection() {
        this.cache.languageSelection.style.display = 'none';
    }

    flipCard() {
        const { card, frontCard, frontText } = this.cache;
        const isFlipped = card.style.transform === 'rotateX(180deg)';
        const lang = this.currentLang;
        const str = STRINGS[lang];

        card.style.transform = isFlipped ? 'rotateX(0deg)' : 'rotateX(180deg)';

        setTimeout(() => {
            if (!isFlipped) {
                frontText.textContent = gameState.currentIndex === 0 ? str.title : (gameState.activeItem?.ar ?? '');
                frontText.style.fontSize = CONFIG.FONTS.ARABIC;
                frontText.style.transform = 'scaleY(-1)';
                frontCard.classList.add(CLASSES.FLIPPED);
            } else {
                frontText.textContent = gameState.currentIndex === 0 ? str.welcome : getItemText(gameState.activeItem, lang);
                frontText.style.fontSize = CONFIG.FONTS.LATIN;
                frontText.style.transform = 'none';
                frontCard.classList.remove(CLASSES.FLIPPED);
            }
        }, CONFIG.ANIMATION_DELAY);
    }

    resetCard() {
        this.cache.card.style.transform = 'rotateX(0deg)';
        this.cache.frontCard.classList.remove(CLASSES.FLIPPED);
    }

    renderCard(item, lang) {
        gameState.activeItem = item;
        this.currentLang = lang;
        const { frontText } = this.cache;
        
        frontText.textContent = getItemText(item, lang);
        frontText.style.fontSize = CONFIG.FONTS.LATIN;
        frontText.style.transform = 'none';
    }

    renderOptions(options, correctItem) {
        const { options: container } = this.cache;
        container.innerHTML = '';

        options.forEach(option => {
            const el = document.createElement('div');
            el.className = CLASSES.OPTION;
            el.setAttribute('role', 'listitem');
            el.textContent = getItemMeaning(option, this.currentLang);
            el.dataset.correct = option === correctItem ? 'true' : 'false';
            container.appendChild(el);
        });
    }

    markOption(option, isCorrect) {
        option.classList.add(isCorrect ? CLASSES.CORRECT : CLASSES.INCORRECT);
        if (!isCorrect) {
            const correct = this.cache.options.querySelector('[data-correct="true"]');
            correct?.classList.add(CLASSES.CORRECT);
        }
    }

    disableOptions() {
        this.cache.options.querySelectorAll(`.${CLASSES.OPTION}`).forEach(opt => {
            opt.classList.add(CLASSES.DISABLED);
        });
    }

    enableOptions() {
        this.cache.options.querySelectorAll(`.${CLASSES.OPTION}`).forEach(opt => {
            opt.classList.remove(CLASSES.CORRECT, CLASSES.INCORRECT, CLASSES.DISABLED);
        });
    }

    updateCounter(current, total, lang) {
        const str = STRINGS[lang];
        this.cache.counter.textContent = current > 0 
            ? `${str.question} ${current}/${total}`
            : '';
    }

    updateButton(text) {
        this.cache.btn.textContent = text;
        this.cache.btn.disabled = false;
    }

    disableButton() {
        this.cache.btn.disabled = true;
    }

    showFinalResult(correct, total, lang) {
        const str = STRINGS[lang];
        this.cache.finalResult.textContent = `${correct}/${total} ${str.correct}`;
        this.cache.btn.textContent = str.end;
        this.cache.btn.disabled = true;
    }
}

const ui = new UI();

// === Game Controller ===
class GameController {
    constructor(data, lang) {
        this.data = data;
        this.lang = lang;
        this.strings = STRINGS[lang];
    }

    init() {
        gameState.reset();
        gameState.initDeck(this.data.length);
        
        ui.cacheElements();
        ui.hideLanguageSelection();
        ui.bindEvents({
            onNext: () => this.next(),
            onOptionClick: (el) => this.handleOptionClick(el)
        });

        this.next();
    }

    next() {
        if (gameState.isComplete) {
            ui.showFinalResult(gameState.correctCount, this.data.length, this.lang);
            ui.disableOptions();
            return;
        }

        gameState.resetCardState();
        ui.resetCard();
        ui.enableOptions();

        const idx = gameState.getNextIndex();
        if (idx === null) return;

        const item = this.data[idx];
        gameState.activeItem = item;

        ui.renderCard(item, this.lang);
        
        const options = gameState.generateOptions(this.data, idx);
        ui.renderOptions(options, item);

        ui.updateCounter(gameState.currentIndex, this.data.length, this.lang);
        ui.updateButton(this.strings.next);
    }

    handleOptionClick(element) {
        if (gameState.isOptionDisabled) return;

        const isCorrect = element.dataset.correct === 'true';
        
        ui.markOption(element, isCorrect);
        
        if (isCorrect) {
            gameState.recordCorrect();
        }

        gameState.disableOptions();
        ui.disableOptions();
    }

    static start(data, lang) {
        const game = new GameController(data, lang);
        game.init();
        return game;
    }
}

// === Application Entry Point ===
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('btn');
    const langInputs = document.querySelectorAll('input[name="language"]');
    
    let currentLang = document.querySelector('input[name="language"]:checked')?.value || 'eng';
    
    const updateButtonText = () => {
        startBtn.textContent = STRINGS[currentLang].start;
    };
    
    langInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateButtonText();
        });
    });
    
    ui.cacheElements();
    updateButtonText();
    
    startBtn.addEventListener('click', () => {
        const selectedLang = document.querySelector('input[name="language"]:checked')?.value || 'eng';
        GameController.start(DATA, selectedLang);
    }, { once: true });
});
