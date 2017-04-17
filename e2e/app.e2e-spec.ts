import { VtsClientCliPage } from './app.po';

describe('vts-client-cli App', () => {
  let page: VtsClientCliPage;

  beforeEach(() => {
    page = new VtsClientCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
