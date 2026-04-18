// Star highlight data for Ancient Skies app
// Structure: highlights[cultureId][monthNumber] = array of HIP IDs to highlight
// HIP IDs sourced from Hipparcos catalog via celestialprogramming.com
// Month numbers are 1-indexed, matching mythology-text.json

// RA/Dec coordinates for Celestial.add() GeoJSON
// Sourced from same catalog — needed to place highlights on the map
// coordinates format: [RA in degrees (-180..180), Dec in degrees]

const STAR_COORDS = {
  // --- SIBERIAN / BIG DIPPER ---
  54061: { name: "Dubhe",   coords: [-194.07, 61.75] },  // bowl
  53910: { name: "Merak",   coords: [-194.54, 56.38] },  // bowl
  58001: { name: "Phecda",  coords: [-181.54, 53.69] },  // bowl
  59774: { name: "Megrez",  coords: [-176.14, 57.03] },  // bowl/handle join
  62956: { name: "Alioth",  coords: [-166.49, 55.96] },  // handle
  65378: { name: "Mizar",   coords: [-159.02, 54.93] },  // handle
  67301: { name: "Alkaid",  coords: [-153.11, 49.31] },  // handle tip
  65477: { name: "Alcor",   coords: [-158.69, 54.99] },  // Mizar companion
  11767: { name: "Polaris", coords: [-142.05, 89.26] },  // north star

  // --- GREEK / PERSEUS CYCLE ---
  // Perseus
  15863: { name: "Mirphak",    coords: [-128.92, 49.86] }, // α Per
  14576: { name: "Algol",      coords: [-132.96, 40.96] }, // β Per (Medusa's eye)
  // Andromeda
    677: { name: "Alpheratz",  coords: [-177.91, 29.09] }, // α And
   5447: { name: "Mirach",     coords: [-162.57, 35.62] }, // β And
   9640: { name: "Almaak",     coords: [-149.03, 42.33] }, // γ And
  // Cassiopeia
   3179: { name: "Shedir",     coords: [-169.87, 56.54] }, // α Cas
    746: { name: "Caph",       coords: [-177.71, 59.15] }, // β Cas
  // Cepheus
 105199: { name: "Alderamin",  coords: [-40.36,  62.59] }, // α Cep
  // Pegasus
 113963: { name: "Markab",     coords: [-13.81,  15.21] }, // α Peg
 113881: { name: "Scheat",     coords: [-14.06,  28.08] }, // β Peg
 107315: { name: "Enif",       coords: [-33.95,   9.88] }, // ε Peg
  // Cetus
  14135: { name: "Menkar",     coords: [-134.43,  4.09] }, // α Cet
   3419: { name: "Diphda",     coords: [-169.10, -17.99]}, // β Cet

  // --- EGYPTIAN / ORION + SIRIUS ---
  32349: { name: "Sirius",     coords: [-101.29, -16.72] }, // Sopdet/Isis
  27989: { name: "Betelgeuse", coords: [ -91.21,   7.41] }, // Sah/Osiris shoulder
  24436: { name: "Rigel",      coords: [-101.37,  -8.20] }, // Osiris foot
  26311: { name: "Alnilam",    coords: [ -95.95,  -1.20] }, // belt center
  26727: { name: "Alnitak",    coords: [ -94.81,  -1.94] }, // belt
  25930: { name: "Mintaka",    coords: [ -96.99,  -0.30] }, // belt
  25336: { name: "Bellatrix",  coords: [ -81.28,   6.35] }, // shoulder
  27366: { name: "Saiph",      coords: [ -86.94,  -9.67] }, // foot

  // --- BABYLONIAN / ZODIAC ---
  17702: { name: "Alcyone",       coords: [-123.13,  24.11] }, // Pleiades brightest
  21421: { name: "Aldebaran",     coords: [ -111.02, 16.51] }, // Bull's eye
  25428: { name: "Alnath",        coords: [ -98.43,  28.61] }, // Bull's tip
  49669: { name: "Regulus",       coords: [ -152.09, 11.97] }, // Leo heart
  50583: { name: "Algieba",       coords: [ -155.01, 19.84] }, // Leo γ
  57632: { name: "Denebola",      coords: [ -177.26, 14.57] }, // Leo tail
  65474: { name: "Spica",         coords: [ -158.70,-11.16] }, // Virgo
  63608: { name: "Vindemiatrix",  coords: [ -164.46, 10.96] }, // Virgo ε
  80763: { name: "Antares",       coords: [ -112.65,-26.43] }, // Scorpius heart
  85927: { name: "Shaula",        coords: [ -96.60, -37.10] }, // Scorpius tail
  90185: { name: "Kaus Australis",coords: [ -83.96, -34.38] }, // Sagittarius
  92855: { name: "Nunki",         coords: [ -76.18, -26.30] }, // Sagittarius σ
   9884: { name: "Hamal",         coords: [ -148.21, 23.46] }, // Aries α

  // --- BABYLONIAN NORMAL STARS ---
  // The 31 reference stars from the Astronomical Diaries
  // Identifications from Roughton, Steele & Walker (2004)
  24608: { name: "Capella",           coords: [-140.66,  45.99] }, // α Aur — The Crook
  36850: { name: "Castor",            coords: [-113.65,  31.89] }, // α Gem — Front Twin Star
  37826: { name: "Pollux",            coords: [-111.79,  28.03] }, // β Gem — Rear Twin Star
  42911: { name: "Eta Cancri",        coords: [-149.06,  20.55] }, // η Cnc — Front Stars of the Crab
  43109: { name: "Theta Cancri",      coords: [-148.69,  18.53] }, // θ Cnc — Front Stars of the Crab
  42806: { name: "Gamma Cancri",      coords: [-148.96,  21.47] }, // γ Cnc — Rear Stars of the Crab
  43234: { name: "Delta Cancri",      coords: [-148.19,  18.15] }, // δ Cnc — Rear Stars of the Crab
  49583: { name: "Epsilon Leonis",    coords: [-152.09,  23.77] }, // ε Leo — Head of the Lion
  50335: { name: "Mu Leonis",         coords: [-154.17,  26.00] }, // µ Leo — Head of the Lion
  50801: { name: "Rho Leonis",        coords: [-152.31,   9.99] }, // ρ Leo — Small Star Behind the King
  51585: { name: "Theta Leonis",      coords: [-164.02,  15.43] }, // θ Leo — Rump of the Lion
  57757: { name: "Beta Virginis",     coords: [-177.67,   1.89] }, // β Vir — Rear Foot of the Lion
  61941: { name: "Gamma Virginis",    coords: [ 170.89,  -1.45] }, // γ Vir — Single Star in Front of Furrow
  72603: { name: "Alpha Librae",      coords: [ 130.89, -16.04] }, // α Lib — Southern Part of the Scales
  74785: { name: "Beta Librae",       coords: [ 124.79,  -9.38] }, // β Lib — Northern Part of the Scales
  78401: { name: "Delta Scorpii",     coords: [-117.67, -22.62] }, // δ Sco — Head of the Scorpion
  78820: { name: "Beta Scorpii",      coords: [-116.11, -19.81] }, // β Sco — Head of the Scorpion
  84012: { name: "Theta Ophiuchi",    coords: [-102.97, -25.72] }, // θ Oph — Tip of Pabilsag's Arrow
 100345: { name: "Beta Capricorni",   coords: [ -60.58, -14.78] }, // β Cap — Horn of the Goat Fish
 104139: { name: "Gamma Capricorni",  coords: [ -51.99, -16.66] }, // γ Cap — Front Star of Goat Fish
 107556: { name: "Delta Capricorni",  coords: [ -44.98, -16.13] }, // δ Cap — Rear Star of Goat Fish
   5742: { name: "Epsilon Piscium",   coords: [-162.38,   7.89] }, // ε Psc — Ribbon of the Swallow
   4906: { name: "Eta Piscium",       coords: [-165.46,  15.35] }, // η Psc — Ribbon of the Fishes

  // --- CHINESE / WEAVER GIRL + COWHERD ---
  91262: { name: "Vega",    coords: [ -80.77, 38.78] }, // Zhinü/Weaver Girl
  97649: { name: "Altair",  coords: [ -62.30,  8.87] }, // Niulang/Cowherd
  97278: { name: "Tarazed", coords: [ -63.44, 10.61] }, // Altair companion
  98036: { name: "Alshain", coords: [ -61.17,  6.41] }, // Altair companion
 102098: { name: "Deneb",   coords: [ -49.64, 45.28] }, // Summer Triangle apex


  // --- CONSTELLATION LINE STARS ---
  // RA/Dec from Hipparcos catalog I/239/hip_main (J2000), converted to -180..180

  // MUL.MUL / Pleiades
  17847: { name: "Atlas",     coords: [ -122.71,  24.05] }, // 27 Tau
  17608: { name: "Electra",   coords: [ -123.42,  23.95] }, // 17 Tau
  17499: { name: "Taygeta",   coords: [ -123.78,  24.11] }, // 19 Tau
  17573: { name: "Maia",      coords: [ -123.54,  24.37] }, // 20 Tau

  // GU4.AN.NA / Taurus — Hyades and outline
  18724: { name: "HIP 18724", coords: [ -119.83,  12.49] },
  19038: { name: "HIP 19038", coords: [ -118.83,  22.08] },
  20205: { name: "HIP 20205", coords: [ -115.05,  15.63] }, // γ Tau
  20455: { name: "HIP 20455", coords: [ -114.27,  17.54] }, // δ¹ Tau
  20889: { name: "HIP 20889", coords: [ -112.85,  19.18] }, // θ¹ Tau
  20894: { name: "HIP 20894", coords: [ -112.83,  15.87] }, // ε Tau
  26451: { name: "HIP 26451", coords: [  -95.59,  21.14] }, // ζ Tau

  // SIPA.ZI.AN.NA / Orion
  22797: { name: "HIP 22797", coords: [ -106.44,   2.44] },
  26207: { name: "HIP 26207", coords: [  -96.22,   9.93] }, // λ Ori
  26366: { name: "HIP 26366", coords: [  -95.77,   9.29] },
  28413: { name: "HIP 28413", coords: [  -89.99,  -3.07] },
  28614: { name: "HIP 28614", coords: [  -89.40,   9.65] }, // μ Ori
  29655: { name: "HIP 29655", coords: [  -86.28,  22.51] },
  30343: { name: "HIP 30343", coords: [  -84.26,  22.51] },

  // UR.GU.LA / Leo
  46146: { name: "HIP 46146", coords: [  -38.84,  26.18] },
  46750: { name: "HIP 46750", coords: [  -37.07,  22.97] },
  47908: { name: "HIP 47908", coords: [  -33.54,  23.77] },
  48455: { name: "HIP 48455", coords: [  -31.81,  26.01] },
  49029: { name: "HIP 49029", coords: [  -29.95,   8.04] },
  49637: { name: "HIP 49637", coords: [  -28.02,  10.00] },
  51624: { name: "HIP 51624", coords: [  -21.80,   9.31] },
  53417: { name: "HIP 53417", coords: [  -16.10,  24.75] },
  54182: { name: "HIP 54182", coords: [  -13.74,   7.34] },
  54872: { name: "HIP 54872", coords: [  -11.47,  20.52] },
  54879: { name: "HIP 54879", coords: [  -11.44,  15.43] },
  55219: { name: "HIP 55219", coords: [  -10.38,  33.09] },
  55642: { name: "HIP 55642", coords: [   -9.02,  10.53] },
  // HIP 55203: masked in Hipparcos catalog, skipped

  // AB.SIN / Virgo
  57380: { name: "HIP 57380", coords: [   -3.54,   6.53] },
  63090: { name: "HIP 63090", coords: [ -166.10,   3.40] },

  // ZI.BA.AN.NA / Libra
  69427: { name: "HIP 69427", coords: [ -146.78, -10.27] },
  69701: { name: "HIP 69701", coords: [ -146.00,  -6.00] },
  71957: { name: "HIP 71957", coords: [ -139.24,  -5.66] },
  72220: { name: "HIP 72220", coords: [ -138.44,   1.89] },
  72622: { name: "HIP 72622", coords: [ -137.28, -16.04] },
  73620: { name: "HIP 73620", coords: [ -134.27,   2.09] },

  // GIR.TAB / Scorpion
  73714: { name: "HIP 73714", coords: [ -133.98, -25.28] },
  76219: { name: "HIP 76219", coords: [ -126.46, -10.06] },
  76333: { name: "HIP 76333", coords: [ -126.12, -14.79] },
  76600: { name: "HIP 76600", coords: [ -125.34, -29.78] },
  78265: { name: "HIP 78265", coords: [ -120.29, -26.11] },
  79374: { name: "HIP 79374", coords: [ -117.00, -19.46] },
  80112: { name: "HIP 80112", coords: [ -114.70, -25.59] },
  81266: { name: "HIP 81266", coords: [ -111.03, -28.22] },
  82396: { name: "HIP 82396", coords: [ -107.46, -34.29] },
  82545: { name: "HIP 82545", coords: [ -106.92, -38.02] },
  82729: { name: "HIP 82729", coords: [ -106.35, -42.36] },
  84143: { name: "HIP 84143", coords: [ -101.96, -43.24] },
  86228: { name: "HIP 86228", coords: [  -95.67, -43.00] },
  87073: { name: "HIP 87073", coords: [  -93.10, -40.13] },
  87261: { name: "HIP 87261", coords: [  -92.54, -37.04] },
  // HIP 78727: masked in Hipparcos catalog, skipped

  // PA.BIL.SAG / Sagittarius
  88635: { name: "HIP 88635", coords: [  -88.55, -30.42] },
  89112: { name: "HIP 89112", coords: [  -87.19, -45.95] },
  89341: { name: "HIP 89341", coords: [  -86.56, -21.06] },
  89642: { name: "HIP 89642", coords: [  -85.59, -36.76] },
  89931: { name: "HIP 89931", coords: [  -84.75, -29.83] },
  90422: { name: "HIP 90422", coords: [  -83.26, -45.97] },
  90496: { name: "HIP 90496", coords: [  -83.01, -25.42] },
  91918: { name: "HIP 91918", coords: [  -78.92, -35.64] },
  92041: { name: "HIP 92041", coords: [  -78.59, -26.99] },
  93085: { name: "HIP 93085", coords: [  -75.57, -21.11] },
  93506: { name: "HIP 93506", coords: [  -74.35, -29.88] },
  93683: { name: "HIP 93683", coords: [  -73.83, -21.74] },
  93864: { name: "HIP 93864", coords: [  -73.26, -27.67] },
  94141: { name: "HIP 94141", coords: [  -72.56, -21.02] },
  94643: { name: "HIP 94643", coords: [  -71.12, -25.26] },
  95477: { name: "HIP 95477", coords: [  -68.68, -24.51] },
  95865: { name: "HIP 95865", coords: [  -67.53, -26.99] },
  96465: { name: "HIP 96465", coords: [  -65.82, -24.88] },
  98032: { name: "HIP 98032", coords: [  -61.18, -41.87] },
  98066: { name: "HIP 98066", coords: [  -61.04, -26.30] },
  98412: { name: "HIP 98412", coords: [  -60.07, -35.28] },
  98688: { name: "HIP 98688", coords: [  -59.34, -27.71] },
  98761: { name: "HIP 98761", coords: [  -59.11, -37.94] },

  // SUHUR.MAS / Capricorn
 100064: { name: "HIP 100064", coords: [  -55.49, -12.54] },
 101027: { name: "HIP 101027", coords: [  -52.78, -17.81] },
 102485: { name: "HIP 102485", coords: [  -48.48, -25.27] },
 104234: { name: "HIP 104234", coords: [  -43.22, -25.01] },
 105881: { name: "HIP 105881", coords: [  -38.33, -22.41] },
 107095: { name: "HIP 107095", coords: [  -34.61, -14.05] },
 108036: { name: "HIP 108036", coords: [  -31.68, -13.55] },

  // GU.LA / Aquarius
    154: { name: "HIP 154",    coords: [ -179.51,  -6.01] },
    355: { name: "HIP 355",    coords: [ -178.87, -10.51] },
    910: { name: "HIP 910",    coords: [ -177.18, -15.47] },
   1170: { name: "HIP 1170",   coords: [ -176.34, -18.93] },
 110395: { name: "HIP 110395", coords: [  -24.59,  -1.39] },
 110672: { name: "HIP 110672", coords: [  -23.68,   1.38] },
 110960: { name: "HIP 110960", coords: [  -22.79,  -0.02] },
 111497: { name: "HIP 111497", coords: [  -21.16,  -0.12] },
 112716: { name: "HIP 112716", coords: [  -17.60, -13.59] },
 112961: { name: "HIP 112961", coords: [  -16.85,  -7.58] },
 113136: { name: "HIP 113136", coords: [  -16.34, -15.82] },
 114341: { name: "HIP 114341", coords: [  -12.64, -21.17] },
 114724: { name: "HIP 114724", coords: [  -11.42,  -6.05] },
 114855: { name: "HIP 114855", coords: [  -11.03,  -9.09] },
 114971: { name: "HIP 114971", coords: [  -10.71,   3.28] },
 115033: { name: "HIP 115033", coords: [  -10.52,  -9.18] },
 115438: { name: "HIP 115438", coords: [   -9.26, -20.10] },
 116771: { name: "HIP 116771", coords: [   -5.01,   5.63] },
 116901: { name: "HIP 116901", coords: [   -4.56, -17.82] },
 116971: { name: "HIP 116971", coords: [   -4.32, -14.54] },
 118209: { name: "HIP 118209", coords: [   -0.33,  -3.56] },

  // LU.HUN.GA / Aries
   8796: { name: "HIP 8796",   coords: [ -151.73,  29.58] },
   8903: { name: "HIP 8903",   coords: [ -151.34,  20.81] },
  10064: { name: "HIP 10064",  coords: [ -147.61,  34.99] },
  13209: { name: "HIP 13209",  coords: [ -137.50,  27.26] },

  // MAS.TAB.BA GAL.GAL / Gemini
  32246: { name: "HIP 32246",  coords: [  -79.02,  25.13] },
  35550: { name: "HIP 35550",  coords: [  -69.97,  21.98] },

  // --- BABYLONIAN WAY OF ENLIL — new stars ---
  69673: { name: "Arcturus",        coords: [-146.09,  19.18] }, // α Boo — ŠU.PA, ŠUDUN
  67927: { name: "Muphrid",         coords: [-151.33,  18.40] }, // η Boo — NIN.MAH
  31681: { name: "Alhena",          coords: [ -98.13,  16.36] }, // γ Gem — SÍB.MAŠ.AN.NA
  46390: { name: "Alphard",         coords: [-141.90,  -8.66] }, // α Hya — MUŠ
  17776: { name: "Lambda Persei",   coords: [ -57.09,  23.42] }, // λ Per — MAŠ.TAB.BA  // TODO: verify HIP
   8068: { name: "Phi Persei",      coords: [ -25.91,  50.69] }, // φ Per — MAŠ.TAB.BA
  85696: { name: "Lesath",          coords: [ -97.31, -37.30] }, // υ Sco — ŠAR.GAZ (also fills GIR.TAB gap)
  81377: { name: "Han",             coords: [-110.71, -10.57] }, // ζ Oph — KA.MUS.IN.A
  71860: { name: "Alpha Lupi",      coords: [-139.52, -47.39] }, // α Lup — UR.IDIM (Enlil + Ea)

  // --- BABYLONIAN WAY OF EA — new stars ---
   1067: { name: "Algenib",         coords: [  -3.31,  15.18] }, // γ Peg — IKU
 112029: { name: "Homam",           coords: [ -19.63,  10.83] }, // ζ Peg — ŠINUNUTU
 112158: { name: "Matar",           coords: [ -19.25,  30.22] }, // η Peg — ŠINUNUTU
   9487: { name: "Alrescha",        coords: [ -30.51,   2.76] }, // α Psc — ŠINUNUTU
 113368: { name: "Fomalhaut",       coords: [ -15.59, -29.62] }, // α PsA — MUL.KU6
  71683: { name: "Rigil Kentaurus", coords: [-140.10, -60.84] }, // α Cen — MUL.MAŠ.TAB.BA
  68702: { name: "Hadar",           coords: [-149.05, -60.37] }, // β Cen — MUL.MAŠ.TAB.BA
  73273: { name: "Beta Lupi",       coords: [-135.37, -43.13] }, // β Lup — MUL.UR.IDIM
  34444: { name: "Wezen",           coords: [-107.10, -26.39] }, // δ CMa — MUL.BAN
  33579: { name: "Adhara",          coords: [-104.66, -28.97] }, // ε CMa — MUL.BAN
  35904: { name: "Aludra",          coords: [-111.02, -29.30] }, // η CMa — MUL.BAN
  59199: { name: "Alchiba",         coords: [-177.90, -24.73] }, // α Crv — MUL.UG.GA
  59803: { name: "Gienah",          coords: [-176.05, -17.54] }, // γ Crv — MUL.UG.GA
  60965: { name: "Algorab",         coords: [-172.53, -16.52] }, // δ Crv — MUL.UG.GA
  61359: { name: "Kraz",            coords: [-171.40, -23.40] }, // β Crv — MUL.UG.GA
};

// The 31 Babylonian Normal Stars — fixed reference set used in the Astronomical Diaries
// These are always shown when the Normal Stars toggle is active, regardless of month
const BABYLON_NORMAL_STARS = [
  17702,  // η Tau — The Bristle (Pleiades)
  21421,  // α Tau — Aldebaran (Jaw of the Bull)
  25428,  // β Tau — Elnath (Horn of the Bull)
  15863,  // α Per — Mirphak (Bright Star of the Old Man)
  24608,  // α Aur — Capella (The Crook)
  36850,  // α Gem — Castor (Front Twin Star)
  37826,  // β Gem — Pollux (Rear Twin Star)
  42911,  // η Cnc — Front Stars of the Crab
  43109,  // θ Cnc — Front Stars of the Crab
  42806,  // γ Cnc — Rear Stars of the Crab
  43234,  // δ Cnc — Rear Stars of the Crab
  49583,  // ε Leo — Head of the Lion
  50335,  // µ Leo — Head of the Lion
  49669,  // α Leo — Regulus (The King)
  50801,  // ρ Leo — Small Star Behind the King
  51585,  // θ Leo — Rump of the Lion
  57757,  // β Vir — Rear Foot of the Lion
  61941,  // γ Vir — Single Star in Front of Furrow
  65474,  // α Vir — Spica (Bright Star of the Furrow)
  72603,  // α Lib — Southern Part of the Scales
  74785,  // β Lib — Northern Part of the Scales
  78401,  // δ Sco — Head of the Scorpion
  78820,  // β Sco — Head of the Scorpion
  80763,  // α Sco — Antares (Lisi)
  84012,  // θ Oph — Tip of Pabilsag's Arrow
  90185,  // ε Sgr — Kaus Australis (Rear of Pabilsag approx)
  92855,  // σ Sgr — Nunki (Front of Pabilsag approx)
 100345,  // β Cap — Horn of the Goat Fish
 104139,  // γ Cap — Front Star of Goat Fish
 107556,  // δ Cap — Rear Star of Goat Fish
   5742,  // ε Psc — Ribbon of the Swallow
   4906,  // η Psc — Ribbon of the Fishes
];

// Babylonian constellation figures as in the MUL.APIN tablets
// Reconstructed by Stellarium's Babylonian sky culture (Hoffmann et al.)
// Each entry: array of line segments, each segment an array of HIP IDs to connect in order
const BABYLON_CONSTELLATIONS = [
  { name: "MUL.MUL (The Star Cluster)",          way: "anu", lines: [[17847, 17702, 17608, 17499, 17573, 17702]] },
  { name: "GU4.AN.NA (Bull of Heaven)",           way: "anu", lines: [[21421, 20894, 20205, 20455, 20889, 25428], [21421, 26451], [20205, 18724], [17702, 19038, 20455]] },
  { name: "SIPA.ZI.AN.NA (True Shepherd of Anu)", way: "anu", lines: [[30343, 28614], [29655, 28614, 28413], [28614, 27989], [27366, 26727, 27989], [25336, 25930, 24436], [25930, 26311, 26727], [26207, 26366, 27989], [26366, 25336, 22797]] },
  { name: "UR.GU.LA (Urgulu-demon)",              way: "anu", lines: [[47908, 48455, 50335, 50583, 49583, 49669, 54879, 54872, 50583], [54872, 57632], [54879, 55642], [49669, 49637, 49029], [50583, 53417, 55203, 55219], [46146, 48455], [46750, 47908], [54879, 54182], [49669, 51624]] },
  { name: "AB.SIN (Furrow)",                      way: "anu", lines: [[57380, 61941, 65474], [61941, 63090, 63608]] },
  { name: "ZI.BA.AN.NA (Scales)",                 way: "anu", lines: [[74785, 72622, 69427, 69701, 71957, 72622], [74785, 71957, 72220, 73620, 74785], [73620, 71957, 69427]] },
  { name: "GIR.TAB (Scorpion)",                   way: "anu", lines: [[85696, 85927, 87261, 87073, 86228, 84143, 82729, 82545, 82396, 81266, 80763, 80112, 78820, 76333, 76219, 78727, 79374, 80112, 76600, 73714, 78265, 80112, 78401]] },
  { name: "PA.BIL.SAG (God Pabilsang)",           way: "anu", lines: [[98032, 95865], [90185, 89931, 90496], [93506, 89931, 88635], [92855, 93085, 93683, 94141, 93864], [94643, 95477, 96465, 98412, 98761], [96465, 98066, 98688], [88714, 89112, 89642], [90568, 90422, 91918, 89642, 89341, 92041, 94643], [91918, 95865, 96465]] },
  { name: "SUHUR.MAS (Goat-Fish)",                way: "anu", lines: [[107556, 108036, 107095, 107556, 105881, 104139, 107556], [104139, 101027, 102485, 104234], [101027, 100345, 100064]] },
  { name: "GU.LA (The Great One)",                way: "anu", lines: [[115438, 114855, 112961, 110003, 109074, 106278, 109139, 112716, 113136, 114341], [109074, 107315, 106278], [109074, 110395, 114971, 116771], [110960, 111497, 114724, 115033, 116971, 116901], [110960, 110672, 118209, 154, 355, 910, 1170]] },
  { name: "LU.HUN.GA (Hired Man)",                way: "anu", lines: [[8903, 9884, 8796, 10064, 13209]] },
  { name: "MAS.TAB.BA GAL.GAL (Great Twins)",     way: "anu", lines: [[37826, 35550], [32246, 36850, 37826]] },

  // --- WAY OF ENLIL (33 entries) ---
  { name: "MUL.MUL (The Star Cluster)",            way: "enlil", lines: [[17847, 17702, 17608, 17499, 17573, 17702]] },
  { name: "GU4.AN.NA (Bull of Heaven)",             way: "enlil", lines: [[21421, 20894, 20205, 20455, 20889, 25428], [21421, 26451], [20205, 18724], [17702, 19038, 20455]] },
  { name: "SIPA.ZI.AN.NA (True Shepherd of Anu)",   way: "enlil", lines: [[30343, 28614], [29655, 28614, 28413], [28614, 27989], [27366, 26727, 27989], [25336, 25930, 24436], [25930, 26311, 26727], [26207, 26366, 27989], [26366, 25336, 22797]] },
  { name: "SÍB.MAŠ.AN.NA (Shepherd of the Land)",  way: "enlil", lines: [[31681]] },
  { name: "GAM (The Crook)",                        way: "enlil", lines: [[24608]] },
  { name: "MAŠ.TAB.BA.GAL.GAL (Great Twins)",       way: "enlil", lines: [[36850, 37826]] },
  { name: "MAŠ.TAB.BA.TUR.TUR (Little Twins)",      way: "enlil", lines: [[35550, 29655]] },
  { name: "AL.LUL (The Crab)",                      way: "enlil", lines: [[42806, 43234]] },
  { name: "UR.GU.LA (The Lion)",                    way: "enlil", lines: [[47908, 48455, 50335, 50583, 49583, 49669, 54879, 54872, 50583], [54872, 57632], [54879, 55642], [49669, 49637, 49029], [50583, 53417, 55203, 55219], [46146, 48455], [46750, 47908], [54879, 54182], [49669, 51624]] },
  { name: "KUA (Bright Star of the Lion's Breast)", way: "enlil", lines: [[49583]] },
  { name: "ZIBBĀTU (Tail of the Lion)",             way: "enlil", lines: [[57632]] },
  { name: "BALTA",                                  way: "enlil", lines: [[54872, 54879]] },
  { name: "AB.SÍN (The Furrow)",                    way: "enlil", lines: [[57380, 61941, 65474], [61941, 63090, 63608]] },
  { name: "RIN (The Scales)",                       way: "enlil", lines: [[74785, 72603]] },
  { name: "ŠU.PA (Enlil-star)",                     way: "enlil", lines: [[69673]] },
  { name: "NIN.MAH (Exalted Lady)",                 way: "enlil", lines: [[67927]] },
  { name: "UR.IDIM (The Mad Dog)",                  way: "enlil", lines: [[71860]] },
  { name: "MAR.GÍD.DA (The Wagon)",                 way: "enlil", lines: [[54061, 53910, 58001, 59774, 62956, 65378, 67301]] },
  { name: "MAR.GÍD.DA.AN.NA (Wagon of Heaven)",     way: "enlil", lines: [[11767]] },
  { name: "ŠUDUN (The Yoke)",                       way: "enlil", lines: [[69673]] },
  { name: "UZ (The She-Goat)",                      way: "enlil", lines: [[91262]] },
  { name: "LUGAL (The King)",                       way: "enlil", lines: [[49669]] },
  { name: "UD.KA.DU.A (The Panther)",               way: "enlil", lines: [[102098, 105199]] },
  { name: "MUŠ (The Serpent)",                      way: "enlil", lines: [[46390]] },
  { name: "APIN (The Plough)",                      way: "enlil", lines: [[9640]] },
  { name: "AN.ZU (Storm Bird)",                     way: "enlil", lines: [[3179]] },
  { name: "ŠU.GI (The Old Man)",                    way: "enlil", lines: [[15863]] },
  { name: "LÙ.HUL.GÁ (The Evil Man)",               way: "enlil", lines: [[14576]] },
  { name: "MAŠ.TAB.BA (Twins of the Old Man)",      way: "enlil", lines: [[17776, 8068]] },
  { name: "ŠAR.UR (The Smiter)",                    way: "enlil", lines: [[85927]] },
  { name: "ŠAR.GAZ (The Slayer)",                   way: "enlil", lines: [[85696]] },
  { name: "GIR.TAB (Scorpion)",                     way: "enlil", lines: [[80763]] },
  { name: "KA.MUS.IN.A (Breath of Life)",           way: "enlil", lines: [[81377]] },

  // --- WAY OF EA (15 entries) ---
  { name: "IKU (The Field)",                        way: "ea", lines: [[113963, 1067, 677, 113881, 113963]] },
  { name: "ŠINUNUTU (The Swallow)",                 way: "ea", lines: [[107315, 112029, 9487], [112029, 112158]] },
  { name: "ANUNITU",                                way: "ea", lines: [[5447]] },
  { name: "MUL.LÚ.HUN.GÁ (Hired Man)",             way: "ea", lines: [[9884, 8903]] },
  { name: "MUL.KU6 (The Fish)",                     way: "ea", lines: [[113368]] },
  { name: "MUL.GULA (The Giant)",                   way: "ea", lines: [[109074]] },
  { name: "MUL.SUHUR.MAŠ (Goat-Fish)",              way: "ea", lines: [[107556]] },
  { name: "MUL.PA.BIL.SAG (Ancient God)",           way: "ea", lines: [[92855, 89931]] },
  { name: "MUL.MAŠ.TAB.BA (Southern Twins)",        way: "ea", lines: [[71683, 68702]] },
  { name: "MUL.UR.IDIM (Wild Dog)",                 way: "ea", lines: [[71860, 73273]] },
  { name: "MUL.NUN.KI (Eridu)",                     way: "ea", lines: [[92855]] },
  { name: "MUL.KAK.SI.SÁ (The Arrow)",              way: "ea", lines: [[32349]] },
  { name: "MUL.BAN (The Bow)",                      way: "ea", lines: [[33579, 34444, 35904]] },
  { name: "MUL.GÍR.TAB (Scorpion Tail)",            way: "ea", lines: [[84143, 86228]] },
  { name: "MUL.UG.GA (The Raven)",                  way: "ea", lines: [[59199, 59803, 60965, 61359]] }
];

// Month highlight mappings
// Each entry: array of HIP IDs to highlight that month
const STAR_HIGHLIGHTS = {

  siberian: {
    // Big Dipper is the whole story — all stars active all 12 months
    // 4 bowl stars = the Elk body; 3 handle stars = the hunters
    // Alcor = possible 4th hunter or the arrow; Polaris = fixed point the hunt rotates around
    1:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Sep: hunt begins
    2:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Oct: pursuit
    3:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Nov: the strike
    4:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Dec: long death
    5:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Jan: underworld
    6:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Feb: first stirrings
    7:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Mar: rebirth
    8:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Apr: ascends
    9:  [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // May: triumphant
    10: [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Jun: turning
    11: [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Jul: descent
    12: [54061, 53910, 58001, 59774, 62956, 65378, 67301, 65477, 11767], // Aug: summer's end
  },

  greek: {
    // Perseus cycle — characters appear as they enter the story
    1:  [3179, 746, 14135, 3419, 105199],               // Apr: Cassiopeia boasts, Cetus sent, Cepheus
    2:  [3179, 746, 14135, 3419, 105199],               // May: Cetus ravages, Cepheus consults oracle
    3:  [15863, 14576],                                 // Jun: Perseus gets quest, Medusa hunt begins
    4:  [15863, 14576],                                 // Jul: Gray Sisters, Perseus finds Medusa
    5:  [15863, 14576, 113963, 113881, 107315],         // Aug: Medusa slain, Pegasus born
    6:  [15863, 677, 5447, 9640, 14135, 3419],         // Sep: Perseus flies, spots Andromeda, Cetus rises
    7:  [15863, 677, 5447, 9640, 14135, 3419,
         113963, 113881, 107315],                       // Oct: battle! Perseus uses Medusa head on Cetus
    8:  [677, 5447, 9640, 15863, 3179, 746, 105199],   // Nov: Andromeda freed, wedding, Phineus arrives
    9:  [15863, 14576],                                 // Dec: wedding battle, Perseus uses Medusa again
    10: [15863, 3179, 746],                             // Jan: home to Argos, turns Polydectes to stone
    11: [3179, 746, 105199],                            // Feb: Cassiopeia placed in sky, Cepheus nearby
    12: [677, 5447, 9640, 15863, 14135, 3419,
         113963, 113881, 107315, 3179, 746],            // Mar: all catasterized, whole cast in the sky
  },

  egyptian: {
    // Sirius = Sopdet/Isis; Orion stars = Sah/Osiris
    // Months 9-10 Orion is "in the underworld" (invisible) — no highlights those months
    1:  [32349],                                                    // Jul: Sirius rises (Sopdet appears)
    2:  [27989, 24436, 26311, 26727, 25930, 25336, 27366],        // Aug: Orion/Osiris rises, belt named
    3:  [32349, 27989, 24436, 26311, 26727, 25930, 25336, 27366], // Sep: Sirius + Orion together
    4:  [27989, 24436, 26311, 26727, 25930, 25336, 27366],        // Oct: Sah walks southern sky
    5:  [27989, 24436, 26311, 26727, 25930, 25336, 27366],        // Nov: Sah at zenith/midnight
    6:  [32349],                                                    // Dec: Sopdet shines south, Milky Way
    7:  [27989, 24436, 26311, 26727, 25930, 25336, 27366],        // Jan: Sah descends west
    8:  [27989, 24436, 26311, 26727, 25930, 25336, 27366],        // Feb: Sah sinks, enters Duat
    9:  [],                                                         // Mar: Sah disappears (in underworld)
    10: [],                                                         // Apr: Sah invisible in Duat
    11: [32349],                                                    // May: Sopdet glimpsed returning
    12: [32349],                                                    // Jun: Sopdet soon to rise again
  },

  babylonian: {
    // Zodiac procession — one constellation per month, matching the text exactly
    1:  [17702],                                 // Mar/Apr: Pleiades (MUL.MUL) heliacal rising
    2:  [21421, 25428, 17702],                   // Apr/May: Bull of Heaven (Taurus) + Pleiades nearby
    3:  [27989, 24436, 26311, 26727, 25930],     // May/Jun: True Shepherd of Anu (Orion) + belt
    4:  [49669, 50583, 57632],                   // Jun/Jul: Lion (Leo) + Regulus
    5:  [65474, 63608],                          // Jul/Aug: The Furrow (Virgo) + Spica
    6:  [65474, 63608],                          // Aug/Sep: The Balance (Libra) — using Virgo border stars
    7:  [80763, 85927],                          // Sep/Oct: The Scorpion (Scorpius) + Antares
    8:  [90185, 92855],                          // Oct/Nov: The Bow (Sagittarius)
    9:  [],                                      // Nov/Dec: The Goat-Fish (Capricorn) — no bright named stars in our list
    10: [27989, 24436, 26311, 26727, 25930],     // Dec/Jan: Aquarius + Orion returning in predawn
    11: [],                                      // Jan/Feb: The Tails (Pisces) — faint, no named stars
    12: [9884],                                  // Feb/Mar: The Hired Man (Aries) + Hamal
  },

  chinese: {
    // Vega (Zhinü) and Altair (Niulang) are the core — always present
    // Month 7 (Aug) = Qixi, highlight all Summer Triangle for the reunion
    1:  [91262, 97649, 97278, 98036],                    // Feb: Weaver Girl + Cowherd introduced
    2:  [91262, 97649, 97278, 98036],                    // Mar: separated, Azure Dragon (no bright named star)
    3:  [91262, 97649, 97278, 98036],                    // Apr: Vega + Altair named explicitly
    4:  [91262, 97649, 97278, 98036],                    // May: Weaver Girl at loom
    5:  [91262, 97649, 97278, 98036],                    // Jun: Vega brilliant, Altair follows
    6:  [91262, 97649, 97278, 98036],                    // Jul: approaching reunion
    7:  [91262, 97649, 97278, 98036, 102098],            // Aug: QIXI — full Summer Triangle, reunion night!
    8:  [91262, 97649, 97278, 98036],                    // Sep: separating again, harvest moon
    9:  [91262, 97649, 97278, 98036],                    // Oct: Vega sets earlier, Altair follows
    10: [91262, 97649, 97278, 98036],                    // Nov: both low, Silver River between them
    11: [91262, 97649],                                  // Dec: barely visible, nearly lost in sun's glare
    12: [91262, 97649],                                  // Jan: hidden, but returning before dawn
  },
};

// Helper: get HIP IDs to highlight for a given culture + month
function getHighlightedStars(cultureId, monthNumber) {
  if (!STAR_HIGHLIGHTS[cultureId]) return [];
  return STAR_HIGHLIGHTS[cultureId][monthNumber] || [];
}

// Helper: build GeoJSON FeatureCollection for Celestial.add()
// from an array of HIP IDs
function buildHighlightGeoJSON(hipIds) {
  return {
    type: "FeatureCollection",
    features: hipIds
      .filter(hip => STAR_COORDS[hip]) // safety check
      .map(hip => ({
        type: "Feature",
        id: String(hip),
        properties: {
          name: STAR_COORDS[hip].name,
          mag: 1, // not used for rendering but required by library
          dim: 1
        },
        geometry: {
          type: "Point",
          coordinates: STAR_COORDS[hip].coords
        }
      }))
  };
}