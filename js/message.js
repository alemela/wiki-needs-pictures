var talk_page = "https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures"

var message_EN =
  '<p><b>Many Wikipedia articles have no images</b> or only few. Some of them talk about <b>things that are out there</b>, ready to be photographed. <b>Find them all!</b></p><hr/>' +
  '<p><b>Instructions</b></p>' +
  '<p><ul><li>Use the top-left button to adjust the zoom or double click into the map. You can also click on a cluster near the location you want to explore.</li>' +
  '<li>Use the top-right button to filter pinpoints by category.</li>' +
  '<li>Use the bottom-right button to go to your current position.</li>' +
  '<li>Pass over a pinpoint to see its name. Make a click for more details and links.</li></ul>' +
  'Take pictures and upload them to Wikimedia Commons, then resolve the related warning (e.g. removing the template in its page or adding the image to Wikidata) and on the next run you will see the pinpoint disappear. Great job!' +
  '</p><hr/>' +
  '<p>For any trouble or suggestion write on <a href="' + talk_page + '" target="_blank">this page</a>. This is an open source project! Let\'s code together in this <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github repository.</a></p>' +
  '<p><small>The tool updates the view once a day. Please be patient, it takes a while to load all the data.<small></p>'

var message_IT =
  '<p><b>Molte voci di Wikipedia non hanno immagini</b> o solo alcune. Alcune di esse parlano di <b>cose che si trovano l&agrave; fuori</b>, pronte ad essere fotografate. <b>Trovale tutte!</b></p><hr/>' +
  '<p><b>Istruzioni</b></p>' +
  '<p><ul><li>Usa i pulsanti in alto a sinistra per regolare lo zoom o fai doppio click sulla mappa. Puoi anche cliccare su un cluster che si trova nei pressi della zona che vuoi esplorare.</li>' +
  '<li>Usa il pulsante in alto a destra per filtrare i segnaposto per categoria.</li>' +
  '<li>Usa il pulsante in basso a destra per andare alla tua posizione corrente.</li>' +
  '<li>Passa sopra un segnaposto per vederne il nome. Cliccaci sopra per avere maggiori dettagli e collegamenti.</li></ul>' +
  'Scatta fotografie e caricale su Wikimedia Commons, poi risolvi il relativo problema (ad esempio rimuovendo un template nella pagina di discussione o aggiungendo l\'immagine su Wikidata) e al prossimo aggiornamento vedrai il segnaposto scomparire. Ottimo lavoro!' +
  '</p><hr/>' +
  '<p>Per qualunque problema o suggerimento scrivi su <a href="' + talk_page + '" target="_blank">questa pagina</a>. Questo &egrave; un progetto open source! Sviluppiamolo insieme su questo <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">repository Github.</a></p>' +
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
  '<p>Für Probleme oder Anregungen schreiben Sie auf <a href="' + talk_page + '" target="_blank">diese Seite</a>. Dies ist ein open-Source-Projekt! Programmieren wir zusammen in diesem <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github Repository!</a></p>' +
  '<p><small>Das Tool aktualisiert die Ansicht täglich. Bitte seien Sie geduldig: es dauert eine Weile, bis die Daten geladen sind.<small></p>'

var message_FR =
  '<p><b>De nombreux articles de Wikipedia n\'ont aucune image</b> ou seulement quelques-unes. Certains d\'entre eux parlent de <b>choses qui sont l&agrave; dehors</b>, pr&ecirc;tes &agrave; &ecirc;tre photographi&eacute;es. <b>Trouvez-les toutes !</b></p><hr/>' +
  '<p><b>Instructions</b></p>' +
  '<p><ul><li>Utilisez le bouton dans le coin sup&eacute;rieur gauche ou double-cliquez sur la carte pour r&eacute;gler le zoom. Vous pouvez &eacute;galement cliquer sur un cluster pr&egrave;s de l\'endroit que vous souhaitez explorer.</li>' +
  '<li>Utilisez le bouton dans le coin sup&eacute;rieur droit pour filtrer les &eacute;pingles (ic&ocirc;nes pointues) par cat&eacute;gorie.</li>' +
  '<li>Utilisez le bouton dans le coin inf&eacute;rieur droit pour acc&eacute;der &agrave; votre position actuelle.</li>' +
  '<li>Passez sur un "&eacute;pingle" pour voir son nom. Faites un clic pour plus de d&eacute;tails et de liens.</li></ul>' +
  'Prenez des photos et t&eacute;l&eacute;chargez-les sur Wikimedia Commons, puis r&eacute;soudrez l\'alerte (par exemple enlevez le mod&egrave;le dans sa page ou ajoutez l\'image &agrave; Wikidata) et lors de la prochaine ex&eacute;cution vous verrez l\'&eacute;pingle dispara&icirc;tre. Super boulot !' +
  '</p><hr/>' +
  '<p>Pour tout probl&egrave;me ou suggestion &eacute;crivez sur <a href="' + talk_page + '" target="_blank">cette page</a>. Il s\'agit d\'un projet open source ! Nous allons le coder ensemble dans ce <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">r&eacute;f&eacute;rentiel Github.</a></p>' +
  '<p><small>L\'outil met &agrave; jour l\'Interface une fois par jour. S\'il vous pla&icirc;t soyez patient, il faut un certain temps pour charger toutes les donn&eacute;es.<small></p>'

var message_ES =
  '<p><b>Muchos art&iacute;culos de Wikipedia tienen pocas im&aacute;genes o ninguna</b>. Algunos de ellos hablan de <b>cosas que est&aacute;n ah&iacute;</b>, listas para ser fotografiadas. <b>¡Encontradlos todos!</b></p><hr/>' +
  '<p><b>Instrucciones</b></p>' +
  '<p><ul><li>Utilice el bot&oacute;n de arriba a la izquierda o haga doble clic en el mapa para ajustar el zoom. Tambi&eacute;n puede hacer clic en un clúster de cerca de la ubicaci&oacute;n que desee explorar.</li>' +
  '<li>Utilice el bot&oacute;n superior derecho para filtrar lugares indicando la categor&iacute;a.</li>' +
  '<li>Utilice el bot&oacute;n de abajo a la derecha para ir a su posici&oacute;n actual.</li>' +
  '<li>Pase por un lugar para ver su nombre. Haga un clic para ver m&aacute;s detalles y enlaces.</li></ul>' +
  'Haga fotos y súbalas a Wikimedia Commons, despu&eacute;s haga caso de la advertencia relacionada (por ejemplo quite la plantilla en su p&aacute;gina o añada la imagen a Wikidata) y la pr&oacute;xima vez ver&aacute; desaparecer los lugares/las im&aacute;genes. ¡Buen trabajo!' +
  '</p><hr/>' +
  '<p>Para cualquier problema o sugerencia, escriba a <a href="' + talk_page + '" target="_blank">esta p&aacute;gina</a>. Este es un proyecto en c&oacute;digo abierto ¡Codificamos juntos en este <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">repositorio de Github</a>!.</p>' +
  '<p><small>La herramienta actualiza la vista una vez al d&iacute;a. Por favor tenga paciencia, tarda un poco en cargar todos los datos.</small></p>'
