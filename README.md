# Start the project

Please, at first, run these commands before you could run this app.

```sh
npm install
```

It will reinstall all _node modules_ in your computer.

After that, you will need the _dist_ folder (it contains the code for production), type:

```sh
tsc
```

Finally, for run the project locally, use the command:

```sh
node dist/app.js
```

This will print a message in your console with the URL where the server has been launched.

## API endpoints

This is the list of endpoints created:

### 1. List of fuel types<a name="list-fuel-types"></a>:

Add to your server `/api/fuel/list` to obtain a **list of type fuel** with the **name** and **ID**'s, which you will need later to get its price.

Response example:

```
[
	{
		"id": "1",
		"name": "Gasolina 95 E5"
	},
	{
		"id": "3",
		"name": "Gasolina 98 E5"
	},
	{
		"id": "4",
		"name": "Gasóleo A habitual"
	},
	{
		"id": "5",
		"name": "Gasóleo Premium"
	},
	...
]
```

### 2. List of fuel prices

Add to the given URL `/api/fuel/price/[product]/[zip-code]` replacing these parameters:

 - **[product]**: a valid `id` from the [list of fuel types](#list-fuel-types).
 - **[zip-code]**: the zip code you want ask for.

Response example:

```
[
	{
		"price": "1,637",
		"fuelStation": {
			"addres": "CARRETERA VILLAVERDE A VALLECAS KM. 283",
			"name": "SIMON GRUP",
			"urlGoogleMaps": "https://www.google.es/maps?q=40.373139,-3.638250"
		}
	},
	{
		"price": "1,657",
		"fuelStation": {
			"addres": "CALLE SAN DALMACIO, 13",
			"name": "PLENOIL",
			"urlGoogleMaps": "https://www.google.es/maps?q=40.343250,-3.694917"
		}
	},
	{
		"price": "1,689",
		"fuelStation": {
			"addres": "AVENIDA LOS ROSALES, 15",
			"name": "PLENOIL",
			"urlGoogleMaps": "https://www.google.es/maps?q=40.367528,-3.691194"
		}
	},
	...
]
```