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
  '<p><b>Molte voci di Wikipedia non hanno immagini</b> o solo alcune. Alcune di esse parlano di <b>cose che si trovano là fuori</b>, pronte ad essere fotografate. <b>Trovale tutte!</b></p><hr/>' +
  '<p><b>Istruzioni</b></p>' +
  '<p><ul><li>Usa i pulsanti in alto a sinistra per regolare lo zoom o fai doppio click sulla mappa. Puoi anche cliccare su un cluster che si trova nei pressi della zona che vuoi esplorare.</li>' +
  '<li>Usa il pulsante in alto a destra per filtrare i segnaposto per categoria.</li>' +
  '<li>Usa il pulsante in basso a destra per andare alla tua posizione corrente.</li>' +
  '<li>Passa sopra un segnaposto per vederne il nome. Cliccaci sopra per avere maggiori dettagli e collegamenti.</li></ul>' +
  'Scatta fotografie e caricale su Wikimedia Commons, poi risolvi il relativo problema (ad esempio rimuovendo un template nella pagina di discussione o aggiungendo l\'immagine su Wikidata) e al prossimo aggiornamento vedrai il segnaposto scomparire. Ottimo lavoro!' +
  '</p><hr/>' +
  '<p>Per qualunque problema o suggerimento scrivi su <a href="' + talk_page + '" target="_blank">questa pagina</a>. Questo è un progetto open source! Sviluppiamolo insieme su questo <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">repository Github.</a></p>' +
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
  '<p><b>De nombreux articles de Wikipedia ont aucune image</b> ou seulement quelques-unes. Certains d\'entre eux parle de <b>choses qui sont là dehors</b>, prêtes à être photographiées. <b>Trouvez-les toutes !</b></p><hr/>' +
  '<p><b>Instructions</b></p>' +
  '<p><ul><li>Utilisez le bouton dans le coin supérieur gauche ou double-cliquez sur la carte pour régler le zoom. Vous pouvez également cliquer sur un cluster près de l\'endroit que vous souhaitez explorer.</li>' +
  '<li>Utilisez le bouton dans le coin supérieur droit pour filtrer les épingles (icones pointues) par catégorie.</li>' +
  '<li>Utilisez le bouton dans le coin inférieur droit pour accéder à votre position actuelle.</li>' +
  '<li>Passez sur un "épingle" pour voir son nom. Faites un clic pour plus de détails et de liens.</li></ul>' +
  'Prenez des photos et téléchargez-les sur Wikimedia Commons, puis résoudrez l\'alerte (par exemple enlevez le modèle dans sa page ou ajoutez l\'image à Wikidata) et lors de la prochaine exécution vous verrez l\'épingle disparaître. Super boulot !' +
  '</p><hr/>' +
  '<p>Pour tout problème ou suggestion écrivez sur <a href="' + talk_page + '" target="_blank">cette page</a>. Il s\'agit d\'un projet open source ! Nous allons coder ensemble dans ce <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">référentiel Github.</a></p>' +
  '<p><small>L\'outil met à jour l\'Interface une fois par jour. S\'il vous plaît soyez patient, il faut un certain temps pour charger toutes les données.<small></p>'

var message_ES =
  '<p><b>Muchos artículos de Wikipedia tienen pocas imágenes o ninguna</b>. Algunos de ellos hablan de <b>cosas que están ahí</b>, listas para ser fotografiadas. <b>¡Encontradlos todos!</b></p><hr/>' +
  '<p><b>Instrucciones</b></p>' +
  '<p><ul><li>Utilice el botón de arriba a la izquierda o haga doble clic en el mapa para ajustar el zoom. También puede hacer clic en un clúster de cerca de la ubicación que desee explorar.</li>' +
  '<li>Utilice el botón superior derecho para filtrar lugares indicando la categoría.</li>' +
  '<li>Utilice el botón de abajo a la derecha para ir a su posición actual.</li>' +
  '<li>Pase por un lugar para ver su nombre. Haga un clic para ver más detalles y enlaces.</li></ul>' +
  'Haga fotos y súbalas a Wikimedia Commons, después haga caso de la advertencia relacionada (por ejemplo quite la plantilla en su página o añada la imagen a Wikidata) y la próxima vez verá desaparecer los lugares/las imágenes. ¡Buen trabajo!' +
  '</p><hr/>' +
  '<p>Para cualquier problema o sugerencia, escriba a <a href="' + talk_page + '" target="_blank">esta página</a>. Este es un proyecto en código abierto ¡Codificamos juntos en este <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">repositorio de Github</a>!.</p>' +
  '<p><small>La herramienta actualiza la vista una vez al día. Por favor tenga paciencia, tarda un poco en cargar todos los datos.</small></p>'
