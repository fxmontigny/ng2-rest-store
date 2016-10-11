import { Ng2StoreExamplePage } from './app.po';

describe('ng2-store-example App', function() {
  let page: Ng2StoreExamplePage;

  beforeEach(() => {
    page = new Ng2StoreExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
