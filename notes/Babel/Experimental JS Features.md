
```js
// text = anotherFun(capitalize(trim(text)))
// text = text = text |> trim |> capitalize;
```

Line 1: That's nice and still easy to read, but in some cases you may need to apply three or four functions.

`|>` operator here is called pileline operator.
This operator here is called Pipeline Operator and it was designed to avoid nesting function calls.

This is a experimental JS feature and we need to configure babel in order for this to work.

```js
    "plugins": [
        ["@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}]
    ],
```

```js
npm i -save-dev @babel/plugin-proposal-pipeline-operator
```