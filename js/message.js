var message_EN =
  '<p><b>Many Wikipedia articles have no images</b> or only few. Some of them talk about <b>things that are out there</b>, ready to be photographed. <b>Find them all!</b></p><hr/>' +
  '<p><b>Instructions</b></p>' +
  '<p><ul><li>Use the top-left button to adjust the zoom or double click into the map. You can also click on a cluster near the location you want to explore.</li>' +
  '<li>Use the top-right button to filter pinpoints by category.</li>' +
  '<li>Use the bottom-right button to go to your current position.</li>' +
  '<li>Pass over a pinpoint to see its name. Make a click for more details and links.</li></ul>' +
  'Take pictures and upload them to Wikimedia Commons, then resolve the related warning (e.g. removing the template in its page or adding the image to Wikidata) and on the next run you will see the pinpoint disappear. Great job!' +
  '</p><hr/>' +
  '<p>For any trouble or suggestion write on <a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">this page</a>. This is an open source project! Let\'s code together in this <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github repository.</a></p>' +
  '<p><small>The tool updates the view once a day. Please be patient, it takes a while to load all the data.<small></p>'

var message_IT =
  '<p><b>Molte voci di Wikipedia non hanno immagini</b> o solo alcune. Alcune di esse parlano di <b>cose che si trovano là fuori</b>, pronte ad essere fotografate. <b>Trovale tutte!</b></p><hr/>' +
  '<p><b>Istruzioni</b></p>' +
  '<p><ul><li>Usa i pulsanti in alto a sinistra per regolare lo zoom o fai doppio click sulla mappa. Puoi anche cliccare su un cluster che si trova nei pressi della zona che vuoi esplorare.</li>' +
  '<li>Usa il pulsante in alto a destra per filtrare i segnaposto per categoria.</li>' +
  '<li>Usa il pulsante in basso a destra per andare alla tua posizione corrente.</li>' +
  '<li>Passa sopra un segnaposto per vederne il nome. Cliccaci sopra per avere maggiori dettagli e collegamenti.</li></ul>' +
  'Scatta fotografie e caricale su Wikimedia Commons, poi risolvi il relativo problema (ad esempio rimuovendo un template nella pagina di discussione o aggiungendo l\'immagine su Wikidata) e al prossimo aggiornamento vedrai il segnaposto scomparire. Ottimo lavoro!' +
  '</p><hr/>' +
  '<p>Per qualunque problema o suggerimento scrivi su <a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">questa pagina</a>. Questo è un progetto open source! Sviluppiamolo insieme su questo <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">repository Github.</a></p>' +
  '<p><small>Il programma aggiorna i dati una volta al giorno. Sii paziente, occorre un po\' di tempo per caricare tutti i dati.<small></p>'

var message_DE =
  '<p><b>Viele Wikipedia-Artikel haben keine oder nur wenige Bilder</b>. Einige von ihnen behandeln Sachen, die da draußen sind, bereit, fotografiert zu werden. <b>Finden Sie sie alle!</b></p><hr/>' +
  '<p><b>Anweisungen</b></p>' +
  '<p><ul><li>verwenden Sie die Taste oben links oder doppelklicken Sie auf die Karte, um den Zoom anzupassen. Sie können auch auf einem Cluster nahe der Stelle klicken, die Sie erkunden möchten.</li>' +
  '<li>verwenden Sie die Taste oben rechts, um die Objekte (Pfeiliconen) nach Kategorie zu  filtern.</li>' +
  '<li>Verwenden Sie die Taste unten rechts, um zu Ihrer aktuellen Position zu gehen.</li>' +
  '<li>Berühren Sie ein Objekt, um dessen Namen zu sehen. Klicken Sie darauf, um weitere Informationen und Links zu erhalten.</li></ul>' +
  'Machen Sie Fotos und laden Sie sie auf Wikimedia Commons hoch, dann beheben Sie die damit verbundene Warnung (z.B. löschen Sie die Vorlage in der Seite oder fügen Sie auf Wikidata das Bild hinzu).' +
  '</p><hr/>' +
  '<p>Für Probleme oder Anregungen schreiben Sie auf <a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">diese Seite</a>. Dies ist ein open-Source-Projekt! Programmieren wir zusammen in diesem <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github Repository!</a></p>' +
  '<p><small>Das Tool aktualisiert die Ansicht täglich. Bitte seien Sie geduldig: es dauert eine Weile, bis die Daten geladen sind.<small></p>'

var message_FR =
  '<p><b>De nombreux articles de Wikipédia n\'ont pas d\'image</b> ou seulement quelques-unes. Certains d\'entre eux ont pour sujet des <b>choses qui sont là dehors</b>, prêtes à être photographiées. <b>Trouvez-les toutes !</b></p><hr/>' +
  '<p><b>Instructions</b></p>' +
  '<p><ul><li>Utilisez le bouton dans le coin supérieur gauche ou double-cliquez sur la carte pour régler le zoom. Vous pouvez également cliquer sur un cluster près de l\'endroit que vous souhaitez explorer.</li>' +
  '<li>Utilisez le bouton dans le coin supérieur droit pour filtrer les épingles (icones pointues) par catégorie.</li>' +
  '<li>Utilisez le bouton dans le coin inférieur droit pour accéder à votre position actuelle.</li>' +
  '<li>Passez sur un "épingle" pour voir son nom. Faites un clic pour plus de détails et de liens.</li></ul>' +
  'Prenez des photos et téléchargez-les sur Wikimedia Commons, puis résolvez l\'alerte (par exemple enlevez le modèle dans sa page ou ajoutez l\'image à Wikidata) et lors de la prochaine exécution vous verrez l\'épingle disparaître. Super boulot !' +
  '</p><hr/>' +
  '<p>Pour tout problème ou suggestion écrivez sur <a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">cette page</a>. Il s\'agit d\'un projet open source ! Nous allons coder ensemble dans ce <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">référentiel Github.</a></p>' +
  '<p><small>L\'outil met à jour les données une fois par jour. Il faut un certain temps pour charger toutes les données, merci pour votre patience.<small></p>'

var message_JA =
  '<p><b>ウィキペディアで、画像が足りない文書が多いです。その画像、一緒に撮りましょう！</p><hr/>' +
  '<p><b>使い方</b></p>' +
  '<p><ul><li>左上のボタンでズーム調整。ダブルクリックやクラスターにクリックというズームのやり方もあります。</li>' +
  '<li>右上のボタンはカテゴリのフィルターです。</li>' +
  '<li>右下のボタンを押すと自分の現在地に飛べます。</li>' +
  '<li>ポイントをマウスホバーすると文書の名前が見えます。クリックしたら詳細が表示されます。</li></ul>' +
  '写真を撮って、Wikimedia Commonsにアップロードして、ウィキペディア文書から「画像依頼」のバナーを外したら、翌日はこのポイントが消えます。お疲れ様でした！' +
  '</p><hr/>' +
  '<p>質問があれば、<a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">プロジェクトページ</a>に連絡ください。オープンソースです！興味あれば<a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github</a>で</p>' +
  '<p><small>データ更新が毎日行います。ウェブページが表示されるまで少し時間掛かりますが、よろしくお願いします。<small></p>'
