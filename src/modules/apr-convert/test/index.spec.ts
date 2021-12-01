import { aprToApy } from './../index';

describe('apr-convert test', () => {
  it('convert apr to apy', () => {
    expect(aprToApy(9.3)).toEqual(9.74617334187522);
    expect(aprToApy(15.1)).toEqual(16.299665194576196);
  });
});
