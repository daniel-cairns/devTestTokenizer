# ANZTokenisation module
###### Node -V 10.18.1
###### Ubuntu 20.04
This older version of Nodev was used so that I did not 
break my local setup which has current projects and build scripts running

## Getting started
Navigate to a local folder directory using terminal
\$ cd /path-to-my-local-directory

### Clone repo
\$ git clone --
\$ git checkout origin master

### Dev startup
#### Install local dependencies
\$ npm install

#### Run the dev script to see file changes on the live server using nodemon
\$ npm run dev

#### Env
Environment variables can found in the .env file

### Running the application without dev
\$ npm start

Basic instructions to get started will logged to the terminal
Or you can go to http://localhost:3000

## Curl

# FYI
I know this was a test but there errors in the values provided in your input 
and output strings e.g. miss-placed/missing commas and brackets

## Testing

 {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
# Coding exercise 
 
As part of your technical interview, we would like you to complete a coding exercise. 

## Requirements

Write a simple tokenization service in NodeJs.

The purpose of tokenization is to swap out sensitive data, typically payment card or bank account numbers, with a randomized string with no intrinsic value of its own.

The service should provide two HTTP endpoints, which will tokenize a collection of account numbers and another one to swap back the tokens for the original account numbers

e.g.
    
1) Tokenize - swap a collection of account numbers for tokens
 
POST http://localhost:3000/tokenize 

Input
```
[
  '4111-1111-1111-1111',
  '4444-3333-2222-1111'
  '4444-1111-2222-3333'
]
```

Output
```
[
  {'fvMymE7X0Je1IzMDgWooV5iGBPw0yoFy'}
  'L4hKuBJHxe67ENSKLVbdIH8NhFefPui2',
  'ZA5isc0kVUfvlxTE5m2dxIY8AG76KoP3'
]
```

2) Detokenize - swap back the tokens for the original account numbers 

POST http://localhost:3000/detokenize

Input
```
[
  'fvMymE7X0Je1IzMDgWooV5iGBPw0yoFy',
  'L4hKuBJHxe67ENSKLVbdIH8NhFefPui2',
  'ZA5isc0kVUfvlxTE5m2dxIY8AG76KoP3'
]
```

Output
```
[
'4111-1111-1111-1111',
'4444-3333-2222-1111'
'4444-1111-2222-3333'
]
```

## Evaluation instructions
1. Your solution must use an in-memory database such as LokiJS or any other NoSQL database you're comfortable working with.
2. Your solution must include unit tests.
3. Feel free to include additional NPM libraries or frameworks to complete the exercise
4. Publish your code to a source repository that we can access
5. Provide us with a link to your repository at least a day before you come to see us
6. Ensure that the NodeJs app can be run and can be functionally tested by hitting the endpoints via cuRL.
7. The intent of this coding exercise is to evaluate your approach on providing a simple tokenization service. We are not expecting your code to be production ready (e.g. it does not need to include any security or request validation). We are  estimating this exercise to only take a couple of hours or less.
8. We will have a chat about the design and coding decisions you've made and also discuss any future considerations to get your code into a production environment. 



