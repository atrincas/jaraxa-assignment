## Jaraxa Assignment

You can see this project in production on
[https://jaraxa-assignment.pages.dev](https://jaraxa-assignment.pages.dev)

Routes:

- homepage - /: Search with paginated product list
- drugsPage - /drugs/:id: Shows all info related to the drug with the respective application_number

### Tech Stack

- React (Typescript)
- React Router
- Material UI

### Developement

```bash
yarn install
```

```bash
yarn dev
```

### Generating openfda description map

Will generate _openFdaDescriptionMap.json_ that is used to show tooltip info for each openfda
property.

- Download the latest fields yaml file from
  [openfda](https://open.fda.gov/apis/drug/drugsfda/searchable-fields/) and put it in the root of
  this project
- Run the following command to generate the new map

```bash
yarn gen:fields
```
