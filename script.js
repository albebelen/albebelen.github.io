function generateAngry() {
    var number = Math.floor(Math.random() * 3);
    var phrase;

    switch (number) {
        case 0:
            phrase = "Quanto tempo libero guadagna chi non sta a guardare che cosa il suo vicino abbia detto o fatto o pensato, " +
			"ma si occupa solo delle proprie azioni, perché possano essere giusti e sante, o in armonia con la condotta di chi è buono." +
			"Non badare a un cattivo carattere, ma corri dritto al traguardo senza distrarti." + "<br><br>" + 
            "<i>(Pensieri - Libro IV, 18)</i>" ;
            break;

        case 1:
            phrase = "Non agire mai contro la tua volontà, né egoisticamente, né senza un attento esame, " + 
			"né trascinatovi da motivi opposti: non cercare di abbellire il tuo pensiero con troppa affettazione." 
			+ "<br><br> <i>(Pensieri - Libro III, 5)</i>";
            break;

        case 2:
            phrase = "Nella mente dell’uomo corretto e puro non si potrà trovare mai niente d’infetto e di contaminato, " + 
			"o di sano all’apparenza e marcio dentro." + "<br><br> <i>(Pensieri - Libro III, 8)</i>";;
            break;
    }

    document.getElementById('quoteAngry').innerHTML = phrase;
}

function generateAnxious() {
    var number = Math.floor(Math.random() * 3);
    var phrase;

    switch (number) {
        case 0:
			phrase = "Com’è facile allontanare e cancellare dalla mente ogni pensiero molesto o inopportuno, " + 
			"ed essere subito in calma assoluta!" + "<br><br><i> (Pensieri - Libro V, 2)</i>"; 
			break;

		case 1:
			phrase = "Non immaginare le cose come le giudica il prepotente o come egli vuole che tu le giudichi, " + 
			"ma sappile vedere come effettivamente sono." + "<br><br> <i>(Pensieri - Libro IV, 11)</i>";	
			break;

		case 2:
			phrase = "E’ qui però necessario che ti rammenti come la cura posta in ogni azione ha il suo valore particolare e " + 
			"la sua giusta proporzione; solo così eviterai di scoraggiarti, non occupandoti più di quanto convenga di cose di scarsa importanza." + 
			"<br><br><i> (Pensieri - Libro IV, 32)</i>";
			break;
    }

    document.getElementById('quoteAnxious').innerHTML = phrase;

}