import { PdpWebsitePage } from './app.po';

describe('pdp-website App', () => {
  let page: PdpWebsitePage;

  beforeEach(() => {
    page = new PdpWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
