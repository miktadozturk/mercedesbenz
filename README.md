### Objective:
The objective of this function is to perform automated testing on the Mercedes-Benz.co.uk website using Cypress. The function is to select Hatchback among the models, then select the A-Class, then Fuel Type as Diesel and write the results to a txt file.

### Inputs:
- carClass.json and models.json: a JSON files containing test data such as models, car class
- ci.yml file for the CI configuration for Github Action

### Flow:
1. Before test, navigate to the mercedes-benz.co.uk website
2. Then find the hatchback from the models
3. After find the "Build your car" option from the A Class options, click it.
4. Then filter fuel type as Diesel
5. And take a screenshots
6. And write the results to a txt file.

### Outputs:
- Verification of models
- Verification of car classes
- Verification of diesel vehicles prices
- For GitHub Action CI, Automatic run the test when the new code is pushed, automatic run the test 1 time every day in the afternoon with scheduled.

### Additional aspects:
- The function uses the Page Object Model design pattern to interact with the mercedes-benz.co.uk website
- CI configured for Github Action

## Usage

Installation Cypress: Open the terminal and type

```
npm install cypress --save-dev
```

After the installation is complete

Then type the terminal

```
npx cypress open
```

If you can get an error message please try with: 

```
node ./node_modules/cypress/bin/cypress open
```

## 
Please make sure to update tests as appropriate.
