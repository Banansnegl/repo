import { Angluar2Page } from './app.po';

describe('angluar2 App', () => {
  let page: Angluar2Page;

  beforeEach(() => {
    page = new Angluar2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
