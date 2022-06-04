### Lucie Bottin M1-APP-BDIA
# Weather API


#### Construction de la solution

##### Etape 1 : Création du Dockerfile

A partir de l'exemple du TD, il fallait créer un ficher Docker de manière à importer une image de base et installer curl que nous allon utiliser par la suite. 
J'ai décidé d'utiliser un scipt sh.

##### Etape 2 : Ecriture du fichier sh

Afin d'exécuter la requête HTTP avec les variables d'environnements choisies par l'utilisateur qui lancera la commande, il faut adapter la requête. Pour cela nous passons les paramètres directement dans la requête dans un fichier sh de la manière suivante :
```
lat=$LAT / long=$LONG / app_id=$API_KEY
```

##### Etape 3 : Exécuter le fichier sh

Afin de mettre en relation le fichier sh et le dockerfile il faut copier le fichier au bon endroit et le lancer ainsi :
```
COPY file.sh ./
CMD [ "./file.sh" ]
```

##### Etape 4 : Lancer le code

Une fois que notre développement est terminé, on build notre code avec la commande :
```
docker build . -t weatherapi:0.0.1
```
Une fois que c'est build, on peut tester notre commande et run le code avec les paramètres que l'on souhaite :
```
docker run --env LAT="5.902785" --env LONG="102.754175" --env API_KEY=240aa650f4db4e154a07d0459c30a347 weatherapi:0.0.1
```
On obtient donc les données météo à la localisation indiquée :
```
{"coord":{"lon":102.7542,"lat":5.9028},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds" "icon":"04n"}],"base":"stations",
"main":{"temp":300.44,"feels_like":302.41,"temp_min":300.44,"temp_max":300.44,"pressure":1010,"humidity":69,"sea_level":1010,"grnd_level":983},
"visibility":10000,"wind":{"speed":1.46,"deg":110,"gust":1.46},"clouds":{"all":100},"dt":1654353181,"sys":{"country":"MY","sunrise":1654296841,"sunset":1654341646},
"timezone":28800,"id":1736405,"name":"Jertih","cod":200}
```

##### Etape 5 : Push notre code dans docker

Maintenant que notre code est testé et que nous sommes assurés qu'il fonctionne, on peut le push dans docker et enregistrer notre image. On tag l'image pour pouvoir la publier dans le docker hub :
```
docker tag weatherapi:0.0.1 luciebottin/weatherapi:0.0.1
```
On peut maintenant publier l'image dans notre container :
```
docker push luciebottin/weatherapi:0.0.1
```
Notre image docker contient a présent notre code et peut être récupérée par n'importe qui avec la commande pull :
```
docker pull luciebottin/weatherapi:0.0.1
```

##### Etape 6 : Publier le code dans github

Afin que le code pur soit accessible, on push notre code dans un répertoire GitHub publique.

#### Voici les URLs vers mon image DockerHub et mon repo GitHub :

https://hub.docker.com/repository/docker/luciebottin/weatherapi
https://github.com/LucieBottin/devops
