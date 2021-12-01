<h1 align="center"> APR tools </h1>

<p> tools to convert between APR and APY </p>

<h3> Demo </h3>

```ts

describe('convert test', () => {
  it('convert apr to apy', () => {
    expect(aprToApy(9.3)).toEqual(9.74617334187522);
    expect(aprToApy(15.1)).toEqual(16.299665194576196);
  });
  it('convert apy to apr', () => {
    expect(apyToApr(12.3)).toEqual(11.600367887465119);
    expect(apyToApr(24.7)).toEqual(22.074067738441073);
  });
});

```