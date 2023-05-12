import { useEffect, useState } from "react";
import "../CSS/Fragen.css";

const fragen = [
  { question: "Was ist die Hauptstadt von Australien?", answer: "Canberra" },
  {
    question:
      "Wie viele Lebensmittelgruppen gibt es gemäß der deutschen Ernährungspyramide?",
    answer: "Sechs",
  },
  {
    question: "Welches ist das kleinste Land der Welt?",
    answer: "Vatikanstadt",
  },
  {
    question: "Welches ist der höchste Berg der Welt?",
    answer: "Mount Everest",
  },
  { question: "Wie viele Kontinente gibt es?", answer: "Sieben" },
  { question: "Wie hoch ist der Eiffelturm?", answer: "324 Meter" },
  { question: "Wie viele Finger hat ein Mensch?", answer: "Zehn" },
  {
    question: "Wie heißt der größte Ozean der Welt?",
    answer: "Pazifischer Ozean",
  },
  {
    question: "Wie viele Tage hat ein Jahr?",
    answer: "Dreihundertfünfundsechzig",
  },
  { question: "Wie heißt der längste Fluss der Welt?", answer: "Nil" },
  {
    question: "Wie heißt der höchste Wasserfall der Welt?",
    answer: "Angel Falls",
  },
  { question: "Wie viele Staaten hat die USA?", answer: "Fünfzig" },
  { question: "Wie viele Planeten hat unser Sonnensystem?", answer: "Acht" },
  { question: "Wie viele Augen hat eine Biene?", answer: "Fünf" },
  { question: "Wie viele Monate hat ein Jahr?", answer: "Zwölf" },
  { question: "Wie viel Prozent der Erdoberfläche ist Land?", answer: "30%" },
  {
    question: "Wie viele Millionen Einwohner hat Deutschland?",
    answer: "82 Millionen",
  },
  { question: "Wie viele Zeitzonen hat die Erde?", answer: "24" },
  { question: "Welcher ist der größte Kontinent der Welt?", answer: "Asien" },
  { question: "Wie viele Stunden hat ein Tag?", answer: "24" },
  { question: "Wie viele Jahreszeiten gibt es?", answer: "Vier" },
  { question: "Wie viele Zeichen hat das griechische Alphabet?", answer: "24" },
  { question: "Wie viele Farben hat ein Regenbogen?", answer: "Sieben" },
  { question: "Wie viele Sterne hat die Flagge der USA?", answer: "Fünfzig" },
  {
    question: "Wie lautet die Nationalhymne der USA?",
    answer: "The Star-Spangled Banner",
  },
  { question: "Wie lautet die Hauptstadt von Deutschland?", answer: "Berlin" },
  {
    question: "Wie viele Länder gibt es auf der Erde?",
    answer: "Einhundertsiebenundneunzig",
  },
  { question: "Wie groß ist der Mount Everest?", answer: "8848 Meter" },
  {
    question: "Wie viele Zeilen hat ein Gedicht?",
    answer: "Es kann verschiedene Anzahlen haben",
  },
  {
    question: "Wie hoch ist die höchste Sandburg der Welt?",
    answer: "35,5 Meter",
  },
  { question: "Wie lautet die Hauptstadt von Brasilien?", answer: "Brasília" },
  {
    question: "Wie viele Zahlen hat ein Rubiks Cube?",
    answer: "43 252 003 274 489 856 000",
  },
  { question: "Wie viele Stunden hat eine Woche?", answer: "168" },
  { question: "Wie viele Länder gibt es in Europa?", answer: "Fünfzig" },
  { question: "Wie viele Musiknoten gibt es?", answer: "Sieben" },
  { question: "Wie viele Tage hat ein Monat?", answer: "Es kann variieren" },
  {
    question: "Wie viele Elemente gibt es im Periodensystem?",
    answer: "Hunderteinundneunzig",
  },
  {
    question: "Wie viele Buchstaben hat das deutsche Alphabet?",
    answer: "26",
  },
  {
    question: "Wie viele Teile hat ein Lego-Set?",
    answer: "Es kann variieren",
  },
  { question: "Wie viele Tasten hat ein Klavier?", answer: "88" },
  { question: "Wie viel kostet ein Laib Brot?", answer: "Es kann variieren" },
  {
    question: "Wie viele Kapitel hat die Bibel?",
    answer: "Einhundertvierundsechzig",
  },
  { question: "Wie viele Wochen hat ein Jahr?", answer: "Zweiundfünfzig" },
  { question: "Wie viele Wörter hat ein Tweet?", answer: "Höchstens 280" },
  { question: "Wie viele Tage hat eine Woche?", answer: "Sieben" },
  {
    question: "Wie viele Tage hat ein Kalenderjahr?",
    answer: "Dreihundertfünfundsechzig",
  },
  {
    question: "Wie viele Länder gibt es auf der Erde?",
    answer: "Einhundertsiebenundneunzig",
  },
  { question: "Wie viele Seiten hat ein Würfel?", answer: "Sechs" },
  {
    question: "Welches ist der längste Tunnel der Welt?",
    answer: "Gotthard-Basistunnel",
  },
  { question: "Wie viele Knochen hat der menschliche Körper?", answer: "206" },
  {
    question: "Wie heißt das längste deutsche Wort?",
    answer: "Donaudampfschifffahrtsgesellschaftskapitän",
  },
  { question: "Wie viele Bundesländer hat Deutschland?", answer: "16" },
  { question: "Wie heißt der größte Vulkan der Welt?", answer: "Mauna Loa" },
  {
    question: "Wie viele Sprachen gibt es auf der Welt?",
    answer: "Etwa 7.000",
  },
  {
    question: "Wie viele Tiere gibt es auf der Erde?",
    answer: "Schätzungen zufolge mehr als 8 Millionen Arten",
  },
  {
    question: "Wie heißt das längste Schachspiel in der Geschichte?",
    answer: "Ivan Nikolic gegen Goran Arsovic, 269 Züge",
  },
  {
    question: "Wie viele Atome gibt es in einem Mol?",
    answer: "6,022 x 10^23",
  },
  { question: "Was ist die Hauptstadt von Frankreich?", answer: "Paris" },
  { question: "Wie viele Wochenenden hat ein Jahr?", answer: "52" },
  {
    question: "In welchem Jahr fand die Wiedervereinigung Deutschlands statt?",
    answer: "1990",
  },
  {
    question: "Was ist der größte Planet unseres Sonnensystems?",
    answer: "Jupiter",
  },
  {
    question:
      "Wie viele Tage dauert die Schwangerschaft eines Menschen im Durchschnitt?",
    answer: "280 Tage",
  },
  { question: "Wie viele Meter sind ein Kilometer?", answer: "1000" },
  { question: "In welchem Jahr begann der Zweite Weltkrieg?", answer: "1939" },
  { question: "Welches Land hat die größte Bevölkerung?", answer: "China" },
  { question: "Wie viele Zähne hat ein erwachsener Mensch?", answer: "32" },
  { question: "Welches Tier ist das größte auf der Erde?", answer: "Blauwal" },
  {
    question: "Welcher Planet ist der dritte von der Sonne entfernt?",
    answer: "Erde",
  },
  { question: "Wie viele Tage dauert eine Woche?", answer: "7" },
  { question: "In welchem Jahr endete der Erste Weltkrieg?", answer: "1918" },
  { question: "Wie viele Jahre hat ein Jahrzehnt?", answer: "10" },
  { question: "Wie viele Ozeane gibt es auf der Erde?", answer: "5" },
  { question: "In welchem Jahr begann das neue Jahrtausend?", answer: "2000" },
  { question: "Wie viele Beine hat ein Stuhl normalerweise?", answer: "4" },
  { question: "Wie viele Minuten hat eine Stunde?", answer: "60" },
  {
    question: "Wie heißt das kleinste Knochen im menschlichen Körper?",
    answer: "Stapes oder Steigbügel",
  },
  { question: "Wie nennt man die Hauptstadt von Österreich?", answer: "Wien" },
  {
    question: "Welches Tier ist das schnellste auf der Erde?",
    answer: "Gepard",
  },
  {
    question: "In welchem Jahr wurde die Europäische Union gegründet?",
    answer: "1993",
  },
  {
    question: "Wie viele Zähne hat ein Hai?",
    answer: "Es variiert, aber bis zu 3000",
  },
  { question: "Was ist die größte Insel der Welt?", answer: "Grönland" },
  {
    question: "Welches Land hat die meisten UNESCO-Welterbestätten?",
    answer: "Italien",
  },
  {
    question: "In welchem Land befindet sich der Amazonas?",
    answer: "Brasilien",
  },
  {
    question:
      "Wie viele Schachfiguren hat jeder Spieler am Anfang einer Partie?",
    answer: "16",
  },
  { question: "Welches Land hat die längste Küstenlinie?", answer: "Kanada" },
  { question: "Wie heißt das älteste bekannte Brettspiel?", answer: "Senet" },
  {
    question: "In welchem Land befindet sich die Stadt Timbuktu?",
    answer: "Mali",
  },
  {
    question: "Wie viele Hauptschlagadern hat der menschliche Körper?",
    answer: "2",
  },
  { question: "Wie heißt die Hauptstadt von Spanien?", answer: "Madrid" },
  { question: "Wie viele Ringe hat der Audi-Logo?", answer: "4" },
  { question: "Wie viele Weltwunder der Antike gibt es?", answer: "7" },
  { question: "Wie heißt die Hauptstadt von Schweden?", answer: "Stockholm" },
  { question: "Wie viele Zylinder hat ein V8-Motor?", answer: "8" },
  {
    question: "In welchem Jahr wurde das erste iPhone veröffentlicht?",
    answer: "2007",
  },
  { question: "Welches Land hat die meisten Seen?", answer: "Kanada" },
  {
    question: "In welchem Jahr wurde die erste E-Mail versendet?",
    answer: "1971",
  },
  { question: "Welche Farbe hat das Blut eines Krebses?", answer: "Blau" },
  {
    question: "Wie heißt der größte Flughafen der Welt?",
    answer: "Flughafen Peking-Daxing",
  },
  { question: "Wie viele Gliedmaßen hat ein Oktopus?", answer: "8" },
  {
    question:
      "In welchem Jahr wurde das erste Harry-Potter-Buch veröffentlicht?",
    answer: "1997",
  },
  { question: "Wie heißt die größte Wüste der Welt?", answer: "Antarktis" },
  {
    question: "Wie heißt das höchste Gebäude der Welt?",
    answer: "Burj Khalifa",
  },
  {
    question: "Welches ist das größte Land der Welt nach Landfläche?",
    answer: "Russland",
  },
  { question: "Wie heißt die Hauptstadt von Italien?", answer: "Rom" },
  { question: "Wie heißt der größte Fluss in Europa?", answer: "Wolga" },
  { question: "Wie heißt der größte See der Welt?", answer: "Kaspisches Meer" },
  {
    question: "Wie viele Beine hat ein Tausendfüßler?",
    answer: "Es variiert, aber nicht 1000",
  },
  { question: "Wie viele Monde hat der Planet Mars?", answer: "2" },
  {
    question: "In welchem Land wurde der Kaffee entdeckt?",
    answer: "Äthiopien",
  },
  { question: "Wie viele Ecken hat ein Pentagon?", answer: "5" },
  {
    question: "In welchem Land befindet sich die Freiheitsstatue?",
    answer: "USA",
  },
  { question: "Wie viele Nullen hat eine Milliarde?", answer: "9" },
  {
    question: "Welches ist das am wenigsten dichte Element?",
    answer: "Wasserstoff",
  },
  { question: "Wie heißt der größte Mond im Sonnensystem?", answer: "Ganymed" },
  { question: "Wie viele Seiten hat ein Dreieck?", answer: "3" },
  { question: "Wie heißt die Hauptstadt von Kanada?", answer: "Ottawa" },
  { question: "Wie heißt die Hauptstadt von Japan?", answer: "Tokio" },
  {
    question: "In welchem Jahr wurde der erste Mensch auf dem Mond gelandet?",
    answer: "1969",
  },
  {
    question: "Wie heißt die größte Schlange der Welt?",
    answer: "Grüne Anakonda",
  },
  {
    question: "Wie viele Länder gehören zur Europäischen Union?",
    answer: "27",
  },
  { question: "Wie viele Seiten hat ein Heptagon?", answer: "7" },
  { question: "Wie heißt die Hauptstadt von Norwegen?", answer: "Oslo" },
  { question: "Wie viele Kammern hat das menschliche Herz?", answer: "4" },
  {
    question: "Wie heißt der größte Salzsee der Welt?",
    answer: "Salar de Uyuni",
  },
  {
    question: "In welchem Jahr wurde Albert Einstein geboren?",
    answer: "1879",
  },
  { question: "Wie heißt die Hauptstadt von Island?", answer: "Reykjavik" },
  { question: "Wie heißt die Hauptstadt von Südkorea?", answer: "Seoul" },
  {
    question: "Wie heißt der größte Kaktus der Welt?",
    answer: "Saguaro-Kaktus",
  },
  { question: "Wie heißt die Hauptstadt von Mexiko?", answer: "Mexiko-Stadt" },
  { question: "Wie heißt die Hauptstadt von Finnland?", answer: "Helsinki" },
  { question: "Wie viele Beine hat eine Spinne?", answer: "8" },
  { question: "Wie heißt die Hauptstadt von Schweden?", answer: "Stockholm" },
  { question: "In welchem Jahr fiel die Berliner Mauer?", answer: "1989" },
  { question: "Wie viele Millimeter sind ein Zentimeter?", answer: "10" },
  { question: "Wie heißt die Hauptstadt von Indien?", answer: "Neu-Delhi" },
  { question: "Wie heißt die Hauptstadt von Russland?", answer: "Moskau" },
  { question: "Wie heißt die Hauptstadt von Spanien?", answer: "Madrid" },
  { question: "Wie heißt die Hauptstadt von Italien?", answer: "Rom" },
  { question: "Wie heißt die Hauptstadt von Dänemark?", answer: "Kopenhagen" },
  { question: "Wie heißt die Hauptstadt von Polen?", answer: "Warschau" },
  { question: "Wie heißt die Hauptstadt von Belgien?", answer: "Brüssel" },
  { question: "Wie heißt die Hauptstadt von Griechenland?", answer: "Athen" },
  { question: "Wie heißt die Hauptstadt von Irland?", answer: "Dublin" },
  { question: "Wie heißt die Hauptstadt von Portugal?", answer: "Lissabon" },
  { question: "Wie heißt die Hauptstadt von Ungarn?", answer: "Budapest" },
  { question: "Wie heißt die Hauptstadt von Tschechien?", answer: "Prag" },
  { question: "Wie heißt die Hauptstadt von Slowenien?", answer: "Ljubljana" },
  { question: "Wie heißt die Hauptstadt von Kroatien?", answer: "Zagreb" },
  { question: "Wie heißt die Hauptstadt von Slowakei?", answer: "Bratislava" },
  { question: "Wie heißt die Hauptstadt von Rumänien?", answer: "Bukarest" },
  { question: "Wie heißt die Hauptstadt von Bulgarien?", answer: "Sofia" },
  { question: "Wie heißt die Hauptstadt von Albanien?", answer: "Tirana" },
  { question: "Wie heißt die Hauptstadt von Mazedonien?", answer: "Skopje" },
  { question: "Wie heißt die Hauptstadt von Lettland?", answer: "Riga" },
  { question: "Wie heißt die Hauptstadt von Estland?", answer: "Tallinn" },
  { question: "Wie heißt die Hauptstadt von Litauen?", answer: "Vilnius" },
  { question: "Wie heißt die Hauptstadt von Weißrussland?", answer: "Minsk" },
  { question: "Wie heißt die Hauptstadt von Moldawien?", answer: "Chișinău" },
  { question: "Wie heißt die Hauptstadt von Georgien?", answer: "Tiflis" },
  { question: "Wie heißt die Hauptstadt von Armenien?", answer: "Jerewan" },
  { question: "Wie heißt die Hauptstadt von Aserbaidschan?", answer: "Baku" },
  { question: "Wie heißt die Hauptstadt von Kasachstan?", answer: "Nursultan" },

  {
    question: "In welchem Jahr wurde die Berliner Mauer erbaut?",
    answer: "1961",
  },
  { question: "Wie heißt die Hauptstadt von Portugal?", answer: "Lissabon" },
  {
    question: "Wie viele Wimpern hat ein menschliches Auge im Durchschnitt?",
    answer: "100 bis 150 am oberen Lid und 50 bis 75 am unteren Lid",
  },
  { question: "Wie heißt die Hauptstadt von Dänemark?", answer: "Kopenhagen" },
  { question: "In welchem Jahr wurde die Titanic gebaut?", answer: "1911" },
  {
    question: "Wie viele Länder gehören zur United Nations?",
    answer: "193",
  },
  { question: "Wie heißt die Hauptstadt von Finnland?", answer: "Helsinki" },
  { question: "Wie heißt die Hauptstadt von Irland?", answer: "Dublin" },
  {
    question:
      "Welches ist das größte Tier, das jemals auf der Erde gelebt hat?",
    answer: "Blauwal",
  },
  {
    question: "Wie viele Zellen hat der menschliche Körper ungefähr?",
    answer: "37,2 Billionen",
  },
  {
    question: "In welchem Jahr wurde der Euro als Währung eingeführt?",
    answer: "1999 (elektronisch), 2002 (Bargeld)",
  },
  {
    question: "Wie heißt der am weitesten entfernte bekannte Himmelskörper?",
    answer: "GN-z11, eine Galaxie",
  },
  {
    question: "In welchem Land wurde der Fußball erfunden?",
    answer: "England",
  },
  {
    question: "Welches ist das älteste Land der Welt?",
    answer:
      "Es ist umstritten, aber San Marino, Äthiopien und China gelten als sehr alte Staaten",
  },
  { question: "Wie heißt die Hauptstadt von Polen?", answer: "Warschau" },
  { question: "Wie viele Monde hat der Planet Jupiter?", answer: "79" },
  {
    question: "In welchem Jahr wurde die erste Webseite veröffentlicht?",
    answer: "1991",
  },
  {
    question: "Welches Tier hat den längsten Schwanz?",
    answer: "Giraffentierlaus (Giraffe Weevil)",
  },
  {
    question: "Welches Land hat die größte Fläche?",
    answer: "Russland",
  },
  {
    question: "Wie heißt der größte und tiefste Ozean der Erde?",
    answer: "Pazifischer Ozean",
  },
  { question: "Wie heißt die Hauptstadt von Russland?", answer: "Moskau" },

  {
    question:
      "Aus wie vielen Knochen besteht das menschliche Skelett im Durchschnitt?",
    answer: "206",
  },

  {
    question: "Was ist der größte Muskel im menschlichen Körper?",
    answer: "Musculus gluteus maximus",
  },

  {
    question: "Wie viele Chromosomen hat der Mensch?",
    answer: "46",
  },

  {
    question: "Was ist das größte Organ des Menschen?",
    answer: "Haut",
  },

  {
    question:
      "Wie viele Herzschläge hat ein Mensch durchschnittlich pro Minute?",
    answer: "60-100",
  },

  {
    question: "Wie viel Blut hat ein erwachsener Mensch im Körper?",
    answer: "4,5 bis 5,5 Liter",
  },

  {
    question: "Welches Organ produziert Insulin?",
    answer: "Bauchspeicheldrüse",
  },

  {
    question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
    answer: "32",
  },

  {
    question: "Wie viele Lungenflügel hat der Mensch?",
    answer: "2",
  },

  {
    question:
      "Welcher Teil des menschlichen Gehirns ist für das Gedächtnis verantwortlich?",
    answer: "Hippocampus",
  },

  {
    question: "Welches Organ filtert das Blut?",
    answer: "Niere",
  },

  {
    question: "Wie viele Zehen hat ein Mensch?",
    answer: "10",
  },

  {
    question: "Wodurch wird der menschliche Körper mit Sauerstoff versorgt?",
    answer: "Atmung",
  },

  {
    question: "Wie viele Rippen hat der Mensch?",
    answer: "24",
  },

  {
    question: "Was ist der kleinste Knochen im menschlichen Körper?",
    answer: "Stirrup (Stapes) im Ohr",
  },

  {
    question: "Welches Organ wandelt Lichtreize in elektrische Signale um?",
    answer: "Auge",
  },

  {
    question: "Wie nennt man die Fortpflanzungszellen des Menschen?",
    answer: "Gameten",
  },

  {
    question: "Wie viele Finger hat ein Mensch?",
    answer: "10",
  },

  {
    question:
      "Wie lange dauert eine menschliche Schwangerschaft durchschnittlich?",
    answer: "40 Wochen",
  },

  {
    question: "Was ist der menschliche Blinddarm?",
    answer: "Wurmfortsatz",
  },

  {
    question: "Woraus besteht das menschliche Haar hauptsächlich?",
    answer: "Keratin",
  },

  {
    question: "Welches Organ ist für die Blutgerinnung verantwortlich?",
    answer: "Leber",
  },

  {
    question: "Welcher Körperteil ist bei erwachsenen Menschen am schnellsten?",
    answer: "Augenmuskeln",
  },

  {
    question:
      "Wie nennt man die Blutkörperchen, die Sauerstoff transportieren?",
    answer: "Rote Blutkörperchen (Erythrozyten)",
  },

  {
    question:
      "Welche Zellen sind für die menschliche Immunabwehr verantwortlich?",
    answer: "Weiße Blutkörperchen (Leukozyten)",
  },

  {
    question: "Was ist der häufigste Bluttyp?",
    answer: "A+",
  },

  {
    question:
      "Wie viele Geschmacksrichtungen kann die menschliche Zunge unterscheiden?",
    answer: "5",
  },

  {
    question: "Welche Blutgefäße führen sauerstoffreiches Blut zum Herzen?",
    answer: "Lungenvenen",
  },

  {
    question:
      "Was ist das stärkste natürliche Material im menschlichen Körper?",
    answer: "Zahnschmelz",
  },

  {
    question:
      "Welches Hormon ist für die Stressreaktion im Körper verantwortlich?",
    answer: "Cortisol",
  },

  {
    question: "Woraus besteht der menschliche Nagel?",
    answer: "Keratin",
  },

  {
    question: "Wie nennt man das größte Blutgefäß des menschlichen Körpers?",
    answer: "Aorta",
  },

  {
    question: "Was ist das kleinste Blutgefäß im menschlichen Körper?",
    answer: "Kapillare",
  },

  {
    question: "Was ist das menschliche Ohr für ein Sinnesorgan?",
    answer: "Gehör- und Gleichgewichtssinn",
  },

  {
    question: "Wie viele Hauptmuskelgruppen gibt es im menschlichen Körper?",
    answer: "11",
  },

  {
    question:
      "Wie lange dauert es für Nahrung, um durch den menschlichen Verdauungstrakt zu passieren?",
    answer: "24 bis 72 Stunden",
  },

  {
    question:
      "Welcher Teil des Gehirns ist für die Koordination von Bewegungen zuständig?",
    answer: "Kleinhirn",
  },

  {
    question:
      "Welches Hormon spielt eine Schlüsselrolle bei der Regulierung des Blutzuckerspiegels?",
    answer: "Insulin",
  },

  {
    question: "Wodurch wird die menschliche Körpertemperatur reguliert?",
    answer: "Hypothalamus",
  },

  {
    question:
      "Welcher Bereich des menschlichen Gehirns ist für die Sprachproduktion verantwortlich?",
    answer: "Broca-Areal",
  },

  {
    question: "Wie viele Wirbel hat die menschliche Wirbelsäule?",
    answer: "33",
  },

  {
    question: "Wer hat einen IQ von unter 50 und hat einen Mittelscheitel?",
    answer: "Tim Hauslkramper",
  },

  {
    question: "Was ist das häufigste Protein im menschlichen Körper?",
    answer: "Kollagen",
  },

  {
    question:
      "Welche Art von Zellen bilden die Basis für die menschliche Haut?",
    answer: "Epithelzellen",
  },

  {
    question:
      "Was ist die Grundeinheit der Länge im internationalen Einheitensystem?",
    answer: "Meter",
  },

  {
    question:
      "Was ist die Formel zur Berechnung des Flächeninhalts eines Rechtecks?",
    answer: "Fläche = Länge × Breite",
  },

  {
    question:
      "Welches Naturgesetz beschreibt die Anziehungskraft zwischen zwei Massen?",
    answer: "Newtons Gravitationsgesetz",
  },

  {
    question:
      "Was ist der Hauptunterschied zwischen Geschwindigkeit und Beschleunigung?",
    answer:
      "Geschwindigkeit ist eine Größe mit Betrag und Richtung, während Beschleunigung die Änderungsrate der Geschwindigkeit ist.",
  },

  {
    question: "Wie lautet die Formel zur Berechnung der kinetischen Energie?",
    answer: "Kinetische Energie = (1/2) × Masse × Geschwindigkeit²",
  },

  {
    question:
      "Welches physikalische Gesetz beschreibt die Beziehung zwischen Druck, Volumen und Temperatur eines idealen Gases?",
    answer: "Allgemeines Gasgesetz",
  },

  {
    question:
      "Was ist der Name der Gleichung, die die Energie-Masse-Beziehung beschreibt?",
    answer: "Einsteins E=mc²",
  },

  {
    question: "Was ist der Pythagoräische Lehrsatz?",
    answer:
      "In einem rechtwinkligen Dreieck ist die Summe der Quadrate der Katheten gleich dem Quadrat der Hypotenuse.",
  },

  {
    question:
      "Was ist die Einheit der Leistung im internationalen Einheitensystem?",
    answer: "Watt",
  },

  {
    question: "Wie viele Grad sind in einem Vollkreis?",
    answer: "360 Grad",
  },

  {
    question:
      "Was ist die Wahrscheinlichkeit, eine 6 mit einem fairen Würfel zu würfeln?",
    answer: "1/6",
  },

  {
    question: "Welcher Zweig der Physik befasst sich mit Wärme und Temperatur?",
    answer: "Thermodynamik",
  },

  {
    question: "Wie lautet die Formel zur Berechnung des Umfangs eines Kreises?",
    answer: "Umfang = 2 × π × Radius",
  },

  {
    question: "Was ist das Trägheitsprinzip in der Physik?",
    answer:
      "Ein Körper bleibt in Ruhe oder in gleichförmiger Bewegung, solange keine äußere Kraft auf ihn einwirkt.",
  },

  {
    question:
      "Wie heißt der mathematische Satz, der besagt, dass die Summe der Winkel eines Dreiecks immer 180 Grad beträgt?",
    answer: "Winkelsumme im Dreieck",
  },

  {
    question: "Was ist die grundlegende Recheneinheit eines Computers?",
    answer: "Zentraleinheit (Central Processing Unit, CPU)",
  },

  {
    question: "Was bedeutet die Abkürzung 'RAM' in der Computertechnik?",
    answer: "Random Access Memory",
  },

  {
    question: "In welchem Zahlensystem arbeiten Computer hauptsächlich?",
    answer: "Binärsystem",
  },

  {
    question: "Was ist ein Algorithmus?",
    answer:
      "Eine endliche, wohldefinierte Folge von Anweisungen zur Lösung eines Problems oder zur Durchführung einer Aufgabe.",
  },

  {
    question:
      "Wie nennt man die Wissenschaft, die sich mit der Entwicklung von Methoden und Algorithmen zur Lösung mathematischer Probleme befasst?",
    answer: "Informatik",
  },

  {
    question:
      "Was ist der Unterschied zwischen einem Compiler und einem Interpreter?",
    answer:
      "Ein Compiler übersetzt den gesamten Quellcode in Maschinensprache, bevor das Programm ausgeführt wird, während ein Interpreter den Quellcode Zeile für Zeile während der Ausführung übersetzt.",
  },

  {
    question: "Was ist ein Betriebssystem?",
    answer:
      "Ein Softwareprogramm, das die Hardware eines Computers verwaltet und Anwendungssoftware ausführt.",
  },

  {
    question: "Was bedeutet die Abkürzung 'HTML'?",
    answer: "Hypertext Markup Language",
  },

  {
    question: "Was ist ein Netzwerkprotokoll?",
    answer:
      "Ein Satz von Regeln und Konventionen, die die Kommunikation zwischen Computern in einem Netzwerk ermöglichen.",
  },

  {
    question:
      "Was ist ein Beispiel für ein weit verbreitetes Netzwerkprotokoll?",
    answer: "Internet Protocol (IP)",
  },

  {
    question: "Was ist ein Byte und wie viele Bits enthält es?",
    answer:
      "Ein Byte ist eine Einheit der digitalen Information und besteht aus 8 Bits.",
  },

  {
    question:
      "Welche Programmiersprache wurde von James Gosling bei Sun Microsystems entwickelt?",
    answer: "Java",
  },

  {
    question: "Was ist ein Datenbanksystem?",
    answer:
      "Ein System zur Speicherung, Verwaltung und Abruf von Daten in einer strukturierten und organisierten Weise.",
  },

  {
    question:
      "Wie heißt der Prozess, bei dem eine höhere Programmiersprache in Maschinensprache übersetzt wird?",
    answer: "Kompilierung",
  },

  {
    question: "Was ist eine Variable in der Programmierung?",
    answer:
      "Ein Speicherort, der einen Wert enthält und in einem Programm verwendet wird.",
  },

  {
    question:
      "Welcher deutsche Kaiser wurde im Jahr 800 von Papst Leo III. zum Kaiser gekrönt?",
    answer: "Karl der Große",
  },

  {
    question: "In welchem Jahr fiel die Berliner Mauer?",
    answer: "1989",
  },

  {
    question: "Wer war der erste Präsident der Vereinigten Staaten?",
    answer: "George Washington",
  },

  {
    question:
      "Welches berühmte Ereignis fand am 14. Juli 1789 in Frankreich statt?",
    answer: "Sturm auf die Bastille",
  },

  {
    question:
      "Wer war der Anführer des nationalsozialistischen Deutschlands während des Zweiten Weltkriegs?",
    answer: "Adolf Hitler",
  },

  {
    question: "Wann begann der Erste Weltkrieg?",
    answer: "1914",
  },

  {
    question: "Wann endete der Erste Weltkrieg?",
    answer: "1918",
  },

  {
    question: "Wann begann der Zweite Weltkrieg?",
    answer: "1939",
  },

  {
    question: "Wann endete der Zweite Weltkrieg?",
    answer: "1945",
  },

  {
    question:
      "Welche berühmte Person aus der Geschichte wird als Entdecker Amerikas betrachtet?",
    answer: "Christoph Kolumbus",
  },

  {
    question: "In welchem Jahr wurde die Magna Carta unterzeichnet?",
    answer: "1215",
  },

  {
    question: "In welchem Jahr wurde die Französische Revolution eingeleitet?",
    answer: "1789",
  },

  {
    question: "Wer war der erste römische Kaiser?",
    answer: "Augustus",
  },

  {
    question: "Welches Ereignis markiert das Ende des weströmischen Reiches?",
    answer: "Der Fall von Rom im Jahr 476 n.Chr.",
  },

  {
    question: "In welchem Jahr wurde das britische Schiff Titanic versenkt?",
    answer: "1912",
  },

  {
    question: "Wer war der Gründer des mongolischen Reiches?",
    answer: "Dschingis Khan",
  },

  {
    question: "Wann fand die amerikanische Unabhängigkeitserklärung statt?",
    answer: "4. Juli 1776",
  },

  {
    question: "Wer ist der Autor der Kommunistischen Manifests?",
    answer: "Karl Marx und Friedrich Engels",
  },

  {
    question:
      "Was war das berühmte Schlacht, in der Napoleon Bonaparte endgültig besiegt wurde?",
    answer: "Schlacht von Waterloo",
  },

  {
    question: "Wann wurden die Vereinten Nationen (UN) gegründet?",
    answer: "1945",
  },
];

const Fragen = (props) => {
  
  const [click, setClick] = useState("");
  const [ranNum, setRanNum] = useState(0);
  const [nextFrage, setNextFrage] = useState(false);

  const [checkQ, setCheckQ] = useState([-1]);

  useEffect(() => { 
    let qIndex = -1;
    while (checkQ.includes(qIndex)) {
      const ranNumGen = Math.floor(Math.random() * fragen.length);
      qIndex = ranNumGen;
    }
    setCheckQ([...checkQ, qIndex])
    setRanNum(qIndex);
    changePlayer();
    
  }, [nextFrage]);

  const changePlayer = () =>{
     const playerCount = document.querySelectorAll('.player').length
     console.log(playerCount)
     if (props.currentPlayer < playerCount - 1){
          props.setCurrentPlayer(prev => ++prev)
     } else {
          props.setCurrentPlayer(0)
     }
}


  const clickHandler = () => {
    setClick(fragen[ranNum].answer);
  };

  const nextQuestionHandler = () => {
    setNextFrage((prev) => !prev);
    setClick("");
  };

  return (
    <>
      <div className="qWrapper">
        <h2>{fragen[ranNum].question}</h2>
        <h3 className="qAnswer">{click === "" ? "Answer Hidden" : click}</h3>
        <div>
          <button onClick={clickHandler}>Show Answer</button>
          <button onClick={nextQuestionHandler}> Next Question</button>
        </div>
      </div>
    </>
  );
};

export default Fragen;
