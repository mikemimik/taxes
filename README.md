# Taxes

> A module for calculating Canadian taxation on income

### Installation

```
$ npm install -g taxes
```

### Usage

```
income ----------------+
province --+           |
           |           |
           V           V
taxes {province} {grossIncome}
```

```
# Example: Ontario, $55,000 
taxes ontario 55000
```