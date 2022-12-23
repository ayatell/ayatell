function verif()
{
if(formulaire.nom.value == '') // s'il manque le nom, affiche l'alerte !
alert('Merci de saisir votre nom!');
else if(formulaire.msg.value == '') // s'il manque le prénom, affiche l'alerte !
alert('Merci de saisir le commentaire!');
else if(formulaire.nom.value == '' && formulaire.msg.value == ''); // si tous les champs sont vides! affiche l'alerte!
alert('Merci de remplir les champs !');
else (formulaire.go.click());
}
